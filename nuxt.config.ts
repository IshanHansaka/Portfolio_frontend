// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-09-07",
  modules: ['@nuxtjs/tailwindcss', "@nuxt/icon"],
  app: {
    head: {
      title: "Ishan Hansaka Silva",
      meta: [{ name: "description", content: "This is the official website of Ishan Hansaka Silva, undergraduate of University of Moratuwa, Sri Lanka." }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
})