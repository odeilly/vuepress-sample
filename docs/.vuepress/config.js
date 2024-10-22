import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    lang: 'ja',
    base: '/vuepress-sample/',
    bundler: viteBundler(),
    theme: defaultTheme()
})
