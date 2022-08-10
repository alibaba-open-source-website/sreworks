---
title: 4.2.2 运维应用管理
---

SREWorks中针对运维开发，集成化提供了运维应用从开发构建发布到交付部署的完整端到端能力。

<a name="gEUqn"></a>
## 1 运维开发

<a name="HutKe"></a>
### 1.1 新建运维应用
登录SREWorks后，进入“管理/运维中台-运维开发”页面，会展示开发态的运维应用模板列表。<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179541045-dde342e8-6ede-42c7-9af8-a694a5c77439.png#clientId=u1bc14d3d-cbb1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=742&id=u8a450a39&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1484&originWidth=2874&originalType=binary&ratio=1&rotation=0&showTitle=false&size=312180&status=done&style=none&taskId=uc2ed9b73-f9c4-493e-b63f-a1ed6a42826&title=&width=1437)<br />点击“新建应用”，在滑出的表单中输入运维应用定义相关信息，完成运维应用创建，并点击应用ID后，进入运维应用开发IDE<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179541240-0c849674-7110-4a6a-b234-15d1f0cff89f.png#clientId=u1bc14d3d-cbb1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=755&id=u9165b89f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1510&originWidth=2862&originalType=binary&ratio=1&rotation=0&showTitle=false&size=259731&status=done&style=none&taskId=u35db7a96-b43a-4976-8be4-74b2f63b2f7&title=&width=1431)

<a name="lAX7o"></a>
### 1.2 开发运维应用
在运维开发IDE中，我们可以对运维应用基本信息、角色权限、中台化运维服务、运维前端、运维后端进行开发，分别在对应页签功能中完成<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179541484-0e3ffac6-2d87-4194-abfb-3b5c044e4be2.png#clientId=u1bc14d3d-cbb1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=752&id=uc5a38bb8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1504&originWidth=2874&originalType=binary&ratio=1&rotation=0&showTitle=false&size=544826&status=done&style=none&taskId=u8b02b4bb-ab7a-41c4-9798-d157351e98b&title=&width=1437)<br />其中比较典型的是运维前端开发，当前提供了比较丰富的内置运维前端组件<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179541664-ec5c1b84-ab0a-4322-ad62-864f9488e9e5.png#clientId=u194ad0d5-5250-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=755&id=ua2f98aba&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1510&originWidth=2858&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1146260&status=done&style=none&taskId=u629138f6-ba0d-4881-86b8-e81078cf2e8&title=&width=1429)
<a name="htrzM"></a>
#### 1.2.1 后端开发高级配置
```json

{
  "timezone":"Asia/Shanghai",            // 时区
  "serviceLabels": {"key": "value"},     // service额外label
  "podLabels": {"key": "value"}          // pod额外label
}
```


<a name="U19f2"></a>
### 1.3 运维应用构建
在完成运维应用开发后，可以在“构建测试”页面进行一键构建，当前一键构建会自动计算版本，创建构建任务后，在构建列表中可查看刚刚提交的构建任务。<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179541916-7d237ee8-e581-40ff-8595-9b004742234a.png#clientId=u1bc14d3d-cbb1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=756&id=u5e1b5c93&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1512&originWidth=2872&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1186551&status=done&style=none&taskId=ucff3dba8-53f0-4840-875f-52f6a03ccc4&title=&width=1436)<br />构建完成后，即可在构建列表中展示当前构建的运维应用及组件构建状态，同时可以在操作中一键部署测试和上架市场。

<a name="K8I4C"></a>
### 1.4 运维应用测试
应用测试实例当前只支持1套部署，并会自动使用应用ID作为部署实例名<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179542100-ebe922f5-ba30-4bd0-ab30-98195457b754.png#clientId=u1bc14d3d-cbb1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=755&id=u8a772f4a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1510&originWidth=2860&originalType=binary&ratio=1&rotation=0&showTitle=false&size=761547&status=done&style=none&taskId=u59ec884f-a3ab-4688-a06a-ed13c966233&title=&width=1430)<br />用户可自行对应用进行测试，测试通过后，可选择一键发布到运维市场的操作将运维应用版本发布到市场中。

<a name="iBcye"></a>
### 1.5 运维应用发布

通过构建列表中指定构建任务的“上架市场”操作完成应用到市场的发布。<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179542257-3918c256-18ad-4faa-8daf-57ca3be20107.png#clientId=u1bc14d3d-cbb1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=758&id=u8e9659fe&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1516&originWidth=2868&originalType=binary&ratio=1&rotation=0&showTitle=false&size=234732&status=done&style=none&taskId=u25b1e294-6128-4fda-970c-9d0ec64fcd2&title=&width=1434)

<a name="t3JV9"></a>
## 2 运维市场
应用市场用来分发企业应用的制品，在应用市场中是完成开发测试的稳定应用版本定义，同时应用市场的背后关联有具体的软件仓库，软件镜像制品在构建过程中都会上传到软件仓库。

<a name="Puqg4"></a>
### 2.1 运维应用部署
在运维市场中可以指定应用一键部署，当前默认部署应用的最新版本。![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179542444-a9b50956-d132-4219-8938-3df1c8b236b5.png#clientId=u2ac6f3d9-a609-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=757&id=uf851ff6d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1514&originWidth=2856&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1254321&status=done&style=none&taskId=uf1f5185f-993f-4417-b758-65709db9f76&title=&width=1428)

<a name="AZmOu"></a>
### 2.2 运维应用下架
在市场中可以指定运维应用一键下架，当前每次操作将下架该应用的当前最新版本，下架是需要输入应用名进行确认。<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179542664-12fb485e-a779-4784-857d-229d51e13c33.png#clientId=u2ac6f3d9-a609-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=746&id=u0ea23beb&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1492&originWidth=2868&originalType=binary&ratio=1&rotation=0&showTitle=false&size=272107&status=done&style=none&taskId=u85fc4dbe-8278-478a-baca-8398a7b91bb&title=&width=1434)
<a name="xJ9io"></a>
## 3 运维应用
运维应用管理部署到生产的运维应用实例，当前提供运维应用实例列表页面。在实例列表中可对应用版本做升级回滚相关操作。

<a name="RfvwI"></a>
### 3.1 运维应用实例
列表展示当前部署在prod的运维应用生产实例，并提供升级、回滚、卸载操作。<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179542841-1b36dd89-7278-4244-9c27-28d6c4a05738.png#clientId=u1bc14d3d-cbb1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=753&id=ued2a4786&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1506&originWidth=2874&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1063168&status=done&style=none&taskId=u4981d5f7-1921-4ef3-b70c-279bc8563b9&title=&width=1437)

