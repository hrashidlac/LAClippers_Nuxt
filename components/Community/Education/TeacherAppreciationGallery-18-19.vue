<template>
  <div>
    <h2 class="text-center mb-8 mt-24">2018-2019 Teacher Appreciation Night</h2>
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
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2018-2019/1200-teacher_appreciation_gallery_1819_14_of_15.webp",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2018-2019/1200-teacher_appreciation_gallery_1819_1_of_15.webp",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2018-2019/1200-teacher_appreciation_gallery_1819_2_of_15.webp",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2018-2019/1200-teacher_appreciation_gallery_1819_3_of_15.webp",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2018-2019/1200-teacher_appreciation_gallery_1819_4_of_15.webp",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2018-2019/1200-teacher_appreciation_gallery_1819_5_of_15.webp",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2018-2019/1200-teacher_appreciation_gallery_1819_6_of_15.jpg",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2018-2019/1200-teacher_appreciation_gallery_1819_7_of_15.webp",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2018-2019/1200-teacher_appreciation_gallery_1819_8_of_15.webp",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2018-2019/1200-teacher_appreciation_gallery_1819_9_of_15.webp",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2018-2019/1200-teacher_appreciation_gallery_1819_10_of_15.webp",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2018-2019/1200-teacher_appreciation_gallery_1819_11_of_15.webp",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2018-2019/1200-teacher_appreciation_gallery_1819_12_of_15.webp",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2018-2019/1200-teacher_appreciation_gallery_1819_13_of_15.webp",
          
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