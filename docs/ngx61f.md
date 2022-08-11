---
title: 5.1.1 运维前端组件开发
---

在运维前端开发中配置页面组件时，SREWorks内置了一些前端组件，按照分类列表展示。用户也可以按照前端组件开发指南，自定义实现一些基础组件或业务组件。当前从界面提供的前端组件动态扩展组件只支持jsx 类型的组件，后续将提供react js 原生组件的动态扩展支持。

<a name="sP0eE"></a>

## JSX前端模板组件扩展

<a name="jMutK"></a>

### 注册组件
在“管理/系统设置-插件-运维物料-前端组件”功能页签下，维护了当前扩展的JSX前端模板组件

![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179558806-3d509422-0700-4db8-a6c9-77f841a9cbe0.png#clientId=uea294039-16ab-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=750&id=u0de6a7c1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1500&originWidth=2872&originalType=binary&ratio=1&rotation=0&showTitle=false&size=569015&status=done&style=none&taskId=u2f1f6d97-0924-4967-a0cb-dbe59102b0e&title=&width=1436)

点击执行“新建组件”，在侧滑表单中输入组件相关信息，即可动态向SREWorks注入JSX类型前面模板组件，后续在运维开发中即可使用该组件<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179559003-f7251855-4da7-4668-8e4f-039d0badba08.png#clientId=uea294039-16ab-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=764&id=ubadf08f2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1528&originWidth=2880&originalType=binary&ratio=1&rotation=0&showTitle=false&size=829854&status=done&style=none&taskId=ua2d40b4a-9570-4004-a75d-06e3ccac037&title=&width=1440)
<a name="Dn3rm"></a>

### 使用组件
在运维中台-运维开发菜单下，进入运维应用开发IDE，选择前端开发页签，在页面开发设计器中，可以选择到前面注册的JSX模板组件，并进入配置完成组件配置。 <br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179559151-dfaece97-49b4-4ce9-8323-e49fecdb53fc.png#clientId=uea294039-16ab-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=755&id=u7cec74ac&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1510&originWidth=2878&originalType=binary&ratio=1&rotation=0&showTitle=false&size=253975&status=done&style=none&taskId=u6d21061f-d196-4b4e-8637-42b8e825d41&title=&width=1439)<br />如果组件比较复杂，有数据对象注入，可动态注入变量，实现更丰富的组件能力<br />![image.png](https://cdn.nlark.com/yuque/0/2022/png/703896/1648179559313-fa1d7a6e-dd34-41dd-8212-a41c46d3d839.png#clientId=uea294039-16ab-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=714&id=u24801139&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1428&originWidth=2858&originalType=binary&ratio=1&rotation=0&showTitle=false&size=805445&status=done&style=none&taskId=ub27809de-6458-472d-a9b4-6f87f9530a2&title=&width=1429)


<a name="d6Pno"></a>

### 
