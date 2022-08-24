// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const versionConfig = {
  latestVersion: "v1.2"
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SREWorks',
  tagline: 'SREWorks 专注于以应用为中心的一站式“云原生”、“数智化”运维SaaS管理套件。提供企业的应用&资源管理及运维开发两大核心能力，帮助企业实现云原生应用&资源的交付运维',
  url: "https://sreworks.opensource.alibaba.com/",
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
          lastVersion: versionConfig.latestVersion,
          editUrl: function(params){
             let docName = params.permalink.split("/")[params.permalink.split("/").length - 1].split(".")[0];
             return "https://www.yuque.com/sreworks-doc/docs/" + docName;
          },
          versions: {}
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
    'docusaurus-plugin-sass',
     [
            'docusaurus-plugin-includes',
            {
                injectedHtmlTags: {
                    headTags: [
                        {
                            tagName: 'meta',
                            attributes: {
                                name: 'aes-config',
                                content: 'pid=xux-opensource&user_type=101&uid=&username=',
                            },
                        },
                    ],
                    preBodyTags: [
                        {
                            tagName: 'script',
                            attributes: {
                                src: '//g.alicdn.com/alilog/mlog/aplus_v2.js',
                                id: 'beacon-aplus',
                                exparams: 'clog=o&aplus&sidx=aplusSidx&ckx=aplusCkx',
                            },
                        },
                        {
                            tagName: 'script',
                            attributes: {
                                src: '//g.alicdn.com/aes/??tracker/1.0.34/index.js,tracker-plugin-pv/2.4.5/index.js,tracker-plugin-event/1.2.5/index.js,tracker-plugin-jserror/1.0.13/index.js,tracker-plugin-api/1.1.14/index.js,tracker-plugin-perf/1.1.8/index.js,tracker-plugin-eventTiming/1.0.4/index.js',
                            },
                        },
                    ],
                }
            },
      ],
      [
        // 这里新增一个 多个doc的插件 专门用来 管理 社区 可以参考：https://docusaurus.io/docs/docs-multi-instance
        // 为什么不用docs一起？ 因为 社区 不需要版本管理
        '@docusaurus/plugin-content-docs',
        {
            id: 'community',
            path: 'community',
            routeBasePath: 'community',
            sidebarPath: require.resolve('./sidebarsCommunity.js'),
        },
    ],
    [
        // 常见问题
        '@docusaurus/plugin-content-docs',
        {
            id: 'column',
            path: 'column',
            routeBasePath: 'column',
            sidebarPath: require.resolve('./sidebars-column.json'),
        },
    ],
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
            label: "FAQ",
            position: 'right',
            to: 'docs/iwa896'
          },
          {
            label: '博客',
            type: 'doc',
            docId: 'index',
            position: 'right',
            docsPluginId: 'community',
        },
        {
            label: '专栏',
            type: 'doc',
            docId: 'index',
            position: 'right',
            docsPluginId: 'column',
        },
          {
            label: "Demo",
            position: 'right',
            href: 'https://wj.qq.com/s2/10565748/53da/',
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
                href: 'https://github.com/alibaba/sreworks/issues',
              },{
                html: '<div class="wechat"> <a class="wechat-label">钉钉交流群</a> <a class="wechat-img" rel="noreferrer noopener" aria-label="DingTalk Group"><img src="https://sreworks.oss-cn-beijing.aliyuncs.com/logo/ding.jpg"></div>'
              },{
                html: '<div class="wechat"> <a class="wechat-label">微信交流群</a> <a class="wechat-img" rel="noreferrer noopener" aria-label="Wechat Group"><img src="https://sreworks.oss-cn-beijing.aliyuncs.com/logo/weixin-helper.jpg" alt="Broker wechat to add you into the user group."></div>'
              }
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SREWorks | 浙公网安备: 33010002000092号 | ICP备案网站信息: 浙B2-20120091-4`,
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
