"use strict";(self.webpackChunksreworks=self.webpackChunksreworks||[]).push([[4284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},k=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,d=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(d,s(s({ref:t},k),{},{components:n})):r.createElement(d,s({ref:t},k))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},81156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"2.1 \u5feb\u901f\u5b89\u88c5",date:new Date("2022-03-25T03:39:17.000Z")},s=void 0,o={unversionedId:"rr5g10",id:"rr5g10",title:"2.1 \u5feb\u901f\u5b89\u88c5",description:"\u672c\u6587\u4f1a\u5c06 SREWorks \u4ee5\u6700\u5c0f\u5316\u7684\u65b9\u5f0f\u5b89\u88c5\u5728 Kubernetes \u4e0a\uff0c\u8fd9\u6837\u53ef\u4ee5\u5e2e\u52a9\u4f60\u8282\u7701\u8d44\u6e90\u3002",source:"@site/docs/rr5g10.md",sourceDirName:".",slug:"/rr5g10",permalink:"/zh/docs/next/rr5g10",draft:!1,editUrl:"https://www.yuque.com/sreworks-doc/docs/rr5g10",tags:[],version:"current",frontMatter:{title:"2.1 \u5feb\u901f\u5b89\u88c5",date:"2022-03-25T03:39:17.000Z"},sidebar:"sidebars",previous:{title:"1.5 \u7248\u672c\u8bb0\u5f55",permalink:"/zh/docs/next/ogxnmx"},next:{title:"2.2 \u6e90\u7801\u6784\u5efa\u5b89\u88c5",permalink:"/zh/docs/next/mzz07m"}},i={},p=[{value:"1. \u524d\u63d0\u6761\u4ef6",id:"1-\u524d\u63d0\u6761\u4ef6",level:2},{value:"2. \u5b89\u88c5\u90e8\u7f72",id:"2-\u5b89\u88c5\u90e8\u7f72",level:2},{value:"\u5b89\u88c5 Helm",id:"\u5b89\u88c5-helm",level:3},{value:"\u7f51\u7edc\u6a21\u5f0f: Ingress/NodePort",id:"\u7f51\u7edc\u6a21\u5f0f-ingressnodeport",level:3},{value:"Ingress\u6a21\u5f0f",id:"ingress\u6a21\u5f0f",level:4},{value:"NodePort\u6a21\u5f0f",id:"nodeport\u6a21\u5f0f",level:4},{value:"\u90e8\u7f72\u7248\u672c: \u57fa\u7840\u7248/\u6570\u667a\u7248",id:"\u90e8\u7f72\u7248\u672c-\u57fa\u7840\u7248\u6570\u667a\u7248",level:3},{value:"\u90e8\u7f72\u6848\u4f8b",id:"\u90e8\u7f72\u6848\u4f8b",level:3},{value:"\u6848\u4f8b1: Kubesphere All-in-one \u96c6\u7fa4\u90e8\u7f72\u6570\u667a\u7248SREWorks",id:"\u6848\u4f8b1-kubesphere-all-in-one-\u96c6\u7fa4\u90e8\u7f72\u6570\u667a\u7248sreworks",level:4},{value:"\u6848\u4f8b2: \u6807\u51c6k8s\u96c6\u7fa4\u90e8\u7f72\u6570\u667a\u7248SREWorks",id:"\u6848\u4f8b2-\u6807\u51c6k8s\u96c6\u7fa4\u90e8\u7f72\u6570\u667a\u7248sreworks",level:4},{value:"\u6848\u4f8b3: \u672c\u5730k8s\u96c6\u7fa4\u90e8\u7f72\u57fa\u7840\u7248SREWorks",id:"\u6848\u4f8b3-\u672c\u5730k8s\u96c6\u7fa4\u90e8\u7f72\u57fa\u7840\u7248sreworks",level:4},{value:"3. \u9a8c\u8bc1\u5b89\u88c5",id:"3-\u9a8c\u8bc1\u5b89\u88c5",level:2},{value:"4. \u5378\u8f7d",id:"4-\u5378\u8f7d",level:2},{value:"5. \u5e38\u89c1\u95ee\u9898",id:"5-\u5e38\u89c1\u95ee\u9898",level:2}],k={toc:p};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4f1a\u5c06 SREWorks \u4ee5\u6700\u5c0f\u5316\u7684\u65b9\u5f0f\u5b89\u88c5\u5728 Kubernetes \u4e0a\uff0c\u8fd9\u6837\u53ef\u4ee5\u5e2e\u52a9\u4f60\u8282\u7701\u8d44\u6e90\u3002"),(0,a.kt)("a",{name:"h1HjZ"}),(0,a.kt)("h2",{id:"1-\u524d\u63d0\u6761\u4ef6"},"1. \u524d\u63d0\u6761\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kubernetes \u7684\u7248\u672c\u9700\u8981\u5927\u4e8e\u7b49\u4e8e ",(0,a.kt)("strong",{parentName:"li"},"1.20")),(0,a.kt)("li",{parentName:"ul"},"\u786c\u4ef6\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5206\u5e03\u5f0f\u90e8\u7f72: \u5efa\u8bae\u81f3\u5c113\u53f0\u8282\u70b9\uff08\u914d\u7f6e\u4e3a4 \u6838 CPU\uff0c16G \u5185\u5b58\uff09\uff0c\u5b58\u50a8\u9700\u8981300G\u4ee5\u4e0a\u7a7a\u95f4\uff0c90\u4e2aPod\u4ee5\u4e0a\u914d\u989d"),(0,a.kt)("li",{parentName:"ul"},"\u5355\u673a\u5b8c\u6574(\u6570\u667a\u7248)\u90e8\u7f72: \u5efa\u8bae\u81f3\u5c11 8\u6838/32G\u5185\u5b58/300G\u786c\u76d8"),(0,a.kt)("li",{parentName:"ul"},"\u5355\u673a\u57fa\u7840\u7248\u90e8\u7f72: \u5efa\u8bae\u81f3\u5c11 4\u6838/16G\u5185\u5b58/100G\u786c\u76d8")))),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(87179).Z,width:"941",height:"187"})),(0,a.kt)("a",{name:"u5WyB"}),(0,a.kt)("h2",{id:"2-\u5b89\u88c5\u90e8\u7f72"},"2. \u5b89\u88c5\u90e8\u7f72"),(0,a.kt)("p",null,"\u63a8\u8350\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," \u6765\u5b89\u88c5 SREWorks"),(0,a.kt)("a",{name:"MPeH4"}),(0,a.kt)("h3",{id:"\u5b89\u88c5-helm"},"\u5b89\u88c5 Helm"),(0,a.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\uff08\u5982\u679c\u5df2\u5b89\u88c5\u4e86 Helm 3\uff0c\u53ef\u4ee5\u8df3\u8fc7\u8fd9\u4e00\u6b65\u9aa4\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# \u9002\u7528Mac intel\u82af\u7247\nwget "http://sreworks.oss-cn-beijing.aliyuncs.com/bin/helm-darwin-amd64" -O helm\n\n# \u9002\u7528Linux intel\u82af\u7247\n# wget https://sreworks.oss-cn-beijing.aliyuncs.com/bin/helm-linux-am64 -O helm\n\nchmod +x ./helm\nmv ./helm /usr/local/bin/\n')),(0,a.kt)("a",{name:"FWdw9"}),(0,a.kt)("h3",{id:"\u7f51\u7edc\u6a21\u5f0f-ingressnodeport"},"\u7f51\u7edc\u6a21\u5f0f: Ingress/NodePort"),(0,a.kt)("a",{name:"fGWch"}),(0,a.kt)("h4",{id:"ingress\u6a21\u5f0f"},"Ingress\u6a21\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SREWorks\u7684\u90e8\u7f72\u5fc5\u987b\u6307\u5b9aingress\u7684\u57df\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4ee5\u963f\u91cc\u4e91ACK\u96c6\u7fa4\u4e3a\u4f8b\uff0c\u57df\u540d\u53ef\u4ee5\u5728\u3010\u57fa\u672c\u4fe1\u606f\u3011\u4e2d\u53ef\u4ee5\u627e\u5230\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"http://*.ceea604.cn-huhehaote.alicontainer.com")," \uff0c* \u90e8\u5206\u7528\u6237\u53ef\u4ee5\u81ea\u884c\u586b\u5199\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"li"},"http://sreworks.c34a60e3c93854680b590b0d5a190310a.cn-zhangjiakou.alicontainer.com"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u672a\u4f7f\u7528\u963f\u91cc\u4e91ACK\u96c6\u7fa4\u7684\u4e5f\u53ef\u4ee5\u81ea\u884c\u786e\u5b9a\u6d4f\u89c8\u5668\u8bbf\u95eeSREWorks\u63a7\u5236\u53f0\u7684\u57df\u540d\uff0c\u5728\u5b89\u88c5\u65f6\u4f20\u5165",(0,a.kt)("inlineCode",{parentName:"li"},"appmanager.home.url"),"\u53c2\u6570\u5373\u53ef\u3002")),(0,a.kt)("p",null,"Ingress\u7f51\u7edc\u6a21\u5f0f\u90e8\u7f72\u53c2\u6570\u53c2\u8003\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'--set appmanager.home.url="https://your-website.***.com" \n')),(0,a.kt)("a",{name:"a74pq"}),(0,a.kt)("h3",{id:""}),(0,a.kt)("a",{name:"MLPXH"}),(0,a.kt)("h4",{id:"nodeport\u6a21\u5f0f"},"NodePort\u6a21\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u4e91\u5382\u5546\u8d2d\u4e70\u865a\u673a\uff0c\u8fd0\u884cNodePort\u6a21\u5f0f\u9700\u8981\u6ce8\u610f\u88ab\u8bbf\u95ee\u8282\u70b9(NODE_IP)\u7684\u7f51\u7edc\u5b89\u5168\u7ec4\u6216\u9632\u706b\u5899\uff0c\u6253\u5f00\u8be5\u7aef\u53e3(30767)\u7684\u516c\u7f51\u88ab\u8bbf\u95ee\u9650\u5236\u3002")),(0,a.kt)("p",null,"NodePort\u7f51\u7edc\u6a21\u5f0f\u90e8\u7f72\u53c2\u6570\u53c2\u8003\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'--set global.accessMode="nodePort" \n--set appmanager.home.url="http://NODE_IP:30767"\n')),(0,a.kt)("a",{name:"NR5Lc"}),(0,a.kt)("h3",{id:"\u90e8\u7f72\u7248\u672c-\u57fa\u7840\u7248\u6570\u667a\u7248"},"\u90e8\u7f72\u7248\u672c: \u57fa\u7840\u7248/\u6570\u667a\u7248"),(0,a.kt)("p",null,"\u57fa\u7840\u5e94\u7528\u5305\u542b8\u4e2a\u5e94\u7528: \u8fd0\u7ef4\u4e2d\u53f0/\u5e94\u7528\u7ba1\u7406/\u56e2\u961f\u7ba1\u7406/\u96c6\u7fa4\u7ba1\u7406/\u6a21\u677f\u4e2d\u5fc3/\u5e2e\u52a9\u4e2d\u5fc3/\u6587\u4ef6\u7ba1\u7406/\u7cfb\u7edf\u8bbe\u7f6e",(0,a.kt)("br",null),"\u6570\u667a\u5e94\u7528\u5305\u542b7\u4e2a\u5e94\u7528: \u6570\u636e\u8fd0\u7ef4\u5e73\u53f0/\u667a\u80fd\u8fd0\u7ef4\u5e73\u53f0/\u6545\u969c\u81ea\u6108/\u5065\u5eb7\u7ba1\u7406/\u8fd0\u8425\u4e2d\u5fc3/\u4f5c\u4e1a\u8c03\u5ea6\u5e73\u53f0/\u8fd0\u7ef4\u641c\u7d22"),(0,a.kt)("p",null,"\u57fa\u7840\u7248SREWorks\u5728",(0,a.kt)("strong",{parentName:"p"},"\u5355\u53f04\u683816G"),"\u673a\u5668\u4e0a\u5373\u53ef\u6b63\u5e38\u542f\u52a8\uff0c\u57fa\u7840\u7248\u90e8\u7f72\u4e3a\u57fa\u7840\u5e94\u7528\uff0c\u9ed8\u8ba4\u5b8c\u6574\u90e8\u7f72\u4e3a \u57fa\u7840\u5e94\u7528 + \u6570\u667a\u5e94\u7528\u3002"),(0,a.kt)("p",null,"\u57fa\u7840\u7248\u90e8\u7f72\u53c2\u6570\u53c2\u8003\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"--set saas.onlyBase=true\n")),(0,a.kt)("a",{name:"XvYoW"}),(0,a.kt)("h3",{id:"\u90e8\u7f72\u6848\u4f8b"},"\u90e8\u7f72\u6848\u4f8b"),(0,a.kt)("a",{name:"zmij7"}),(0,a.kt)("h4",{id:"\u6848\u4f8b1-kubesphere-all-in-one-\u96c6\u7fa4\u90e8\u7f72\u6570\u667a\u7248sreworks"},"\u6848\u4f8b1: Kubesphere All-in-one \u96c6\u7fa4\u90e8\u7f72\u6570\u667a\u7248SREWorks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kubesphere All-in-one \u96c6\u7fa4\u90e8\u7f72\u53c2\u8003 ",(0,a.kt)("a",{parentName:"li",href:"https://kubesphere.io/zh/docs/quick-start/all-in-one-on-linux/"},"https://kubesphere.io/zh/docs/quick-start/all-in-one-on-linux/")),(0,a.kt)("li",{parentName:"ul"},"\u6570\u667a\u7248\u90e8\u7f72\u5355\u673a\u8d44\u6e90\u4e0d\u5c0f\u4e8e8\u6838/32G\u5185\u5b58/300G\u786c\u76d8"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528Kubesphere All-in-one\u96c6\u7fa4\u81ea\u5e26\u7684\u5b58\u50a8\u96c6: local")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# \u4e0b\u8f7d\u5e76\u5b89\u88c5kk\u5de5\u5177\ncurl -sfL https://get-kk.kubesphere.io | VERSION=v2.0.0 sh -\n\n# \u901a\u8fc7kk\u5de5\u5177\u90e8\u7f72k8s\u96c6\u7fa4\n./kk create cluster --with-kubernetes v1.21.5 --with-kubesphere v3.2.1\n\n# \u4e0b\u8f7dsreworks\u5230\u672c\u5730\ngit clone http://github.com/alibaba/sreworks.git -b v1.2 sreworks\ncd sreworks/chart/sreworks-chart\n\n# \u5b89\u88c5SREWorks\n# \u66ff\u6362NODE_IP\u4e3a\u67d0\u4e2a\u8282\u70b9\u7684\u6d4f\u89c8\u5668\u53ef\u8bbf\u95eeIP\nhelm install sreworks ./ \\\n    --create-namespace --namespace sreworks \\\n    --set global.accessMode="nodePort" \\\n    --set appmanager.home.url="http://NODE_IP:30767" \\\n    --set global.storageClass="local" \\\n    --set appmanagerbase.openebs.enabled=false\n    \n')),(0,a.kt)("a",{name:"MVeU6"}),(0,a.kt)("h4",{id:"\u6848\u4f8b2-\u6807\u51c6k8s\u96c6\u7fa4\u90e8\u7f72\u6570\u667a\u7248sreworks"},"\u6848\u4f8b2: \u6807\u51c6k8s\u96c6\u7fa4\u90e8\u7f72\u6570\u667a\u7248SREWorks"),(0,a.kt)("p",null,"\u4ee5\u963f\u91cc\u4e91ack\u96c6\u7fa4\u4e3a\u4f8b\uff0c\u975e\u963f\u91cc\u4e91\u96c6\u7fa4\u7684\u8bf7\u6ce8\u610f\u66ff\u6362\u53d8\u91cf"),(0,a.kt)("p",null,"\u7f51\u9875\u8bbf\u95ee\u65b9\u5f0f\u4f7f\u7528Ingress"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u4e0b\u8f7dsreworks\u5230\u672c\u5730\ngit clone http://github.com/alibaba/sreworks.git -b v1.2 sreworks\ncd sreworks/chart/sreworks-chart\n\n# \u5b89\u88c5SREWorks\nhelm install sreworks ./ \\\n    --kubeconfig="****" \\\n    --create-namespace --namespace sreworks \\\n    --set appmanager.home.url="http://*.*.alicontainer.com" \\\n    --set global.storageClass="alicloud-disk-available" \\\n    --set appmanagerbase.openebs.enabled=false\n\n')),(0,a.kt)("p",null,"\u7f51\u9875\u8bbf\u95ee\u65b9\u5f0f\u4f7f\u7528NodePort"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# \u4e0b\u8f7dsreworks\u5230\u672c\u5730\ngit clone http://github.com/alibaba/sreworks.git -b v1.2 sreworks\ncd sreworks/chart/sreworks-chart\n\n# \u5b89\u88c5SREWorks\n# \u66ff\u6362NODE_IP\u4e3a\u67d0\u4e2a\u8282\u70b9\u7684\u6d4f\u89c8\u5668\u53ef\u8bbf\u95eeIP\nhelm install sreworks ./ \\\n    --kubeconfig="****" \\\n    --create-namespace --namespace sreworks \\\n    --set global.accessMode="nodePort" \\\n    --set appmanager.home.url="http://NODE_IP:30767" \\\n    --set global.storageClass="alicloud-disk-available" \\\n    --set appmanagerbase.openebs.enabled=false\n')),(0,a.kt)("a",{name:"EcANN"}),(0,a.kt)("h4",{id:"\u6848\u4f8b3-\u672c\u5730k8s\u96c6\u7fa4\u90e8\u7f72\u57fa\u7840\u7248sreworks"},"\u6848\u4f8b3: \u672c\u5730k8s\u96c6\u7fa4\u90e8\u7f72\u57fa\u7840\u7248SREWorks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f: \u9ed8\u8ba4\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"storageClass:sreworks-hostpath")," \u662f\u7531OpenEBS\u7684LocalPV\u65b9\u6848\u5b9e\u73b0\u7684\uff0c\u4ec5\u80fd\u7528\u4e8e\u5f00\u53d1\u6d4b\u8bd5\u73af\u5883\uff0c\u5982\u9700\u7528\u4e8e\u751f\u4ea7\uff0c\u5efa\u8bae\u4f7f\u7528\u7b26\u5408 Kubernetes \u8981\u6c42\u7684\u6301\u4e45\u5316\u5b58\u50a8\uff08\u5982 GlusterFS\u3001Ceph \u7b49\u5206\u5e03\u5f0f\u5b58\u50a8\uff0c\u6216\u4e91\u670d\u52a1\u4e0a\u4e0a\u7684\u5757\u5b58\u50a8\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u4e0b\u8f7dsreworks\u5230\u672c\u5730\ngit clone http://github.com/alibaba/sreworks.git -b v1.2 sreworks\ncd sreworks/chart/sreworks-chart\n\n# \u5b89\u88c5SREWorks\n# \u66ff\u6362NODE_IP\u4e3a\u67d0\u4e2a\u8282\u70b9\u7684\u6d4f\u89c8\u5668\u53ef\u8bbf\u95eeIP\nhelm install sreworks ./ \\\n    --create-namespace --namespace sreworks \\\n    --set global.accessMode="nodePort" \\\n    --set appmanager.home.url="http://NODE_IP:30767" \\\n    --set saas.onlyBase=true\n\n')),(0,a.kt)("a",{name:"QG9OO"}),(0,a.kt)("h4",{id:"-1"}),(0,a.kt)("a",{name:"ZKREF"}),(0,a.kt)("h2",{id:"3-\u9a8c\u8bc1\u5b89\u88c5"},"3. \u9a8c\u8bc1\u5b89\u88c5"),(0,a.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165\u4e0a\u4e2a\u6b65\u9aa4\u7684\u57df\u540d\uff0c\u5982\u679c\u80fd\u591f\u770b\u5230\u9875\u9762\uff0c\u8bf4\u660e\u5df2\u7ecf\u5b89\u88c5\u5b8c\u6210(\u5927\u7ea6\u9700\u7b49\u5f855\u5206\u949f\u5de6\u53f3)\u3002\u6ce8\u518c\u5e76\u5f00\u59cb\u4f7f\u7528 SREWorks\u3002\u9ed8\u8ba4\u8d26\u53f7\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"admin"),"\uff0c\u9ed8\u8ba4\u5bc6\u7801\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"12345678")),(0,a.kt)("a",{name:"Vh7C6"}),(0,a.kt)("h2",{id:"4-\u5378\u8f7d"},"4. \u5378\u8f7d"),(0,a.kt)("p",null,"\u8bf7\u52a1\u5fc5\u9075\u5faa\u4e0b\u9762\u987a\u5e8f\u6267\u884c\u3002\u5343\u4e07\u4e0d\u80fd\u4e0d\u6267\u884chelm uninstall\u76f4\u63a5\u5220\u9664namespace\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u5404\u79cdcrd\u53d8\u6210\u810f\u6570\u636e\u6b8b\u7559\u5728\u96c6\u7fa4!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helm uninstall sreworks -nsreworks\nkubectl delete namespace sreworks\n")),(0,a.kt)("a",{name:"AwB0R"}),(0,a.kt)("h2",{id:"5-\u5e38\u89c1\u95ee\u9898"},"5. \u5e38\u89c1\u95ee\u9898"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u9700\u8981\u4f7f\u7528\u975e\u9ed8\u8ba4\u7684kubeconfig\uff0c\u8bf7\u5728helm\u547d\u4ee4\u4e2d\u52a0\u5165",(0,a.kt)("inlineCode",{parentName:"li"},"--kubeconfig"),"\u6307\u5b9a\u76ee\u6807\u96c6\u7fa4\u7684kubeconfig\u6587\u4ef6\u7684\u8def\u5f84"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u9047\u5230\u957f\u65f6\u95f4Pod\u5904\u4e8eContainerCreating\uff0c\u8bf7\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl describe pod "),"\u547d\u4ee4\u67e5\u770bPod\u7684\u5f02\u5e38\u4e8b\u4ef6")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f02\u5e38\u4e8b\u4ef6\u4e2d\u51fa\u73b0 ",(0,a.kt)("inlineCode",{parentName:"li"},"InvalidInstanceType.NotSupportDiskCategory"),"\uff0c\u8bf4\u660e\u5f53\u524d\u7684Node\u4e0d\u652f\u6301\u6302\u8f7d\u8fd9\u79cd\u4e91\u76d8\u7c7b\u578b\uff0c\u8bf7\u5728helm\u547d\u4ee4\u4e2d\u52a0\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},'--set global.storageClass="alicloud-disk-essd"')," \u8fdb\u884c\u6307\u5b9a\uff0c\u9ed8\u8ba4\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"sreworks-hostpath")),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u65e0\u6cd5\u786e\u8ba4\u53ef\u7528\u7684storageClass\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"sbin/storage-class.py")," \u811a\u672c\u68c0\u6d4b\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:3},(0,a.kt)("li",{parentName:"ol"},"\u5982\u679csreworks\u9700\u8981\u5347\u7ea7\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},'sbin/upgrade-cluster.sh --kubeconfig="****"'),"\u6765\u8fdb\u884c\u6267\u884c\uff0c\u8be5\u547d\u4ee4\u7684\u80cc\u540e\u539f\u7406\u662f\u89e6\u53d1\u6240\u6709\u7684init-job\u91cd\u65b0\u6267\u884c\uff0c\u62c9\u53d6\u6700\u65b0\u7684SaaS\u5e94\u7528\u5305\u8fdb\u884c\u90e8\u7f72\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:4},(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e0d\u4f7f\u7528\u9ed8\u8ba4\u7684\u5b58\u50a8\u96c6\uff0c\u5fc5\u987b\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"--set appmanagerbase.openebs.enabled=false")," \u6765\u5173\u95edopenebs\uff0c\u5426\u5219\u53ef\u80fd\u51fa\u73b0\u4e0b\u9762\u7c7b\u4f3c\u7684\u62a5\u9519\u3002")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'MountVolume.MountDevice failed for volume "d-2zec7mb0xriw4p64l3r5" : rpc error: code = Unknown desc = Root device /dev/vde is partition, and you should format /dev/vde1 by hands\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://edu.aliyun.com/roadmap/cloudnative"},"\u4e91\u539f\u751f\u6280\u672f\u516c\u5f00\u8bfe"))))))}u.isMDXComponent=!0},87179:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1646727414037-e8db2b27-c269-43d1-ae16-b365abf02f39.jpeg-1b422d31151009960951f8b1b7c552c5.png"}}]);