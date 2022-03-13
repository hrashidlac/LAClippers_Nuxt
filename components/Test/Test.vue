<template>
  <div id="v-form">
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
          body: true,
          defer: true,
          // Changed after script load
          callback: () => { this.isScriptLoaded = true } 
        },
        {
          hid: 'script2',  
          once: true,
          src: 'https://mktdplp102cdn.azureedge.net/public/latest/js/ws-tracking.js?v=1.74.1038.0',
          body: true,
          defer: true,
          // Changed after script load
          callback: () => { this.isScriptLoaded2 = true } 
        }
        //https://vue-meta.nuxtjs.org/api/#plugin-properties
      ]
    }
  }
}
</script>
<style scoped>
/*Vertical Forms*/
#v-form .v-form-content{
  max-width:600px;
  margin: 40px auto 0;
  font-family: 'Avenir', sans-serif; 
}
#v-form .columnContainer{
  margin-top:20px;  
}
#v-form .v-form-content p{
  font-size:16px; 
}
#v-form .columnContainer input{
	color:#000;
	padding:10px;
  border-radius: 0;
  border: 1px solid #CCC;
}

#v-form .columnContainer label{
  font-family: "Avenirltstd book" !important;
  font-weight: normal;
	font-size:15px;
}

#v-form .columnContainer > div{
	margin:0 0 20px 0;
}

#v-form .columnContainer,
#v-form .emptyContainer{
	padding:0 !important;
}

#v-form .onFormSubmittedFeedback{
	background:none;
}
#v-form div[data-form-block-id] .onFormSubmittedFeedbackIcon,
#v-form div[data-form-block-id] .onFormSubmittedFeedback .onFormSubmittedFeedbackButtonSuccess{
	display: none !important
}
#v-form div[data-form-block-id] .onFormSubmittedFeedback .onFormSubmittedFeedbackMessage{
	color:#000;
	font-family: 'Avenir', sans-serif;
	font-weight: 900;
	text-transform: uppercase;
	font-size: 24px;
}

#v-form form div.marketing-field input[type="checkbox"], #v-form form div.marketing-subscription-list input{
  vertical-align: top; 
}

#v-form form button[type="submit"]:hover, 
#v-form form div[data-editorblocktype="SubmitButtonBlock"] button:hover{
  background:#1d428a;
  border-color:#1d428a;
}  
@media only screen and (max-width: 767px) {
  #v-form .v-form-content,
  #v-form form{
    padding:0 20px;
  }
}
/*Vertical Forms End*/
</style>