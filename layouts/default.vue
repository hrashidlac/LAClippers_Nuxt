<template>
  <div>
    <div>
      <Header />
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    loadLexWebUI () {
      const lex = document.createElement('script')
      const lex2 = document.createElement('script')
      const currentLocation = window.location.origin
      console.log(currentLocation)
      lex.src = 'https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.74.1038.0'
      document.body.appendChild(lex)
      lex2.src = 'https://mktdplp102cdn.azureedge.net/public/latest/js/ws-tracking.js?v=1.74.1038.0'
      document.body.appendChild(lex2)
    }
  },
  mounted () {
    this.loadLexWebUI()
    console.log('test')
  }
}
</script>