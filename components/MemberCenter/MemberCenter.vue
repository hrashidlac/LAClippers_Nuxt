<template>
  <div>
    <div class="text-white uppercase flex flex-col justify-center items-center h-300 lg:h-500 bg-center bg-cover px-4" style="background-image: url(https://clippersweb.blob.core.windows.net/mvp/img/hero.jpg)">
      <h1>Member Center</h1>
      <div class="flex">
        <img class="mvp mvp-asp" src="https://clippersweb.blob.core.windows.net/mvp/img/mvp_aspiration_horizontal_wht2.png" style="width:200px;">
        <div><a href="#" class="faq-button buy-now">MVP FAQ</a></div>
        <div><a href="https://fanaccount.axs.com/?skin=clippers" target="_blank" class="buy-now buy-now-black">MEMBER LOGIN <span class="glyphicon glyphicon-new-window"></span></a></div>
      </div>
    </div>
    <UtilityTicketSubNav/>
    <!-- Intro -->
    <div class="intro-text container">
      <div class="row">
        <div class="col-xs-12 col-sm-10 col-sm-offset-1 text-center">
          <h3>It's time to renew your 2022-23 Clippers Season Membership. Secure your seats for another season of action-packed Clippers basketball and guarantee your priority access to our future home, Intuit Dome. Seat selection for Intuit Dome starts in 2022, lock-in your tenure with your 2022-23 Clippers season tickets.</h3>
          <div class="ph-em">
            <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span>
            <a href="tel:+2132042950">(213)-204-2950</a> 
            <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
            <a href="mailto:mvpmembers@clippers.com">MVPMembers@Clippers.com</a>
          </div>
        </div>
      </div>
    </div>
    <div class="intro-text container">
      <div class="row">
        <div class="text-center">
          <h2 class="text-center section-title"><span>FINALLY, TRUE HOME-COURT ADVANTAGE</span></h2>
          <h3>Your 2022-23 Clippers Season Membership Guarantees Priority Access to Intuit Dome.</h3>
          <div class="lead-carousel">
            <SeasonTicketsIntuitDomeCarousel/>
          </div>
        </div>
      </div>
    </div>
    <!-- Benefits -->
    <div class="clearfix responsive-tabs"></div>
    <div class="benefits container">
      <div><h2 class="text-center section-title"><span>Core Benefits</span></h2></div>        
      <div class="sm:grid sm:grid-cols-2 sm:gap-16">
        <div class="benefits-item">
          <div><img src="https://clippersweb.blob.core.windows.net/mvp/img/icons/playoff-priority.png" alt="Playoff Priority"></div>
          <div>
            <h3>PRIORITY ACCESS TO PLAYOFF TICKETS</h3>
            <p>Your MVP Membership guarantees you first-in-line access to ticket presales. </p>
          </div>
        </div>
        <div class="benefits-item">
          <div><img src="https://clippersweb.blob.core.windows.net/mvp/img/icons/ticket.png"></div>
          <div>
            <h3>MANAGING YOUR TICKETS HAS NEVER BEEN EASIER </h3>
            <p>With Clippers digital ticketing, you can transfer or resell the games you can't make in just a few simple clicks.  </p>
          </div>
        </div>
        <div class="benefits-item">
          <div><img src="https://clippersweb.blob.core.windows.net/mvp/img/icons/managing-tickets.png"></div>
          <div>
            <h3>Seat Relocation</h3>
            <p>Our Members receive first-in-line access to seat upgrades for next season.</p>
          </div>
        </div>
        <div class="benefits-item">
          <div><img src="https://clippersweb.blob.core.windows.net/mvp/img/icons/member-events.png" alt="Member Events"></div>
          <div>
            <h3>MEMBER EVENTS AND EXPERIENCES</h3>
            <p>Enjoy exclusive invites to special events with local partners, players, and coaches.</p>
          </div>
        </div>
        <div class="benefits-item">
          <div><img src="https://clippersweb.blob.core.windows.net/mvp/img/icons/surprise.png" alt="Account Manager"></div>
          <div>
            <h3>Special Event Items</h3>
            <p>Access to purchase <a href="https://www.nba.com/clippers/specialevents">special event items</a> before the season begins so you don't miss out on the limited-stock keepsakes and gear from the season.</p>
          </div>
      </div>
      <div class="benefits-item">
        <div><img src="https://clippersweb.blob.core.windows.net/mvp/img/icons/red-carpet.png" alt="Row 1 Benefit"></div>
        <div>
          <h3>Open Practice Event</h3>
          <p>Celebrate the upcoming season with fellow MVP Members, Players, and Coaches.</p>
        </div>
      </div>
      <div class="benefits-item">
        <div><img src="https://clippersweb.blob.core.windows.net/mvp/img/icons/red-carpet.png" alt="Row 1 Benefit"></div>
        <div>
          <h3>Member Gifting</h3>
          <p>Members will receive exclusive gifting throughout key moments of the year including City Edition reveal, start of the Regular season and Playoffs.</p>
        </div>
      </div>
      <div class="benefits-item">
        <div><img src="https://clippersweb.blob.core.windows.net/mvp/img/icons/tags-outline.png" alt="Account Manager"></div>
        <div>
          <h3>Clippers Fan Shop Discount</h3>
          <p>10+ years / 20%<br/>
            4-9 years / 15%<br/>
            1-3 years / 10%</p>
        </div>
      </div>
      <div class="benefits-item cv">
        <div><img src="https://clippersweb.blob.core.windows.net/mvp/img/icons/cv.png" alt="Court Vision"></div>
        <div>
          <h3>Clippers Courtvision</h3>
          <p>Watch your Clippers play home or away with advanced stats through a free Clippers CourtVision subscription.</p>
        </div>
      </div>
      <div class="benefits-item">
        <div><img src="https://clippersweb.blob.core.windows.net/mvp/img/icons/clap.png" alt="Private Entrance"></div>
        <div>
          <h3>In Game Experiences</h3>
          <p>Members have exclusive access to sign up for unique experiences throughout the season.</p>
        </div>
      </div>
    </div>
    </div>
    <!-- Plans -->
    <div class="clearfix responsive-tabs"></div>
    <div class="plans container">
      <div><h2 class="text-center section-title"><span>Membership Plan Benefits</span></h2></div> 
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 text-center">
        <p>Membership Plan benefits are in addition to Core benefits and based upon seating location. Select "View Seating Map" to see what specific benefits are included in each seating location.  
        </p>
      </div>
      <div class="clearfix"></div>
      <div>
        <div class="plans-header">
          <div class="plan-item">
            <div class="plan-name"></div>
            <div class="col-a">Courtside</div>
            <div class="col-b">Platinum</div>
            <div class="col-c">Gold</div>
          </div>
        </div>
        <div class="plans-content">
          <div class="plan-item first">
            <div class="plan-name">Access to Core Benefits</div>
            <div class="col-a ch"></div>
            <div class="col-b ch"></div>
            <div class="col-c ch"></div>
          </div>  
          <div class="plan-item">
            <div class="plan-name">Dedicated Account Manager</div>
            <div class="col-a ch"></div>
            <div class="col-b ch"></div>
            <div class="col-c ch"></div>
          </div>  
          <div class="plan-item">
            <div class="plan-name">Season Ticket Member Club Access*</div>
            <div class="col-a ch"></div>
            <div class="col-b ch"></div>
            <div class="col-c ch"></div>
          </div>
          <div class="plan-item">
            <div class="plan-name">20% off Legends Box at the Forum</div>
            <div class="col-a ch"></div>
            <div class="col-b ch"></div>
            <div class="col-c"></div>
          </div>  
          <div class="plan-item">
            <div class="plan-name">Exclusive Post Game Court Time Experience</div>
            <div class="col-a ch"></div>
            <div class="col-b ch"></div>
            <div class="col-c"></div>
          </div>  
          <div class="plan-item">
            <div class="plan-name">Valet Parking (Row 1 Only)</div>
            <div class="col-a ch"></div>
            <div class="col-b"></div>
            <div class="col-c"></div>
          </div>  
          <div class="plan-item">
            <div class="plan-name">Name on Hardwood (Row 1 Only)</div>
            <div class="col-a ch"></div>
            <div class="col-b"></div>
            <div class="col-c"></div>
          </div>  
          <div class="plan-item">
            <div class="plan-name">Exclusive Courtside Events</div>
            <div class="col-a ch"></div>
            <div class="col-b"></div>
            <div class="col-c"></div>
          </div>  
          <div class="plan-item">
            <div class="plan-name">Private Entrance to the Arena</div>
            <div class="col-a ch"></div>
            <div class="col-b"></div>
            <div class="col-c"></div>
          </div>  
          <div class="plan-item">
            <div class="plan-name">All-Inclusive In-Seat Service</div>
            <div class="col-a ch"></div>
            <div class="col-b"></div>
            <div class="col-c"></div>
          </div> 
          <div class="plan-item">
            <div class="plan-name">Courtside Club Access</div>
            <div class="col-a ch"></div>
            <div class="col-b"></div>
            <div class="col-c"></div>
          </div>         
        </div>
        <div class="plans-footer">
          <div class="plan-item">
            <div class="plan-name">
              <span class="hidden-xs">
                *Season Ticket Member Club Access is only available for a select few Gold Plan locations, contact your rep for more details.</span>
            </div>
            <div class="col-a">
              <MemberCenterCourtsideModal/>     
            </div>
            <div class="col-b">
              <MemberCenterPlatinumModal/> 
            </div>
            <div class="col-c">
              <MemberCenterGoldModal/>  
            </div>
          </div>
        </div>
        <span class="plans-footer visible-xs">
          *Season Ticket Member Club Access is only available for a select few Gold Plan locations, contact your rep for more details.
        </span>
      </div>
    </div>

    <!-- Experience -->
    <div id="photos" class="row-full photos"> 
      <div class="container">
        <h2 class="text-center section-title section-title-white">The Membership Experience</h2>
        <div>
          <MemberCenterPhotos/>
        </div>
      </div>
    </div>

    <!-- Learn More -->
    <div class="clearfix"></div>
    <div class="row-full learn-more">
      <!-- <img class="img-responsive visible-xs aos-item" data-aos="fade-up" src="https://www.nba.com/resources/static/team/v2/clippers/custom/season-tickets/img/learn-more-mobile2.jpg"> -->
      <div class="container">
        <div class="sm:flex sm:justify-end">
          <div class="sign-up-form aos-item" data-aos="fade-up">
            <h2 class="text-center section-title want-more">Want to Learn More?</h2>
            <p class="text-center">Complete the form below and we'll get in touch!</p>
            <div data-form-block-id="60fc0d57-53ee-eb11-bacb-00224809a9ae"></div> <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.74.1038.0"></script> <div id="dfzXoiGg_ZVQ4cQYffm4drGLe7CLsCLEPpE9_BQ0ReuI"></div><script src="https://mktdplp102cdn.azureedge.net/public/latest/js/ws-tracking.js?v=1.74.1038.0"></script><div class="d365-mkt-config" style="display:none" data-website-id="fzXoiGg_ZVQ4cQYffm4drGLe7CLsCLEPpE9_BQ0ReuI" data-hostname="aa8d20baa12c40e281518e9e92b636ad.svc.dynamics.com"></div>
          </div>
        </div>
      </div>  
    </div>
    <!-- Ticket Tabs -->
    <div id="tab-wrapper" class="container">
      <MemberCenterManageTickets/>
    </div>

    <!-- Meet the Team -->
    <div class="clearfix"></div>
    <div class="row-full the-team text-center container">
      <h2 class="section-title"><span>Meet the Team</span></h2>
      <div class="container">
        <div class="grid grid-cols-2 sm:grid-cols-3">
          <div class="aos-item" data-aos="fade-up">
            <img class="img-responsive " src="https://clippersweb.blob.core.windows.net/mvp/img/headshot-anderson.jpg" loading=lazy>
            <div class="member-name"><h4>Derek Anderson</h4></div>
            <div class="member-title">Manager, Membership Services</div>
            <div class="member-email"><a href="mailto:danderson@clippers.com">danderson@clippers.com</a></div>   
          </div>
          <div class="team-member aos-item" data-aos="fade-up">
            <img class="img-responsive " src="https://clippersweb.blob.core.windows.net/mvp/img/headshots-bleier.jpg" loading=lazy>
            <div class="member-name"><h4>Ryan Bleier</h4></div>
            <div class="member-title">Courtside Account Manager</div>
            <div class="member-email"><a href="mailto:rbleier@clippers.com">rbleier@clippers.com</a></div>   
          </div>            
          <div class="team-member aos-item" data-aos="fade-up">
            <img class="img-responsive " src="https://clippersweb.blob.core.windows.net/mvp/img/headshots-feigin.jpg" loading=lazy>
            <div class="member-name"><h4>Dani Feigin</h4></div>
            <div class="member-title"> Courtside Account Manager</div>
            <div class="member-email"><a href="mailto:dfeigin@clippers.com"> dfeigin@clippers.com</a></div>   
          </div>
          <div class="team-member aos-item" data-aos="fade-up">
            <img class="img-responsive " src="https://clippersweb.blob.core.windows.net/mvp/img/headshots-hankins.jpg" loading=lazy>
            <div class="member-name"><h4> Channing Hankins</h4></div>
            <div class="member-title">Premium Account Manager </div>
            <div class="member-email"><a href="mailto:chankins@clippers.com"> chankins@clippers.com</a></div>    
          </div>
          <div class="team-member aos-item" data-aos="fade-up">
            <img class="img-responsive " src="https://clippersweb.blob.core.windows.net/mvp/img/headshots-rivas.jpg" loading=lazy>
            <div class="member-name"><h4> Jaslin Rivas</h4></div>
            <div class="member-title"> Premium Account Manager</div>
            <div class="member-email"><a href="mailto:jrivas@clippers.com">jrivas@clippers.com</a></div>   
          </div>
          <div class="team-member aos-item" data-aos="fade-up">
            <img class="img-responsive " src="https://clippersweb.blob.core.windows.net/mvp/img/headshots-kuska.jpg" loading=lazy>
            <div class="member-name"><h4> Katie Kuska</h4></div>
            <div class="member-title"> Premium Account Manager</div>
            <div class="member-email"><a href="mailto:kkuska@clippers.com">kkuska@clippers.com</a></div>   
          </div>
          <div class="team-member aos-item" data-aos="fade-up">
            <img class="img-responsive " src="https://clippersweb.blob.core.windows.net/mvp/img/headshots-arellano.jpg" loading=lazy>
            <div class="member-name"><h4>Grant Arellano</h4></div>
            <div class="member-title">Account Manager</div>
            <div class="member-email"><a href="mailto:garellano@clippers.com">garellano@clippers.com</a></div>   
          </div>
          <div class="team-member aos-item" data-aos="fade-up">
            <img class="img-responsive " src="https://clippersweb.blob.core.windows.net/mvp/img/headshots-garner.jpg" loading=lazy>
            <div class="member-name"><h4>Vanessa Garner</h4></div>
            <div class="member-title"> Account Manager</div>
            <div class="member-email"><a href="mailto:vgarner@clippers.com">vgarner@clippers.com</a></div>   
          </div>            
          <div class="team-member aos-item" data-aos="fade-up">
            <img class="img-responsive " src="https://clippersweb.blob.core.windows.net/mvp/img/headshots-london.jpg" loading=lazy>
            <div class="member-name"><h4>Korben London</h4></div>
            <div class="member-title"> Account Manager</div>
            <div class="member-email"><a href="mailto:klondon@clippers.com">klondon@clippers.com</a></div>   
          </div>
          <div class="team-member aos-item" data-aos="fade-up">
            <img class="img-responsive " src="https://clippersweb.blob.core.windows.net/mvp/img/headshots-lopex.jpg" loading=lazy>
            <div class="member-name"><h4> Natalia Lopez</h4></div>
            <div class="member-title">Account Manager  </div>
            <div class="member-email"><a href="mailto:nlopez@clippers.com">nlopez@clippers.com</a></div>   
          </div>         
          <div class="team-member aos-item" data-aos="fade-up">
            <img class="img-responsive " src="https://clippersweb.blob.core.windows.net/mvp/img/headshots-crosby.jpg" loading=lazy>
            <div class="member-name"><h4>Noelle Crosby</h4></div>
            <div class="member-title">New Membership & Event Specialist</div>
            <div class="member-email"><a href="mailto:ncrosby@clippers.com">ncrosby@clippers.com</a></div>   
          </div>
          <div class="team-member aos-item" data-aos="fade-up">
            <img class="img-responsive " src="https://clippersweb.blob.core.windows.net/mvp/img/headshots-geronimo.jpg" loading=lazy>
            <div class="member-name"><h4> Shawn Geronimo</h4></div>
            <div class="member-title"> Membership Services</div>
            <div class="member-email"><a href="mailto:sgeronimo@clippers.com"> sgeronimo@clippers.com</a></div>           
          </div>
        </div>
      </div>  
    </div>

    <!-- FAQ -->
    <div class="clearfix"></div>
    <div id="faq"><h2 class="text-center section-title"><span>FAQ's</span></h2></div>
    <MemberCenterFAQ/>
    
  </div>
</template>
<script>

import SeasonTicketsIntuitDomeCarousel from '../SeasonTickets/SeasonTicketsIntuitDomeCarousel.vue';

export default {
  components: { SeasonTicketsIntuitDomeCarousel }
}
</script>
<style src="../../assets/css/membercenter/style.css" scoped></style>
