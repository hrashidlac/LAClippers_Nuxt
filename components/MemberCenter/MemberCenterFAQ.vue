<template>
  <div class="container"> 
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
          title: 'Can I Donate my Tickets?',
          value: '<img src="https://clippersweb.blob.core.windows.net/mvp/img/icons/Donation_Program.png" alt="Ticket Donations" style="float:right; margin:0 0 10px 20px; max-width:100px;">Are you a Clippers MVP season ticket holder who is looking for a way to give back to your local communities? If so, you can partner with the LA Clippers and help to impact youth in Los Angeles!<p>Contribute your unused season tickets on a game-to-game basis and provide youth with the chance to attend a Clippers home game. <p>If you know your tickets will go unused, please contact your Season Ticket Representative for more info on how you can help make an impact in Los Angeles.  MVP Members will receive a donation receipt for tickets donated during the season.',
        },
        {
          title: 'How will my monthly payment plan work?',
          value: 'Effective your first payment date, your existing payment method on file will be charged monthly. Payments will be charged in equal installments on the 15th of each month for the billing cycle duration until January 2023. Monthly payments will be determined by the Membership pricing in effect at the time of renewal. Prices will be communicated in advance of each new billing cycle. Additionally, by enrolling in monthly payments, you are also automatically opted into renewing your Membership and securing your seats for the next season. If you do not wish to renew automatically, you will have the opportunity to opt-out before the next renewal deadline. You can opt-out by calling your MVP Account Manager directly, or the Membership Service line at (213) 204-2950.',
        },
        {
          title: 'How do I update my payment method?',
          value: 'You can update your payment method by contacting your MVP Account Manager directly or contact the Membership Service line at (213) 204-2950, or via e-mail at <a href="mailto:mvpmembers@clippers.com">mvpmembers@clippers.com</a>',
        },
        {
          title: 'How can I add additional seats to my account for next season?',
          value: 'If you are interested in adding additional seats to your Membership, please contact your MVP Account Manager, and they will assist you with seating options and updates to your Membership.',
        },
        {
          title: 'When will Playoff Seats Be Available for Purchase? ',
          value: 'Members have first priority to purchase tickets for the NBA Playoffs. Availability will be communicated as Playoffs approach. For more information, contact your rep.',
        },
        {
          title: 'How do I improve my seating location for next season?',
          value: 'All Members who renew for the next season are eligible to participate in our Member Seat Relocation event in the spring. Seat Relocation offers Members the opportunity to view open seats and select new seats for the upcoming season. Member tenure determines priority in selection rights at the event.',
        },
        {
          title: 'What health and safety protocols are in place at Crypto.com Arena?   ',
          value: 'Crypto.com Arena is committed to following the highest standard of safety <strong>. </strong>For information on protocols in place, please visit <a href="https://www.cryptoarena.com/SAFE">www.cryptoarena.com/SAFE</a>',
        },
        {
          title: 'How do I receive the latest updates on benefits and events open to me as a season ticket member?',
          value: 'Information about benefits and events is sent to season ticket members primarily through email to your address associated with your seats. If you have any questions on your benefits or upcoming MVP Member events, please contact your Account Manager.',
        },
        {
          title: 'What if I am not receiving MVP Member e-newsletters?',
          value: 'If MVP Member emails are not reaching your inbox it could be due to spam or junk mail filters, a full inbox, or an incorrect email address on file. First, try adding both your rep’s email address, and <a href="mailto:mvpmembers@clippers.com">mvpmembers@clippers.com</a> to your email contacts or address book and check your spam or junk mail folder for MVP Member messages. If this does not work contact your Account Manager or the Clippers Membership Office at 213-204-2950.',
        },
        
      ]
    }
  }
}
</script>
<style src="../../assets/css/seasontickets/faq-style.css"></style>