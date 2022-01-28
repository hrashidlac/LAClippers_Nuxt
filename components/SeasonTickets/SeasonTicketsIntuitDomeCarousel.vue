<template>
  <div>
    <flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell">     
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/mvp/img/icons/thewall.jpg"/>
        <div class="carousel-caption">
          <div class="carousel-title">The Wall</div>
          <div class="carousel-subtitle">Intuit Dome Court Advantage</div>
          <p>51 uninterrupted rows of intimidation. With no concourse breaks in this 4,700 seat engineering marvel, the energy and atmosphere pulsing from The Wall will be like nothing ever seen or heard in an arena.  </p>
        </div>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/mvp/img/icons/seats.jpg"/>
        <div class="carousel-caption">
          <div class="carousel-title">MORE LEGROOM</div>
          <div class="carousel-subtitle">the edge of your seat just got better</div>
          <p> With an emphasis on basketball, the Intuit Dome's bowl design positions every seat in the building closer to the court and offers the most legroom in the NBA. </p>
        </div>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/mvp/img/icons/halo.jpg"/>
        <div class="carousel-caption">
          <div class="carousel-title">Halo Board</div>
          <div class="carousel-subtitle">a halo worthy of angelenos</div>
          <p>The typical center-hung scoreboard has 7,000 sq ft of LED.  The captivating Intuit Dome double-sided halo video board will showcase 44,000 sq ft. of action. Catch every replay, stat, and more on this first of its kind immersive arena element.</p>
        </div>
      </div>
      <div class="carousel-cell">
        <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/mvp/img/icons/frictionless.jpg"/>
        <div class="carousel-caption">
          <div class="carousel-title">Lines, What Lines?</div>
          <div class="carousel-subtitle">GET MORE OF WHAT YOU CAME FOR – THE GAME</div>
          <p> We leveraged design and technology so you can skip the lines and get back to your seat. With walk-out-marketplaces to grab your food and drinks and the most restroom facilities ever in an arena, you won’t miss a minute of the action at the Intuit Dome.</p>
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
<style src="../../assets/css/seasontickets/style.css" scoped></style>