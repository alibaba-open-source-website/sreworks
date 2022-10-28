"use strict";(self.webpackChunksreworks=self.webpackChunksreworks||[]).push([[6082],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>u});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||s;return t?n.createElement(k,o(o({ref:a},p),{},{components:t})):n.createElement(k,o({ref:a},p))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},65309:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const s={title:"7.1 \u5e38\u89c1\u95ee\u9898",date:new Date("2022-03-25T03:39:05.000Z"),toc_max_heading_level:6,toc_min_heading_level:2},o=void 0,i={unversionedId:"iwa896",id:"iwa896",title:"7.1 \u5e38\u89c1\u95ee\u9898",description:"1. \u90e8\u7f72SREWorks\u7684\u57fa\u7840\u6761\u4ef6\u662f\u4ec0\u4e48\uff1f",source:"@site/docs/iwa896.md",sourceDirName:".",slug:"/iwa896",permalink:"/docs/docs/next/iwa896",draft:!1,editUrl:"https://www.yuque.com/sreworks-doc/docs/iwa896",tags:[],version:"current",frontMatter:{title:"7.1 \u5e38\u89c1\u95ee\u9898",date:"2022-03-25T03:39:05.000Z",toc_max_heading_level:6,toc_min_heading_level:2},sidebar:"sidebars",previous:{title:"6.1 \u90e8\u7f72Flink\u4e91\u539f\u751f\u5f00\u6e90\u7248",permalink:"/docs/docs/next/cgczgu"},next:{title:"7.2 \u53c2\u4e0eSREWorks\u5f00\u6e90",permalink:"/docs/docs/next/yc64sk"}},l={},c=[{value:"1. \u90e8\u7f72SREWorks\u7684\u57fa\u7840\u6761\u4ef6\u662f\u4ec0\u4e48\uff1f",id:"1-\u90e8\u7f72sreworks\u7684\u57fa\u7840\u6761\u4ef6\u662f\u4ec0\u4e48",level:3},{value:"2. \u6570\u636e\u8fd0\u7ef4\u5e73\u53f0\uff08dataops\uff09\u5e94\u7528\u9ed8\u8ba4\u90e8\u7f72\u7684\u7ec4\u4ef6\u6709\u54ea\u4e9b\uff1f",id:"2-\u6570\u636e\u8fd0\u7ef4\u5e73\u53f0dataops\u5e94\u7528\u9ed8\u8ba4\u90e8\u7f72\u7684\u7ec4\u4ef6\u6709\u54ea\u4e9b",level:3},{value:"3. v1.1\u7248\u672c\u652f\u6301\u6570\u636e\u7ec4\u4ef6\u53ef\u63d2\u62d4\u80fd\u529b\u4f1a\u5e26\u6765\u54ea\u4e9b\u53d8\u5316\uff1f",id:"3-v11\u7248\u672c\u652f\u6301\u6570\u636e\u7ec4\u4ef6\u53ef\u63d2\u62d4\u80fd\u529b\u4f1a\u5e26\u6765\u54ea\u4e9b\u53d8\u5316",level:3},{value:"4. \u5982\u4f55\u586b\u5199\u7ec4\u4ef6\u4e2d\u7684HELM\u793e\u533a\u4ed3\u5e93",id:"4-\u5982\u4f55\u586b\u5199\u7ec4\u4ef6\u4e2d\u7684helm\u793e\u533a\u4ed3\u5e93",level:3},{value:"5. Appmanager\u8fd0\u884c\u62a5\u9519\uff0c\u65e0\u6cd5\u521b\u5efa\u65b0\u7ebf\u7a0b",id:"5-appmanager\u8fd0\u884c\u62a5\u9519\u65e0\u6cd5\u521b\u5efa\u65b0\u7ebf\u7a0b",level:3},{value:"6. Helm\u5305\u6709\u54ea\u4e9b\u5b89\u88c5\u53c2\u6570?",id:"6-helm\u5305\u6709\u54ea\u4e9b\u5b89\u88c5\u53c2\u6570",level:3},{value:"7. SREWorks\u7684\u67b6\u6784\u62d3\u6251\u662f\u600e\u4e48\u6837\u7684\uff1f",id:"7-sreworks\u7684\u67b6\u6784\u62d3\u6251\u662f\u600e\u4e48\u6837\u7684",level:3},{value:"8. Skywalking oap-server\u542f\u52a8\u5931\u8d25\uff0c\u62a5\u9519table: xxx does not exist. OAP is running in &#39;no-init&#39; mode, waiting... retry 3s later.",id:"8-skywalking-oap-server\u542f\u52a8\u5931\u8d25\u62a5\u9519table-xxx-does-not-exist-oap-is-running-in-no-init-mode-waiting-retry-3s-later",level:3}],p={toc:c};function d(e){let{components:a,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"VDP4m"}),(0,r.kt)("h3",{id:"1-\u90e8\u7f72sreworks\u7684\u57fa\u7840\u6761\u4ef6\u662f\u4ec0\u4e48"},"1. \u90e8\u7f72SREWorks\u7684\u57fa\u7840\u6761\u4ef6\u662f\u4ec0\u4e48\uff1f"),(0,r.kt)("p",null,"\u60a8\u9700\u8981\u4e00\u4e2aKubernetes\u96c6\u7fa4\u3002SREWorks\u4e13\u4e3a\u4e91\u539f\u751f\u4e0b\u7684\u8fd0\u7ef4\u800c\u751f\uff0c\u540c\u65f6SREWorks\u81ea\u8eab\u4e5f\u662f\u57fa\u4e8e\u4e91\u539f\u751f\u67b6\u6784\u7684\u843d\u5730\u5b9e\u73b0\u3002"),(0,r.kt)("a",{name:"uxaTe"}),(0,r.kt)("h3",{id:"2-\u6570\u636e\u8fd0\u7ef4\u5e73\u53f0dataops\u5e94\u7528\u9ed8\u8ba4\u90e8\u7f72\u7684\u7ec4\u4ef6\u6709\u54ea\u4e9b"},"2. \u6570\u636e\u8fd0\u7ef4\u5e73\u53f0\uff08dataops\uff09\u5e94\u7528\u9ed8\u8ba4\u90e8\u7f72\u7684\u7ec4\u4ef6\u6709\u54ea\u4e9b\uff1f"),(0,r.kt)("p",null,"\u5f00\u6e90\u7248SREWorks\u4e2d\u57fa\u4e8e\u6d41\u884c\u7684\u4e1a\u754c\u5f00\u6e90\u8f6f\u4ef6\u6784\u7b51\u4e86\u8fd0\u7ef4\u6570\u4ed3\u53ca\u6570\u636e\u91c7\u96c6\u52a0\u5de5\u7b49\u76f8\u5173\u80fd\u529b\uff0c\u5176\u4e2d\u4ee5Elasticsearch\u548cvvp\uff08flink\u7684\u4e91\u539f\u751f\u7248\u672c\uff09\u4e3a\u4e3b\u3002",(0,r.kt)("br",null),(0,r.kt)("img",{alt:"image.png",src:t(50201).Z,width:"2860",height:"1318"})),(0,r.kt)("a",{name:"biXgt"}),(0,r.kt)("h3",{id:"3-v11\u7248\u672c\u652f\u6301\u6570\u636e\u7ec4\u4ef6\u53ef\u63d2\u62d4\u80fd\u529b\u4f1a\u5e26\u6765\u54ea\u4e9b\u53d8\u5316"},"3. v1.1\u7248\u672c\u652f\u6301\u6570\u636e\u7ec4\u4ef6\u53ef\u63d2\u62d4\u80fd\u529b\u4f1a\u5e26\u6765\u54ea\u4e9b\u53d8\u5316\uff1f"),(0,r.kt)("p",null,"\u6570\u636e\u7ec4\u4ef6\u53ef\u63d2\u62d4\u529f\u80fd\u5373\u53ef\u4ee5\u7ed9\u7528\u6237\u5e26\u6765\u66f4\u5927\u7075\u6d3b\u6027\uff0c\u4e5f\u4f7f\u5f97SREWorks\u6613\u7528\u6027\u5f97\u5230\u6781\u5927\u63d0\u9ad8\u3002\u65b0\u7248\u672c\u5c06ElasticSearch\u3001MySQL\u4ee5\u53caMinIO\u7b49\u901a\u8fc7\u62bd\u53d6\u90e8\u7f72\u53d8\u91cf\u65b9\u5f0f\u5b9e\u73b0\u7ec4\u4ef6\u7684\u53ef\u63d2\u62d4\u80fd\u529b\u3002",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},"ElasticSearch"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v1.0\u7248\u672c\u5185\u7f6eES\u9ed8\u8ba4\u4e0d\u5f00\u542f\u7528\u6237\u8ba4\u8bc1\uff0cV1.1\u65b0\u7248\u672c\u5185\u7f6eES\u5b9e\u4f8b\u9ed8\u8ba4\u5f00\u542f\u5185\u7f6e\u7528\u6237(elastic)\u8ba4\u8bc1\u529f\u80fd\uff0c\u540e\u7eed\u7528\u6237\u5728\u4f7f\u7528ES\u670d\u52a1\u65f6\u9700\u8981\u5e26\u8ba4\u8bc1\u4fe1\u606f\u8bbf\u95ee\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --output /dev/null -u "elastic:${ELASTICSEARCH_PASSWORD}" "http://localhost:9200"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5185\u7f6eES\u5b9e\u4f8b\uff0c\u9ed8\u8ba4\u5b89\u88c5elasticsearch-analysis-ik\u5206\u8bcd\u5668\uff0c\u7528\u4e8e\u7ad9\u70b9\u641c\u7d22\u670d\u52a1\u3002\u66ff\u6362\u6210\u7528\u6237\u81ea\u5b9a\u4e49ES\u5b9e\u4f8b\u540e\uff0c\u9700\u8981\u624b\u5de5\u5b89\u88c5\u8be5\u63d2\u4ef6\uff0c\u5426\u5219\u641c\u7d22\u670d\u52a1\u65e0\u6cd5\u6b63\u5e38\u4f7f\u7528\uff0c",(0,r.kt)("a",{parentName:"li",href:"https://github.com/medcl/elasticsearch-analysis-ik"},"\u79fb\u6b65\u5b89\u88c5\u6307\u5357")),(0,r.kt)("li",{parentName:"ul"},"\u63a8\u8350ES\u5b9e\u4f8b\u7248\u672c 7.0+")),(0,r.kt)("a",{name:"cB4Be"}),(0,r.kt)("h3",{id:"4-\u5982\u4f55\u586b\u5199\u7ec4\u4ef6\u4e2d\u7684helm\u793e\u533a\u4ed3\u5e93"},"4. \u5982\u4f55\u586b\u5199\u7ec4\u4ef6\u4e2d\u7684HELM\u793e\u533a\u4ed3\u5e93"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:t(66582).Z,width:"2208",height:"838"})),(0,r.kt)("a",{name:"pyyIT"}),(0,r.kt)("h3",{id:"5-appmanager\u8fd0\u884c\u62a5\u9519\u65e0\u6cd5\u521b\u5efa\u65b0\u7ebf\u7a0b"},"5. Appmanager\u8fd0\u884c\u62a5\u9519\uff0c\u65e0\u6cd5\u521b\u5efa\u65b0\u7ebf\u7a0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"java.lang.OutOfMemoryError: unable to create native thread\n")),(0,r.kt)("p",null,"\u9700\u8981\u5c06 /var/lib/kubelet/config.yaml \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"podPidsLimit: 1000")," \u6539\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"podPidsLimit: -1")),(0,r.kt)("a",{name:"LYcu3"}),(0,r.kt)("h3",{id:"6-helm\u5305\u6709\u54ea\u4e9b\u5b89\u88c5\u53c2\u6570"},"6. Helm\u5305\u6709\u54ea\u4e9b\u5b89\u88c5\u53c2\u6570?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# \u5e73\u53f0\u540d\u79f0\n--set platformName="SREWorks"\n\n# \u5e73\u53f0\u56fe\u6807, icon\u683c\u5f0f\u8981\u6c42\uff08\u6bd4\u5982\uff1a48*48\uff09\n--set platformLogo="https://sreworks.oss-cn-beijing.aliyuncs.com/logo/demo.png" \n\n# \u5e95\u5c42\u5b58\u50a8\n--set global.storageClass="alicloud-disk-available"\n\n# SREWorks\u5e73\u53f0\u542f\u52a8\u4f7f\u7528\u7684\u5bb9\u5668\u955c\u50cf\u4ed3\u5e93\n--set global.images.registry="registry.cn-zhangjiakou.aliyuncs.com/sreworks"\n\n# SaaS\u5bb9\u5668\u6784\u5efa\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\n--set appmanager.server.docker.account="sreworks"\n--set appmanager.server.docker.password="***"\n--set appmanager.server.docker.registry="registry.cn-zhangjiakou.aliyuncs.com"\n--set appmanager.server.docker.namespace="builds"\n\n# \u6e90\u7801\u6784\u5efa\u6a21\u5f0f\u7684\u6e90\u7801\u4ed3\u5e93\u6765\u6e90\n--set source.branch="master"\n--set source.repo="https://code.aliyun.com/sreworks_public/mirror.git"\n\n\n# \u66ff\u6362\u57fa\u7840\u5e94\u7528\u7684\u4e3bMySQL\u6570\u636e\u5e93\n# MySQL\u8fd9\u5757\u9700\u8981\u6ce8\u610f\uff0c\u901a\u5e38\u5c06\u4e3bMySQL\u6570\u636e\u5e93\u548c\u6570\u667a\u5316MySQL\u6570\u636e\u5e93(\u541e\u5410\u8f83\u5927)\u5206\u6210\u4e24\u4e2a\n\n--set appmanager.server.database.host="*.mysql.rds.aliyuncs.com" \n--set appmanager.server.database.password="****"\n--set appmanager.server.database.user="root"\n--set appmanager.server.database.port=3306\n--set appmanagerbase.mysql.enabled=false\n\n# \u66ff\u6362\u6570\u667a\u5316\u5e94\u7528\u7684MySQL\u6570\u636e\u5e93\n--set saas.dataops.dbHost="*.mysql.rds.aliyuncs.com"\n--set saas.dataops.dbUser=root\n--set saas.dataops.dbPassword="*****"\n--set saas.dataops.dbPort=3306\n\n# \u66ff\u6362\u6570\u667a\u5316\u5e94\u7528\u7684ElasticSearch\n--set saas.dataops.esHost="*.public.elasticsearch.aliyuncs.com"\n--set saas.dataops.esPort="9200"\n--set saas.dataops.esUser="elastic"\n--set saas.dataops.esPassword="*******"\n\n# \u66ff\u6362\u57fa\u7840\u5e94\u7528\u7684MinIO\u5b58\u50a8\n--set global.minio.accessKey="*******"\n--set global.minio.secretKey="*******"\n--set appmanager.server.package.endpoint="minio.*.com:9000"\n--set appmanagerbase.minio.enabled=false\n')),(0,r.kt)("a",{name:"LdEAB"}),(0,r.kt)("h3",{id:"7-sreworks\u7684\u67b6\u6784\u62d3\u6251\u662f\u600e\u4e48\u6837\u7684"},"7. SREWorks\u7684\u67b6\u6784\u62d3\u6251\u662f\u600e\u4e48\u6837\u7684\uff1f"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(78050).Z,width:"2602",height:"1507"})),(0,r.kt)("a",{name:"AYcoD"}),(0,r.kt)("h3",{id:"8-skywalking-oap-server\u542f\u52a8\u5931\u8d25\u62a5\u9519table-xxx-does-not-exist-oap-is-running-in-no-init-mode-waiting-retry-3s-later"},"8. Skywalking oap-server\u542f\u52a8\u5931\u8d25\uff0c\u62a5\u9519table: xxx does not exist. OAP is running in 'no-init' mode, waiting... retry 3s later."),(0,r.kt)("p",null,"\u8fd9\u4e2a\u662f\u7531\u4e8eSkywalking\u7684TTL\u5931\u6548bug\u5f15\u8d77\uff0c\u76ee\u524d\u6700\u65b0\u76849.2.0\u7248\u672c\u8fd8\u672a\u4fee\u590d\uff0c\u4f46master\u5206\u652f\u5df2\u7ecf\u4fee\u590d\uff0c\u5177\u4f53\u8be6\u60c5\u53ef\u4ee5\u5148\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/skywalking/issues/4938"},"\u5b98\u65b9issue"),"\u3002\u5982\u9047\u8fd9\u79cd\u60c5\u51b5\uff0c\u5f53\u524d\u53ef\u4ee5\u5148\u5220\u9664\u76f8\u5e94\u7684index\u548ctemplate\uff0c\u5728\u8fdb\u884c\u670d\u52a1\u91cd\u542f\u3002"))}d.isMDXComponent=!0},66582:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/1657264819758-49bc846b-3640-448f-9de6-4836dd4c0f7d-74b3afee661134ab250e4f2c3dbb6fa3.png"},50201:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/1657264820884-baeed9df-9e15-44cf-9b17-14837eefd80c-3901005f90012ff8da7aeba42f300cbf.png"},78050:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/1660717653235-57d824ed-405a-443d-9d16-51dec02f1fe5.jpeg-57f5dac388054205864eea31ab0fe8f1.png"}}]);