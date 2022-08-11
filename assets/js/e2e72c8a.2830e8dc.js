"use strict";(self.webpackChunksreworks=self.webpackChunksreworks||[]).push([[2924],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1406:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"4.1.3 \u4f01\u4e1a\u8d44\u6e90\u7ba1\u7406"},i=void 0,c={unversionedId:"moptgx",id:"moptgx",title:"4.1.3 \u4f01\u4e1a\u8d44\u6e90\u7ba1\u7406",description:"\u96c6\u7fa4\u7ba1\u7406",source:"@site/docs/moptgx.md",sourceDirName:".",slug:"/moptgx",permalink:"/docs/next/moptgx",draft:!1,editUrl:"https://www.yuque.com/sreworks-doc/docs/moptgx",tags:[],version:"current",frontMatter:{title:"4.1.3 \u4f01\u4e1a\u8d44\u6e90\u7ba1\u7406"},sidebar:"sidebars",previous:{title:"4.1.2 \u4f01\u4e1a\u7ec4\u7ec7\u7ba1\u7406",permalink:"/docs/next/pdqddr"},next:{title:"4.1.4 \u4f01\u4e1a\u5e94\u7528\u7ba1\u7406",permalink:"/docs/next/ii05yo"}},p={},l=[{value:"\u96c6\u7fa4\u7ba1\u7406",id:"\u96c6\u7fa4\u7ba1\u7406",level:2},{value:"\u96c6\u7fa4\u63a5\u5165",id:"\u96c6\u7fa4\u63a5\u5165",level:3},{value:"\u96c6\u7fa4\u7ba1\u7406",id:"\u96c6\u7fa4\u7ba1\u7406-1",level:3}],s={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"P2ZVB"}),(0,o.kt)("h2",{id:"\u96c6\u7fa4\u7ba1\u7406"},"\u96c6\u7fa4\u7ba1\u7406"),(0,o.kt)("p",null,"\u8fdb\u5165\u5230\u4e91\u539f\u751f\u540e\uff0cKubernetes\u53ef\u4ee5\u4f5c\u4e3a\u4f01\u4e1a\u8d44\u6e90\u7ba1\u7406\u7684\u539f\u5b50\u5316\u62bd\u8c61\u5355\u4f4d\uff0c\u5b58\u50a8\u3001\u8ba1\u7b97\u3001\u7f51\u7edc\u7b49\u8d44\u6e90\u90fd\u53ef\u4ee5\u7eb3\u5165Kubernetes\u96c6\u7fa4\u7ba1\u7406\u3002\u56e0\u6b64\u6211\u4eec\u5728\u4f01\u4e1a\u8d44\u6e90\u7ba1\u7406\u4e2d\uff0c\u63d0\u4f9b\u4e86\u56f4\u7ed5Kubernetes\u7eb3\u7ba1\u3001\u7cfb\u7edf\u7ec4\u4ef6\u53ca\u8282\u70b9\u7ba1\u7406\u7b49\u80fd\u529b\uff0c\u540e\u7eed\u4e5f\u4f1a\u5728\u96c6\u7fa4\u7ba1\u7406\u4e2d\u5efa\u8bbe\u4e91\u8d44\u6e90\u7ba1\u7406\u7684\u80fd\u529b\u3002"),(0,o.kt)("a",{name:"FZrDd"}),(0,o.kt)("h3",{id:"\u96c6\u7fa4\u63a5\u5165"},"\u96c6\u7fa4\u63a5\u5165"),(0,o.kt)("p",null,"\u96c6\u7fa4\u63a5\u5165\u652f\u6301\u201c\u4e91\u8d26\u53f7\u63a5\u5165\u201d\u548c\u201ckubeconfig\u914d\u7f6e\u63a5\u5165\u201d\u4e24\u79cd\u6a21\u5f0f\uff0c\u96c6\u7fa4\u90fd\u5f52\u5c5e\u4e3a\u56e2\u961f\u3002\u63a5\u5165\u7684\u5177\u4f53\u64cd\u4f5c\u4f1a\u5728\u96c6\u7fa4\u4e2d\u90e8\u7f72\u4e00\u4e9b\u57fa\u7840\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u70b9\u51fb\u7eb3\u7ba1\u72b6\u6001\u53ef\u4ee5\u770b\u5230\u5177\u4f53\u7ec4\u4ef6\u4fe1\u606f\u3002",(0,o.kt)("br",null),(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/703896/1648179530291-134893b3-22fb-408f-9335-1f553d1c9d8e.png#clientId=uc1b76d77-fdda-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=748&id=ud67e59f8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1496&originWidth=2854&originalType=binary&ratio=1&rotation=0&showTitle=false&size=876134&status=done&style=none&taskId=uc14a30d8-4df5-4f3b-99b0-8890d182862&title=&width=1427",alt:"image.png"}),(0,o.kt)("br",null),"\u96c6\u7fa4\u63a5\u5165\u76f8\u5173\u64cd\u4f5c\u5305\u542b\u6dfb\u52a0\u96c6\u7fa4\u3001\u5220\u9664\u96c6\u7fa4\uff0c\u914d\u7f6e\u96c6\u7fa4\u57fa\u672c\u4fe1\u606f",(0,o.kt)("br",null),(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/703896/1648179530443-ccb35e68-e32a-4f98-b8da-ca75180f1c59.png#clientId=uc1b76d77-fdda-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=754&id=ued4e6861&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1508&originWidth=2854&originalType=binary&ratio=1&rotation=0&showTitle=false&size=241878&status=done&style=none&taskId=ue8f8b21a-36a3-445b-b382-3aa2677dd59&title=&width=1427",alt:"image.png"})),(0,o.kt)("a",{name:"HALSZ"}),(0,o.kt)("h3",{id:"\u96c6\u7fa4\u7ba1\u7406-1"},"\u96c6\u7fa4\u7ba1\u7406"),(0,o.kt)("p",null,"\u5728\u96c6\u7fa4\u5b9e\u4f8b\u5217\u8868\u4e2d\uff0c\u70b9\u51fb\u96c6\u7fa4\u540d\u79f0\u540e\u8fdb\u5165\u96c6\u7fa4\u8be6\u60c5\uff0c\u5f53\u524d\u63d0\u4f9b\u201c\u6982\u89c8\u3001\u7ec4\u4ef6\u3001\u8282\u70b9\u3001\u8bbe\u7f6e\u201d\u56db\u4e2a\u9875\u7b7e\uff0c\u5206\u522b\u63d0\u4f9b\u4e86\u96c6\u7fa4\u57fa\u672c\u7684\u4e00\u4e9b\u57fa\u672c\u4fe1\u606f\u548c\u76f8\u5173\u64cd\u4f5c\u3002",(0,o.kt)("br",null),(0,o.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/703896/1648179530600-29749f87-c278-4b44-bd10-67e1f91d7f59.png#clientId=uc1b76d77-fdda-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=758&id=uaef9a9de&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1516&originWidth=2852&originalType=binary&ratio=1&rotation=0&showTitle=false&size=302983&status=done&style=none&taskId=u8b75097c-4d96-4cf8-9a4e-a3e6631d9c6&title=&width=1426",alt:"image.png"})))}d.isMDXComponent=!0}}]);