<template>
  <div> 
    <div id="tab-wrapper">  
      <ul class="tabss">
        <li class="tabss-1">
          <div class="nav-link" @click.prevent="setActive('home')" :class="{ active: isActive('home') }" href="#home"></div>
        </li>
        <li class="tabss-2">
          <div class="nav-link" @click.prevent="setActive('profile')" :class="{ active: isActive('profile') }" href="#profile"></div>
        </li>
        <li class="tabss-3">
          <div class="nav-link" @click.prevent="setActive('contact')" :class="{ active: isActive('contact') }" href="#contact"></div>
        </li>
        <li class="tabss-4">
          <div class="nav-link" @click.prevent="setActive('tab4')" :class="{ active: isActive('tab4') }" href="#tab4"></div>
        </li>
      </ul>
    </div>
    <div class="tab-content py-3" id="myTabContent">
      <div class="tab-pane fades" :class="{ 'active show': isActive('home') }" id="home">
        <flickity ref="flickity" :options="flickityOptions" class="carousel carousel-main carousel-story">
          <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/moments/buffalo/LAC_2122_City_Edition_Carousel_01_Buffalo_slide01_1080x1080.jpg"/></div>
          <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/moments/buffalo/LAC_2122_City_Edition_Carousel_01_Buffalo_slide02_1080x1080.jpg"/></div>
          <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/moments/buffalo/LAC_2122_City_Edition_Carousel_01_Buffalo_slide03_1080x1080.jpg"/></div>
          <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/moments/buffalo/LAC_2122_City_Edition_Carousel_01_Buffalo_slide04_1080x1080.jpg"/></div>
          <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/moments/buffalo/LAC_2122_City_Edition_Carousel_01_Buffalo_slide05_1080x1080.jpg"/></div>
        </flickity>
      </div>
      <div class="tab-pane fades" :class="{ 'active show': isActive('profile') }" id="profile">
        <flickity ref="flickity" :options="flickityOptions" class="carousel carousel-main carousel-story">
          <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/moments/sd/LAC_2122_City_Edition_Carousel_02_San_Diego_slide01_1080x1080.jpg"/></div>
          <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/moments/sd/LAC_2122_City_Edition_Carousel_02_San_Diego_slide02_1080x1080.jpg"/></div>
          <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/moments/sd/LAC_2122_City_Edition_Carousel_02_San_Diego_slide03_1080x1080.jpg"/></div>
          <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/moments/sd/LAC_2122_City_Edition_Carousel_02_San_Diego_slide04_1080x1080.jpg"/></div>
          <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/moments/sd/LAC_2122_City_Edition_Carousel_02_San_Diego_slide05_1080x1080.jpg"/></div>
        </flickity>
      </div>
      <div class="tab-pane fades" :class="{ 'active show': isActive('contact') }" id="contact">
        <flickity ref="flickity" :options="flickityOptions" class="carousel carousel-main carousel-story">
          <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/moments/losangeles/LAC_2122_City_Edition_Carousel_03_Los_Angeles_slide01_1080x1080.jpg"/></div>
          <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/moments/losangeles/LAC_2122_City_Edition_Carousel_03_Los_Angeles_slide02_1080x1080.jpg"/></div>
          <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/moments/losangeles/LAC_2122_City_Edition_Carousel_03_Los_Angeles_slide03_1080x1080.jpg"/></div>
          <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/moments/losangeles/LAC_2122_City_Edition_Carousel_03_Los_Angeles_slide04_1080x1080.jpg"/></div>
          <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/moments/losangeles/LAC_2122_City_Edition_Carousel_03_Los_Angeles_slide05_1080x1080.jpg"/></div>
        </flickity>
      </div>   
      <div class="tab-pane fades" :class="{ 'active show': isActive('tab4') }" id="tab4">
        <flickity ref="flickity" :options="flickityOptions" class="carousel carousel-main carousel-story">
          <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/moments/la/LAC_2122_City_Edition_Carousel_04_LA_slide01_1080x1080.jpg"/></div>
          <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/moments/la/LAC_2122_City_Edition_Carousel_04_LA_slide02_1080x1080.jpg"/></div>
          <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/moments/la/LAC_2122_City_Edition_Carousel_04_LA_slide03_1080x1080.jpg"/></div>
          <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/moments/la/LAC_2122_City_Edition_Carousel_04_LA_slide04_1080x1080.jpg"/></div>
          <div class='carousel-cell'><img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/city/img/moments/la/LAC_2122_City_Edition_Carousel_04_LA_slide05_1080x1080.jpg"/></div>
        </flickity>
      </div>   
    </div>
  </div>
</template>
<script>

import Flickity from 'vue-flickity'

export default {
  data() {
    return {
      activeItem: 'home',
      flickityOptions: {
        lazyLoad: 1,
        cellAlign: 'left',
        contain: true,
        freeScroll: true,
        wrapAround: true, 
        pageDots: true
      }
    }
  },
  methods: {
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      window.dispatchEvent(new Event('resize'));
      this.activeItem = menuItem
    },
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  }
}
</script>
<style src="../../assets/css/cityedition/style.css" scoped></style>
<style scoped>
.tabss {
  padding:0;
  display: flex;
  list-style-type: none;
  margin-bottom:20px;
}
.tabss li{
  flex:1;
  width: 100%;
}
.story ul.tabss li > div{
  background:transparent url("https://clippersweb.blob.core.windows.net/city/img/LOGO-DIVIDER.png") no-repeat center top;
  margin:0;
  width:100%;
  border:0;
}
.story ul.tabss li > div{
  background-size:500px;
  height:75px;
  background-position: 8px 16px;
}
.story ul.tabss li.tabss-2 > div {
  background-position: -136px 14px;
}
.story ul.tabss li.tabss-3 > div {
  background-position: -154px 26px;
  background-size: 300px;
}
.story ul.tabss li.tabss-4 > div {
  background-position: -430px 14px;
}
.story ul.tabss li > div:hover{
  cursor:pointer;
}
@media screen and (min-width: 767px) {
  .story .tab_content{
    padding: 5px;
  }
  .story ul.tabss li > div{
    background-size:550px;
    height:75px;
    background-position: 40px 18px;
  }
  .story ul.tabss li.tabss-2 > div {
    background-position: -124px 14px;
  }
  .story ul.tabss li.tabss-3 > div {
    background-position: -212px 20px;
    background-size: 451px;
  }
  .story ul.tabss li.tabss-4 > div {
    background-position: -438px 14px;
  }
}

@media screen and (min-width: 992px) {
	ul.tabss li {
		padding-top: 30px;
	}
  .story ul.tabss li > div{
    background-size:1100px;
    height:130px;
    background-position: 33px 18px;
  }
  .story ul.tabss li.tabss-2 > div {
    background-position: -284px 14px;
  }
  .story ul.tabss li.tabss-3 > div {
    background-position: -421px 35px;
    background-size: 808px;
  }
  .story ul.tabss li.tabss-4 > div {
    background-position: -940px 14px;
  }
}

@media screen and (min-width: 1200px) {
	ul.tabss li {
		padding-top: 30px;
	}
  .story ul.tabss li > div{
    background-size:1100px;
    height:130px;
    background-position: 65px 18px;
  }
  .story ul.tabss li.tabss-2 > div {
    background-position: -260px 14px;
  }
  .story ul.tabss li.tabss-3 > div {
    background-position: -421px 30px;
    background-size: 851px;
  }
  .story ul.tabss li.tabss-4 > div {
    background-position: -912px 14px;
  }
}
</style>