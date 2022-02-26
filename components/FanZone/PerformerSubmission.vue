<template>
  <div>
    <div class="text-white uppercase flex flex-col justify-center items-center h-300 bg-center bg-cover px-4 py-12 sm:py-0" style="background-image: url(https://clippersweb.blob.core.windows.net/collegenights/img/2880x1000_CollegeNight_Header.jpg)">
      <h1 class="sm:text-5xl">Performer Submission Form</h1>
    </div>
    <div class="container mt-12">
      <div class="mx-auto lg:w-1/2">
        <iframe src="https://laclippers-forms.formstack.com/forms/performer_submission_page" title="Performer Submission Page" width="600" height="1500"></iframe>
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
@media (max-width: 767px){
  iframe{
    width:100%;
  }
} 
</style>