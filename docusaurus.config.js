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
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          includeCurrentVersion: true,
          //lastVersion: 'current',
          versions: {
            //"current": {
            //  label: "v1.2",
            //  path: "current",
            //}
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
          customCss: require.resolve('./src/css/sreworks.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      // 这里新增一个 多个doc的插件 专门用来 管理 社区 可以参考：https://docusaurus.io/docs/docs-multi-instance
      // 为什么不用docs一起？ 因为 社区 不需要版本管理
      '@docusaurus/plugin-content-docs',
      {
        routeBasePath: 'community',
        id: 'community',
        path: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
      },
    ],
    [
      // 常见问题
      '@docusaurus/plugin-content-docs',
      {
        id: 'qa',
        path: 'qa',
        routeBasePath: 'qa',
        sidebarPath: require.resolve('./sidebarsQa.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SREWorks',
        logo: {
          alt: 'sreworks Logo',
          src: 'img/sreworks.png',
          href: '/',
          target: '_self',
        },
        items: [
          {
            label: '在线演示',
            position: 'right',
            href: 'https://wj.qq.com/s2/10565748/53da/'
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/alibaba/sreworks',
            label: 'GitHub',
            position: 'right',
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
                label: '钉钉交流群',
                href: "#",
              },{
                label: '微信交流群',
                href: "#",
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
    }),
};

module.exports = config;
