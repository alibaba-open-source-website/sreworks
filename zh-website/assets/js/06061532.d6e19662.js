"use strict";(self.webpackChunksreworks=self.webpackChunksreworks||[]).push([[4609],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),i=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(a),u=n,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var i=2;i<s;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},62808:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const s={title:"2.4 \u5b89\u88c5\u53c2\u6570\u660e\u7ec6",date:new Date("2022-03-25T03:39:17.000Z"),toc_max_heading_level:6,toc_min_heading_level:2},o=void 0,c={unversionedId:"mzz07m",id:"mzz07m",title:"2.4 \u5b89\u88c5\u53c2\u6570\u660e\u7ec6",description:"",source:"@site/docs/mzz07m.md",sourceDirName:".",slug:"/mzz07m",permalink:"/docs/next/mzz07m",draft:!1,editUrl:"https://www.yuque.com/sreworks-doc/docs/mzz07m",tags:[],version:"current",frontMatter:{title:"2.4 \u5b89\u88c5\u53c2\u6570\u660e\u7ec6",date:"2022-03-25T03:39:17.000Z",toc_max_heading_level:6,toc_min_heading_level:2},sidebar:"sidebars",previous:{title:"2.3.4 \u5728Docker Desktop\u4e0b\u5b89\u88c5SREWorks",permalink:"/docs/next/bcetnc8bm9bv9gak"},next:{title:"3.1 \u6838\u5fc3\u601d\u60f3",permalink:"/docs/next/eg91va"}},l={},i=[],p={toc:i};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("a",{name:"Tg2yA"}),(0,n.kt)("h1",{id:"\u57fa\u7840\u4fe1\u606f"},"\u57fa\u7840\u4fe1\u606f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'# \u5e73\u53f0\u540d\u79f0\n--set platformName="SREWorks"\n\n# \u5e73\u53f0\u56fe\u6807, icon\u683c\u5f0f\u8981\u6c42\uff08\u6bd4\u5982\uff1a48*48\uff09\n--set platformLogo="https://sreworks.oss-cn-beijing.aliyuncs.com/logo/demo.png" \n\n# \u5e95\u5c42\u5b58\u50a8\n--set global.storageClass="alicloud-disk-available"\n\n# SREWorks\u5e73\u53f0\u542f\u52a8\u4f7f\u7528\u7684\u5bb9\u5668\u955c\u50cf\u4ed3\u5e93\n--set global.images.registry="registry.cn-zhangjiakou.aliyuncs.com/sreworks"\n')),(0,n.kt)("a",{name:"XFCPL"}),(0,n.kt)("h1",{id:"\u57fa\u7840\u6784\u5efa"},"\u57fa\u7840\u6784\u5efa"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'# SaaS\u5bb9\u5668\u6784\u5efa\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\n--set appmanager.server.docker.account="sreworks"\n--set appmanager.server.docker.password="***"\n--set appmanager.server.docker.registry="registry.cn-zhangjiakou.aliyuncs.com"\n--set appmanager.server.docker.namespace="builds"\n\n# \u6e90\u7801\u6784\u5efa\u6a21\u5f0f\u7684\u6e90\u7801\u4ed3\u5e93\u6765\u6e90\n--set source.branch="master"\n--set source.repo="https://code.aliyun.com/sreworks_public/mirror.git"\n')),(0,n.kt)("a",{name:"r0Q3Z"}),(0,n.kt)("h1",{id:"\u57fa\u7840\u5b58\u50a8"},"\u57fa\u7840\u5b58\u50a8"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'# \u66ff\u6362\u57fa\u7840\u5e94\u7528\u7684\u4e3bMySQL\u6570\u636e\u5e93\n# MySQL\u8fd9\u5757\u9700\u8981\u6ce8\u610f\uff0c\u901a\u5e38\u5c06\u4e3bMySQL\u6570\u636e\u5e93\u548c\u6570\u667a\u5316MySQL\u6570\u636e\u5e93(\u541e\u5410\u8f83\u5927)\u5206\u6210\u4e24\u4e2a\n\n--set appmanager.server.database.host="*.mysql.rds.aliyuncs.com" \n--set appmanager.server.database.password="****"\n--set appmanager.server.database.user="root"\n--set appmanager.server.database.port=3306\n--set appmanagerbase.mysql.enabled=false\n\n# \u66ff\u6362\u57fa\u7840\u5e94\u7528\u7684MinIO\u5b58\u50a8\n--set global.minio.accessKey="*******"\n--set global.minio.secretKey="*******"\n--set appmanager.server.package.endpoint="minio.*.com:9000"\n--set appmanagerbase.minio.enabled=false\n')),(0,n.kt)("a",{name:"SKJcK"}),(0,n.kt)("h1",{id:"\u6570\u667a\u5e94\u7528"},"\u6570\u667a\u5e94\u7528"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'# \u66ff\u6362\u6570\u667a\u5316\u5e94\u7528\u7684MySQL\u6570\u636e\u5e93\n--set saas.dataops.dbHost="*.mysql.rds.aliyuncs.com"\n--set saas.dataops.dbUser=root\n--set saas.dataops.dbPassword="*****"\n--set saas.dataops.dbPort=3306\n\n# \u66ff\u6362\u6570\u667a\u5316\u5e94\u7528\u7684ElasticSearch\n--set saas.dataops.esHost="*.public.elasticsearch.aliyuncs.com"\n--set saas.dataops.esPort="9200"\n--set saas.dataops.esUser="elastic"\n--set saas.dataops.esPassword="*******"\n\n# \u6570\u667a\u5316\u5e94\u7528\u4e2d\u91c7\u96c6\u5f00\u5173\n--set saas.dataops.filebeatEnable=true\n--set saas.dataops.metricbeatEnable=true\n')))}m.isMDXComponent=!0}}]);