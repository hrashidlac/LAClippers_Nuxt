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
          title: 'How will my monthly payment plan work?',
          value: 'Payments will be charged in equal installments on the 15th of each month for the billing cycle duration until January 2023. By enrolling in monthly payments, you are also automatically opted into renewing your Membership and securing your seats for the next season. Prices will be communicated in advance of each new billing cycle. The Membership pricing will determine monthly payments in effect at the time of renewal. If you do not wish to renew automatically, you will have the opportunity to opt out before the renewal deadline. You can opt out by calling your MVP Account Manager directly or the Membership Service line at (213) 204-2950.',
        },
        {
          title: 'When will Playoff seats be available for purchase?',
          value: 'Members have first priority to purchase tickets for the NBA Playoffs each season. For more information, please call (213) 204-2800 to speak with a sales representative directly.',
          
        },
        {
          title: 'What health and safety protocols are in place at Crypto.com Arena? ',
          value: 'Crypto.com Arena is committed to following the highest standard of safety. For information on protocols in place, please visit <a href="https://www.cryptoarena.com/SAFE" target="_blank">www.cryptoarena.com/SAFE</a>. ',      
        },
        {
          title: 'Is there a general line or email I can use to get in contact with the sales department regarding Season Ticket Memberships?',
          value: 'Yes, you can call in to speak with someone directly at (213) 204-2800 or email us at <a href="mailto:sales@clippers.com">sales@clippers.com</a> ',      
        },
        {
          title: 'What is the best way to build priority towards the new arena?',
          value: 'The best way to gain priority access to the Clippers new arena is to become a Season Ticket Member. All our current members will have first rights to Clippers Memberships when we move to our new home!',      
        },
        {
          title: 'Is there an opportunity to come to the arena to see my seating location?',
          value: 'We are currently scheduling virtual meetings to assist future members with the selection of their seats. We are working with Crypto.com Arena and LA County officials to keep all our fans, staff, and players as safe as possible.',      
        },
        {
          title: 'When will the NBA schedule be released?',
          value: 'The NBA schedule is typically released sometime in August.',      
        },
        {
          title: 'Where can I find a seating chart of Crypto.com Arena?',
          value: 'The Crypto.com Arena seating chart is located <a href="https://www.cryptoarena.com/events/seating-charts" target="_blank">here</a>.',      
        }
      ]
    }
  }
}
</script>
<style src="../../assets/css/seasontickets/faq-style.css"></style>