// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config = {
  projectName: 'Zefrain.github.io',
  organizationName: 'Zefrain',
  trailingSlash: false,
  title: "Zefrain's Blog",
  url: 'https://github.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  deploymentBranch: 'master',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Homepage',
        items: [
          // {
          //   type: 'doc',
          //   docId: 'TOC/TOC',
          //   position: 'left',
          //   label: 'Notes',
          // },
          {to: '/docs/category/TOC', label: 'NOTEs', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          // {to: '/CV_EN', label: 'Resume', position: 'left'},
          {
            href: 'https://github.com/Zefrain',
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
                label: 'NOTEs',
                to: '/docs/category/TOC',
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
                label: 'More',
                href: 'https://github.com/Zefrain/notes',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zefrain's Blog. Built with Docusaurus.`,
      },
      // prism: {
      // theme: lightCodeTheme,
      // darkTheme: darkCodeTheme,
      // },
    }),
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;
