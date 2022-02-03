export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'clippers-spa',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ 
    //'@/assets/bootstrap/css/bootstrap.min.css',
    '@/assets/bootstrap/css/bootstrap_3.2.0_css_bootstrap.min.css',
    'aos/dist/aos.css',
    '@/assets/animate/animate.css',
    '@/assets/v-tooltip/tooltip.css',
    '@/assets/flickity/flickity.css'
  ],

  js: [
    //'@/assets/bootstrap/js/bootstrap.min.js'
    // '@/assets/bootstrap/js/bootstrap_3.2.0_js_bootstrap.min.js'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/aos", ssr: false },
    { src: "@/plugins/v-tooltip.js", ssr: false },
    { src: "@/filters", ssr: false },
    { src: "@/plugins/Vue-Flickity", ssr: false },
    { src: "@/plugins/Vue-Flickity-As-Nav-For", ssr: false },
    { src: "@/plugins/Vue-Faq-Accordion", ssr: false },
    { src: "@/plugins/vue-js-modal", ssr: false },
    { src: "@/plugins/vue-scrollactive", ssr: false },
    { src: "@/plugins/postscribe.client.js", ssr: false  }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/Miniplans',
      '~/components/SeasonTickets',
      '~/components/City',
      '~/components/TicketCentral'
    ]
  },


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["aos"]
  }

}
