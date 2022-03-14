<template>
  <div>
    <!-- Star Wars Form
    https://laclippers.crm.dynamics.com/main.aspx?appid=29dfa511-1a90-ea11-a811-000d3a5bfec8&pagetype=entityrecord&etn=msdyncrm_formpage&id=f421dfe9-836d-ec11-8943-00224809c7fe
     -->
    <div data-form-block-id="f421dfe9-836d-ec11-8943-00224809c7fe" v-if="isScriptLoaded"></div>
    <div id="dtF-ApfZi1CKbDheXWVNRze1ifM8Z-NjJpVuaErhZ0Nw" v-if="isScriptLoaded2"></div>
    <div class="d365-mkt-config" style="display:none" data-website-id="tF-ApfZi1CKbDheXWVNRze1ifM8Z-NjJpVuaErhZ0Nw" data-hostname="aa8d20baa12c40e281518e9e92b636ad.svc.dynamics.com"></div>
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
          src: 'https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.77.1005',
          //body: true,
          //defer: true,
          // Changed after script load
          callback: () => { this.isScriptLoaded = true } 
        },
        {
          hid: 'script2',  
          once: true,
          src: 'https://mktdplp102cdn.azureedge.net/public/latest/js/ws-tracking.js?v=1.77.1005',
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