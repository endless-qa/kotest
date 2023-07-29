package com.sksamuel.kotest.engine

import io.kotest.core.extensions.ProjectExtension
import io.kotest.core.extensions.SpecExtension
import io.kotest.core.extensions.TestCaseExtension
import io.kotest.core.project.ProjectContext
import io.kotest.core.spec.Spec
import io.kotest.core.spec.style.FunSpec
import io.kotest.core.test.TestCase
import io.kotest.core.test.TestResult
import io.kotest.engine.TestEngineLauncher
import io.kotest.engine.listener.CollectingTestEngineListener
import io.kotest.matchers.shouldBe

class LifecycleOrderTest : FunSpec() {
   init {

      test("project, spec and test interceptors should wrap each other") {
         val collector = CollectingTestEngineListener()
         TestEngineLauncher(collector)
            .withClasses(LifecycleTests::class)
            .withExtensions(LifecycleExtension)
            .launch()
         collector.names shouldBe listOf("foo", "bar")
         LifecycleExtension.state shouldBe listOf(
            Pair(Lifecycle.PROJECT, Phase.ENTRY),
            Pair(Lifecycle.SPEC, Phase.ENTRY),
            Pair(Lifecycle.TEST_CASE, Phase.ENTRY),
            Pair(Lifecycle.TEST_CASE, Phase.EXIT),
            Pair(Lifecycle.TEST_CASE, Phase.ENTRY),
            Pair(Lifecycle.TEST_CASE, Phase.EXIT),
            Pair(Lifecycle.SPEC, Phase.EXIT),
            Pair(Lifecycle.PROJECT, Phase.EXIT),
         )
      }
   }
}

private class LifecycleTests : FunSpec() {
   init {
      test("foo") {}
      test("bar") {}
   }
}

enum class Lifecycle {
   PROJECT,
   SPEC,
   TEST_CASE
}

enum class Phase {
   ENTRY,
   EXIT
}

private object LifecycleExtension : ProjectExtension, SpecExtension, TestCaseExtension {

   val state = mutableListOf<Pair<Lifecycle, Phase>>()

   override suspend fun interceptProject(context: ProjectContext, callback: suspend (ProjectContext) -> Unit) {
      state.add(Pair(Lifecycle.PROJECT, Phase.ENTRY))
      callback(context)
      state.add(Pair(Lifecycle.PROJECT, Phase.EXIT))
   }

   override suspend fun intercept(spec: Spec, execute: suspend (Spec) -> Unit) {
      state.add(Pair(Lifecycle.SPEC, Phase.ENTRY))
      execute(spec)
      state.add(Pair(Lifecycle.SPEC, Phase.EXIT))
   }

   override suspend fun intercept(testCase: TestCase, execute: suspend (TestCase) -> TestResult): TestResult {
      state.add(Pair(Lifecycle.TEST_CASE, Phase.ENTRY))
      val result = execute(testCase)
      state.add(Pair(Lifecycle.TEST_CASE, Phase.EXIT))
      return result
   }
}
