"use strict";(self.webpackChunksreworks=self.webpackChunksreworks||[]).push([[4681],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(r),c=n,b=u["".concat(i,".").concat(c)]||u[c]||k[c]||o;return r?a.createElement(b,s(s({ref:t},m),{},{components:r})):a.createElement(b,s({ref:t},m))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},71455:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"SREWorks v1.4 \u7248\u672c\u53d1\u5e03 | \u79bb\u7ebf\u5b89\u88c5&\u524d\u7aef\u91cd\u6784",date:new Date("2023-01-16T20:41:23.000Z"),toc_max_heading_level:6,toc_min_heading_level:2},s=void 0,l={permalink:"/blog/zuc6iq93eesusy5r",source:"@site/blog/zuc6iq93eesusy5r.md",title:"SREWorks v1.4 \u7248\u672c\u53d1\u5e03 | \u79bb\u7ebf\u5b89\u88c5&\u524d\u7aef\u91cd\u6784",description:"\u5728v1.3\u7248\u672c\u4e4b\u540e\uff0cSREWorks\u56e2\u961f\u6536\u96c6\u4e86\u8f83\u591a\u7684\u7528\u6237\u53cd\u9988\uff0c\u5927\u5bb6\u666e\u904d\u5bf9\u4e8eSREWorks\u7684\u5185\u7f51\u79bb\u7ebf\u5b89\u88c5\u6709\u8f83\u5927\u7684\u8bc9\u6c42\u3002\u4e8e\u662f\u56e2\u961f\u51b3\u5b9a\u8fdb\u4e00\u6b65\u589e\u5f3a\u8fd9\u90e8\u5206\u7684\u5b89\u88c5\u80fd\u529b\u3002\u524d\u7aef\u5de5\u7a0b\u90e8\u5206(frontend)\uff0c\u4e3a\u4e86\u56e2\u961f\u66f4\u52a0\u654f\u6377\u9ad8\u6548\u7684\u534f\u4f5c\u5f00\u53d1\uff0c\u53ca\u4fbf\u4e8e\u793e\u533a\u5f00\u53d1\u8005\u53c2\u4e0e\u5171\u5efasreworks\u524d\u7aef\u7ec4\u4ef6\u751f\u6001\uff0c\u5bf9\u5de5\u7a0b\u67b6\u6784\u91cd\u65b0\u68b3\u7406\u62c6\u5206\uff0c\u8fdb\u884c\u4e86Monorepo\u6a21\u5f0f\u67b6\u6784\u6f14\u8fdb; \u540c\u65f6\u5bf9\u5de5\u7a0b\u6784\u5efa\u5de5\u5177\u53ca\u914d\u7f6e\u8fdb\u884c\u4e86\u4f18\u5316\u5347\u7ea7\u3002\u4e0b\u9762\u4e3av1.4\u7684\u7248\u672c\u529f\u80fd\u7248\u672c\u4ecb\u7ecd\uff1a",date:"2023-01-16T20:41:23.000Z",formattedDate:"2023\u5e741\u670816\u65e5",tags:[],readingTime:5.495,hasTruncateMarker:!1,authors:[],frontMatter:{title:"SREWorks v1.4 \u7248\u672c\u53d1\u5e03 | \u79bb\u7ebf\u5b89\u88c5&\u524d\u7aef\u91cd\u6784",date:"2023-01-16T20:41:23.000Z",toc_max_heading_level:6,toc_min_heading_level:2},prevItem:{title:"SREWorks v1.5 \u7248\u672c\u53d1\u5e03 | \u57fa\u4e8e\u5b9e\u65f6\u4f5c\u4e1a\u5e73\u53f0\u7684\u65e5\u5fd7\u805a\u7c7b\u5f00\u6e90",permalink:"/blog/zv4i4ovpgtqdhvvc"},nextItem:{title:"SREWorks v1.3 \u7248\u672c\u53d1\u5e03 | \u63d2\u4ef6\u673a\u5236\u53d1\u5e03",permalink:"/blog/ef445rystzi023ae"}},i={authorsImageUrls:[]},p=[{value:"1.  \u524d\u7aef\u5de5\u7a0bMonorepo\u6a21\u5f0f\u91cd\u6784",id:"1--\u524d\u7aef\u5de5\u7a0bmonorepo\u6a21\u5f0f\u91cd\u6784",level:2},{value:"2. \u79bb\u7ebf\u5b89\u88c5",id:"2-\u79bb\u7ebf\u5b89\u88c5",level:2},{value:"3. \u5176\u4ed6",id:"3-\u5176\u4ed6",level:2},{value:"\u5982\u4f55\u4ece\u5f53\u524d\u7248\u672c\u5347\u7ea7\u5230v1.4",id:"\u5982\u4f55\u4ece\u5f53\u524d\u7248\u672c\u5347\u7ea7\u5230v14",level:2}],m={toc:p};function k(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728v1.3\u7248\u672c\u4e4b\u540e\uff0cSREWorks\u56e2\u961f\u6536\u96c6\u4e86\u8f83\u591a\u7684\u7528\u6237\u53cd\u9988\uff0c\u5927\u5bb6\u666e\u904d\u5bf9\u4e8eSREWorks\u7684\u5185\u7f51\u79bb\u7ebf\u5b89\u88c5\u6709\u8f83\u5927\u7684\u8bc9\u6c42\u3002\u4e8e\u662f\u56e2\u961f\u51b3\u5b9a\u8fdb\u4e00\u6b65\u589e\u5f3a\u8fd9\u90e8\u5206\u7684\u5b89\u88c5\u80fd\u529b\u3002",(0,n.kt)("br",null),"\u524d\u7aef\u5de5\u7a0b\u90e8\u5206(frontend)\uff0c\u4e3a\u4e86\u56e2\u961f\u66f4\u52a0\u654f\u6377\u9ad8\u6548\u7684\u534f\u4f5c\u5f00\u53d1\uff0c\u53ca\u4fbf\u4e8e\u793e\u533a\u5f00\u53d1\u8005\u53c2\u4e0e\u5171\u5efasreworks\u524d\u7aef\u7ec4\u4ef6\u751f\u6001\uff0c\u5bf9\u5de5\u7a0b\u67b6\u6784\u91cd\u65b0\u68b3\u7406\u62c6\u5206\uff0c\u8fdb\u884c\u4e86Monorepo\u6a21\u5f0f\u67b6\u6784\u6f14\u8fdb; \u540c\u65f6\u5bf9\u5de5\u7a0b\u6784\u5efa\u5de5\u5177\u53ca\u914d\u7f6e\u8fdb\u884c\u4e86\u4f18\u5316\u5347\u7ea7\u3002",(0,n.kt)("br",null),"\u4e0b\u9762\u4e3av1.4\u7684\u7248\u672c\u529f\u80fd\u7248\u672c\u4ecb\u7ecd\uff1a"),(0,n.kt)("a",{name:"htUcL"}),(0,n.kt)("h2",{id:"1--\u524d\u7aef\u5de5\u7a0bmonorepo\u6a21\u5f0f\u91cd\u6784"},"1.  \u524d\u7aef\u5de5\u7a0bMonorepo\u6a21\u5f0f\u91cd\u6784"),(0,n.kt)("p",null,"Monorepo\u5373\u5355\u4ed3(repository)\u591a\u5305(package)\uff0c\u5927\u578b\u524d\u7aef\u5de5\u7a0b\u9879\u76ee\u91c7\u7528\u8fd9\u79cd\u6a21\u5f0f\u8fdb\u884c\u5f00\u53d1\u7ba1\u7406\uff0c\u80fd\u5e26\u6765\u8bf8\u591a\u7684\u5f00\u53d1\u548c\u7ba1\u7406\u4fbf\u5229: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u66f4\u52a0\u6e05\u6670\u7684\u6a21\u5757\u7ed3\u6784\u548c\u4f9d\u8d56\u5173\u7cfb"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u7ec6\u7c92\u5ea6\u7684\u72ec\u7acb\u6784\u5efa\u5355\u5143\u4fbf\u4e8e\u534f\u4f5c\u5f00\u53d1\u548c\u4e0d\u540c\u66f4\u65b0\u9891\u7387\u7684\u5b50\u5305\u5355\u72ec\u53d1\u7248"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u52a0\u9ad8\u6548\u7684\u4ee3\u7801\u590d\u7528\u7b49")),(0,n.kt)("p",null,"\u6211\u4eec\u5728v1.4\u7248\u672c\u4e2d\u91c7\u7528lerna + yarn workspace \u7684\u6280\u672f\u65b9\u6848\u8fdb\u884c\u4e86Monorepo\u7684\u67b6\u6784\u5b9e\u8df5\uff1a\u5c06\u539f\u5de5\u7a0b\u62c6\u5206\u4e3a@sreworks/app\u4e3b\u5305\u5e94\u7528\uff0c\u548c@sreworks/components\u3001@sreworks/widgets\u3001@sreworks/framework\u3001@sreworks/shared-utils\u56db\u4e2anpm\u5b50\u4f9d\u8d56\u5305\u3002\u76ee\u5f55\u7ed3\u6784\u53d8\u52a8\u5982\u4e0b\u56fe\u6240\u793a\uff1a",(0,n.kt)("br",null),(0,n.kt)("img",{src:r(77608).Z,width:"2227",height:"1159"})),(0,n.kt)("p",null,"\u5de5\u7a0b\u91cd\u6784\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u5bf9\u539f\u6709\u6784\u5efa\u5de5\u5177\u4e5f\u8fdb\u884c\u4e86\u4f18\u5316\u5347\u7ea7\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u5305\u5e94\u7528\u91c7\u7528webpack5\u4f5c\u4e3a\u6784\u5efa\u5de5\u5177\uff0c\u5b50\u4f9d\u8d56\u5305\u91c7\u7528Rollup\u4f5c\u4e3a\u6784\u5efa\u5de5\u5177\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u8c03\u4f18\u6784\u5efa\u914d\u7f6e\uff0c\u5c06\u6784\u5efa\u65f6\u95f4\u7531v1.3\u7248\u672c\u768474\u79d2\u964d\u4f4e\u523023\u79d2\uff0c\u63d0\u534768%"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u7edf\u4e00\u5404\u5b50\u5305\u4f9d\u8d56\u7248\u672c\u3001\u5408\u5e76\u91cd\u590d\u4f9d\u8d56\u3001\u4ee5\u53ca\u90e8\u5206npm\u4f9d\u8d56cdn\u5f15\u7528\u672c\u5730\u5316\u5904\u7406\u7b49\u65b9\u5f0f\u8fdb\u884c\u4e86\u6784\u5efa\u4f53\u79ef\u8c03\u4f18\uff0c\u8c03\u4f18\u81f31.6M\uff0c\u8f83Monorepo\u521d\u7248\u672c\u76845.4M\uff0c\u964d\u4f4e70%"),(0,n.kt)("li",{parentName:"ul"},"@sreworks/widget-cli \u8fdc\u7a0b\u7ec4\u4ef6\u811a\u624b\u67b6\u8fdb\u884c\u4e86\u540c\u6b65\u7684\u6784\u5efa\u5347\u7ea7",(0,n.kt)("a",{name:"pBGxK"}))),(0,n.kt)("h2",{id:"2-\u79bb\u7ebf\u5b89\u88c5"},"2. \u79bb\u7ebf\u5b89\u88c5"),(0,n.kt)("p",null,"\u65e9\u671f\u7248\u672c\u7684\u79bb\u7ebf\u5b89\u88c5\uff0c\u4f9d\u8d56\u7528\u6237\u7684Maven\u6e90\u3001PIP\u6e90\u5728\u7528\u6237\u5185\u7f51\u505a\u5e94\u7528\u7684\u4e8c\u6b21\u6784\u5efa\uff0c\u7528\u6237\u666e\u904d\u53cd\u9988\u5185\u7f51\u573a\u666f\u5bf9\u4e8e\u8fd9\u4e9b\u6e90\u7684\u652f\u6301\u4e5f\u4e0d\u9f50\u5168\uff0c\u66f4\u5e0c\u671b\u65e0\u6784\u5efa\u76f4\u63a5\u62c9\u8d77\u3002",(0,n.kt)("br",null),"\u4e8e\u662f\u5728v1.4\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5c06\u6574\u4e2a\u5e95\u5ea7(appId: flycore)\u4e5f\u90fd\u4e0a\u67b6\u5230\u4e86\u8fd0\u7ef4\u5e02\u573a\uff0c\u4f7f\u5f97\u5176\u76f8\u5173\u955c\u50cf\u53ca\u5143\u4fe1\u606f\uff0c\u80fd\u591f\u4f5c\u4e3a",(0,n.kt)("strong",{parentName:"p"},"\u90e8\u7f72\u57fa\u7ebf"),"\u56fa\u5316\u81f3\u5f00\u6e90\u4ee3\u7801\u4e2d\u3002",(0,n.kt)("br",null),"\u7ecf\u8fc7\u6536\u655b\u4e4b\u540e\u7684\u955c\u50cf\u6e05\u5355\u5982\u4e0b\u94fe\u63a5\uff0c\u540e\u7eed\u6bcf\u6b21\u53d1\u7248\u6709\u5e94\u7528\u7248\u672c\u66f4\u65b0\uff0c\u90fd\u4f1a\u81ea\u52a8\u66f4\u65b0\u8be5\u955c\u50cf\u6e05\u5355\u3002",(0,n.kt)("br",null),(0,n.kt)("a",{parentName:"p",href:"https://github.com/alibaba/SREWorks/blob/master/images.txt"},"https://github.com/alibaba/SREWorks/blob/master/images.txt")),(0,n.kt)("p",null,"\u6e05\u5355\u4e2d\u603b\u517159\u4e2a\u955c\u50cf\uff0c\u5171\u8ba1\u5b58\u50a8\u7a7a\u95f4\u7ea6\u4e3a5.9G\u3002",(0,n.kt)("br",null),"\u4e0b\u56fe\u4e3a\u901a\u8fc7SREWorks\u524d\u7aef\u7ec4\u4ef6\u7ed8\u5236\u7684\u6309\u7167\u955c\u50cf\u5927\u5c0f\u6392\u5217\u7684\u6e05\u5355\u77e9\u5f62\u6811\u56fe\uff1a",(0,n.kt)("br",null),(0,n.kt)("img",{alt:"image.png",src:r(81102).Z,width:"2620",height:"778"})),(0,n.kt)("p",null,"\u79bb\u7ebf\u90e8\u7f72\u7684\u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\uff0c\u5e95\u5c42\u4f9d\u8d56\u8f6f\u4ef6\u548c\u8fd0\u7ef4\u5e94\u7528\u7684\u955c\u50cf\u4ed3\u5e93\u9700\u8981\u5206\u5f00\u8bbe\u7f6e\uff1a",(0,n.kt)("br",null),"\u955c\u50cf\u4ed3\u5e93\u4ee5 ",(0,n.kt)("inlineCode",{parentName:"p"},"sreworks.io/hub-test")," \u4e3a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# \u4e0b\u8f7dsreworks\u5230\u672c\u5730\ngit clone http://github.com/alibaba/sreworks.git -b v1.4 sreworks\ncd sreworks/chart/sreworks-chart\n\n# \u5b89\u88c5SREWorks\nhelm install sreworks ./ \\\n--create-namespace --namespace sreworks \\\n--set global.accessMode="nodePort" \\\n--set global.images.tag="v1.4" \\\n--set appmanager.home.url="http://localhost:30767" \\\n--set saas.onlyBase=true \\\n--set global.images.registry="sreworks.io/hub-test" \\\n--set global.images.imagePullPolicy="IfNotPresent" \\\n--set appmanagerbase.kruise.manager.image.repository="sreworks.io/hub-test/kruise-manager" \\\n--set appmanagerbase.mysql.image.registry="sreworks.io" \\\n--set appmanagerbase.mysql.image.repository="hub-test/mysql" \\\n--set appmanagerbase.zookeeper.image.registry="sreworks.io" \\\n--set appmanagerbase.zookeeper.image.repository="hub-test/zookeeper" \\\n--set appmanagerbase.redis.image.registry="sreworks.io" \\\n--set appmanagerbase.redis.image.repository="hub-test/redis" \\\n--set appmanagerbase.minio.image.registry="sreworks.io" \\\n--set appmanagerbase.minio.image.repository="hub-test/minio" \n')),(0,n.kt)("a",{name:"mBbNq"}),(0,n.kt)("h2",{id:"3-\u5176\u4ed6"},"3. \u5176\u4ed6"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"appmanager kankio \u6784\u5efa\u903b\u8f91\u4f18\u5316\u5347\u7ea7"),(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528 rancher/local-path-provisioner \u4f5c\u4e3a\u9ed8\u8ba4\u5b58\u50a8\u4f9b\u5e94\uff0c\u79fb\u9664openebs\u4f9d\u8d56"),(0,n.kt)("li",{parentName:"ol"},"skywalking\u8fdb\u884c\u7248\u672c\u5347\u7ea7\uff08\u4ece8.5.0\u5347\u7ea7\u52309.3.0\uff09\uff0c\u89e3\u51b3skywalking\u521d\u59cb\u5316es\u76f8\u5173index\u5f02\u5e38\u7684\u95ee\u9898",(0,n.kt)("a",{name:"Of6ou"}))),(0,n.kt)("h2",{id:"\u5982\u4f55\u4ece\u5f53\u524d\u7248\u672c\u5347\u7ea7\u5230v14"},"\u5982\u4f55\u4ece\u5f53\u524d\u7248\u672c\u5347\u7ea7\u5230v1.4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5347\u7ea7\u5305\u542b\u5e95\u5ea7\uff0c\u9875\u9762\u53ef\u80fd\u4f1a\u67095-10\u5206\u949f\u7684\u4e0d\u53ef\u8bbf\u95ee\uff0c\u8bf7\u6ce8\u610f\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u7528\u6237\u81ea\u884c\u5f00\u53d1\u7684\u4e91\u539f\u751f\u5e94\u7528\u4e0d\u4f1a\u53d7\u5f71\u54cd(\u4e0d\u91cd\u542f)\uff0cSREWorks\u7f51\u5173\u5230\u5e94\u7528\u7684\u6d41\u91cf\u4f1a\u6709\u4e2d\u65ad\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'git clone http://github.com/alibaba/sreworks.git -b v1.4 sreworks\n\ncd sreworks\n./sbin/upgrade-cluster.sh --kubeconfig="****"\n')),(0,n.kt)("p",null,"\u5982\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u9047\u5230\u95ee\u9898\uff0c\u6b22\u8fce\u5404\u4f4d\u5728GitHub\u4e2d\u63d0\u51faIssues\u6216Pull requests\u3002",(0,n.kt)("br",null),"SREWorks\u5f00\u6e90\u5730\u5740\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/alibaba/sreworks"},"https://github.com/alibaba/sreworks")),(0,n.kt)("p",null,"\u4e5f\u6b22\u8fce\u5404\u4f4d\u52a0\u5165\u9489\u9489\u7fa4\uff08\u7fa4\u53f7\uff1a35853026\uff09\u5206\u4eab\u548c\u4ea4\u6d41\uff5e"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\u5728\u6b64\u611f\u8c22\u6765\u81ea\u5f00\u6e90\u793e\u533a\u7684 @kw214(Kimmy Wang) \u540c\u5b66\u5728Monorepo\u6f14\u8fdb\u65b9\u6848\u4e2d\u79ef\u6781\u7684\u8ba8\u8bba\u53c2\u4e0e\u4ee5\u53ca\u4ee3\u7801\u8d21\u732e\uff0c\u4e5f\u6b22\u8fce\u66f4\u591a\u7684\u4f19\u4f34\u80fd\u591f\u53c2\u4e0e\u5230\u6211\u4eec\u7684\u5f00\u6e90\u5de5\u4f5c\u7ec4\u4e2d\u6765\uff0c\u4e00\u8d77\u5c06\u9879\u76ee\u505a\u7684\u66f4\u597d\uff08\u6709\u610f\u5411\u7684\u540c\u5b66\u53ef\u4ee5\u8054\u7cfb\u7fa4\u4e2d\u5c0f\u52a9\u624b\u6216\u7fa4\u7ba1\u7406\u5458\u8fdb\u7ec4\uff09")))}k.isMDXComponent=!0},77608:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/1672728334513-1df917ac-4749-4bca-b267-d52bffaaee64-c488a280a35bbcf6762797cab400a9f4.jpeg"},81102:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/1673901693556-d8c11160-2155-46ed-bd0a-993ddf8bfecf-b942a83ac9fe5cf469a2faa9049e63da.png"}}]);