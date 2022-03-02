<template>
  <div>
    <h2 class="text-center mb-8 mt-24">2017-2018 Community Heroes</h2>
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
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-LAL-LaTonja-Lindsey-180411.png",
            name: "LaTonja Lindsey",
            school: "Union Rescue Mission",
            hnrd: "Honored: April 11, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-LAL-Rosa-Ruiz-180411.png",
            name: "Rosa Ruiz",
            school: "Union Rescue Mission",
            hnrd: "Honored: April 11, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-NOP-Jaime-Walters-180409.png",
            name: "Jaime Walters",
            school: "Los Angeles Fire Department",
            hnrd: "Honored: April 9, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-NOP-Omari-Battles-180409.png",
            name: "Omari Battles",
            school: "100 Black Men",
            hnrd: "Honored: April 9, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-DEN-Jennifer-Chan-180407.png",
            name: "Jennifer Chan",
            school: "Cedars-Sinai",
            hnrd: "Honored: April 7, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-DEN-Beverly-Allen-180407.png",
            name: "Beverly Allen",
            school: "STEAM:CODERS",
            hnrd: "Honored: April 7, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Cristina-Davis-SAS-180403.png",
            name: "Cristina Davis",
            school: "Girls Inc. of Greater Los Angeles",
            hnrd: "Honored: April 3, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Vicki-Connely-SAS-180403.png",
            name: "Vicki Connely",
            school: "Girls Inc. of Greater Los Angeles",
            hnrd: "Honored: April 3, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Shareny-Plaza-IND-180401.png",
            name: "Shareny Plaza",
            school: "Girls on the Run LA",
            hnrd: "Honored: April 1, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Kaila-Toce-IND-180401.png",
            name: "Kaila Toce",
            school: "Girls on the Run LA",
            hnrd: "Honored: April 1, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Moneka-Reece--MIL-180327.png",
            name: "Moneka Reece",
            school: "A Place for me Mentoring",
            hnrd: "Honored: March 27, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Annie-Augustin-MIL-180327.png",
            name: "Annie Augustin",
            school: "Triple Threat Mentoring",
            hnrd: "Honored: March 27, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Celina-Lopez-POR-180318.png",
            name: "Celina Lopez",
            school: "Reach Out/Latino Health Collaborative",
            hnrd: "Honored: March 18, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Priscilla-Leal-POR-180318.png",
            name: "Priscilla Leal",
            school: "Lutheran Social Services of Southern California",
            hnrd: "Honored: March 18, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Cynthia-Messenger-ORL-180310.png",
            name: "Cynthia Messenger",
            school: "Girl Scouts of Greater Los Angeles",
            hnrd: "Honored: March 10, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Dominique-Wilkes-ORL-180310.png",
            name: "Dominique Wilkes",
            school: "Girl Scouts of Greater Los Angeles",
            hnrd: "Honored: March 10, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Lindsay-Amstutz-CLE-180309.png",
            name: "Evan Unrau",
            school: "Positive Coaching Alliance",
            hnrd: "Honored: March 9, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Evan-Unrau-CLE-180309.png",
            name: "Lindsay Amstutz",
            school: "Positive Coaching Alliance",
            hnrd: "Honored: March 9, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Tiffany-Walker-NOP-180306.png",
            name: "Tiffany Walker",
            school: "Advancing Communities",
            hnrd: "Honored: March 6, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Maggie-Kavarin-CLE-180309.png",
            name: "Maggie Kavarin",
            school: "City of Glendale, Community Services and Parks",
            hnrd: "Honored: March 6, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Courtnay-Caufield-BKN-180304.png",
            name: "Courtnay Caufield",
            school: "Cedars-Sinai",
            hnrd: "Honored: March 4, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Bevin-Marideth-BKN-180304.png",
            name: "Bevin Marideth",
            school: "Cedars-Sinai",
            hnrd: "Honored: March 4, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Phatara Chavis",
            school: "Phenomenal Angels of the Community",
            hnrd: "Honored: March 2, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Barbara Jett",
            school: "Phenomenal Angels of the Community",
            hnrd: "Honored: March 2, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Claude-Millhouse-HOU-180228.png",
            name: "Claude Millhouse",
            school: "Mid Valley YMCA",
            hnrd: "Honored: February 28, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Miguel-Ramirez-HOU-180228.png",
            name: "Miguel Ramirez",
            school: "Mid Valley YMCA",
            hnrd: "Honored: February 28, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Ben-Alday-DAL-180205.png",
            name: "Ben Alday",
            school: "Triple Threat Mentoring",
            hnrd: "Honored: February 5, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Jason-Lamb-DAL-180205.png",
            name: "Jason Lamb",
            school: "Triple Threat Mentoring ",
            hnrd: "Honored: February 5, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Tyree-Boyd-CHI-180203.png",
            name: "Tyree Boyd",
            school: "California African American Museum",
            hnrd: "Honored: February 3, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Kimberly-Tronic-CHI-180203.png",
            name: "Kimberly Tronic",
            school: "Cedars-Sinai",
            hnrd: "Honored: February 3, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Tony Yang",
            school: "Triple Threat Mentoring",
            hnrd: "Honored: January 30, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Ronnie Robles",
            school: "Triple Threat Mentoring",
            hnrd: "Honored: January 30, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Becky Avila",
            school: "Mar Vista Family Center",
            hnrd: "Honored: January 24, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Roxanna Suarez",
            school: "Mar Vista Family Center",
            hnrd: "Honored: January 24, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Alberto-Ramos-MIN-180122.png",
            name: "Alberto Ramos",
            school: "Power 4 Youth",
            hnrd: "Honored: January 22, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Jason-Dingle-MIN-180122.png",
            name: "Jason Dingle",
            school: "The Children's Collective",
            hnrd: "Honored: January 22, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Maria-Ladesma-DEN-180117.png",
            name: "Maria Ladesma",
            school: "SPARK",
            hnrd: "Honored: January 17, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Stephanie-Aguilar-DEN-180117.png",
            name: "Stephanie Aguilar",
            school: "Catholic Big Brothers Big Sisters",
            hnrd: "Honored: January 17, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Danny-Bakewell-HOU-180115.png",
            name: "Danny Bakewell",
            school: "",
            hnrd: "Honored: January 15, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Stinson-Brown-HOU-180115.png",
            name: "Stinson Brown",
            school: "",
            hnrd: "Honored: January 15, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Devon-Feldmeth-SAC-180113.png",
            name: "Devon Feldmeth",
            school: "Red Eye",
            hnrd: "Honored: January 13, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Norma-Soto-SAC-180113.png",
            name: "Norma Soto",
            school: "The Salvation Army Seimon Family Youth and Community Center",
            hnrd: "Honored: January 13, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Nakawa-Shepherd-ATL-180108.png",
            name: "Nakawa Shepherd",
            school: "LA Job Corp",
            hnrd: "Honored: January 8, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Jane-Bemis-ATL-180108.png",
            name: "Jane Bemis",
            school: "Operation Jump Start",
            hnrd: "Honored: January 8, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Edd-Benda-GSW-180106.png",
            name: "Edd Benda",
            school: "Big Brothers Big Sisters of Greater Los Angeles",
            hnrd: "Honored: January 6, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Joanne-Ordono--GSW-180106.png",
            name: "Joanne Ordono",
            school: "Cedars-Sinai",
            hnrd: "Honored: January 6, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Cedric-White-OKC-180104.png",
            name: "Cedric White",
            school: "Concerned Black Men",
            hnrd: "Honored: January 4, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Shamera-Johnson--OKC-180104.png",
            name: "Shamera Johnson",
            school: "Long Beach Blast",
            hnrd: "Honored: January 4, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Ryan-Handy-MEM-180102.png",
            name: "Ryan Handy",
            school: "Los Angeles County Sheriffs Department",
            hnrd: "Honored: January 2, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Tony-Handy-MEM-180102.png",
            name: "Tony Handy",
            school: "Los Angeles Fire Department",
            hnrd: "Honored: January 2, 2018"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Robert-Hinojosa-CHA-181231.png",
            name: "Robert Hinojosa",
            school: "Los Angeles Fire Department",
            hnrd: "Honored: December 31, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Ted-Chambers-CHA-181231.png",
            name: "Ted Chambers",
            school: "Los Angeles Fire Department",
            hnrd: "Honored: December 31, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Dustin-Cannistraci--SAC-181226.png",
            name: "Dustin Cannistraci ",
            school: "Los Angeles Fire Department",
            hnrd: "Honored: December 26, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Greg-Galvez-SAC-181226.png",
            name: "Greg Galvez",
            school: "Los Angeles Fire Department",
            hnrd: "Honored: December 26, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Claire-Martinez-PHX-181220.png",
            name: "Claire Martinez",
            school: "Mission Hills Tigers Boys and Girls Club",
            hnrd: "Honored: December 20, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Jolie-Navarro--PHX-181220.png",
            name: "Jolie Navarro",
            school: "Mission Hills Tigers Boys and Girls Club",
            hnrd: "Honored: December 20, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Olga Perez",
            school: "Boys and Girls Club of Ramona Gardens",
            hnrd: "Honored: December 11, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Julian Corona",
            school: "Boys and Girls Club of Ramona Gardens",
            hnrd: "Honored: December 11, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Dechu-Puliyanda-WAS-181209.png",
            name: "Dr. Dechu Puliyanda",
            school: "Cedars-Sinai",
            hnrd: "Honored: December 9, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Raymond-Anthony-Sanchez-WAS-181209.png",
            name: "Raymond Anthony Sanchez",
            school: "Ted Watkins Park",
            hnrd: "Honored: December 9, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Carlos-Martinez-MIN-181206.png",
            name: "Carlos Martinez",
            school: "Boys and Girls Club of East LA",
            hnrd: "Honored: December 6, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Isaac-Flores-MIN-181206.png",
            name: "Isaac Flores",
            school: "Boys and Girls Club of East LA",
            hnrd: "Honored: December 6, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Robin-Goldsworthy-UTA-171130.png",
            name: "Robin Goldsworthy",
            school: "Verdugo Hills Council of the Boy Scouts",
            hnrd: "Honored: November 30, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Michelle-Gonzalez-UTA-171130.png",
            name: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Michelle-Gonzalez-UTA-171130.png",
            school: "Verdugo Hills Council of the Boy Scouts",
            hnrd: "Honored: November 30, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Daniel-Gutierrez-LAL-171127.png",
            name: "Daniel Gutierrez",
            school: "LAFD",
            hnrd: "Honored: November 27, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Adam-Walker-LAL-171127.png",
            name: "Adam Walker",
            school: "LAFD",
            hnrd: "Honored: November 27, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Alaina-Tillman-PHI-171113.png",
            name: "Alaina Tillman",
            school: "The Purple Rose Foundation",
            hnrd: "Honored: November 13, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Kimberly-Burnett-PHI-171113.png",
            name: "Kimberly Burnett",
            school: "The Purple Rose Foundation",
            hnrd: "Honored: November 13, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-James-Shaw-MIA-171105.png",
            name: "James Shaw",
            school: "Santee American Basketball",
            hnrd: "Honored: November 5, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Sandie-Sternberg-MIA-171105.png",
            name: "Sandie Sternberg",
            school: "Cedars-Sinai",
            hnrd: "Honored: November 5, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Sylvester Allison III",
            school: "Dream It First Foundation",
            hnrd: "Honored: November 4, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Gabriela Garcia",
            school: "Dream It First Foundation",
            hnrd: "Honored: November 4, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Franz-Bahadosingn-DAL-171101.png",
            name: "Franz Bahadosingn",
            school: "SPARK",
            hnrd: "Honored: November 1, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Vy-Jen-DAL-171101.png",
            name: "Vy Jen",
            school: "SPARK",
            hnrd: "Honored: November 1, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Jerry-Johnson-GSW-171030.png",
            name: "Jerry Johnson",
            school: "LAFD",
            hnrd: "Honored: October 30, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Anthony-Kong-GSW-171030.png",
            name: "Anthony Kong",
            school: "LAFD",
            hnrd: "Honored: October 30, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Luq-Watkins-DET-171028.png",
            name: "Luq Watkins",
            school: "BBBS-LA",
            hnrd: "Honored: October 28, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Stephanie-Powers-Kurtz-DET-171028.png",
            name: "Stephanie Powers-Kurtz",
            school: "BBBS-LA",
            hnrd: "Honored: October 28, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Nason-Buchanan-UTA-171024.png",
            name: "Nason Buchanan",
            school: "DTML",
            hnrd: "Honored: October 24, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Cameron-Williamson-Martin-UTA-171024.png",
            name: "Cameron Williamson-Martin",
            school: "DTML",
            hnrd: "Honored: October 24, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Larune-Valentine-PHX-171021.png",
            name: "Larune Valentine",
            school: "US Coast Guard",
            hnrd: "Honored: October 21, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Dirik-Moses-PHX-171021.png",
            name: "Dirik Moses",
            school: "US Coast Guard",
            hnrd: "Honored: October 21, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-James-Lee-LAL-171013.png",
            name: "James Lee",
            school: "Mustangs REC & PARKS",
            hnrd: "Honored: October 13, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-John-Au-LAL-171013.png",
            name: "John Au",
            school: "Mustangs REC & PARKS",
            hnrd: "Honored: October 13, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-James-Rucker-SAC-171012.png",
            name: "James Rucker",
            school: "Operation Jump Start",
            hnrd: "Honored: October 12, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Lance-Villena-SAC-171012.png",
            name: "Lance Villena",
            school: "Operation Jump Start",
            hnrd: "Honored: October 12, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Antoine-McNeely-POR-171008.png",
            name: "Antoine McNeely",
            school: "City of Hawthorne",
            hnrd: "Honored: October 8, 2017"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/160x160-Charles-Bryant-POR-171008.png",
            name: "Charles Bryant",
            school: "City of Hawthorne",
            hnrd: "Honored: October 8, 2017"
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