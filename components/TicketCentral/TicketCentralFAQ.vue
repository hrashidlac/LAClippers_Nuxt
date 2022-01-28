<template>
  <div> 
    <VueFaqAccordion 
      :items="myItems"
    />
  </div>
</template>
<script>

import VueFaqAccordion from 'vue-faq-accordion'

export default {
  
  data() {
    return {
      myItems: [
        {
          title: 'WHEN WILL PLAYOFF SEATS BE AVAILABLE FOR PURCHASE?',
          value: 'Members have priority to purchase tickets for the NBA Playoffs each season. For more information, please call (213) 204-2800 to speak with a sales representative directly.',
        },
        {
          title: 'WHAT HEALTH AND SAFETY PROTOCOLS ARE IN PLACE AT CRYPTO.COM ARENA?',
          value: 'Crypto.com Arena is committed to following the highest standard of safety. For information on protocols in place, please visit <a href="https://www.cryptoarena.com/SAFE" target="_blank">www.cryptoarena.com/SAFE</a> or <a href="https://www.nba.com/clippers/gameday">www.clippers.com/gameday</a>.',
        },
        {
          title: 'IS THERE A GENERAL LINE OR EMAIL I CAN USE TO GET IN CONTACT WITH THE SALES DEPARTMENT REGARDING SEASON TICKET MEMBERSHIPS?',
          value: 'Yes, you can call in to speak with someone directly at (213) 204-2800 or email us at <a href="mailto:sales@clippers.com">sales@clippers.com</a>',
        },
        {
          title: 'WHAT IS THE BEST WAY TO BUILD PRIORITY TOWARDS THE INTUIT DOME IN 2024? ',
          value: 'The best way to gain priority access to the Intuit Dome in 2024 is to become a Season Ticket Member. All our current members will have first rights to Clippers Memberships when we move to our new home!',
        },
        {
          title: 'IS THERE AN OPPORTUNITY TO COME TO THE ARENA TO SEE SEASON TICKET AVAILBLITY? ',
          value: 'Yes! Please give our sales team a call to discuss our seating options! (213) 204-2800',
        },
        {
          title: 'WHERE CAN I FIND A SEATING CHART OF Crypto.com Arena ?',
          value: 'The Crypto.com Arena seating chart is located <a href="https://www.cryptoarena.com/events/seating-charts">here</a>.',
        }
      ]
    }
  }
}
</script>
<style src="../../assets/css/seasontickets/faq-style.css"></style>