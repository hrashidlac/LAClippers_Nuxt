<template>
  <div>
    <!-- <video  class="w-full" autoplay loop muted poster="https://clippersweb.blob.core.windows.net/collegenights/img/2880x1000_CollegeNight_Header.jpg  ">
      <source src="https://clippersweb.blob.core.windows.net/fanzone/dense/video/Comp%201_3.mp4" type="video/mp4">
    </video> -->
    <!-- <div class="aspect-w-16 aspect-h-9 lg:aspect-h-4 relative">
      <video  class="w-full absolute top-0 left-0" autoplay loop muted poster="https://clippersweb.blob.core.windows.net/collegenights/img/2880x1000_CollegeNight_Header.jpg  ">
        <source  class="w-full absolute top-0 left-0" src="https://clippersweb.blob.core.windows.net/fanzone/dense/video/Comp%201_3.mp4" type="video/mp4">
      </video>
    </div> -->

    <div class="bg-video-wrap mb-12">
      <video src="https://clippersweb.blob.core.windows.net/fanzone/dense/video/Comp%201_3.mp4" loop muted autoplay>
      </video>
      <div class="overlay">
      </div>
      <h1>DJ DENSE</h1>
      <h2>Official DJ of the LA Clippers</h2>
    </div>
    
    <!-- <div class="text-white uppercase flex flex-col justify-center items-center h-300 bg-center bg-cover px-4 mb-12" style="background-image: url(https://clippersweb.blob.core.windows.net/collegenights/img/2880x1000_CollegeNight_Header.jpg)">
      <h1>DJ Dense</h1>
    </div> -->
    <div class="container">
      <div class="well related-info sm:flex">
        <div class="flex-none sm:pl-12 sm:order-last">
          <img src="https://www.nba.com/resources/static/team/v2/clippers/img/DENSE_300x300_200124.png">
        </div>
        <div>
          <h2>DJ Dense</h2> 
          <p><em>DJ of the LA Clippers</em></p>                  
          <p>This Los Angeles born-and-raised DJ brings his unique flare to any event, production or party.  With over 20 years of experience, he has become a staple in Los Angeles nightlife and radio.  DJ Dense is known for his unique and innovative style, which keep any crowd engaged.  He has a passion for mixing music for everyone to enjoy.  Due to his crowd-pleasing mixing talents and hosting, DJ Dense has become one of the most sought-after DJs from the LA Clippers, NASCAR, CHLA and Agua Caliente to name a few!</p>
          <p>Although notorious for mixing R&B and Hip Hop, DJ Dense mixes all genres from Pop, Rock, Latin, Dancehall, EDM and more!  He has mixed for and been an on-air personality for several Los Angeles and syndicated radio stations, interviews a-list celebrities, been on tour with Grammy-winning artists and has received multiple sponsorships from top companies.</p>
          <p>If DJ Dense is not showcasing his talents on-air (102.3 FM KJLH), at celebrity parties, concerts or nightclubs, he can be found at Staples Center In Los Angeles.  The LA Clippers and NBA take pleasure in his talents by having him as the Clippers official in-game DJ.  For booking information, email <a href="mailto:djdenseinfo@gmail.com">djdenseinfo@gmail.com</a>.</p>
          <p>Fans can follow DJ Dense on Twitter: @DJDENSE or on Instagram: @DjDense</p>
          <p><strong><NuxtLink to="/fan-zone/announcers"> « Back to Clippers Announcers </NuxtLink></strong></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.bg-video-wrap {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 65vh;
  background: url(https://designsupply-web.com/samplecontent/vender/codepen/20181014.png) no-repeat center center/cover;
}
video {
  min-width: 100%;
  min-height: 65vh;
  z-index: 1;
}
.overlay {
  width: 100%;
  height: 65vh;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(45deg, rgba(0,0,0,.3) 50%, rgba(0,0,0,.7) 50%);
  background-size: 3px 3px;
  z-index: 2;
}
h1 {
  text-align: center;
  color: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 3;
  max-width: 500px;
  width: 100%;
  height: 50px;
}
</style>
