<template>
  <div>
    <div class="text-white uppercase flex flex-col justify-center items-center h-300 lg:h-500 bg-center bg-cover px-4" style="background-image: url(https://clippersweb.blob.core.windows.net/careers/img/1440x486-dark-citymap-bg.jpg)">
      <h1>Community</h1>
    </div>
    <CommunitySubNav/>
    <div class="container grid sm:grid-cols-3 gap-12 mb-24 tiles">
      <NuxtLink to="/community/mentorship" class="mb-8">
        <div>
          <div class="relative mb-4">
            <span class="tile-center">Mentorship</span>
            <img src="https://www.nba.com/clippers/sites/clippers/files/800x450_mentorship.jpg?cw=865&ch=484&w=800&h=450&x=0&y=0" alt="">
          </div>
          <p>
            We partner with local youth organizations and schools to provide mentorship and assistance with mentor-based community initiatives. 
          </p>     
        </div>
      </NuxtLink>
      <NuxtLink to="/community/education" class="mb-8">
        <div>
          <div class="relative mb-4">
            <span class="tile-center">Education</span>
            <img src="https://publish.nba.com/clippers/sites/clippers/files/800x450_education.jpg?cw=865&ch=484&w=800&h=450&x=0&y=0" alt="">
          </div>
          <p>
            The LA Clippers support a wide array of education programs spanning teach appreciation, reading, math, science and scholarships. 
          </p>     
        </div>
      </NuxtLink>
      <NuxtLink to="/community/outreach" class="mb-8">
        <div>
          <div class="relative mb-4">
            <span class="tile-center">Community Outreach</span>
            <img src="https://www.nba.com/clippers/sites/clippers/files/800x450_community_outreach_1.jpg?cw=865&ch=484&w=800&h=450&x=0&y=0" alt="">
          </div>
          <p>
            The Clippers team is active in our LA community all year long. Whether we're supporting local events or hosting them, learn more about how you can join us. 
          </p>     
        </div>
      </NuxtLink>
      <a href="https://www.clipperscamps.com/" target="_blank" class="mb-8">
        <div>
          <div class="relative mb-4">
            <span class="tile-center">Youth Basketball</span>
            <img src="https://www.nba.com/clippers/sites/clippers/files/800x450_youth_basketball_0.jpg?cw=865&ch=484&w=800&h=450&x=0&y=0" alt="">
          </div>
          <p>
             LA Clippers Youth Basketball offers programs for girls and boys 6-14! Learn more on seasonal camps and how to sign-up to become a Jr. Clipper. 
          </p>     
        </div>
      </a>
      <NuxtLink to="#" class="mb-8">
        <div>
          <div class="relative mb-4">
            <span class="tile-center">Ticket Program</span>
            <img src="https://www.nba.com/clippers/sites/clippers/files/800x450_ticket.jpg?cw=865&ch=484&w=800&h=450&x=0&y=0" alt="">
          </div>
          <p>
            The Clippers are proud to partner with local businesses, season ticket Members, and fans who want to give back. 
          </p>     
        </div>
      </NuxtLink>
      <NuxtLink to="/community/foundation" class="mb-8">
        <div>
          <div class="relative mb-4">
            <span class="tile-center">Foundation</span>
            <img src="https://www.nba.com/clippers/sites/clippers/files/800x450_youth_clippers_foundation_1.jpg?cw=865&ch=484&w=800&h=450&x=0&y=0" alt="">
          </div>
          <p>
            The LA Clippers Foundation aims to make a positive difference in the lives of Los Angeles children. 
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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:rgba(0, 0, 0, .3);
}
.tiles > a:hover .tile-center{
  background-color:rgba(0, 0, 0, .1);
}
</style>
