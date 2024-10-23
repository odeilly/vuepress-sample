import { viteBundler } from "@vuepress/bundler-vite";
import { searchPlugin } from "@vuepress/plugin-search";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  title: "VuePress サンプル",
  description: "サンプルです。",
  lang: "ja",
  base: "/vuepress-sample/",
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      {
        text: "MySQL",
        children: [
          {
            text: "MySQL",
            link: "/mysql.html",
          },
        ],
      },
      {
        text: "Home",
        link: "/",
      },
    ],
  }),

  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        }
      },
      maxSuggestions: 10,
    })
  ],

  port: 9000,
});
