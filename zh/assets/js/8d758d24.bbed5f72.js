"use strict";(self.webpackChunksreworks=self.webpackChunksreworks||[]).push([[7633],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),i=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},u=function(t){var e=i(t.components);return n.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),k=i(a),m=l,d=k["".concat(o,".").concat(m)]||k[m]||c[m]||r;return a?n.createElement(d,p(p({ref:e},u),{},{components:a})):n.createElement(d,p({ref:e},u))}));function m(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,p=new Array(r);p[0]=k;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:l,p[1]=s;for(var i=2;i<r;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},75431:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var n=a(87462),l=(a(67294),a(3905));const r={title:"\u5f53\u6211\u4eec\u5728\u8c08\u8bbaDataOps\u65f6\uff0c\u6211\u4eec\u5230\u5e95\u5728\u8c08\u8bba\u4ec0\u4e48",date:new Date("2023-01-16T20:44:11.000Z"),toc_max_heading_level:6,toc_min_heading_level:2},p=void 0,s={permalink:"/zh/column/barsmz880p6lg0vz",source:"@site/column/barsmz880p6lg0vz.md",title:"\u5f53\u6211\u4eec\u5728\u8c08\u8bbaDataOps\u65f6\uff0c\u6211\u4eec\u5230\u5e95\u5728\u8c08\u8bba\u4ec0\u4e48",description:"1. DataOps\u5230\u5e95\u662f\u4ec0\u4e48\uff1f",date:"2023-01-16T20:44:11.000Z",formattedDate:"2023\u5e741\u670816\u65e5",tags:[],readingTime:21.205,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u5f53\u6211\u4eec\u5728\u8c08\u8bbaDataOps\u65f6\uff0c\u6211\u4eec\u5230\u5e95\u5728\u8c08\u8bba\u4ec0\u4e48",date:"2023-01-16T20:44:11.000Z",toc_max_heading_level:6,toc_min_heading_level:2},prevItem:{title:"QCon\u6f14\u8bb2\u5b9e\u5f55\uff08\u4e0a\uff09\uff1a\u591a\u4e91\u73af\u5883\u4e0b\u5e94\u7528\u7ba1\u7406\u4e0e\u4ea4\u4ed8\u5b9e\u8df5",permalink:"/zh/column/cylt0vx8qc1g3973"},nextItem:{title:"SREWorks\u524d\u7aef\u4f4e\u4ee3\u7801\u5de5\u7a0b\u8bbe\u8ba1\u6982\u89c8",permalink:"/zh/column/tpx7u2"}},o={authorsImageUrls:[]},i=[{value:"1. DataOps\u5230\u5e95\u662f\u4ec0\u4e48\uff1f",id:"1-dataops\u5230\u5e95\u662f\u4ec0\u4e48",level:2},{value:"2. DataOps\u80fd\u591f\u89e3\u51b3\u54ea\u4e9b\u95ee\u9898\uff1f",id:"2-dataops\u80fd\u591f\u89e3\u51b3\u54ea\u4e9b\u95ee\u9898",level:2},{value:"3. \u5982\u4f55\u8fdb\u884cDataOps\u5b9e\u8df5\uff1f",id:"3-\u5982\u4f55\u8fdb\u884cdataops\u5b9e\u8df5",level:2},{value:"\u6570\u636e\u96c6\u6210",id:"\u6570\u636e\u96c6\u6210",level:3},{value:"\u6570\u636e\u5f00\u53d1",id:"\u6570\u636e\u5f00\u53d1",level:3},{value:"\u6570\u636e\u5b58\u50a8",id:"\u6570\u636e\u5b58\u50a8",level:3},{value:"\u6570\u636e\u6cbb\u7406",id:"\u6570\u636e\u6cbb\u7406",level:3},{value:"\u6570\u636e\u670d\u52a1",id:"\u6570\u636e\u670d\u52a1",level:3},{value:"\u6570\u636e\u5e94\u7528",id:"\u6570\u636e\u5e94\u7528",level:3},{value:"4. \u603b\u7ed3",id:"4-\u603b\u7ed3",level:2}],u={toc:i};function c(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"dxOcg"}),(0,l.kt)("h2",{id:"1-dataops\u5230\u5e95\u662f\u4ec0\u4e48"},"1. DataOps\u5230\u5e95\u662f\u4ec0\u4e48\uff1f"),(0,l.kt)("p",null,"\u4f34\u968f\u7740\u5168\u7403\u6570\u5b57\u5316\u8f6c\u578b\u7684\u9ad8\u901f\u53d1\u5c55\uff0c\u5728\u4e91\u8ba1\u7b97\u3001\u7269\u8054\u7f51\u30015G\u3001\u8fb9\u7f18\u8ba1\u7b97\u3001\u5143\u5b87\u5b99\u7b49\u65b0\u6280\u672f\u7684\u9a71\u52a8\u4e0b\uff0c\u6570\u636e\u7206\u70b8\u7684\u65f6\u4ee3\u5df2\u7ecf\u6765\u4e34\u3002IDC Global DataSphere\u663e\u793a\uff0c2021\u5e74\uff0c\u5168\u7403\u6570\u636e\u603b\u91cf\u8fbe\u5230\u4e8684.5ZB\uff0c\u9884\u8ba1\u52302026\u5e74\uff0c\u5168\u7403\u7ed3\u6784\u5316\u4e0e\u975e\u7ed3\u6784\u5316\u6570\u636e\u603b\u91cf\u5c06\u8fbe\u5230221.2ZB\u3002",(0,l.kt)("br",null),"\u6b64\u5916\uff0c\u5728\u300a\u6570\u5b57\u5316\u8f6c\u578b\u67b6\u6784\uff1a\u65b9\u6cd5\u8bba\u548c\u4e91\u539f\u751f\u5b9e\u8df5\u300b\u4e00\u4e66\u4e2d\u4e5f\u63d0\u5230\u4e91\u539f\u751f\u5e94\u7528\u5e73\u53f0\u7684\u53d1\u5c55\u5c06\u7ecf\u5386DevOps\u2014DataOps\u2014AIOps\u7684\u6f14\u8fdb\u8def\u5f84\uff0c\u53ef\u4ee5\u770b\u51fa\u5728\u4e91\u539f\u751f\u7684\u6d6a\u6f6e\u4e0b\uff0c\u4f01\u4e1a\u4e5f\u8d8a\u6765\u8d8a\u9700\u8981\u6570\u636e\u3002\u4f46\u5728\u9762\u5bf9\u6570\u636e\u91cf\u5de8\u5927\u3001\u6570\u636e\u79cd\u7c7b\u7e41\u591a\u3001\u6570\u636e\u6025\u5267\u589e\u957f\u7684\u56f0\u5883\u65f6\uff0c\u5bf9\u4f01\u4e1a\u9a7e\u9a6d\u6570\u636e\u7684\u80fd\u529b\u4e5f\u63d0\u51fa\u66f4\u9ad8\u7684\u8981\u6c42\u3002\u5982\u679c\u4e0d\u80fd\u5bf9\u6d77\u91cf\u6570\u636e\u8fdb\u884c\u5408\u7406\u6709\u5e8f\u7684\u7ec4\u7ec7\u548c\u7ba1\u7406\uff0c\u975e\u4f46\u4e0d\u80fd\u4ea7\u751f\u6570\u636e\u4ef7\u503c\uff0c\u53cd\u800c\u4f1a\u5bf9\u4f01\u4e1a\u9020\u6210\u6781\u5927\u7684\u8d1f\u62c5\uff0c\u4ece\u67d0\u79cd\u7a0b\u5ea6\u4e0a\u6765\u8bf4\uff0c\u4e5f\u662f\u4e00\u79cd\u201c\u6570\u636e\u707e\u96be\u201d\uff0c\u800c\u8fd9\u4e5f\u662fDataOps\u4e00\u76f4\u5904\u4e8e\u70ed\u95e8\u8bdd\u9898\u7684\u539f\u56e0\u3002\u5728\u5f00\u6e90SREWorks\u9879\u76ee\u6570\u636e\u5316\u5efa\u8bbe\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4e5f\u4e00\u76f4\u5728\u601d\u8003\uff1aDataOps\u5230\u5e95\u662f\u5728\u505a\u4ec0\u4e48\uff1f",(0,l.kt)("br",null),"\u5728\u8ba8\u8bbaDataOps\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u6765\u770b\u4e0bDevOps\u3002DevOps\u662f\u4e00\u79cd\u8f6f\u4ef6\u4ea4\u4ed8\u7ba1\u7406\u7684\u601d\u60f3\uff0c\u5b83\u8ffd\u6c42\u4e00\u79cd\u654f\u6377\u7684\u3001\u89c4\u8303\u7684\u3001\u8de8\u56e2\u961f\u7684\u8f6f\u4ef6\u7814\u53d1\u534f\u4f5c\u72b6\u6001\uff0c\u529b\u6c42\u5c06\u4e00\u5957\u8f6f\u4ef6\u7684\u5f00\u53d1\u6a21\u5f0f\uff0c\u4ece\u5c0f\u4f5c\u574a\u5f62\u6001\u6f14\u53d8\u6210\u4e00\u6761\u6807\u51c6\u7684\u751f\u4ea7\u6d41\u6c34\u7ebf\u3002DevOps\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u4e3aDataOps\u7684\u53d1\u5c55\u5960\u5b9a\u4e86\u57fa\u7840\uff0c\u56e0\u6b64\uff0cDevOps\u662f\u6211\u4eec\u5728\u8ba8\u8bbaDataOps\u65f6\u7ed5\u4e0d\u5f00\u7684\u91cd\u8981\u8bdd\u9898\u3002",(0,l.kt)("br",null),"DataOps\u672c\u8eab\u4e5f\u662f\u5c5e\u4e8e\u654f\u6377\u5f00\u53d1\u8303\u7574\uff0c\u7c7b\u4f3cDevOps\u4ee5\u8f83\u77ed\u7684\u5f00\u53d1\u8fed\u4ee3\u5468\u671f\u5feb\u901f\u6ee1\u8db3\u5404\u81ea\u7684\u9700\u6c42\uff0c\u540c\u65f6DataOps\u4e5f\u9700\u8981\u5927\u91cf\u6807\u51c6\u5316\u6570\u636e\u5de5\u5177\u6216\u7ec4\u4ef6\uff0c\u4f9d\u8d56\u56e2\u961f\u4e4b\u95f4\u534f\u4f5c\uff0c\u8fdb\u884c\u6570\u636e\u7684\u5f00\u53d1\u548c\u5206\u6790\u3002\u4e0eDevOps\u4e0d\u540c\u7684\u662fDataOps\u4e3b\u8981\u4e13\u6ce8\u4e8e\u6570\u636e\u6d41\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u56e0\u6b64\uff0c\u901a\u8fc7\u6570\u636e\u5316\u7684\u65b9\u6cd5\u6216\u65b9\u6cd5\u8bba\u6765\u63a8\u52a8\u4f01\u4e1a\u8fd0\u8425\u6c34\u5e73\u7684\u63d0\u5347\u90fd\u53ef\u4ee5\u96b6\u5c5e\u4e8eDataOps\u7684\u8303\u7574\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"The DataOps lifecycle \uff08\u6765\u6e90 The Rise of DataOps: Governance and Agility with TrueDataOps\uff09",src:a(37283).Z,width:"1507",height:"490"})),(0,l.kt)("p",null,"DataOps \u662f data operationalization\u7684\u7f29\u5199\uff0cDataOps \u4e0d\u5355\u5355\u6307\u6570\u636e\u6280\u672f\u7684\u5de5\u5177\u548c\u5e73\u53f0\uff0c\u66f4\u91cd\u8981\u7684\u662f\u4e00\u5957\u6570\u636e\u5168\u751f\u547d\u5468\u671f\u7ba1\u7406\u7684\u65b9\u6cd5\u8bba\u548c\u601d\u60f3\u3002\u57fa\u4e8e\u6570\u636e\u9a71\u52a8\uff0c\u901a\u8fc7\u4e00\u7cfb\u5217\u9762\u5411\u6d41\u7a0b\u7684\u5de5\u5177\u548c\u5e73\u53f0\uff0c\u5c06DataOps\u601d\u60f3\u8fdb\u884c\u5de5\u7a0b\u5316\u843d\u5730\u5b9e\u8df5\uff0c\u80fd\u591f\u5c06\u6240\u6709\u7cfb\u7edf\u7684\u76f8\u5173\u6570\u636e\u91c7\u96c6\u8d77\u6765\uff0c\u6253\u7834\u6570\u636e\u5b64\u5c9b\uff0c\u7edf\u4e00\u5efa\u8bbe\u9ad8\u6548\u89c4\u8303\u7684\u6570\u636e\u6a21\u578b\u548c\u6570\u636e\u4f53\u7cfb\uff0c\u6df1\u5ea6\u6316\u6398\u6570\u636e\u4ef7\u503c\u3002",(0,l.kt)("br",null),"DataOps\u7684\u65b9\u6cd5\u8bba\u548c\u601d\u60f3\u4e3b\u8981\u662f\u88ab\u5206\u6790\u548c\u6570\u636e\u56e2\u961f\u4f7f\u7528\uff0c\u65e8\u5728\u7b80\u5316\u6570\u636e\u4f7f\u7528\u3001\u964d\u4f4e\u6570\u636e\u5206\u6790\u95e8\u69db\uff0c\u63d0\u9ad8\u6570\u636e\u5206\u6790\u8d28\u91cf\u3001\u7f29\u77ed\u6570\u636e\u5206\u6790\u5468\u671f\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u6570\u636e\u4f5c\u4e3a\u4e00\u79cd\u5927\u6570\u636e\u65f6\u4ee3\u7684\u201c\u65b0\u80fd\u6e90\u201d\uff0c\u672c\u8eab\u662f\u9700\u8981\u901a\u8fc7\u5e73\u53f0\u5316\u7684\u80fd\u529b\uff0c \u5b9e\u73b0\u56f4\u7ed5\u201c\u6570\u636e\u96c6\u6210\u3001\u6570\u636e\u5f00\u53d1\u3001\u6570\u636e\u5b58\u50a8\u3001\u6570\u636e\u6cbb\u7406\u4ee5\u53ca\u6570\u636e\u670d\u52a1\u201d\u7b49\u4f53\u7cfb\u5316\u7684\u6570\u636e\u7ba1\u7406\u6d41\u7a0b\u3002\u66f4\u8fdb\u4e00\u6b65\uff0c\u57fa\u4e8e\u6570\u636e\u9a71\u52a8\u7684\u601d\u60f3\uff0c\u8fdb\u884c\u6570\u636e\u5206\u6790\u548c\u6570\u636e\u6d88\u8d39\uff0c\u901a\u8fc7\u6570\u636e\u8d4b\u80fd\uff0c\u505a\u597d\u5404\u4e2a\u4e1a\u52a1\u9886\u57df\u7684\u76f8\u5173\u5de5\u4f5c\uff0c\u771f\u6b63\u89e3\u51b3\u5b9e\u9645\u751f\u4ea7\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u75db\u70b9\u95ee\u9898\uff0c\u5b9e\u73b0\u6570\u636e\u4ef7\u503c\u843d\u5730\u7684\u573a\u666f\u5316\u8f93\u51fa\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"DataOps\u67b6\u6784\uff08\u6765\u6e90\uff1aDiving into DataOps: The Underbelly of Modern Data Pipelines\uff09",src:a(98656).Z,width:"1146",height:"762"})),(0,l.kt)("a",{name:"clUt1"}),(0,l.kt)("h2",{id:"2-dataops\u80fd\u591f\u89e3\u51b3\u54ea\u4e9b\u95ee\u9898"},"2. DataOps\u80fd\u591f\u89e3\u51b3\u54ea\u4e9b\u95ee\u9898\uff1f"),(0,l.kt)("p",null,"\u4e0b\u9762\u5217\u4e3e\u4e00\u4e9b\u5e38\u89c1\u7684\u6570\u636e\u76f8\u5173\u7684\u95ee\u9898\uff0c\u5bf9\u4e8e\u60f3\u8981\u5b9e\u65bdDataOps\u7684\u516c\u53f8\u6765\u8bb2\uff0c\u53ef\u4ee5\u5224\u65ad\u4e00\u4e0b\u662f\u5426\u6709\u9047\u5230\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5982\u4f55\u786e\u4fdd\u751f\u4ea7\u7684\u6570\u636e\u8d28\u91cf\uff1f"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u4f55\u5224\u65ad\u751f\u4ea7\u7684\u6570\u636e\u80fd\u5426\u6ee1\u8db3\u4e1a\u52a1\u7684\u9700\u6c42\uff1f"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u4f55\u5224\u65ad\u67d0\u4e2a\u6570\u636e\u578b\u9879\u76ee\u5de5\u7a0b\u7684\u4ef7\u503c\u5e76\u6301\u7eed\u6295\u5165\uff1f"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u4f55\u5bfb\u627e\u5927\u6570\u636e\u4eba\u624d\uff1f"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u4f55\u63d0\u9ad8\u6570\u636e\u5904\u7406\u7684\u6027\u80fd\uff1f"),(0,l.kt)("li",{parentName:"ol"},"\u5927\u6570\u636e\u65b9\u6848\u91c7\u7528\u4ec0\u4e48\u6280\u672f\u6808\uff1f"),(0,l.kt)("li",{parentName:"ol"},"\u5927\u6570\u636e\u65b9\u6848\u7684\u8fd0\u7ef4\u7a33\u5b9a\u6027\u5982\u4f55\u4fdd\u969c\uff1f"),(0,l.kt)("li",{parentName:"ol"},"\u5f15\u5165\u4e86\u591a\u4e2a\u5927\u6570\u636e\u65b9\u6848\uff0c\u5982\u4f55\u7edf\u4e00\u8fdb\u884c\u7ba1\u7406\uff1f"),(0,l.kt)("li",{parentName:"ol"},"\u5927\u6570\u636e\u7684\u6570\u636e\u6743\u9650\u5982\u4f55\u7ba1\u7406\uff1f"),(0,l.kt)("li",{parentName:"ol"},"\u6570\u636e\u5206\u6790\u7ed3\u679c\u5982\u4f55\u6307\u5bfc\u6700\u7ec8\u7684\u51b3\u7b56\uff1f")),(0,l.kt)("p",null,"\u4e0a\u9762\u5e38\u89c1\u7684\u95ee\u9898\uff0c\u53ef\u4ee5\u5f52\u4e3a\u4e09\u5927\u573a\u666f\uff1a\u6570\u636e\u7ba1\u7406\u3001\u6570\u636e\u8fd0\u7ef4\u548c\u6570\u636e\u4f7f\u7528\u3002\u901a\u5e38\u5b9e\u65bd\u6570\u636e\u5316\u7684\u516c\u53f8\u90fd\u662f\u5728\u521d\u671f\u5c1d\u5230\u4e86\u4e00\u4e9b\u6570\u636e\u5e26\u6765\u7684\u751c\u5934\uff0c\u4f46\u662f\u5728\u6301\u7eed\u6295\u5165\u4e4b\u540e\uff0c\u5374\u53c8\u53d1\u73b0\u8fd9\u5757\u7684\u6536\u76ca\u4ea7\u51fa\u4f3c\u4e4e\u5e26\u6709\u5f88\u5927\u7684\u4e0d\u786e\u5b9a\u6027\uff1a\u6570\u636e\u8868\u9010\u6e10\u5730\u88ab\u6742\u4e71\u7684\u6570\u636e\u5806\u6ee1\uff0c\u6570\u636e\u4ea7\u51fa\u94fe\u8def\u5e38\u5e38\u5ef6\u8fdf\uff0c\u800c\u901a\u8fc7\u6570\u636e\u5206\u6790\u8fdb\u884c\u51b3\u7b56\u4f3c\u4e4e\u4e5f\u6ca1\u50cf\u4e4b\u524d\u90a3\u4e48\u6709\u6548\u4e86\u3002",(0,l.kt)("br",null),"\u7b80\u800c\u8a00\u4e4b\uff0c\u5f53\u6570\u636e\u91cf\u53d8\u5927\uff0c\u6570\u636e\u5de5\u7a0b\u53d8\u590d\u6742\u4e4b\u540e\uff0c\u5982\u679c\u6ca1\u6709\u89c4\u8303\u7684\u4f53\u7cfb\u548c\u6d41\u7a0b\uff0c\u6574\u4f53\u7684\u534f\u4f5c\u5173\u7cfb\u53c8\u5bb9\u6613\u53d8\u56de\u5c0f\u4f5c\u574a\u5f62\u6001\uff0c\u5b58\u5728\u8bf8\u5982\u6570\u636e\u8ba1\u7b97\u53e3\u5f84\u4e0d\u7edf\u4e00\u3001\u6570\u636e\u91cd\u590d\u5efa\u8bbe\u4ee5\u53ca\u6570\u636e\u8d28\u91cf\u4e0d\u9ad8\u7b49\u95ee\u9898\uff0c\u9700\u8981\u5bfb\u6c42\u4e00\u4e9b\u6807\u51c6\u5316\u3001\u89c4\u8303\u5316\u3001\u4f53\u7cfb\u5316\u3001\u5de5\u7a0b\u5316\u7684\u65b9\u5f0f\u6765\u8fdb\u884c\u89e3\u51b3\u3002"),(0,l.kt)("a",{name:"LgBMU"}),(0,l.kt)("h2",{id:"3-\u5982\u4f55\u8fdb\u884cdataops\u5b9e\u8df5"},"3. \u5982\u4f55\u8fdb\u884cDataOps\u5b9e\u8df5\uff1f"),(0,l.kt)("p",null,"\u6b63\u5982\u524d\u6587\u6240\u8bf4\uff0cDataOps\u672c\u8eab\u662f\u4e00\u5957\u5b8c\u6574\u7684\u6570\u636e\u4f53\u7cfb\u5efa\u8bbe\u7684\u65b9\u6cd5\u8bba\uff0c\u5176\u76ee\u6807\u662f\u80fd\u591f\u8ba9\u6570\u636e\u6301\u7eed\u7528\u8d77\u6765\uff0c\u5b9e\u73b0\u201c\u6570\u636e\u96c6\u6210\u3001\u6570\u636e\u5f00\u53d1\u3001\u6570\u636e\u5b58\u50a8\u3001\u6570\u636e\u6cbb\u7406\u4ee5\u53ca\u6570\u636e\u670d\u52a1\u201d\u7b49\u6570\u636e\u7ba1\u7406\u80fd\u529b\u3002\u8fd9\u4e5f\u610f\u5473\u7740\u9700\u8981\u4f9d\u8d56\u4f17\u591a\u7684\u6570\u636e\u6280\u672f\u6216\u6570\u636e\u7ec4\u4ef6\u6765\u5efa\u8bbe\u548c\u8fd0\u8425DataOps\u6570\u636e\u5e73\u53f0\uff0c\u8fdb\u800c\u5f62\u6210\u9ad8\u6548\u53ef\u9760\u7684\u6570\u636e\u8d44\u4ea7\u5316\u4f53\u7cfb\u548c\u6570\u636e\u670d\u52a1\u5316\u80fd\u529b\uff0c\u4e5f\u5373\u9488\u5bf9Data\u7684\u6570\u636e\u8fd0\u7ef4\u3002"),(0,l.kt)("a",{name:"Z6CI1"}),(0,l.kt)("h3",{id:"\u6570\u636e\u96c6\u6210"},"\u6570\u636e\u96c6\u6210"),(0,l.kt)("p",null,"\u6570\u636e\u96c6\u6210\u662f\u6784\u5efa\u4f01\u4e1a\u7ea7DataOps\u6570\u636e\u5e73\u53f0\u7684\u7b2c\u4e00\u6b65\uff0c\u4f9d\u8d56\u4f01\u4e1a\u5185\u90e8\u7684\u8de8\u90e8\u95e8\u534f\u4f5c\uff0c\u80fd\u591f\u5c06\u4e0d\u540c\u6765\u6e90\u7684\u6570\u636e\uff08\u4e0d\u540c\u7684\u4e1a\u52a1\u7cfb\u7edf\uff09\u4ee5\u53ca\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\uff08\u7ed3\u6784\u5316\u3001\u534a\u7ed3\u6784\u5316\u3001\u975e\u7ed3\u6784\u5316\u3001\u79bb\u7ebf\u4ee5\u53ca\u5b9e\u65f6\u6570\u636e\u7b49\uff09\u8fdb\u884c\u6574\u5408\uff0c\u5b9e\u73b0\u4e92\u8054\u4e92\u901a\u3002\u4ece\u6e90\u5934\u4e0a\u907f\u514d\u6570\u636e\u7684\u91cd\u590d\u9020\u8f6e\u548c\u8d44\u6e90\u6d6a\u8d39\u95ee\u9898\uff0c\u4e3a\u6784\u5efa\u89c4\u8303\u5316\u7684\u6570\u636e\u4f53\u7cfb\u3001\u6c89\u6dc0\u6570\u636e\u8d44\u4ea7\u4ee5\u53ca\u6316\u6398\u6570\u636e\u4ef7\u503c\u4f5c\u51c6\u5907\u3002",(0,l.kt)("br",null),"\u6570\u636e\u96c6\u6210\u4e00\u822c\u662f\u901a\u8fc7\u6570\u636e\u5f15\u5165\u65b9\u5f0f\uff0c\u5c06\u4e00\u4e2a\u7cfb\u7edf\u7684\u6570\u636e\u6309\u65f6\u6309\u91cf\u96c6\u6210\u5230\u53e6\u4e00\u4e2a\u7cfb\u7edf\u4e2d\u3002\u901a\u5e38\u91c7\u7528ELT(Extract-Load-Transform\uff0c\u63d0\u53d6-\u52a0\u8f7d-\u8f6c\u6362)\u7684\u6a21\u5f0f\uff0c\u91cd\u70b9\u5728\u4e8e\u6570\u636e\u6c47\u805a\uff0c\u5373\u5c06\u6570\u636e\u63d0\u53d6\u540e\u76f4\u63a5\u52a0\u8f7d\u5230\u76ee\u6807\u7aef\u5b58\u50a8\u4e2d\uff0c\u8fd9\u4e2a\u9636\u6bb5\u4e00\u822c\u4e0d\u505a\u6216\u8005\u53ea\u505a\u7b80\u5355\u7684\u6570\u636e\u6e05\u6d17\u548c\u6570\u636e\u5904\u7406\u3002\u4e1a\u754c\u4f18\u79c0\u7684\u6570\u636e\u96c6\u6210\u5de5\u5177\u5305\u62ec\u50cfSqoop\u3001DataX\u3001Kettle\u3001Canal\u4ee5\u53caStreamSets\u7b49\u3002"),(0,l.kt)("a",{name:"uY1wI"}),(0,l.kt)("h3",{id:"\u6570\u636e\u5f00\u53d1"},"\u6570\u636e\u5f00\u53d1"),(0,l.kt)("p",null,"\u6570\u636e\u5f00\u53d1\u7684\u76ee\u6807\u662f\u80fd\u591f\u5c06\u6570\u636e\u96c6\u6210\u9636\u6bb5\u7684\u539f\u59cb\u6570\u636e\uff0c\u6309\u7167\u4e1a\u52a1\u7684\u9700\u6c42\u8fdb\u884c\u52a0\u5de5\u5904\u7406\u3001\u5c06\u539f\u59cb\u7684\u4f4e\u4e1a\u52a1\u4ef7\u503c\u7684\u6570\u636e\u8f6c\u6362\u6210\u9ad8\u4e1a\u52a1\u4ef7\u503c\u7684\u6570\u636e\u8d44\u4ea7\uff0c\u4e5f\u5c31\u662f\u8bf4\u6570\u636e\u5f00\u53d1\u9636\u6bb5\u662f\u5b9e\u73b0\u6570\u636e\u8d44\u4ea7\u5316\u7684\u6838\u5fc3\u6280\u672f\u624b\u6bb5\u3002",(0,l.kt)("br",null),"\u6570\u636e\u5f00\u53d1\u4f5c\u4e3a\u6570\u636e\u52a0\u5de5\u5904\u7406\u7684\u6838\u5fc3\u9636\u6bb5\uff0c\u901a\u5e38\u4f1a\u91c7\u7528ETL(Extract-Transform-Load\uff0c\u63d0\u53d6-\u8f6c\u6362-\u52a0\u8f7d)\u7684\u6a21\u5f0f\u5e76\u96c6\u6210\u4e00\u7cfb\u5217\u7684\u6570\u636e\u5f00\u53d1\u7ba1\u63a7\u6d41\u7a0b\u548c\u5de5\u5177\uff0c\u65b9\u4fbf\u6570\u636e\u5f00\u53d1\u4eba\u5458\u5bf9ETL\u4efb\u52a1\u7684\u7f16\u5199\u3001\u6784\u5efa\u3001\u53d1\u5e03\u3001\u8fd0\u7ef4\u4ee5\u53ca\u4efb\u52a1\u8d44\u6e90\u7ba1\u63a7\u7b49\uff0c\u63d0\u5347\u6548\u7387\u3002\u901a\u5e38\u6570\u636e\u5f00\u53d1\u4e3b\u8981\u5206\u6210\u79bb\u7ebf\u6570\u636e\u5f00\u53d1\u548c\u5b9e\u65f6\u6570\u636e\u5f00\u53d1\u4e24\u5927\u573a\u666f\u3002",(0,l.kt)("br",null),"\u79bb\u7ebf\u6570\u636e\u5f00\u53d1\u4e3b\u8981\u7528\u4e8e\u79bb\u7ebf\u6570\u636e\u7684\u6279\u91cf\u5b9a\u65f6\u52a0\u5de5\u5904\u7406\uff0c\u79bb\u7ebf\u6570\u636e\u5f00\u53d1\u9700\u8981\u5305\u542b\u79bb\u7ebf\u8ba1\u7b97\u5f15\u64ce\u3001\u4f5c\u4e1a\u5f00\u53d1\u3001\u4efb\u52a1\u8c03\u5ea6\u3001\u6570\u636e\u7ba1\u63a7\u4ee5\u53ca\u8fd0\u7ef4\u76d1\u63a7\u7b49\u6838\u5fc3\u80fd\u529b\uff0c\u5b9e\u9645\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u76f8\u5173\u7684\u79bb\u7ebfETL\u4efb\u52a1\u4f1a\u6309\u7167\u9884\u5148\u8bbe\u5b9a\u7684\u52a0\u5de5\u903b\u8f91\u548cETL\u4e4b\u95f4\u7684\u62d3\u6251\u4f9d\u8d56\u5173\u7cfb\uff0c\u8fdb\u884c\u8c03\u5ea6\u6267\u884c\u3002\u5e38\u89c1\u7684\u79bb\u7ebf\u5904\u7406\u6846\u67b6\u5305\u62ecMapReduce\u3001Hive\u4ee5\u53caSpark\u7b49\u3002\u5728\u963f\u91cc\u5df4\u5df4\u5185\u90e8\u4e5f\u65e9\u5df2\u5f62\u6210\u4f53\u7cfb\u7684MaxCompute\u901a\u7528\u5927\u6570\u636e\u5f00\u53d1\u5957\u4ef6\uff0c\u5feb\u901f\u89e3\u51b3\u7528\u6237\u7684\u6d77\u91cf\u6570\u636e\u79bb\u7ebf\u8ba1\u7b97\u95ee\u9898\uff0c\u6709\u6548\u964d\u4f4e\u4f01\u4e1a\u6210\u672c\u5e76\u4fdd\u969c\u6570\u636e\u5b89\u5168\u7b49\u3002",(0,l.kt)("br",null),"\u5b9e\u65f6\u6570\u636e\u5f00\u53d1\u4e3b\u8981\u6d89\u53ca\u5bf9\u5b9e\u65f6\u6d41\u5f0f\u6570\u636e\u7684\u52a0\u5de5\u5904\u7406\uff0c\u6ee1\u8db3\u50cf\u76d1\u63a7\u544a\u8b66\u3001\u6570\u636e\u5927\u5c4f\u7b49\u5bf9\u5b9e\u65f6\u6027\u8981\u6c42\u8f83\u9ad8\u7684\u573a\u666f\u3002\u5728\u5b9e\u65f6\u8ba1\u7b97\u573a\u666f\u4e0b\uff0c\u4e1a\u52a1\u7cfb\u7edf\u6bcf\u4ea7\u751f\u4e00\u6761\u6570\u636e\uff0c\u90fd\u4f1a\u901a\u8fc7\u6d88\u606f\u4e2d\u95f4\u4ef6\uff08\u6bd4\u5982Kafka\uff09\u88ab\u5b9e\u65f6\u53d1\u9001\u5230\u6d41\u5f0f\u5904\u7406\u5e73\u53f0\u8fdb\u884c\u52a0\u5de5\u5904\u7406\uff0c\u4e0d\u518d\u4f9d\u8d56\u8c03\u5ea6\u5f15\u64ce\u3002\u5e38\u89c1\u7684\u6d41\u5f0f\u5904\u7406\u6846\u67b6\u5305\u62ecStorm\u3001Spark Streaming\u4ee5\u53caFlink\u7b49\u3002\u5728\u963f\u91cc\u5df4\u5df4\u5185\u90e8\u4e5f\u57fa\u4e8eApache Flink\u6784\u5efa\u4e86\u4e00\u7ad9\u5f0f\u7684\u5b9e\u65f6\u5927\u6570\u636e\u5206\u6790\u5e73\u53f0\uff0c\u63d0\u4f9b\u7aef\u5230\u7aef\u7684\u4e9a\u79d2\u7ea7\u5b9e\u65f6\u6570\u636e\u52a0\u5de5\u5904\u7406\u5206\u6790\u80fd\u529b\u3002"),(0,l.kt)("a",{name:"rt00L"}),(0,l.kt)("h3",{id:"\u6570\u636e\u5b58\u50a8"},"\u6570\u636e\u5b58\u50a8"),(0,l.kt)("p",null,"\u6709\u4e86\u6570\u636e\u96c6\u6210\u548c\u6570\u636e\u5f00\u53d1\u7684\u80fd\u529b\uff0c\u4e0b\u4e00\u9636\u6bb5\u5c31\u662f\u8003\u8651\u5982\u4f55\u8fdb\u884c\u6570\u636e\u5b58\u50a8\u548c\u6570\u636e\u7ec4\u7ec7\uff0c\u5176\u6838\u5fc3\u662f\u6807\u51c6\u89c4\u8303\u7684\u6570\u636e\u4ed3\u5e93\u548c\u6570\u636e\u6a21\u578b\u5efa\u8bbe\uff0c\u4e5f\u5c31\u662f\u8bf4\u6570\u636e\u4ed3\u5e93\u662f\u5b9e\u73b0\u6570\u636e\u8d44\u4ea7\u5316\u7684\u5448\u73b0\u8f7d\u4f53\u3002",(0,l.kt)("br",null),"\u76ee\u524d\u7528\u7684\u6700\u591a\u7684\u6570\u636e\u5efa\u6a21\u65b9\u5f0f\u662f\u7ef4\u5ea6\u5efa\u6a21\uff0c\u5178\u578b\u4ee3\u8868\u6709\u963f\u91cc\u5df4\u5df4\u5efa\u8bbe\u7684\u201cOneData\u201d\u6570\u636e\u5efa\u6a21\u4f53\u7cfb\uff0c\u4e3b\u8981\u5305\u62ec\u6570\u636e\u89c4\u8303\u5b9a\u4e49\u3001\u6570\u636e\u6a21\u578b\u8bbe\u8ba1\u4ee5\u53caETL\u5f00\u53d1\u89c4\u8303\u4e09\u90e8\u5206\u3002",(0,l.kt)("br",null),"\u6570\u636e\u89c4\u8303\u5b9a\u4e49\uff1a\u6570\u636e\u4e3b\u9898\u57df\u3001\u4e1a\u52a1\u8fc7\u7a0b\u3001\u6307\u6807\u89c4\u8303\u3001\u540d\u8bcd\u5b9a\u4e49\u4ee5\u53ca\u65f6\u95f4\u5468\u671f\u7b49\u547d\u540d\u89c4\u8303\u3002",(0,l.kt)("br",null),"\u6570\u636e\u6a21\u578b\u8bbe\u8ba1\uff1a\u6a21\u578b\u5c42\u6b21\u5212\u5206(\u5206\u6210\u6570\u636e\u5f15\u5165\u5c42ODS\u3001\u6570\u636e\u516c\u5171\u5c42CDM\u4ee5\u53ca\u6570\u636e\u5e94\u7528\u5c42ADS\u4e09\u5c42\uff0c\u5176\u4e2dCDM\u5c42\u53c8\u5305\u62ec\u660e\u7ec6\u6570\u636e\u5c42DWD\u3001\u6c47\u603b\u6570\u636e\u5c42DWS\u548c\u7ef4\u5ea6\u6570\u636e\u5c42DIM)\u3001\u6a21\u578b\u8bbe\u8ba1\u539f\u5219\u3001\u6a21\u578b\u547d\u540d\u89c4\u8303\u3001\u6a21\u578b\u751f\u547d\u5468\u671f\u7ba1\u7406\u4ee5\u53ca\u6570\u636e\u8d28\u91cf\u89c4\u8303\u7b49\u3002",(0,l.kt)("br",null),"ETL\u5f00\u53d1\u89c4\u8303\uff1a\u6570\u636e\u5904\u7406\u4f5c\u4e1a\u7684\u7814\u53d1\u6d41\u7a0b\u3001\u7f16\u7801\u89c4\u8303\u4ee5\u53ca\u53d1\u5e03\u8fd0\u7ef4\u539f\u5219\u7b49\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(15401).Z,width:"2027",height:"2209"}),(0,l.kt)("br",null),"\u6570\u636e\u4ed3\u5e93\u5b9e\u65bd\u5de5\u4f5c\u6d41\uff08\u6765\u6e90\uff1a\u300a\u5927\u6570\u636e\u4e4b\u8def\u300b\uff09"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(74210).Z,width:"2929",height:"1016"}),(0,l.kt)("br",null),"\u6570\u636e\u4ed3\u5e93\u5efa\u8bbe\u5de5\u7a0b\u94fe\u8def\uff08\u79bb\u7ebf\u94fe\u8def+\u5b9e\u65f6\u94fe\u8def\uff09"),(0,l.kt)("a",{name:"eaqgP"}),(0,l.kt)("h3",{id:"\u6570\u636e\u6cbb\u7406"},"\u6570\u636e\u6cbb\u7406"),(0,l.kt)("p",null,"\u6570\u636e\u6cbb\u7406\u4e3b\u8981\u662f\u5bf9\u6570\u636e\u8d44\u4ea7\uff0c\u914d\u7f6e\u6570\u636e\u7ba1\u7406\u7b56\u7565\uff0c\u4e3b\u8981\u5305\u62ec\u6570\u636e\u6807\u51c6\u3001\u6570\u636e\u8d28\u91cf\u3001\u6570\u636e\u6210\u672c\u4ee5\u53ca\u6570\u636e\u5b89\u5168\u7b49\u5185\u5bb9\u3002\u901a\u8fc7\u591a\u7ef4\u5ea6\u8fdb\u884c\u91cf\u5316\u8bc4\u4f30\uff0c\u9488\u5bf9\u6570\u636e\u5efa\u8bbe\u63d0\u51fa\u6539\u8fdb\u4e0e\u4f18\u5316\u5efa\u8bae\uff0c\u786e\u4fdd\u6570\u636e\u8d28\u91cf\u3001\u6807\u51c6\u3001\u5b89\u5168\u3001\u6613\u7528\u3002\u5b83\u5305\u542b\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u6807\u51c6\u5316\u7ba1\u7406\uff1a\u8d1f\u8d23\u6570\u636e\u4ed3\u5e93\u4e2d\u6570\u636e\u7684\u8868\u8fbe\u3001\u683c\u5f0f\u4ee5\u53ca\u5b9a\u4e49\u7684\u89c4\u8303\u6027\uff0c\u5305\u62ec\u6a21\u578b\u89c4\u8303\u3001\u6570\u4ed3\u5143\u6570\u636e\u89c4\u8303\u3001\u540d\u8bcd\u672f\u8bed\u89c4\u8303\u3001\u6307\u6807\u89c4\u8303\u7b49\u8fdb\u884c\u7ba1\u7406\uff0c\u9488\u5bf9\u672a\u6807\u51c6\u5316\u7684\u5185\u5bb9\u63d0\u51fa\u6539\u8fdb\u5efa\u8bae\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u6210\u672c\uff1a\u4e3b\u8981\u4ece\u5b58\u50a8\u91cf\u548c\u8bbf\u95ee\u60c5\u51b5\u7b49\u6c89\u6dc0\u76f8\u5173\u6cbb\u7406\u9879\uff0c\u6bd4\u5982\uff1a\u7a7a\u8868\u3001\u65e0\u6548\u8868\uff08\u672a\u5173\u8054ETL\u4efb\u52a1\u8868\uff09\u3001\u957f\u671f\u672a\u8bbf\u95ee\u8868\u3001\u957f\u5468\u671f\u8868\u3001\u5927\u6570\u636e\u91cf\u8868\u7b49\uff0c\u901a\u8fc7\u5bf9\u6cbb\u7406\u9879\u7684\u8fd0\u4f5c\uff0c\u63d0\u51fa\u4f18\u5316\u5efa\u8bae\uff0c\u63a8\u52a8\u6570\u636e\u5f00\u53d1\u4eba\u5458\u8fdb\u884c\u6210\u672c\u6cbb\u7406\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u8d28\u91cf\uff1a\u56f4\u7ed5\u6570\u636e\u7684\u5b8c\u6574\u6027\u3001\u51c6\u786e\u6027\u3001\u4e00\u81f4\u6027\u3001\u6709\u6548\u6027\u548c\u53ca\u65f6\u6027\u4e94\u4e2a\u7ef4\u5ea6\u5e76\u5bf9\u6570\u636e\u7684\u91cd\u8981\u6027\u8fdb\u884c\u8d44\u4ea7\u7b49\u7ea7\u5212\u5206\uff0c\u5bf9\u8d28\u91cf\u4fdd\u969c\u65e2\u5305\u62ec\u4e8b\u524d\u4fdd\u969c\uff0c\u6bd4\u5982\u6570\u636e\u5f00\u53d1\u6d41\u7a0b\u3001\u6570\u636e\u6807\u51c6\u6267\u884c\u7b49\uff0c\u53c8\u6709\u4e8b\u4e2d\u4fdd\u969c\uff0c\u6bd4\u5982DQC\u7684\u6570\u636e\u8d28\u91cf\u5b9e\u65f6\u76d1\u63a7\u548c\u544a\u8b66\uff0c\u8fd8\u6709\u4e8b\u540e\u4fdd\u969c\uff0c\u6bd4\u5982\u6570\u636e\u8d28\u91cf\u6545\u969c\u590d\u76d8\uff0c\u786e\u5b9a\u8d28\u91cf\u95ee\u9898\u6839\u56e0\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u5b89\u5168\uff1a\u8bc4\u4f30\u6570\u636e\u5b89\u5168\u98ce\u9669\uff0c\u5bf9\u6570\u636e\u8bbe\u5b9a\u5b89\u5168\u7b49\u7ea7\uff0c\u5305\u62ec\u652f\u6301\u5b89\u5168\u8ba4\u8bc1\u548c\u6743\u9650\u7ba1\u7406\u3001\u8d44\u6e90\u9694\u79bb\u3001\u6570\u636e\u52a0\u5bc6\u3001\u6570\u636e\u8131\u654f\u7b49\uff0c\u4fdd\u969c\u6570\u636e\u5b89\u5168\u53ef\u9760\u7684\u88ab\u4f20\u8f93\u3001\u5b58\u50a8\u548c\u4f7f\u7528\u3002",(0,l.kt)("a",{name:"w4y8o"}))),(0,l.kt)("h3",{id:"\u6570\u636e\u670d\u52a1"},"\u6570\u636e\u670d\u52a1"),(0,l.kt)("p",null,"\u6570\u636e\u670d\u52a1\u65e8\u5728\u63d0\u4f9b\u7edf\u4e00\u7684\u6570\u636e\u6d88\u8d39\u670d\u52a1\u603b\u7ebf\uff0c\u80fd\u591f\u5c06\u6570\u636e\u8d44\u4ea7\u751f\u6210API\u670d\u52a1\uff0c\u5176\u76ee\u6807\u662f\u628a\u6570\u636e\u670d\u52a1\u5316\uff0c\u8ba9\u6570\u636e\u80fd\u591f\u5feb\u901f\u96c6\u6210\u5230\u4e1a\u52a1\u573a\u666f\u5f53\u4e2d\uff0c\u53d1\u6325\u6570\u636e\u5e73\u53f0\u7684\u4ef7\u503c\u3002\u5b83\u5305\u542b\u4ee5\u4e0b\u4e3b\u8981\u529f\u80fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f02\u6784\u8de8\u5e93\u67e5\u8be2\uff1a\u5982\u679c\u6570\u636e\u5206\u5e03\u5728\u591a\u4e2a\u5f02\u6784\u6570\u636e\u5e93\u65f6\uff0c\u7528\u6237\u65e0\u6cd5\u7b80\u5355\u7684\u5b9e\u73b0\u6570\u636e\u5173\u8054\u67e5\u8be2\uff0c\u901a\u8fc7\u6570\u636e\u67e5\u8be2\u670d\u52a1\uff0c\u53ef\u4ee5\u51cf\u5c11\u6570\u636e\u540c\u6b65\u4f5c\u4e1a\uff0c\u76f4\u63a5\u5b9e\u73b0\u4ece\u591a\u4e2a\u6e90\u6570\u636e\u5e93\u52a0\u8f7d\u6570\u636e\u4e0e\u5b8c\u6210\u67e5\u8be2\u7684\u80fd\u529b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636eAPI \u5b9a\u4e49\u4e0e\u7ba1\u7406\uff1a\u90e8\u4efd\u5e38\u7528\u7684\u6570\u636e\u70b9\u67e5\u6216\u7edf\u8ba1\u5206\u6790\uff0c\u53ef\u901a\u8fc7\u5b9a\u4e49\u6570\u636e\u96c6\u4e0eAPI\u540d\u79f0\uff0c\u5e76\u6700\u7ec8\u66b4\u9732\u4e3a\u4e00\u4e2aHTTP\u8d44\u6e90\u8def\u5f84\u7684\u65b9\u5f0f\uff0c\u5e76\u5bf9\u6570\u636eAPI\u8fdb\u884c\u53d1\u5e03\u548c\u8bbf\u95ee\u6388\u6743\uff0c\u65b9\u4fbf\u5728\u5404\u7c7b\u811a\u672c\u6216\u4ee3\u7801\u4e2d\u4f7f\u7528\u6570\u636e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u7f13\u5b58\uff1a\u5bf9\u4e8e\u5e38\u7528\u7684\u6570\u636e\u67e5\u8be2\uff0c\u53ef\u5b9a\u4e49\u7f13\u5b58\u4e0e\u66f4\u65b0\u7b56\u7565\uff0c\u6765\u51cf\u5c11\u6570\u636e\u67e5\u8be2\u7a7f\u900f\u5230\u6570\u636e\u5e93\uff0c\u63d0\u9ad8\u6027\u80fd\u5e76\u964d\u4f4e\u5bf9\u6570\u636e\u5e93\u7684\u6027\u80fd\u8d1f\u8f7d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7f16\u6392\uff1a\u6309\u7167\u4e1a\u52a1\u903b\u8f91\uff0c\u4ee5\u4e32\u884c\u3001\u5e76\u884c\u548c\u5206\u652f\u7b49\u7ed3\u6784\u7f16\u6392\u591a\u4e2aAPI\u53ca\u51fd\u6570\u670d\u52a1\u4e3a\u5de5\u4f5c\u6d41\u3002",(0,l.kt)("a",{name:"sFcux"}))),(0,l.kt)("h3",{id:"\u6570\u636e\u5e94\u7528"},"\u6570\u636e\u5e94\u7528"),(0,l.kt)("p",null,"\u6709\u4e86\u6807\u51c6\u5316\u7684\u6570\u636e\u4f53\u7cfb\u4ee5\u540e\uff0c\u9488\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u6790\u548c\u4f7f\u7528\u53c8\u662fDataOps\u6240\u5173\u5fc3\u7684\u53e6\u4e00\u4e2a\u7ef4\u5ea6\u7684\u95ee\u9898\uff0c\u8fd9\u4e5f\u662f\u6570\u636e\u9a71\u52a8\u7684\u5173\u952e\u73af\u8282\uff0c\u4e5f\u5373\u4ee5\u6570\u636e\u4e3a\u4e2d\u5fc3\u8fdb\u884c\u51b3\u7b56\uff0c\u9a71\u52a8\u4e1a\u52a1\u884c\u4e3a\u3002\u6570\u636e\u5206\u6790\u4eba\u5458\u5229\u7528\u5404\u79cd\u6570\u636e\u7edf\u8ba1\u5206\u6790\u65b9\u6cd5\u548c\u667a\u80fd\u7b97\u6cd5\uff0c\u901a\u8fc7\u6570\u636e\u5e73\u53f0\u63d0\u4f9b\u7684\u6570\u636e\u670d\u52a1API\uff0c\u5bf9\u76f8\u5173\u6570\u636e\u8fdb\u884c\u591a\u7ef4\u5ea6\u3001\u6df1\u5c42\u6b21\u7684\u5206\u6790\u6316\u6398\uff0c\u652f\u6491\u4e1a\u52a1\u76f8\u5173\u7684\u6570\u636e\u5e94\u7528\u573a\u666f\uff0c\u6301\u7eed\u8ba9\u6570\u636e\u7528\u8d77\u6765\uff0c\u771f\u6b63\u53d1\u6325\u6570\u636e\u5e73\u53f0\u7684\u4e1a\u52a1\u4ef7\u503c\u3002",(0,l.kt)("br",null),"\u4e0d\u540c\u7684\u4e1a\u52a1\u6709\u5404\u81ea\u7684\u5e94\u7528\u573a\u666f\uff0c\u6240\u4ee5\u8fd9\u4e00\u90e8\u5206\u5f88\u96be\u9762\u9762\u4ff1\u5230\u3002\u672c\u6587\u4ec5\u7b80\u5355\u4ecb\u7ecd\u51e0\u79cd\u5e38\u89c1\u7684\u6570\u636e\u5e94\u7528\u573a\u666f\uff0c\u5e0c\u671b\u80fd\u5e2e\u52a9\u5927\u5bb6\u66f4\u597d\u7684\u7406\u89e3\uff0c\u5982\u4f55\u57fa\u4e8e\u6570\u636e\u5e73\u53f0\u7684\u6570\u636e\u8d44\u4ea7\u548c\u6570\u636e\u670d\u52a1\uff0c\u8fdb\u884c\u6570\u636e\u5206\u6790\u548c\u4f7f\u7528\u3002",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"p"},"\u6570\u636e\u5927\u5c4f"),"\uff1a\u901a\u8fc7\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u6790\u8ba1\u7b97\uff0c\u501f\u52a9BI\u7c7b\u8f6f\u4ef6\uff0c\u7ed3\u5408\u4e1a\u52a1\u9700\u6c42\uff0c\u4ee5\u56fe\u8868\u7b49\u5f62\u5f0f\uff0c\u628a\u4e00\u4e9b\u5173\u952e\u7684\u6c47\u603b\u6027\u6570\u636e\u5c55\u793a\u51fa\u6765\uff0c\u5b9e\u73b0\u6570\u636e\u53ef\u89c6\u5316\uff0c\u4e3a\u4e1a\u52a1\u51b3\u7b56\u63d0\u4f9b\u51c6\u786e\u53ef\u9760\u7684\u6570\u636e\u652f\u6301\u3002",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"p"},"\u667a\u80fd\u573a\u666f"),"\uff1a\u5c5e\u4e8eAIOps\u8303\u7574\uff0c\u57fa\u4e8e\u6570\u636e\u5e73\u53f0\u7684\u6570\u636e\uff0c\u901a\u8fc7AI\u7b97\u6cd5\uff0c\u4ece\u6570\u636e\u4e2d\u8fdb\u884c\u63d0\u70bc\u3001\u6316\u6398\u3001\u6d1e\u5bdf\uff0c\u4e3a\u4e1a\u52a1\u57fa\u4e8e\u6570\u636e\u8fdb\u884c\u51b3\u7b56\u548c\u8fd0\u7ef4\u8fd0\u8425\u65f6\u63d0\u4f9b\u667a\u80fd\u80fd\u529b\uff0c\u83b7\u5f97\u66f4\u6709\u524d\u77bb\u6027\u7684\u6570\u636e\u652f\u6301\u3002\u6bd4\u8f83\u5178\u578b\u7684\u667a\u80fd\u5e94\u7528\u573a\u666f\u5305\u62ec\u50cf\u667a\u80fd\u63a8\u8350\u3001\u667a\u80fd\u5ba2\u670d\u3001\u667a\u80fd\u9884\u6d4b\u4ee5\u53ca\u5065\u5eb7\u7ba1\u7406\u7b49\u7b49\u3002",(0,l.kt)("br",null),"\u5f53\u7136\uff0c\u6570\u636e\u5206\u6790\u4e5f\u5e76\u4e0d\u662f\u6570\u636e\u7684\u7ec8\u70b9\uff0c\u56e0\u4e3a\u968f\u7740\u6570\u636e\u7684\u6c89\u6dc0\uff0c\u4e1a\u52a1\u89c4\u6a21\u7684\u6269\u5927\uff0c\u5f88\u591a\u6570\u636e\u5206\u6790\u7684\u7ed3\u679c\u4e5f\u53ef\u80fd\u4f1a\u4f5c\u4e3a\u53e6\u4e00\u4e2a\u66f4\u9ad8\u7ef4\u5ea6\u6a21\u578b\u7684\u6570\u636e\u8f93\u5165\uff0c\u88ab\u7eb3\u5165\u6570\u636e\u5e73\u53f0\u7684\u6570\u636e\u8d44\u4ea7\u5f53\u4e2d\u3002\u56e0\u6b64\uff0c\u6570\u636e\u5206\u6790\u548c\u5f00\u53d1\u4eba\u5458\u9700\u8981\u4ece\u4e00\u4e2a\u66f4\u9ad8\u7684\u7ef4\u5ea6\u548c\u89c6\u89d2\uff0c\u53bb\u6574\u5408\u6d77\u91cf\u7684\u6570\u636e\u3002\u8fd9\u4e5f\u5c31\u610f\u5473\u7740\u6570\u636e\u5904\u7406\u7684\u94fe\u8def\u5e76\u4e0d\u662f\u4e00\u6210\u4e0d\u53d8\u7684\uff0c\u6570\u636e\u91cf\u4f1a\u968f\u7740\u4e1a\u52a1\u4e0d\u65ad\u589e\u957f\uff0c\u6570\u636e\u6a21\u578b\u4e5f\u540c\u6837\u9700\u8981\u4e0d\u65ad\u6f14\u8fdb\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u6570\u636e\u5e73\u53f0\u67b6\u6784\u793a\u4f8b",src:a(17797).Z,width:"1692",height:"884"})),(0,l.kt)("a",{name:"X59GT"}),(0,l.kt)("h2",{id:"4-\u603b\u7ed3"},"4. \u603b\u7ed3"),(0,l.kt)("p",null,"\u603b\u7684\u6765\u8bf4\uff0c",(0,l.kt)("strong",{parentName:"p"},"DataOps \u4f5c\u4e3a\u4e00\u79cd\u6570\u636e\u7ba1\u7406\u65b9\u5f0f\uff0c\u5229\u7528 DevOps \u65b9\u6cd5\u8bba\u5bf9\u6570\u636e\u7684\u5168\u751f\u547d\u5468\u671f\u8fdb\u884c\u7ba1\u7406\uff0c\u901a\u8fc7\u6570\u636e\u5e73\u53f0\u628a\u6570\u636e\u53d8\u6210\u4e00\u79cd\u670d\u52a1\u80fd\u529b\uff0c\u8fdb\u800c\u63d0\u5347\u6570\u636e\u7684\u4f7f\u7528\u6548\u7387\uff0c\u5b9e\u73b0\u6570\u636e\u6301\u7eed\u7528\u8d77\u6765\u7684\u76ee\u6807\u3002"),"\u4ee5\u6570\u636e\u5e73\u53f0\u4e3a\u627f\u8f7d\uff0c\u4ee5\u6570\u636e\u573a\u666f\u4e3a\u9a71\u52a8\uff0c\u652f\u6301\u66f4\u5927\u7684\u521b\u65b0\u7a7a\u95f4\u548c\u66f4\u4f18\u79c0\u7684\u4e1a\u52a1\u6a21\u5f0f\u3002",(0,l.kt)("br",null),"SREWorks\u4e91\u539f\u751f\u6570\u667a\u8fd0\u7ef4\u5e73\u53f0\uff0c\u6c89\u6dc0\u4e86\u963f\u91cc\u5927\u6570\u636e\u8fd0\u7ef4\u56e2\u961f\u8fd1\u5341\u5e74\u7ecf\u5185\u90e8\u4e1a\u52a1\u9524\u70bc\u7684SRE\u6570\u667a\u5316\u5de5\u7a0b\u5b9e\u8df5\uff0c\u5305\u542bDataOps\u5728\u8fd0\u7ef4\u9886\u57df\u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u6b22\u8fce\u4f53\u9a8c\u3002\u6211\u4eec\u65e8\u5728\u79c9\u627f\u201c\u6570\u636e\u5316\u3001\u667a\u80fd\u5316\u201d\u8fd0\u7ef4\u601d\u60f3\uff0c\u5e2e\u52a9\u66f4\u591a\u7684\u4ece\u4e1a\u8005\u91c7\u7528\u201c\u6570\u667a\u201d\u601d\u60f3\u505a\u597d\u8fd0\u7ef4\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"\u53c2\u8003\u6750\u6599")),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"p",href:"https://www.synopsys.com/blogs/software-security/agile-cicd-devops-difference/"},"https://www.synopsys.com/blogs/software-security/agile-cicd-devops-difference/"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/55066486"},"https://zhuanlan.zhihu.com/p/55066486"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"p",href:"http://www.uml.org.cn/bigdata/202108115.asp"},"http://www.uml.org.cn/bigdata/202108115.asp"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/DataOps"},"https://en.wikipedia.org/wiki/DataOps"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"p",href:"https://www.tamr.com/blog/from-devops-to-dataops-by-andy-palmer/"},"https://www.tamr.com/blog/from-devops-to-dataops-by-andy-palmer/")))}c.isMDXComponent=!0},15401:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/1673273821491-997ab2cf-9b88-4f34-8330-fb8045f3e640-4343b99091993727a2d44cb45173f9ee.jpeg"},74210:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/1673343267505-b3a4611f-f424-4151-9f90-c075aaaa20cb-2984161d934e8c21a95c18ed9010260e.jpeg"},37283:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/1673901865572-31e383be-4316-4043-8717-760df8131f47-716e327566c341f6bc1c03cd938dbaa6.png"},98656:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/1673901865690-7c0fe709-66d5-435d-8932-4b1ea88faf5b-c832fb06b8758a8c6e02ba3e5ed98db9.png"},17797:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/1673901865728-6fe2c7ea-463f-4d18-8a49-425f7c147e62-06dd9a29a6b26d31140c85d3e80fbbfa.png"}}]);