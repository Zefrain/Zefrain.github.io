import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'c72'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '76f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '3f5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '527'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'e90'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '530'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '6be'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '2e7'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'd59'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'ffd'),
    exact: true
  },
  {
    path: '/blog/gdb print full value',
    component: ComponentCreator('/blog/gdb print full value', '4b0'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'c71'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '671'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'e10'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'fc1'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '287'),
    exact: true
  },
  {
    path: '/blog/tags/gdb',
    component: ComponentCreator('/blog/tags/gdb', 'a6a'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '009'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '52d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'bd8'),
    exact: true
  },
  {
    path: '/CV_CN',
    component: ComponentCreator('/CV_CN', 'abd'),
    exact: true
  },
  {
    path: '/CV_EN',
    component: ComponentCreator('/CV_EN', '008'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'c39'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '8d8'),
    routes: [
      {
        path: '/docs/Advanced Programming in the Unix Environment/Chapter 1. UNIX System Overview',
        component: ComponentCreator('/docs/Advanced Programming in the Unix Environment/Chapter 1. UNIX System Overview', '8e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Advanced Programming in the Unix Environment/Chapter 2. UNIX Standardization and Implementations',
        component: ComponentCreator('/docs/Advanced Programming in the Unix Environment/Chapter 2. UNIX Standardization and Implementations', '0c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/advanced-programming-in-the-unix-environment',
        component: ComponentCreator('/docs/category/advanced-programming-in-the-unix-environment', '575'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/NOTEs',
        component: ComponentCreator('/docs/NOTEs', '708'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '370'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
