---
title: 2.4 安装参数明细
date: 2022-03-25T03:39:17.000Z
toc_max_heading_level: 6
toc_min_heading_level: 2
---

<a name="Tg2yA"></a>

# 基础信息
```shell
# 平台名称
--set platformName="SREWorks"

# 平台图标, icon格式要求（比如：48*48）
--set platformLogo="https://sreworks.oss-cn-beijing.aliyuncs.com/logo/demo.png" 

# 底层存储
--set global.storageClass="alicloud-disk-available"
--set localPathProvisioner=false

# SREWorks平台启动使用的容器镜像仓库
--set global.images.registry="registry.cn-zhangjiakou.aliyuncs.com/sreworks"

# 安装完整版(包含数智能力)
--set saas.onlyBase=false
```

<a name="XFCPL"></a>

# 基础构建
```shell
# SaaS容器构建镜像仓库配置
--set appmanager.server.docker.account="sreworks"
--set appmanager.server.docker.password="***"
--set appmanager.server.docker.registry="registry.cn-zhangjiakou.aliyuncs.com"
--set appmanager.server.docker.namespace="builds"

# 源码构建模式的源码仓库来源
--set source.branch="master"
--set source.repo="https://code.aliyun.com/sreworks_public/mirror.git"
```

<a name="r0Q3Z"></a>

# 基础存储
```shell
# 替换基础应用的主MySQL数据库
# MySQL这块需要注意，通常将主MySQL数据库和数智化MySQL数据库(吞吐较大)分成两个

--set appmanager.server.database.host="*.mysql.rds.aliyuncs.com" 
--set appmanager.server.database.password="****"
--set appmanager.server.database.user="root"
--set appmanager.server.database.port=3306
--set appmanagerbase.mysql.enabled=false

# 替换基础应用的MinIO存储
--set global.minio.accessKey="*******"
--set global.minio.secretKey="*******"
--set appmanager.server.package.endpoint="minio.*.com:9000"
--set appmanagerbase.minio.enabled=false
```
:::info
_如果外置数据库中未赋予数据库创建权限，需要手工创建数据库，请在主MySQL数据库中创建下列数据库：_<br />_abm_paas_action           	# 前端页面及操作审计_<br />_abm_paas_authproxy      	# 权限管理服务_<br />_abm_paas_nacos          	# nacos存储_<br />_search_saas_tkgone      	# 整站的搜索服务 _<br />_sreworks_appmanager     	# AppManager核心数据库_<br />_sreworks_meta           	# 企业应用数据库_<br />_sreworks_saas_job       	# 作业平台数据库_
:::

<a name="SKJcK"></a>

# 数智应用
```shell
# 替换数智化应用的MySQL数据库
--set saas.dataops.dbHost="*.mysql.rds.aliyuncs.com"
--set saas.dataops.dbUser=root
--set saas.dataops.dbPassword="*****"
--set saas.dataops.dbPort=3306

# 替换数智化应用的ElasticSearch
--set saas.dataops.esHost="*.public.elasticsearch.aliyuncs.com"
--set saas.dataops.esPort="9200"
--set saas.dataops.esUser="elastic"
--set saas.dataops.esPassword="*******"

# 数智化应用中采集开关
--set saas.dataops.filebeatEnable=true
--set saas.dataops.metricbeatEnable=true
```
:::info
_如果外置数据库中未赋予数据库创建权限，需要手工创建数据库，请在数智化应用MySQL数据库中创建下列数据库：_<br />_aiops_aisp           		# AIOps服务存储_<br />_pmdb      				# 性能监控数据库_<br />_sw_saas_dataset          	# DataOps数据集服务_<br />_sw_saas_datasource      	# DataOps数据源_<br />_sw_saas_health     	        # DataOps健康管理_<br />_sw_saas_warehouse         	# DataOps数据仓库_
:::
