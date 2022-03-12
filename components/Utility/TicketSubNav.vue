<template>
  <div class="bg-greyeee text-black mb-8 hidden md:block">
    <div class="container flex justify-end">
      <NuxtLink to="/ticketcentral" class="link">Tickets</NuxtLink>
      <NuxtLink to="/singlegametickets" class="link">Single Game Tickets</NuxtLink>
      <NuxtLink to="/seasontickets" class="link">Season Tickets</NuxtLink>
      <NuxtLink to="/membercenter" class="link">Member Center</NuxtLink>
      <NuxtLink to="/miniplans" class="link">Miniplans</NuxtLink>
      <NuxtLink to="/groups" class="link">Group Tickets</NuxtLink>
      <NuxtLink to="/suites" class="link">Suites</NuxtLink>
    </div>
  </div>
</template>
<style scoped>
.link{
  @apply px-2 lg:px-4 xl:px-8 pt-4 pb-3 font-agency uppercase text-base lg:text-lg hover:bg-greyddd border-b-2 border-greyeee hover:border-greyddd;
}
.nuxt-link-active,
.nuxt-link-active:hover{
  @apply border-red;
}
</style>
