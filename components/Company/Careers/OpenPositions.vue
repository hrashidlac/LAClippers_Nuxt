<template>
  <div>
    <div class="text-white uppercase flex flex-col justify-center items-center h-300 lg:h-500 bg-center bg-cover px-4" style="background-image: url(https://clippersweb.blob.core.windows.net/careers/img/1440x486-dark-citymap-bg.jpg)">
      <h1>Open Positions</h1>
      <h2 class="my-4">Building a Business. Changing the Game.</h2>
      <a href="https://pages.beamery.com/nbateamcareers/page/clipperstalentcommunity" target="_blank" class="btn">Join Our Talent Community</a>
      
    </div>
    <div class="container py-20">
      <div class="sm:grid sm:grid-cols-6">
        <!-- Workable Embed Scripts Here -->
        <!-- <script src='https://www.workable.com/assets/embed.js' type='text/javascript'></script>
        <script type='text/javascript' charset='utf-8'>
        whr(document).ready(function(){
        whr_embed(345238, {detail: 'titles', base: 'jobs', zoom: 'country', grouping: 'departments'});
        });
        </script>-->
        <div class="sm:col-start-2 sm:col-span-4" v-if="isScriptLoaded">
          <div v-if="isScriptLoaded2">
            <div id="whr_embed_hook"> 
            </div>
          </div>
        </div>
      </div>
    </div>

   
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
      title: 'Careers Page',
      script: [
        {
          hid: 'script1',
          once: true,
          src: 'https://www.workable.com/assets/embed.js',
          //body: true,
          //defer: true,
          // Changed after script load
          callback: () => { this.isScriptLoaded = true } 
        },
        {
          hid: 'script2',  
          once: true,
          src: 'https://clippersweb.blob.core.windows.net/careers/js/workable_init.js',
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