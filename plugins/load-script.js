// @/plugins/load-script.js
import Vue from 'vue';
import LoadScript from 'vue-plugin-load-script';
Vue.use(LoadScript);

// As a global method
Vue.loadScript("https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.74.2001.0")
.then(() => {
  // Script is loaded, do something
})
.catch(() => {
  // Failed to fetch script
});

Vue.loadScript("https://mktdplp102cdn.azureedge.net/public/latest/js/ws-tracking.js?v=1.74.2001.0")
.then(() => {
  // Script is loaded, do something
})
.catch(() => {
  // Failed to fetch script
});
