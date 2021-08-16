export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "chenJz's blog",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'SSR,开源博客,前端知识图谱,算法题解,node开发,javascript编程,react,编程分享' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    'github-markdown-css/github-markdown.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/request',
    '@/plugins/axios'
  ],

  /*
   ** Router property -  https://nuxtjs.org/docs/2.x/features/file-system-routing#the-router-property
   */
  router: {
    middleware: ['class']
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    proxy: true
  },

  proxy: {
    '/api/': 'http://localhost:8888'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
