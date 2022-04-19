// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Oasys',
  tagline: 'Oasys Blockchain for Games',
  url: 'https://docusaurus-2.netlify.app', // Url to your site with no trailing slash
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/general/OASYS_favicon.png',
  organizationName: 'hideto0118', // Usually your GitHub org/user name.
  projectName: 'docusaurus-test', // Usually your repo name.
  // themes: ['@docusaurus/theme-search-algolia'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: 'YOUR_APP_ID',
  
      //   // Public API key: it is safe to commit it
      //   apiKey: 'YOUR_SEARCH_API_KEY',
  
      //   indexName: 'YOUR_INDEX_NAME',
  
      //   // Optional: see doc section below
      //   contextualSearch: true,
  
      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   externalUrlRegex: 'external\\.com|domain\\.com',
  
      //   // Optional: Algolia search parameters
      //   searchParameters: {},
  
      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePath: 'search',
  
      //   //... other Algolia params
      // },

      navbar: {
        title: '',
        logo: {
          alt: 'Oasys',
          src: 'img/general/oasys-logo_inline.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'whitepaper/intro',
            position: 'left',
            label: 'White Paper',
          },
          {
            type: 'doc',
            docId: 'techdocs/intro',
            position: 'left',
            label: 'Technical Materials',
          },
          // {
          //   type: 'doc',
          //   docId: 'doc2',
          //   position: 'left',
          //   label: 'Technical Document',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'White Paper',
          // },
          {
            type: 'localeDropdown',
            position: 'left',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Wthite Paper',
                to: '/docs/whitepaper/intro',
              },
              {
                label: 'Wthite Paper (PDF)',
                href: '/pdfs/dummy.pdf',
                target: '_blank',
              },
              {
                label: 'Technical Meterials',
                to: '/docs/techdocs/intro',
              },
              {
                label: 'Light Paper',
                href: 'https://medium.com/@oasys/lightpaper-2f0e75825415',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/oasysgames',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://t.co/wHaFUB4R0b',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/oasys_games',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                href: 'https://www.oasys.games/',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@oasys',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Oasys | Blockchain for The Games All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'ja'],
  // },
  
};

module.exports = config;
