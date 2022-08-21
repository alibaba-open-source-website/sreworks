import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import GitHubButton from 'react-github-btn';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Cloud Native DataOps & AIOps Platform`}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      <main>
        {/* <HomepageFeatures /> */}
        <div>
          <section className="main-body-one">
            <div className='main-body-one-left'>
              <h1 className="main-body-one-left-title"><Translate>Cloud Native DataOps & AIOps Platform</Translate></h1>
              <div className="main-body-one-left-description">
                 <Translate>SREWorks focuses on the application-centric one-stop "cloud native" and "DataOps and AIOps" O & M SaaS management suite as an engineering practice for the Alibaba Cloud Big Data SRE team's SRE concept.</Translate> <Translate>It enables companies to achieve the delivery and maintenance of cloud-native apps and resources via two primary capabilities: enterprise application and resource management and O & M development.</Translate>
              </div>
              <div className="main-body-one-left-button-panel">
                <Link
                            className={clsx(
                                'button'
                            )}
                            style={{marginRight:20}}
                            to={useBaseUrl('/docs/next/rr5g10')}>
                            <Translate>Get Started</Translate>
                        </Link>
          <span style={{"position": "relative", "top": "12px"}}>
           <GitHubButton 
            href="https://github.com/alibaba/sreworks"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star alibaba/sreworks on GitHub">
            Star
          </GitHubButton>
          </span>
              </div>
            </div>
            <div className="main-body-one-right">
              <img alt="homeImage" src={require('@site/static/img/homeImage.png').default}></img>
            </div>
          </section>
          <section className="main-body-two">
            <div className="main-body-two-title">
              <h2><Translate>Out-of-the-box operation & management solutions</Translate></h2>
              <h2>&nbsp;</h2>
            </div>
            <div className="main-body-two-description">
              <a className="description-card">
                <h2><Translate>DevOps</Translate></h2>
                <p><Translate>Provide general cloud application solutions (Open Application Model), integrate infrastructure capabilities, and reduce the threshold for enterprises to migrate applications to the cloud.</Translate></p>
                <div className="card-link">
                   <Link
                       style={{marginRight:0}}
                       to={useBaseUrl('/docs/next/ii05yo')}>
                       <Translate>Detail</Translate>
                   </Link>
                 </div>
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
              <h2 className="main-body-three-left-title"><Translate>Frontend market with tons of widgets</Translate></h2>
              <div className="main-body-three-left-description">
                <Translate>The low-code frontend IDE provides both agility and full business function support. Rich, flexible and practical frontend widget market, open custom widget integration capabilities, to meet the needs of users in diverse personalized scenarios.</Translate>
              </div>
              <div className="main-body-three-left-button-panel">
                       <Link
                            className={clsx(
                                'button button--primary'
                            )}
                            style={{marginRight:20}}
                            to={useBaseUrl('/docs/next/ou9k9g')}>
                            <Translate>Learn More</Translate>
                        </Link> 
              </div>
            </div>
            <div>
               <img style={{ height: 500 , marginTop: -50 }} src="https://sreworks.oss-cn-beijing.aliyuncs.com/svg/lowcode-active2.svg" />
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
