"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[19935],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||s;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={id:"test_names",title:"Data Test Names",slug:"custom-test-names.html",sidebar_label:"Data Test Names"},i=void 0,o={unversionedId:"framework/datatesting/test_names",id:"version-5.4/framework/datatesting/test_names",title:"Data Test Names",description:"By default, the name of each test is simply the toString() on the input row.",source:"@site/versioned_docs/version-5.4/framework/datatesting/test_names.md",sourceDirName:"framework/datatesting",slug:"/framework/datatesting/custom-test-names.html",permalink:"/docs/5.4/framework/datatesting/custom-test-names.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.4/framework/datatesting/test_names.md",tags:[],version:"5.4",frontMatter:{id:"test_names",title:"Data Test Names",slug:"custom-test-names.html",sidebar_label:"Data Test Names"},sidebar:"framework",previous:{title:"Introduction",permalink:"/docs/5.4/framework/datatesting/data-driven-testing.html"},next:{title:"Nested Data Tests",permalink:"/docs/5.4/framework/datatesting/nested-tests.html"}},l={},p=[{value:"Stable Names",id:"stable-names",level:3},{value:"Using a map",id:"using-a-map",level:3},{value:"Test Name Function",id:"test-name-function",level:3},{value:"WithDataTestName",id:"withdatatestname",level:3}],m={toc:p};function c(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By default, the name of each test is simply the ",(0,r.kt)("inlineCode",{parentName:"p"},"toString()")," on the input row.\nThis typically works well for data classes on the JVM but requires the input rows to be ",(0,r.kt)("em",{parentName:"p"},"stable"),"."),(0,r.kt)("p",null,"However, we can specify how the test names are generated if we are not using stable data classes, or if we are\nexecuting on a non-JVM target, or simply wish to customize."),(0,r.kt)("h3",{id:"stable-names"},"Stable Names"),(0,r.kt)("p",null,"When generating tests, Kotest needs a ",(0,r.kt)("em",{parentName:"p"},"stable")," test name over the course of the test suite execution.\nThe test name is used as the basis of an identifier that points to a test when notifying gradle or intellij of a test status.\nIf the name is not stable, then the id can change, leading to errors where\ntests don't appear, or look like they didn't complete."),(0,r.kt)("p",null,"Kotest will only use the ",(0,r.kt)("inlineCode",{parentName:"p"},"toString()")," of the input class if it thinks the input class has a stable ",(0,r.kt)("inlineCode",{parentName:"p"},"toString()")," value\notherwise it will use the class name."),(0,r.kt)("p",null,"You can force Kotest to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"toString()")," for test names by annotating your type with ",(0,r.kt)("inlineCode",{parentName:"p"},"@IsStableType"),". Then\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"toString()")," will be used regardless."),(0,r.kt)("p",null,"Alternatively, you can completely customize the display name of the test."),(0,r.kt)("h3",{id:"using-a-map"},"Using a map"),(0,r.kt)("p",null,"Kotest allows specifying test names by passing a map into the ",(0,r.kt)("inlineCode",{parentName:"p"},"withData")," function,\nwhere the key is the test name, and the value is the input value for that row."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'context("Pythag triples tests") {\n  withData(\n    mapOf(\n      "3, 4, 5" to PythagTriple(3, 4, 5),\n      "6, 8, 10" to PythagTriple(6, 8, 10),\n      "8, 15, 17" to PythagTriple(8, 15, 17),\n      "7, 24, 25" to PythagTriple(7, 24, 25)\n    )\n  ) { (a, b, c) ->\n    a * a + b * b shouldBe c * c\n  }\n}\n')),(0,r.kt)("h3",{id:"test-name-function"},"Test Name Function"),(0,r.kt)("p",null,"Or we can pass a function to ",(0,r.kt)("inlineCode",{parentName:"p"},"withData")," which takes the ",(0,r.kt)("em",{parentName:"p"},"row")," as input and return the test name. Depending on how\ngenerous the Kotlin type inference is feeling, you may need to specify the type parameter to the ",(0,r.kt)("em",{parentName:"p"},"withData")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'context("Pythag triples tests") {\n  withData<PythagTriple>(\n    nameFn = { "${it.a}__${it.b}__${it.c}" },\n    PythagTriple(3, 4, 5),\n    PythagTriple(6, 8, 10),\n    PythagTriple(8, 15, 17),\n    PythagTriple(7, 24, 25)\n  ) { (a, b, c) ->\n    a * a + b * b shouldBe c * c\n  }\n}\n')),(0,r.kt)("p",null,"The output from this example is now slightly clearer:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"data test example output",src:n(94799).Z,width:"527",height:"259"})),(0,r.kt)("h3",{id:"withdatatestname"},"WithDataTestName"),(0,r.kt)("p",null,"Another alternative is to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"WithDataTestName")," interface. When provided, the ",(0,r.kt)("inlineCode",{parentName:"p"},"toString()")," will not be used,\ninstead the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataTestName()")," function from that interface will be invoked for each row."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'data class PythagTriple(val a: Int, val b: Int, val c: Int) : WithDataTestName {\n  override fun dataTestName() = "wibble $a, $b, $c wobble"\n}\n')))}c.isMDXComponent=!0},94799:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/datatest3-61c742b23508b1da55388fea50d7f996.png"}}]);