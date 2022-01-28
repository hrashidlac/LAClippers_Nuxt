<template>
  <div> 
    <flickity ref="flickity" :options="flickityOptions" class="carousel carousel-main-large">
      <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/gallery/PG_3.jpg" /></div>
      <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/gallery/KL_1.jpg" /></div>
      <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/gallery/RJ_2.jpg" /></div>
      <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/gallery/MM_2.jpg" /></div>
      <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/gallery/LK_1.jpg" /></div>
      <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/gallery/SI_2.jpg" /></div>
      <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/gallery/TM_2.jpg" /></div>
      <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/gallery/IZ_1.jpg" /></div>
      <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/gallery/NB_2.jpg" /></div>
      <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/gallery/JW_1.jpg" /></div>
      <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/gallery/EB_1.jpg" /></div>
      <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/gallery/RJ_1.jpg" /></div>
      <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/gallery/KL_2.jpg" /></div>
      <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/gallery/PG_1.jpg" /></div>
      <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/gallery/TM_1.jpg" /></div>
    </flickity>
    <flickity ref="nav" :options="flickityNavOptions" class="carousel carousel-nav">
      <div class="carousel-cell"><em>13</em></div>
      <div class="carousel-cell"><em>2</em></div>
      <div class="carousel-cell"><em>1</em></div>
      <div class="carousel-cell"><em>8</em></div>
      <div class="carousel-cell"><em>5</em></div>
      <div class="carousel-cell"><em>9</em></div>
      <div class="carousel-cell"><em>14</em></div>
      <div class="carousel-cell"><em>40</em></div>
      <div class="carousel-cell"><em>33</em></div>
      <div class="carousel-cell"><em>20</em></div>
      <div class="carousel-cell"><em>12</em></div>
      <div class="carousel-cell"><em>1</em></div>
      <div class="carousel-cell"><em>2</em></div>
      <div class="carousel-cell"><em>13</em></div>
      <div class="carousel-cell"><em>14</em></div>
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
        wrapAround: true, 
        pageDots: false

      },
      flickityNavOptions: {
        asNavFor: '.carousel-main-large',
        contain: true, 
        pageDots: false, 
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
<style src="../../assets/css/cityedition/style.css" scoped></style>