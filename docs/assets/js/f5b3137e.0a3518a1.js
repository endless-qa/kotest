"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[26874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||o;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},77370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={id:"test_case_config",title:"Test Case Config",slug:"testcaseconfig.html"},r=void 0,s={unversionedId:"framework/test_case_config",id:"version-5.3/framework/test_case_config",title:"Test Case Config",description:"Each test can be configured with various parameters. After the test name, invoke the config function",source:"@site/versioned_docs/version-5.3/framework/test_case_config.md",sourceDirName:"framework",slug:"/framework/testcaseconfig.html",permalink:"/docs/5.3/framework/testcaseconfig.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/framework/test_case_config.md",tags:[],version:"5.3",frontMatter:{id:"test_case_config",title:"Test Case Config",slug:"testcaseconfig.html"},sidebar:"framework",previous:{title:"Temporary Files",permalink:"/docs/5.3/framework/temporary-files"},next:{title:"Project Level Config",permalink:"/docs/5.3/framework/project-config.html"}},l={},c=[],u={toc:c};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Each test can be configured with various parameters. After the test name, invoke the config function\npassing in the parameters you wish to set. The available parameters are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"invocations")," - The number of times to run this test. Useful if you have a non-deterministic test and you want to run that particular test a set number of times to see if it eventually fails. A test will only succeed if all invocations succeed. Defaults to 1."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"threads")," - Allows the invocation of this test to be parallelized by setting the number of threads. Value must be less or equal of invocations value. Similarly, if you set invocations to a value equal to the number threads, then each invocation will have its own thread."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," - If set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," then this test is ",(0,i.kt)("a",{parentName:"li",href:"/docs/5.3/framework/conditional-evaluation.html"},"disabled"),". Can be useful if a test needs to be temporarily ignored. You can also use this parameter with boolean expressions to run a test only under certain conditions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enabledIf")," - A function which provides the same ability as ",(0,i.kt)("inlineCode",{parentName:"li"},"enabled")," but is lazily evaluated when the test case is due for execution."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"timeout")," - sets a timeout for this test. If the test has not finished in that time then the test fails. Useful for code that is non-deterministic and might not finish. Timeout is of type ",(0,i.kt)("inlineCode",{parentName:"li"},"kotlin.Duration")," which can be instantiated like ",(0,i.kt)("inlineCode",{parentName:"li"},"2.seconds"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"3.minutes")," and so on."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tags")," - a set of tags that can be used to group tests (see detailed description below)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"listeners")," - register ",(0,i.kt)("a",{parentName:"li",href:"/docs/5.3/framework/extensions/extensions-introduction.html"},"test listeners")," to run only on this test."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"extensions")," - register extensions to run only on this test.")),(0,i.kt)("p",null,"An example of setting config on a test:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : ShouldSpec() {\n  init {\n    should("return the length of the string").config(invocations = 10, threads = 2) {\n      "sammy".length shouldBe 5\n      "".length shouldBe 0\n    }\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyTests : WordSpec() {\n  init {\n    "String.length" should {\n      "return the length of the string".config(timeout = 2.seconds) {\n        "sammy".length shouldBe 5\n        "".length shouldBe 0\n      }\n    }\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class FunSpecTest : FunSpec() {\n  init {\n    test("FunSpec should support config syntax").config(tags = setOf(Database, Linux)) {\n      // ...\n    }\n  }\n}\n')),(0,i.kt)("p",null,"You can also specify a default TestCaseConfig for all test cases of a Spec:"),(0,i.kt)("p",null,"Overriding the defaultTestCaseConfig function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MySpec : StringSpec() {\n\n  override fun defaultTestCaseConfig() = TestCaseConfig(invocations = 3)\n\n  init {\n    // your test cases ...\n  }\n}\n")),(0,i.kt)("p",null,"Or via assignment to the defaultTestConfig val:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'class FunSpecTest : FunSpec() {\n  init {\n\n    defaultTestConfig = TestCaseConfig(enabled = true, invocations = 3)\n\n    test("FunSpec should support Spec config syntax in init{} block") {\n      // ...\n    }\n  }\n}\n')))}f.isMDXComponent=!0}}]);