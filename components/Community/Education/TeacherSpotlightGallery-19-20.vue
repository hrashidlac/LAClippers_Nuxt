<template>
  <div>
    <h2 class="text-center mb-8 mt-24">2019-2020 Season Spotlights</h2>
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
          "https://www.nba.com/clippers/sites/clippers/files/600x1000_2021_teacherappreciation_andreaweston2.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x1000_2021_teacherappreciation_adrianuribe2.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x1000_2021_teacherappreciation_annhu.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x1000_2021_teacherappreciation_christinelanada-alfaro_1.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x1000_2021_teacherappreciation_dinadelao-johnson.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x1000_2021_teacherappreciation_doloresjimenez.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x1000_2021_teacherappreciation_elaineamari_1.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x1000_2021_teacherappreciation_elizabethmarchan.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x1000_2021_teacherappreciation_estebanmontanez.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x1000_2021_teacherappreciation_genakim.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x1000_2021_teacherappreciation_janelleamperse.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x1000_2021_teacherappreciation_jasminevelasquez.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x1000_2021_teacherappreciation_karenrasch-herrera_1.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x1000_2021_teacherappreciation_marlenecastaneda.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/600x1000_2021_teacherappreciation_ranjinimunoor.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/2021_teacherappreciation_amandagoodwin.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/2021_teacherappreciation_amberwillis.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/2021_teacherappreciation_denisegonzalez.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/2021_teacherappreciation_elizabethvasquez.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/2021_teacherappreciation_garrettlim.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/2021_teacherappreciation_ireneclark.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/2021_teacherappreciation_janefung.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/2021_teacherappreciation_kristysmith.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/2021_teacherappreciation_mariamedina.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/2021_teacherappreciation_michaelguzman.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/2021_teacherappreciation_michelejones.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/2021_teacherappreciation_monicaduarte.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/2021_teacherappreciation_nakiawhitaker.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/2021_teacherappreciation_sandrabermudez.jpg",
          "https://www.nba.com/clippers/sites/clippers/files/2021_teacherappreciation_tiffanyhuang.jpg",
          "https://www.nba.com/.element/media/2.0/teamsites/clippers/img/600x1000_2021_TeacherAppreciation_AlfonsoTonie.jpg",
          "https://www.nba.com/.element/media/2.0/teamsites/clippers/img/600x1000_2021_TeacherAppreciation_BernhardBrittani.jpg",
          "https://www.nba.com/.element/media/2.0/teamsites/clippers/img/600x1000_2021_TeacherAppreciation_EldrageelyAngelina.jpg",
          "https://www.nba.com/resources/static/team/v2/clippers/img/600x1000_2021_TeacherAppreciation_ThomasEsparza.jpg",
          "https://www.nba.com/.element/media/2.0/teamsites/clippers/img/600x1000_2021_TeacherAppreciation_FitzgeraldSandra.jpg",
          "https://www.nba.com/.element/media/2.0/teamsites/clippers/img/600x1000_2021_TeacherAppreciation_GibsonNatalie.jpg",
          "https://www.nba.com/.element/media/2.0/teamsites/clippers/img/600x1000_2021_TeacherAppreciation_GochezManuel.jpg",
          "https://www.nba.com/.element/media/2.0/teamsites/clippers/img/600x1000_2021_TeacherAppreciation_GonzalezMelody.jpg",
          "https://www.nba.com/.element/media/2.0/teamsites/clippers/img/600x1000_2021_TeacherAppreciation_KennedyHeather.jpg",
          "https://www.nba.com/.element/media/2.0/teamsites/clippers/img/600x1000_2021_TeacherAppreciation_LiCindy.jpg",
          "https://www.nba.com/.element/media/2.0/teamsites/clippers/img/600x1000_2021_TeacherAppreciation_RuelasHeather.jpg",
          "https://www.nba.com/.element/media/2.0/teamsites/clippers/img/600x1000_2021_TeacherAppreciation_SabatiniBarbara.jpg",
          "https://www.nba.com/.element/media/2.0/teamsites/clippers/img/600x1000_2021_TeacherAppreciation_SaterfieldCatherine.jpg",
          "https://www.nba.com/.element/media/2.0/teamsites/clippers/img/600x1000_2021_TeacherAppreciation_SpinkDavid.jpg",
          "https://www.nba.com/.element/media/2.0/teamsites/clippers/img/600x1000_2021_TeacherAppreciation_WooldridgeMegan.jpg",
          
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