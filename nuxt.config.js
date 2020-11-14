export default {
  target: 'static',

  head: {
    title: 'John Espiritu | Software Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal website of John Espiritu, a software developer based in Makati, Philippines.' } ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  publicRuntimeConfig: {
    sns: {
      github: 'johnillo'
    }
  },

  css: [
    '~assets/css/global.css'
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/date-fns',
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxt/content'
  ],

  build: {
  }
}
