<template>
  <div>
    <div class="text-white uppercase flex flex-col justify-center items-center h-300 lg:h-500 bg-center bg-cover px-4" style="background-image: url(https://clippersweb.blob.core.windows.net/careers/img/1440x486-dark-citymap-bg.jpg)">
      <h1>Our Crib</h1>
      <h2 class="my-4">Take a tour of our offices and see where we work.</h2>
      <NuxtLink  to="/company/careers/openpositions" class="btn mb-4">View Open Positions</NuxtLink>
      <a href="https://pages.beamery.com/nbateamcareers/page/clipperstalentcommunity" target="_blank" class="btn">Join Our Talent Community</a>
    </div>
    <div class="container py-20">
      <flickity ref="flickity" :options="flickityOptions" class="carousel carousel-main-large">
        <div class='carousel-cell'>
          <img class="carousel-cell-image" data-flickity-lazyload="https://www.nba.com/clippers/sites/clippers/files/_mg_8738.jpg" />
          <div class="carousel-caption">
            <p>When envisioning the concept for our business operations office, President of Business Operations Gillian Zucker saw our space to be one of open design, driven by transparency, that encourages unintentional collisions and collaborations.</p>
          </div>
        </div>
        <div class='carousel-cell'>
          <img class="carousel-cell-image" data-flickity-lazyload="https://www.nba.com/clippers/sites/clippers/files/_mg_8746.jpg" />
          <div class="carousel-caption">
            <p>Each of our conference rooms is named for a basketball-themed movie.</p>
          </div>
        </div>
          <div class='carousel-cell'>
          <img class="carousel-cell-image" data-flickity-lazyload="https://www.nba.com/clippers/sites/clippers/files/_mg_8771.jpg" />
          <div class="carousel-caption">
            <p>A mural of downtown LA is a tribute the urban neighborhood our business operations reside in. </p>
          </div>
        </div>
        <div class='carousel-cell'>
          <img class="carousel-cell-image" data-flickity-lazyload="https://www.nba.com/clippers/sites/clippers/files/_mg_8819.jpg" />
          <div class="carousel-caption">
            <p>Each month, the salesperson that generates the most revenue customizes their own pair of Nike shoes, which are displayed in one of our conference rooms celebrating their success. </p>
          </div>
        </div>
        <div class='carousel-cell'>
          <img class="carousel-cell-image" data-flickity-lazyload="https://www.nba.com/clippers/sites/clippers/files/_mg_8830.jpg" />
          <div class="carousel-caption">
            <p>Our open concept space lends itself to a highly collaborative environment that celebrates each person’s unique role and individual style.</p>
          </div>
        </div>
        <div class='carousel-cell'>
          <img class="carousel-cell-image" data-flickity-lazyload="https://www.nba.com/clippers/sites/clippers/files/_mg_8835.jpg" />
          <div class="carousel-caption">
            <p>When staff need to burn some energy during the day, they visit our staff-only gym.</p>
          </div>
        </div>
      
      </flickity>
    </div>
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
<style scoped>
.carousel-cell {
  width: 100%; /* full width */
  height: 750px;
  /* center images in cells with flexbox */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* position: relative; */
}
.carousel.is-fullscreen .carousel-cell {
  height: 100%;
}
.carousel-cell img {
  display: block;
  max-height: 700px;
}
.carousel-caption{
  margin-top:20px;
}
</style>