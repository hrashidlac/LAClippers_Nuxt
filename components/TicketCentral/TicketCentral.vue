<template>
  <div>     
    <div class="text-white uppercase flex flex-col justify-center items-center h-300 lg:h-500 bg-center bg-cover px-4" style="background-image: url(https://clippersweb.blob.core.windows.net/ticketcentral/img/hero.jpg)">
      <div class="header-year-logo">
        2021 <img class="icon inline -mt-2 lg:-mt-4 w-10 lg:w-auto" src="https://www.nba.com/resources/static/team/v2/clippers/custom/season-tickets/img/icon.png"> 2022
      </div>
      <h1>Ticket Central</h1>
      <div class="header-buttons">
        <div><a href="tel:+2132042900" class="phone-button">213-204-2900</a></div>
        <div><a href="mailto:fanassist@clippers.com" class="email-button">EMAIL US</a></div>
      </div>
    </div>
    <TicketSubNav/>
    <!-- Tiles -->
    <div class="row-full tiles">
      <div class="container">
        <div class="sm:grid sm:grid-cols-3 sm:gap-10">
          <div>
            <NuxtLink to="/seasontickets" class="tile-link">
              <div class="tile tile-seasontickets">
                <div class="tile-header">2022-2023 Season Tickets</div>
                <div class="tile-footer"><span>learn more</span></div>
              </div>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="/miniplans" class="tile-link">
              <div class="tile tile-miniplans">
                <div class="tile-header">2021-2022 Mini Plans</div>
                <div class="tile-footer"><span>learn more</span></div>
              </div>
            </NuxtLink>
          </div>
          <div>
            <NuxtLink to="/singlegametickets" class="tile-link">
              <div class="tile tile-sgt">
                <div class="tile-header">2021-2022 Single Game Tickets</div>
                <div class="tile-footer"><span>learn more</span></div>
              </div>
            </NuxtLink>
          </div>
          <div>
            <a href="https://www.nba.com/clippers/groups/tickets" class="tile-link">
              <div class="tile tile-groups">
                <div class="tile-header">Group Plans</div>
                <div class="tile-footer"><span>learn more</span></div>
              </div>
            </a>
          </div>
          <div>
            <a href="https://www.nba.com/clippers/suites" class="tile-link">
              <div class="tile tile-suites">
                <div class="tile-header">Suites</div>
                <div class="tile-footer"><span>learn more</span></div>
              </div>
            </a>
          </div>
          <div>
            <NuxtLink to="/membercenter" class="tile-link">
              <div class="tile tile-membercenter">
                <div class="tile-header">Member Center</div>
                <div class="tile-footer"><span>learn more</span></div>
              </div>
            </NuxtLink>
          </div>
          <div>
            <a href="https://www.nba.com/clippers/giveaways" class="tile-link">
              <div class="tile tile-giveaways">
                <div class="tile-header">Special Events & Giveaways</div>
                <div class="tile-footer"><span>learn more</span></div>
              </div>
            </a>
          </div>
          <div>
            <a href="https://www.nba.com/clippers/intuitdome" class="tile-link">
              <div class="tile tile-intuit">
                <div class="tile-header">Intuit Dome Priority Access</div>
                <div class="tile-footer"><span>learn more</span></div>
              </div>
            </a>
          </div>
          <div>
            <a href="https://www.nba.com/clippers/gameday" class="tile-link">
              <div class="tile tile-hs">
                <div class="tile-header">Health & Safety Guidelines</div>
                <div class="tile-footer"><span>learn more</span></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
    <!-- Download app -->
    <div class="row-full download-app">
      <div class="container">
        <div class="sm:grid sm:grid-cols-2 sm:gap-10">
          <div>
            <img src="https://clippersweb.blob.core.windows.net/ticketcentral/img/download-app.jpg" class="img-responsive">
          </div>
          <div>
            <div class="row">
              <div class="col-sm-10">
                <h2>MOBILE TICKETING</h2>
                <p>The LA Clippers use digital tickets for entry to home games. Manage your upcoming games through the LA Clippers App. <br/><a href="https://www.nba.com/clippers/digitaltickets">Learn More</a> </p>
              </div>
            </div>
            <div class="sm:grid sm:grid-cols-3 sm:gap-10">
              
              <div>
                <a href="https://itunes.apple.com/us/app/la-clippers/id521606689?mt=8" class="dl-btn"  type="button"><img alt="Download Clippers App from Apple App Store" src="https://www.nba.com/resources/static/team/v2/clippers/apple.png" class="img-responsive"></a>
              </div>
              <div>
                <a href="https://play.google.com/store/apps/details?id=com.lucidappeal.laclippers&hl=en_US" class="dl-btn"  type="button"><img alt="Download Clippers App for Google Play" src="https://www.nba.com/resources/static/team/v2/clippers/google-play.png" class="img-responsive"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row-full photos">
      <div class="container">
        <h2 class="text-center section-title"><span>FAN EXPERIENCES</span></h2>
        <div class="row">
          <div class="col-sm-12">
            <TicketCentralPhotos/>
          </div>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
    <!-- FAQ -->
    <div id="faq">
      <h2 class="text-center section-title"><span>FAQ's</span></h2>
    </div>
    <div class="container">
      <TicketCentralFAQ/>
    </div>
    <!-- Sign Up -->
    <div class="row-full row-full-sign-up">
      <div class="container">
        <div class="row">
          <div id="h-form">
            <h2>Want to Learn More?</h2>
            <p>Complete the signup form and we'll get in touch!</p>
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
    <!-- Contact -->
    <div class="row-full row-full-footer">
      <div class="container">
        <div class="row">
          <div class="col-xs-offset-1 col-sm-10 col-sm-offset-1 col-lg-6 col-lg-offset-3 contact">
            <div>
              <div class="icon">
                <a href="tel:+2132042900"><span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></a>
              </div>
              <div class="details">
                <span>Phone</span>
                <a href="tel:+2132042900">(213)-204-2900</a>
              </div>
            </div>
            <div>
              <div class="icon">
                <a href="mailto:fanassist@clippers.com"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a>
              </div>
              <div class="details">
                <span>Email</span>
                <a href="mailto:fanassist@clippers.com">FanAssist@Clippers.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style src="../../assets/css/ticketcentral/style.css" scoped></style>
