import { themes as prismThemes } from "prism-react-renderer";
import type { Config, LoadContext } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "FilaMeta (Beta)",
  tagline: "A database of 3D-printing filament profiles and tips.",
  favicon: "theme/favicon/favicon.ico",
  url: "https://filameta.com",
  baseUrl: "/",
  noIndex: true,
  trailingSlash: false,

  organizationName: "filameta",
  projectName: "filameta.com",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/filameta/filameta.com/tree/master",
          routeBasePath: "/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          breadcrumbs: false
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          lastmod: "date",
          changefreq: "monthly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      } satisfies Preset.Options,
    ]
  ],

  themeConfig: {
    image: "theme/social-card.webp",
    announcementBar: {
      content: "Still building the site foundation, so don't expect much for now. - Silvenga",
      backgroundColor: "#e0783e",
      textColor: "#f5f6f7",
      isCloseable: false
    },
    navbar: {
      title: "FilaMeta (Beta)",
      logo: {
        alt: "FilaMeta Logo",
        src: "theme/logo.webp",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "filamentsSidebar",
          position: "left",
          label: "All Filaments",
        },
        {
          href: "https://github.com/filameta/filameta.com/issues/new",
          label: "Suggest a Filament",
          position: "right",
        },
        {
          href: "https://github.com/filameta/filameta.com",
          label: "GitHub",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    colorMode: {
      respectPrefersColorScheme: true
    },
    footer: {
      style: "light",
      copyright: `Copyright © ${new Date().getFullYear()}. Built by Silvenga with love and Docusaurus.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  markdown: {
    parseFrontMatter: async (params) => {
      // Reuse the default parser
      const result = await params.defaultParseFrontMatter(params);

      if (!result.frontMatter.pagination_enabled) {
        result.frontMatter.pagination_prev = null;
        result.frontMatter.pagination_next = null;
      }

      if (result.frontMatter.kind === "vendor"
        || result.frontMatter.kind === "filament") {
        result.frontMatter.hide_title = true;
      }

      return result;
    }
  },

  plugins: [
    require.resolve("docusaurus-lunr-search"),
    require.resolve("docusaurus-plugin-sass"),
    // eslint-disable-next-line require-await, @typescript-eslint/require-await
    async function custom(_context: LoadContext, _options: unknown) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.

          // eslint-disable-next-line @typescript-eslint/no-var-requires
          postcssOptions.plugins.push(require("tailwindcss"));
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};

export default config;
