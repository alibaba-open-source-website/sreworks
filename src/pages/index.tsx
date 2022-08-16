import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="docs/current/quickstart/">
            Quick start ⏱️
          </Link>
        </div> */}
        <section className="main-body-one">
          <div className='main-body-one-left'>
            <h1 className="main-body-one-left-title">Cloud-native operation and maintenance (O&M) platform</h1>
            <div className="main-body-one-left-description">
              SREWorks 专注于以应用为中心的一站式“云原生”、“数智化”运维SaaS管理套件。提供企业的应用&资源管理及运维开发两大核心能力，帮助企业实现云原生应用&资源的交付运维
            </div>
            <div className="main-body-one-left-button-panel">
              <button className="button button--primary" style={{ marginRight: 20 }}>安装使用</button>
              <button className="button button--primary img-label-pane"><span>关注SREWorks</span><img className="img-label" src="https://static.kubevela.net/images/barnett-wechat.jpg" alt="Broker wechat to add you into the user group." /></button>
            </div>
          </div>
          <div className="main-body-one-right">
            <img alt="homeImage" src={require('@site/static/img/homeImage.png').default}></img>
          </div>
        </section>
        <section className="main-body-two">
          <div className="main-body-two-title">
            <h2>开箱即用的运维服务化能力</h2>
            <h4>运维领域服务&业务领域定制</h4>
          </div>
          <div className="main-body-two-description">
            <a className="description-card">
              <h2>云原生</h2>
              <p>提供通用的云原生应用模板解决方案（兼容OAM），及配合该模板的通用Operator能力，降低企业应用上云门槛。</p>
              <div className="card-link"><a href="">详情</a></div>
            </a>
            <a className="description-card">
              <h2>自动化运维</h2>
              <p>提供统一作业调度平台能力，解决运维大规模集中式调度常见，提升运维效率利器</p>
              <div className="card-link"> <a href="">详情</a></div>
            </a>
            <a className="description-card">
              <h2>运维应用工厂</h2>
              <p>提供运维应用前后端托管的运维应用开发框架及部署平台，前端配置化低代码开发，后端脚手架运维服务插件化集成</p>
              <div className="card-link"> <a href="">详情</a></div>
            </a>
            <a className="description-card">
              <h2>基础运维服务</h2>
              <p>围绕IT运维工作服务台，提供包含“作业平台、流程平台”等承载日常运维操作的运维自动化平台。</p>
              <div className="card-link"><a href="">详情</a></div>
            </a>
            <a className="description-card">
              <h2>数据运维服务</h2>
              <p>围绕“运维数据”的链路管理，提供包含“采集、计算、服务、应用”标准化的运维数据分析平台。</p>
              <div className="card-link"><a href="">详情</a></div>
            </a>
            <a className="description-card">
              <h2>智能运维服务</h2>
              <p>基于“感知、决策、执行”的智能运维框架，结合异常检测/日志聚类/根因分析等核心智能服务，构筑Auto Pilot的无人值守、AIOps智能运维体系。</p>
              <div className="card-link"><a href="">详情</a></div>
            </a>
          </div>
        </section>
        <section className="main-body-three">
          <div className="main-body-three-left">
            <h2 className="main-body-three-left-title">丰富的基础组件</h2>
            <div className="main-body-three-left-description">
            低代码设计交互,提供丰富、灵活、实用的基础组件，为业务产品提供强有力的设计支持; 同时开放自定义组件集成能力，满足用户多样化个性化场景需求。
            </div>
            <div className="main-body-three-left-button-panel">
              <button className="button button--primary" style={{ marginRight: 20 }}>了解更多</button>
            </div>
          </div>
          <div>
            <img src="https://sreworks.c38cca9c474484bdc9873f44f733d8bcd.cn-beijing.alicontainer.com//gateway/minio/public/a534c415-dd68-4147-bc02-2bdca7f2adcb"></img>
          </div>
        </section>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
