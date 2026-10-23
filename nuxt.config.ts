// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: [
    '~/assets/css/main.css'
  ],

  app: {
    head: {
      title: 'Mita Nurfitri | Portofolio RPL',
      htmlAttrs: {
        lang: 'id'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Portofolio Mita Nurfitri - Siswi SMK Negeri 71 Jakarta Jurusan Rekayasa Perangkat Lunak (RPL). Menampilkan proyek nyata aplikasi web, analisis sistem (DFD Level 0, 1, 2, ERD, UML), dan UI/UX.'
        },
        { name: 'author', content: 'Mita Nurfitri' },
        { name: 'theme-color', content: '#020B1B' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  }
})
