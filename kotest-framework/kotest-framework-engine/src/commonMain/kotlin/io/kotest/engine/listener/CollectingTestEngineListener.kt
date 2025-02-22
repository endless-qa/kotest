package io.kotest.engine.listener

import io.kotest.common.concurrentHashMap
import io.kotest.core.descriptors.Descriptor
import io.kotest.core.names.TestName
import io.kotest.core.spec.Spec
import io.kotest.core.test.TestCase
import io.kotest.core.test.TestResult
import kotlin.reflect.KClass

class CollectingTestEngineListener : AbstractTestEngineListener() {

   val specs = concurrentHashMap<KClass<*>, TestResult>()
   val tests = concurrentHashMap<TestCaseKey, TestResult>()
   val names = mutableListOf<String>()
   var errors = false

   fun result(descriptor: Descriptor.TestDescriptor): TestResult? = tests.mapKeys { it.key.descriptor }[descriptor]
   fun result(testname: String): TestResult? = tests.mapKeys { it.key.name.testName }[testname]

   override suspend fun specFinished(kclass: KClass<*>, result: TestResult) {
      specs[kclass] = result
      if (result.isErrorOrFailure) errors = true
   }

   override suspend fun specIgnored(kclass: KClass<*>, reason: String?) {
      specs[kclass] = TestResult.Ignored(reason)
   }

   override suspend fun testIgnored(testCase: TestCase, reason: String?) {
      tests[testCase.toKey()] = TestResult.Ignored(reason)
      names.add(testCase.name.testName)
   }

   override suspend fun testFinished(testCase: TestCase, result: TestResult) {
      tests[testCase.toKey()] = result
      if (result.isFailure || result.isError) errors = true
      names.add(testCase.name.testName)
   }

   override suspend fun engineFinished(t: List<Throwable>) {
      if (t.isNotEmpty()) errors = true
   }

   /**
    * The purpose of this class is to reduce the footprint of the data collected and retained about each test
    * through the whole test suite.
    */
   data class TestCaseKey(
      val descriptor: Descriptor.TestDescriptor,
      val name: TestName,
      val specClass: KClass<out Spec>,
   )

   fun TestCase.toKey(): TestCaseKey {
      return TestCaseKey(this.descriptor, this.name, this.spec::class)
   }
}
