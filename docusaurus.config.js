// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OSS compass',
  tagline: '',
  url: 'https://compass.gitee.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'oss-compass', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'modules',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Advanced use-case: functional editUrl
          editUrl: ({ versionDocsDirPath, docPath }) => {
            const repo = docPath.split('/').shift();
            const file = docPath.split('/').splice(1).join('/');
            return `https://github.com/oss-compass/${repo}/blob/main/${file}`;
          },
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: ['./plugin/postcss-tailwind-loader'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        hideOnScroll: true,
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Tutorial',
            items: [
              { label: 'Quick start', to: '/docs/quick-start' },
              { label: 'Dimensions Define', to: '/docs/dimensions-define' },
            ],
          },
          {
            title: 'Legal',
            items: [
              { label: 'Terms', href: '/docs/terms-of-use' },
              { label: 'Privacy', href: '/docs/privacy-policy' },
              { label: 'Built With', href: '/' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Slack', href: '/docs/community/slack', },
              { label: 'WeChat', href: '/docs/community/wechat' },
            ],
          },
          {
            title: 'Code',
            items: [
              { label: 'Github', href: 'https://github.com/oss-compass' },
              { label: 'Gitee', href: 'https://gitee.com/oss-compass' },
            ],
          },
        ],
        copyright: `Copyright©${new Date().getFullYear()} OSS compass. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
