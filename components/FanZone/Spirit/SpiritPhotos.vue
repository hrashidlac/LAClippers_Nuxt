<template>
  <div class="container"> 
    <flickity ref="flickity" :options="flickityOptions" class="carousel carousel-main-large">
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/spirit/img/photos/01-02-20_clippers_spirit_8.jpg" />
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/spirit/img/photos/01-04-20_clippers_spirit_3.jpg" />
      </div>
        <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/spirit/img/photos/01-10-20_clippers_spirit_-_laura.jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/spirit/img/photos/11-24-19_clippers_spirit_3_1.jpg" />
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/spirit/img/photos/clippers_spirit_-_brooke_11-24-19_4.jpg" />
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/spirit/img/photos/clippers_spirit_-_drums_11-22-19.jpg" />
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/spirit/img/photos/clippers_spirit_-_karissa_11-22-19_2.jpg" />
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/spirit/img/photos/clippers_spirit_-_mattea_01-02-20_3.jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/spirit/img/photos/clippers_spirit_-_nia_11-20-19_2.jpg" />
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/spirit/img/photos/clippers_spirit_-_nia_11-20-19_2.jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/spirit/img/photos/clippers_spirit_-_taylor_t._01-04-20_2_2.jpg" />
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/spirit/img/photos/clippers_spirit_-_tea_01-02-20_2_1.jpg" />
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/spirit/img/photos/clippers_spirit_02-01-20_2.jpg" /> 
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/spirit/img/photos/clippers_spirit_02-05-20_5.jpg" />  
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/spirit/img/photos/clippers_spirit_10-10-19_4.jpg" />
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/spirit/img/photos/clippers_spirit_10-28-19_7.jpg" />
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/spirit/img/photos/clippers_spirit_11-06-19_12_1.jpg" />
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/spirit/img/photos/clippers_spirit_11-20-19_15.jpg" />
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
