export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@pinia/nuxt'],
  devtools: { enabled: false },
  css: ['././assets/styles/main.scss', '././assets/styles/fonts.scss'],
  icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/icons'
      }
    ]
  }
})
