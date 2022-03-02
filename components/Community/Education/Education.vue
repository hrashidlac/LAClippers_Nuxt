<template>
  <div>
    <div class="hero text-white uppercase flex flex-col justify-center items-center h-300 lg:h-500 bg-top bg-cover px-4" style="background-image: url(https://www.nba.com/resources/static/team/v2/clippers/custom/school-programs/hero.jpg)">
        <h1 class="mt-16">Education<br>Programs</h1>
        <h2>Join the LA clippers community!</h2>
    </div>
    <CommunitySubNav/>
    <div class="container">
      <div class="grid sm:grid-cols-12 gap-8 mb-16">
        <div class="sm:col-span-2">
          <img src="https://www.nba.com/resources/static/team/v2/clippers/custom/school-programs/logo-1.png"/>
        </div>
        <div class="sm:col-span-8">
          <h2 class="mb-4">READ TO ACHIEVE PROGRAM</h2>
          <p>The LA Clippers Read to Achieve Program is designed to promote the importance of literacy. The program goal is to build a lifelong love of reading in young people by providing greater access to books and technology while encouraging families and adults to read regularly with young children. The LA Clippers challenge students in elementary and middle schools to take time out to read during the Read to Achieve Minutes Challenge. Each participating student is asked to track the number of minutes they spend reading during the 6-week program.</p>
        </div>
        <div class="sm:col-span-2">
          <a href="#" class="btn btn-sm w-full text-center">Learn More</a>
        </div>
      </div>
      <div class="grid sm:grid-cols-12 gap-8 mb-16">
        <div class="sm:col-span-2">
          <img src="https://www.nba.com/resources/static/team/v2/clippers/custom/school-programs/logo-2.png"/>
        </div>
        <div class="sm:col-span-8">
          <h2 class="mb-4">Math Hoops</h2>
          <p>LA Clippers Math Hoops is a fast-paced basketball board game and mobile app that allows students to learn fundamental math skills through direct engagement with the real statistics of their favorite players. The NBA Math Hoops curriculum is tied to Common Core State Standards and 21st Century Learning Skills, and it has been shown to improve students' basic math skills and understanding of statistics, in addition to their interpersonal skills, driving them to collaborate more effectively with their peers. </p>
        </div>
        <div class="sm:col-span-2">
          <a href="#" class="btn btn-sm w-full text-center">Learn More</a>
        </div>
      </div>
      <div class="grid sm:grid-cols-12 gap-8 mb-16">
        <div class="sm:col-span-2">
          <img src="https://www.nba.com/resources/static/team/v2/clippers/custom/school-programs/logo-4.png"/>
        </div>
        <div class="sm:col-span-8">
          <h2 class="mb-4">SCHOLARSHIP PROGRAM</h2>
          <p>The LA Clippers are pleased to offer an opportunity to assist college-bound students. Six $4,000 Stay In School Scholarships will be offered to seniors planning to attend a four-year college beginning in the fall of 2019. Scholarships will be made available to students residing in the greater Los Angeles area. Below are your 2018-19 Stay in School Scholarship recipients. </p>
        </div>
        <div class="sm:col-span-2">
          <a href="#" class="btn btn-sm w-full text-center">Apply Now</a>
        </div>
      </div>
      <div class="grid sm:grid-cols-12 gap-8 mb-16">
        <div class="sm:col-span-2">
          <img src="https://www.nba.com/resources/static/team/v2/clippers/custom/school-programs/logo-5.png"/>
        </div>
        <div class="sm:col-span-8">
          <h2 class="mb-4">TEACHER APPRECIATION</h2>
          <p>The LA Clippers Teacher Appreciation Program recognizes outstanding teachers for their hard work and dedication. Schools that participate in the Clippers education outreach program, Read to Achieve, nominate teachers to be honored as part of this special program. Each nominated teacher will be recognized in an on-court presentation prior to a Clippers home game this season.</p>
        </div>
        <div class="sm:col-span-2">
          <a href="https://laclippers-forms.formstack.com/forms/teacher_appreciation_2122_nominationform" class="btn btn-sm w-full text-center mb-8">Nominate a Teacher</a>
          <NuxtLink to="/community/education/teacher-appreciation" class="btn btn-sm btn-outline-dark w-full text-center">Learn More</NuxtLink>
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
