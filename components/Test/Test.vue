<template>
  
  
  <div>
    <!-- 
      <div data-form-block-id="60fc0d57-53ee-eb11-bacb-00224809a9ae"></div> 
    <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.74.1038.0"></script> 
    <div id="dfzXoiGg_ZVQ4cQYffm4drGLe7CLsCLEPpE9_BQ0ReuI"></div>
    <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/ws-tracking.js?v=1.74.1038.0"></script>
    <div class="d365-mkt-config" style="display:none" data-website-id="fzXoiGg_ZVQ4cQYffm4drGLe7CLsCLEPpE9_BQ0ReuI" data-hostname="aa8d20baa12c40e281518e9e92b636ad.svc.dynamics.com"></div> 
    -->
    test

    <div id="add-script-here" />

    <div data-form-block-id="60fc0d57-53ee-eb11-bacb-00224809a9ae"></div>

    <div id="add-script-here" />
    
    <div id="dfzXoiGg_ZVQ4cQYffm4drGLe7CLsCLEPpE9_BQ0ReuI"></div>
    
    <div id="add-script-here2" />
    
    <div class="d365-mkt-config" style="display:none" data-website-id="fzXoiGg_ZVQ4cQYffm4drGLe7CLsCLEPpE9_BQ0ReuI" data-hostname="aa8d20baa12c40e281518e9e92b636ad.svc.dynamics.com"></div> 

  </div>
</template>
<script>
export default {
  mounted () {
    // eslint-disable-next-line no-useless-escape
    this.$postscribe('#add-script-here', '<script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.74.1038.0"><\/script>')

    this.$postscribe('#add-script-here2', '<script src="https://mktdplp102cdn.azureedge.net/public/latest/js/ws-tracking.js?v=1.74.1038.0"><\/script>')

    // If you need to do something onload, then instead of the line above do it like this:
    // this.$postscribe('#add-script-here', '<script onload="DO_SOMETHING_ONLOAD_HEAR" src="SCRIPT_URL"><\/script>')
  }

}
</script>

