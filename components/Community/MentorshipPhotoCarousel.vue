<template>
  <div>
    <flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell">     
        <img class="carousel-cell-image" data-flickity-lazyload="https://via.placeholder.com/1600x900#EEE"/>
        <div class="carousel-caption">
          <div class="carousel-title">Caption Title</div>
          <div class="carousel-subtitle">Caption Sub</div>
          <p>Caption caption caption caption caption caption caption caption caption.</p>
        </div>
      </div>
      <div class="carousel-cell">     
        <img class="carousel-cell-image" data-flickity-lazyload="https://via.placeholder.com/1600x900#EEE"/>
        <div class="carousel-caption">
          <div class="carousel-title">Caption Title</div>
          <div class="carousel-subtitle">Caption Sub</div>
          <p>Caption caption caption caption caption caption caption caption caption.</p>
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