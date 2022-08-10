"use strict";(self.webpackChunksreworks=self.webpackChunksreworks||[]).push([[3062],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>k});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),i=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=i(e.components);return t.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(r),k=a,d=u["".concat(l,".").concat(k)]||u[k]||m[k]||o;return r?t.createElement(d,s(s({ref:n},p),{},{components:r})):t.createElement(d,s({ref:n},p))}));function k(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=r[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1482:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var t=r(7462),a=(r(7294),r(3905));const o={title:"---\u5907\u7528\u6587\u6863 SREWorks\u5f00\u6e90\u6784\u5efa"},s=void 0,c={unversionedId:"cocaog",id:"cocaog",title:"---\u5907\u7528\u6587\u6863 SREWorks\u5f00\u6e90\u6784\u5efa",description:"1.1 \u6784\u5efa\u73af\u5883\u51c6\u5907",source:"@site/docs/cocaog.md",sourceDirName:".",slug:"/cocaog",permalink:"/docs/next/cocaog",draft:!1,tags:[],version:"current",frontMatter:{title:"---\u5907\u7528\u6587\u6863 SREWorks\u5f00\u6e90\u6784\u5efa"}},l={},i=[{value:"2.2 \u5b89\u88c5 SREworks helm\u5305",id:"22-\u5b89\u88c5-sreworks-helm\u5305",level:2}],p={toc:i};function m(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"kliWz"}),"# 1. SREWorks\u6e90\u7801\u6784\u5efa\u53ca\u4e0a\u4f20",(0,a.kt)("a",{name:"xPY76"}),"## 1.1 \u6784\u5efa\u73af\u5883\u51c6\u5907",(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u53f0\u5b89\u88c5\u6709 ",(0,a.kt)("inlineCode",{parentName:"li"},"git / docker"),"\u547d\u4ee4\u7684\u673a\u5668")),(0,a.kt)("a",{name:"naB3D"}),"## 1.2 \u62c9\u53d6 SREWorks \u9879\u76ee\u6e90\u7801 ```shell git clone http://gitlab.alibaba-inc.com/sreworks/sreworks.git --recursive --single-branch cd sreworks SW_ROOT=$(pwd)",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<a name="mMUoO"></a>\n## \n<a name="bIQPN"></a>\n## 1.3 \u6784\u5efa sw-appmanager \u955c\u50cf\u53ca\u4e0a\u4f20\n\u5728sreworks\u76ee\u5f55\u4e0b\uff0c\u76f4\u63a5\u6267\u884c\u6784\u5efa\u811a\u672c\u5e76\u63a8\u9001\uff1a\n```shell\n#\u51c6\u5907\u4e00\u4e2a\u80fd\u591f\u4e0a\u4f20\u955c\u50cf\u7684\u4ed3\u5e93\nSW_REPO="registry.cn-hangzhou.aliyuncs.com/alisre"\n\n./build.sh -t all -p $SW_REPO -b\n')),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u624b\u52a8\u5206\u6b65\u6267\u884c\u76f8\u5173\u670d\u52a1\u7684\u6784\u5efa\uff0c\u5305\u542bsw-appmanager\u4f9d\u8d56\u53ca\u81ea\u8eab\u955c\u50cf\u7684\u6784\u5efa\u4e09\u5927\u6b65\u9aa4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'#\u51c6\u5907\u4e00\u4e2a\u80fd\u591f\u4e0a\u4f20\u955c\u50cf\u7684\u4ed3\u5e93\nSW_REPO="registry.cn-hangzhou.aliyuncs.com/alisre"\n\n# sw-appmanager \u4f9d\u8d56\u6784\u5efa\n./build.sh -t base -p $SW_REPO -b\n\n# sw-appmanager \u6784\u5efa\n./build.sh -t appmanager -p $SW_REPO -b\n\n')),(0,a.kt)("a",{name:"jiRmc"}),"# 2. SREWorks\u90e8\u7f72",(0,a.kt)("a",{name:"zFb7r"}),"## 2.1. \u90e8\u7f72\u73af\u5883\u51c6\u5907",(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u80fd\u8bbf\u95ee\u8be5\u955c\u50cf\u4ed3\u5e93\u7684k8s\u96c6\u7fa4\uff0c\u5e76\u786e\u8ba4\u8981\u90e8\u7f72\u7684namspace"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u53f0\u5b89\u88c5\u6709 ",(0,a.kt)("inlineCode",{parentName:"li"},"helm"),"  \u547d\u4ee4\u7684\u673a\u5668",(0,a.kt)("a",{name:"kfKy5"}))),(0,a.kt)("h2",{id:"22-\u5b89\u88c5-sreworks-helm\u5305"},"2.2 \u5b89\u88c5 SREworks helm\u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'helm install appmanager $SW_ROOT/chart/sreworks-chart \\\n    --create-namespace --namespace sreworks \\\n    --set appmanager.home.url="https://sreworks.c38cca9c474484bdc9873f44f733d8bcd.cn-beijing.alicontainer.com"\n')),(0,a.kt)("a",{name:"j6pra"}),"##",(0,a.kt)("a",{name:"R1Xzu"}),"# \u9644: swcli\u5b89\u88c5\u672c\u5730\u65b9\u6cd5 ```shell # MACOS https://abm-storage.oss-cn-zhangjiakou.aliyuncs.com/swcli-darwin-amd64 # Linux https://abm-storage.oss-cn-zhangjiakou.aliyuncs.com/swcli-linux-amd64 # Windows https://abm-storage.oss-cn-zhangjiakou.aliyuncs.com/swcli-windows-amd64",(0,a.kt)("p",null,"wget ",(0,a.kt)("a",{parentName:"p",href:"https://abm-storage.oss-cn-zhangjiakou.aliyuncs.com/swcli-darwin-amd64"},"https://abm-storage.oss-cn-zhangjiakou.aliyuncs.com/swcli-darwin-amd64")," -O $SW_ROOT/swcli\nchmod 755 $SW_ROOT/swcli"),(0,a.kt)("h1",{id:"\u914d\u7f6eswcli"},"\u914d\u7f6eswcli"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"")))}m.isMDXComponent=!0}}]);