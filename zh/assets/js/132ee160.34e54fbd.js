"use strict";(self.webpackChunksreworks=self.webpackChunksreworks||[]).push([[9203],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),o=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),k=o(a),u=n,g=k["".concat(i,".").concat(u)]||k[u]||d[u]||l;return a?r.createElement(g,s(s({ref:t},p),{},{components:a})):r.createElement(g,s({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=k;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var o=2;o<l;o++)s[o]=a[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},18584:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={title:"\u57fa\u4e8eElasticsearch\u751f\u957f\u7684SREWorks\u6570\u636e\u5316\u8fd0\u7ef4\u4f53\u7cfb",date:new Date("2022-08-22T23:07:28.000Z"),toc_max_heading_level:6,toc_min_heading_level:2},s=void 0,c={permalink:"/column/xsn02u",source:"@site/column/xsn02u.md",title:"\u57fa\u4e8eElasticsearch\u751f\u957f\u7684SREWorks\u6570\u636e\u5316\u8fd0\u7ef4\u4f53\u7cfb",description:"\u5f00\u6e90Elasticsearch\u662f\u4e00\u4e2a\u57fa\u4e8eLucene\u7684\u5b9e\u65f6\u5206\u5e03\u5f0f\u7684\u641c\u7d22\u4e0e\u5206\u6790\u5f15\u64ce\uff0c\u662f\u9075\u4eceApache\u5f00\u6e90\u6761\u6b3e\u7684\u4e00\u6b3e\u5f00\u6e90\u4ea7\u54c1\uff0c\u662f\u5f53\u524d\u4e3b\u6d41\u7684\u4f01\u4e1a\u7ea7\u641c\u7d22\u5f15\u64ce\u3002\u4f5c\u4e3a\u4e00\u6b3e\u57fa\u4e8eRESTful API\u7684\u5206\u5e03\u5f0f\u670d\u52a1\uff0cElasticsearch\u53ef\u4ee5\u5feb\u901f\u5730\u3001\u8fd1\u4e4e\u4e8e\u51c6\u5b9e\u65f6\u5730\u5b58\u50a8\u3001\u67e5\u8be2\u548c\u5206\u6790\u8d85\u5927\u6570\u636e\u96c6\uff0c\u901a\u5e38\u88ab\u7528\u6765\u4f5c\u4e3a\u6784\u5efa\u590d\u6742\u67e5\u8be2\u7279\u6027\u548c\u9700\u6c42\u5f3a\u5927\u5e94\u7528\u7684\u57fa\u7840\u5f15\u64ce\u3002",date:"2022-08-22T23:07:28.000Z",formattedDate:"2022\u5e748\u670822\u65e5",tags:[],readingTime:12.29,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u57fa\u4e8eElasticsearch\u751f\u957f\u7684SREWorks\u6570\u636e\u5316\u8fd0\u7ef4\u4f53\u7cfb",date:"2022-08-22T23:07:28.000Z",toc_max_heading_level:6,toc_min_heading_level:2},prevItem:{title:"SREWorks\u524d\u7aef\u4f4e\u4ee3\u7801\u5de5\u7a0b\u8bbe\u8ba1\u6982\u89c8",permalink:"/column/tpx7u2"}},i={authorsImageUrls:[]},o=[{value:"1. \u6570\u636e\u5316\u8fd0\u7ef4\u4f53\u7cfb\u662f\u4ec0\u4e48",id:"1-\u6570\u636e\u5316\u8fd0\u7ef4\u4f53\u7cfb\u662f\u4ec0\u4e48",level:3},{value:"2. SREWorks\u6570\u636e\u5316\u8fd0\u7ef4\u5e73\u53f0",id:"2-sreworks\u6570\u636e\u5316\u8fd0\u7ef4\u5e73\u53f0",level:3},{value:"3. \u57fa\u4e8eSREWorks\u6570\u636e\u5316\u8fd0\u7ef4\u5b9e\u8df5",id:"3-\u57fa\u4e8esreworks\u6570\u636e\u5316\u8fd0\u7ef4\u5b9e\u8df5",level:3},{value:"3.1 \u7a33\u5b9a\u6027\u5efa\u8bbe",id:"31-\u7a33\u5b9a\u6027\u5efa\u8bbe",level:4},{value:"3.2 \u6210\u672c\u5efa\u8bbe",id:"32-\u6210\u672c\u5efa\u8bbe",level:4},{value:"3.3 \u6548\u7387\u5efa\u8bbe",id:"33-\u6548\u7387\u5efa\u8bbe",level:4},{value:"3.4 \u8fd0\u8425\u4e2d\u5fc3",id:"34-\u8fd0\u8425\u4e2d\u5fc3",level:4},{value:"4. \u7ed3\u8bed",id:"4-\u7ed3\u8bed",level:3}],p={toc:o};function d(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5f00\u6e90Elasticsearch\u662f\u4e00\u4e2a\u57fa\u4e8eLucene\u7684\u5b9e\u65f6\u5206\u5e03\u5f0f\u7684\u641c\u7d22\u4e0e\u5206\u6790\u5f15\u64ce\uff0c\u662f\u9075\u4eceApache\u5f00\u6e90\u6761\u6b3e\u7684\u4e00\u6b3e\u5f00\u6e90\u4ea7\u54c1\uff0c\u662f\u5f53\u524d\u4e3b\u6d41\u7684\u4f01\u4e1a\u7ea7\u641c\u7d22\u5f15\u64ce\u3002\u4f5c\u4e3a\u4e00\u6b3e\u57fa\u4e8eRESTful API\u7684\u5206\u5e03\u5f0f\u670d\u52a1\uff0cElasticsearch\u53ef\u4ee5\u5feb\u901f\u5730\u3001\u8fd1\u4e4e\u4e8e\u51c6\u5b9e\u65f6\u5730\u5b58\u50a8\u3001\u67e5\u8be2\u548c\u5206\u6790\u8d85\u5927\u6570\u636e\u96c6\uff0c\u901a\u5e38\u88ab\u7528\u6765\u4f5c\u4e3a\u6784\u5efa\u590d\u6742\u67e5\u8be2\u7279\u6027\u548c\u9700\u6c42\u5f3a\u5927\u5e94\u7528\u7684\u57fa\u7840\u5f15\u64ce\u3002"),(0,n.kt)("p",null,"2017\u5e74\uff0c\u963f\u91cc\u4e91\u643a\u624bElastic\u5408\u4f5c\u63a8\u51fa\u4e86\u963f\u91cc\u4e91Elasticsearch\u670d\u52a1\uff0c\u5728100%\u517c\u5bb9\u5f00\u6e90\u529f\u80fd\u7684\u540c\u65f6\uff0c\u652f\u6301\u5f00\u7bb1\u5373\u7528\u3001\u6309\u9700\u4ed8\u8d39\u3002\u901a\u8fc7 Elastic \u521b\u65b0\u7684\u68c0\u7d22\u6280\u672f\u4e0e\u963f\u91cc\u4e91\u81ea\u7814\u7684\u4e91\u539f\u751f\u9ad8\u6027\u80fd\u5185\u6838\u3001\u8fbe\u6469\u9662 NLP \u5206\u8bcd\u4e0e\u5411\u91cf\u68c0\u7d22\u7b49\u80fd\u529b\uff0c\u5e2e\u52a9\u4f01\u4e1a\u5ba2\u6237\u63d0\u5347\u4e1a\u52a1\u6210\u6548\uff0c\u5e76\u8282\u7ea6\u8d39\u7528\u652f\u51fa\u3002\u5728\u5207\u5b9e\u63d0\u9ad8\u4f01\u4e1a\u5e94\u7528\u7a0b\u5e8f\u6027\u80fd\u7684\u540c\u65f6\uff0c\u63d0\u5347\u4e1a\u52a1\u7684\u654f\u6377\u6027\u548c\u667a\u80fd\u5316\uff0c\u7f29\u77ed\u89e3\u51b3\u95ee\u9898\u6240\u9700\u65f6\u95f4\uff0c\u4f7f\u5ba2\u6237\u53ef\u4ee5\u4e13\u6ce8\u4e8e\u81ea\u8eab\u4e1a\u52a1\u521b\u65b0\u3002"),(0,n.kt)("p",null,'\u57fa\u4e8e"\u6e90\u4e8e\u5f00\u6e90\uff0c\u53c8\u4e0d\u6b62\u4e8e\u5f00\u6e90"\u7684\u4ea7\u54c1\u7406\u5ff5\uff0c\u963f\u91cc\u4e91Elasticsearch\u6301\u7eed\u5728\u5305\u542b\u667a\u80fd\u8fd0\u7ef4\u5728\u5185\u7684\u53ef\u89c2\u6d4b\u573a\u666f\u8fdb\u884c\u4e91\u539f\u751f\u5f15\u64ce\u80fd\u529b\u5347\u7ea7\uff0c\u4f5c\u4e3a\u4e1a\u5185\u9996\u4e2aServerless Elasticsearch\u4e91\u670d\u52a1\uff0c\u4e91\u4e0a\u65e5\u5fd7\u589e\u5f3a\u5f15\u64ce\u53ef\u63d0\u4f9b\u57fa\u4e8e\u8bfb\u5199\u5206\u79bb\u67b6\u6784\u7684Indexing Service\u5199\u5165\u52a0\u901f\u670d\u52a1\u3001Openstore\u6d77\u91cf\u5b58\u50a8\u670d\u52a1\uff0c\u4ece\u800c\u5b9e\u73b0Elasticsearch\u5199\u5165\u53ca\u5b58\u50a8Serverless\uff0c\u4e3a\u7528\u6237\u5e26\u6765\u66f4\u4f4e\u6210\u672c\u3001\u66f4\u9ad8\u6027\u80fd\u3001\u66f4\u7b80\u5355\u6613\u7528\u7684\u5168\u89c2\u6d4b\u573a\u666f\u80fd\u529b\u3002'),(0,n.kt)("p",null,"ELK\u4f5c\u4e3a\u4e1a\u754c\u5904\u7406\u4e0e\u5206\u6790\u65e5\u5fd7\u9996\u9009\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u7531\u641c\u7d22\u5f15\u64ceElasticsearch\u3001\u91c7\u96c6\u4e0e\u89e3\u6790\u5de5\u5177 Logstash\u3001\u8f7b\u91cf\u7ea7\u91c7\u96c6\u7ec4\u4ef6Beats\u3001\u53ef\u89c6\u5316\u5206\u6790\u5de5\u5177Kibana\u7b49\u5de5\u5177\u7ec4\u6210\uff0c\u5f62\u6210\u4e86\u4e00\u6574\u5957\u751f\u6001\u77e9\u9635\u3002\u76ee\u524d\u963f\u91cc\u4e91\u5df2\u7ecf\u6210\u529f\u5c06\u5168\u5957ELK\u642c\u5230\u4e86\u4e91\u4e0a\u4e3a\u7528\u6237\u63d0\u4f9b\u670d\u52a1\uff0c\u53ef\u4ee5\u88ab\u5e7f\u6cdb\u5e94\u7528\u4e8e\u5b9e\u65f6\u65e5\u5fd7\u5904\u7406\u3001\u5168\u6587\u641c\u7d22\u548c\u6570\u636e\u5206\u6790\u7b49\u9886\u57df\u3002SREWorks\u6b63\u662f\u57fa\u4e8e\u4ee5Elasticsearch\u4e3a\u4e3b\u7684\u751f\u6001\u77e9\u9635\uff0c\u6784\u5efa\u4e86\u4e00\u5957\u5e94\u7528\u5168\u89c2\u6d4b\u6570\u636e\u5316\u8fd0\u7ef4\u6700\u4f73\u5b9e\u8df5\u3002"),(0,n.kt)("a",{name:"q0lag"}),(0,n.kt)("h3",{id:"1-\u6570\u636e\u5316\u8fd0\u7ef4\u4f53\u7cfb\u662f\u4ec0\u4e48"},"1. \u6570\u636e\u5316\u8fd0\u7ef4\u4f53\u7cfb\u662f\u4ec0\u4e48"),(0,n.kt)("p",null,"\u6570\u636e\u5316\u8fd0\u7ef4\u4f53\u7cfb\uff0c\u662f\u4e00\u5957\u628a\u6240\u6709\u7cfb\u7edf\u7684\u8fd0\u7ef4\u6570\u636e\u91c7\u96c6\u8d77\u6765\u3001\u771f\u6b63\u6253\u901a\uff0c\u6df1\u5ea6\u6316\u6398\u8fd9\u4e9b\u6570\u636e\u7684\u4ef7\u503c\uff0c\u901a\u8fc7\u6570\u636e\u9a71\u52a8\u8fd0\u7ef4\u5e76\u4e3a\u8fd0\u7ef4\u63d0\u4f9b\u6570\u636e\u51b3\u7b56\uff0c\u540c\u65f6\u80fd\u5c06\u751f\u4ea7\u7cfb\u7edf\u8fdb\u884c\u201c\u8fd0\u7ef4\u91cf\u5316\u7ba1\u7406\u201d\u7684\u6570\u636e\u5316\u8fd0\u7ef4\u4e1a\u52a1\u6a21\u578b\u3002\u57fa\u4e8e\u8be5\u6a21\u578b\u5efa\u7acb\u6807\u51c6\u5316\u8fd0\u7ef4\u6570\u4ed3\uff0c\u5efa\u8bbe\u6570\u636e\u8fd0\u7ef4\u5e73\u53f0\uff0c\u5728\u5e73\u53f0\u4e2d\u89c4\u8303\u8fd0\u7ef4\u6570\u636e\u7684\u91c7\u96c6\uff0c\u5b58\u50a8\uff0c\u8ba1\u7b97\u4ee5\u53ca\u5206\u6790\uff0c\u5e76\u63d0\u4f9b\u4e00\u7cfb\u5217\u6570\u636e\u5316\u670d\u52a1\uff0c\u4f9b\u4e0a\u5c42\u8fd0\u7ef4\u573a\u666f\u4f7f\u7528\u3002"),(0,n.kt)("a",{name:"CKt9q"}),(0,n.kt)("h3",{id:"2-sreworks\u6570\u636e\u5316\u8fd0\u7ef4\u5e73\u53f0"},"2. SREWorks\u6570\u636e\u5316\u8fd0\u7ef4\u5e73\u53f0"),(0,n.kt)("p",null,"SREWorks\u6570\u636e\u5316\u8fd0\u7ef4\u5e73\u53f0\u5305\u542b\u4e00\u4e2a\u6838\u5fc3\u548c\u591a\u4e2a\u6570\u636e\u670d\u52a1\uff0c\u4e00\u4e2a\u6838\u5fc3\u5373\u8fd0\u7ef4\u6570\u636e\u4ed3\u5e93\uff0c\u63d0\u4f9b\u6807\u51c6\u8fd0\u7ef4\u6570\u636e\u6a21\u578b\uff1b\u591a\u4e2a\u6570\u636e\u670d\u52a1\u5373\u56f4\u7ed5\u8fd0\u7ef4\u6570\u636e\u7684\u91c7\u96c6\u3001\u5b58\u50a8\u3001\u8ba1\u7b97\u4ee5\u53ca\u5206\u6790\u7684\u6570\u636e\u5316\u94fe\u8def\uff0c\u63d0\u4f9b\u7684\u89c4\u8303\u5316\u6570\u636e\u670d\u52a1\uff0c\u652f\u6491\u5e94\u7528\u7684\u8fd0\u7ef4\u91cf\u5316\u3002",(0,n.kt)("br",null)," ",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"p"},"\u8fd0\u7ef4\u6570\u4ed3"),(0,n.kt)("br",null),"\u57fa\u4e8e\u5f00\u6e90Elasticsearch\u5efa\u8bbe\u6807\u51c6\u5316\u8fd0\u7ef4\u6570\u4ed3\uff0c\u6293\u4f4f\u6570\u636e\u5316\u8fd0\u7ef4\u672c\u8d28\uff0c\u62bd\u8c61\u4e09\u5927\u6570\u636e\u4e3b\u9898\u548c\u4e5d\u4e2a\u6570\u636e\u57df\uff0c\u5185\u7f6e\u6db5\u76d6\u4e91\u539f\u751f\u6570\u636e\u8fd0\u7ef4\u573a\u666f\u7684\u6570\u636e\u5b9e\u4f53\u548c\u6570\u636e\u6a21\u578b\u3002\u6570\u4ed3\u5177\u5907\u7075\u6d3b\u7684\u7528\u6237\u81ea\u5b9a\u4e49\u5b9e\u4f53/\u6a21\u578b\u80fd\u529b\uff0c\u5145\u5206\u6ee1\u8db3\u7528\u6237\u7684\u4e2a\u6027\u5316\u9700\u6c42\u3002",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"image.png",src:a(65143).Z,width:"749",height:"370"}),(0,n.kt)("br",null),"\u6570\u4ed3\u6570\u636e\u540e\u7aef\u91c7\u7528Elasticsearch\u5b58\u50a8\uff0c\u5176\u5206\u5e03\u5f0f\u7d22\u5f15\u67b6\u6784\u3001\u591a\u526f\u672c\u3001\u7d22\u5f15\u751f\u547d\u5468\u671f\u7ba1\u7406\u4ee5\u53ca\u6570\u636e\u51b7\u70ed\u5b58\u50a8\u5206\u79bb\u7b49\u7279\u6027\uff0c\u5f88\u597d\u7684\u6ee1\u8db3\u4e86\u6570\u4ed3\u7684\u7a33\u5b9a\u6027\u548c\u52a8\u6001\u6027\u57fa\u672c\u7279\u6027\u3002\u540c\u65f6\u53ef\u4ee5\u5bf9\u63a5\u591a\u79cd\u6570\u636e\u5904\u7406\u5de5\u5177(Logstash\u3001Spark\u3001Flink\u3001APM Server)\uff0c\u6700\u7ec8\u6570\u636e\u843d\u5730Elasticsearch\uff0c\u652f\u6491\u8d77\u6574\u4e2a\u8fd0\u7ef4\u6570\u4ed3\u7684\u5b58\u50a8\u548c\u68c0\u7d22\u80fd\u529b\u3002",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"image.png",src:a(43164).Z,width:"2539",height:"613"}),(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e\u91c7\u96c6\u670d\u52a1"),(0,n.kt)("br",null),"\u96c6\u6210metricbeat\u3001filebeat\u3001skywalking\u7b49\u6570\u636e\u91c7\u96c6agent\uff0c\u4ee5\u5168\u6258\u7ba1\u65b9\u5f0f\uff0c\u8fdb\u884c\u53ef\u89c2\u6d4b\u6570\u636e\u91c7\u96c6\uff0c\u5305\u62ecNode/Pod/Container\u8d44\u6e90/\u8d1f\u8f7d\u6307\u6807\u3001\u72b6\u6001\u6307\u6807\u3001\u8fd0\u7ef4\u4e8b\u4ef6\u3001Prometheus\u5916\u56f4\u6307\u6807\u3001\u670d\u52a1(\u5bb9\u5668)\u65e5\u5fd7\u91c7\u96c6\u89e3\u6790\u3001\u670d\u52a1\u8ffd\u8e2a\u8c03\u7528\u94fe\u91c7\u96c6\u5206\u6790\u7b49\u3002metricbeat\u652f\u6301\u57fa\u4e8e\u6807\u7b7e\u7684\u670d\u52a1\u81ea\u52a8\u53d1\u73b0\u80fd\u529b\uff0c\u9ed8\u8ba4\u76d1\u542c10800\u7aef\u53e3\uff0c\u4e3b\u52a8\u91c7\u96c6\u6ee1\u8db3\u6807\u7b7e\u6761\u4ef6\u670d\u52a1\u4e0a\u62a5\u7684\u4e1a\u52a1\u6307\u6807\u6570\u636e\u3002",(0,n.kt)("br",null),"\u4f5c\u4e1a\u5e73\u53f0\u91c7\u96c6\u573a\u666f\u670d\u52a1\uff0c\u5c5e\u4e8e\u81ea\u7814\u6570\u636e\u91c7\u96c6\u670d\u52a1\uff0c\u652f\u6301\u591a\u79cd\u6570\u636e\u91c7\u96c6\u811a\u672c\uff0c\u5173\u8054\u6570\u4ed3\u6a21\u578b\uff0c\u901a\u8fc7SREWorks\u8fd0\u7ef4\u6570\u4ed3\u6258\u7ba1\u4e1a\u52a1\u7684\u8fd0\u7ef4\u6570\u636e\u3002",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"image.png",src:a(33168).Z,width:"1427",height:"1141"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e\u8ba1\u7b97/\u5206\u6790\u670d\u52a1"),(0,n.kt)("br",null),"\u5f00\u6e90Apache Flink\u662f\u4e00\u4e2a\u2f00\u7ad9\u5f0f\u5b9e\u65f6\u5927\u6570\u636e\u5206\u6790\u5e73\u53f0\uff0c\u901a\u8fc7\u6807\u51c6SQL\u964d\u4f4e\u4e1a\u52a1\u5f00\u53d1\u95e8\u69db\uff0c\u63d0\u4f9b\u7aef\u5230\u7aef\u5b9e\u65f6\u6570\u636e\u5206\u6790\u80fd\u529b\u3002\u540c\u65f6\u5185\u7f6e\u5e38\u89c4\u6570\u636e\u5904\u7406UDF(\u9608\u503c\u68c0\u6d4b\u3001\u6570\u636e\u805a\u5408\u3001\u6570\u636e\u964d\u91c7\u6837)\uff0c\u652f\u6491\u65f6\u5e8f\u6570\u636e\u7684\u6d41\u5f0f\u52a0\u5de5\u5904\u7406\u3002",(0,n.kt)("br",null),"\u4f5c\u4e1a\u5e73\u53f0\u6570\u636e\u5316\u573a\u666f\u670d\u52a1\uff0c\u8986\u76d6\u5de1\u68c0\u3001\u5206\u6790\u3001\u8bca\u65ad\u7b49\u591a\u4e2a\u6570\u636e\u5316\u573a\u666f\uff0c\u53ef\u81ea\u5b9a\u4e49\u6570\u636e\u5904\u7406\u903b\u8f91\uff0c\u6ee1\u8db3\u7528\u6237\u4e2a\u6027\u5316\u6570\u636e\u5904\u7406\u8981\u6c42\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6307\u6807\u670d\u52a1"),(0,n.kt)("br",null),"\u63d0\u4f9b\u6307\u6807\u5b9a\u4e49\u548c\u6307\u6807\u5b9e\u4f8b\u7684\u914d\u7f6e\u4e0e\u7ba1\u7406\uff0c\u5df2\u7ecf\u5185\u7f6e\u57fa\u7840\u8d44\u6e90\u548c\u57fa\u7840\u6027\u80fd\u6307\u6807\uff0c\u7528\u6237\u53ef\u4ee5\u6309\u9700\u65b0\u589e\u6307\u6807\u3002\u65b0\u589e\u6307\u6807\u53ef\u4ee5\u5173\u8054\u5230\u91c7\u96c6\u573a\u666f\u670d\u52a1\uff0c\u652f\u6301\u6307\u6807\u6570\u636e\u63a8\u9001kafka\u961f\u5217\uff0c\u7528\u4e8e\u8fdb\u884c\u4e0b\u6e38\u6570\u636e\u8ba1\u7b97\u6d88\u8d39\u3002",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"image.png",src:a(34001).Z,width:"1793",height:"930"}),(0,n.kt)("br",null),"**  ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("br",null)),"\u6570\u636e\u96c6\u670d\u52a1**",(0,n.kt)("br",null),"\u6570\u636e\u96c6\u670d\u52a1\u63d0\u4f9b\u5feb\u901f\u5c06\u8fd0\u7ef4\u6570\u4ed3\u6a21\u578b\u5b58\u50a8\u6570\u636e\u8868\u6216\u8005\u7528\u6237\u81ea\u5b9a\u4e49\u6570\u636e\u6e90\u8868\u751f\u6210API\u7684\u80fd\u529b\uff0c\u7528\u6237\u65e0\u9700\u5177\u5907\u7f16\u7801\u80fd\u529b\uff0c\u5373\u53ef\u5feb\u901f\u914d\u7f6e\u6570\u636e\u63a5\u53e3\uff0c\u5b9e\u73b0\u6570\u636e\u7684\u7ba1\u7406\u548c\u6d88\u8d39\u3002\u76ee\u524d\u4f18\u5148\u652f\u6301elasticsearch\u548cmysql\u6570\u636e\u6e90\u3002",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"image.png",src:a(94411).Z,width:"2530",height:"828"})),(0,n.kt)("a",{name:"O1CXu"}),(0,n.kt)("h3",{id:"3-\u57fa\u4e8esreworks\u6570\u636e\u5316\u8fd0\u7ef4\u5b9e\u8df5"},"3. \u57fa\u4e8eSREWorks\u6570\u636e\u5316\u8fd0\u7ef4\u5b9e\u8df5"),(0,n.kt)("a",{name:"iAuAX"}),(0,n.kt)("h4",{id:"31-\u7a33\u5b9a\u6027\u5efa\u8bbe"},"3.1 \u7a33\u5b9a\u6027\u5efa\u8bbe"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u670d\u52a1\u94fe\u8def\u5168\u89c2\u6d4b\u5efa\u8bbe"),(0,n.kt)("br",null),"\u7531\u4e8eIT\u7cfb\u7edf\u65e5\u76ca\u589e\u52a0\u7684\u590d\u6742\u5ea6\u3001\u5927\u91cf\u4e91\u539f\u751f\u6280\u672f\u7684\u91c7\u7528\uff0c\u4f7f\u5f97\u670d\u52a1\u5feb\u901f\u6392\u969c\u53d8\u5f97\u8d8a\u6765\u8d8a\u96be\u3002\u800c\u6307\u6807\u3001\u65e5\u5fd7\u548c\u8ffd\u8e2a\u4e09\u5927\u53ef\u89c2\u6d4b\u6027\u652f\u67f1\uff0c\u53ef\u4ee5\u5b9e\u73b0\u670d\u52a1\u7684\u767d\u76d2\u76d1\u63a7\u80fd\u529b\u3002",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"image.png",src:a(16007).Z,width:"676",height:"400"}),(0,n.kt)("br",null),"SREWorks\u6570\u636e\u5e73\u53f0\u96c6\u6210metricbeat\u3001filebeat\u3001skywalking\u7b49\u6570\u636e\u91c7\u96c6agent\u548c\u81ea\u7814\u6570\u636e\u91c7\u96c6\u573a\u666f\u4f5c\u4e1a\uff0c\u63d0\u4f9b\u5168\u6258\u7ba1\u4e00\u7ad9\u5f0f\u53ef\u89c2\u6d4b\u6570\u636e\u91c7\u96c6\u80fd\u529b\uff0c\u53ef\u4ee5\u76f4\u63a5\u83b7\u53d6\u8fd0\u884c\u7cfb\u7edf\u7684\u6307\u6807\u3001\u65e5\u5fd7\u548c\u8c03\u7528\u94fe\uff0c\u534f\u52a9\u95ee\u9898\u7684\u6392\u67e5\u548c\u8bca\u65ad\uff0c\u7f29\u77ed\u6545\u969c\u6062\u590d\u65f6\u957f(TTR)\u3002",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"image.png",src:a(25178).Z,width:"1783",height:"420"}),(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"p"},"\u5065\u5eb7\u7ba1\u7406\u670d\u52a1\u5efa\u8bbe"),(0,n.kt)("br",null),"\u4e3a\u4e86\u5e2e\u52a9\u7528\u6237\u66f4\u597d\u7684\u611f\u77e5\u7cfb\u7edf\u8fd0\u884c\u72b6\u6001\uff0c\u5b9e\u73b0\u7cfb\u7edf\u7684\u76d1\u63a7\u7ba1\u7406\uff0c\u7ed3\u5408\u963f\u91ccEmon\u56e2\u961f\u7684\u667a\u80fd\u68c0\u6d4b\u670d\u52a1\u548c\u81ea\u7814\u4f5c\u4e1a\u573a\u666f\u670d\u52a1\uff0c\u6784\u7b51\u5065\u5eb7\u7ba1\u7406\u670d\u52a1\u3002\u5305\u62ec\u4e8b\u4ef6\u91c7\u96c6\u7ba1\u7406\u3001\u98ce\u9669\u5de1\u68c0\u3001\u6307\u6807\u544a\u8b66\u68c0\u6d4b\u3001\u5f02\u5e38\u8bca\u65ad\u573a\u666f\u4f5c\u4e1a\uff0c\u5e2e\u52a9\u7528\u6237\u8bc6\u522b\u98ce\u9669\u3001\u5206\u6790\u544a\u8b66\u3001\u8fdb\u884c\u5f02\u5e38\u8bca\u65ad\u548c\u81ea\u6108\u4ee5\u53ca\u6545\u969c\u7ba1\u7406\u3002",(0,n.kt)("br",null),"\u5efa\u8bbe\u89c4\u8303\u5316\u5065\u5eb7\u7ba1\u7406\u5e73\u53f0\uff0c\u80fd\u591f\u964d\u4f4e\u6216\u8005\u6d88\u9664\u7cfb\u7edf\u9690\u60a3\uff0c\u5c3d\u6700\u5927\u53ef\u80fd\u5c06\u6f5c\u5728\u6545\u969c\u627c\u6740\u5728\u840c\u82bd\u72b6\u6001\u3002\u4e00\u65e6\u6545\u969c\u53d1\u751f\u53ca\u65f6\u901a\u77e5\u5173\u8054\u4eba\u5458\uff0c\u8fdb\u4e00\u6b65\u63d0\u5347\u5e94\u5bf9\u6548\u7387\uff0c\u786e\u4fdd\u884c\u52a8\u7684\u6709\u6548\u6027\u3002",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"image.png",src:a(15480).Z,width:"1790",height:"1182"})),(0,n.kt)("a",{name:"PM3C0"}),(0,n.kt)("h4",{id:"32-\u6210\u672c\u5efa\u8bbe"},"3.2 \u6210\u672c\u5efa\u8bbe"),(0,n.kt)("p",null,"\u5f53\u524d\u4e91\u539f\u751f\u670d\u52a1\u6210\u4e3a\u4e91\u8ba1\u7b97\u4e3b\u6d41\u7684\u670d\u52a1\u5f62\u6001\uff0c\u4f46\u7531\u4e8e\u4e91\u539f\u751f\u5316\u7684\u5e94\u7528\u7a0b\u5e8f\u53ca\u5176\u8d44\u6e90\u9700\u6c42\u5e38\u5e38\u662f\u52a8\u6001\u53d8\u5316\uff0c\u8fd9\u4e5f\u5bfc\u81f4\u4e91\u6210\u672c\u7684\u8ba1\u7b97\u590d\u6742\u6027\u3002\u4e3a\u6b64\uff0cSREWorks\u5185\u7f6e\u4e00\u5957\u5b8c\u6574\u7684\u6210\u672c\u7ba1\u7406\u89e3\u51b3\u65b9\u6848\uff0c\u5305\u542b\u8d44\u6e90\u6d88\u8017\u8ba1\u91cf\u8ba1\u8d39\u7684\u53ef\u89c6\u5316\u3001\u8d44\u6e90\u4f7f\u7528\u660e\u7ec6\u5206\u6790\uff0c\u7528\u4e8e\u8f85\u52a9\u7528\u6237\u4f18\u5316\u548c\u6cbb\u7406\u4e91\u8d44\u6e90\u6210\u672c\u3002",(0,n.kt)("br",null),"SREWorks\u7cfb\u7edf\u8bbe\u7f6e\u4e0b\u7684\u6210\u672c\u5b9a\u4ef7\u6a21\u578b\uff0c\u91cd\u70b9\u4ece\u8d44\u6e90\u5c42\u9762\uff08CPU\u3001\u5185\u5b58\u3001\u5b58\u50a8\uff09\u8fdb\u884c\u6210\u672c\u6838\u7b97\u3002\u5e73\u53f0\u4f1a\u81ea\u52a8\u6309\u7167\u5e94\u7528\u7c92\u5ea6\uff0c\u6bcf\u5929\u8fdb\u884c\u5e94\u7528\u8d44\u6e90\u7528\u91cf\u548c\u6210\u672c\u8ba1\u8d39\u6c47\u603b\uff0c\u6c47\u603b\u6570\u636e\u81ea\u52a8\u540c\u6b65\u81f3\u6570\u636e\u4ed3\u5e93",(0,n.kt)("strong",{parentName:"p"},"\u5e94\u7528\u6210\u672c\u6a21\u578b(APP_COST)"),"\u5b58\u50a8\u3002",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"image.png",src:a(92179).Z,width:"1798",height:"568"})),(0,n.kt)("a",{name:"fLyNY"}),(0,n.kt)("h4",{id:"33-\u6548\u7387\u5efa\u8bbe"},"3.3 \u6548\u7387\u5efa\u8bbe"),(0,n.kt)("p",null,"\u8fd0\u7ef4\u6548\u7387\u5373\u8fd0\u7ef4\u6d3b\u52a8\u7684\u6548\u7387\uff0c\u4ee3\u8868\u4e86\u8fd0\u7ef4\u7684\u5e73\u53f0\u5316\u80fd\u529b\uff0c\u5305\u62ec\u81ea\u52a8\u5316\u8fd0\u7ef4\u64cd\u4f5c\u548c\u81ea\u52a8\u5316\u7684\u6784\u5efa\u90e8\u7f72\u7b49\uff0c\u800c\u4eba\u6548\u6bd4\u662f\u6700\u80fd\u76f4\u63a5\u4f53\u73b0\u8fd0\u7ef4\u6548\u7387\uff0c\u8861\u91cf\u4eba\u529b\u8d44\u6e90\u4ef7\u503c\u7684\u6307\u6807\u3002      ",(0,n.kt)("br",null),"  ",(0,n.kt)("img",{alt:"image.png",src:a(28448).Z,width:"721",height:"429"}),(0,n.kt)("img",{alt:"image.png",src:a(4205).Z,width:"723",height:"373"})),(0,n.kt)("a",{name:"ytjAu"}),(0,n.kt)("h4",{id:"34-\u8fd0\u8425\u4e2d\u5fc3"},"3.4 \u8fd0\u8425\u4e2d\u5fc3"),(0,n.kt)("p",null,"\u8fd0\u8425\u4e2d\u5fc3\u4ece\u8d28\u91cf\u3001\u6210\u672c\u3001\u6548\u7387\u4e09\u4e2a\u7ef4\u5ea6\uff0c\u63d0\u4f9b\u5e94\u7528\u7684\u5b9e\u65f6\u5065\u5eb7\u5206\u3001\u5065\u5eb7\u5b9e\u4f8b\u7edf\u8ba1\u3001\u5e94\u7528\u53ef\u7528\u7387\u3001\u5e94\u7528\u6210\u672c\u5360\u6bd4\u3001\u8d44\u6e90\u5206\u914d\u3001\u8fd0\u7ef4\u4eba\u6548\u3001\u8fd0\u7ef4\u64cd\u4f5c\u7edf\u8ba1\u7b49\u5173\u952e\u6570\u636e\u770b\u677f\uff0c\u81f4\u529b\u4e8e\u4fdd\u8bc1\u7528\u6237\u83b7\u53d6\u51c6\u786e\u53ef\u9760\u7684\u5e94\u7528\u8fd0\u884c\u72b6\u51b5\u3001\u5065\u5eb7\u8d8b\u52bf\u3001\u6210\u672c\u8d44\u6e90\u6c34\u4f4d\u4ee5\u53ca\u4eba\u529b\u6d88\u8017\uff0c\u4ece\u800c\u4f5c\u51fa\u7a33\u5b9a\u6027\u4fdd\u969c\u3001\u9884\u7b97\u51c6\u5907\u3001\u8d44\u6e90\u6269\u5bb9\u7b49\u8fd0\u7ef4\u51b3\u7b56\u3002",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"image.png",src:a(19365).Z,width:"2168",height:"853"})),(0,n.kt)("a",{name:"v0ZYc"}),(0,n.kt)("h3",{id:"4-\u7ed3\u8bed"},"4. \u7ed3\u8bed"),(0,n.kt)("p",null,"\u968f\u7740\u963f\u91cc\u5df4\u5df4\u4e91\u539f\u751f\u5927\u6570\u636e\u8fd0\u7ef4\u5e73\u53f0SREWorks\u7684\u5f00\u6e90\uff0c\u6211\u4eec\u5f97\u4ee5\u5c06\u5176\u4e2d\u7684\u6570\u636e\u5316\u8fd0\u7ef4\u601d\u60f3\u548c\u8fd0\u7ef4\u5b9e\u8df5\u5206\u4eab\u7ed9\u5927\u5bb6\uff0c\u629b\u7816\u5f15\u7389\uff0c\u5e0c\u671b\u80fd\u7ed9\u5927\u5bb6\u5e26\u6765\u4e0d\u4e00\u6837\u7684\u601d\u60f3\u78b0\u649e\u3002\u540c\u65f6\u6b22\u8fce\u5927\u5bb6\u6301\u7eed\u5173\u6ce8\u6211\u4eec\u7684\u5f00\u6e90\u6570\u636e\u5316\u5e73\u53f0\uff0c\u671f\u5f85\u4e0e\u60a8\u8fdb\u884c\u6c9f\u901a\u4ea4\u6d41\uff0c\u4e00\u8d77\u63a8\u52a8\u4e91\u539f\u751f\u6570\u636e\u5316\u8fd0\u7ef4\u7684\u53d1\u5c55\u5efa\u8bbe\u3002"),(0,n.kt)("p",null,"\u9879\u76ee\u5730\u5740\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/alibaba/sreworks"},"https://github.com/alibaba/sreworks"),(0,n.kt)("br",null),"\u5982\u9700\u514d\u8d39\u8bd5\u7528\u4e86\u89e3\u963f\u91cc\u4e91ES\u8bf7\u6233 ",(0,n.kt)("a",{parentName:"p",href:"https://www.aliyun.com/product/bigdata/elasticsearch"},"\u963f\u91cc\u4e91Elasticsearch")))}d.isMDXComponent=!0},65143:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/1661209668325-f0e81ee3-8ce1-4557-b65d-f7ebbece2d72-d6782bde1ed4070ef540320c82dce09e.png"},33168:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/1661209668921-d083c10d-2026-4ecd-b747-3015fa5daeab-01fc3990d00e5ee67dbb6f5cc32969f3.png"},43164:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/1661209668998-14cbe1dc-d5df-4332-8790-f41fcb5f5503-dc93001b39da0e0e778fbbe4fda4e209.png"},34001:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/1661209669016-d08b6257-79d9-4087-90d2-44edcdf39d76-4e14a3c2a7aa7961aec5c7e12e5547af.png"},94411:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/1661209669026-d4539c5c-cbfe-4cba-8d65-b8fcb3bb1073-84a91f07b2305613819720ae997aaf4d.png"},16007:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/1661209670366-4f39fafb-1471-4a11-b4ae-5ff679d08c87-85a0f94410cffa28d89162fc3e0e7ee3.png"},25178:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/1661209670680-1f16ef9a-1db5-42ef-ae0e-97a6ee1a2fcd-67bf4a5cb93edeebf1e4eee34ea9b0c5.png"},15480:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/1661209671031-1823814c-5e51-46f0-a37d-be2844f6257b-d137a00245f55b7e0f4ea896f47cfe42.png"},92179:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/1661209671053-fa10ef61-3bfa-44d1-9302-efac1ee9718a-4b9fa053e663a7590362ad2a1e5a1463.png"},28448:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/1661209671261-4516a7cd-90e9-4a30-9810-42f79ed0f5ca-5fa53b0b5cddad4bfae36ada993ce6c4.png"},4205:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/1661209671447-dd9dac8e-11b3-499d-a271-10e5cfd26d74-0f459b76840f2b79633b020455165ac2.png"},19365:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/1661209672316-d9adc066-42c3-4b5f-b4fd-9058205a92d1-0d68b789f8151454d8d2e1f6cdace9a1.png"}}]);