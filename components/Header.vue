<template>
  <div class="header-links">
    <NuxtLink  to="/" class="link">Single Game Tickets</NuxtLink > |
    <NuxtLink  to="/giveaways" class="link">Giveaway</NuxtLink >|
    <NuxtLink  to="/miniplans" class="link">Miniplans</NuxtLink >|
    <NuxtLink  to="/seasontickets" class="link">SeasonTickets</NuxtLink >|
    <NuxtLink  to="/cityedition" class="link">City</NuxtLink >|
    <NuxtLink  to="/ticketcentral" class="link">Ticket Central</NuxtLink >|
    <NuxtLink  to="/membercenter" class="link">Member Center</NuxtLink >|
    <NuxtLink  to="/kidsclub" class="link">Kids Club</NuxtLink >
    <br/>
  </div>
</template>
<style scoped>
.header-links{
  margin-top: 10px;
  padding: 0px 10px 10px 10px;
}
.link{
  text-decoration: none;
  font-family: "Agency fb";
  font-size: 14px;
  margin:0 10px;
  color: #000;
}
.link:hover{
  color: red;
}
</style>
