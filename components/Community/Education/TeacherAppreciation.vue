<template>
  <div>
    <div class="hero text-white uppercase flex flex-col justify-center items-center h-300 lg:h-500 bg-top bg-cover px-4" style="background-image: url(https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/teacher-appreciation-hero.jpg)">
      <div class="container text-center">
        <img src="https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/carmaxlogo.png" class="w-48 mx-auto mb-4">
        <h1 class="mb-4">Teacher<br>Appreciation</h1>
        <h3 class="mb-4">THE LA CLIppers are recognizing teachers for their dedication and hard work during the 2021-22 school year</h3>
        <a href="https://laclippers-forms.formstack.com/forms/teacher_appreciation_2122_nominationform" class="btn">Nominate a Teacher</a>
      </div>
    </div>
    <CommunitySubNav/>
    <div class="container">
      <div class="grid sm:grid-cols-12 gap-8 mb-16">
        <div class="sm:col-span-4">
          <h2>Teacher Spotlight</h2>
          <img src="https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/750x750_2021_TeacherAppreciation.jpg"/>
        </div>
        <div class="sm:col-span-8">
          <h2 class="mb-2">brittnie vargas-ortiz</h2>
          <h3 class="mb-4">kipp sol academy, Social Studies</h3>
          <h4 class="uppercase">What made you choose Teaching as a career path?</h4>
          <p>I went into teaching because of the amazing teaching I had growing up. I was lucky enough to have a lot of teachers who went above and beyond and who taught with so much joy, passion, and high expectations. Their love for teaching was contagious and inspired me to be a teacher.</p>
          <h4 class="uppercase">What is your favorite part of being an educator?</h4>
          <p>My favorite part of being an educator is building life long relationships with students and their families. I love hearing about college acceptances, high school graduations, first jobs and all the amazing things my students are doing throughout their lives. It makes me feel so blessed to be able to be a part of their life. </p>
        </div>
      </div>
      <TeacherSpotlightGallery-12-21/>
      <TeacherSpotlightGallery-20-21/>
      <TeacherSpotlightGallery-19-20/>
      <TeacherSpotlightGallery-16-17/>
      <TeacherSpotlightGallery-15-16/>
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
