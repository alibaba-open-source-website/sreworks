"use strict";(self.webpackChunksreworks=self.webpackChunksreworks||[]).push([[7116],{3905:(e,n,t)=>{t.d(n,{Zo:()=>k,kt:()=>d});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),i=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},k=function(e){var n=i(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),c=i(t),d=l,u=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return t?a.createElement(u,r(r({ref:n},k),{},{components:t})):a.createElement(u,r({ref:n},k))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=c;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var i=2;i<o;i++)r[i]=t[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},61834:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var a=t(87462),l=(t(67294),t(3905));const o={title:"5.4.4 \u5de5\u4f5c\u6d41\u63d2\u4ef6",date:new Date("2023-07-20T06:38:48.000Z"),toc_max_heading_level:6,toc_min_heading_level:2},r=void 0,p={unversionedId:"yb3rzebcxa6ei9y1",id:"yb3rzebcxa6ei9y1",title:"5.4.4 \u5de5\u4f5c\u6d41\u63d2\u4ef6",description:"\u5728OAM\uff08Open Application Model\uff09\u6a21\u578b\u7684\u90e8\u7f72\u8fc7\u7a0b\u4e2d\uff0c\u5176\u9ed8\u8ba4\u60c5\u51b5\u662f\u65e0\u72b6\u6001\u7684\u90e8\u7f72\u65b9\u5f0f\u3002\u7136\u800c\uff0c\u968f\u7740\u5e94\u7528\u67b6\u6784\u7684\u65e5\u76ca\u590d\u6742\u5316\uff0c\u6211\u4eec\u6709\u65f6\u4f1a\u9762\u4e34\u7740\u4e00\u4e9b\u9700\u8981\u9010\u6b65\u8fdb\u884c\u7684\u3001\u591a\u9636\u6bb5\u7684\u90e8\u7f72\u9700\u6c42\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f20\u7edf\u7684\u4e00\u6b21\u6027\u90e8\u7f72\u65b9\u6cd5\u53ef\u80fd\u65e0\u6cd5\u6ee1\u8db3\u6240\u6709\u9700\u6c42\uff0c\u4ece\u800c\u5e26\u6765\u8bf8\u591a\u6311\u6218\u3002\u56e0\u6b64\uff0c\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u5e76\u6ee1\u8db3\u7528\u6237\u66f4\u591a\u6837\u5316\u3001\u590d\u6742\u5316\u7684\u90e8\u7f72\u9700\u6c42\uff0c\u6211\u4eec\u53c2\u8003OAM\u5e94\u7528\u6807\u51c6\uff0c\u5f15\u5165\u4e86\u5f3a\u5927\u7684workflow\u80fd\u529b\uff1a\u6b64\u9879\u529f\u80fd\u80fd\u591f\u5bf9\u90e8\u7f72\u8fc7\u7a0b\u8fdb\u884c\u7ec6\u81f4\u7684\u7ba1\u7406\u548c\u63a7\u5236\uff0c\u4f7f\u5f97\u590d\u6742\u7684\u90e8\u7f72\u9700\u6c42\u80fd\u591f\u6309\u7167\u9884\u8bbe\u7684\u6b65\u9aa4\u548c\u6d41\u7a0b\u9010\u6b65\u6267\u884c\uff0c\u5927\u5927\u63d0\u5347\u4e86\u90e8\u7f72\u7684\u7075\u6d3b\u6027\u548c\u53ef\u63a7\u6027\u3002\u5728SREWorks\u4e2d\uff0c\u6211\u4eec\u5185\u7f6e\u4e865\u4e2a\u5de5\u4f5c\u6d41\u63d2\u4ef6\uff0c\u4e5f\u5141\u8bb8\u7528\u6237\u81ea\u5b9a\u4e49\u5de5\u4f5c\u6d41\u63d2\u4ef6\uff1a",source:"@site/docs/yb3rzebcxa6ei9y1.md",sourceDirName:".",slug:"/yb3rzebcxa6ei9y1",permalink:"/zh/docs/next/yb3rzebcxa6ei9y1",draft:!1,editUrl:"https://www.yuque.com/sreworks-doc/docs/yb3rzebcxa6ei9y1",tags:[],version:"current",frontMatter:{title:"5.4.4 \u5de5\u4f5c\u6d41\u63d2\u4ef6",date:"2023-07-20T06:38:48.000Z",toc_max_heading_level:6,toc_min_heading_level:2},sidebar:"sidebars",previous:{title:"5.4.3 \u8fd0\u7ef4\u7279\u5f81\u63d2\u4ef6",permalink:"/zh/docs/next/ld226wb9gos9pzxr"},next:{title:"5.5.1 OpenAPI\u4f7f\u7528\u4ecb\u7ecd",permalink:"/zh/docs/next/ytk76m9ndx0y04bk"}},s={},i=[{value:"\u53d1\u8d77 Workflow API",id:"\u53d1\u8d77-workflow-api",level:3},{value:"\u67e5\u8be2 Workflow Instance \u5217\u8868 API",id:"\u67e5\u8be2-workflow-instance-\u5217\u8868-api",level:3},{value:"\u67e5\u8be2\u5355\u4e2a Workflow Instance API",id:"\u67e5\u8be2\u5355\u4e2a-workflow-instance-api",level:3},{value:"\u8bbe\u7f6e Workflow Instance Context",id:"\u8bbe\u7f6e-workflow-instance-context",level:3},{value:"\u5524\u9192 Workflow Instance",id:"\u5524\u9192-workflow-instance",level:3},{value:"\u7ec8\u6b62 Workflow Instance",id:"\u7ec8\u6b62-workflow-instance",level:3},{value:"\u91cd\u8bd5 Workflow Instance",id:"\u91cd\u8bd5-workflow-instance",level:3},{value:"\u91cd\u8bd5 Workflow Instance (\u81ea\u5b9a\u4e49\u8d77\u59cb Task)",id:"\u91cd\u8bd5-workflow-instance-\u81ea\u5b9a\u4e49\u8d77\u59cb-task",level:3},{value:"\u67e5\u8be2 Workflow Task \u5217\u8868",id:"\u67e5\u8be2-workflow-task-\u5217\u8868",level:3},{value:"\u67e5\u8be2\u5355\u4e2a Workflow Task \u8be6\u60c5",id:"\u67e5\u8be2\u5355\u4e2a-workflow-task-\u8be6\u60c5",level:3},{value:"\u7ec8\u6b62 Workflow Task",id:"\u7ec8\u6b62-workflow-task",level:3},{value:"\u6682\u505c Workflow Task",id:"\u6682\u505c-workflow-task",level:3}],k={toc:i};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5728OAM\uff08Open Application Model\uff09\u6a21\u578b\u7684\u90e8\u7f72\u8fc7\u7a0b\u4e2d\uff0c\u5176\u9ed8\u8ba4\u60c5\u51b5\u662f\u65e0\u72b6\u6001\u7684\u90e8\u7f72\u65b9\u5f0f\u3002\u7136\u800c\uff0c\u968f\u7740\u5e94\u7528\u67b6\u6784\u7684\u65e5\u76ca\u590d\u6742\u5316\uff0c\u6211\u4eec\u6709\u65f6\u4f1a\u9762\u4e34\u7740\u4e00\u4e9b\u9700\u8981\u9010\u6b65\u8fdb\u884c\u7684\u3001\u591a\u9636\u6bb5\u7684\u90e8\u7f72\u9700\u6c42\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f20\u7edf\u7684\u4e00\u6b21\u6027\u90e8\u7f72\u65b9\u6cd5\u53ef\u80fd\u65e0\u6cd5\u6ee1\u8db3\u6240\u6709\u9700\u6c42\uff0c\u4ece\u800c\u5e26\u6765\u8bf8\u591a\u6311\u6218\u3002\u56e0\u6b64\uff0c\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u5e76\u6ee1\u8db3\u7528\u6237\u66f4\u591a\u6837\u5316\u3001\u590d\u6742\u5316\u7684\u90e8\u7f72\u9700\u6c42\uff0c\u6211\u4eec\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/spec/blob/master/4.workload_types.md"},"OAM\u5e94\u7528\u6807\u51c6"),"\uff0c\u5f15\u5165\u4e86\u5f3a\u5927\u7684workflow\u80fd\u529b\uff1a\u6b64\u9879\u529f\u80fd\u80fd\u591f\u5bf9\u90e8\u7f72\u8fc7\u7a0b\u8fdb\u884c\u7ec6\u81f4\u7684\u7ba1\u7406\u548c\u63a7\u5236\uff0c\u4f7f\u5f97\u590d\u6742\u7684\u90e8\u7f72\u9700\u6c42\u80fd\u591f\u6309\u7167\u9884\u8bbe\u7684\u6b65\u9aa4\u548c\u6d41\u7a0b\u9010\u6b65\u6267\u884c\uff0c\u5927\u5927\u63d0\u5347\u4e86\u90e8\u7f72\u7684\u7075\u6d3b\u6027\u548c\u53ef\u63a7\u6027\u3002",(0,l.kt)("br",null),"\u5728SREWorks\u4e2d\uff0c\u6211\u4eec\u5185\u7f6e\u4e865\u4e2a\u5de5\u4f5c\u6d41\u63d2\u4ef6\uff0c\u4e5f\u5141\u8bb8\u7528\u6237\u81ea\u5b9a\u4e49\u5de5\u4f5c\u6d41\u63d2\u4ef6\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"apply-components \u6309\u9700\u90e8\u7f72\u7ec4\u4ef6 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/alibaba/SREWorks/blob/master/paas/appmanager/tesla-appmanager-server/src/main/resources/dynamicscripts/WorkflowApplyComponentsHandler.groovy"},"\u4ee3\u7801\u5730\u5740")),(0,l.kt)("li",{parentName:"ul"},"deploy \u90e8\u7f72\u5e94\u7528\u5168\u91cf\u7ec4\u4ef6 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/alibaba/SREWorks/blob/master/paas/appmanager/tesla-appmanager-server/src/main/resources/dynamicscripts/WorkflowDeployHandler.groovy"},"\u4ee3\u7801\u5730\u5740")),(0,l.kt)("li",{parentName:"ul"},"remoteDeploy \u90e8\u7f72\u5e94\u7528\u5168\u91cf\u7ec4\u4ef6\u81f3\u8fdc\u7aef\u96c6\u7fa4 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/alibaba/SREWorks/blob/master/paas/appmanager/tesla-appmanager-server/src/main/resources/dynamicscripts/WorkflowRemoteDeployHandler.groovy"},"\u4ee3\u7801\u5730\u5740")),(0,l.kt)("li",{parentName:"ul"},"rollout-promotion \u7070\u5ea6\u63a7\u5236\u5668\uff0c\u53ef\u4ee5\u51b3\u5b9a\u7ee7\u7eed\u5411\u4e0b\u90e8\u7f72\u8fd8\u662f\u56de\u6eda  ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/alibaba/SREWorks/blob/master/paas/appmanager/tesla-appmanager-server/src/main/resources/dynamicscripts/WorkflowRolloutPromotionHandler.groovy"},"\u4ee3\u7801\u5730\u5740")),(0,l.kt)("li",{parentName:"ul"},"suspend \u90e8\u7f72\u6682\u505c ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/alibaba/SREWorks/blob/master/paas/appmanager/tesla-appmanager-server/src/main/resources/dynamicscripts/WorkflowSuspendHandler.groovy"},"\u4ee3\u7801\u5730\u5740"),(0,l.kt)("a",{name:"ayznM"}))),(0,l.kt)("h1",{id:"\u5de5\u4f5c\u6d41\u6848\u4f8b\u7070\u5ea6\u53d1\u5e03"},"\u5de5\u4f5c\u6d41\u6848\u4f8b\uff08\u7070\u5ea6\u53d1\u5e03\uff09"),(0,l.kt)("p",null,"\u901a\u8fc7\u5728\u53d1\u5e03\u8fc7\u7a0b\u4e2d\u4e0d\u65ad\u8c03\u6574 Helm / Kustomize \u6a21\u677f\u4e2d\u5bf9\u5e94 Workload spec \u4e2d\u7684 partition \u5b57\u6bb5\uff0c\u6765\u6ee1\u8db3\u7070\u5ea6\u53d1\u5e03\u7684\u8bc9\u6c42\u3002",(0,l.kt)("br",null),"\u5982\u4e0b\uff0c\u662f\u4e00\u4e2a\u5178\u578b\u7684\u53d1\u5e03 Application \u4e2d\u7684\u5355\u4e2a\u7ec4\u4ef6\u63cf\u8ff0\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'revisionName: "K8S_MICROSERVICE|clustermanage|_"\nscopes:\n  - scopeRef:\n      apiVersion: apps.abm.io/v1\n      kind: Namespace\n      name: "{{ Global.deployNamespace }}"\ndataInputs:\n  - valueFrom:\n      dataOutputName: "Global.clusterId"\n    toFieldPaths:\n      - spec.name\nparameterValues:\n  - name: values\n    value:\n      deployNamespace: "{{ Global.deployNamespace }}"\n    toFieldPaths:\n      - spec.values\n')),(0,l.kt)("p",null,"\u5728\u5b9e\u73b0\u7070\u5ea6\u65b9\u6848\u540e\uff0c\u539f Application \u63cf\u8ff0\u8c03\u6574\u4e3a\uff1a",(0,l.kt)("br",null),"\u9700\u8981\u671d POST ",(0,l.kt)("inlineCode",{parentName:"p"},"/workflow/launch"),"\u53d1\u8d77\u4e0b\u9762\u7684\u5185\u5bb9\uff08\u548c\u539f\u6765\u7684 /deployments/launch \u53d1\u8d77\u5185\u5bb9\u7684\u533a\u522b\u5728\u4e8e\u591a\u52a0\u4e86 workflow Section\uff0c\u5176\u4ed6 Section \u7684\u5185\u5bb9\u7b49\u4ef7\uff0c\u4e0d\u7528\u6539\uff09\u3002",(0,l.kt)("br",null),"\u6ce8\u610f\u53d1\u8d77 launch \u7684\u65f6\u5019\u8981\u52a0 category=DEPLOY (URL \u53c2\u6570)\uff0c\u5426\u5219\u4e0d\u80fd\u4f7f\u7528\u56de\u6eda\u529f\u80fd\uff01(\u672c\u8d28\u662f\u7ed9 workflow \u6253\u4e2a\u5206\u7c7b)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'components:\n  - revisionName: "K8S_MICROSERVICE|clustermanage-test|_"\n  - revisionName: "K8S_MICROSERVICE|clustermanage|_"\n    scopes:\n      - scopeRef:\n          apiVersion: apps.abm.io/v1\n          kind: Namespace\n          name: "{{ Global.deployNamespace }}"\n    dataInputs:\n      - valueFrom:\n          dataOutputName: "Global.clusterId"\n        toFieldPaths:\n          - spec.name\n    parameterValues:\n      - name: values\n        value:\n          deployNamespace: "{{ Global.deployNamespace }}"\n        toFieldPaths:\n          - spec.values\nworkflow:\n  steps:\n    - type: apply-components\n      properties:\n        components: \n        - type: K8S_MICROSERVICE\n          name: clustermanage-test\n    - type: apply-components\n      properties:\n        components: \n        - type: K8S_MICROSERVICE\n          name: clustermanage\n        rollout:  # \u4e0d\u63d0\u4f9b rollout \u5219\u76f4\u63a5\u539f\u6837\u90e8\u7f72\n          type: partition  # \u76ee\u524d\u652f\u6301 partition(\u6eda\u52a8\u66f4\u65b0) , \u5f85\u652f\u6301 bluegreen / canary\n          properties:\n            partition: "1"\n            name: "abmRolloutPartition"  # \u53ef\u9009\uff0c\u5982\u679c\u4e0d\u586b\uff0c\u9ed8\u8ba4\u662f abmRolloutPartition\uff0c\u5426\u5219\u53ef\u4ee5\u81ea\u5b9a\u4e49\u4f20\u5165\u7684\u53c2\u6570 Name\n    - type: suspend  # \u6b64\u5904\u5c06\u6574\u4e2a workflow \u7f6e\u4e3a\u6682\u505c\u72b6\u6001\uff0c\u8fd9\u4e2a\u65f6\u5019\u9700\u8981\u5916\u90e8\u901a\u8fc7 PUT /workflow/{instanceId}/context \u6765\u8fdb\u4e00\u6b65\u8bbe\u7f6e\u53d8\u91cf\uff0c\u53c2\u8003\u4e0b\u9762\u7684\u8bf4\u660e\n    - type: rollout-promotion  # \u6b64\u5904\u6839\u636e\u5916\u754c\u8bbe\u7f6e\u7684 context \u4e2d\u7684 continueRollout / rollback \u51b3\u5b9a\u662f\u600e\u4e48\u8d70 (\u4e09\u79cd\u7c7b\u578b)\n    - type: apply-components  # \u5982\u679c\u4e0a\u4e00\u6b65\u51b3\u5b9a\u4e86\u7ee7\u7eed\u5411\u4e0b\u6267\u884c\u7684\u8bdd\uff0c\u90a3\u4e48\u4f1a\u7ee7\u7eed\u6b63\u5e38\u90e8\u7f72\n      properties:\n        components: \n        - type: K8S_MICROSERVICE\n          name: clustermanage\n')),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\u5f53 workflow \u5904\u4e8e suspend \u8282\u70b9\u6682\u505c\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"PUT /workflow/{instanceId}/context")," \u6765\u8bbe\u7f6e\u4e0b\u4e00\u6b65 rollout \u4f7f\u7528\u7684\u53d8\u91cf\uff0c\u5141\u8bb8\u4f20\u5165\u7684 context \u5185\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7070\u5ea6\u6210\u529f\uff0c\u786e\u8ba4\u5e76\u7ee7\u7eed\u5411\u4e0b\u6267\u884c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},'{"continueRollout": true, "rollback": false}')),(0,l.kt)("li",{parentName:"ul"},"\u7070\u5ea6\u5931\u8d25\uff0c\u51b3\u5b9a\u56de\u6eda\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},'{"continueRollout": false, "rollback": true}')),(0,l.kt)("li",{parentName:"ul"},"\u7070\u5ea6\u5931\u8d25\uff0c\u5c31\u6b64\u7ed3\u675f\uff0c\u4e0d\u6267\u884c\u64cd\u4f5c\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},'{"continueRollout": false, "rollback": false}'))),(0,l.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0 context API \u8bbe\u7f6e\u53d8\u91cf\u6210\u529f\u540e\uff0c\u9700\u8981\u8bf7\u6c42 ",(0,l.kt)("inlineCode",{parentName:"p"},"PUT /workflow/{instanceId}/resume"),"\u6062\u590d workflow \u7684\u6267\u884c",(0,l.kt)("br",null),"\u6ce8\u610f\uff1a\u5f53\u4f7f\u7528 suspend+rollout-promotion \u7c7b\u578b\u7684\u65f6\u5019\uff0c\u52a1\u5fc5\u4fdd\u8bc1 Workflow \u53d1\u8d77\u7684\u65f6\u5019\uff0c\u4f7f\u7528\u7684 options \u4e2d\u8bbe\u7f6e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"category")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"DEPLOY"),"\uff0c\u5426\u5219\u65e0\u6cd5\u4f7f\u7528\u56de\u6eda\u529f\u80fd (\u56de\u6eda\u5373\u627e\u5230\u5f53\u524d\u5e94\u7528\u7684\u4e0a\u4e00\u4e2a category=DEPLOY \u7684 Application \u91cd\u65b0\u5168\u91cf\u90e8\u7f72)"),(0,l.kt)("a",{name:"MKElB"}),(0,l.kt)("h1",{id:"\u5de5\u4f5c\u6d41\u63a5\u53e3"},"\u5de5\u4f5c\u6d41\u63a5\u53e3"),(0,l.kt)("a",{name:"v13HY"}),(0,l.kt)("h3",{id:"\u53d1\u8d77-workflow-api"},"\u53d1\u8d77 Workflow API"),(0,l.kt)("p",null,"POST ",(0,l.kt)("inlineCode",{parentName:"p"},"/workflow/launch"),(0,l.kt)("br",null),"URL Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"appId: \u5e94\u7528 ID"),(0,l.kt)("li",{parentName:"ul"},"category: \u5206\u7c7b (\u56fa\u5b9a\u4e3a DEPLOY \u5373\u53ef)")),(0,l.kt)("p",null,"Body: YAML \u5b57\u7b26\u4e32",(0,l.kt)("br",null),"Body \u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1alpha2\nkind: ApplicationConfiguration\nmetadata:\n  annotations:\n    appId: testapp\n    appInstanceName: "test-app-instance"\n  name: deploy-workflow\nspec:\n  parameterValues:\n  components:\n    - revisionName: K8S_MICROSERVICE|clustermanage|_\n  policies:\n    - name: topology-e2e-env\n      type: topology\n      properties:\n        namespace: "abm-daily"\n    - type: override\n      name: override-e2e-env\n      properties:\n        components:\n          - revisionName: K8S_MICROSERVICE|clustermanage|_\n            dataInputs:\n              - valueFrom:\n                  dataOutputName: "Global.KUBECONFIG"\n                toFieldPaths:\n                  - spec.base64Kubeconfig\n            parameterValues:\n              - name: name\n                value: "appmanager-helm-e2e-rollout"\n                toFieldPaths:\n                  - spec.name\n              - name: ignoreCreateNamespace\n                value: true\n                toFieldPaths:\n                  - spec.ignoreCreateNamespace\n              - name: values\n                value:\n                  resources:\n                    limits:\n                      cpu: "0.5"\n                      memory: "1Gi"\n                  image:\n                    repository: "nginx"\n                    tag: "latest"\n                  replicaCount: 3\n                toFieldPaths:\n                  - spec.values\n  workflow:\n    steps:\n      - type: apply-components\n        properties:\n          policies:\n            - topology-e2e-env\n            - override-e2e-env\n          components:\n            - type: K8S_MICROSERVICE\n              name: clustermanage\n          rollout:\n            type: partition\n            properties:\n              partition: "1"\n              name: "abmRolloutPartition"\n      - type: suspend\n      - type: rollout-promotion\n      - type: apply-components\n        properties:\n          policies:\n            - topology-e2e-env\n            - override-e2e-env\n          components:\n            - type: K8S_MICROSERVICE\n              name: clustermanage\n')),(0,l.kt)("p",null,"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n    "code": 200,\n    "success": true,\n    "message": "SUCCESS",\n    "requestId": "0bc1eed516690483758985249e69af",\n    "timestamp": 1669048376027,\n    "data": {\n        "id": 1,\n        "gmtCreate": 1669048376010,\n        "gmtModified": 1669048376010,\n        "appId": "testapp",\n        "category": "DEPLOY",\n        "gmtStart": null,\n        "gmtEnd": null,\n        "workflowStatus": "PENDING",\n        "workflowErrorMessage": null,\n        "workflowConfiguration": "yaml str here",\n        "workflowSha256": "a71a1dcd0ac86e291f4442fe7477316f346e1275f91b1cd087b8e05b28fc9890",\n        "workflowOptions": {\n            "creator": "admin",\n            "category": "DEPLOY"\n        },\n        "workflowCreator": "admin",\n        "workflowContext": null,\n        "lockVersion": null\n    }\n}\n')),(0,l.kt)("a",{name:"vviaj"}),(0,l.kt)("h3",{id:"\u67e5\u8be2-workflow-instance-\u5217\u8868-api"},"\u67e5\u8be2 Workflow Instance \u5217\u8868 API"),(0,l.kt)("p",null,"GET ",(0,l.kt)("inlineCode",{parentName:"p"},"/workflow"),(0,l.kt)("br",null),"URL Parameters (\u53ef\u9009)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"instanceId\uff1aWorkflow \u5b9e\u4f8b ID"),(0,l.kt)("li",{parentName:"ul"},"appId\uff1a\u5e94\u7528 ID"),(0,l.kt)("li",{parentName:"ul"},"workflowStatus\uff1aWorkflow \u72b6\u6001 (\u53ef\u9009",(0,l.kt)("inlineCode",{parentName:"li"},"PENDING"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"PREPROCESSING"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"RUNNING"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"SUSPEND"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"SUCCESS"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"FAILURE"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"EXCEPTION"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"TERMINATED"),")"),(0,l.kt)("li",{parentName:"ul"},"workflowCreator\uff1a\u521b\u5efa\u8005")),(0,l.kt)("p",null,"\u8fd4\u56de\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n    "code": 200,\n    "success": true,\n    "message": "SUCCESS",\n    "requestId": "0bc1eed216690487987592481e34f2",\n    "timestamp": 1669048798778,\n    "data": {\n        "page": 1,\n        "pageSize": 1,\n        "total": 1,\n        "items": [\n            {\n                "id": 1,\n                "gmtCreate": 1669048376000,\n                "gmtModified": 1669048381000,\n                "appId": "testapp",\n                "category": "DEPLOY",\n                "gmtStart": null,\n                "gmtEnd": null,\n                "workflowStatus": "SUSPEND",\n                "workflowErrorMessage": null,\n                "workflowConfiguration": null,\n                "workflowSha256": "a71a1dcd0ac86e291f4442fe7477316f346e1275f91b1cd087b8e05b28fc9890",\n                "workflowOptions": {},\n                "workflowCreator": "admin",\n                "workflowContext": null,\n                "lockVersion": 3\n            }\n        ],\n        "empty": false\n    }\n}\n')),(0,l.kt)("a",{name:"N2s6E"}),(0,l.kt)("h3",{id:"\u67e5\u8be2\u5355\u4e2a-workflow-instance-api"},"\u67e5\u8be2\u5355\u4e2a Workflow Instance API"),(0,l.kt)("p",null,"GET ",(0,l.kt)("inlineCode",{parentName:"p"},"/workflow/{instanceId}"),(0,l.kt)("br",null),"\u6ce8\u610f\u67e5\u8be2\u5355\u4e2a WorkflowInstance API \u4f1a\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"workflowConfiguration"),"\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"workflowContext"),"\u5b57\u6bb5\u3002",(0,l.kt)("br",null),"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n    "code": 200,\n    "success": true,\n    "message": "SUCCESS",\n    "requestId": "0bc13a6816690488656747929e6cf8",\n    "timestamp": 1669048865710,\n    "data": {\n        "id": 1,\n        "gmtCreate": 1669048376000,\n        "gmtModified": 1669048381000,\n        "appId": "testapp",\n        "category": "DEPLOY",\n        "gmtStart": null,\n        "gmtEnd": null,\n        "workflowStatus": "SUSPEND",\n        "workflowErrorMessage": null,\n        "workflowConfiguration": "your workflow yaml",\n        "workflowOptions": {\n            "creator": "admin",\n            "category": "DEPLOY"\n        },\n        "workflowCreator": "admin",\n        "workflowContext": {\n            "_internal_overwrite_parameters": {\n                "Global": {\n                    "KUBECONFIG": "xxxx"\n                }\n            }\n        },\n        "lockVersion": 3\n    }\n}\n')),(0,l.kt)("a",{name:"ckR9w"}),(0,l.kt)("h3",{id:"\u8bbe\u7f6e-workflow-instance-context"},"\u8bbe\u7f6e Workflow Instance Context"),(0,l.kt)("p",null,"PUT ",(0,l.kt)("inlineCode",{parentName:"p"},"/workflow/{instanceId}/context"),(0,l.kt)("br",null),"Request Body (JSON)\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n    "context": {\n        "continueRollout": true,\n        "p": false\n    }\n}\n')),(0,l.kt)("p",null,"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n    "code": 200,\n    "success": true,\n    "message": "SUCCESS",\n    "requestId": "0bc1eed416690490952012305e2fb9",\n    "timestamp": 1669049095228,\n    "data": {}\n}\n')),(0,l.kt)("a",{name:"NBv1g"}),(0,l.kt)("h3",{id:"\u5524\u9192-workflow-instance"},"\u5524\u9192 Workflow Instance"),(0,l.kt)("p",null,"PUT ",(0,l.kt)("inlineCode",{parentName:"p"},"/workflow/{instanceId}/resume"),(0,l.kt)("br",null),"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n    "code": 200,\n    "success": true,\n    "message": "SUCCESS",\n    "requestId": "0bc1eed316690491570732464e6293",\n    "timestamp": 1669049157125,\n    "data": {\n        "command": "RESUME",\n        "workflowInstanceId": 1,\n        "clientHost": "10.219.*.*:7001",\n        "success": true,\n        "message": ""\n    }\n}\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u8fd4\u56de\u8bf4\u660e\u5f53\u524d\u5df2\u5411\u96c6\u7fa4\u4e0b\u53d1\u547d\u4ee4 RESUME \u6307\u5b9a workflowInstanceId\uff0c\u63a5\u6536\u8005\u4e3a 10.219.113.192:7001 \u5b9e\u4f8b\uff0c\u5df2\u5f00\u59cb\u7ee7\u7eed\u8fd0\u884c\u3002"),(0,l.kt)("a",{name:"RGb0s"}),(0,l.kt)("h3",{id:"\u7ec8\u6b62-workflow-instance"},"\u7ec8\u6b62 Workflow Instance"),(0,l.kt)("p",null,"PUT ",(0,l.kt)("inlineCode",{parentName:"p"},"/workflow/{instanceId}/terminate"),(0,l.kt)("br",null),"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n    "code": 200,\n    "success": true,\n    "message": "SUCCESS",\n    "requestId": "0bc1eed316690493056674000e6294",\n    "timestamp": 1669049305709,\n    "data": {\n        "command": "TERMINATE",\n        "workflowInstanceId": 1,\n        "clientHost": "10.219.*.*:7001",\n        "success": true,\n        "message": ""\n    }\n}\n')),(0,l.kt)("p",null,"\u542b\u4e49\u540c Resume\u3002\u6ce8\u610f\u5982\u679c\u7ec8\u6b62\u4e00\u4e2a\u5df2\u7ecf\u5230\u8fbe\u7ec8\u6001\u7684 Workflow Instance \u662f\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u6548\u679c\u7684\u3002"),(0,l.kt)("a",{name:"RCFUt"}),(0,l.kt)("h3",{id:"\u91cd\u8bd5-workflow-instance"},"\u91cd\u8bd5 Workflow Instance"),(0,l.kt)("p",null,"PUT ",(0,l.kt)("inlineCode",{parentName:"p"},"/workflow/{instanceId}/retry"),(0,l.kt)("br",null),"\u91cd\u8bd5\u5f53\u524d\u5df2\u7ecf\u5230\u8fbe\u7ec8\u6001\u7684 Workflow \u5b9e\u4f8b (",(0,l.kt)("inlineCode",{parentName:"p"},"SUCCESS"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"FAILURE"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"EXCEPTION"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"TERMINATED"),")\uff0c\u6ce8\u610f\u8be5\u65b9\u6cd5\u5c06\u4f1a\u4ece\u7b2c\u4e00\u4e2a\u8282\u70b9\u5f00\u59cb\uff0c\u4f7f\u7528\u539f\u59cb\u53c2\u6570\u91cd\u65b0\u8fd0\u884c\u4e00\u904d\u5f53\u524d Workflow \u5b9e\u4f8b\u3002",(0,l.kt)("br",null),"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n    "code": 200,\n    "success": true,\n    "message": "SUCCESS",\n    "requestId": "0bc13a5716690494195578320e6ed6",\n    "timestamp": 1669049419592,\n    "data": {\n        "command": "RETRY",\n        "workflowInstanceId": 1,\n        "clientHost": "10.219.*.*:7001",\n        "success": true,\n        "message": ""\n    }\n}\n')),(0,l.kt)("a",{name:"gbU2I"}),(0,l.kt)("h3",{id:"\u91cd\u8bd5-workflow-instance-\u81ea\u5b9a\u4e49\u8d77\u59cb-task"},"\u91cd\u8bd5 Workflow Instance (\u81ea\u5b9a\u4e49\u8d77\u59cb Task)"),(0,l.kt)("p",null,"PUT ",(0,l.kt)("inlineCode",{parentName:"p"},"/workflow/{instanceId}/retryFromTask"),(0,l.kt)("br",null),"\u91cd\u8bd5\u5f53\u524d\u5df2\u7ecf\u5230\u8fbe\u7ec8\u6001\u7684 Workflow \u5b9e\u4f8b (SUCCESS/FAILURE/EXCEPTION/TERMINATED)\uff0c\u6ce8\u610f\u8be5\u65b9\u6cd5\u4ece\u6307\u5b9a taskId \u5f00\u59cb\u8fdb\u884c\u91cd\u8bd5\uff0c\u5373\u91cd\u65b0\u8fd0\u884c taskId \u53ca\u4e4b\u540e\u7684\u6240\u6709 WorkflowInstance \u4efb\u52a1\uff0c\u8be5\u65b9\u6cd5\u4f1a\u83b7\u53d6 taskId \u5bf9\u5e94\u7684\u5feb\u7167\u5185\u5bb9\uff0c\u4ee5\u6b64\u4e3a\u8f93\u5165\u8fdb\u884c\u91cd\u8bd5\u3002",(0,l.kt)("br",null),"URL Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"taskId: Workflow Task ID")),(0,l.kt)("p",null,"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n    "code": 200,\n    "success": true,\n    "message": "SUCCESS",\n    "requestId": "0bc1eed216690495799026690e34f4",\n    "timestamp": 1669049579909,\n    "data": null\n}\n')),(0,l.kt)("a",{name:"NxeG2"}),(0,l.kt)("h3",{id:"\u67e5\u8be2-workflow-task-\u5217\u8868"},"\u67e5\u8be2 Workflow Task \u5217\u8868"),(0,l.kt)("p",null,"GET ",(0,l.kt)("inlineCode",{parentName:"p"},"/workflow/{instanceId}/tasks"),(0,l.kt)("br",null),"URL Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"taskId: Workflow Task ID"),(0,l.kt)("li",{parentName:"ul"},"instanceId: Workflow Instance ID"),(0,l.kt)("li",{parentName:"ul"},"appId: \u5e94\u7528 ID"),(0,l.kt)("li",{parentName:"ul"},"taskType: \u4efb\u52a1\u7c7b\u578b (\u5373 ApplicationConfiguration \u4e2d workflow type)"),(0,l.kt)("li",{parentName:"ul"},"taskStatus: \u4efb\u52a1\u72b6\u6001 (\u53ef\u9009 ",(0,l.kt)("inlineCode",{parentName:"li"},"PENDING"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"RUNNING"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"WAITING"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"RUNNING_SUSPEND"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"WAITING_SUSPEND"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"SUCCESS"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"FAILURE"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"EXCEPTION"),"/",(0,l.kt)("inlineCode",{parentName:"li"},"TERMINATED"),")"),(0,l.kt)("li",{parentName:"ul"},"deployAppId: \u901a\u8fc7 Workflow Task \u53d1\u8d77\u7684\u4e8c\u6b21\u5e94\u7528\u90e8\u7f72\u5355\u8fdb\u884c\u53cd\u5411\u67e5\u8be2"),(0,l.kt)("li",{parentName:"ul"},"deployWorkflowInstanceId: \u901a\u8fc7 Workflow Task \u53d1\u8d77\u7684\u4e8c\u6b21 Workflow \u5b9e\u4f8b ID \u8fdb\u884c\u53cd\u5411\u67e5\u8be2")),(0,l.kt)("p",null,"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n    "code": 200,\n    "success": true,\n    "message": "SUCCESS",\n    "requestId": "0bc13a5716690498584322587e6ed7",\n    "timestamp": 1669049858444,\n    "data": {\n        "page": 1,\n        "pageSize": 4,\n        "total": 4,\n        "items": [\n            {\n                "id": 1,\n                "gmtCreate": 1669048376000,\n                "gmtModified": 1669048381000,\n                "batchId": 1,\n                "workflowInstanceId": 1,\n                "appId": "testapp",\n                "gmtStart": null,\n                "gmtEnd": null,\n                "taskType": "apply-components",\n                "taskStage": "pre-render",\n                "taskStatus": "SUCCESS",\n                "clientHostname": null,\n                "deployAppId": 25446,\n                "deployAppUnitId": "internal",\n                "deployAppNamespaceId": "",\n                "deployAppStageId": "",\n                "lockVersion": 4,\n                "taskProperties": {},\n                "taskErrorMessage": null\n            },\n            {\n                "id": 2,\n                "gmtCreate": 1669048376000,\n                "gmtModified": 1669049157000,\n                "batchId": 2,\n                "workflowInstanceId": 1,\n                "appId": "testapp",\n                "gmtStart": null,\n                "gmtEnd": null,\n                "taskType": "suspend",\n                "taskStage": "pre-render",\n                "taskStatus": "SUCCESS",\n                "clientHostname": null,\n                "deployAppId": 0,\n                "deployAppUnitId": "internal",\n                "deployAppNamespaceId": "",\n                "deployAppStageId": "",\n                "lockVersion": 4,\n                "taskProperties": {},\n                "taskErrorMessage": null\n            },\n            {\n                "id": 3,\n                "gmtCreate": 1669048376000,\n                "gmtModified": 1669049157000,\n                "batchId": 3,\n                "workflowInstanceId": 1,\n                "appId": "testapp",\n                "gmtStart": null,\n                "gmtEnd": null,\n                "taskType": "rollout-promotion",\n                "taskStage": "pre-render",\n                "taskStatus": "SUCCESS",\n                "clientHostname": null,\n                "deployAppId": 0,\n                "deployAppUnitId": "internal",\n                "deployAppNamespaceId": "",\n                "deployAppStageId": "",\n                "lockVersion": 3,\n                "taskProperties": {},\n                "taskErrorMessage": null\n            },\n            {\n                "id": 4,\n                "gmtCreate": 1669048376000,\n                "gmtModified": 1669049160000,\n                "batchId": 4,\n                "workflowInstanceId": 1,\n                "appId": "testapp",\n                "gmtStart": null,\n                "gmtEnd": null,\n                "taskType": "apply-components",\n                "taskStage": "pre-render",\n                "taskStatus": "SUCCESS",\n                "clientHostname": null,\n                "deployAppId": 25447,\n                "deployAppUnitId": "internal",\n                "deployAppNamespaceId": "",\n                "deployAppStageId": "",\n                "lockVersion": 4,\n                "taskProperties": {},\n                "taskErrorMessage": null\n            }\n        ],\n        "empty": false\n    }\n}\n')),(0,l.kt)("a",{name:"Ka2bH"}),(0,l.kt)("h3",{id:"\u67e5\u8be2\u5355\u4e2a-workflow-task-\u8be6\u60c5"},"\u67e5\u8be2\u5355\u4e2a Workflow Task \u8be6\u60c5"),(0,l.kt)("p",null,"GET ",(0,l.kt)("inlineCode",{parentName:"p"},"/workflow/{instanceId}/tasks/{taskId}"),(0,l.kt)("br",null),"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n    "code": 200,\n    "success": true,\n    "message": "SUCCESS",\n    "requestId": "0bc1eed516690499557175596e69ac",\n    "timestamp": 1669049955736,\n    "data": {\n        "id": 1,\n        "gmtCreate": 1669048376000,\n        "gmtModified": 1669048381000,\n        "batchId": null,\n        "workflowInstanceId": 1,\n        "appId": "testapp",\n        "gmtStart": null,\n        "gmtEnd": null,\n        "taskType": "apply-components",\n        "taskStage": "pre-render",\n        "taskStatus": "SUCCESS",\n        "clientHostname": null,\n        "deployAppId": 25446,\n        "deployAppUnitId": "",\n        "deployAppNamespaceId": "",\n        "deployAppStageId": "",\n        "lockVersion": 4,\n        "taskProperties": {\n            "components": [\n                {\n                    "name": "helm-demo-chart@0.0.3@test",\n                    "type": "ABM_HELM"\n                }\n            ],\n            "rollout": {\n                "type": "partition",\n                "properties": {\n                    "partition": "1",\n                    "name": "abmRolloutPartition"\n                }\n            },\n            "policies": [\n                "topology-e2e-env",\n                "override-e2e-env"\n            ]\n        },\n        "taskErrorMessage": ""\n    }\n}\n')),(0,l.kt)("a",{name:"e11BF"}),(0,l.kt)("h3",{id:"\u7ec8\u6b62-workflow-task"},"\u7ec8\u6b62 Workflow Task"),(0,l.kt)("p",null,"PUT ",(0,l.kt)("inlineCode",{parentName:"p"},"/workflow/{instanceId}/tasks/{taskId}/terminate"),(0,l.kt)("br",null),"RequestBody (JSON)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n    "extMessage": "\u9644\u52a0\u4fe1\u606f\uff0c\u4e3a\u4ec0\u4e48\u7ec8\u6b62\u7684\u539f\u56e0\uff0c\u53ef\u9009"\n}\n')),(0,l.kt)("p",null,"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n    "code": 200,\n    "success": true,\n    "message": "SUCCESS",\n    "requestId": "0bc13a5b16690500991053780e40d8",\n    "timestamp": 1669050099118,\n    "data": {}\n}\n')),(0,l.kt)("p",null,"\u6ce8\u610f\u5982\u679c\u7ec8\u6b62\u4e00\u4e2a\u5df2\u7ecf\u5230\u8fbe\u7ec8\u6001\u7684 Workflow Task \u662f\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u6548\u679c\u7684\u3002"),(0,l.kt)("a",{name:"GPUsa"}),(0,l.kt)("h3",{id:"\u6682\u505c-workflow-task"},"\u6682\u505c Workflow Task"),(0,l.kt)("p",null,"PUT ",(0,l.kt)("inlineCode",{parentName:"p"},"/workflow/{instanceId}/tasks/{taskId}/suspend"),(0,l.kt)("br",null),"\u6682\u505c\u6307\u5b9a Workflow \u4efb\u52a1 (RUNNING -> RUNNING_SUSPEND / WAITING -> WAITING_SUSPEND)\uff0c\u5176\u4ed6\u72b6\u6001\u4e0b\u6ca1\u6709\u5b9e\u9645\u610f\u4e49\u3002",(0,l.kt)("br",null),"RequestBody (JSON)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n    "extMessage": "\u9644\u52a0\u4fe1\u606f\uff0c\u4e3a\u4ec0\u4e48\u6682\u505c\uff0c\u53ef\u9009"\n}\n')),(0,l.kt)("p",null,"\u8fd4\u56de\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n    "code": 200,\n    "success": true,\n    "message": "SUCCESS",\n    "requestId": "1bc13a5b16690500991053780e41d8",\n    "timestamp": 1669050199118,\n    "data": {}\n}\n')),(0,l.kt)("p",null,"\u6ce8\u610f\u5982\u679c\u6682\u505c\u4e00\u4e2a\u5df2\u7ecf\u5230\u8fbe\u7ec8\u6001\u7684 Workflow Task \u662f\u4e0d\u4f1a\u4ea7\u751f\u4efb\u4f55\u6548\u679c\u7684\u3002"))}m.isMDXComponent=!0}}]);