<template>
  <div class="bg-fixed bg-center bg-no-repeat" style="background-image: url(https://www.nba.com/resources/static/team/v2/clippers/BG_Chuck_Page.png)" >
    <div class="hero mb-24 text-white uppercase flex flex-col justify-center items-center bg-center bg-cover px-4" style="background-image: url(https://www.nba.com/resources/static/team/v2/clippers/Chuck-heder-image.png)">
      <h1 class="hidden">Chuck the Condor</h1>
      <img src="https://www.nba.com/resources/static/team/v2/clippers/mascot-wordmark-alt.png" class="mx-auto max-w-[50%] lg:max-w-[25%]">
      <p>
        <a href="https://twitter.com/chuckthecondor" target="_blank">
           <svg xmlns="http://www.w3.org/2000/svg" class="inline w-6 -mt-2 ml-4" viewBox="0 0 500 500">
            <path d="m492 110c-13 18-29 35-49 50c0 0 0 12 0 12c0 44-10 87-30 128c-21 41-53 76-96 104c-43 28-92 42-148 42c-55 0-104-14-149-43c5 1 13 1 24 1c45 0 85-13 120-40c-21-1-40-8-56-20c-17-12-28-28-34-48c3 1 9 2 17 2c9 0 18-1 26-3c-23-5-41-16-56-34c-14-18-21-38-21-61c0 0 0-1 0-1c12 6 27 11 43 12c-29-20-43-47-43-81c0-16 4-32 13-48c53 64 119 98 200 100c-2-6-3-13-3-21c0-27 9-50 28-68c19-19 42-28 69-28c28 0 51 9 70 29c20-4 41-11 61-22c-7 22-21 40-42 53c19-3 38-8 56-15" fill='#FFF'/>
          </svg>
          <span class="hidden-xs hidden-sm">@chuckthecondor</span>
        </a> 
        <a href="https://facebook.com/chuckthecondor" target="_blank">
          <svg class="inline w-6 -mt-2 ml-4"  xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 262 266.895'><path id='path3087' fill='#FFF' d='M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935 l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585 v99.803H182.409z'></path></svg> 
          <span class="hidden-xs hidden-sm">/chuckthecondor
          </span>
        </a> 
        <a href="https://instagram.com/chuckthecondor" target="_blank">
          <svg class="inline w-6 -mt-1 ml-4" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="100" height="100"
            viewBox="0 0 551.034 551.034" style="enable-background:new 0 0 551.034 551.034;" xml:space="preserve">
              <path class="logo" fill="#FFF" id="XMLID_17_" d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722 c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156 C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156 c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722 c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"/>
              <path id="XMLID_81_" fill="#FFF" d="M275.517,133C196.933,133,133,196.933,133,275.516 s63.933,142.517,142.517,142.517S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6 c-48.095,0-87.083-38.988-87.083-87.083s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083 C362.6,323.611,323.611,362.6,275.517,362.6z"/>
              <circle id="XMLID_83_" fill="#FFF" cx="418.306" cy="134.072" r="34.149"/>
          </svg>
          <span class="hidden-xs hidden-sm">@chuckthecondor
          </span>
        </a>
      </p>
      <ChuckBookingModal/>
    </div>
    <div class="container mb-24">
      <h2 class="text-center">Meet Chuck</h2>
      <div class="grid sm:grid-cols-2 gap-12">
        <figure class="cbp-so-side-chuck cbp-so-side-left col-md-6 pull-left" style="">
          <img class="img-fluid" src="https://www.nba.com/resources/static/team/v2/clippers/Chuck-Cutout_700x333.png" alt="Responsive image" style="max-width: 100%; height: auto;">
        </figure>
        <article class=" col-md-6 pull-right" style="padding-top: 35px;">
          <div class="info" style="color: #C8102E; font-size: 20px; font-family: 'Lato', Calibri, Arial, sans-serif; margin: 10px 0px 10px 0px !important; padding-top: 0px !important; padding-bottom: 0px !important;">LEAGUE: <span style="color: #1d428a; font-size: 20px;"> NBA</span></div>
          <div class="info" style="color: #C8102E; font-size: 20px; font-family: 'Lato', Calibri, Arial, sans-serif; margin: 10px 0px 10px 0px !important; padding-top: 0px !important; padding-bottom: 0px !important;">TEAM: <span style="color: #1d428a; font-size: 20px;"> LA CLIPPERS</span></div>
          <div class="info" style="color: #C8102E; font-size: 20px; font-family: 'Lato', Calibri, Arial, sans-serif; margin: 10px 0px 10px 0px !important; padding-top: 0px !important; padding-bottom: 0px !important;">NAME: <span style="color: #1d428a; font-size: 20px;"> CHUCK</span></div>
          <div class="info" style="color: #C8102E; font-size: 20px; font-family: 'Lato', Calibri, Arial, sans-serif; margin: 10px 0px 10px 0px !important; padding-top: 0px !important; padding-bottom: 0px !important;">SHOES: <span style="color: #1d428a; font-size: 20px;"> RED CHUCKS</span></div>
          <div class="info" style="color: #C8102E; font-size: 20px; font-family: 'Lato', Calibri, Arial, sans-serif; margin: 10px 0px 10px 0px !important; padding-top: 0px !important; padding-bottom: 0px !important;">HOME: <span style="color: #1d428a; font-size: 20px;"> LA</span></div>
          <div class="info" style="color: #C8102E; font-size: 20px; font-family: 'Lato', Calibri, Arial, sans-serif; margin: 10px 0px 10px 0px !important; padding-top: 0px !important; padding-bottom: 0px !important;">NUMBER: <span style="color: #1d428a; font-size: 20px;"> 213</span></div>
          <div class="info" style="color: #C8102E; font-size: 20px; font-family: 'Lato', Calibri, Arial, sans-serif; margin: 10px 0px 10px 0px !important; padding-top: 0px !important; padding-bottom: 0px !important;">SPECIES: <span style="color: #1d428a; font-size: 20px;"> CALIFORNIA CONDOR</span></div>
          <div class="info" style="color: #C8102E; font-size: 20px; font-family: 'Lato', Calibri, Arial, sans-serif; margin: 10px 0px 10px 0px !important; padding-top: 0px !important; padding-bottom: 0px !important;">FAVORITE SNACK: <span style="color: #1d428a; font-size: 20px;"> PEANUT BUTTER AND SPAM SANDWICHES</span></div>
          <div class="info" style="color: #C8102E; font-size: 20px; font-family: 'Lato', Calibri, Arial, sans-serif; margin: 10px 0px 10px 0px !important; padding-top: 0px !important; padding-bottom: 0px !important;">POSITION: <span style="color: #1d428a; font-size: 20px;"> CENTER OF ATTENTION</span></div>
          <div class="info" style="color: #C8102E; font-size: 20px; font-family: 'Lato', Calibri, Arial, sans-serif; margin: 10px 0px 10px 0px !important; padding-top: 0px !important; padding-bottom: 0px !important;">HOBBIES: <span style="color: #1d428a; font-size: 20px;"> TUMBLING, DANCING, &amp; DUNKING</span></div>

          <div class="info" style=" max-width:600px; color: #C8102E; font-size: 20px; font-family: 'Lato', Calibri, Arial, sans-serif; margin: 10px 0px 10px 0px !important; padding-top: 0px !important; padding-bottom: 0px !important;">CHUCK'S STORY: 
            <span style="color: #1d428a; font-size: 18px;">Chuck The Condor hatched in Los Angeles, California back on February 29, 2016.  He has a 10-foot wingspan, is in love with basketball, wears the number 213 to rep LA, and true to his name, rocks red Chuck Taylors on his feet.  He flew into STAPLES Center and into the hearts of Clipper Nation in February 2016 and surprised each fan with a free pair of Chuck Taylors.  His unique comedy and set of skills entertains fans of all ages at all Clippers home games and he can be found around town repping Clipper Nation.</span>
          </div>

        </article>
      </div>
    </div>
    <ChuckPhotos/>
    <ChuckCards/>
    <div class="bg-blue py-24">
      <div class="container">
        <a href="https://www.youtube.com/user/clippers1970/search?query=chuck">
          <img src="https://www.nba.com/resources/static/team/v2/clippers/CHUCK_VIDEO_IMG-800x450.png" class="mx-auto">
        </a>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.hero{
  height:600px;
}
</style>
