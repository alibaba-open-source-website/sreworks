"use strict";(self.webpackChunksreworks=self.webpackChunksreworks||[]).push([[6082],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||s;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92496:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const s={title:"7.1 \u5e38\u89c1\u90e8\u7f72\u95ee\u9898",date:new Date("2022-03-25T03:39:05.000Z"),toc_max_heading_level:6,toc_min_heading_level:2},o=void 0,i={unversionedId:"iwa896",id:"iwa896",title:"7.1 \u5e38\u89c1\u90e8\u7f72\u95ee\u9898",description:"1. \u90e8\u7f72SREWorks\u7684\u57fa\u7840\u6761\u4ef6\u662f\u4ec0\u4e48\uff1f",source:"@site/docs/iwa896.md",sourceDirName:".",slug:"/iwa896",permalink:"/docs/next/iwa896",draft:!1,editUrl:"https://www.yuque.com/sreworks-doc/docs/iwa896",tags:[],version:"current",frontMatter:{title:"7.1 \u5e38\u89c1\u90e8\u7f72\u95ee\u9898",date:"2022-03-25T03:39:05.000Z",toc_max_heading_level:6,toc_min_heading_level:2},sidebar:"sidebars",previous:{title:"6.1 \u90e8\u7f72Flink\u4e91\u539f\u751f\u5f00\u6e90\u7248",permalink:"/docs/next/cgczgu"},next:{title:"7.2 \u5e38\u89c1\u4f7f\u7528\u95ee\u9898",permalink:"/docs/next/xnk5d9d8m3ck5gtp"}},l={},p=[{value:"1. \u90e8\u7f72SREWorks\u7684\u57fa\u7840\u6761\u4ef6\u662f\u4ec0\u4e48\uff1f",id:"1-\u90e8\u7f72sreworks\u7684\u57fa\u7840\u6761\u4ef6\u662f\u4ec0\u4e48",level:3},{value:"2. Appmanager\u8fd0\u884c\u62a5\u9519\uff0c\u65e0\u6cd5\u521b\u5efa\u65b0\u7ebf\u7a0b",id:"2-appmanager\u8fd0\u884c\u62a5\u9519\u65e0\u6cd5\u521b\u5efa\u65b0\u7ebf\u7a0b",level:3},{value:"3. Helm\u5305\u6709\u54ea\u4e9b\u5b89\u88c5\u53c2\u6570?",id:"3-helm\u5305\u6709\u54ea\u4e9b\u5b89\u88c5\u53c2\u6570",level:3},{value:"4. SREWorks\u7684\u67b6\u6784\u62d3\u6251\u662f\u600e\u4e48\u6837\u7684\uff1f",id:"4-sreworks\u7684\u67b6\u6784\u62d3\u6251\u662f\u600e\u4e48\u6837\u7684",level:3},{value:"5. Skywalking oap-server\u542f\u52a8\u5931\u8d25\uff0c\u62a5\u9519table: xxx does not exist. OAP is running in &#39;no-init&#39; mode, waiting... retry 3s later.",id:"5-skywalking-oap-server\u542f\u52a8\u5931\u8d25\u62a5\u9519table-xxx-does-not-exist-oap-is-running-in-no-init-mode-waiting-retry-3s-later",level:3}],c={toc:p};function d(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"VDP4m"}),(0,r.kt)("h3",{id:"1-\u90e8\u7f72sreworks\u7684\u57fa\u7840\u6761\u4ef6\u662f\u4ec0\u4e48"},"1. \u90e8\u7f72SREWorks\u7684\u57fa\u7840\u6761\u4ef6\u662f\u4ec0\u4e48\uff1f"),(0,r.kt)("p",null,"\u60a8\u9700\u8981\u4e00\u4e2aKubernetes\u96c6\u7fa4\u3002SREWorks\u4e13\u4e3a\u4e91\u539f\u751f\u4e0b\u7684\u8fd0\u7ef4\u800c\u751f\uff0c\u540c\u65f6SREWorks\u81ea\u8eab\u4e5f\u662f\u57fa\u4e8e\u4e91\u539f\u751f\u67b6\u6784\u7684\u843d\u5730\u5b9e\u73b0\u3002"),(0,r.kt)("a",{name:"pyyIT"}),(0,r.kt)("h3",{id:"2-appmanager\u8fd0\u884c\u62a5\u9519\u65e0\u6cd5\u521b\u5efa\u65b0\u7ebf\u7a0b"},"2. Appmanager\u8fd0\u884c\u62a5\u9519\uff0c\u65e0\u6cd5\u521b\u5efa\u65b0\u7ebf\u7a0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"java.lang.OutOfMemoryError: unable to create native thread\n")),(0,r.kt)("p",null,"\u9700\u8981\u5c06 /var/lib/kubelet/config.yaml \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"podPidsLimit: 1000")," \u6539\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"podPidsLimit: -1")),(0,r.kt)("a",{name:"LYcu3"}),(0,r.kt)("h3",{id:"3-helm\u5305\u6709\u54ea\u4e9b\u5b89\u88c5\u53c2\u6570"},"3. Helm\u5305\u6709\u54ea\u4e9b\u5b89\u88c5\u53c2\u6570?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# \u5e73\u53f0\u540d\u79f0\n--set platformName="SREWorks"\n\n# \u5e73\u53f0\u56fe\u6807, icon\u683c\u5f0f\u8981\u6c42\uff08\u6bd4\u5982\uff1a48*48\uff09\n--set platformLogo="https://sreworks.oss-cn-beijing.aliyuncs.com/logo/demo.png" \n\n# \u5e95\u5c42\u5b58\u50a8\n--set global.storageClass="alicloud-disk-available"\n\n# SREWorks\u5e73\u53f0\u542f\u52a8\u4f7f\u7528\u7684\u5bb9\u5668\u955c\u50cf\u4ed3\u5e93\n--set global.images.registry="registry.cn-zhangjiakou.aliyuncs.com/sreworks"\n\n# SaaS\u5bb9\u5668\u6784\u5efa\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\n--set appmanager.server.docker.account="sreworks"\n--set appmanager.server.docker.password="***"\n--set appmanager.server.docker.registry="registry.cn-zhangjiakou.aliyuncs.com"\n--set appmanager.server.docker.namespace="builds"\n\n# \u6e90\u7801\u6784\u5efa\u6a21\u5f0f\u7684\u6e90\u7801\u4ed3\u5e93\u6765\u6e90\n--set source.branch="master"\n--set source.repo="https://code.aliyun.com/sreworks_public/mirror.git"\n\n\n# \u66ff\u6362\u57fa\u7840\u5e94\u7528\u7684\u4e3bMySQL\u6570\u636e\u5e93\n# MySQL\u8fd9\u5757\u9700\u8981\u6ce8\u610f\uff0c\u901a\u5e38\u5c06\u4e3bMySQL\u6570\u636e\u5e93\u548c\u6570\u667a\u5316MySQL\u6570\u636e\u5e93(\u541e\u5410\u8f83\u5927)\u5206\u6210\u4e24\u4e2a\n\n--set appmanager.server.database.host="*.mysql.rds.aliyuncs.com" \n--set appmanager.server.database.password="****"\n--set appmanager.server.database.user="root"\n--set appmanager.server.database.port=3306\n--set appmanagerbase.mysql.enabled=false\n\n# \u66ff\u6362\u6570\u667a\u5316\u5e94\u7528\u7684MySQL\u6570\u636e\u5e93\n--set saas.dataops.dbHost="*.mysql.rds.aliyuncs.com"\n--set saas.dataops.dbUser=root\n--set saas.dataops.dbPassword="*****"\n--set saas.dataops.dbPort=3306\n\n# \u66ff\u6362\u6570\u667a\u5316\u5e94\u7528\u7684ElasticSearch\n--set saas.dataops.esHost="*.public.elasticsearch.aliyuncs.com"\n--set saas.dataops.esPort="9200"\n--set saas.dataops.esUser="elastic"\n--set saas.dataops.esPassword="*******"\n\n# \u66ff\u6362\u57fa\u7840\u5e94\u7528\u7684MinIO\u5b58\u50a8\n--set global.minio.accessKey="*******"\n--set global.minio.secretKey="*******"\n--set appmanager.server.package.endpoint="minio.*.com:9000"\n--set appmanagerbase.minio.enabled=false\n')),(0,r.kt)("a",{name:"LdEAB"}),(0,r.kt)("h3",{id:"4-sreworks\u7684\u67b6\u6784\u62d3\u6251\u662f\u600e\u4e48\u6837\u7684"},"4. SREWorks\u7684\u67b6\u6784\u62d3\u6251\u662f\u600e\u4e48\u6837\u7684\uff1f"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(78050).Z,width:"2602",height:"1507"})),(0,r.kt)("a",{name:"AYcoD"}),(0,r.kt)("h3",{id:"5-skywalking-oap-server\u542f\u52a8\u5931\u8d25\u62a5\u9519table-xxx-does-not-exist-oap-is-running-in-no-init-mode-waiting-retry-3s-later"},"5. Skywalking oap-server\u542f\u52a8\u5931\u8d25\uff0c\u62a5\u9519table: xxx does not exist. OAP is running in 'no-init' mode, waiting... retry 3s later."),(0,r.kt)("p",null,"\u8fd9\u4e2a\u662f\u7531\u4e8eSkywalking\u7684TTL\u5931\u6548bug\u5f15\u8d77\uff0c\u76ee\u524d\u6700\u65b0\u76849.2.0\u7248\u672c\u8fd8\u672a\u4fee\u590d\uff0c\u4f46master\u5206\u652f\u5df2\u7ecf\u4fee\u590d\uff0c\u5177\u4f53\u8be6\u60c5\u53ef\u4ee5\u5148\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/skywalking/issues/4938"},"\u5b98\u65b9issue"),"\u3002\u5982\u9047\u8fd9\u79cd\u60c5\u51b5\uff0c\u5f53\u524d\u53ef\u4ee5\u5148\u5220\u9664\u76f8\u5e94\u7684index\u548ctemplate\uff0c\u5728\u8fdb\u884c\u670d\u52a1\u91cd\u542f\u3002"))}d.isMDXComponent=!0},78050:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1660717653235-57d824ed-405a-443d-9d16-51dec02f1fe5.jpeg-57f5dac388054205864eea31ab0fe8f1.png"}}]);