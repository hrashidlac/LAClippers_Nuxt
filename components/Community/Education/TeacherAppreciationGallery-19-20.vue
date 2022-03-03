<template>
  <div>
    <h2 class="text-center mb-8 mt-24">2019-2020 Teacher Appreciation Night</h2>
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
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2019-2020/1200-teacher-apreciation-200130.jpg",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2019-2020/20191028_group_photo.jpg",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2019-2020/20191031_group_photo-_ta.jpg",
          "https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/2019-2020/20191107-group_photo-ta-_nov_7.jpg",
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