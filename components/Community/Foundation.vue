<template>
  <div>
    <div class="hero text-white uppercase flex flex-col justify-center items-center h-300 lg:h-500 bg-center bg-cover px-4" style="background-image: url(https://plchldr.co/i/2800x1000?bg=333)">
      <div class="container text-center">
        <h1 class="mb-8">Foundation</h1>
        <a href="https://www.nba.com/resources/static/team/v2/clippers/Donation-Form-updated.pdf" class="btn">Donate Now</a>
      </div>
    </div>
    <CommunitySubNav/>
    <div class="container">
      <div class="grid sm:grid-cols-12 mb-12">
        <div class="sm:col-start-3 sm:col-span-8 text-center">
          <h2>Our Mission</h2>
          <h4 class="my-4">"OUR CALLING": INSPIRING EVERY CHILD </h4>
          <p>Every day, we'll make a positive difference to a child in L.A. To meet this commitment, the L.A. Clippers Foundation will first understand their educational environments, from classroom to playground to living room, in communities across Southern California. The greatest resource of the Clippers Foundation is inspiration, channeled from our players, organization and Clipper Nation. Our greatest tool is investment, through singular grants that set a new benchmark in actual funds and true transparency. Our greatest gift is mobilizing contribution and commitment from everyone we call Partner, including colleagues, corporate sponsors and the community at large. In every way, our mission is to inspire a child to make a positive difference in their L.A. </p>
        </div>
      </div>
      <h2 class="text-center mb-4">Recent Videos</h2>
      <div class="sm:grid sm:grid-cols-12 mb-24">
        <div class="sm:col-start-3 sm:col-span-8 text-center">
          <FoundationPhotoCarousel/>
        </div>
      </div>
    </div>
    <div class="hero text-white flex flex-col justify-center items-center bg-center bg-cover px-4 py-24" style="background-image: url(https://plchldr.co/i/2800x1000?bg=333)">
      <div class="container text-center">
          <h2 class="font-agencywide text-6xl uppercase">Our History</h2>
          <div class="grid sm:grid-cols-12 mb-12">
            <div class="sm:col-start-3 sm:col-span-8 text-center">
              <p class="mt-8 mb-8">The L.A. Clippers Foundation is a non-profit entity established in the summer of 1994 to increase the club's support of their surrounding communities. Since its inception, the Clippers' Foundation has been committed to promoting positive educational, civic, environmental and humanitarian values through community outreach programs. Our donations are primarily focused toward non-profit organizations benefiting children located in Southern California. Monetary donations are made, as are tickets, merchandise and autographed memorabilia. The Foundation will continue to team up with sponsors, community organizations and media outlets in providing quality community programs, scholarships and other opportunities for the youth in and about the greater Los Angeles area.</p>
              <a href="https://www.nba.com/resources/static/team/v2/clippers/Donation-Form-updated.pdf" class="btn">Donate Now</a>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  }
}
</script>
