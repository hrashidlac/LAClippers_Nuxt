<template>
  <div> 
    <div class="text-white uppercase flex flex-col justify-center items-center h-300 lg:h-500 bg-center bg-cover px-4" style="background-image: url(https://clippersweb.blob.core.windows.net/seasontickets/img/hero.jpg)">
      <h1>Season Tickets</h1>
      <div class="flex">
        <img class="mvp mvp-asp" src="https://clippersweb.blob.core.windows.net/mvp/img/mvp_aspiration_horizontal_wht2.png" style="width:200px;">
        <div class="hidden md:block"><a href="https://shop.clippers.cloud/products/2022-2023-season-tickets-deposit" target="_blank" class="faq-button buy-now mx-8">Place a Deposit</a></div>
        <div class="hidden md:block"><a href="https://www.nba.com/clippers/premiumseats" target="_blank" class="buy-now buy-now-black">Secure Premium Seats</a></div>
      </div>
    </div>
    <div class="md:hidden">
        <div class="header-buttons header-buttons-mobile">
        <div><a href="https://shop.clippers.cloud/products/2022-2023-season-tickets-deposit" target="_blank" class="faq-button buy-now">Place a Deposit</a></div>
          <div><a href="https://www.nba.com/clippers/premiumseats" target="_blank" class="buy-now buy-now-black">Secure Premium Seats</a></div>
        </div>
      </div>
    <TicketSubNav/>
  <!-- Intro -->
  <div class="container">
    <div class="intro-text">
      <div class="sm:grid sm:grid-cols-12">
        <div class="sm:col-start-2 sm:col-span-10 text-center">
          <h3>The waitlist is now open for 2022-23 Season Membership. Securing your spot on the waitlist comes with incredible benefits, including, first-in-line privileges to the '22-23 Select-A-Seat Event and 2022 Playoff tickets. Your deposit also guarantees priority seat selection for our future home - Intuit Dome. If you would prefer to secure your seats for next season sooner, you can explore premium inventory options below. Your purchase of premium seats will immediately activate your 2022-23 Season Membership.</h3>
        </div>
      </div>
    </div>

    <!-- Row Tiles -->
    <div class="row tiles mt-12">
      <h2 class="text-center section-title"><span>MEMBER PERKS</span></h2>
      <div class="sm:grid sm:grid-cols-3 sm:gap-10">
        <div class="tile tile-2">
          <div>
          <div class="tile-lead"><img src="https://clippersweb.blob.core.windows.net/seasontickets/img/tile-3.png"><h2>SELECT-A-SEAT ACCESS</h2></div>
            <div><p>Your deposit guarantees your spot at our 2022-2023 Select-A-Seat Event where you will have the opportunity to choose the best seats available for your membership.</p></div>
          </div>
        </div>

        <div class="tile tile-3">
          <div>
          <div class="tile-lead"><img src="https://clippersweb.blob.core.windows.net/seasontickets/img/tile-2.png"><h2>2022 NBA PLAYOFFS</h2></div>
            <div><p>Your 2022-2023 season membership deposit unlocks first-in-line privileges to 2022 NBA Playoff tickets.</p></div>
          </div>
        </div>

        <div class="tile tile-1">
          <div>
            <div class="tile-lead"><img src="https://clippersweb.blob.core.windows.net/seasontickets/img/tile-1.png"><h2>Priority Access to Intuit Dome</h2></div>
            <div><p>The world's greatest fan, Steve Ballmer, is building the home court of our dreams and gifting it to you. Placing a deposit for 2022-23 Season Membership gets you priority access to seat selection at our future home, opening in fall 2024! Seat selection will begin as early as 2022.</p></div>
          </div>
        </div>
      </div>
      
      
      <div class="text-center"><a href="https://shop.clippers.cloud/products/2022-2023-season-tickets-deposit" class="buy-now buy-now-bgr" target="_blank">Place a Deposit</a></div>
    </div>
    <!-- Premium Inventory -->
    <div class="clearfix"></div>
    <div class="row text-center inventory">
      <div class="sm:grid sm:grid-cols-12">
        <div class="sm:col-start-3 sm:col-span-8 text-center">
          <h2 class="text-center section-title"><span>Premium Seats now Available</span></h2>
          <p class="">Securing premium seats for the 2022-23 season, guarantees your Season Membership and first-in-line privileges to seat selection at Intuit Dome. Seats selection for our future home will be made available as early as 2022! 
          <img src="https://clippersweb.blob.core.windows.net/seasontickets/img/Membership_Benefits_Seating_Chart_Premium.png" class="img-responsive prem-chart">
          <a href="https://www.nba.com/clippers/premiumseats" class="buy-now buy-now-bgr" target="_blank">Secure Premium Seats</a></p>
        </div>
      </div>
    </div>  
  
    <!-- Intuit Dome Carousel -->    
    <div class="clearfix"></div>
    <div class="row intuit-dome">
      <h2 class="text-center section-title"><span>EXCEPTIONAL EXPERIENCE, UNBELIEVABLE INTENSITY</span></h2>
      <p class="lead-p text-center">The Intuit Dome will open for the 2024-25 Season. Below are a few features you can expect at our future home.
      <div class="lead-carousel">
        <SeasonTicketsIntuitDomeCarousel/>
      </div>
    </div>
  </div>

  <!-- Learn More -->
  <div class="clearfix responsive-tabs"></div>
  <div class="row-full learn-more">
    <!-- <img class="img-responsive visible-xs aos-item" data-aos="fade-up" src="https://clippersweb.blob.core.windows.net/seasontickets/img/learn-more-mobile2.jpg"> -->
    <div class="container">
      <div class="sm:flex sm:justify-end">
        <div class="sign-up-form aos-item" data-aos="fade-up">
          <h2 class="text-center section-title want-more">Want to Learn More?</h2>
          <p class="text-center">Complete the signup form and we'll get in touch!</p>
          <div data-form-block-id="4e03f898-feeb-eb11-bacb-000d3a5aa2ae"></div> 
          <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.74.2001.0"></script> 
          <div id="dsvktaqi_3l5Ox0GJuGMluvJ4TT2UPx0J8McBZJLsCxw"></div>
          <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/ws-tracking.js?v=1.74.2001.0"></script>
          <div class="d365-mkt-config" style="display:none" data-website-id="svktaqi_3l5Ox0GJuGMluvJ4TT2UPx0J8McBZJLsCxw" data-hostname="aa8d20baa12c40e281518e9e92b636ad.svc.dynamics.com">
          </div>  
        </div>
      </div>
    </div>  
  </div>

  <div class="clearfix"></div>
    <!-- Why Join -->
    <div class="container">
      <div class="why-join">
        <div><h2 class="text-center section-title"><span>WHY JOIN</span></h2></div>
        <div class="sm:grid sm:grid-cols-2">
          <div class="aos-item" data-aos="fade-up">
            <img class="img-responsive" src="https://clippersweb.blob.core.windows.net/seasontickets/img/why-join-1.jpg" alt="Exceptional Experiences" loading=lazy>
          </div>
          <div class="aos-item" data-aos="fade-up">
            <div class="why-join-text">
              <h4>EXCEPTIONAL EXPERIENCES</h4>
              <p class="bigger">Enjoy access exclusive to MVP Members. From events with the team, to Member offers and dedicated service, your Membership will deliver exceptional experiences all season long. 
              </p>
            </div>
          </div>
        </div>
        <div class="sm:grid sm:grid-cols-2">        
          <div class="sm:order-last aos-item" data-aos="fade-up">
            <img class="img-responsive" src="https://clippersweb.blob.core.windows.net/seasontickets/img/why-join-2.jpg" alt="Building Memories" loading=lazy>
          </div>
          <div class="aos-item" data-aos="fade-up">
            <div class="why-join-text">
              <h4>BUILDING MEMORIES</h4>
              <p class="bigger">Clipper Nation MVP Membership will make every family member an official fan. 
                Family time doesn't get much better than unforgettable moments supporting the team at home!
              </p>
            </div>
          </div>
        </div>
        <div class="sm:grid sm:grid-cols-2">
          <div class="aos-item" data-aos="fade-up">
            <img class="img-responsive" src="https://clippersweb.blob.core.windows.net/seasontickets/img/why-join-3.jpg" alt="L.A. OUR WAY" loading=lazy>
          </div>
          <div class="aos-item" data-aos="fade-up">
            <div class="why-join-text">
              <h4>L.A. OUR WAY</h4>
              <p class="bigger">Show your team, friends, or clients what L.A. Our Way is all about. 
                There's nothing like the experience of a Clippers game to get your crew fired up. 
              </p>
            </div>
          </div>
        </div>
      </div>
  </div>

  <div class="clearfix"></div>
  <!-- Testimonials Carousel -->
  <div class="row-full row-full-testimonials">

    <div class="container">
      <SeasonTicketsTestimonials/>
    </div>
  </div>  
  <div class="clearfix"></div>
  <!-- FAQ -->
  <div class="container">
    <div id="faq"><h2 class="text-center section-title"><span>FAQ's</span></h2></div>
    <SeasonTicketsFAQ/>
  </div>
  <!-- Ticket Contact -->
  <TicketContact/>
</div>
  
</template>
<script>
import SeasonTicketsIntuitDomeCarousel from './SeasonTicketsIntuitDomeCarousel.vue';

export default {
  components: { SeasonTicketsIntuitDomeCarousel },
  
  data() {
    return {
    }
  }
}
</script>
<style src="../../assets/css/seasontickets/style.css" scoped></style>