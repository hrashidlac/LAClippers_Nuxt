<template>
  <div> 
    <flickity ref="flickity" :options="flickityOptions2" class="carousel">
      <div class="carousel-cell">
        <img class="img-responsive" src="https://clippersweb.blob.core.windows.net/mvp/img/carousel-2.jpg">  
      </div>
      <div class="carousel-cell">
        <img class="img-responsive" src="https://clippersweb.blob.core.windows.net/mvp/img/carousel-1.jpg">  
      </div>
      <div class="carousel-cell">
        <img class="img-responsive" src="https://clippersweb.blob.core.windows.net/mvp/img/carousel-4.jpg">  
      </div>
      <div class="carousel-cell">
        <img class="img-responsive" src="https://clippersweb.blob.core.windows.net/mvp/img/carousel-5.jpg">  
      </div>
      <div class="carousel-cell">
        <img class="img-responsive" src="https://clippersweb.blob.core.windows.net/mvp/img/carousel-6.jpg">  
      </div>
      <div class="carousel-cell">
        <img class="img-responsive" src="https://clippersweb.blob.core.windows.net/mvp/img/carousel-7.jpg">  
      </div>
    </flickity>
  </div>
</template>
<script>

import Flickity from 'vue-flickity'

export default {
  data() {
    return {
      flickityOptions2: {
        imagesLoaded: true, 
        percentPosition: false, 
        wrapAround: true
      }
    }
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  }
}
</script>
<style src="../../assets/css/membercenter/style.css" scoped></style>