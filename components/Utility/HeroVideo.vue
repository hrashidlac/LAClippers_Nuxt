<template>
  <div>
    <div class="relative w-full h-50">
      <video class="w-full h-50 object-cover top-0" autoplay="autoplay" muted="muted" playsinline="" loop="loop" preload="auto">
        <source :src="backLink" type="video/mp4">
      </video>
      <div class="w-full h-50 absolute top-0 left-0 z-10" style="background-image: linear-gradient(45deg, rgba(0,0,0,.3) 50%, rgba(0,0,0,.7) 50%); background-size: 3px 3px;">
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

