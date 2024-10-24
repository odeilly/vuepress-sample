import { viteBundler } from "@vuepress/bundler-vite";
import { searchPlugin } from "@vuepress/plugin-search";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { copyCodePlugin } from "@vuepress/plugin-copy-code";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  title: "VuePress サンプル",
  description: "サンプルです。",
  lang: "ja",
  base: "/vuepress-sample/",
  bundler: viteBundler(),
  theme: defaultTheme({

    contributors: false,

    navbar: [
      {
        text: "Sample",
        children: [
          {
            text: "PlantUML",
            link: "/plantuml.html",
          }
        ]
      },
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
    }),

    copyCodePlugin({
      duration: 1000,
      locales:{
        '/': {
          copied: "copied",
          copy: "copy",
        }
      }
    }),

    mdEnhancePlugin({
      plantuml: true,
    }),
  ],

  port: 9000,
});
