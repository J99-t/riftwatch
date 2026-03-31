// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig:{
    NUXT_RIFTCODEX_URL: '',
    NUXT_RIOT_API_KEY: ''
  }
})