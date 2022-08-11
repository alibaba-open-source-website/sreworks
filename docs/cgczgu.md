---
title: 6.1 部署Flink云原生开源版
---

该文档描述在SREWorks中，从0到1建立一个Flink云原生应用定义，发布Flink应用到市场，并交付部署Flink应用的完整过程。

<a name="HutKe"></a>

### 1 新建Flink应用
登录SREWorks后，进入“交付/应用管理-应用开发”页面，点击“新建云原生应用”，在滑出的表单中输入Flink应用定义相关信息，完成Flink应用模板定义<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179543731-7c274522-0974-48d8-97ce-91f976684883.png#clientId=u7a5818e5-7e9a-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=754&id=u6d95e190&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1508&originWidth=2866&originalType=binary&ratio=1&rotation=0&showTitle=false&size=282781&status=done&style=none&taskId=uce64e4f3-b861-4a8a-a511-05e3a394cf9&title=&width=1433)

在应用开发模板列表下，点击应用定义名称，进入应用开发页面<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179543893-646e35b5-c374-43d4-9ffa-315da591bf7f.png#clientId=u7a5818e5-7e9a-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=762&id=u0dbdf889&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1524&originWidth=2878&originalType=binary&ratio=1&rotation=0&showTitle=false&size=664502&status=done&style=none&taskId=u74fa49fc-eb0b-4a44-99fe-f6268bd53bd&title=&width=1439)

<a name="lAX7o"></a>

### 2 添加Flink应用组件
进入Flink应用模板后，在应用组件中添加“Helm”组件类型，将Flink中的VVP组件添加进来<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179544056-45bf7670-1825-4cd2-9d57-fc1566b6d2a4.png#clientId=u26905c1f-2b20-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=696&id=u7125b74e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1392&originWidth=2428&originalType=binary&ratio=1&rotation=0&showTitle=false&size=344344&status=done&style=none&taskId=u53eeb711-a62a-46c6-9318-533a1bee435&title=&width=1214)


<a name="U19f2"></a>

### 3 Flink 应用构建
在完成组件添加后，可以在“应用构建”页面进行一键构建，当前一键构建会自动计算版本，创建构建任务后，在构建列表中可查看刚刚提交的构建任务。<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179544228-9376276c-b67b-4fce-9dea-d0bd5a20cb88.png#clientId=u444a9585-9f87-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=747&id=u9547ca83&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1494&originWidth=2866&originalType=binary&ratio=1&rotation=0&showTitle=false&size=883606&status=done&style=none&taskId=uef65bac1-d20f-41d1-aa36-76276595c8f&title=&width=1433)<br />构建完成后，即可在构建列表中展示当前构建的应用及组件构建状态，同时可以在操作中一键部署测试和上架市场。

<a name="K8I4C"></a>

### 4 Flink应用测试部署
应用测试实例支持多套部署，并会自动生成全局唯一的实例名，规则为“应用名-uid”。该实例被部署在同名的namespace下。<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179544422-00b08297-bc16-44f8-bb77-ff1eabba8cbf.png#clientId=u444a9585-9f87-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=747&id=u82226937&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1494&originWidth=2868&originalType=binary&ratio=1&rotation=0&showTitle=false&size=225272&status=done&style=none&taskId=u905b5bd2-6435-4164-8f87-224b374c572&title=&width=1434)<br />用户可自行对应用进行测试，测试通过后，可选择一键发布到市场的操作将应用版本发布到市场中。

<a name="iBcye"></a>

### 5 Flink应用发布上架

通过构建列表中指定构建任务的“上架市场”操作完成应用到市场的发布。![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179544579-fdb766c8-1f14-49cc-a6d7-7e8f683d9560.png#clientId=u444a9585-9f87-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=700&id=ufe19622f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1400&originWidth=2850&originalType=binary&ratio=1&rotation=0&showTitle=false&size=624491&status=done&style=none&taskId=u0845e267-20dc-4cd8-af58-2d4b24b9d83&title=&width=1425)

<a name="Puqg4"></a>

### 7 Flink应用部署
在市场中可以指定应用一键部署，当前默认部署应用的最新版本。![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179544732-cf64925e-852d-4305-b347-c5d4f635d0e8.png#clientId=u444a9585-9f87-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=543&id=Ldc0A&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1086&originWidth=2866&originalType=binary&ratio=1&rotation=0&showTitle=false&size=426219&status=done&style=none&taskId=ue09a8dd7-03f7-4588-b19e-ff719dd3b63&title=&width=1433)
<a name="RfvwI"></a>

### 8 Flink应用实例管理
应用实例列表展示当前部署在prod的企业应用生产实例，并提供升级、回滚、卸载操作。<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179544887-620a7b87-072c-4488-b530-0f4d2bd13e93.png#clientId=u444a9585-9f87-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=744&id=u1943e104&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1488&originWidth=2860&originalType=binary&ratio=1&rotation=0&showTitle=false&size=404583&status=done&style=none&taskId=uee1ce6ec-41d1-4795-92d6-b70c82851e7&title=&width=1430)
