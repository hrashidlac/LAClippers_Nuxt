<template>
  <div> 
    <h2 class="text-center mb-8">Photos</h2>
    <flickity ref="flickity" :options="flickityOptions" class="carousel carousel-main-large">
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/kidclippers/img/photos/01-04-20_kid_clippers_3.jpg" />
        <div class="carousel-caption">
          <p>Watch the very talented LA Kid Clippers perform at every LAC weekend home game! <small>(Tony Garcia)</small></p>
        </div>
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/kidclippers/img/photos/01-04-20_kid_clippers_6.jpg" />
        <div class="carousel-caption">
          <p>Watch the very talented LA Kid Clippers perform at every LAC weekend home game! <small>(Tony Garcia)</small></p>
        </div>
      </div>
        <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/kidclippers/img/photos/01-05-20_kid_clippers_2.jpg" />
        <div class="carousel-caption">
          <p>Watch the very talented LA Kid Clippers perform at every LAC weekend home game! <small>(Tony Garcia)</small></p>
        </div>
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/kidclippers/img/photos/11-24-19_kid_clippers_2.jpg" />
        <div class="carousel-caption">
          <p>Watch the very talented LA Kid Clippers perform at every LAC weekend home game! <small>(Tony Garcia)</small></p>
        </div>
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/kidclippers/img/photos/11-24-19_kid_clippers_5.jpg" />
        <div class="carousel-caption">
          <p>Watch the very talented LA Kid Clippers perform at every LAC weekend home game! <small>(Tony Garcia)</small></p>
        </div>
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/kidclippers/img/photos/12-01-19_kid_clippers_5.jpg" />
        <div class="carousel-caption">
          <p>Watch the very talented LA Kid Clippers perform at every LAC weekend home game! <small>(Tony Garcia)</small></p>
        </div>
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/kidclippers/img/photos/kid_clippers_01-04-20_4.jpg" />
        <div class="carousel-caption">
          <p>Watch the very talented LA Kid Clippers perform at every LAC weekend home game! <small>(Tony Garcia)</small></p>
        </div>
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/kidclippers/img/photos/kid_clippers_01-04-20_40.jpg" />
        <div class="carousel-caption">
          <p>Watch the very talented LA Kid Clippers perform at every LAC weekend home game! <small>(Tony Garcia)</small></p>
        </div>
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/kidclippers/img/photos/kid_clippers_01-05-20_10.jpg" />
        <div class="carousel-caption">
          <p>Watch the very talented LA Kid Clippers perform at every LAC weekend home game! <small>(Tony Garcia)</small></p>
        </div>
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/kidclippers/img/photos/kid_clippers_01-05-20_18.jpg" />
        <div class="carousel-caption">
          <p>Watch the very talented LA Kid Clippers perform at every LAC weekend home game! <small>(Tony Garcia)</small></p>
        </div>
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/kidclippers/img/photos/kid_clippers_01-05-20_21.jpg" />
        <div class="carousel-caption">
          <p>Watch the very talented LA Kid Clippers perform at every LAC weekend home game! <small>(Tony Garcia)</small></p>
        </div>
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/kidclippers/img/photos/kid_clippers_02-01-20_3.jpg" />
        <div class="carousel-caption">
          <p>Watch the very talented LA Kid Clippers perform at every LAC weekend home game! <small>(Tony Garcia)</small></p>
        </div>
      </div>
      <div class='carousel-cell'>
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/kidclippers/img/photos/kid_clippers_12-01-19_27.jpg" />
        <div class="carousel-caption">
          <p>Watch the very talented LA Kid Clippers perform at every LAC weekend home game! <small>(Tony Garcia)</small></p>
        </div>
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