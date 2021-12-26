"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[5685],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8464:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),c=["components"],a={},l="Source lines of Code",s={unversionedId:"metrics/source-lines-of-code",id:"metrics/source-lines-of-code",title:"Source lines of Code",description:"Source lines of Code is an approximate number of source code lines in a function or method. Blank or comment lines are not counted.",source:"@site/docs/metrics/source-lines-of-code.md",sourceDirName:"metrics",slug:"/metrics/source-lines-of-code",permalink:"/docs/metrics/source-lines-of-code",editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/metrics/source-lines-of-code.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Number of Parameters",permalink:"/docs/metrics/number-of-parameters"},next:{title:"Technical Debt",permalink:"/docs/metrics/technical_debt"}},u=[{value:"Used for",id:"used-for",children:[],level:2},{value:"Config example",id:"config-example",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],p={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"source-lines-of-code"},"Source lines of Code"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Source lines of Code")," is an approximate number of source code lines in a function or method. Blank or comment lines are not counted."),(0,i.kt)("p",null,"This metric is used to measure the size of a computer program by counting the number of lines in the text of the program's source code. ",(0,i.kt)("strong",{parentName:"p"},"SLOC")," is typically used to predict the amount of effort that will be required to develop a program, as well as to estimate programming productivity or maintainability once the software is produced."),(0,i.kt)("h2",{id:"used-for"},"Used for"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/anti-patterns/long-method"},"Long Method"))),(0,i.kt)("h2",{id:"config-example"},"Config example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_metrics:\n  ...\n  metrics:\n    ...\n    source-lines-of-code: 50\n    ...\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"MetricComputationResult<int> computeImplementation(\n  Declaration node,\n  Iterable<ScopedClassDeclaration> classDeclarations,\n  Iterable<ScopedFunctionDeclaration> functionDeclarations,\n  InternalResolvedUnitResult source,\n) {\n  final visitor = SourceCodeVisitor(source.lineInfo);\n  node.visitChildren(visitor);\n\n  return MetricComputationResult(\n    value: visitor.linesWithCode.length,\n    context: _context(node, visitor.linesWithCode, source),\n  );\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Source lines of Code")," for the example function is ",(0,i.kt)("strong",{parentName:"p"},"6"),"."))}m.isMDXComponent=!0}}]);