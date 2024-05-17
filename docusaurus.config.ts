import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FilaMeta',
  tagline: 'A database of 3D-printing filament profiles and tips.',
  favicon: 'img/favicon.ico',
  url: 'https://filameta.com',
  baseUrl: '/',
  noIndex: true,
  trailingSlash: false,

  organizationName: 'filameta',
  projectName: 'filameta.com',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/filameta/filameta.com/tree/master/src',
          routeBasePath: "/"
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'FilaMeta',
      logo: {
        alt: 'FilaMeta Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'filamentsSidebar',
          position: 'left',
          label: 'Filaments',
        },
        {
          href: 'https://github.com/filameta/filameta.com',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} FilaMeta. Built with love and Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [require.resolve('docusaurus-lunr-search'), require.resolve('docusaurus-plugin-sass')],
};

export default config;
