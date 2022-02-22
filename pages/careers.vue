<template>
  <div>
    <Header />
    <nav>
      <ul class="flex align-center justify-center p-0">
        <li class="mx-10">
          <NuxtLink to="/careers/openpositions">Open Positions</NuxtLink>
        </li>
        <li class="mx-10">
          <NuxtLink to="/careers/insidesales">Inside Sales</NuxtLink>
        </li>
        <li class="mx-10">
          <NuxtLink to="/careers/businessoperationsinternship">Business Operations Internship</NuxtLink>
        </li>
        <li class="mx-10">
          <NuxtLink to="/careers/gamenightstaff">Game Night Staff</NuxtLink>
        </li>
      </ul>
    </nav>
    <NuxtChild  />
  </div>
</template>

<style scoped>

</style>
