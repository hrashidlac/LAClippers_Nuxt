<template>
  <div class="bg-greyeee text-black mb-12">
    <div class="container flex justify-end">
      <NuxtLink to="/community/mentorship" class="link">Mentorship</NuxtLink>
      <NuxtLink to="/community/education" class="link">Education</NuxtLink>
      <NuxtLink to="/community/outreach" class="link">Coummunity Outreach</NuxtLink>
      <NuxtLink to="/community/foundation" class="link">Foundation</NuxtLink>
      <NuxtLink to="/community/school-program" class="link">School Program</NuxtLink>
      <a href="#" class="link">Youth Basketball</a>
    </div>
  </div>
</template>
<style scoped>
.link{
  @apply px-8 pt-4 pb-3 font-agency uppercase text-lg hover:bg-greyddd border-b-2 border-greyeee hover:border-greyddd;
}
.nuxt-link-active,
.nuxt-link-active:hover{
  @apply border-red;
}
</style>
