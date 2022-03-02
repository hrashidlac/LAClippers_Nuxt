<template>
  <div>
    <h2 class="text-center mb-8 mt-24">2016-2017 Season Spotlights</h2>
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
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Janet McAbee",
            school: "Stowers Magnet School of International Studies ",
            hnrd: "Honored: Oct. 24th, Clippers vs. Jazz"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/nate-mercuro-171024.jpg",
            name: "Nate Mercuro",
            school: "Culverdale",
            hnrd: "Honored: Oct. 24th, Clippers vs. Jazz"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/danielle-culhume-171024.jpg",
            name: "Danielle Culhane",
            school: "Paramount Park Middle School",
            hnrd: "Honored: Oct. 24th, Clippers vs. Jazz"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/alan-silva-171024.jpg",
            name: "Alan Silva",
            school: "KIPP Academy of Innovation ",
            hnrd: "Honored: Oct. 24th, Clippers vs. Jazz"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/sarah-cho-171024.jpg",
            name: "Sarah Cho",
            school: "Lomita STEAM Magnet ES",
            hnrd: "Honored: Oct. 24th, Clippers vs. Jazz"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/brenda-nguyen-171024.jpg",
            name: "Brenda Nguyen",
            school: "Hope Lutheran",
            hnrd: "Honored: Oct. 24th, Clippers vs. Jazz"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/ricardo-toland-171024.jpg",
            name: "Ricardo Toland",
            school: "School for the Visual Arts - RFK ",
            hnrd: "Honored: Oct. 24th, Clippers vs. Jazz"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/lorraine-alcala-171024.jpg",
            name: "Lorraine Alcala",
            school: "Teresa Hughes Elementary",
            hnrd: "Honored: Oct. 24th, Clippers vs. Jazz"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Jeff Lucas",
            school: "Los Altos High School",
            hnrd: "Honored: Oct. 24th, Clippers vs. Jazz"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/sarah-corrick-171024.jpg",
            name: "Sara Corrick",
            school: "Pearblossom ",
            hnrd: "Honored: Oct. 24th, Clippers vs. Jazz"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/caryn-michaels-171024.jpg",
            name: "Caryn Michaels",
            school: "Canoga Park High School",
            hnrd: "Honored: Oct. 24th, Clippers vs. Jazz"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/sylviaharris-171028.jpg",
            name: "Sylvia Harris",
            school: "Sixty Sixth Street Elementary School",
            hnrd: "Honored: Oct. 28th, Clippers vs. Pistons"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/victoriabanes-171028.jpg",
            name: "Victoria Banes",
            school: "Barton Elementary ",
            hnrd: "Honored: Oct. 28th, Clippers vs. Pistons"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/nancybolguin-171028.jpg",
            name: "Nancy Bolguin",
            school: "Los Amigos Dual Immersion School",
            hnrd: "Honored: Oct. 28th, Clippers vs. Pistons"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/sakokara-171028.jpg",
            name: "Sako Karaoghlanian",
            school: "St. Gregory Hovsepian School",
            hnrd: "Honored: Oct. 28th, Clippers vs. Pistons"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/mariebrown-171028.jpg",
            name: "Marie Brown",
            school: "St. Gregory the Great ",
            hnrd: "Honored: Oct. 28th, Clippers vs. Pistons"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/rosalindagallegos-171028.jpg",
            name: "Rosalinda Gallegos",
            school: "Edison Elementary",
            hnrd: "Honored: Oct. 28th, Clippers vs. Pistons"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/jerrymalkowski-171028.jpg",
            name: "Jerry Malkowski",
            school: "Academy of the Canyons",
            hnrd: "Honored: Oct. 28th, Clippers vs. Pistons"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/darlenelevine-171028.jpg",
            name: "Darlene Levine",
            school: "Rancho Vista Elementary School ",
            hnrd: "Honored: Oct. 28th, Clippers vs. Pistons"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/anarepreza-171104.jpg",
            name: "Ana Repreza",
            school: "Grant Elementary",
            hnrd: "Honored: Nov. 4th, Clippers vs. Grizzlies"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/danahemlin-171104.jpg",
            name: "Dana Hamlin",
            school: "Topeka Charter SAS",
            hnrd: "Honored: Nov. 4th, Clippers vs. Grizzlies"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/richardjimenez-171104.jpg",
            name: "Richard Jimenez",
            school: "Vista Heritage Charter Middle School ",
            hnrd: "Honored: Nov. 4th, Clippers vs. Grizzlies"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/amyrobertson-171104.jpg",
            name: "Amy Robertson",
            school: "Mira Catalina Elementary School",
            hnrd: "Honored: Nov. 4th, Clippers vs. Grizzlies"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/ingridcastro-171104.jpg",
            name: "Ingrid Astro",
            school: "Celerity Cardinal Charter School",
            hnrd: "Honored: Nov. 4th, Clippers vs. Grizzlies"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/katezarouk-171104.jpg",
            name: "Kate Zarouk",
            school: "Albert Einstein Academy ",
            hnrd: "Honored: Nov. 4th, Clippers vs. Grizzlies"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/helenkhau-171104.jpg",
            name: "Helen Khau - Ramillano",
            school: "Logan Academy of Global Ecology",
            hnrd: "Honored: Nov. 4th, Clippers vs. Grizzlies"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/marcocastillo-171104.jpg",
            name: "Marco Castillo",
            school: "Florence Avenue",
            hnrd: "Honored: Nov. 4th, Clippers vs. Grizzlies"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/sarah-angel-171113.jpg",
            name: "Sara Angel",
            school: "KIPP Academy of Innovation ",
            hnrd: "Honored: Nov. 13th, Clippers vs. Sixers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/barb-roberts-171113.jpg",
            name: "Barbara Roberts",
            school: "Manchester Ave ES",
            hnrd: "Honored: Nov. 13th, Clippers vs. Sixers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/maria-mendoza-171113.jpg",
            name: "Maria Mendoza",
            school: "ICEF Lou Dantzler Preparatory Academy",
            hnrd: "Honored: Nov. 13th, Clippers vs. Sixers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/adam-underwood-171113.jpg",
            name: "Adam Underwood",
            school: "Environmental Charter Middle School ",
            hnrd: "Honored: Nov. 13th, Clippers vs. Sixers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/megan-mather-171113.jpg",
            name: "Megan Mather",
            school: "Renaissance High School",
            hnrd: "Honored: Nov. 13th, Clippers vs. Sixers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/mona-walker-171113.jpg",
            name: "Mona Walker",
            school: "Compton Early College High School",
            hnrd: "Honored: Nov. 13th, Clippers vs. Sixers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/loretta-estalilla-171113.jpg",
            name: "Loretta Estalilla",
            school: "View Park Prep Middle School ",
            hnrd: "Honored: Nov. 13th, Clippers vs. Sixers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/dan-yoder-171113.jpg",
            name: "Dan Yoder",
            school: "La Canada High School",
            hnrd: "Honored: Nov. 13th, Clippers vs. Sixers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/cindy-underwood-171113.jpg",
            name: "Cindy Underwood",
            school: "Washington Elementary School",
            hnrd: "Honored: Nov. 13th, Clippers vs. Sixers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/yvette-martin-171113.jpg",
            name: "Yvette Martin",
            school: "Tom Bradley Global Awareness Magnet School ",
            hnrd: "Honored: Nov. 13th, Clippers vs. Sixers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/150-geradoalejandre.jpg",
            name: "Gerado Alejandre",
            school: "ICEF Inglewood Elementary Charter Academy",
            hnrd: "Honored: Nov. 30th, Clippers vs. Jazz"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/steph-aguon-171130.jpg",
            name: "Stephanie Aguon",
            school: "Will Rogers Elementary",
            hnrd: "Honored: Nov. 30th, Clippers vs. Jazz"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/ashley-bonilla-171130.jpg",
            name: "Ashley Bonilla",
            school: "Selma Ave Elementary ",
            hnrd: "Honored: Nov. 30th, Clippers vs. Jazz"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Brittany Walters",
            school: "Esther L. Walter Elementary School",
            hnrd: "Honored: Nov. 30th, Clippers vs. Jazz"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Lakisha Grant",
            school: "New Millenium School",
            hnrd: "Honored: Nov. 30th, Clippers vs. Jazz"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/jenine-urquirza-171130.jpg",
            name: "Jenine Urquirza",
            school: "Jordan Intermediate ",
            hnrd: "Honored: Nov. 30th, Clippers vs. Jazz"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/joe-silva-171130.jpg",
            name: "Joe Silva",
            school: "75th Street Elementary School",
            hnrd: "Honored: Nov. 30th, Clippers vs. Jazz"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/tina-white-171130.jpg",
            name: "Tina White",
            school: "ICEF Innovation Los Angeles Charter School",
            hnrd: "Honored: Nov. 30th, Clippers vs. Jazz"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Irene Fajardo",
            school: "Bell Gardens Intermediate ",
            hnrd: "Honored: Nov. 30th, Clippers vs. Jazz"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/sandra-rodriguez-171130.jpg",
            name: "Sandra Rodriguez",
            school: "Dr. Owen Knox ES",
            hnrd: "Honored: Nov. 30th, Clippers vs. Jazz"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/rachel-hirst-171209.jpg",
            name: "Rachel Hirst",
            school: "Hilda L. Solis Learning Academy",
            hnrd: "Honored: Dec. 9th, Clippers vs. Wizards"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/terrence-wright-2-171209.jpg",
            name: "Terrence Wright",
            school: "Vista Charter Middle School ",
            hnrd: "Honored: Dec. 9th, Clippers vs. Wizards"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/anna-sacks-171209.jpg",
            name: "Anna Sacks",
            school: "Harbor Teacher Preparation Academy",
            hnrd: "Honored: Dec. 9th, Clippers vs. Wizards"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/khia-bautista-171209.jpg",
            name: "Khia Bautista",
            school: "Immaculate Heart of Mary School",
            hnrd: "Honored: Dec. 9th, Clippers vs. Wizards"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/shelly-warschaw-171209.jpg",
            name: "Shelly Warschaw",
            school: "Traweek Middle School ",
            hnrd: "Honored: Dec. 9th, Clippers vs. Wizards"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/joanne-treffner-171209.jpg",
            name: "Joanne Treffner",
            school: "Early College High School",
            hnrd: "Honored: Dec. 9th, Clippers vs. Wizards"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/rosanne-hoang-2-171209.jpg",
            name: "Rosanne Hoang",
            school: "Cedarlane Academy",
            hnrd: "Honored: Dec. 9th, Clippers vs. Wizards"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Margie Lopez",
            school: "Sundown Elementary ",
            hnrd: "Honored: Dec. 9th, Clippers vs. Wizards"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/barry-flowers-171209.jpg",
            name: "Barry Flowers",
            school: "Lenicia B. Weemes EL",
            hnrd: "Honored: Dec. 9th, Clippers vs. Wizards"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/robin-mcpherson-171209.jpg",
            name: "Robin McPherson",
            school: "Frank J. Zamboni Middle School",
            hnrd: "Honored: Dec. 9th, Clippers vs. Wizards"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/heathersandoval-171220.jpg",
            name: "Heather Sandoval",
            school: "Newmark High School ",
            hnrd: "Honored: Dec. 20th, Clippers vs. Suns"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/mariselachavarin-171220.jpg",
            name: "Marisela Chavarin",
            school: "Calvary Baptist Schools",
            hnrd: "Honored: Dec. 20th, Clippers vs. Suns"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/peterkoonce-171220.jpg",
            name: "Peter Koonce",
            school: "Mark Twain Middle School",
            hnrd: "Honored: Dec. 20th, Clippers vs. Suns"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/andreacarlson-171220.jpg",
            name: "Andrea Carlson",
            school: "Murphy Ranch Elementary School ",
            hnrd: "Honored: Dec. 20th, Clippers vs. Suns"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/zaydarodriguez-171220.jpg",
            name: "Zayda Rodriguez",
            school: "St. Odilia",
            hnrd: "Honored: Dec. 20th, Clippers vs. Suns"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/leticiabarnes-171220.jpg",
            name: "Leticia Barnes",
            school: "Van Deene Elementary School",
            hnrd: "Honored: Dec. 20th, Clippers vs. Suns"
          },
          {
            photo: "Honored: Dec. 20th, Clippers vs. Suns",
            name: "Robyn Stankiewicz",
            school: "La Verne Science & Technology Charter School ",
            hnrd: "Honored: Dec. 20th, Clippers vs. Suns"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/vickie-mccloyn-180108.jpg",
            name: "Vickie McCloyn",
            school: "Hughes Middle School",
            hnrd: "Honored: Jan. 8th, Clippers vs. Hawks"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/catherine-brady-180108.jpg",
            name: "Catherine Brady",
            school: "Stanford Middle School",
            hnrd: "Honored: Jan. 8th, Clippers vs. Suns"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/adolfo-gonzalez-180108.jpg",
            name: "Adolfo Gonzalez",
            school: "Charles W. Barrett Elementary ",
            hnrd: "Honored: Jan. 8th, Clippers vs. Hawks"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Todd Silverstein",
            school: "Los Angeles Leadership Academy",
            hnrd: "Honored: Jan. 8th, Clippers vs. Hawks"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/michelle-suarez-180108.jpg",
            name: "Michelle Suarez",
            school: "Communication & Technology School",
            hnrd: "Honored: Jan. 8th, Clippers vs. Hawks"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/mikajain-180117.jpg",
            name: "Mika Jain",
            school: "KIPP Ignite Academy ",
            hnrd: "Honored: Jan. 17th, Clippers vs. Nuggets"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Jeff Truitt",
            school: "Angel's Gate High School",
            hnrd: "Honored: Jan. 17th, Clippers vs. Nuggets"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-female-thumb.png",
            name: "Michelle Varghese",
            school: "Richmond Street School",
            hnrd: "Honored: Jan. 17th, Clippers vs. Nuggets"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/marinaearles-180117.jpg",
            name: "Marina Earles",
            school: "Longfellow Elementary ",
            hnrd: "Honored: Jan. 17th, Clippers vs. Nuggets"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/susanshoji-180117.jpg",
            name: "Susan Shojinaga",
            school: "Mayall Academy of Arts and Technology Magnet",
            hnrd: "Honored: Jan. 17th, Clippers vs. Nuggets"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/lilliannava-180117.jpg",
            name: "Lillian Nava",
            school: "South Gate Middle School",
            hnrd: "Honored: Jan. 17th, Clippers vs. Nuggets"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/michael-miller-180130.jpg",
            name: "Michael Miller",
            school: "Franklin Elementary ",
            hnrd: "Honored: Jan. 30th, Clippers vs. Trail Blazers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/lindsey-farris-180130.jpg",
            name: "Lindsey Farris",
            school: "Marina Del Rey Middle School",
            hnrd: "Honored: Jan. 30th, Clippers vs. Trail Blazers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/julia-gutierrez-180130.jpg",
            name: "Julia Gutierrez",
            school: "Barton Hill Elementary",
            hnrd: "Honored: Jan. 30th, Clippers vs. Trail Blazers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/esteban-garcia-180130.jpg",
            name: "Esteban Garcia",
            school: "Maywood Elementary ",
            hnrd: "Honored: Jan. 30th, Clippers vs. Trail Blazers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/nicole-hamamura-180130.jpg",
            name: "Nicole Hamamura",
            school: "Madison Elementary School",
            hnrd: "Honored: Jan. 30th, Clippers vs. Trail Blazers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/stephen-macdowell-180130.jpg",
            name: "Stephen MacDowell",
            school: "John H. Nuffer Elementary",
            hnrd: "Honored: Jan. 30th, Clippers vs. Trail Blazers"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Angelica Garcia",
            school: "Foster Elementary ",
            hnrd: "Honored: Feb. 5th, Clippers vs. Mavericks"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/anaisjanoyan-180205.jpg",
            name: "Anais Janoyan",
            school: "Madison Elementary School",
            hnrd: "Honored: Feb. 5th, Clippers vs. Mavericks"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/angelaguerrero-180205.jpg",
            name: "Angela Guerrero",
            school: "Arroyo Seco Museum Science Magnet",
            hnrd: "Honored: Feb. 5th, Clippers vs. Mavericks"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/johnolesk-180205.jpg",
            name: "John Oleskiewicz",
            school: "Rosemont Avenue Elementary ",
            hnrd: "Honored: Feb. 5th, Clippers vs. Mavericks"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Aaron Riekenberg",
            school: "La Habra High School",
            hnrd: "Honored: Feb. 5th, Clippers vs. Mavericks"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/tracycoleman-180205.jpg",
            name: "Tracy Coleman-Wilson",
            school: "Stephen C. Foster Elementary",
            hnrd: "Honored: Feb. 5th, Clippers vs. Mavericks"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/laurelpriesz-180304.jpg",
            name: "Laurel Priesz",
            school: "Canyon High School ",
            hnrd: "Honored: Mar. 4th, Clippers vs. Nets"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/joelflores-180304.jpg",
            name: "Joel Flores",
            school: "Back Bay High School",
            hnrd: "Honored: Mar. 4th, Clippers vs. Nets"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/kristybasty-180304.jpg",
            name: "Kristy Basty",
            school: "Albert Einstein Academy K-5",
            hnrd: "Honored: Mar. 4th, Clippers vs. Nets"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/fredlargent-180304.jpg",
            name: "Fred Largent",
            school: "Albert Einstein Academy Agua Dulce Partnership ",
            hnrd: "Honored: Mar. 4th, Clippers vs. Nets"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/charleneschwarz-180304.jpg",
            name: "Charlene Schwarz",
            school: "Diego Rivera-Public Service Community School",
            hnrd: "Honored: Mar. 4th, Clippers vs. Nets"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/stevenmoss-180304.jpg",
            name: "Steven Moss",
            school: "Weigand Avenue Elementary",
            hnrd: "Honored: Mar. 4th, Clippers vs. Nets"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/Teacher-Appreciation-male-thumb.png",
            name: "Eduardo Duenas",
            school: "St. Dorothy Catholic School ",
            hnrd: "Honored: Mar. 4th, Clippers vs. Nets"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/silviovidal-180304.jpg",
            name: "Silvio Vidal",
            school: "South Gate Middle School STEM Magnet",
            hnrd: "Honored: Mar. 4th, Clippers vs. Nets"
          },
          {
            photo: "https://www.nba.com/resources/static/team/v2/clippers/jenniferhagopian-180304.jpg",
            name: "Jennifer Hagopian",
            school: "Edgewood Academy",
            hnrd: "Honored: Mar. 4th, Clippers vs. Nets"
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