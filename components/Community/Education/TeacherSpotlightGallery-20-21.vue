<template>
  <div>
    <h2 class="text-center mb-8 mt-24">2020-2021 Season Spotlights</h2>
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
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_danreyes.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_elsanaranjo.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_genevievemariani.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_guillermogonzalez.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_jenessaocon.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_jenniferdorosky.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_judithalejandragonzalezbaruch_0.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_lucyjuarez.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_natalieburstein_0.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_roeljosephsalvador.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_arneshiabryanthorn.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_chrismichaels.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_jenniebigbie.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_jeralynnyanes.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_jessicagodfrey.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_kristinrakip.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_robinluther.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_romelespinoza_1.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_trinamarch.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_charlottesabet.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_crystalvythulu.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_drconradoulpindo.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_dominicpatacsil.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_irenetark.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_jaymeeorafferty.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_madelaineweber.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_nancychau.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_nicolasav.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_thanhbui.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x800_2021_teacherappreciation_wendyruiz.jpg"
          
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
  .carousel-cell img{
    width:100%;
  }
}

</style>