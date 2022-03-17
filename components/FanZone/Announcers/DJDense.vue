<template>
  <div>
    <!-- <div class="relative w-full h-50">
      <video class="w-full h-50 object-cover top-0" autoplay="autoplay" muted="muted" playsinline="" loop="loop" preload="auto">
        <source src="https://clippersweb.blob.core.windows.net/fanzone/dense/video/Comp%201_3.mp4" type="video/mp4">
      </video>
      <div class="w-full h-50 absolute top-0 left-0 z-10" style="background-image: linear-gradient(45deg, rgba(0,0,0,.3) 50%, rgba(0,0,0,.7) 50%); background-size: 3px 3px;">
      </div>
    </div> -->
    <HeroVideo :backLink="test" />
    <div class="container block">
      <div class="well related-info sm:flex">
        <div>
          <h1 class="text-center">DJ Dense</h1>
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
  props:{
    backLink: {
      type: String,
      required: false,
    },
  },
  data () {
    return {
      
    }
  }
}
</script>

