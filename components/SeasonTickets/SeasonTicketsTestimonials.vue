<template>
  <div> 
    <flickity ref="flickity" :options="flickityOptions">
      <div class="carousel-cell">
        <div class="sm:grid sm:grid-cols-2 sm:gap-10">
          <div class="">
            <img class="img-responsive" src="https://clippersweb.blob.core.windows.net/seasontickets/img/testimonial-1.jpg">
          </div>
          <div class="carousel-right">
            <h4>"Clipper Nation has developed a great Membership Program"</h4>
            <p>"Special Events and discounts on merch are great but I especially enjoy the ease in which I can manage my tickets.  Being able to transfer tickets to friends, work associates, or clients is a fantastic benefit and is incredibly easy to work with."</p>
            <p class="byline"><span>Eddie DeJoy</span>, Member since 2017</p>
          </div>
        </div>
      </div>
      <div class="carousel-cell">
        <div class="sm:grid sm:grid-cols-2 sm:gap-10">
          <div class="">
            <img  class="img-responsive" src="https://clippersweb.blob.core.windows.net/seasontickets/img/testimonial-2.jpg">
          </div>
          <div class="carousel-right">
            <h4>"I love feeling like I have a 'home' at the game."</h4>
            <p>"Over the years I have become friends with fellow season ticket holders and have become fond of our great ushers.  Clipper Nation Rules!"</p>
            <p class="byline"><span>Laurie Nicholson</span>, Member since 2011</p>
          </div>
        </div>
      </div>
      <div class="carousel-cell">
        <div class="sm:grid sm:grid-cols-2 sm:gap-10">
          <div class="">
            <img  class="img-responsive" src="https://clippersweb.blob.core.windows.net/seasontickets/img/testimonial-3.jpg">
          </div>
          <div class="carousel-right">                
            <h4>"It's a true community that loves our team and takes care of each other."</h4>
            <p>"As a long-time Clipper fan and season ticket holder, this year has been a special one because of the true bond that Clipper fans and family have for each other." </p>
            <p class="byline"><span>Kyle Imaoka</span>, Member since 2011</p>
          </div>
        </div>
      </div>
    </flickity>
  </div>
</template>
<script>

import Flickity from 'vue-flickity'

export default {
  data() {
    return {
      flickityOptions: {
        //initialIndex: 3,
        lazyLoad: 1,
        //prevNextButtons: true,
        //pageDots: true,
        wrapAround: true 
        // any options from Flickity can be used
      }
    }
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  }
}
</script>
<style scoped>
.flickity-enabled{
  padding:50px 0;
}
.flickity-page-dots{
  bottom:15px;
}

.carousel-cell {
  color:#FFF;
}
h4{
  font-family: "Agency fb bold";
  font-size: 38px;
  text-transform:uppercase;
}
p {
  font-family: "Avenir";
  font-size: 15px;
}
.byline{
  font-family: "Agency fb bold";
  text-transform: uppercase;
  font-size: 21px;
}

@media screen and (max-width: 767px) {
  h4{
    font-size: 26px;
    margin:25px 0;
  }
}
@media screen and (min-width: 767px) {
  .carousel-right{
    padding-right:100px;
  }
}
 
</style>