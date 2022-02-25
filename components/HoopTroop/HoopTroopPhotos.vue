<template>
  <div> 
    <h2 class="text-center mb-8">Photos</h2>
    <flickity ref="flickity" :options="flickityOptions" class="carousel carousel-main-large">
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/hooptroop/photos/01-02-20_hoop_troop_-_hector.jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/hooptroop/photos/01-05-20_hoop_troop_-_tiffany.jpg" />
        
      </div>
        <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/hooptroop/photos/01-05-20_hoop_troop.jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/hooptroop/photos/11-22-19_hoop_troop_-_lenl_2.jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/hooptroop/photos/11-22-19_hoop_troop_-_randolph.jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/hooptroop/photos/11-24-19_hoop_troop_-_clippers_win.jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/hooptroop/photos/11-24-19_hoop_troop_-_kc_egypt_2.jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/hooptroop/photos/hoop_troop_-_80s_night_12-03-19.jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/hooptroop/photos/hoop_troop_-_antaneise_11-07-19_2.jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/hooptroop/photos/hoop_troop_-_brandon_10-31-19_2.jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/hooptroop/photos/hoop_troop_-_brandon.jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/hooptroop/photos/hoop_troop_-_halloween_10-31-19_11.jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/hooptroop/photos/hoop_troop_-_halloween_10-31-19.jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/hooptroop/photos/hoop_troop_-_kassandra_12-03-19.jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/hooptroop/photos/hoop_troop_-_nate_10-31-19_5.jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/hooptroop/photos/hoop_troop_-_sumit_11-03-19_4.jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/hooptroop/photos/hoop_troop_11-03-19.jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/hooptroop/photos/hoop_troop_11-11-19_2.jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/hooptroop/photos/hoop_troop_11-11-19_4.jpg" />
        
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