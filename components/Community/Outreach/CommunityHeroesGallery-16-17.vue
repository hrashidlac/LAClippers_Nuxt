<template>
  <div>
    <h2 class="text-center mb-8 mt-12">2016-2017 Community Heroes</h2>
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
            photo: "https://www.nba.com/resources/static/team/v2/clippers/peter_katl_tobi-4-18.png",
            name: "Peter Kato",
            school: "Tigers Youth Club",
            hnrd: "Honored: April 18, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/kurt_johnson_tobi-4-18.png",
            name: "Kurt Johnson ",
            school: "Calabasas",
            hnrd: "Honored: April 18, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/tim_grierson_tobi-4-15.png",
            name: "Tim Grierson",
            school: "City of Carson",
            hnrd: "Honored: April 15, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/jean_elie_tobi-4-15.png",
            name: "Jean Elie",
            school: "Concerned Black Men",
            hnrd: "Honored: April 15, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/victor_vang_tobi-4-12.png",
            name: "Victor Vang",
            school: "Boys and Girls Club of Metro Los Angeles",
            hnrd: "Honored: April 12, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/anthony_newman_tobi-4-12.png",
            name: "Anthony Newman",
            school: "Boys and Girls Club of Metro Los Angeles",
            hnrd: "Honored: April 12, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/wilmer_cerrato_tobi-4-10.png",
            name: "Wilmer Cerrato",
            school: "Special Olympics Southern California",
            hnrd: "Honored: April 10, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/cynda_logsdon_tobi-4-10.png",
            name: "Cynda Logsdon",
            school: "Special Olympics Southern California",
            hnrd: "Honored: April 10, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/brandon_nhan_tobi-4-5.png",
            name: "Brandon Nhan",
            school: "LA Metro Debate League",
            hnrd: "Honored: April 5, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/joseph_flores_tobi-4-5.png",
            name: "Joseph Flores",
            school: "LA Metro Debate League",
            hnrd: "Honored: April 5, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Tacara Lovings",
            school: "Leaps N Boundz",
            hnrd: "Honored: April 1, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Kristen Cummings",
            school: "Leaps N Boundz",
            hnrd: "Honored: April 1, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Maria Lopez",
            school: "Hollydale Elementary School",
            hnrd: "Honored: March 29, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Lisa Litzel",
            school: "Magnolia Science Academy 8",
            hnrd: "Honored: March 29, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/jasmine_ako_tobi-3-26.png",
            name: "Jasmine Ako",
            school: "LAMusART",
            hnrd: "Honored: March 26, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/richard_graham_tobi-3-26.png",
            name: "Richard Graham",
            school: "LAMusART",
            hnrd: "Honored: March 26, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/shambria_williams_tobi-3-25.png",
            name: "Shambria Williams",
            school: "Vision to Learn",
            hnrd: "Honored: March 25, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/briggitte_wilson_tobi-3-25.png",
            name: "Briggitte Wilson",
            school: "Vision to Learn",
            hnrd: "Honored: March 25, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Jamal Wilson",
            school: "Jonvenes",
            hnrd: "Honored: March 20, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Ryan Cowell",
            school: "Jovenes",
            hnrd: "Honored: March 20, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Ray Hodjat",
            school: "Ball is Life",
            hnrd: "Honored: March 18, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Jason Hiroshima",
            school: "Friends of Richard",
            hnrd: "Honored: March 18, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/fernando_pattison_tobi-3-11.png",
            name: "Fernando Pattison",
            school: "LA City Fire Department",
            hnrd: "Honored: March 15, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/kenny_breskin_tobi-3-11.png",
            name: "Kenny Breskin",
            school: "LA City Fire Department",
            hnrd: "Honored: March 15, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/stephanie_slaughter_tobi-3-11-new.png",
            name: "Stephanie Slaughter",
            school: "Volunteer",
            hnrd: "Honored: March 11, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/alfredo_gomezi_tobi-3-11.png",
            name: "Alfredo Gomez",
            school: "Volunteer",
            hnrd: "Honored: March 11, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Captain Alexandria Provenghi",
            school: "US Air Force Veteran",
            hnrd: "Honored: March 6, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Chief Bryan Frieders",
            school: "Pasadena Fire Department",
            hnrd: "Honored: March 6, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/commander_greg_duncan_tobi-3-1.png",
            name: "Commander Greg Duncan",
            school: "US Coast Guard Reserve",
            hnrd: "Honored: March 1, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/captain_roland_sprewell_tobi-3-1.png",
            name: "Captain Roland Sprewell",
            school: "Los Angeles County Fire Department",
            hnrd: "Honored: March 1, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/chris_santosi_tobi-2-26.png",
            name: "Chris Santos",
            school: "US Coast Guard Base LA/LB",
            hnrd: "Honored: February 26, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/tamalega_tuinei_tobi-2-26.png",
            name: "Tamalega Tuinei",
            school: "US Coast Guard Base LA/LB",
            hnrd: "Honored: February 26, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/jaymee_legaspi_tobi-2-24.png",
            name: "Jaymee Legaspi",
            school: "Imagine LA",
            hnrd: "Honored: February 24, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/kelly_wong_tobi-2-24.png",
            name: "Kelly Wong",
            school: "Imagine LA",
            hnrd: "Honored: February 24, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Roger Lowenstein",
            school: "LA Leadership",
            hnrd: "Honored: February 15, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Jaime Urbina",
            school: "Gage Middle School",
            hnrd: "Honored: February 15, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Josh Goshorn",
            school: "Cadet Post 89",
            hnrd: "Honored: February 2, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Matt Klein",
            school: "Cadet Post 89",
            hnrd: "Honored: February 2, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/captain_brent_burton_tobi-1-19.png",
            name: "Captain Brent Burton",
            school: "100 Black Men",
            hnrd: "Honored: January 19, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/ronald_goodall_tobi-1-19.png",
            name: "Ronald Goodall",
            school: "100 Black Men",
            hnrd: "Honored: January 19, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Ken Swift",
            school: "Salvation Army Siemon Family Youth Center",
            hnrd: "Honored: January 16, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Dr. Diandra Bremond",
            school: "Brotherhood Crusade",
            hnrd: "Honored: January 16, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/life-d-griffith_tobi-1-14.png",
            name: "Life D Griffith",
            school: "Phi Beta Chapter",
            hnrd: "Honored: January 14, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/theida-salazar_tobi-1-14.png",
            name: "Theida Salazar",
            school: "The Honest Lawyers",
            hnrd: "Honored: January 14, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/roman-alvarez_tobi-1-11.png",
            name: "Roman Alvarez",
            school: "Mar Vista Family Center",
            hnrd: "Honored: January 11, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/dan_unger_tobi-1-11.png",
            name: "Dan Unger",
            school: "CIS",
            hnrd: "Honored: January 11, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Rosario Di Prima",
            school: "Catholic BBBS",
            hnrd: "Honored: January 8, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Tiffany Siart",
            school: "BBBS-LA",
            hnrd: "Honored: January 8, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Earl Edwards",
            school: "Concerned Black Men",
            hnrd: "Honored: January 4, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Jason Dingle",
            school: "Children's Collective",
            hnrd: "Honored: January 4, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Eward Preer",
            school: "Elevate your G.A.M.E.",
            hnrd: "Honored: January 2, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Donald Jenkins",
            school: "LA Job Corps",
            hnrd: "Honored: January 2, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Tony Navarro",
            school: "Cadet Post",
            hnrd: "Honored: December 26, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Carla Navarro",
            school: "Cadet Post",
            hnrd: "Honored: December 26, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/andre_patterson_tobi-12-23.png",
            name: "Andre Patterson",
            school: "Salvation Army Siemon Family Youth Center",
            hnrd: "Honored: December 23, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/maxine_higa_tobi-12-23.png",
            name: "Maxine Higa",
            school: "Salvation army",
            hnrd: "Honored: December 23, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/crystal_perez_tobi-12-22.png",
            name: "Crystal Perez",
            school: "Young Horizons",
            hnrd: "Honored: December 22, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/andrea_carrasco_tobi-12-22.png",
            name: "Andrea Carrasco ",
            school: "Young Horizons",
            hnrd: "Honored: December 22, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Barbara Sheridan",
            school: "Giving Children Hope",
            hnrd: "Honored: December 20, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Dan Suh",
            school: "Giving Children Hope",
            hnrd: "Honored: December 20, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/josh_johnston_dec_12.png",
            name: "Josh Johnston",
            school: "Friends of Robinson Garden",
            hnrd: "Honored: December 12, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/fernando_marroquin_dec_12.png",
            name: "Fernando Marroquin",
            school: "Friends of Robinson Garden",
            hnrd: "Honored: December 12, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Don Weissman",
            school: "Boys and Girls Club of West Valley",
            hnrd: "Honored: December 10, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Jaemin Yang",
            school: "Boys and Girls Club of West Valley",
            hnrd: "Honored: December 10, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Coach-Al-tobi-161207-new.png",
            name: "Coach Al",
            school: "Boys and Girls Club Long Beach",
            hnrd: "Honored: December 7, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Miles-Davis-tobi-161207-new.png",
            name: "Miles Davis",
            school: "Boys and Girls Club Long Beach",
            hnrd: "Honored: December 7, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Lauri-Haldermant-tobi-161204-new.png",
            name: "Lauri Halderman",
            school: "CASA of Los Angeles",
            hnrd: "Honored: December 4, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Carol-Henault-tobi-161204-new.png",
            name: "Carol Henault",
            school: "Reading is Fundemental of Southern California",
            hnrd: "Honored: December 4, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Betty-LaMarr-tobi-161121.png",
            name: "Betty LaMarr",
            school: "LEAP",
            hnrd: "Honored: November 21, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Ryan-Taylor-tobi-161121.png",
            name: "Ryan Taylor",
            school: "LEAP",
            hnrd: "Honored: November 21, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/vic-braden-tobi-161119.png",
            name: "Vic Braden",
            school: "Sharefest Communtity Developement",
            hnrd: "Honored: November 19, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/veronica-melvin-tobi-161119.png",
            name: "Veronica Melvin",
            school: "President / CEO, LA Promise Fund",
            hnrd: "Honored: November 19, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/dana-brown-tobi-161116.png",
            name: "Dana Brown",
            school: "St. Joseph",
            hnrd: "Honored: November 16, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/paula-buckley-tobi-161116.png",
            name: "Paula Buckley",
            school: "Volunteer Extraordinaire, St. Joseph",
            hnrd: "Honored: November 16, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/daren-laier-tobi-161114.png",
            name: "Darin Laier",
            school: "LAFD",
            hnrd: "Honored: November 14, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/danny-wu-tobi-161114.png",
            name: "Danny Wu",
            school: "LAFD",
            hnrd: "Honored: November 14, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/damian-smith-tobi-161109.png",
            name: "Damion Smith",
            school: "Program Coordinator, Children's Collective",
            hnrd: "Honored: November 9, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/fonda-whitehead-tobi-161109.png",
            name: "Fonda Whitehead",
            school: "Development Director, Bresee Foundation",
            hnrd: "Honored: November 9, 2016"
          }
          ,
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/deanthony-langston-tobi-161107.png",
            name: "DeAnthony Langston",
            school: "LA Job Corps",
            hnrd: "Honored: November 7, 2016"
          }
          ,
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Lisa-Wilson-tobi-161107.png",
            name: "Lisa Wilson",
            school: "Youth of Promise Flintridge",
            hnrd: "Honored: November 7, 2016"
          }
          ,
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/tim-aguayo-tobi-161102.png",
            name: "Tim Aguayo",
            school: "LAFD",
            hnrd: "Honored: November 2, 2016"
          }
          ,
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/tyler-varnum-tobi-161102.png",
            name: "Tyler Varnum",
            school: "LAFD",
            hnrd: "Honored: November 2, 2016"
          }
          ,
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/edward-grey-tobi-161031.png",
            name: "Edward Grey",
            school: "Los Angeles Department of Recreation and Parks",
            hnrd: "Honored: October 31, 2016"
          }
          ,
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/alan-jung-tobi-161031.png",
            name: "Alan Jung",
            school: "Los Angeles Department of Recreation",
            hnrd: "Honored: October 31, 2016"
          }
          ,
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/billy-don-jackson-tobi-161030.png",
            name: "Billy Don Jackson",
            school: "YMCA",
            hnrd: "Honored: October 30, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/chris-thomas-tobi-161030.png",
            name: "Chris Thomas",
            school: "YMCA",
            hnrd: "Honored: October 30, 2016"
          },
          {
            photo: "Honored: October 30, 2016",
            name: "Lucia Diaz",
            school: "Mar Vista Community Center",
            hnrd: "Honored: October 13, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/dana-henry-tobi-161013.png",
            name: "Dana Henry",
            school: "Communities in School",
            hnrd: "Honored: October 13, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/eric-avendano-tobi-161010.png",
            name: "Eric Avendano",
            school: "LAPD",
            hnrd: "Honored: October 10, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/alfredo-lamas-tobi-161010.png",
            name: "Alfredo Lamas",
            school: "LAPD",
            hnrd: "Honored: October 10, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/danielle-lopez-tobi-161005.png",
            name: "Officer Danielle Lopez",
            school: "LAPD",
            hnrd: "Honored: October 5, 2016"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/bryan-waggener-tobi-161005.png",
            name: "Officer Bryan Waggener",
            school: "LAPD",
            hnrd: "Honored: October 5, 2016"
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
  min-height:450px;
}
</style>