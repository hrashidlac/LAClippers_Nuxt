<template>
  <div>
    <h2 class="text-center mb-8 mt-24">2015-2016 Season Spotlights</h2>
    <flickity ref="flickity" :options="flickityOptions">
      <div v-for="photo in photos" :key="photo.photo" class='carousel-cell text-center'>
        <div class="wrapper-top">
          <div class="wrapper-bottom">
            <div class="wrapper-side">
              <div class="wrapper-bg">
                <img class="carousel-image rounded-full mx-auto mb-4" :data-flickity-lazyload="photo.photo">
                <div class="carousel-caption">
                  <div class="font-agencybold uppercase text-4xl border-t-2 border-b-2 border-greyddd pt-2 mb-2" >{{photo.name}}</div>
                  <div class="font-agencybold uppercase text-xl text-blue">{{photo.school}}</div>
                  <div class="font-agencybold uppercase text-xl text-red">{{photo.grade}}</div>
                  <div class="text-sm">{{photo.hnrd}}</div>
                </div>
              </div>
            </div>
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
        lazyLoad: 1,
        wrapAround: true,
        pageDots: false 
      },
      photos:
        [
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Maria_Acker_320x320.png",
            name: "Maria Acker",
            school: "Tom Bradley Global Awareness Magnet",
            grade: "Kindergarten",
            hnrd: "Honored: Nov. 29th, Clippers vs. Timberwolves"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Gabriel_Alvarez_320x320.png",
            name: "Gabriel Alvarez",
            school: "Mark Twain Middle School",
            grade: "7th Grade",
            hnrd: "Honored: Nov. 29th, Clippers vs. Timberwolves"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Pete_Keuper_320x320.png",
            name: "Pete Keuper",
            school: "San Miguel Elementary School",
            grade: "",
            hnrd: "Honored: Nov. 29th, Clippers vs. Timberwolves"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Joy_Burton_320x320.png",
            name: "Joy Burton",
            school: "Sutter Middle School ",
            grade: "7th Grade Science and Health ",
            hnrd: "Honored: Dec. 5th, Clippers vs. Magic"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Joni_Clark_320x320.png",
            name: "Joni Clark",
            school: "Cleveland Elementary School ",
            grade: "",
            hnrd: "Honored: Dec. 5th, Clippers vs. Magic"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Patricia_Garibay_320x320.png",
            name: "Patricia Garibay",
            school: "Hollenbeck Middle School ",
            grade: "8th grade/Math",
            hnrd: "Honored: Dec. 5th, Clippers vs. Magic"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Sarine_Gureghian_320x320.png",
            name: "Sarine Gureghian",
            school: "Edison Elementary School",
            grade: "6th grade",
            hnrd: "Honored: Dec. 5th, Clippers vs. Magic"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Lisa_Menell_320x320.png",
            name: "Lisa Menell",
            school: "Enadia-TEC Elementary",
            grade: "4th grade – all subjects",
            hnrd: "Honored: Dec. 5th, Clippers vs. Magic"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Stacy_Orosco_320x320.png",
            name: "Stacy Orosco",
            school: "William Jefferson Clinton Middle School",
            grade: "6th Grade English Language Arts",
            hnrd: "Honored: Dec. 5th, Clippers vs. Magic"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Chetan_Singh_320x320.png",
            name: "Chetan Singh",
            school: "School Hale Charter Academy ",
            grade: "6th Grade Math/ 7th & 8th Grade Leadership/ASB",
            hnrd: "Honored: Dec. 5th, Clippers vs. Magic"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Christopher_Chaidez_320x320.png",
            name: "Christopher Chaidez",
            school: "Mary McLeod Bethune Middle School",
            grade: "7th & 8th grade",
            hnrd: "Honored: Jan. 2nd, Clippers vs. 76ers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Adan_Gonzalez_320x320.png",
            name: "Adan Gonzalez",
            school: "186th Street School",
            grade: "4th grade",
            hnrd: "Honored: Jan. 2nd, Clippers vs. 76res"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Miguel_Najera_320x320.png",
            name: "Miguel Najera",
            school: "Ann Street Elementary ",
            grade: "1st Grade",
            hnrd: "Honored: Jan. 2nd, Clippers vs. 76ers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Christian_Reed_320x320.png",
            name: "Christian Reed",
            school: "Figueroa Street Elementary ",
            grade: "5th Grade",
            hnrd: "Honored: Jan. 2nd, Clippers vs. 76ers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Hixcell_Wester_320x320.png",
            name: "Hixcell Wester",
            school: "Young Oak Kim Academy ",
            grade: "6th - 8th Grade",
            hnrd: "Honored: Jan. 2nd, Clippers vs. 76ers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Celina_Amoyo_320x320.png",
            name: "Celina Amoyo",
            school: "N.E.W Academy Canoga Park ",
            grade: "",
            hnrd: "Honored: Jan. 13th, Clippers vs. Heat"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Robin_Brown_320x320.png",
            name: "Robin Brown",
            school: "Richard E. Byrd Middle School",
            grade: "6th - 8th Grade",
            hnrd: "Honored: Jan. 13th, Clippers vs. Heat"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Angela_Lopez_320x320.png",
            name: "Angela Lopez",
            school: "112th St Elementary ",
            grade: "K - 2nd Grade",
            hnrd: "Honored: Jan. 13th, Clippers vs. Heat"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Alina_Maleski_320x320.png",
            name: "Alina Maleski",
            school: "Bell Gardens Elementary School",
            grade: "3rd Grade",
            hnrd: "Honored: Jan. 13th, Clippers vs. Heat"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Todd_Miller_320x320.png",
            name: "Todd Miller",
            school: "Stauffer MS ",
            grade: "6th - 8th Grade Band",
            hnrd: "Honored: Jan. 13th, Clippers vs. Heat"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Stephanie_Hunter_320x320.png",
            name: "Stephanie Hunter",
            school: "Napa Street Elementary ",
            grade: "3rd Grade",
            hnrd: "Honored: Jan. 16th, Clippers vs. Kings"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Susan_Kim_320x320.png",
            name: "Susan Kim",
            school: "Charles Maclay Middle School ",
            grade: "8th Grade",
            hnrd: "Honored: Jan. 16th, Clippers vs. Kings"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Kelly_Spector_320x320.png",
            name: "Kelly Spector",
            school: "N.E.W Academy Canoga Park ",
            grade: "",
            hnrd: "Honored: Jan. 16th, Clippers vs. Kings"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Jessica_Kopp_320x320.png",
            name: "Jessica Kopp",
            school: "Arroyo Seco Museum Science Magnet",
            grade: "4th grade",
            hnrd: "Honored: Jan. 16th, Clippers vs. Kings"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Maria_Rodriguez_320x320.png",
            name: "Maria Rodriguez",
            school: "Almanecer Primary Center",
            grade: "Transitional Kindergarten",
            hnrd: "Honored: Jan. 16th, Clippers vs. Kings"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Rosa_DeLaPortilla_320x320.png",
            name: "Rosa DeLaPortilla",
            school: "Cienega Elementary ",
            grade: "4th Grade",
            hnrd: "Honored: Feb. 3rd, Clippers vs. Timberwolves"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Martha_Galvez_320x320.png",
            name: "Martha Galvez",
            school: "Griffin Anenue School ",
            grade: "3rd Grade",
            hnrd: "Honored: Feb. 24th, Clippers vs. Nuggets"
          },
          {
            photo: "Honored: Feb. 24th, Clippers vs. Nuggets",
            name: "Marc Iniguez",
            school: "Immaculate Heart of Mary Elementary School",
            grade: "4th Grade",
            hnrd: "Honored: Feb. 24th, Clippers vs. Nuggets"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Kelly_Dixon_320x320.png",
            name: "Kelly Dixon",
            school: "Thurgood Marshall ",
            grade: "1st Grade",
            hnrd: "Honored: Mar. 24th, Clippers vs. Trail Blazers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Jennie_Jung-Choy_320x320.png",
            name: "Jennie Jung-Choy",
            school: "Logan Span School ",
            grade: "Kindergarden",
            hnrd: "Honored: Mar. 24th, Clippers vs. Trail Blazers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Heidi_VanKooten_320x320.png",
            name: "Heidi VanKooten",
            school: "Luther Burbank Middle School ",
            grade: "7th Grade",
            hnrd: "Honored: Mar. 24th, Clippers vs. Trail Blazers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Felicia_Akuamoah_320x320.png",
            name: "Felicia Akuamoah",
            school: "Sandra Cisneros Learning Academy ",
            grade: "7th Grade",
            hnrd: "Honored: Mar. 27th, Clippers vs. Nuggets"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Gianiny_Alulema_320x320.png",
            name: "Gianiny Alulema",
            school: "Ramona Elementary ",
            grade: "TK - 1st Grade",
            hnrd: "Honored: Mar. 27th, Clippers vs. Nuggets"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Grant_Schippert_320x320.png",
            name: "Grant Schippert",
            school: "Thomas Alva Edison Middle ",
            grade: "6th - 8th Grade",
            hnrd: "Honored: Mar. 27th, Clippers vs. Nuggets"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Cyrene_StAmant_320x320.png",
            name: "Cyrene St. Amant",
            school: "Maple PC",
            grade: "1st Grade",
            hnrd: "Honored: Mar. 27th, Clippers vs. Nuggets"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Crystal_Wai_320x320.png",
            name: "Crystal Wai",
            school: "Egremont ",
            grade: "2nd Grade",
            hnrd: "Honored: Mar. 27th, Clippers vs. Nuggets"
          }
        ]
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
.carousel-cell img{
  max-width:200px;
}
@media (min-width:767px){
  .carousel-cell{
    width:33%;
    margin-right:10px;
  }
}

.wrapper-top{
  padding-top:40px;
  background:transparent url("https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/ta_bg_top.jpg") no-repeat;
  background-size:contain;
}

.wrapper-bottom{
  padding-bottom:40px;
  background:transparent url("https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/ta_bg_bottom.jpg") no-repeat bottom;
  background-size:contain;
}

.wrapper-side{
  padding-left:50px;
  padding-right:50px;
  background:transparent url("https://clippersweb.blob.core.windows.net/community/img/teacherappreciation/ta_bg_side.jpg") repeat-y bottom;
  background-size:contain;
}
.wrapper-bg{
  padding:30px 0;
  min-height:500px;
}
</style>