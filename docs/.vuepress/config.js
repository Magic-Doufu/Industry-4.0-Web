module.exports = {
  plugins: ['vuepress-plugin-element-tabs','@vuepress/back-to-top'],
  title: '傳產工業4.0化協作計畫',
  description: 'Thinger.io 中文文件/感測器實作/協定原理',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  base: '',
  markdown: {
    lineNumbers: false
  },
  theme: 'thindark',
  themeConfig: {
    nav:[
      {text: 'Thinger.io中文文件', link: 'https://magic-doufu.github.io/thinger.io-docs-zh-t/' },
      {text: '感測器實作', link: '/sensors/'},
      {text: '協定原理', link: '/protocols/'}
    ],
    sidebar: {
      '/': [
        ''
      ]
    },
    sidebarDepth: 2,
  },
  configureWebpack: {
    resolve: {
      alias: {
        //'@api': '../assets/Thinger.io/API'
      }
    }
  }
}