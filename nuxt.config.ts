// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    compatibilityDate: "2024-09-07",
    modules: ['@nuxtjs/tailwindcss', "@nuxt/icon"],
    runtimeConfig: {
      public: {},
      basicAuth: process.env.BASIC_AUTH || '',
    },
    app: {
      head: {
        htmlAttrs: {
          lang: 'en',
        },
        title: "Ishan Hansaka Silva",
        meta: [{ name: "description", content: "This is the official website of Ishan Hansaka Silva, undergraduate of University of Moratuwa, Sri Lanka." }],
        link: [
          { rel: "stylesheet" },
          { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
          { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
          { rel: 'manifest', href: '/site.webmanifest' },
          { rel: 'stylesheet', href: "https://fonts.googleapis.com/icon?family=Material+Icons"},
        ],
      },
    },
})