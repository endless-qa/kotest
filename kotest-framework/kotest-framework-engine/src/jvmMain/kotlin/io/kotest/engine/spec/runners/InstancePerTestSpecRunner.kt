package io.kotest.engine.spec.runners

import io.kotest.common.ExperimentalKotest
import io.kotest.common.flatMap
import io.kotest.common.flatten
import io.kotest.core.concurrency.CoroutineDispatcherFactory
import io.kotest.core.config.ProjectConfiguration
import io.kotest.core.spec.Spec
import io.kotest.core.test.NestedTest
import io.kotest.core.test.TestCase
import io.kotest.core.test.TestResult
import io.kotest.core.test.TestScope
import io.kotest.core.test.TestType
import io.kotest.engine.listener.TestEngineListener
import io.kotest.engine.spec.Materializer
import io.kotest.engine.spec.SpecExtensions
import io.kotest.engine.spec.SpecRunner
import io.kotest.engine.test.TestCaseExecutionListener
import io.kotest.engine.test.TestCaseExecutor
import io.kotest.engine.test.scheduler.TestScheduler
import io.kotest.engine.test.scopes.DuplicateNameHandlingTestScope
import io.kotest.mpp.log
import kotlinx.coroutines.coroutineScope
import java.util.concurrent.ConcurrentHashMap
import kotlin.coroutines.CoroutineContext

/**
 * Implementation of [SpecRunner] that executes each [TestCase] in a fresh instance
 * of the [Spec] class.
 *
 * This differs from the [InstancePerLeafSpecRunner] in that
 * every single test, whether of type [TestType.Test] or [TestType.Container], will be
 * executed separately. Branch tests will ultimately be executed once as a standalone
 * test, and also as part of the "path" to any nested tests.
 *
 * So, given the following structure:
 *
 * ```
 * outerTest {
 *   innerTestA {
 *     // test
 *   }
 *   innerTestB {
 *     // test
 *   }
 * }
 * ```
 *
 * Three spec instances will be created. The execution process will be:
 *
 * ```
 * spec1 = instantiate spec
 * spec1.outerTest
 * spec2 = instantiate spec
 * spec2.outerTest
 * spec2.innerTestA
 * spec3 = instantiate spec
 * spec3.outerTest
 * spec3.innerTestB
 * ```
 */
@ExperimentalKotest
internal class InstancePerTestSpecRunner(
   listener: TestEngineListener,
   schedule: TestScheduler,
   private val defaultCoroutineDispatcherFactory: CoroutineDispatcherFactory,
   private val configuration: ProjectConfiguration,
) : SpecRunner(listener, schedule, configuration) {

   private val extensions = SpecExtensions(configuration.registry)
   private val results = ConcurrentHashMap<TestCase, TestResult>()

   /**
    * The intention of this runner is that each [TestCase] executes in its own instance
    * of the containing [Spec] class. Therefore, when we begin executing a test case from
    * the queue, we must first instantiate a new spec, and begin execution on _that_ instance.
    *
    * As test lambdas are executed, nested test cases will be registered, these should be ignored
    * if they are not an ancestor of the target. If they are then we can step into them, and
    * continue recursively until we find the target.
    *
    * Once the target is found it can be executed as normal, and any test lambdas it contains
    * can be registered back with the stack for execution later.
    */
   override suspend fun execute(spec: Spec): Result<Map<TestCase, TestResult>> =
      runCatching {
         launch(spec) {
            executeInCleanSpec(it)
               .getOrThrow()
         }
         results
      }

   /**
    * The intention of this runner is that each [TestCase] executes in its own instance
    * of the containing [Spec] class. Therefore, when we begin executing a test case from
    * the queue, we must first instantiate a new spec, and begin execution on _that_ instance.
    *
    * As test lambdas are executed, nested test cases will be registered, these should be ignored
    * if they are not an ancestor of the target. If they are then we can step into them, and
    * continue recursively until we find the target.
    *
    * Once the target is found it can be executed as normal, and any test lambdas it contains
    * can be registered back with the stack for execution later.
    */
   private suspend fun executeInCleanSpec(test: TestCase): Result<Spec> {
      return createInstance(test.spec::class)
         .flatMap { spec ->
            runCatching {
               extensions.intercept(spec) {
                  extensions.beforeSpec(spec)
                     .flatMap { run(it, test) }
                     .flatMap { extensions.afterSpec(it) }
               } ?: error("Failed to initialize spec ${test.spec::class.simpleName}")
            }.flatten()
         }
   }

   private suspend fun run(spec: Spec, test: TestCase): Result<Spec> = kotlin.runCatching {
      log { "Created new spec instance $spec" }
      // we need to find the same root test but in the newly created spec
      val root = materializer.materialize(spec).first { it.descriptor.isOnPath(test.descriptor) }
      log { "Starting root test ${root.descriptor} in search of ${test.descriptor}" }
      run(root, test)
      spec
   }

   private suspend fun run(test: TestCase, target: TestCase) {
      val isTarget = test.descriptor == target.descriptor
      coroutineScope {
         val context = object : TestScope {

            override val testCase: TestCase = test
            override val coroutineContext: CoroutineContext = this@coroutineScope.coroutineContext
            override suspend fun registerTestCase(nested: NestedTest) {

               val t = Materializer(configuration).materialize(nested, testCase)

               // if we are currently executing the target, then any registered tests are new, and we
               // should begin execution of them in fresh specs
               // otherwise if the test is on the path we can continue in the same spec
               if (isTarget) {
                  executeInCleanSpec(t).getOrThrow()
               } else if (t.descriptor.isOnPath(target.descriptor)) {
                  run(t, target)
               }
            }
         }
         val context2 = DuplicateNameHandlingTestScope(configuration.duplicateTestNameMode, context)
         val testExecutor = TestCaseExecutor(
            object : TestCaseExecutionListener {
               override suspend fun testStarted(testCase: TestCase) {
                  if (isTarget) listener.testStarted(testCase)
               }

               override suspend fun testIgnored(testCase: TestCase, reason: String?) {
                  if (isTarget) listener.testIgnored(testCase, reason)
               }

               override suspend fun testFinished(testCase: TestCase, result: TestResult) {
                  if (isTarget) listener.testFinished(testCase, result)
               }
            },
            defaultCoroutineDispatcherFactory,
            configuration
         )

         val result = testExecutor.execute(test, context2)
         results[test] = result
      }
   }
}
