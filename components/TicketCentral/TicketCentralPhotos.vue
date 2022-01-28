<template>
  <div> 
    <flickity ref="flickity" :options="flickityOptions" class="carousel">
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/ticketcentral/img/fanexperiences15.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/ticketcentral/img/fanexperiences2.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/ticketcentral/img/fanexperiences3.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/ticketcentral/img/fanexperiences7.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/ticketcentral/img/fanexperiences8.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/ticketcentral/img/fanexperiences9.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/ticketcentral/img/fanexperiences10.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/ticketcentral/img/fanexperiences11.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/ticketcentral/img/fanexperiences12.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/ticketcentral/img/fanexperiences13.jpg"/>
      </div>
      
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/ticketcentral/img/fanexperiences16.jpg"/>
      </div>
    
    </flickity>
  </div>
</template>
<script>

import Flickity from 'vue-flickity'
import FlickityAsNavFor from 'flickity-as-nav-for'

export default {
  data() {
    return {
      flickityOptions: {
        lazyLoad: 1,
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
<style src="../../assets/css/ticketcentral/style.css" scoped></style>