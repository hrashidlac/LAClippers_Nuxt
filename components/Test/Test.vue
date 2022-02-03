<template>
  
  
  <div>
    <!-- 
      <div data-form-block-id="60fc0d57-53ee-eb11-bacb-00224809a9ae"></div> 
    <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.74.1038.0"></script> 
    <div id="dfzXoiGg_ZVQ4cQYffm4drGLe7CLsCLEPpE9_BQ0ReuI"></div>
    <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/ws-tracking.js?v=1.74.1038.0"></script>
    <div class="d365-mkt-config" style="display:none" data-website-id="fzXoiGg_ZVQ4cQYffm4drGLe7CLsCLEPpE9_BQ0ReuI" data-hostname="aa8d20baa12c40e281518e9e92b636ad.svc.dynamics.com"></div> 
    -->
    <div data-form-block-id="60fc0d57-53ee-eb11-bacb-00224809a9ae"></div> 
    <div id="scpt1"></div>
    <div id="dfzXoiGg_ZVQ4cQYffm4drGLe7CLsCLEPpE9_BQ0ReuI"></div>
    <div id="scpt2"></div>
    <div class="d365-mkt-config" style="display:none" data-website-id="fzXoiGg_ZVQ4cQYffm4drGLe7CLsCLEPpE9_BQ0ReuI" data-hostname="aa8d20baa12c40e281518e9e92b636ad.svc.dynamics.com"></div> 
  </div>
</template>
<script>
export default {
  mounted () {
    // Create a script element
    let script = document.createElement('script');
          
    // Set attributes
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('language', 'javascript');
    script.setAttribute('src', 'https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.74.1038.0');

    // Append script
    document.getElementById('scpt1').insertAdjacentElement('afterend', script);

    // Create a script2 element
    let script2 = document.createElement('script');
          
    // Set attributes
    script2.setAttribute('type', 'text/javascript');
    script2.setAttribute('language', 'javascript');
    script2.setAttribute('src', 'https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.74.1038.0');
    
    document.getElementById('scpt2').insertAdjacentElement('afterend', script2);
  }
}
</script>

