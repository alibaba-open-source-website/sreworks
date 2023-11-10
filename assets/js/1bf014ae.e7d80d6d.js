"use strict";(self.webpackChunksreworks=self.webpackChunksreworks||[]).push([[2092],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=i(r),b=s,d=k["".concat(c,".").concat(b)]||k[b]||u[b]||a;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function b(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var i=2;i<a;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},784:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(87462),s=(r(67294),r(3905));const a={title:"2.3.2 \u5728K3s\u4e0b\u5b89\u88c5SREWorks",date:new Date("2022-12-14T22:30:54.000Z"),toc_max_heading_level:6,toc_min_heading_level:2},o=void 0,l={unversionedId:"hwchqke3tibvlg7t",id:"version-v1.4/hwchqke3tibvlg7t",title:"2.3.2 \u5728K3s\u4e0b\u5b89\u88c5SREWorks",description:"K3s \u662f\u4e00\u6b3e\u7531Rancher Labs\u53d1\u5e03\u8f7b\u91cf\u7ea7\u7684 Kubernetes \u53d1\u884c\u7248\uff0c\u5b83\u9488\u5bf9\u8fb9\u7f18\u8ba1\u7b97\u3001\u7269\u8054\u7f51\u7b49\u573a\u666f\u8fdb\u884c\u4e86\u9ad8\u5ea6\u4f18\u5316\u3002K3s\u4e3b\u8981\u7528\u4e8e\u90e8\u7f72\u5728\u8d44\u6e90\u53d7\u9650\u7684\u8fb9\u7f18\u8ba1\u7b97\u573a\u666f\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u5728\u672c\u5730\u8fd0\u884c\u4ee5\u8fdb\u884cKubernetes\u6d4b\u8bd5\u6216\u5f00\u53d1\u3002K3s\u662f\u4e3a\u751f\u4ea7\u73af\u5883\u8bbe\u8ba1\u7684\uff0c\u56e0\u6b64\u5728PC\u6216\u7b14\u8bb0\u672c\u7535\u8111\u4e0a\uff0cK3s\u662f\u4e0e\u751f\u4ea7\u7ea7\u670d\u52a1\u5668\u6700\u63a5\u8fd1\u7684\u9009\u9879\u3002k3s \u5c06\u5b89\u88c5 Kubernetes \u6240\u9700\u7684\u4e00\u5207\u6253\u5305\u8fdb\u4e00\u4e2a\u5c0f\u578b\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\uff0c\u5e76\u4e14\u5b8c\u5168\u5b9e\u73b0\u4e86 Kubernetes API\u3002\u53ef\u4ee5\u5728\u77ed\u65f6\u95f4\u5185\u5b89\u88c5\uff0c\u5e76\u4e14\u901a\u5e38\u4e0d\u5230 2 \u5206\u949f\u7684\u65f6\u95f4\u5c31\u80fd\u591f\u542f\u52a8\u4e00\u4e2a\u5e26\u6709\u51e0\u4e2a\u8282\u70b9\u7684 k3s \u96c6\u7fa4\uff0c\u4e3a\u4e86\u51cf\u5c11\u8fd0\u884c Kubernetes \u6240\u9700\u7684\u5185\u5b58\uff0cRancher \u5220\u9664\u4e86\u5f88\u591a\u4e0d\u5fc5\u8981\u7684\u9a71\u52a8\u7a0b\u5e8f\uff0c\u5e76\u7528\u9644\u52a0\u7ec4\u4ef6\u5bf9\u5176\u8fdb\u884c\u66ff\u6362\u3002",source:"@site/versioned_docs/version-v1.4/hwchqke3tibvlg7t.md",sourceDirName:".",slug:"/hwchqke3tibvlg7t",permalink:"/docs/docs/v1.4/hwchqke3tibvlg7t",draft:!1,editUrl:"https://www.yuque.com/sreworks-doc/docs/hwchqke3tibvlg7t",tags:[],version:"v1.4",frontMatter:{title:"2.3.2 \u5728K3s\u4e0b\u5b89\u88c5SREWorks",date:"2022-12-14T22:30:54.000Z",toc_max_heading_level:6,toc_min_heading_level:2},sidebar:"sidebars",previous:{title:"2.3.1 \u5728minikube\u4e0b\u5b89\u88c5SREWorks",permalink:"/docs/docs/v1.4/vnlbio04odgkllih"},next:{title:"2.3.3 \u5728KubeSphere All in One\u4e0b\u5b89\u88c5SREWorks",permalink:"/docs/docs/v1.4/xozhprslhue7ue5l"}},c={},i=[],p={toc:i};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("a",{name:"tm1OY"}),(0,s.kt)("h1",{id:"\u4ec0\u4e48\u662fk3s"},"\u4ec0\u4e48\u662fK3s"),(0,s.kt)("p",null,"K3s \u662f\u4e00\u6b3e\u7531Rancher Labs\u53d1\u5e03\u8f7b\u91cf\u7ea7\u7684 Kubernetes \u53d1\u884c\u7248\uff0c\u5b83\u9488\u5bf9\u8fb9\u7f18\u8ba1\u7b97\u3001\u7269\u8054\u7f51\u7b49\u573a\u666f\u8fdb\u884c\u4e86\u9ad8\u5ea6\u4f18\u5316\u3002",(0,s.kt)("br",null),"K3s\u4e3b\u8981\u7528\u4e8e\u90e8\u7f72\u5728\u8d44\u6e90\u53d7\u9650\u7684\u8fb9\u7f18\u8ba1\u7b97\u573a\u666f\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u5728\u672c\u5730\u8fd0\u884c\u4ee5\u8fdb\u884cKubernetes\u6d4b\u8bd5\u6216\u5f00\u53d1\u3002",(0,s.kt)("br",null),"K3s\u662f\u4e3a\u751f\u4ea7\u73af\u5883\u8bbe\u8ba1\u7684\uff0c\u56e0\u6b64\u5728PC\u6216\u7b14\u8bb0\u672c\u7535\u8111\u4e0a\uff0cK3s\u662f\u4e0e\u751f\u4ea7\u7ea7\u670d\u52a1\u5668\u6700\u63a5\u8fd1\u7684\u9009\u9879\u3002",(0,s.kt)("br",null),"k3s \u5c06\u5b89\u88c5 Kubernetes \u6240\u9700\u7684\u4e00\u5207\u6253\u5305\u8fdb\u4e00\u4e2a\u5c0f\u578b\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\uff0c\u5e76\u4e14\u5b8c\u5168\u5b9e\u73b0\u4e86 Kubernetes API\u3002",(0,s.kt)("br",null),"\u53ef\u4ee5\u5728\u77ed\u65f6\u95f4\u5185\u5b89\u88c5\uff0c\u5e76\u4e14\u901a\u5e38\u4e0d\u5230 2 \u5206\u949f\u7684\u65f6\u95f4\u5c31\u80fd\u591f\u542f\u52a8\u4e00\u4e2a\u5e26\u6709\u51e0\u4e2a\u8282\u70b9\u7684 k3s \u96c6\u7fa4\uff0c",(0,s.kt)("br",null),"\u4e3a\u4e86\u51cf\u5c11\u8fd0\u884c Kubernetes \u6240\u9700\u7684\u5185\u5b58\uff0cRancher \u5220\u9664\u4e86\u5f88\u591a\u4e0d\u5fc5\u8981\u7684\u9a71\u52a8\u7a0b\u5e8f\uff0c\u5e76\u7528\u9644\u52a0\u7ec4\u4ef6\u5bf9\u5176\u8fdb\u884c\u66ff\u6362\u3002"),(0,s.kt)("a",{name:"nUnHA"}),(0,s.kt)("h1",{id:"k3s\u90e8\u7f72"},"K3s\u90e8\u7f72"),(0,s.kt)("p",null,"\u9274\u4e8e\u5728\u7b14\u8bb0\u672c\u4e0a\u73af\u5883\u5b58\u5728\u4e00\u5b9a\u5dee\u5f02\uff0c\u63a8\u8350\u4f7f\u7528",(0,s.kt)("a",{parentName:"p",href:"https://github.com/k3d-io/k3d"},"GitHub - k3d-io/k3d: Little helper to run CNCF\u2019s k3s in Docker")," \u6765\u8fd0\u884c\u3002",(0,s.kt)("br",null),"\u5728MAC\u4e0b\u6267\u884ck3d\u7684\u5b89\u88c5\u547d\u4ee4\u5373\u53ef\u5feb\u901f\u5f00\u59cb\u4f7f\u7528"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"brew install k3d\n")),(0,s.kt)("p",null,"\u6267\u884c\u5982\u4e0b\u547d\u4ee4\u53ef\u4ee5\u542f\u52a8\u4e00\u4e2ak3s\u96c6\u7fa4\uff0c-p\u53c2\u6570\u7528\u6765\u66b4\u9732NodePort\u7684\u8bbf\u95ee\u7aef\u53e3\uff0c\u4f7f\u672c\u5730\u6d4f\u89c8\u5668\u80fd\u8bbf\u95ee\u5230server\u4e0a\u7684NodePort"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'k3d cluster create -p "30000-32767:30000-32767@server[0]"\n')),(0,s.kt)("a",{name:"TEsDw"}),(0,s.kt)("h1",{id:"sreworks\u5b89\u88c5"},"SREWorks\u5b89\u88c5"),(0,s.kt)("p",null,"\u4f7f\u7528K3s\u81ea\u5e26\u7684",(0,s.kt)("inlineCode",{parentName:"p"},"storageClass: local-path"),"\u4f5c\u4e3a\u5b58\u50a8\uff0c\u5173\u95ed\u9ed8\u8ba4\u5b58\u50a8\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'# \u4e0b\u8f7dsreworks\u5230\u672c\u5730\ngit clone http://github.com/alibaba/sreworks.git -b v1.4 sreworks\ncd sreworks/chart/sreworks-chart\n\n# \u5b89\u88c5SREWorks\n# \u4f7f\u7528k3d\u81ea\u5e26\u7684storageClass: local-path\nhelm install sreworks ./ \\\n    --create-namespace --namespace sreworks \\\n    --set global.accessMode="nodePort" \\\n    --set global.images.tag="v1.4" \\\n    --set appmanager.home.url="http://localhost:30767" \\\n    --set global.storageClass="local-path" \\\n    --set saas.onlyBase=true \\\n    --set localPathProvisioner=false\n')),(0,s.kt)("p",null,"\u8bbf\u95ee ",(0,s.kt)("inlineCode",{parentName:"p"},"http://localhost:30767")," \u5373\u53ef\u5f00\u59cb\u4f7f\u7528SREWorks\u3002"))}u.isMDXComponent=!0}}]);