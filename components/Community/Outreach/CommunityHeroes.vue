<template>
  <div>
    <div class="hero text-white uppercase flex flex-col justify-center items-center py-12 lg:py-0 lg:h-500 bg-top bg-cover px-4" style="background-image: url(https://www.nba.com/resources/static/team/v2/clippers/custom/season-tickets/img/testimonials-bg.jpg)">
        <h1 class="hidden">Community Heroes</h1>
        <img src="https://publish.nba.com/clippers/sites/clippers/files/heroes_logo_new.png" class="sm:max-w-[30%] ">
        <h3 class="text-black sm:max-w-[50%] text-center my-8"> Clippers Community Heroes Is A Program That Honors People In Our Community That Inspire Children Through Community Service, Sport, Mentorship Or Education.</h3>
        <a href="#nominate" class="btn">Nominate Now</a>
    </div>
    <div class="flex justify-center py-4" style="background-color:#121212">
      <img src="https://www.nba.com/clippers/sites/clippers/files/clippers_community_heroes-logos.jpg" class="sm:max-w-[30%]">
    </div>
    <CommunitySubNav/>
    <div class="container">
      <CommunityHeroesGallery-21-22/>
      <CommunityHeroesNominateForm/>
    </div>
    <div style="background-image: url(https://clippersweb.blob.core.windows.net/utility/img/grey-texture.jpg)">
      <div class="container pt-2 pb-8 mt-12">
        <CommunityHeroesGallery-18-19/>
        <CommunityHeroesGallery-17-18/>
        <CommunityHeroesGallery-16-17/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
<style scoped>

</style>