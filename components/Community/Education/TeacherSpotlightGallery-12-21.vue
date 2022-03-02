<template>
  <div>
    <h2 class="text-center mb-8">December 2021 Teacher Spotlights</h2>
    <flickity ref="flickity" :options="flickityOptions">
      <div v-for="photo in photos" :key="photo" class='carousel-cell'>
        <img class="carousel-image" :data-flickity-lazyload="photo">
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
        pageDots: false  
      },
      photos:
        [
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_davidchae.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_drewlewis.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_janelleguzman.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_janellesalgado.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_karenogbugbulu.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_kyledenman.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_brittnievargas-ortiz.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_marlahoffman.jpg",
        ]
      
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
@media (min-width:767px){
  .carousel-cell{
    width:33%;
    margin-right:10px;
  }
}

</style>