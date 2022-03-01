<template>
  <div>
    <Header />
    <nav>
      <ul class="flex align-center justify-center p-0">
        <li class="mx-4">
          <a href="#">Youth Basketball</a>
        </li>
        <li class="mx-4">
          <NuxtLink to="/community/mentorship">Mentorship</NuxtLink>
        </li>
        <li class="mx-4">
          <NuxtLink to="/community/education">Education</NuxtLink>
        </li>
        <li class="mx-4">
          <NuxtLink to="/community/outreach">Coummunity Outreach</NuxtLink>
        </li>
        <li class="mx-4">
          <NuxtLink to="/community/foundation">Foundation</NuxtLink>
        </li>
        <li class="mx-4">
          <NuxtLink to="/community/school-program">School Program</NuxtLink>
        </li>
      </ul>
    </nav>
    <NuxtChild  />
  </div>
</template>

<style scoped>

</style>
