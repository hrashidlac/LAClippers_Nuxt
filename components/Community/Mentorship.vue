<template>
  <div>
    <div class="hero text-white uppercase flex flex-col justify-center items-center h-300 lg:h-500 bg-center bg-cover px-4" style="background-image: url(https://www.nba.com/resources/static/team/v2/clippers/custom/school-programs/hero-maz.jpg)">
      <div class="container text-center">
        <img src="https://www.nba.com/resources/static/team/v2/clippers/custom/school-programs/logo-3.png" class="w-24 mx-auto">
        <h1 class="sm:text-7xl sm:mt-0">Mentorship Assist Zone</h1>
        <a href="https://laclippers-forms.formstack.com/forms/mazregistrationform" class="btn">Register Your Organization</a>
      </div>
    </div>
    <CommunitySubNav/>
    <div class="container">
      <div class="grid sm:grid-cols-12 gap-12 mb-12">
        <div class="sm:col-span-8">
          <h2>Mentorship Matters</h2>
          <p>The LA Clippers partner with local youth organizations to lend an assist to community based mentorship initiatives. The Mentorship Assist Zone program supports local organizations with mentorship recruitment, student incentives, speakers and cultural experiences. Our program supports all youth mentorship, with special emphasis on organizations assisting youth in underserved communities.</p>
          <p>Mentored Youth Are:</p>
          <ul>
            <li>81% more likely to report participating regularly in sports or extracurricular activities</li>
            <li>78% more likely to volunteer regularly in their communities</li>
            <li>55% more likely to be enrolled in college than those who do not have a mentor</li>
            <li>46% less likely to start using drugs and 27% less likely to start drinking than their peers</li>
          </ul>
        </div>
        <div class="sm:col-span-4">
          <div class="bg-greythree p-8">
            <img src="https://nba.com/clippers/sites/clippers/files/mentor_ca_rgb_white_letters_hori2x.png" alt="">
          </div>
        </div>
      </div>
      <div class="grid sm:grid-cols-12 gap-12 mb-24">
        <div class="sm:col-span-8">
          <h2>How to become a mentor</h2>
          <ul>
            <li>Step 1: FILL OUT THE FORM to indicate the type of mentoring you're interested in. Click SEARCH</li>
            <li>Step 2: BROWSE THE PROGRAMS that have a need for your type of mentoring</li>
            <li>Step 3: CONTACT PROGRAM to get in touch with the organizations of interest to you</li>
          </ul>
        </div>
        <div class="sm:col-span-4">
          <a href="https://www.mentorcaliforniayouth.org/clippers" class="btn w-full text-center">Become a Mentor</a>
        </div>
      </div>

      <h2 class="text-center mb-4">Recent Photos</h2>
      <div class="sm:grid sm:grid-cols-12 mb-24">
        <div class="sm:col-start-3 sm:col-span-8 text-center">
          <MentorshipPhotoCarousel/>
        </div>
      </div>
      
      <h2 class="text-center mb-12">Recent Events</h2>
      <div class="grid sm:grid-cols-12 gap-12 mb-12">
        <div class="sm:col-span-3">
          <img src="https://via.placeholder.com/1600x900#EEE"/>
        </div>
        <div class="sm:col-span-7">
          <h2>Event Title Here</h2>
          <p>Event description event description event description event description event description event description event description event description event description event description event description event description event description.</p>
        </div>
        <div class="sm:col-span-2">
          <a href="#" class="btn w-full text-center">View Gallery</a>
        </div>
      </div>
      <div class="grid sm:grid-cols-12 gap-12 mb-12">
        <div class="sm:col-span-3">
          <img src="https://via.placeholder.com/1600x900#EEE"/>
        </div>
        <div class="sm:col-span-7">
          <h2>Event Title 2 Here</h2>
          <p>Event description event description event description event description event description event description event description event description event description event description event description event description event description.</p>
        </div>
        <div class="sm:col-span-2">
          <a href="#" class="btn w-full text-center">View Gallery</a>
        </div>
      </div>
      <div class="grid sm:grid-cols-12 gap-12 mb-12">
        <div class="sm:col-span-3">
          <img src="https://via.placeholder.com/1600x900#EEE"/>
        </div>
        <div class="sm:col-span-7">
          <h2>Event Title 3 Here</h2>
          <p>Event description event description event description event description event description event description event description event description event description event description event description event description event description.</p>
        </div>
        <div class="sm:col-span-2">
          <a href="#" class="btn w-full text-center">View Gallery</a>
        </div>
      </div>
      <div class="grid sm:grid-cols-12 gap-12 mb-12">
        <div class="sm:col-span-3">
          <img src="https://via.placeholder.com/1600x900#EEE"/>
        </div>
        <div class="sm:col-span-7">
          <h2>Event Title 4 Here</h2>
          <p>Event description event description event description event description event description event description event description event description event description event description event description event description event description.</p>
        </div>
        <div class="sm:col-span-2">
          <a href="#" class="btn w-full text-center">View Gallery</a>
        </div>
      </div>
      <div class="grid sm:grid-cols-12 gap-12 mb-12">
        <div class="sm:col-span-3">
          <img src="https://via.placeholder.com/1600x900#EEE"/>
        </div>
        <div class="sm:col-span-7">
          <h2>Event Title 5 Here</h2>
          <p>Event description event description event description event description event description event description event description event description event description event description event description event description event description.</p>
        </div>
        <div class="sm:col-span-2">
          <a href="#" class="btn w-full text-center">View Gallery</a>
        </div>
      </div>
      <div class="grid sm:grid-cols-12 gap-12 mb-12">
        <div class="sm:col-span-3">
          <img src="https://via.placeholder.com/1600x900#EEE"/>
        </div>
        <div class="sm:col-span-7">
          <h2>Event Title 6 Here</h2>
          <p>Event description event description event description event description event description event description event description event description event description event description event description event description event description.</p>
        </div>
        <div class="sm:col-span-2">
          <a href="#" class="btn w-full text-center">View Gallery</a>
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
