---
title: 5.4.4 工作流插件
date: 2023-07-20T06:38:48.000Z
toc_max_heading_level: 6
toc_min_heading_level: 2
---

在OAM（Open Application Model）模型的部署过程中，其默认情况是无状态的部署方式。然而，随着应用架构的日益复杂化，我们有时会面临着一些需要逐步进行的、多阶段的部署需求。这种情况下，传统的一次性部署方法可能无法满足所有需求，从而带来诸多挑战。因此，为了解决这个问题并满足用户更多样化、复杂化的部署需求，我们参考[OAM应用标准](https://github.com/oam-dev/spec/blob/master/4.workload_types.md)，引入了强大的workflow能力：此项功能能够对部署过程进行细致的管理和控制，使得复杂的部署需求能够按照预设的步骤和流程逐步执行，大大提升了部署的灵活性和可控性。<br />在SREWorks中，我们内置了5个工作流插件，也允许用户自定义工作流插件：

- apply-components 按需部署组件 [代码地址](https://github.com/alibaba/SREWorks/blob/master/paas/appmanager/tesla-appmanager-server/src/main/resources/dynamicscripts/WorkflowApplyComponentsHandler.groovy)
- deploy 部署应用全量组件 [代码地址](https://github.com/alibaba/SREWorks/blob/master/paas/appmanager/tesla-appmanager-server/src/main/resources/dynamicscripts/WorkflowDeployHandler.groovy)
- remoteDeploy 部署应用全量组件至远端集群 [代码地址](https://github.com/alibaba/SREWorks/blob/master/paas/appmanager/tesla-appmanager-server/src/main/resources/dynamicscripts/WorkflowRemoteDeployHandler.groovy)
- rollout-promotion 灰度控制器，可以决定继续向下部署还是回滚  [代码地址](https://github.com/alibaba/SREWorks/blob/master/paas/appmanager/tesla-appmanager-server/src/main/resources/dynamicscripts/WorkflowRolloutPromotionHandler.groovy)
- suspend 部署暂停 [代码地址](https://github.com/alibaba/SREWorks/blob/master/paas/appmanager/tesla-appmanager-server/src/main/resources/dynamicscripts/WorkflowSuspendHandler.groovy)
<a name="ayznM"></a>

# 工作流案例（灰度发布）
通过在发布过程中不断调整 Helm / Kustomize 模板中对应 Workload spec 中的 partition 字段，来满足灰度发布的诉求。<br />如下，是一个典型的发布 Application 中的单个组件描述：
```yaml
revisionName: "K8S_MICROSERVICE|clustermanage|_"
scopes:
  - scopeRef:
      apiVersion: apps.abm.io/v1
      kind: Namespace
      name: "{{ Global.deployNamespace }}"
dataInputs:
  - valueFrom:
      dataOutputName: "Global.clusterId"
    toFieldPaths:
      - spec.name
parameterValues:
  - name: values
    value:
      deployNamespace: "{{ Global.deployNamespace }}"
    toFieldPaths:
      - spec.values
```
在实现灰度方案后，原 Application 描述调整为：<br />需要朝 POST `/workflow/launch`发起下面的内容（和原来的 /deployments/launch 发起内容的区别在于多加了 workflow Section，其他 Section 的内容等价，不用改）。<br />注意发起 launch 的时候要加 category=DEPLOY (URL 参数)，否则不能使用回滚功能！(本质是给 workflow 打个分类)
```yaml
components:
  - revisionName: "K8S_MICROSERVICE|clustermanage-test|_"
  - revisionName: "K8S_MICROSERVICE|clustermanage|_"
    scopes:
      - scopeRef:
          apiVersion: apps.abm.io/v1
          kind: Namespace
          name: "{{ Global.deployNamespace }}"
    dataInputs:
      - valueFrom:
          dataOutputName: "Global.clusterId"
        toFieldPaths:
          - spec.name
    parameterValues:
      - name: values
        value:
          deployNamespace: "{{ Global.deployNamespace }}"
        toFieldPaths:
          - spec.values
workflow:
  steps:
    - type: apply-components
      properties:
        components: 
        - type: K8S_MICROSERVICE
          name: clustermanage-test
    - type: apply-components
      properties:
        components: 
        - type: K8S_MICROSERVICE
          name: clustermanage
        rollout:  # 不提供 rollout 则直接原样部署
          type: partition  # 目前支持 partition(滚动更新) , 待支持 bluegreen / canary
          properties:
            partition: "1"
            name: "abmRolloutPartition"  # 可选，如果不填，默认是 abmRolloutPartition，否则可以自定义传入的参数 Name
    - type: suspend  # 此处将整个 workflow 置为暂停状态，这个时候需要外部通过 PUT /workflow/{instanceId}/context 来进一步设置变量，参考下面的说明
    - type: rollout-promotion  # 此处根据外界设置的 context 中的 continueRollout / rollback 决定是怎么走 (三种类型)
    - type: apply-components  # 如果上一步决定了继续向下执行的话，那么会继续正常部署
      properties:
        components: 
        - type: K8S_MICROSERVICE
          name: clustermanage
```

---

当 workflow 处于 suspend 节点暂停的时候，可以通过 `PUT /workflow/{instanceId}/context` 来设置下一步 rollout 使用的变量，允许传入的 context 内容如下：

- 灰度成功，确认并继续向下执行：`{"continueRollout": true, "rollback": false}`
- 灰度失败，决定回滚：`{"continueRollout": false, "rollback": true}`
- 灰度失败，就此结束，不执行操作：`{"continueRollout": false, "rollback": false}`

通过上述 context API 设置变量成功后，需要请求 `PUT /workflow/{instanceId}/resume`恢复 workflow 的执行<br />注意：当使用 suspend+rollout-promotion 类型的时候，务必保证 Workflow 发起的时候，使用的 options 中设置的 `category` 为 `DEPLOY`，否则无法使用回滚功能 (回滚即找到当前应用的上一个 category=DEPLOY 的 Application 重新全量部署)

<a name="MKElB"></a>

# 工作流接口
<a name="v13HY"></a>

### 发起 Workflow API
POST `/workflow/launch`<br />URL Parameters:

- appId: 应用 ID
- category: 分类 (固定为 DEPLOY 即可)

Body: YAML 字符串<br />Body 示例如下：
```yaml
apiVersion: core.oam.dev/v1alpha2
kind: ApplicationConfiguration
metadata:
  annotations:
    appId: testapp
    appInstanceName: "test-app-instance"
  name: deploy-workflow
spec:
  parameterValues:
  components:
    - revisionName: K8S_MICROSERVICE|clustermanage|_
  policies:
    - name: topology-e2e-env
      type: topology
      properties:
        namespace: "abm-daily"
    - type: override
      name: override-e2e-env
      properties:
        components:
          - revisionName: K8S_MICROSERVICE|clustermanage|_
            dataInputs:
              - valueFrom:
                  dataOutputName: "Global.KUBECONFIG"
                toFieldPaths:
                  - spec.base64Kubeconfig
            parameterValues:
              - name: name
                value: "appmanager-helm-e2e-rollout"
                toFieldPaths:
                  - spec.name
              - name: ignoreCreateNamespace
                value: true
                toFieldPaths:
                  - spec.ignoreCreateNamespace
              - name: values
                value:
                  resources:
                    limits:
                      cpu: "0.5"
                      memory: "1Gi"
                  image:
                    repository: "nginx"
                    tag: "latest"
                  replicaCount: 3
                toFieldPaths:
                  - spec.values
  workflow:
    steps:
      - type: apply-components
        properties:
          policies:
            - topology-e2e-env
            - override-e2e-env
          components:
            - type: K8S_MICROSERVICE
              name: clustermanage
          rollout:
            type: partition
            properties:
              partition: "1"
              name: "abmRolloutPartition"
      - type: suspend
      - type: rollout-promotion
      - type: apply-components
        properties:
          policies:
            - topology-e2e-env
            - override-e2e-env
          components:
            - type: K8S_MICROSERVICE
              name: clustermanage
```
返回示例：
```yaml
{
    "code": 200,
    "success": true,
    "message": "SUCCESS",
    "requestId": "0bc1eed516690483758985249e69af",
    "timestamp": 1669048376027,
    "data": {
        "id": 1,
        "gmtCreate": 1669048376010,
        "gmtModified": 1669048376010,
        "appId": "testapp",
        "category": "DEPLOY",
        "gmtStart": null,
        "gmtEnd": null,
        "workflowStatus": "PENDING",
        "workflowErrorMessage": null,
        "workflowConfiguration": "yaml str here",
        "workflowSha256": "a71a1dcd0ac86e291f4442fe7477316f346e1275f91b1cd087b8e05b28fc9890",
        "workflowOptions": {
            "creator": "admin",
            "category": "DEPLOY"
        },
        "workflowCreator": "admin",
        "workflowContext": null,
        "lockVersion": null
    }
}
```
<a name="vviaj"></a>

### 查询 Workflow Instance 列表 API
GET `/workflow`<br />URL Parameters (可选)

- instanceId：Workflow 实例 ID
- appId：应用 ID
- workflowStatus：Workflow 状态 (可选`PENDING`/`PREPROCESSING`/`RUNNING`/`SUSPEND`/`SUCCESS`/`FAILURE`/`EXCEPTION`/`TERMINATED`)
- workflowCreator：创建者

返回示例
```yaml
{
    "code": 200,
    "success": true,
    "message": "SUCCESS",
    "requestId": "0bc1eed216690487987592481e34f2",
    "timestamp": 1669048798778,
    "data": {
        "page": 1,
        "pageSize": 1,
        "total": 1,
        "items": [
            {
                "id": 1,
                "gmtCreate": 1669048376000,
                "gmtModified": 1669048381000,
                "appId": "testapp",
                "category": "DEPLOY",
                "gmtStart": null,
                "gmtEnd": null,
                "workflowStatus": "SUSPEND",
                "workflowErrorMessage": null,
                "workflowConfiguration": null,
                "workflowSha256": "a71a1dcd0ac86e291f4442fe7477316f346e1275f91b1cd087b8e05b28fc9890",
                "workflowOptions": {},
                "workflowCreator": "admin",
                "workflowContext": null,
                "lockVersion": 3
            }
        ],
        "empty": false
    }
}
```
<a name="N2s6E"></a>

### 查询单个 Workflow Instance API
GET `/workflow/{instanceId}`<br />注意查询单个 WorkflowInstance API 会返回 `workflowConfiguration`和 `workflowContext`字段。<br />返回示例：
```yaml
{
    "code": 200,
    "success": true,
    "message": "SUCCESS",
    "requestId": "0bc13a6816690488656747929e6cf8",
    "timestamp": 1669048865710,
    "data": {
        "id": 1,
        "gmtCreate": 1669048376000,
        "gmtModified": 1669048381000,
        "appId": "testapp",
        "category": "DEPLOY",
        "gmtStart": null,
        "gmtEnd": null,
        "workflowStatus": "SUSPEND",
        "workflowErrorMessage": null,
        "workflowConfiguration": "your workflow yaml",
        "workflowOptions": {
            "creator": "admin",
            "category": "DEPLOY"
        },
        "workflowCreator": "admin",
        "workflowContext": {
            "_internal_overwrite_parameters": {
                "Global": {
                    "KUBECONFIG": "xxxx"
                }
            }
        },
        "lockVersion": 3
    }
}
```
<a name="ckR9w"></a>

### 设置 Workflow Instance Context
PUT `/workflow/{instanceId}/context`<br />Request Body (JSON)：
```yaml
{
    "context": {
        "continueRollout": true,
        "p": false
    }
}
```
返回示例：
```yaml
{
    "code": 200,
    "success": true,
    "message": "SUCCESS",
    "requestId": "0bc1eed416690490952012305e2fb9",
    "timestamp": 1669049095228,
    "data": {}
}
```
<a name="NBv1g"></a>

### 唤醒 Workflow Instance 
PUT `/workflow/{instanceId}/resume`<br />返回示例：
```yaml
{
    "code": 200,
    "success": true,
    "message": "SUCCESS",
    "requestId": "0bc1eed316690491570732464e6293",
    "timestamp": 1669049157125,
    "data": {
        "command": "RESUME",
        "workflowInstanceId": 1,
        "clientHost": "10.219.*.*:7001",
        "success": true,
        "message": ""
    }
}
```
上面的返回说明当前已向集群下发命令 RESUME 指定 workflowInstanceId，接收者为 10.219.113.192:7001 实例，已开始继续运行。
<a name="RGb0s"></a>

### 终止 Workflow Instance
PUT `/workflow/{instanceId}/terminate`<br />返回示例：
```yaml
{
    "code": 200,
    "success": true,
    "message": "SUCCESS",
    "requestId": "0bc1eed316690493056674000e6294",
    "timestamp": 1669049305709,
    "data": {
        "command": "TERMINATE",
        "workflowInstanceId": 1,
        "clientHost": "10.219.*.*:7001",
        "success": true,
        "message": ""
    }
}
```
含义同 Resume。注意如果终止一个已经到达终态的 Workflow Instance 是不会产生任何效果的。
<a name="RCFUt"></a>

### 重试 Workflow Instance
PUT `/workflow/{instanceId}/retry`<br />重试当前已经到达终态的 Workflow 实例 (`SUCCESS`/`FAILURE`/`EXCEPTION`/`TERMINATED`)，注意该方法将会从第一个节点开始，使用原始参数重新运行一遍当前 Workflow 实例。<br />返回示例：
```yaml
{
    "code": 200,
    "success": true,
    "message": "SUCCESS",
    "requestId": "0bc13a5716690494195578320e6ed6",
    "timestamp": 1669049419592,
    "data": {
        "command": "RETRY",
        "workflowInstanceId": 1,
        "clientHost": "10.219.*.*:7001",
        "success": true,
        "message": ""
    }
}
```
<a name="gbU2I"></a>

### 重试 Workflow Instance (自定义起始 Task)
PUT `/workflow/{instanceId}/retryFromTask`<br />重试当前已经到达终态的 Workflow 实例 (SUCCESS/FAILURE/EXCEPTION/TERMINATED)，注意该方法从指定 taskId 开始进行重试，即重新运行 taskId 及之后的所有 WorkflowInstance 任务，该方法会获取 taskId 对应的快照内容，以此为输入进行重试。<br />URL Parameters:

- taskId: Workflow Task ID

返回示例：
```yaml
{
    "code": 200,
    "success": true,
    "message": "SUCCESS",
    "requestId": "0bc1eed216690495799026690e34f4",
    "timestamp": 1669049579909,
    "data": null
}
```
<a name="NxeG2"></a>

### 查询 Workflow Task 列表
GET `/workflow/{instanceId}/tasks`<br />URL Parameters:

- taskId: Workflow Task ID
- instanceId: Workflow Instance ID
- appId: 应用 ID
- taskType: 任务类型 (即 ApplicationConfiguration 中 workflow type)
- taskStatus: 任务状态 (可选 `PENDING`/`RUNNING`/`WAITING`/`RUNNING_SUSPEND`/`WAITING_SUSPEND`/`SUCCESS`/`FAILURE`/`EXCEPTION`/`TERMINATED`)
- deployAppId: 通过 Workflow Task 发起的二次应用部署单进行反向查询
- deployWorkflowInstanceId: 通过 Workflow Task 发起的二次 Workflow 实例 ID 进行反向查询

返回示例：
```yaml
{
    "code": 200,
    "success": true,
    "message": "SUCCESS",
    "requestId": "0bc13a5716690498584322587e6ed7",
    "timestamp": 1669049858444,
    "data": {
        "page": 1,
        "pageSize": 4,
        "total": 4,
        "items": [
            {
                "id": 1,
                "gmtCreate": 1669048376000,
                "gmtModified": 1669048381000,
                "batchId": 1,
                "workflowInstanceId": 1,
                "appId": "testapp",
                "gmtStart": null,
                "gmtEnd": null,
                "taskType": "apply-components",
                "taskStage": "pre-render",
                "taskStatus": "SUCCESS",
                "clientHostname": null,
                "deployAppId": 25446,
                "deployAppUnitId": "internal",
                "deployAppNamespaceId": "",
                "deployAppStageId": "",
                "lockVersion": 4,
                "taskProperties": {},
                "taskErrorMessage": null
            },
            {
                "id": 2,
                "gmtCreate": 1669048376000,
                "gmtModified": 1669049157000,
                "batchId": 2,
                "workflowInstanceId": 1,
                "appId": "testapp",
                "gmtStart": null,
                "gmtEnd": null,
                "taskType": "suspend",
                "taskStage": "pre-render",
                "taskStatus": "SUCCESS",
                "clientHostname": null,
                "deployAppId": 0,
                "deployAppUnitId": "internal",
                "deployAppNamespaceId": "",
                "deployAppStageId": "",
                "lockVersion": 4,
                "taskProperties": {},
                "taskErrorMessage": null
            },
            {
                "id": 3,
                "gmtCreate": 1669048376000,
                "gmtModified": 1669049157000,
                "batchId": 3,
                "workflowInstanceId": 1,
                "appId": "testapp",
                "gmtStart": null,
                "gmtEnd": null,
                "taskType": "rollout-promotion",
                "taskStage": "pre-render",
                "taskStatus": "SUCCESS",
                "clientHostname": null,
                "deployAppId": 0,
                "deployAppUnitId": "internal",
                "deployAppNamespaceId": "",
                "deployAppStageId": "",
                "lockVersion": 3,
                "taskProperties": {},
                "taskErrorMessage": null
            },
            {
                "id": 4,
                "gmtCreate": 1669048376000,
                "gmtModified": 1669049160000,
                "batchId": 4,
                "workflowInstanceId": 1,
                "appId": "testapp",
                "gmtStart": null,
                "gmtEnd": null,
                "taskType": "apply-components",
                "taskStage": "pre-render",
                "taskStatus": "SUCCESS",
                "clientHostname": null,
                "deployAppId": 25447,
                "deployAppUnitId": "internal",
                "deployAppNamespaceId": "",
                "deployAppStageId": "",
                "lockVersion": 4,
                "taskProperties": {},
                "taskErrorMessage": null
            }
        ],
        "empty": false
    }
}
```
<a name="Ka2bH"></a>

### 查询单个 Workflow Task 详情
GET `/workflow/{instanceId}/tasks/{taskId}`<br />返回示例：
```yaml
{
    "code": 200,
    "success": true,
    "message": "SUCCESS",
    "requestId": "0bc1eed516690499557175596e69ac",
    "timestamp": 1669049955736,
    "data": {
        "id": 1,
        "gmtCreate": 1669048376000,
        "gmtModified": 1669048381000,
        "batchId": null,
        "workflowInstanceId": 1,
        "appId": "testapp",
        "gmtStart": null,
        "gmtEnd": null,
        "taskType": "apply-components",
        "taskStage": "pre-render",
        "taskStatus": "SUCCESS",
        "clientHostname": null,
        "deployAppId": 25446,
        "deployAppUnitId": "",
        "deployAppNamespaceId": "",
        "deployAppStageId": "",
        "lockVersion": 4,
        "taskProperties": {
            "components": [
                {
                    "name": "helm-demo-chart@0.0.3@test",
                    "type": "ABM_HELM"
                }
            ],
            "rollout": {
                "type": "partition",
                "properties": {
                    "partition": "1",
                    "name": "abmRolloutPartition"
                }
            },
            "policies": [
                "topology-e2e-env",
                "override-e2e-env"
            ]
        },
        "taskErrorMessage": ""
    }
}
```
<a name="e11BF"></a>

### 终止 Workflow Task
PUT `/workflow/{instanceId}/tasks/{taskId}/terminate`<br />RequestBody (JSON)
```yaml
{
    "extMessage": "附加信息，为什么终止的原因，可选"
}
```
返回示例：
```yaml
{
    "code": 200,
    "success": true,
    "message": "SUCCESS",
    "requestId": "0bc13a5b16690500991053780e40d8",
    "timestamp": 1669050099118,
    "data": {}
}
```
注意如果终止一个已经到达终态的 Workflow Task 是不会产生任何效果的。
<a name="GPUsa"></a>

### 暂停 Workflow Task
PUT `/workflow/{instanceId}/tasks/{taskId}/suspend`<br />暂停指定 Workflow 任务 (RUNNING -> RUNNING_SUSPEND / WAITING -> WAITING_SUSPEND)，其他状态下没有实际意义。<br />RequestBody (JSON)
```yaml
{
    "extMessage": "附加信息，为什么暂停，可选"
}
```
返回示例：
```yaml
{
    "code": 200,
    "success": true,
    "message": "SUCCESS",
    "requestId": "1bc13a5b16690500991053780e41d8",
    "timestamp": 1669050199118,
    "data": {}
}
```
注意如果暂停一个已经到达终态的 Workflow Task 是不会产生任何效果的。
