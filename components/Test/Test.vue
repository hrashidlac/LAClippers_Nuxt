<template>
  <div id="v-form">
    <div class="header-section"></div>
    <!-- 
      <div data-form-block-id="60fc0d57-53ee-eb11-bacb-00224809a9ae"></div> 
    <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.74.1038.0"></script> 
    <div id="dfzXoiGg_ZVQ4cQYffm4drGLe7CLsCLEPpE9_BQ0ReuI"></div>
    <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/ws-tracking.js?v=1.74.1038.0"></script>
    <div class="d365-mkt-config" style="display:none" data-website-id="fzXoiGg_ZVQ4cQYffm4drGLe7CLsCLEPpE9_BQ0ReuI" data-hostname="aa8d20baa12c40e281518e9e92b636ad.svc.dynamics.com"></div> 
    -->
    <div data-form-block-id="60fc0d57-53ee-eb11-bacb-00224809a9ae" v-if="isScriptLoaded"></div> 
    <div id="dfzXoiGg_ZVQ4cQYffm4drGLe7CLsCLEPpE9_BQ0ReuI" v-if="isScriptLoaded2"></div>
    <div class="d365-mkt-config" style="display:none" data-website-id="fzXoiGg_ZVQ4cQYffm4drGLe7CLsCLEPpE9_BQ0ReuI" data-hostname="aa8d20baa12c40e281518e9e92b636ad.svc.dynamics.com"></div> 
  </div>
</template>
<script>
let theJsHasBeenAddedSoSkipIt = false
export default {
  data () {
    return {
      isScriptLoaded: false,
      isScriptLoaded2: false
    }
  },
  head () {
  
    return {
      title: 'Dynamics Page',
      script: [
        {
          hid: 'script1',
          once: true,
          src: 'https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.74.1038.0',
          //body: true,
          //defer: true,
          // Changed after script load
          callback: () => { this.isScriptLoaded = true } 
        },
        {
          hid: 'script2',  
          once: true,
          src: 'https://mktdplp102cdn.azureedge.net/public/latest/js/ws-tracking.js?v=1.74.1038.0',
          //body: true,
          //defer: true,
          // Changed after script load
          callback: () => { this.isScriptLoaded2 = true } 
        }
        //https://vue-meta.nuxtjs.org/api/#plugin-properties
      ]
    }
  }
}
</script>
<style src="../../assets/css/v-form.css" scoped></style>