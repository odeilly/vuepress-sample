import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    title: 'VuePress サンプル',
    lang: 'ja',
    base: '/vuepress-sample/',
    bundler: viteBundler(),
    theme: defaultTheme({
        navbar: [
            {
                text: "MySQL",
                children: [
                    {
                        text: "MySQL",
                        link: "/mysql.html"
                    }
                ],
            },
            {
                text: "Home",
                link: "/"
            }
        ],
    }),


    port: 9000
})
