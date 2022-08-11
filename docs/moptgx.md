---
title: 4.1.3 企业资源管理
---


<a name="P2ZVB"></a>

## 集群管理
进入到云原生后，Kubernetes可以作为企业资源管理的原子化抽象单位，存储、计算、网络等资源都可以纳入Kubernetes集群管理。因此我们在企业资源管理中，提供了围绕Kubernetes纳管、系统组件及节点管理等能力，后续也会在集群管理中建设云资源管理的能力。

<a name="FZrDd"></a>

### 集群接入
集群接入支持“云账号接入”和“kubeconfig配置接入”两种模式，集群都归属为团队。接入的具体操作会在集群中部署一些基础组件，可以点击纳管状态可以看到具体组件信息。<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179530291-134893b3-22fb-408f-9335-1f553d1c9d8e.png#clientId=uc1b76d77-fdda-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=748&id=ud67e59f8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1496&originWidth=2854&originalType=binary&ratio=1&rotation=0&showTitle=false&size=876134&status=done&style=none&taskId=uc14a30d8-4df5-4f3b-99b0-8890d182862&title=&width=1427)<br />集群接入相关操作包含添加集群、删除集群，配置集群基本信息<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179530443-ccb35e68-e32a-4f98-b8da-ca75180f1c59.png#clientId=uc1b76d77-fdda-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=754&id=ued4e6861&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1508&originWidth=2854&originalType=binary&ratio=1&rotation=0&showTitle=false&size=241878&status=done&style=none&taskId=ue8f8b21a-36a3-445b-b382-3aa2677dd59&title=&width=1427)

<a name="HALSZ"></a>

### 集群管理
在集群实例列表中，点击集群名称后进入集群详情，当前提供“概览、组件、节点、设置”四个页签，分别提供了集群基本的一些基本信息和相关操作。<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179530600-29749f87-c278-4b44-bd10-67e1f91d7f59.png#clientId=uc1b76d77-fdda-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=758&id=uaef9a9de&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1516&originWidth=2852&originalType=binary&ratio=1&rotation=0&showTitle=false&size=302983&status=done&style=none&taskId=u8b75097c-4d96-4cf8-9a4e-a3e6631d9c6&title=&width=1426)
