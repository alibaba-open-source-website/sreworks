"use strict";(self.webpackChunksreworks=self.webpackChunksreworks||[]).push([[7301],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=i(a),m=r,d=k["".concat(p,".").concat(m)]||k[m]||c[m]||l;return a?n.createElement(d,s(s({ref:t},u),{},{components:a})):n.createElement(d,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var i=2;i<l;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},67002:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={title:"SREWorks v1.1 \u7248\u672c\u53d1\u5e03 | \u7ec4\u4ef6\u63d2\u62d4\u573a\u666f\u5316\u90e8\u7f72\u80fd\u529b",date:new Date("2022-08-22T23:07:05.000Z")},s=void 0,o={permalink:"/zh/blog/yot1g3",source:"@site/blog/yot1g3.md",title:"SREWorks v1.1 \u7248\u672c\u53d1\u5e03 | \u7ec4\u4ef6\u63d2\u62d4\u573a\u666f\u5316\u90e8\u7f72\u80fd\u529b",description:"\u81eaSREWorks v1.0 \u7248\u672c\u57283\u6708\u4efd\u5f00\u6e90\u4ee5\u6765\uff0c\u901a\u8fc7\u9489\u9489\u7fa4\u3001\u5fae\u4fe1\u7fa4\u3001GitHub\u7b49\u6e20\u9053\uff0c\u56e2\u961f\u9646\u7eed\u6536\u5230\u4e86\u5404\u79cd\u53cd\u9988\u3002\u968f\u5373\u56e2\u961f\u5f00\u59cb\u4e86v1.1\u7248\u672c\u7684\u529f\u80fd\u4f18\u5316\u8fed\u4ee3\uff0c\u4f18\u5148\u89e3\u51b3\u7528\u6237\u53cd\u9988\u4e0a\u6765\u7684TOP3\u95ee\u9898: \u7ec4\u4ef6\u63d2\u62d4\u3001\u6700\u5c0f\u8d44\u6e90\u90e8\u7f72\u3001\u5b58\u50a8\u7c7b\u4f7f\u7528\uff0c\u540c\u65f6\u9488\u5bf9\u7528\u6237\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u66b4\u9732\u51fa\u6765\u7684\u5c0f\u95ee\u9898\u4e5f\u505a\u4e86\u76f8\u5e94\u7684\u4f18\u5316\u3002",date:"2022-08-22T23:07:05.000Z",formattedDate:"2022\u5e748\u670822\u65e5",tags:[],readingTime:6.09,hasTruncateMarker:!1,authors:[],frontMatter:{title:"SREWorks v1.1 \u7248\u672c\u53d1\u5e03 | \u7ec4\u4ef6\u63d2\u62d4\u573a\u666f\u5316\u90e8\u7f72\u80fd\u529b",date:"2022-08-22T23:07:05.000Z"},prevItem:{title:"SREWorks v1.2 \u7248\u672c\u53d1\u5e03 | \u8fd0\u7ef4\u5e02\u573a\u80fd\u529b\u53d1\u5e03",permalink:"/zh/blog/dfg57x"}},p={authorsImageUrls:[]},i=[{value:"1. \u57fa\u7840\u7248/\u6570\u667a\u7248",id:"1-\u57fa\u7840\u7248\u6570\u667a\u7248",level:3},{value:"2. \u7ec4\u4ef6\u63d2\u62d4: ElasticSearch/MySQL/MinIO",id:"2-\u7ec4\u4ef6\u63d2\u62d4-elasticsearchmysqlminio",level:3},{value:"3. \u9875\u9762\u6a21\u677f\u4e2d\u5fc3",id:"3-\u9875\u9762\u6a21\u677f\u4e2d\u5fc3",level:3},{value:"4. \u9ed8\u8ba4\u5b58\u50a8\u7c7b\u652f\u6301",id:"4-\u9ed8\u8ba4\u5b58\u50a8\u7c7b\u652f\u6301",level:3},{value:"5. \u5176\u4ed6\u4f18\u5316",id:"5-\u5176\u4ed6\u4f18\u5316",level:3},{value:"\u5982\u4f55\u4ece\u5f53\u524d\u7248\u672c\u5347\u7ea7\u5230v1.1",id:"\u5982\u4f55\u4ece\u5f53\u524d\u7248\u672c\u5347\u7ea7\u5230v11",level:3}],u={toc:i};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u81eaSREWorks v1.0 \u7248\u672c\u57283\u6708\u4efd\u5f00\u6e90\u4ee5\u6765\uff0c\u901a\u8fc7\u9489\u9489\u7fa4\u3001\u5fae\u4fe1\u7fa4\u3001GitHub\u7b49\u6e20\u9053\uff0c\u56e2\u961f\u9646\u7eed\u6536\u5230\u4e86\u5404\u79cd\u53cd\u9988\u3002\u968f\u5373\u56e2\u961f\u5f00\u59cb\u4e86v1.1\u7248\u672c\u7684\u529f\u80fd\u4f18\u5316\u8fed\u4ee3\uff0c\u4f18\u5148\u89e3\u51b3\u7528\u6237\u53cd\u9988\u4e0a\u6765\u7684TOP3\u95ee\u9898: ",(0,r.kt)("strong",{parentName:"p"},"\u7ec4\u4ef6\u63d2\u62d4\u3001\u6700\u5c0f\u8d44\u6e90\u90e8\u7f72\u3001\u5b58\u50a8\u7c7b\u4f7f\u7528"),"\uff0c\u540c\u65f6\u9488\u5bf9\u7528\u6237\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u66b4\u9732\u51fa\u6765\u7684\u5c0f\u95ee\u9898\u4e5f\u505a\u4e86\u76f8\u5e94\u7684\u4f18\u5316\u3002"),(0,r.kt)("p",null,"\u540e\u7eed\u4ea7\u54c1\u4f1a\u6301\u7eed\u4fdd\u6301\u8f83\u5feb\u7684\u53d1\u5e03\u9891\u7387\uff0c\u5feb\u901f\u89e3\u51b3\u5404\u6e20\u9053\u7528\u6237\u53cd\u9988\u7684\u75db\u70b9\u95ee\u9898\uff0c\u5e2e\u52a9\u7528\u6237\u5229\u7528SREWorks\u66f4\u597d\u5730\u6784\u5efa\u4e91\u539f\u751f\u4e0b\u7684\u6570\u667a\u8fd0\u7ef4\u5e73\u53f0\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u672c\u6b21 v1.1 \u7248\u672c\u53d1\u5e03\u7684\u65b0\u529f\u80fd\u4ecb\u7ecd: "),(0,r.kt)("a",{name:"jVBkA"}),(0,r.kt)("h3",{id:"1-\u57fa\u7840\u7248\u6570\u667a\u7248"},"1. \u57fa\u7840\u7248/\u6570\u667a\u7248"),(0,r.kt)("p",null,"k8s\u96c6\u7fa4\u7684\u8d44\u6e90\u6d88\u8017\u8ba9\u4e0d\u5c11\u5c1d\u9c9c\u7528\u6237\u671b\u800c\u5374\u6b65\uff0c\u56e0\u6b64v1.1\u7248\u672c\u5c06\u57fa\u7840\u5e94\u7528\u548c\u6570\u667a\u5e94\u7528\u90e8\u7f72\u5206\u79bb\uff0c\u8ba9\u7528\u6237\u53ef\u4ee5\u53ea\u4f53\u9a8cSREWorks\u7684\u5e95\u5ea7\u5e73\u53f0\uff0c\u800c\u4e0d\u5f00\u542f\u8f83\u5360\u7528\u8d44\u6e90\u7684\u6570\u667a\u5316\u5e94\u7528\u3002"),(0,r.kt)("p",null,"\u57fa\u7840\u7248SREWorks\u5728",(0,r.kt)("strong",{parentName:"p"},"\u5355\u53f04\u683816G"),"\u673a\u5668\u4e0a\u5373\u53ef\u6b63\u5e38\u542f\u52a8\u3002"),(0,r.kt)("p",null,"\u57fa\u7840\u5e94\u7528\u5305\u542b8\u4e2a\u5e94\u7528: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u7ef4\u4e2d\u53f0"),(0,r.kt)("li",{parentName:"ul"},"\u5e94\u7528\u7ba1\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u56e2\u961f\u7ba1\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u7ba1\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u6a21\u677f\u4e2d\u5fc3"),(0,r.kt)("li",{parentName:"ul"},"\u5e2e\u52a9\u4e2d\u5fc3"),(0,r.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u7ba1\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u8bbe\u7f6e")),(0,r.kt)("p",null,"\u6570\u667a\u5e94\u7528\u5305\u542b7\u4e2a\u5e94\u7528:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u8fd0\u7ef4\u5e73\u53f0"),(0,r.kt)("li",{parentName:"ul"},"\u667a\u80fd\u8fd0\u7ef4\u5e73\u53f0"),(0,r.kt)("li",{parentName:"ul"},"\u6545\u969c\u81ea\u6108"),(0,r.kt)("li",{parentName:"ul"},"\u5065\u5eb7\u7ba1\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u8425\u4e2d\u5fc3"),(0,r.kt)("li",{parentName:"ul"},"\u4f5c\u4e1a\u8c03\u5ea6\u5e73\u53f0"),(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u7ef4\u641c\u7d22")),(0,r.kt)("p",null,"\u5728\u8fdb\u884chelm\u90e8\u7f72\u7684\u65f6\u5019\uff0c\u4f20\u5165\u5982\u4e0b\u53c2\u6570\u5373\u53ef\u4f7f\u7528\u57fa\u7840\u7248(\u9ed8\u8ba4\u4e3a\u6570\u667a\u7248):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--set saas.onlyBase=true\n")),(0,r.kt)("a",{name:"daZ6i"}),(0,r.kt)("h3",{id:"2-\u7ec4\u4ef6\u63d2\u62d4-elasticsearchmysqlminio"},"2. \u7ec4\u4ef6\u63d2\u62d4: ElasticSearch/MySQL/MinIO"),(0,r.kt)("p",null,"\u5f53\u524d\u4e0d\u5c11\u516c\u53f8\u7684\u751f\u4ea7\u73af\u5883\u4e0b\u5747\u5305\u542b\u53ef\u9760\u7684\u5b58\u50a8\u6a21\u5757\uff0c\u6bd4\u5982ES/MySQL/MinIO\u7b49\uff0c\u6240\u4ee5\u90e8\u5206\u7528\u6237\u5728\u90e8\u7f72\u5e94\u7528\u65f6\u4e0d\u5e0c\u671b\u4f7f\u7528SREWorks v1.0\u7248\u672c\u4e2d\u81ea\u5e26\u7684\u5b58\u50a8\u6a21\u5757\uff0c\u800c\u662f\u5e0c\u671b\u5c06\u90a3\u4e9b\u4e2d\u95f4\u4ef6\u7684endpoint\u76f4\u63a5\u6ce8\u5165\u3002",(0,r.kt)("br",null),"\u56e2\u961f\u7ecf\u8fc7\u6574\u7406\u548c\u4f18\u5316\uff0c\u5c06SREWorks\u4e2d\u4f7f\u7528\u7684\u5404\u79cd\u5b58\u50a8\u6a21\u5757\uff0c\u62bd\u53d6\u51fa\u53d8\u91cf\u652f\u6301\u7528\u6237\u5728\u90e8\u7f72\u65f6\u4fee\u6539\u3002"),(0,r.kt)("p",null,"\u5728\u8fdb\u884chelm\u90e8\u7f72\u7684\u65f6\u5019\uff0c\u6839\u636e\u9700\u6c42\u4f20\u5165\u5982\u4e0b\u53c2\u6570\u5373\u53ef:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# \u66ff\u6362\u57fa\u7840\u5e94\u7528\u7684\u4e3bMySQL\u6570\u636e\u5e93\n# MySQL\u8fd9\u5757\u9700\u8981\u6ce8\u610f\uff0c\u901a\u5e38\u5c06\u4e3bMySQL\u6570\u636e\u5e93\u548c\u6570\u667a\u5316MySQL\u6570\u636e\u5e93(\u541e\u5410\u8f83\u5927)\u5206\u6210\u4e24\u4e2a\n\n--set appmanager.server.database.host="*.mysql.rds.aliyuncs.com" \n--set appmanager.server.database.password="****"\n--set appmanager.server.database.user="root"\n--set appmanager.server.database.port=3306\n--set appmanagerbase.mysql.enabled=false\n\n# \u66ff\u6362\u6570\u667a\u5316\u5e94\u7528\u7684MySQL\u6570\u636e\u5e93\n--set saas.dataops.dbHost="*.mysql.rds.aliyuncs.com"\n--set saas.dataops.dbUser=root\n--set saas.dataops.dbPassword="*****"\n--set saas.dataops.dbPort=3306\n\n# \u66ff\u6362\u6570\u667a\u5316\u5e94\u7528\u7684ElasticSearch\n--set saas.dataops.esHost="*.public.elasticsearch.aliyuncs.com"\n--set saas.dataops.esPort="9200"\n--set saas.dataops.esUser="elastic"\n--set saas.dataops.esPassword="*******"\n\n# \u66ff\u6362\u57fa\u7840\u5e94\u7528\u7684MinIO\u5b58\u50a8\n--set global.minio.accessKey="*******"\n--set global.minio.secretKey="*******"\n--set appmanager.server.package.endpoint="minio.*.com:9000"\n--set appmanagerbase.minio.enabled=false\n\n')),(0,r.kt)("a",{name:"ZELUF"}),(0,r.kt)("h3",{id:"3-\u9875\u9762\u6a21\u677f\u4e2d\u5fc3"},"3. \u9875\u9762\u6a21\u677f\u4e2d\u5fc3"),(0,r.kt)("p",null,"\u4f4e\u4ee3\u7801\u7684\u524d\u7aef\u5f00\u53d1\u6a21\u5f0f\uff0c\u5bf9\u4e8e\u4e4b\u524d\u6ca1\u6709\u63a5\u89e6\u8fc7\u76f8\u5173\u5e94\u7528\u7684\u7528\u6237\u4f9d\u7136\u5b58\u5728\u4e00\u5b9a\u7684\u95e8\u69db\uff0c\u4e8e\u662f\u56e2\u961f\u501f\u9274\u4e86\u6587\u6863\u6a21\u677f\u7684\u8fd9\u4e00\u6982\u5ff5\uff0c\u5c06\u524d\u7aef\u7ec4\u4ef6\u6309\u7167\u5e38\u89c1\u7684\u573a\u666f\u7c7b\u522b\u7f16\u6392\u6210\u6a21\u677f\uff0c\u8ba9\u7528\u6237\u53ef\u4ee5\u5feb\u901f\u5bfc\u5165\u4e00\u4e2a\u73b0\u6210\u7684\u6a21\u677f\u9875\u9762\uff0c\u5728\u6a21\u677f\u4e4b\u4e0a\u7ee7\u7eed\u8fdb\u884c\u524d\u7aef\u5f00\u53d1\u3002"),(0,r.kt)("p",null,"\u540c\u65f6v1.1\u7248\u672c\u4e5f\u652f\u6301\u7528\u6237\u5c06\u81ea\u5df1\u5e38\u7528\u7684\u9875\u9762\u4fdd\u5b58\u6210\u6a21\u677f\uff0c\u63d0\u5347\u65e5\u5e38\u7684\u9875\u9762\u5f00\u53d1\u6548\u7387\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:a(21022).Z,width:"2514",height:"876"}),(0,r.kt)("br",null),(0,r.kt)("img",{alt:"image.png",src:a(82322).Z,width:"3440",height:"1798"})),(0,r.kt)("a",{name:"SwSOF"}),(0,r.kt)("h3",{id:""}),(0,r.kt)("a",{name:"Aj0EL"}),(0,r.kt)("h3",{id:"4-\u9ed8\u8ba4\u5b58\u50a8\u7c7b\u652f\u6301"},"4. \u9ed8\u8ba4\u5b58\u50a8\u7c7b\u652f\u6301"),(0,r.kt)("p",null,"\u5f88\u591a\u4f7f\u7528k8s\u7684\u7528\u6237\u4e0d\u592a\u6e05\u695aStorageClass\u7684\u4f7f\u7528\u903b\u8f91\uff0c\u5e38\u5728\u8fd9\u4e2a\u95ee\u9898\u7684\u6392\u67e5\u4e0a\u8017\u8d39\u8f83\u591a\u65f6\u95f4\u3002",(0,r.kt)("br",null),"\u5728\u7efc\u5408\u5206\u6790\u6bd4\u8f83\u4e86\u5404\u79cd\u793e\u533a\u5b58\u50a8\u65b9\u6848\u540e\uff0cv1.1\u7248\u672c\u4f7f\u7528\u4e86\u57fa\u4e8eOpenEBS\u7684\u65b9\u6848\uff0c\u7ed9\u7528\u6237\u63d0\u4f9b\u4e86\u4e00\u4e2a\u9ed8\u8ba4\u7684LocalPV\u65b9\u6848\uff0c\u51cf\u5c11\u5927\u5bb6\u7684\u4f7f\u7528\u6210\u672c\u3002",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},"\u7528\u6237\u5728\u4f7f\u7528\u65f6\u52a1\u5fc5\u6ce8\u610f\uff0c\u5982\u679c\u4f7f\u7528\u81ea\u5df1\u67b6\u8bbe\u7684\u5b58\u50a8\u96c6\u6216\u8be5k8s\u96c6\u7fa4\u5df2\u7ecf\u6709\u5b58\u50a8\u7c7b\uff0c\u8bf7\u52a1\u5fc5\u5c06\u8fd9\u4e2a\u9ed8\u8ba4\u5b58\u50a8\u7c7b\u5bf9\u5e94\u7684\u5b58\u50a8\u4f9b\u5e94openebs\u5173\u95ed\uff0c\u5426\u5219\u5bb9\u6613\u51fa\u73b0\u5b58\u50a8\u76ee\u5f55\u4e89\u62a2\u7684\u95ee\u9898"),"\u3002"),(0,r.kt)("p",null,"\u5173\u95edSREWorks\u9ed8\u8ba4\u5b58\u50a8\u7c7b\u65b9\u6848\u7684helm\u53c2\u6570\u5982\u4e0b\uff0c\u4ee5\u4f7f\u7528\u963f\u91cc\u4e91ACK\u96c6\u7fa4\u7684\u5b58\u50a8\u7c7balicloud-disk-available\u4e3a\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'--set appmanagerbase.openebs.enabled=false\n--set global.storageClass="alicloud-disk-available"\n')),(0,r.kt)("a",{name:"sw91G"}),(0,r.kt)("h3",{id:"5-\u5176\u4ed6\u4f18\u5316"},"5. \u5176\u4ed6\u4f18\u5316"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u540e\u7aef\u5fae\u670d\u52a1\u7684\u7f16\u8f91\u9875\u9762\u62a5\u9519"),(0,r.kt)("li",{parentName:"ul"},"\u589e\u52a0\u540e\u7aef\u5fae\u670d\u52a1\u7684\u9ed8\u8ba4\u9274\u6743\u5f00\u5173"),(0,r.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u8fd0\u7ef4\u5e94\u7528\u5220\u9664\u62a5\u9519"),(0,r.kt)("li",{parentName:"ul"},"\u89e3\u51b3appmanager\u591a\u6b21\u521d\u59cb\u5316\u7684\u5e42\u7b49\u5f02\u5e38"),(0,r.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u5728\u6162\u6570\u636e\u5e93\u573a\u666f\u4e0bproductopsv2\u5bfc\u5165\u65f6\u5019\u7684\u62a5\u9519(\u9488\u5bf9NFS\u6162\u6570\u636e\u5e93\u573a\u666f\u540c\u6837\u6709\u6548)"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u6e90\u5bc6\u7801\u6846\u91c7\u7528\u5bc6\u7801\u8f93\u5165")),(0,r.kt)("a",{name:"IzfXK"}),(0,r.kt)("h3",{id:"\u5982\u4f55\u4ece\u5f53\u524d\u7248\u672c\u5347\u7ea7\u5230v11"},"\u5982\u4f55\u4ece\u5f53\u524d\u7248\u672c\u5347\u7ea7\u5230v1.1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5347\u7ea7\u5305\u542b\u5e95\u5ea7\uff0c\u6545\u53ef\u80fd\u9875\u9762\u4f1a\u67095-10\u5206\u949f\u7684\u4e0d\u53ef\u8bbf\u95ee\uff0c\u8bf7\u6ce8\u610f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u81ea\u884c\u5f00\u53d1\u7684\u4e91\u539f\u751f\u5e94\u7528\u4e0d\u4f1a\u53d7\u5f71\u54cd(\u4e0d\u91cd\u542f)\uff0cSREWorks\u7f51\u5173\u5230\u5e94\u7528\u7684\u6d41\u91cf\u4f1a\u6709\u4e2d\u65ad\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'git clone http://github.com/alibaba/sreworks.git -b v1.1 sreworks\n\ncd sreworks\n./sbin/upgrade-cluster.sh --kubeconfig="****"\n')),(0,r.kt)("p",null,"\u5982\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u9047\u5230\u95ee\u9898\uff0c\u6b22\u8fce\u5404\u4f4d\u5728GitHub\u4e2d\u63d0\u51faIssues\u6216Pull requests\u3002",(0,r.kt)("br",null),"SREWorks\u5f00\u6e90\u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alibaba/sreworks"},"https://github.com/alibaba/sreworks"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"p",href:"https://yuque.antfin.com/abm/vt2s8x/br0fdf"},(0,r.kt)("br",null))))}c.isMDXComponent=!0},21022:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1661210046371-035f9eba-6261-4957-bf64-97181209bce6-94deb69c19c943369d839b5669a61f0f.png"},82322:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1661210046411-f2b1581d-ffac-48e4-becb-8474a9515137-545612ad40abe7587f2d8e293973b110.png"}}]);