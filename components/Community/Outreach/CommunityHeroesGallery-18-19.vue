<template>
  <div>
    <h2 class="text-center mb-8 mt-24">2018-2019 Community Heroes</h2>
    <flickity ref="flickity" :options="flickityOptions">
      <div v-for="photo in photos" :key="photo.name" class='carousel-cell text-center'>
        <div class="wrapper-top">
          <div class="wrapper-bottom">
            <div class="wrapper-side">
              <div class="wrapper-bg">
                <img class="carousel-image rounded-full mx-auto mb-4" :data-flickity-lazyload="photo.photo">
                <div class="carousel-caption">
                  <div class="font-agencybold uppercase text-4xl border-t-2 border-b-2 border-greyddd pt-2 mb-2" >{{photo.name}}</div>
                  <div class="font-agencybold uppercase text-xl text-blue">{{photo.school}}</div>
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
            photo: "https://www.nba.com/resources/static/team/v2/clippers/APR_10_UTA_HERO_SUBRINA_MILLER.jpg",
            name: "Subrina Miller",
            school: "Heads Up Foundation",
            hnrd: "Honored: April 10, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/APR_10_UTA_HERO_LA_SHUN_JACKSON.jpg",
            name: "La Shun Jackson",
            school: "Heads Up Foundation",
            hnrd: "Honored: April 10, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/APR_5_LAL_HERO_HOWARD_SERPAS.jpg",
            name: "Howard Serpas",
            school: "Beyond The Bell",
            hnrd: "Honored: April 5, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/APR_5_LAL_HERO_ALVARO_CORTES.jpg",
            name: "Alvaro Cortes",
            school: "Beyond The Bell",
            hnrd: "Honored: April 5, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/APR_3_HOU_HERO_LINDA_BRANDON.jpg",
            name: "Linda Brandon",
            school: "LA Job Corps",
            hnrd: "Honored: April 3, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/APR_3_HOU_HERO_DR_COL_VICENT_T_TAYLOR.jpg",
            name: "Dr. Col. Vicent T. Taylor",
            school: "LA Job Corps",
            hnrd: "Honored: April 3, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/MAR_31_MEM_HERO_TIFFANY_MIRANDA.jpg",
            name: "Tiffany Miranda",
            school: "Girls Make Beats",
            hnrd: "Honored: March 31, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/MAR_31_MEM_HERO_WHITNEY_TABER.jpg",
            name: "Whitney Taber",
            school: "Girls Make Beats",
            hnrd: "Honored: March 31, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/MAR_30_CLE_HERO_GENA_WOODS.jpg",
            name: "Gena Woods",
            school: "Cedars-Sinai",
            hnrd: "Honored: March 30, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/MAR_30_CLE_HERO_SYLVIA_ESTRADA.jpg",
            name: "Sylvia Estrada",
            school: "Cedars-Sinai",
            hnrd: "Honored: March 30, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/MAR_19_IND_HERO_VANESSA_LOPEZ.jpg",
            name: "Vanessa Lopez",
            school: "West Valley YMCA",
            hnrd: "Honored: March 19, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/MAR_19_IND_HERO_OLIVIA_PLUNKETT.jpg",
            name: "Olivia Plunkett",
            school: "Downtown YMCA",
            hnrd: "Honored: March 19, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/MAR_17_BKN_HERO_WENDY_RQAUEL.jpg",
            name: "Wendy Raquel",
            school: "Mothers In Action Inc",
            hnrd: "Honored: March 17, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/MAR_17_BKN_HERO_TRACY_MITCHELL.jpg",
            name: "Tracy Mitchell",
            school: "Mothers In Action Inc",
            hnrd: "Honored: March 17, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Ashonti Gordon-Bush",
            school: "Women Of Concerned Black Men Of LA",
            hnrd: "Honored: March 15, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Melissa Eno Effa",
            school: "Women Of Concerned Black Men Of LA",
            hnrd: "Honored: March 15, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/MAR_12_POR_HERO_JATZIN_ALVARADO.jpg",
            name: "Jatzin Alvarado",
            school: "Catholic Big Brothers Big Sisters",
            hnrd: "Honored: March 12, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/MAR_12_POR_HERO_SANDRA_ESTRELLA.jpg",
            name: "Sandra Estrella",
            school: "Catholic Big Brothers Big Sisters",
            hnrd: "Honored: March 12, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/MAR_11_BOS_HERO_MICHELLE_NIETO-HERNANDEZ.jpg",
            name: "Michelle Nieto-Hernandez",
            school: "Girls Inc LA",
            hnrd: "Honored: March 11, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/MAR_11_BOS_HERO_ANDRIANA_GONZALEZ.jpg",
            name: "Andriana Gonzalez",
            school: "Girls Inc LA",
            hnrd: "Honored: March 11, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/MAR_8_OKC_HERO_ANNLEE_ELLINGSON.jpg",
            name: "Annlee Ellingson",
            school: "Write Girl",
            hnrd: "Honored: March 8, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/MAR_8_OKC_HERO_KELLY_CHAN.jpg",
            name: "Kelly Chan",
            school: "Write Girl",
            hnrd: "Honored: March 8, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/MAR_3_NYK_HERO_DR_MARGARETA_PISARSKA.jpg",
            name: "Dr. Margareta Pisarska",
            school: "Cedars-Sinai",
            hnrd: "Honored: March 3, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/MAR_3_NYK_HERO_STEPHANIE_FALOON.jpg",
            name: "Stephanie Faloon",
            school: "Cedars-Sinai",
            hnrd: "Honored: March 3, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/FEB_25_DAL_HERO_KIM_HOWSE.jpg",
            name: "Kim Howse",
            school: "Lupus Howse Foundation",
            hnrd: "Honored: February 25, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/FEB_25_DAL_HERO_MIKEYONNA_DEDMON.jpg",
            name: "Mikeyonna Dedmon",
            school: "Lupus Howse Foundation",
            hnrd: "Honored: February 25, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/FEB_13_PHX_HERO_ROBERT_LEE_JOHNSON.jpg",
            name: "Robert Lee Johnson",
            school: "California African American Museum",
            hnrd: "Honored: February 13, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/FEB_13_PHX_HERO_KARANI_MARCIA_JOHNSON.jpg",
            name: "Karani Marcia Johnson",
            school: "California African American Museum",
            hnrd: "Honored: February 13, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/JAN_31_LAL_HERO_DAVID_BEAVERS.jpg",
            name: "David Beavers",
            school: "Children's Collective",
            hnrd: "Honored: January 31, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/JAN_31_LAL_HERO_BENJAMIN_BETHEA.jpg",
            name: "Benjamin Bethea",
            school: "Children's Collective",
            hnrd: "Honored: January 31, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/JAN_28_ATL_HERO_SHIRLEY_RAYBURN.jpg",
            name: "Shirley Rayburn",
            school: "Union Rescue Mission",
            hnrd: "Honored: January 28, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/JAN_28_ATL_HERO_PETER_COWARD.jpg",
            name: "Peter Coward",
            school: "Union Rescue Mission",
            hnrd: "Honored: January 28, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/JAN_27_SAC_HERO_TRAVIS_LAM.jpg",
            name: "Travis Lam",
            school: "Triple Threat Mentoring",
            hnrd: "Honored: January 27, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/JAN_27_SAC_HERO_MICHELLE_SCHWEIGER.jpg",
            name: "Michelle Schweiger",
            school: "Cedars-Sinai",
            hnrd: "Honored: January 27, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/JAN_18_GSW_HERO_GEORGE_WEAVER.jpg",
            name: "George Weaver",
            school: "Brotherhood Crusade",
            hnrd: "Honored: January 18, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/JAN_18_GSW_HERO_IMAN_TURNER.jpg",
            name: "Iman Turner",
            school: "Communities In Schools Of Los Angeles",
            hnrd: "Honored: January 18, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/JAN_16_UTA_HERO_CINDY_KRIPPENDORF.jpg",
            name: "Cindy Krippendorf",
            school: "Sharefest LA",
            hnrd: "Honored: January 16, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/JAN_16_UTA_HERO_KEITH_MOTT.jpg",
            name: "Keith Mott",
            school: "Big Brothers Big Sisters Of Greater Los Angeles",
            hnrd: "Honored: January 16, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/JAN_14_NOP_HERO_ERICK_ORTIZ.jpg",
            name: "Erick Ortiz",
            school: "Operation Progress LA",
            hnrd: "Honored: January 14, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/JAN_14_NOP_HERO_NITESH_PATEL.jpg",
            name: "Nitesh Patel",
            school: "Salvation Army",
            hnrd: "Honored: January 14, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/JAN_12_DET_HERO_PIRAYAH_PEDARSANI.jpg",
            name: "Pirayah Pedarsani",
            school: "Cedars-Sinai",
            hnrd: "Honored: January 12, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/JAN_12_DET_HERO_GARFIELD_ECUNG.jpg",
            name: "Garfield Ecung",
            school: "Concerned Black Men",
            hnrd: "Honored: January 12, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/JAN_8_CHA_HERO_EVAN_MORAN.jpg",
            name: "Evan Moran",
            school: "Catholic Big Brothers Big Sisters",
            hnrd: "Honored: January 8, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/JAN_8_CHA_HERO_TERESA_SANCHEZ.jpg",
            name: "Teresa Sanchez",
            school: "Catholic Big Brothers Big Sisters",
            hnrd: "Honored: January 8, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/JAN_6_ORL_HERO_ROB_SZCZEPANEK.jpg",
            name: "Rob Szczepanek",
            school: "LAFD",
            hnrd: "Honored: January 6, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/JAN_6_ORL_HERO_SAM_SZCZEPANEK.jpg",
            name: "Sam Szczepanek",
            school: "LAFD",
            hnrd: "Honored: January 6, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/JAN_1_PHI_HERO_FRANK_JONES.jpg",
            name: "Frank Jones",
            school: "Red Eye Inc",
            hnrd: "Honored: January 1, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/JAN_1_PHI_HERO_SHAMIKA_JONES.jpg",
            name: "Shamika Jones",
            school: "Red Eye Inc",
            hnrd: "Honored: January 1, 2019"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Jeaney Garcia",
            school: "Positive Coaching Alliance",
            hnrd: "Honored: December 29, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Nick Davidson",
            school: "Positive Coaching Alliance",
            hnrd: "Honored: December 29, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/DEC_26_SAC_HERO_ROCHELLE_SONZA.jpg",
            name: "Rochelle Sonza",
            school: "Sunburst Youth Academy",
            hnrd: "Honored: December 26, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/DEC_26_SAC_HERO_ALLANTE_CHAPPLE.jpg",
            name: "Allante Chapple",
            school: "Sunburst Youth Academy",
            hnrd: "Honored: December 26, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/DEC_22_DEN_HERO_LORENA_RODRIGUEZ.jpg",
            name: "Lorena Rodriguez",
            school: "Cedars-Sinai",
            hnrd: "Honored: December 22, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/DEC_22_DEN_HERO_MAUREEN_CHIN.jpg",
            name: "Maureen Chin",
            school: "Cedars-Sinai",
            hnrd: "Honored: December 22, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/DEC_17_POR_HERO_ANA_BRYAN.jpg",
            name: "Ana Bryan",
            school: "Boys & Girls Club Of Ramona Gardens",
            hnrd: "Honored: December 17, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/DEC_17_POR_HERO_MAGGIE_AGUILAR.jpg",
            name: "Maggie Aguilar",
            school: "Boys & Girls Club Of Ramona Gardens",
            hnrd: "Honored: December 17, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/DEC_11_TOR_HERO_JOYCE_MATSUI_KUNISAKI.jpg",
            name: "Joyce Matsui Kunisaki",
            school: "Monterey Park Mustangs",
            hnrd: "Honored: December 11, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/DEC_11_TOR_HERO_YUKI_CUTCHEON.jpg",
            name: "Yuki Cutcheon",
            school: "Monterey Park Mustangs",
            hnrd: "Honored: December 11, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/DEC_8_MIA_HERO_MICHAEL_CROOKS-JOSEPH.jpg",
            name: "Michael Crooks-Joseph",
            school: "Operation Jump Start",
            hnrd: "Honored: December 8, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/DEC_8_MIA_HERO_DIEGO_QUEVEDO.jpg",
            name: "Diego Quevedo",
            school: "Operation Jump Start",
            hnrd: "Honored: December 8, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/NOV_28_PHX_HERO_EDWIN_CROSS.jpg",
            name: "Edwin Cross",
            school: "Up 2 Us Sports",
            hnrd: "Honored: November 28, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/NOV_28_PHX_HERO_NATALIE_VASQUEZ.jpg",
            name: "Natalie Vasquez",
            school: "Up 2 Us Sports",
            hnrd: "Honored: November 28, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/NOV_23_MEM_HERO_CHRIS_WATERMAN.jpg",
            name: "Chris Waterman",
            school: "Triple Threat Mentoring",
            hnrd: "Honored: November 23, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/NOV_23_MEM_HERO_KALEB_PHILLIPS.jpg",
            name: "Kaleb Phillips",
            school: "Triple Threat Mentoring",
            hnrd: "Honored: November 23, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/NOV_15_SAS_HERO_MARGARITA_AMADOR.jpg",
            name: "Margarita Amador",
            school: "LAPD Hollenbeck Pal",
            hnrd: "Honored: November 15, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/NOV_15_SAS_HERO_JUSTIN_LEE.jpg",
            name: "Justin Lee",
            school: "LAPD Hollenbeck Pal",
            hnrd: "Honored: November 15, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/NOV_12_GSW_HERO_BRANDON_AVANT.jpg",
            name: "Brandon Avant",
            school: "US Coast Guard",
            hnrd: "Honored: November 12, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/NOV_12_GSW_HERO_MICHAEL_MEDOWS.jpg",
            name: "Michael Medows",
            school: "US Coast Guard",
            hnrd: "Honored: November 12, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/NOV_10_MIL_HERO_MICHELLE_HENRICKSON.jpg",
            name: "Michelle Henrickson",
            school: "Cedars-Sinai",
            hnrd: "Honored: November 10, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/NOV_10_MIL_HERO_SERGIO_HERNANDEZ.jpg",
            name: "Sergio Hernandez",
            school: "Cedars-Sinai",
            hnrd: "Honored: November 10, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/NOV_5_MIN_HERO_GLADY_PARGAS.jpg",
            name: "Glady Pargas",
            school: "LA Air Force Base",
            hnrd: "Honored: November 5, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/NOV_5_MIN_HERO_KENNETH_BAUTISTA.jpg",
            name: "Demar Bowe",
            school: "Lakewood Family YMCAHonored: October 28, 2018",
            hnrd: ""
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/OCT_28_WAS_HERO_JORDAN_ESPY.jpg",
            name: "Jordan Espy",
            school: "Lakewood Family YMCA",
            hnrd: "Honored: October 28, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/OCT_21_HOU_HERO_LUPE_VALENZUELA.jpg",
            name: "Lupe Valenzuela",
            school: "Team Maya Forever-Purple Rose",
            hnrd: "Honored: October 21, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/OCT_21_HOU_HERO_RUBEN_VALENZUELA.jpg",
            name: "Ruben Valenzuela",
            school: "Team Maya Forever-Purple Rose",
            hnrd: "Honored: October 21, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/OCT_19_OKC_HERO_LUCIELA_ROJAS.jpg",
            name: "Luciela Rojas",
            school: "Girls Today, Women Tomorrow",
            hnrd: "Honored: October 19, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/OCT_19_OKC_HERO_MONIQUE_VALENZUELA.jpg",
            name: "Monique Valenzuela",
            school: "Girls Today, Women Tomorrow",
            hnrd: "Honored: October 19, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/OCT_17_DEN_HERO_DERRION_WYATT.jpg",
            name: "Derrion Wyatt",
            school: "Youth Mentoring Connection",
            hnrd: "Honored: October 17, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/OCT_17_DEN_HERO_TONY_LORE.jpg",
            name: "Tony Lore",
            school: "Youth Mentoring Connection",
            hnrd: "Honored: October 17, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/OCT_11_MAC_HERO_AL_WILLIAMS.jpg",
            name: "Al Williams",
            school: "LAUSD",
            hnrd: "Honored: October 11, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/OCT_11_MAC_HERO_LAMBERT_TALLEY.jpg",
            name: "Lambert Talley",
            school: "Elevated Your G.A.M.E",
            hnrd: "Honored: October 11, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/OCT_9_DEN_HERO_JACK_BAHAM.jpg",
            name: "Jack Baham",
            school: "LAFD",
            hnrd: "Honored: October 9, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/OCT_9_DEN_HERO_JEFF_ARNOLD.jpg",
            name: "Jeff Arnold",
            school: "LAFD",
            hnrd: "Honored: October 9, 2018"
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
  min-height:400px;
}
</style>