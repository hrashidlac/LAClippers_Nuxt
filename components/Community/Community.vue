<template>
  <div>
    <div class="text-white uppercase flex flex-col justify-center items-center h-300 lg:h-500 bg-center bg-cover px-4" style="background-image: url(https://clippersweb.blob.core.windows.net/careers/img/1440x486-dark-citymap-bg.jpg)">
      <h1>Community</h1>
    </div>
    <CommunitySubNav/>
    <div class="container grid sm:grid-cols-3 gap-12 mb-24">
      <NuxtLink to="/community/mentorship" class="mb-8">
        <div>
          <div class="relative mb-4">
            <span class="tile-center">Mentorship</span>
            <img src="https://via.placeholder.com/800x450#EEE" alt="">
          </div>
          <p>
            placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder 
          </p>     
        </div>
      </NuxtLink>
      <NuxtLink to="/community/education" class="mb-8">
        <div>
          <div class="relative mb-4">
            <span class="tile-center">Education</span>
            <img src="https://via.placeholder.com/800x450#EEE" alt="">
          </div>
          <p>
            placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder 
          </p>     
        </div>
      </NuxtLink>
      <NuxtLink to="/community/outreach" class="mb-8">
        <div>
          <div class="relative mb-4">
            <span class="tile-center">Community Outreach</span>
            <img src="https://via.placeholder.com/800x450#EEE" alt="">
          </div>
          <p>
            placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder 
          </p>     
        </div>
      </NuxtLink>
      <NuxtLink to="#" class="mb-8">
        <div>
          <div class="relative mb-4">
            <span class="tile-center">Youth Basketball</span>
            <img src="https://via.placeholder.com/800x450#EEE" alt="">
          </div>
          <p>
            placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder 
          </p>     
        </div>
      </NuxtLink>
      <NuxtLink to="#" class="mb-8">
        <div>
          <div class="relative mb-4">
            <span class="tile-center">Ticket Program</span>
            <img src="https://via.placeholder.com/800x450#EEE" alt="">
          </div>
          <p>
            placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder 
          </p>     
        </div>
      </NuxtLink>
      <NuxtLink to="/community/foundation" class="mb-8">
        <div>
          <div class="relative mb-4">
            <span class="tile-center">Foundation</span>
            <img src="https://via.placeholder.com/800x450#EEE" alt="">
          </div>
          <p>
            placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder 
          </p>     
        </div>
      </NuxtLink>
    </div>
    <div class="container">
      <h2 class="text-center mb-4">Latest Videos</h2>
      <div class="sm:grid sm:grid-cols-12">
        <div class="sm:col-start-3 sm:col-span-8 text-center">
          <CommunityVideoCarousel/>
        </div>
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
.tile-center{
  @apply font-agencywide uppercase text-white absolute text-xl text-center;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
}
</style>
