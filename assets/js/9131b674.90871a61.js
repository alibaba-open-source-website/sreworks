"use strict";(self.webpackChunksreworks=self.webpackChunksreworks||[]).push([[1122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),k=s(n),p=i,u=k["".concat(o,".").concat(p)]||k[p]||f[p]||l;return n?r.createElement(u,a(a({ref:t},d),{},{components:n})):r.createElement(u,a({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=k;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},47423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const l={title:"6.1 \u90e8\u7f72Flink\u4e91\u539f\u751f\u5f00\u6e90\u7248"},a=void 0,c={unversionedId:"cgczgu",id:"version-v1.2/cgczgu",title:"6.1 \u90e8\u7f72Flink\u4e91\u539f\u751f\u5f00\u6e90\u7248",description:"\u8be5\u6587\u6863\u63cf\u8ff0\u5728SREWorks\u4e2d\uff0c\u4ece0\u52301\u5efa\u7acb\u4e00\u4e2aFlink\u4e91\u539f\u751f\u5e94\u7528\u5b9a\u4e49\uff0c\u53d1\u5e03Flink\u5e94\u7528\u5230\u5e02\u573a\uff0c\u5e76\u4ea4\u4ed8\u90e8\u7f72Flink\u5e94\u7528\u7684\u5b8c\u6574\u8fc7\u7a0b\u3002",source:"@site/versioned_docs/version-v1.2/cgczgu.md",sourceDirName:".",slug:"/cgczgu",permalink:"/docs/docs/cgczgu",draft:!1,editUrl:"https://www.yuque.com/sreworks-doc/docs/cgczgu",tags:[],version:"v1.2",frontMatter:{title:"6.1 \u90e8\u7f72Flink\u4e91\u539f\u751f\u5f00\u6e90\u7248"},sidebar:"sidebars",previous:{title:"5.1.1 \u8fd0\u7ef4\u524d\u7aef\u7ec4\u4ef6\u5f00\u53d1",permalink:"/docs/docs/ngx61f"},next:{title:"7.1 \u5e38\u89c1\u95ee\u9898",permalink:"/docs/docs/iwa896"}},o={},s=[{value:"1 \u65b0\u5efaFlink\u5e94\u7528",id:"1-\u65b0\u5efaflink\u5e94\u7528",level:3},{value:"2 \u6dfb\u52a0Flink\u5e94\u7528\u7ec4\u4ef6",id:"2-\u6dfb\u52a0flink\u5e94\u7528\u7ec4\u4ef6",level:3},{value:"3 Flink \u5e94\u7528\u6784\u5efa",id:"3-flink-\u5e94\u7528\u6784\u5efa",level:3},{value:"4 Flink\u5e94\u7528\u6d4b\u8bd5\u90e8\u7f72",id:"4-flink\u5e94\u7528\u6d4b\u8bd5\u90e8\u7f72",level:3},{value:"5 Flink\u5e94\u7528\u53d1\u5e03\u4e0a\u67b6",id:"5-flink\u5e94\u7528\u53d1\u5e03\u4e0a\u67b6",level:3},{value:"7 Flink\u5e94\u7528\u90e8\u7f72",id:"7-flink\u5e94\u7528\u90e8\u7f72",level:3},{value:"8 Flink\u5e94\u7528\u5b9e\u4f8b\u7ba1\u7406",id:"8-flink\u5e94\u7528\u5b9e\u4f8b\u7ba1\u7406",level:3}],d={toc:s};function f(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8be5\u6587\u6863\u63cf\u8ff0\u5728SREWorks\u4e2d\uff0c\u4ece0\u52301\u5efa\u7acb\u4e00\u4e2aFlink\u4e91\u539f\u751f\u5e94\u7528\u5b9a\u4e49\uff0c\u53d1\u5e03Flink\u5e94\u7528\u5230\u5e02\u573a\uff0c\u5e76\u4ea4\u4ed8\u90e8\u7f72Flink\u5e94\u7528\u7684\u5b8c\u6574\u8fc7\u7a0b\u3002"),(0,i.kt)("a",{name:"HutKe"}),(0,i.kt)("h3",{id:"1-\u65b0\u5efaflink\u5e94\u7528"},"1 \u65b0\u5efaFlink\u5e94\u7528"),(0,i.kt)("p",null,"\u767b\u5f55SREWorks\u540e\uff0c\u8fdb\u5165\u201c\u4ea4\u4ed8/\u5e94\u7528\u7ba1\u7406-\u5e94\u7528\u5f00\u53d1\u201d\u9875\u9762\uff0c\u70b9\u51fb\u201c\u65b0\u5efa\u4e91\u539f\u751f\u5e94\u7528\u201d\uff0c\u5728\u6ed1\u51fa\u7684\u8868\u5355\u4e2d\u8f93\u5165Flink\u5e94\u7528\u5b9a\u4e49\u76f8\u5173\u4fe1\u606f\uff0c\u5b8c\u6210Flink\u5e94\u7528\u6a21\u677f\u5b9a\u4e49",(0,i.kt)("br",null),(0,i.kt)("img",{alt:"image.png",src:n(11267).Z,width:"2866",height:"1508"})),(0,i.kt)("p",null,"\u5728\u5e94\u7528\u5f00\u53d1\u6a21\u677f\u5217\u8868\u4e0b\uff0c\u70b9\u51fb\u5e94\u7528\u5b9a\u4e49\u540d\u79f0\uff0c\u8fdb\u5165\u5e94\u7528\u5f00\u53d1\u9875\u9762",(0,i.kt)("br",null),(0,i.kt)("img",{alt:"image.png",src:n(14242).Z,width:"2878",height:"1524"})),(0,i.kt)("a",{name:"lAX7o"}),(0,i.kt)("h3",{id:"2-\u6dfb\u52a0flink\u5e94\u7528\u7ec4\u4ef6"},"2 \u6dfb\u52a0Flink\u5e94\u7528\u7ec4\u4ef6"),(0,i.kt)("p",null,"\u8fdb\u5165Flink\u5e94\u7528\u6a21\u677f\u540e\uff0c\u5728\u5e94\u7528\u7ec4\u4ef6\u4e2d\u6dfb\u52a0\u201cHelm\u201d\u7ec4\u4ef6\u7c7b\u578b\uff0c\u5c06Flink\u4e2d\u7684VVP\u7ec4\u4ef6\u6dfb\u52a0\u8fdb\u6765",(0,i.kt)("br",null),(0,i.kt)("img",{alt:"image.png",src:n(42662).Z,width:"2428",height:"1392"})),(0,i.kt)("a",{name:"U19f2"}),(0,i.kt)("h3",{id:"3-flink-\u5e94\u7528\u6784\u5efa"},"3 Flink \u5e94\u7528\u6784\u5efa"),(0,i.kt)("p",null,"\u5728\u5b8c\u6210\u7ec4\u4ef6\u6dfb\u52a0\u540e\uff0c\u53ef\u4ee5\u5728\u201c\u5e94\u7528\u6784\u5efa\u201d\u9875\u9762\u8fdb\u884c\u4e00\u952e\u6784\u5efa\uff0c\u5f53\u524d\u4e00\u952e\u6784\u5efa\u4f1a\u81ea\u52a8\u8ba1\u7b97\u7248\u672c\uff0c\u521b\u5efa\u6784\u5efa\u4efb\u52a1\u540e\uff0c\u5728\u6784\u5efa\u5217\u8868\u4e2d\u53ef\u67e5\u770b\u521a\u521a\u63d0\u4ea4\u7684\u6784\u5efa\u4efb\u52a1\u3002",(0,i.kt)("br",null),(0,i.kt)("img",{alt:"image.png",src:n(21623).Z,width:"2866",height:"1494"}),(0,i.kt)("br",null),"\u6784\u5efa\u5b8c\u6210\u540e\uff0c\u5373\u53ef\u5728\u6784\u5efa\u5217\u8868\u4e2d\u5c55\u793a\u5f53\u524d\u6784\u5efa\u7684\u5e94\u7528\u53ca\u7ec4\u4ef6\u6784\u5efa\u72b6\u6001\uff0c\u540c\u65f6\u53ef\u4ee5\u5728\u64cd\u4f5c\u4e2d\u4e00\u952e\u90e8\u7f72\u6d4b\u8bd5\u548c\u4e0a\u67b6\u5e02\u573a\u3002"),(0,i.kt)("a",{name:"K8I4C"}),(0,i.kt)("h3",{id:"4-flink\u5e94\u7528\u6d4b\u8bd5\u90e8\u7f72"},"4 Flink\u5e94\u7528\u6d4b\u8bd5\u90e8\u7f72"),(0,i.kt)("p",null,"\u5e94\u7528\u6d4b\u8bd5\u5b9e\u4f8b\u652f\u6301\u591a\u5957\u90e8\u7f72\uff0c\u5e76\u4f1a\u81ea\u52a8\u751f\u6210\u5168\u5c40\u552f\u4e00\u7684\u5b9e\u4f8b\u540d\uff0c\u89c4\u5219\u4e3a\u201c\u5e94\u7528\u540d-uid\u201d\u3002\u8be5\u5b9e\u4f8b\u88ab\u90e8\u7f72\u5728\u540c\u540d\u7684namespace\u4e0b\u3002",(0,i.kt)("br",null),(0,i.kt)("img",{alt:"image.png",src:n(96175).Z,width:"2868",height:"1494"}),(0,i.kt)("br",null),"\u7528\u6237\u53ef\u81ea\u884c\u5bf9\u5e94\u7528\u8fdb\u884c\u6d4b\u8bd5\uff0c\u6d4b\u8bd5\u901a\u8fc7\u540e\uff0c\u53ef\u9009\u62e9\u4e00\u952e\u53d1\u5e03\u5230\u5e02\u573a\u7684\u64cd\u4f5c\u5c06\u5e94\u7528\u7248\u672c\u53d1\u5e03\u5230\u5e02\u573a\u4e2d\u3002"),(0,i.kt)("a",{name:"iBcye"}),(0,i.kt)("h3",{id:"5-flink\u5e94\u7528\u53d1\u5e03\u4e0a\u67b6"},"5 Flink\u5e94\u7528\u53d1\u5e03\u4e0a\u67b6"),(0,i.kt)("p",null,"\u901a\u8fc7\u6784\u5efa\u5217\u8868\u4e2d\u6307\u5b9a\u6784\u5efa\u4efb\u52a1\u7684\u201c\u4e0a\u67b6\u5e02\u573a\u201d\u64cd\u4f5c\u5b8c\u6210\u5e94\u7528\u5230\u5e02\u573a\u7684\u53d1\u5e03\u3002",(0,i.kt)("img",{alt:"image.png",src:n(41435).Z,width:"2850",height:"1400"})),(0,i.kt)("a",{name:"Puqg4"}),(0,i.kt)("h3",{id:"7-flink\u5e94\u7528\u90e8\u7f72"},"7 Flink\u5e94\u7528\u90e8\u7f72"),(0,i.kt)("p",null,"\u5728\u5e02\u573a\u4e2d\u53ef\u4ee5\u6307\u5b9a\u5e94\u7528\u4e00\u952e\u90e8\u7f72\uff0c\u5f53\u524d\u9ed8\u8ba4\u90e8\u7f72\u5e94\u7528\u7684\u6700\u65b0\u7248\u672c\u3002",(0,i.kt)("img",{alt:"image.png",src:n(59611).Z,width:"2866",height:"1086"})),(0,i.kt)("a",{name:"RfvwI"}),(0,i.kt)("h3",{id:"8-flink\u5e94\u7528\u5b9e\u4f8b\u7ba1\u7406"},"8 Flink\u5e94\u7528\u5b9e\u4f8b\u7ba1\u7406"),(0,i.kt)("p",null,"\u5e94\u7528\u5b9e\u4f8b\u5217\u8868\u5c55\u793a\u5f53\u524d\u90e8\u7f72\u5728prod\u7684\u4f01\u4e1a\u5e94\u7528\u751f\u4ea7\u5b9e\u4f8b\uff0c\u5e76\u63d0\u4f9b\u5347\u7ea7\u3001\u56de\u6eda\u3001\u5378\u8f7d\u64cd\u4f5c\u3002",(0,i.kt)("br",null),(0,i.kt)("img",{alt:"image.png",src:n(71408).Z,width:"2860",height:"1488"})))}f.isMDXComponent=!0},11267:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1648179543731-7c274522-0974-48d8-97ce-91f976684883-c38e99487c8cca48f05a11c0270a3e02.png"},14242:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1648179543893-646e35b5-c374-43d4-9ffa-315da591bf7f-62390416763a73bb71662e43c3dbc8fe.png"},42662:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1648179544056-45bf7670-1825-4cd2-9d57-fc1566b6d2a4-27e96ec59408bfb0b79ea5136f5f2b0d.png"},21623:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1648179544228-9376276c-b67b-4fce-9dea-d0bd5a20cb88-2f9a3e68ceb7d3cb2d58abb9839792f7.png"},96175:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1648179544422-00b08297-bc16-44f8-bb77-ff1eabba8cbf-920647c97693cf18788c984201fff153.png"},41435:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1648179544579-fdb766c8-1f14-49cc-a6d7-7e8f683d9560-8aa1e60debe9d15967c7a6ec63943b78.png"},59611:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1648179544732-cf64925e-852d-4305-b347-c5d4f635d0e8-5632ecbd879e09fc43f51883798a3505.png"},71408:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1648179544887-620a7b87-072c-4488-b530-0f4d2bd13e93-58e51504174d5933b87f89b3b022f0e7.png"}}]);