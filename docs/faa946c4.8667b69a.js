(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(159)),i={id:"junit_xml",title:"JUnit XML Format Reporter",sidebar_label:"JUnit XML",slug:"junit_xml.html"},s={unversionedId:"extensions/junit_xml",id:"extensions/junit_xml",isDocsHomePage:!1,title:"JUnit XML Format Reporter",description:"JUnit includes an XML report generator that it calls",source:"@site/docs/extensions/junit_xml.md",slug:"/extensions/junit_xml.html",permalink:"/docs/extensions/junit_xml.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/extensions/junit_xml.md",version:"current",sidebar_label:"JUnit XML",sidebar:"extensions",previous:{title:"MockServer",permalink:"/docs/extensions/mockserver.html"},next:{title:"Allure",permalink:"/docs/extensions/allure.html"}},l=[{value:"Parameters",id:"parameters",children:[]}],c={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"JUnit includes an XML report generator that it calls\nthe ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://junit.org/junit5/docs/5.5.0-RC2/api/org/junit/platform/reporting/legacy/xml/LegacyXmlReportGeneratingListener.html"}),"legacy xml report"),"\n. Many tools integrate with this format so it is very useful. However, this report has no concept of nesting tests.\nTherefore when used with a nested ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/framework/testing-styles.html"}),"test style")," in Kotest, it will include parent tests as\norphans."),Object(a.b)("p",null,"To solve this, Kotest has it's own implementation of the same format, that is configurable on whether to include parent\ntests and/or collapse the names."),Object(a.b)("p",null,"To set this up, we need to add the ",Object(a.b)("inlineCode",{parentName:"p"},"JunitXmlReporter")," to our project\nthrough ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/framework/project-config.html"}),"project config"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),"class MyConfig : AbstractProjectConfig() {\n  override fun listeners(): List<Listener> = listOf(\n    JunitXmlReporter(\n      includeContainers = false,\n      useTestPathAsName = true\n    )\n  )\n}\n")),Object(a.b)("p",null,"Additionally, the reporter needs to know where your build output folder is by setting a system property, so we configure\nthat in the tests block in gradle."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'tasks.named<Test>("test") {\n  useJUnitPlatform()\n  systemProperty("gradle.build.dir", project.buildDir)\n}\n')),Object(a.b)("h3",{id:"parameters"},"Parameters"),Object(a.b)("p",null,"The reporter has two parameters:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"includeContainers")," when true, all intermediate tests are included in the report as tests in their own right. Defaults\nto false."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"useTestPathAsName")," when true, the full test path will be used as the name. In other words the name will include the\nname of any parent tests as a single string.")))}u.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||a;return n?o.a.createElement(d,s(s({ref:t},c),{},{components:n})):o.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);