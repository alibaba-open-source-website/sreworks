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
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

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
          // 这里写自己的文档编辑地址
          editUrl: 'https://github.com/alibaba-open-source-website/easyexcel/tree/main/',
          lastVersion: 'current',
          versions: {
            "current": {
              label: "1.3.x",
              path: "current",
            },
            // "1.4.x": {
            //   label: "1.4.x",
            //   path: "1.4.x",
            // }
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SREWorks',
        logo: {
          alt: 'sreworks Logo',
          src: 'img/sreworks.png',
          href: 'http://sreworks-demo.cfe09467bb7c4438aa71c0756f4cdf99c.cn-zhangjiakou.alicontainer.com/',
          target: '_self',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: '文档',
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
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/alibaba/sreworks',
              },
            ],
          },
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
