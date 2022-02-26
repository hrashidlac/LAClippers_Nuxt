<template>
  <div class="container mb-36"> 
    <flickity ref="flickity" :options="flickityOptions" class="carousel carousel-main-large">
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/chuck/img/chuck-1.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/chuck/img/chuck-2.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/chuck/img/chuck-3.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/chuck/img/chuck-4.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/chuck/img/chuck-5.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/chuck/img/chuck-6.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/chuck/img/chuck-7.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/chuck/img/chuck-8.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/chuck/img/chuck-9.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/chuck/img/chuck-10.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/chuck/img/chuck-11.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/chuck/img/chuck-12.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/chuck/img/chuck-13.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/chuck/img/chuck-14.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/chuck/img/chuck-15.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/chuck/img/chuck-16.jpg"/>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/chuck/img/chuck-17.jpg"/>
      </div>
    </flickity>
  </div>
</template>
<script>

import Flickity from 'vue-flickity'

export default {
  data() {
    return {
      flickityOptions: {
        lazyLoad: 1,
        wrapAround: true, 
        pageDots: true

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
