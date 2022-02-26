<template>
  <div>
    <div class="text-white uppercase flex flex-col justify-center items-center h-300 lg:h-500 bg-center bg-cover px-4" style="background-image: url(https://clippersweb.blob.core.windows.net/slamsquad/img/Slam-Squad-Hero.jpg)">
      <h1 class="">Slam Squad</h1>     
      <!-- <img src="https://clippersweb.blob.core.windows.net/hooptroop/img/HoopTroop-Logo.png" alt="" class="mx-auto max-w-[60%] -mt-8 md:max-w-[30%]"> -->
    </div>
    <div class="container mt-12">
      <h4 class="font-avenir mb-8">
        The Clippers Slam Squad is a team of high-flying, high-energy, trampoline dunkers that electrifies Clipper Nation at home games! When these athletes are not flying, tumbling, flipping, and slam dunking at the STAPLES Center, they can ELEVATE your next event and leave your guests on the edge of their seats. Are you ready? 
      </h4>
    </div>
    <div class="container mt-12">
      <SlamSquadPhotos />
    </div>
    <div class="container mt-24">
      <div class="mx-auto">
        <iframe src="https://laclippers-forms.formstack.com/forms/slam_squad_booking_request" title="Slam Squad Booking Request" width="600" height="2200" class="mx-auto"></iframe>
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
@media (max-width: 767px){
  iframe{
    width:100%;
  }
} 
</style>
