// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SREWorks',
  tagline: 'SREWorks 专注于以应用为中心的一站式“云原生”、“数智化”运维SaaS管理套件。提供企业的应用&资源管理及运维开发两大核心能力，帮助企业实现云原生应用&资源的交付运维',
  url: 'http://sreworks-demo.cfe09467bb7c4438aa71c0756f4cdf99c.cn-zhangjiakou.alicontainer.com/',
  baseUrl: '/',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  onBrokenLinks: "ignore",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'alibaba', // Usually your GitHub org/user name.
  projectName: 'SREWorks', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: '简体中文',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.json'),
          includeCurrentVersion: true,
          lastVersion: 'v1.2',
          editUrl: function(params){
             let docName = params.permalink.split("/")[params.permalink.split("/").length - 1].split(".")[0];
             return "https://www.yuque.com/sreworks-doc/docs/" + docName;
          },
          versions: {
          }
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/sreworks.scss'),
        },
      }),
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SREWorks',
        hideOnScroll: true,
        logo: {
          alt: 'sreworks Logo',
          src: 'img/sreworks.png',
          href: '/',
          target: '_self',
        },

        items: [
          {
            html: "<span>常见问题</span>",
            position: 'right',
            to: 'docs/next/iwa896'
          },
          {
            html: "<button class=' navbar__item button button--primary'>申请体验</button>",
            position: 'right',
            href: 'https://sreworks.c38cca9c474484bdc9873f44f733d8bcd.cn-beijing.alicontainer.com/',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
            activeBaseRegex: 'docs/(next|v8)'
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            html: "<div class='navbar__item github-link-logo'><a href='https://github.com/alibaba/sreworks'></a></div>",
            position: 'right',
            href: 'https://github.com/alibaba/sreworks',
          },
        ],
      },
      metadata: [
        {
          name: 'keywords',
          content: 'sreworks 官方,sreworks官方文档,SREWorks,SREWorks官网,SRE works,SREworks,srework,srewoks,sreworks,srework,sre文档,sre-works,sre official,sre_works,云原生运维,大数据运维,阿里运维,云原生k8s,智能运维,数智运维,简单运维,高效运维,appmaniger,一站式运维,saas运维'
        },
        {
          name: 'description',
          content: 'SREWorks 专注于以应用为中心的一站式“云原生”、“数智化”运维SaaS管理套件。提供企业的应用&资源管理及运维开发两大核心能力，帮助企业实现云原生应用&资源的交付运维'
        },
      ],
      announcementBar: {
        id: 'announcementBar-2',
        content: '⭐ 开源不易，如果觉得本项目对您的工作还是有帮助的话， 请帮忙在<a target="_blank" rel="noopener noreferrer" href="https://github.com/alibaba/sreworks">GitHub</a> 点个⭐️',
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '社区',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/alibaba/sreworks',
              },{
                html: '<div class="wechat"> <a class="wechat-label">钉钉交流群</a> <a class="wechat-img" rel="noreferrer noopener" aria-label="Wechat Group"><img src="https://static.kubevela.net/images/barnett-wechat.jpg" alt="Broker wechat to add you into the user group."></div>'
              },{
                html: '<div class="wechat"> <a class="wechat-label">微信交流群</a> <a class="wechat-img" rel="noreferrer noopener" aria-label="Wechat Group"><img src="https://static.kubevela.net/images/barnett-wechat.jpg" alt="Broker wechat to add you into the user group."></div>'
              }
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SREWorks, Inc. Built with Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;