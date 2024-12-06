// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Erin's UI Portfolio",
  tagline: "Showcasing My Work and Thoughts",

  ////////////////////////////////////////////////////////////////////////////
  url: "https://ecase6.github.io",
  baseUrl: "/erin-ui-portfolio2/",

  organizationName: "ecase6",
  projectName: "erin-ui-portfolio2",
  ////////////////////////////////////////////////////////////////////////////

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "My UI Portfolio",
        items: [
          { to: "/about-me", label: "About Me", position: "left" },
          { to: "/projects", label: "Projects", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/contact", label: "Contact", position: "right" },
          {
            ////////////////////////////////////////////////////////////////////////////
            href: "https://github.com/ecase6/erin-ui-portfolio2",
            ////////////////////////////////////////////////////////////////////////////
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "About Me",
            items: [{ label: "About Me", to: "/about-me" }],
          },
          {
            title: "Projects",
            items: [{ label: "Projects", to: "/projects" }],
          },
          {
            title: "Blog",
            items: [{ label: "Blog", to: "/blog" }],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                ////////////////////////////////////////////////////////////////////////////
                href: "https://github.com/ecase6/erin-ui-portfolio2",
                ////////////////////////////////////////////////////////////////////////////
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My UI Portfolio. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
