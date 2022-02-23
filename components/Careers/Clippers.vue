<template>
  <div>
    <div class="text-white uppercase flex flex-col justify-center items-center h-300 lg:h-500 bg-center bg-cover px-4" style="background-image: url(https://clippersweb.blob.core.windows.net/careers/img/1440x486-dark-citymap-bg.jpg)">
      <h1 >LA Clippers Careers</h1>
      <h2 class="my-4">Building a Business. Changing the Game.</h2>
      <NuxtLink  to="/careers/openpositions" class="btn mb-4">View Open Positions</NuxtLink>
      <a href="https://pages.beamery.com/nbateamcareers/page/clipperstalentcommunity" target="_blank" class="btn">Join Our Talent Community</a>
      
    </div>
    <div class="container py-20 grid grid-cols-1 sm:grid-cols-2 gap-12">
      <div>
        <img class="mb-4" src="https://www.nba.com/resources/static/team/v2/clippers/img/671x376-culture-img-1-is-career-200219.jpg">
        <h2 class="text-center">Inside Sales Program</h2> 
        <p>Inside Sales Representatives participate in an 8 - 12 month program that provides structured training with a focus on growing the Representative's professional skills and sales technique.</p>
        <div class="flex justify-center mt-4">
          <NuxtLink  to="/careers/insidesales" class="btn btn-sm mt-4">Learn More</NuxtLink>
        </div>
      </div>
      <div>
        <img class="mb-4" src="https://www.nba.com/clippers/sites/clippers/files/internship-program-group-photo.jpg">
        <h2 class="text-center">Business Operations Internship Program</h2> 
        <p>Our 10-week summer program is focused on creating a well-rounded and unique experience by providing the opportunity to work for a professional basketball team.</p>
        <div class="flex justify-center mt-4">
          <NuxtLink  to="/careers/businessoperationsinternship" class="btn btn-sm mt-4">Learn More</NuxtLink>
        </div>
      </div>
      <div>
        <img class="mb-4" src="https://nba.com/clippers/sites/clippers/files/game-night-staff-arena_0.jpg">
        <h2 class="text-center">Game Night Staff</h2> 
        <p>Game Night Staff play an instrumental role in creating a best in class experience for our fans before, during, and after each Clippers home game. Every Game Night staff member is essential to Clipper Nation.</p>
        <div class="flex justify-center mt-4">
          <NuxtLink  to="/careers/gamenightstaff" class="btn btn-sm mt-4">Learn More</NuxtLink>
        </div>
      </div>
      <div>
        <img class="mb-4" src="https://www.nba.com/resources/static/team/v2/clippers/img/655x369-office-200623.jpg">
        <h2 class="text-center">Check Out Our Crib</h2> 
        <p>Take a walkthrough of our open and collaborative work space.</p>
        <div class="flex justify-center mt-4">
          <NuxtLink  to="/careers/crib" class="btn btn-sm mt-4">Take a Tour</NuxtLink>
        </div>
      </div>
    </div>

    

    <div class="text-white flex flex-col justify-center items-center h-500 bg-center bg-cover" style="background-image: url(https://www.nba.com/resources/static/team/v2/clippers/img/1440x437-join-team-section-bg-is-career-200219.jpg);">
      <h2 class="font-agencywide">Join Our Talent Community</h2>
      <p class="lg:w-1/2 text-center">If you don't see a position you're interested in or if you'd like us to consider you for a position at a later time, join our talent community! We'll keep you posted on new openings and upcoming events!</p>
      <a href="https://pages.beamery.com/nbateamcareers/page/clipperstalentcommunity" target="_blank" class="mt-8 btn btn-outline">Join Now</a>
      
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
