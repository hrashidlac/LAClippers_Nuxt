<template>
  <div>
    <div id="page-menu">
      <div class="page-logo-area">
        <img src="https://www.nba.com/resources/static/team/v2/clippers/spirit/LAC_1920_Spirit_logo.svg" alt="spirit logo">
      </div>
      <div class="inner-page-menu">
        <ul>
        <!--<li><a href="#auditions" class="no-track">2021-22 Auditions</a></li>-->
        <li><a href="#team" class="no-track">Team</a></li>
        <li><a href="#team-galleries" class="no-track">Photos</a></li>
        <li><a href="#team-videos" class="no-track">Videos</a></li>
        </ul>
      </div>
    </div>
    <div class="header-container">
      <div class="video-container">
        <video width="100%" height="auto" autoplay loop muted poster="https://www.nba.com/resources/static/team/v2/clippers/img/1280x720-spirit-video-header-poster-200623-2.jpg">
        <source src="https://www.nba.com/resources/static/team/v2/clippers/spirit/1920-Clippers-Spirit-Intro.mp4" type="video/mp4">
        <source src="https://www.nba.com/resources/static/team/v2/clippers/spirit/1920-Clippers-Spirit-Intro.webm" type="video/webm">
        </video>
      </div>
    </div>
    <section id="team-intro">
        <div class="container-fluid">
          <div class="grid sm:grid-cols-2 gap-12">
            <div class="col-md-6">
              <a href="#" class="icon-overlay icon-overlay--videos" data-toggle="modal" data-target="#videoModal" data-thevideo="https://www.youtube.com/embed/qQyAlz03PEs">
                <img src="https://www.nba.com/clippers/sites/clippers/files/clippers-spirit-372.jpg" alt="Spirit Dancers" style="width: 100%; max-width:100%;">
              </a>
            </div>
            <div class="col-md-6">
              <div class="my-4">
                <h2 class="">
                  The most cutting-edge,
                  <br>ground-breaking
                  <br>NBA dance team
                </h2>
                <p>
                  On the court, Clippers Spirit captivates fans with their hard-hitting, complex choreography and skillful technique. These dancers perform one-of-a-kind routines at every LA Clippers home game, uniquely crafted for the team by LA's TOP choreographers.
                </p>
                <h3 class="">
                  Have the Spirit perform at
                  <br>your next event!
                </h3>
                <SpiritBookingModal/>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section id="team">
      <div class="container">
        <img class="img-responsive" src="https://www.nba.com/clippers/sites/clippers/files/lac_2122_spirit_team_announcement_web_1920x1080.jpg">
      </div>
    </section>
    <section id="social-promo">
      <div class="container">
        <div class="text-center">
          <div class="social-logo-area">
            <a class="no-track" href="https://www.instagram.com/clippersspirit/?hl=en" target="_blank">
              <img class="mx-auto mb-8" src="https://www.nba.com/resources/static/team/v2/clippers/spirit/80x80-spirit-IG-icon-200521.png" alt="spirit instagram">
            </a>
          </div>
          <h2>
            @CLIPPERSSPIRIT
            <br>ON INSTAGRAM
          </h2>
          <p>
            <a class="btn btn-outline" href="https://www.instagram.com/clippersspirit/?hl=en" target="_blank">Follow
            </a>
          </p>
        </div>
      </div>
    </section>
    <!-- <section id="team-videos">
      <div class="container">
        <div class="intro-copy">
          <div class="row">
            <div class="col-xs-4">
              <h2 class="">
                Videos  
              </h2>
            </div>
            <div class="col-xs-8">
              <a href="https://www.youtube.com/channel/UCR6z4A1pU7VfGxOVzVCFzhQ" target="_blank" class="subscribe-btn no-track">
                <i class="fa fa-youtube-play" aria-hidden="true">
                </i> SUBSCRIBE ON YOUTUBE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- <section id="team-galleries">
      <div class="container">
        <div class="intro-copy">
          <h2 class="">
            Photo Galleries  
          </h2>
        </div>
        <div class="sm:grid sm:grid-cols-3 gap-12">
          <div class="col-md-4">
            <a href="https://www.nba.com/clippers/gallery/2019-20-clippers-spirit-game-night-gallery" target="_blank" class="icon-overlay icon-overlay--photos no-track">
              <img src="https://www.nba.com/.element/media/2.0/teamsites/clippers/img/360x490-spirit-gallery-gamenight-200521.jpg" alt="Spirit Game Night Photos" style="width: 100%; max-width:100%;">
              <h2 class="mediaTitle">Game Nights
              </h2>
            </a>
          </div>
          <div class="col-md-4">
            <a href="https://www.nba.com/clippers/gallery/2019-2020-clippers-spirit-theme-nights-gallery" target="_blank" class="icon-overlay icon-overlay--photos no-track">
              <img src="https://www.nba.com/.element/media/2.0/teamsites/clippers/img/360x490-spirit-gallery-themenight-200521.png" alt="Spirit Theme Night Photos" style="width: 100%; max-width:100%;">
              <h2 class="mediaTitle">Theme Nights
              </h2>
            </a>
          </div>
          <div class="col-md-4">
            <a href="https://www.nba.com/clippers/gallery/19-20-clippers-spirit-halftime-and-dtlac-nights-gallery" target="_blank" class="icon-overlay icon-overlay--photos no-track">
              <img src="https://www.nba.com/.element/media/2.0/teamsites/clippers/img/360x490-spirit-gallery-halftime-200521.png" alt="Spirit Halftime Performance Photos" style="width: 100%; max-width:100%;">
              <h2 class="mediaTitle">Halftimes
              </h2>
            </a>
          </div>
        </div>
      </div>
    </section> -->
    <section id="booking-footer">
      <div class="section-header">
        <div class="section-header-logo-area">
          <img class="mx-auto" src="https://www.nba.com/resources/static/team/v2/clippers/spirit/736x255-spirit-lg-logo-white-200521.png" alt="spirit logo">
        </div>
      </div>
      <div class="container">
        <div class="text-center">
          <p>Off the court, these women serve as goodwill ambassadors for the organization, not only in Los Angeles, but worldwide! You can find them interacting with fans at community fundraisers, supporting your favorite charity, or performing at corporate events!
          </p>
          <p>
            <SpiritBookingModalFooter/>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

export default {
  data () {
    return {
    }
  },
}
</script>
<style src="../../assets/css/spirit/style.css" scoped></style>