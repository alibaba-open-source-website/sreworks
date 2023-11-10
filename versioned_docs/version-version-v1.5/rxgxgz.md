---
title: 5.3.2 代码贡献指南
date: 2022-08-15T03:25:05.000Z
toc_max_heading_level: 6
toc_min_heading_level: 2
---

<a name="uKYHm"></a>

## 分支规范
- 开发分支为`master` [https://github.com/alibaba/sreworks/tree/master](https://github.com/alibaba/sreworks/tree/master)

<a name="yKUiE"></a>

## 前端本地开发
<a name="h0Fj4"></a>

### 环境要求

- Node = 14  如果本机版本不满足要求，可以使用 [nvm](https://github.com/nvm-sh/nvm) 来做node多版本切换

<a name="mwcb0"></a>

### 本地调试
前端(frontend)代码目录 [https://github.com/alibaba/SREWorks/tree/master/paas/frontend](https://github.com/alibaba/SREWorks/tree/master/paas/frontend)

<a name="RuDgz"></a>

#### 本地构建
```shell
npm install --global yarn
yarn install
yarn build:all # 构建所有的组件(第一次需要构建)
```

<a name="wm7FI"></a>

#### 配置参数
修改 [app/config/webpack.config.js](https://github.com/alibaba/SREWorks/blob/master/paas/frontend/app/config/webpack.config.js#L44) 中的代理指向可访问sreworks endpoint，本文以 [http://8.130.35.2:30767/](http://8.130.35.2:30767/) 为例
```json

module.exports = {
  ...
  devServer: {
    ...
    proxy: {
        "/gateway": {
           target: "http://8.130.35.2:30767/",
           changeOrigin: true,
           cookieDomainRewrite:"http://8.130.35.2:30767/"
       }
    }
  }
}
```

<a name="mS8tr"></a>

#### 本地启动
请务必进入 [/frontend](https://github.com/alibaba/SREWorks/tree/master/paas/frontend) 所在目录启动
```shell
yarn start # 启动 (后续只需要用此命令即可)
```

<a name="jwOAZ"></a>

#### 
