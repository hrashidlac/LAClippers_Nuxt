<template>
  <div>     
    <div class="text-white uppercase flex flex-col justify-center items-center h-300 lg:h-500 bg-center bg-cover px-4" style="background-image: url(https://www.nba.com/resources/static/team/v2/clippers/custom/miniplans/img/hero.jpg)">
      <div class="header-year-logo">
        2021 <img class="icon inline -mt-2 lg:-mt-4 w-10 lg:w-auto" src="https://www.nba.com/resources/static/team/v2/clippers/custom/season-tickets/img/icon.png"> 2022
      </div>
      <h1>Mini Plans</h1>
      <h2 class="mt-4">Starting at $450</h2>
    </div>
    <TicketSubNav/>
    <!-- Intro -->
    <div class="container mt-8 md:mt-0">
      <div class="intro-text">
        <div class="sm:grid sm:grid-cols-6">
          <div class="sm:col-start-2 sm:col-span-4 text-center aos-item" data-aos="fade-up">
            <h3><span>2021-22 Mini Plans</span> include 10 incredible games throughout the season.</h3>
            <p>Mini Plans offer flexibility and will secure your seats to some of the best games of the season. 
            Key matchups for each plan can be found below, the full plans will be available once 
            the '21-22 schedule is released.</p> 
          </div>
        </div>
      </div>
      <!-- Plans -->
      <div class="plans">
        <div class="plan-item aos-item" data-aos="fade-up">
          <div><h3>Plan A</h3></div>
          <div class="logos"><img class="img-responsive two-logos " src="https://www.nba.com/resources/static/team/v2/clippers/custom/miniplans/img/plan-a-logos.png" ></div>
          <div class="logos-secondary"><img class="img-responsive eight-logos " src="https://www.nba.com/resources/static/team/v2/clippers/custom/miniplans/img/eight-logos-a2.png" ></div>
          <div><a href="https://tix.axs.com/Y%2fRxBwAAAADLzgYgAgAAAADq%2fv%2f%2f%2fwA%2fEwAACGNsaXBwZXJzAP%2f%2f%2f%2f%2f%2f%2f%2f%2f%2f?utm_source=website&utm_medium=miniplans&utm_campaign=210804&utm_content=PlanA" target="_blank">Buy Now</a> </div>
        </div>
        <div class="plan-item aos-item" data-aos="fade-up">
          <div><h3>Plan B</h3></div>
          <div class="logos"><img class="img-responsive two-logos" src="https://www.nba.com/resources/static/team/v2/clippers/custom/miniplans/img/plan-b-logos.png" ></div>
          <div class="logos-secondary"><img class="img-responsive eight-logos " src="https://www.nba.com/resources/static/team/v2/clippers/custom/miniplans/img/eight-logos-b3.png" ></div>
          <div><a href="https://tix.axs.com/Y%2fRxBwAAAAAb0QYgAgAAAADo%2fv%2f%2f%2fwA%2fEwAACGNsaXBwZXJzAP%2f%2f%2f%2f%2f%2f%2f%2f%2f%2f?utm_source=website&utm_medium=miniplans&utm_campaign=210804&utm_content=PlanB" target="_blank">Buy Now</a> </div>
        </div>
        <div class="plan-item aos-item" data-aos="fade-up">
          <div><h3>Plan C</h3></div>
          <div class="logos"><img class="img-responsive two-logos" src="https://www.nba.com/resources/static/team/v2/clippers/custom/miniplans/img/plan-c-logos.png" ></div>
          <div class="logos-secondary"><img class="img-responsive eight-logos " src="https://www.nba.com/resources/static/team/v2/clippers/custom/miniplans/img/eight-logos-c2.png" ></div>
          <div><a href="https://tix.axs.com/Y%2fRxBwAAAABxtqgfAgAAAAC%2b%2fv%2f%2f%2fwA%2fEwAACGNsaXBwZXJzAP%2f%2f%2f%2f%2f%2f%2f%2f%2f%2f?utm_source=website&utm_medium=miniplans&utm_campaign=210804&utm_content=PlanC" target="_blank">Buy Now</a> </div>
        </div>
        <div class="plan-item aos-item plan-last" data-aos="fade-up">
          <div><h3>Plan D</h3></div>
          <div class="logos"><img class="img-responsive two-logos" src="https://www.nba.com/resources/static/team/v2/clippers/custom/miniplans/img/plan-d-logos.png" ></div>
          <div class="logos-secondary"><img class="img-responsive eight-logos " src="https://www.nba.com/resources/static/team/v2/clippers/custom/miniplans/img/eight-logos-d2.png" ></div>
          <div><a href="https://tix.axs.com/Y%2fRxBwAAAAC31gYgAgAAAABz%2fv%2f%2f%2fwA%2fEwAACGNsaXBwZXJzAP%2f%2f%2f%2f%2f%2f%2f%2f%2f%2f?utm_source=website&utm_medium=miniplans&utm_campaign=210804&utm_content=PlanD" target="_blank">Buy Now</a> </div>
        </div>
        <div class="looking-for text-center"><p>Looking for a package which includes the Lakers? Check out our full and half season ticket plans <a href="https://www.nba.com/clippers/tickets/seasontickets">here.</a></p></div>
      </div>
      <!-- Seating Options -->
      <div class="seating-options">
        <div><h2 class="text-center section-title"><span>Seating Options</span></h2></div>
        <div class="seating-tiers">
          <div class="premium">
            <h3>PREMIUM<br/>CENTER SEATING</h3>
            <div class="starting-at">Starting at</div>
            <div><span>$2,200</span> </div> 
          </div>
          <div class="level-one-corners">
            <h3>100 LEVEL<br/>CORNERS</h3>
            <div class="starting-at">Starting at</div>
            <div><span>$1,040</span> </div>
          </div>
          <div class="level-one">
            <h3>100 LEVEL<br/>BASELINE</h3>
            <div class="starting-at">Starting at</div>
            <div><span>$920</span> </div>
          </div>
          <div class="level-two">
            <h3>200<br/>LEVEL</h3>
            <div class="starting-at">Starting at</div>
            <div><span>$680</span> </div>
          </div>
          <div class="level-three">
            <h3>300<br/>LEVEL</h3>
            <div class="starting-at">Starting at</div>
            <div><span>$340</span> </div>
          </div>
        </div>
        <div class="seating-chart">
          <div><img class="img-responsive aos-item" data-aos="fade-up" src="https://www.nba.com/resources/static/team/v2/clippers/custom/miniplans/img/seating-chart.jpg" alt="Seating Chart"></div>
        </div> 
      </div>
      <!-- Exclusive Benefits -->
      <div class="benefits">
        <div><h2 class="text-center section-title"><span>Exclusive Benefits</span></h2></div>        
        <div class="sm:grid sm:grid-cols-2 gap-10">
          <div class="benefits-item">
            <div><img src="https://www.nba.com/resources/static/team/v2/clippers/custom/miniplans/img/icons/managing-tickets.png"></div>
            <div>
              <h3>MANAGING YOUR TICKETS HAS NEVER BEEN EASIER </h3>
              <p>With Clippers digital ticketing, you can transfer or resell the games you can’t make in a few simple clicks.</p>
            </div>
          </div>
          <div class="benefits-item">
            <div><img src="https://www.nba.com/resources/static/team/v2/clippers/custom/miniplans/img/icons/playoff-priority.png" alt="Playoff Priority"></div>
            <div>
              <h3>PRIORITY PRESALE ACCESS</h3>
              <p>Mini Plans come with presale access to big regular season games, and priority privileges to 2022 Playoff tickets.</p>
            </div>
          </div>
          <div class="benefits-item">
            <div><img src="https://www.nba.com/resources/static/team/v2/clippers/custom/miniplans/img/icons/member-events.png" alt="Member Events"></div>
            <div>
              <h3>GUARANTEED SEATS & FLEXIBLE PAYMENT</h3>
              <p>Enjoy the same seats for all 10 games in your Mini Plan for the ’21-22 season. Mini Plans also offer flexible payment schedules.</p>
            </div>
          </div>
          <div class="benefits-item">
            <div><img src="https://www.nba.com/resources/static/team/v2/clippers/custom/miniplans/img/icons/discounts.png" alt="Member Savings"></div>
            <div>
              <h3>MERCHANDISE SAVINGS</h3>
              <p>Enjoy a 10% discount on merchandise from the Clippers Fan Shop.</p>
            </div>
          </div>
        </div>    
      </div>
      <div class="clearfix"></div>
      <!-- Learn More -->
      <!-- <div class="row-full row-full-sign-up">
        <div class="container">
          <div class="row">
            <div id="h-form">
              <h2>LEARN MORE ABOUT MINI PLANS</h2>
              <h3>Submit your details to learn more about 2021-22 Mini Plans and a dedicated account manager will be in touch!</h3>
              <div data-form-block-id="ad2f7b46-02f7-eb11-94ef-00224803f9f4"></div> 
              <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.74.2001.0"></script> 
              <div id="d0J0Ql09tU6HN0XKVliNgY8jgYUaKLrTfoqskHOQN-iU"></div>
              <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/ws-tracking.js?v=1.74.2001.0"></script>
              <div class="d365-mkt-config" style="display:none" data-website-id="0J0Ql09tU6HN0XKVliNgY8jgYUaKLrTfoqskHOQN-iU" data-hostname="aa8d20baa12c40e281518e9e92b636ad.svc.dynamics.com"></div>
            </div>    
          </div>
        </div>  
      </div> -->
    </div>
    <!-- Ticket Contact -->
    <TicketContact/>
  </div>
</template>
<script>
export default {
  
}
</script>
<style src="../../assets/css/miniplans/style.css" scoped></style>
