<template>
  <div>
    <h2 class="text-center mb-8 mt-24">2017-2018 Teacher Appreciation Night</h2>
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
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2017-2018/1200-teacher_appreciation_gallery_1718_12_of_12.webp",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2017-2018/1200-teacher_appreciation_gallery_1718_1_of_12.webp",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2017-2018/1200-teacher_appreciation_gallery_1718_2_of_12.webp",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2017-2018/1200-teacher_appreciation_gallery_1718_3_of_12.webp",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2017-2018/1200-teacher_appreciation_gallery_1718_4_of_12.webp",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2017-2018/1200-teacher_appreciation_gallery_1718_5_of_12.webp",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2017-2018/1200-teacher_appreciation_gallery_1718_6_of_12.webp",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2017-2018/1200-teacher_appreciation_gallery_1718_7_of_12.webp",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2017-2018/1200-teacher_appreciation_gallery_1718_8_of_12.webp",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2017-2018/1200-teacher_appreciation_gallery_1718_9_of_12.webp",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2017-2018/1200-teacher_appreciation_gallery_1718_10_of_12.webp",
          
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