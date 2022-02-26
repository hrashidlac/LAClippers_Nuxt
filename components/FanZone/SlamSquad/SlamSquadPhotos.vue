<template>
  <div> 
    <h2 class="text-center mb-8">Photos</h2>
    <flickity ref="flickity" :options="flickityOptions" class="carousel carousel-main-large">
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://www.nba.com/resources/static/team/v2/clippers/img/2020-la-clippers-slam-squad-photo.jpg" />
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/slamsquad/img/photos/01-04-20 Slam Squad - Brandon (2).jpg" />
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/slamsquad/img/photos/01-04-20 Slam Squad - Brandon S. (2).jpg" />
      </div>
        <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/slamsquad/img/photos/01-04-20 Slam Squad - Brandon S..jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/slamsquad/img/photos/01-04-20 Slam Squad - Brandon.jpg" />
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/slamsquad/img/photos/01-04-20 Slam Squad.jpg" />
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/slamsquad/img/photos/Slam Squad - Alec (11-16-19) (3).jpg" />
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/slamsquad/img/photos/Slam Squad - Brandon (01-04-20) (2).jpg" />
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/slamsquad/img/photos/Slam Squad - Brandon (11-16-19) (3).jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/slamsquad/img/photos/Slam Squad - Brandon (11-16-19) (4).jpg" />
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/slamsquad/img/photos/Slam Squad - Brandon & Christian (11-16-19) (2).jpg" />
        
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/slamsquad/img/photos/Slam Squad - Brandon S. (01-04-20) (2).jpg" />
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/slamsquad/img/photos/Slam Squad - Brandon S. (02-05-20).jpg" />
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/slamsquad/img/photos/Slam Squad - Christian (01-04-20) (2).jpg" /> 
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/slamsquad/img/photos/Slam Squad (01-04-20).jpg" />  
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/slamsquad/img/photos/Slam Squad (02-05-20) (4).jpg" />
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/slamsquad/img/photos/Slam Squad (02-05-20) (5).jpg" />
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
