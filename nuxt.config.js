module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  

  modules: [
    '@nuxtjs/pwa',
  ],


  workbox: {
    
    runtimeCaching: [
      {
        // Should be a regex string. Compiles into new RegExp('https://my-cdn.com/.*')
        urlPattern: 'https://jsonplaceholder.typicode.com/*',
        // Defaults to `networkFirst` if omitted
        handler: 'networkFirst',
        // Defaults to `GET` if omitted
        method: 'GET'
      }
    ]
    
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
