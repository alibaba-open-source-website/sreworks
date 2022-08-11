---
title: 4.1.2 企业组织管理
---


<a name="EeWLb"></a>

## 团队管理

不同的企业，其组织架构也千差万别，我们在SREWorks中设计了一套抽象通用的扁平化虚拟组织管理模型 —— 团队（Team），团队可以映射组织架构里的一个真实团队，也可以映射为一个项目团队、产品团队，或者是一个战役，甚至可以是一项兴趣爱好的组织。每个人可以加入一到多个团队，团队有可见范围属性：仅团队成员可见、全部可见，当设置为全部可见时，则是一个公开团队，全员都可以看见。

<a name="sxw3k"></a>

### 新建团队
新建团队，输入团队名称、介绍，选择可见范围，设置团队头像即可完成团队的创建。<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179527960-e277f898-ee59-4688-a98d-bc2283438b22.png#clientId=u0f391604-4eb9-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=760&id=u9e2b02c3&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1520&originWidth=2872&originalType=binary&ratio=1&rotation=0&showTitle=false&size=239327&status=done&style=none&taskId=u409b73eb-37aa-48c6-973a-2a960945dbf&title=&width=1436)<br />点击团队，进入团队详情页面，可对团队进行管理，功能包括成员管理、云资源账号管理、镜像仓库管理、代码仓库管理以及团队设置。团队设置里包含基础设置和高级设置，高级设置可删除该团队，注意，删除团队会将录入的资源账号和仓库信息等一并删除，请谨慎删除。<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179528149-f38f8618-ed17-4d22-8b98-1beeecf98e5d.png#clientId=u0f391604-4eb9-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=757&id=uc1e3f2c2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1514&originWidth=2870&originalType=binary&ratio=1&rotation=0&showTitle=false&size=800328&status=done&style=none&taskId=u6bdd294f-e59b-4c11-9610-9459b62c68f&title=&width=1435)

<a name="ItSaQ"></a>

### 成员管理
在成员管理中可维护成员列表，添加成员时可指定成员在团队里的角色，当前团队成员有管理员和成员两种角色，管理员可删除其他成员和团队，成员没有删除相关权限。<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179528313-0e6c08d9-a225-48fa-8666-58c9d7885100.png#clientId=u0f391604-4eb9-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=753&id=DxZxl&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1506&originWidth=2866&originalType=binary&ratio=1&rotation=0&showTitle=false&size=599909&status=done&style=none&taskId=u2794f4d9-8b2b-42a1-87b1-cfdd8db5b38&title=&width=1433)

<a name="pkUBX"></a>

### 云资源账号管理
在云资源账号中，可以录入团队所持有的云账号信息，比如阿里云、腾讯云、华为云等，录入云账号后，后续从团队里可以对接适配云厂商的云资源，当前内置阿里云账号的插件，后续会提供更多账号类型接入。<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179528460-3e4fad66-5781-4dca-baf7-86c1042d394a.png#clientId=u0f391604-4eb9-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=755&id=u0acfc45e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1510&originWidth=2860&originalType=binary&ratio=1&rotation=0&showTitle=false&size=819019&status=done&style=none&taskId=uec6868a2-dc5c-4dbc-86e9-326ddd39a0e&title=&width=1430)

<a name="DqluO"></a>

### 镜像仓库管理
在镜像仓库中，可以录入团队平时使用的镜像仓库和账号密码。这个镜像仓库主要用来做docker镜像构建的推送，在应用制品发布的时候，可以直接选择已录入的镜像仓库。<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179528619-50391594-a950-4cec-ba6e-efd6c8f44501.png#clientId=ue5d0a291-2575-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=619&id=u9d20ef6d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1238&originWidth=2222&originalType=binary&ratio=1&rotation=0&showTitle=false&size=192447&status=done&style=none&taskId=u3d69fd55-fdbe-47b8-93c4-2a2bbf67f8b&title=&width=1111)

<a name="HR44n"></a>

### 代码仓库管理
在仓库中，可以录入团队持有的代码仓库，后续该团队在开发应用时，新建组件的代码托管可直接从这些仓库中选择。<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179528780-5f1531fc-eaf9-49e4-a014-549ef8fadcf7.png#clientId=u3f741811-0cbb-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=727&id=u8bcd6dbb&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1454&originWidth=2850&originalType=binary&ratio=1&rotation=0&showTitle=false&size=477808&status=done&style=none&taskId=u93c51ec3-4308-466d-be80-dbd4f155733&title=&width=1425)

<a name="ifTzq"></a>

## 人员管理
SREWorks开源版本里在初始化安装时默认创建admin用户，用户可以在系统设置的成员页面创建添加新的用户，后续用户登录鉴权可通过OAuth接入企业用户管理系统。<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179529079-1aa5ab89-dc3d-4725-90f3-be5ff4a767c7.png#clientId=u3f741811-0cbb-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=725&id=ua9f309a5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1450&originWidth=2836&originalType=binary&ratio=1&rotation=0&showTitle=false&size=274092&status=done&style=none&taskId=ucfd77821-502d-421b-8015-38fa9aa0fa3&title=&width=1418)

<a name="Nht3e"></a>

### 新建用户
可以在系统中添加用户，并设置用户对SREWorks中其他SaaS应用的角色<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179529301-ad1f1def-e8db-427a-a81c-567e20dd322e.png#clientId=uf04520ea-a431-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=766&id=u73bff626&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1532&originWidth=2862&originalType=binary&ratio=1&rotation=0&showTitle=false&size=985212&status=done&style=none&taskId=uaeeaeca6-b565-4e87-981b-78317e3eb56&title=&width=1431)

<a name="qeaab"></a>

### 个人信息修改
个人信息设置，可以修改名称/登录名，密码和用户头像等信息<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179529573-661d4c73-8816-453d-8757-8574f7dad26a.png#clientId=u0f391604-4eb9-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=751&id=ua2e7299c&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1502&originWidth=2842&originalType=binary&ratio=1&rotation=0&showTitle=false&size=589887&status=done&style=none&taskId=ud3cd768d-9178-4f0f-98eb-983b968b632&title=&width=1421)


