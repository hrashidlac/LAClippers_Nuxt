<template>
  <div> 
    <div><h2 class="text-center section-title"><span>Manage your tickets</span></h2></div> 
    <ul class="tabss nav nav-tabs nav-justified">
      <li class="tabss-1 nav-item" @click.prevent="setActive('tab1')" :class="{ active: isActive('tab1') }" >
        <a class="nav-link" href="#tab1">
          <div><h2>Digital Tickets</h2></div><p>How to Access Tickets</p>
        </a>
      </li>
      <li class="tabss-2 nav-item" @click.prevent="setActive('tab2')" :class="{ active: isActive('tab2') }" >
        <a class="nav-link" href="#tab2">
          <div><h2>Transfer Tickets</h2></div><p>How to Transfer Tickets</p>
        </a>
      </li>
      <li class="tabss-3 nav-item" @click.prevent="setActive('tab3')" :class="{ active: isActive('tab3') }" >
        <a class="nav-link" href="#tab3">
          <div><h2>Tickets Exchange</h2></div><p>How to Exchange Tickets</p>
        </a>
      </li>
      <li class="tabss-4 nav-item"  @click.prevent="setActive('tab4')" :class="{ active: isActive('tab4') }" >
        <a class="nav-link" href="#tab4">
          <div><h2>Resell Tickets</h2></div><p>How to Resell Tickets</p>
        </a>
      </li>
    </ul>
    <div class="tab_container tab-content" id="myTabContent">
      <!-- Tab 1 -->
      <div class="resp-tabs tab_drawer_heading tab_drawer_1" @click.prevent="setActive('tab1')" :class="{ active: isActive('tab1') }">
        <div>
          <h2>Digital Tickets</h2><p>How to Access Tickets</p><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
        </div>
      </div>
      <div class="tab_content tab-pane fades" :class="{ 'active show': isActive('tab1') }" id="tab1">
        <h3 class="hidden-xs">Digital Tickets</h3>
        <div class="bg-img"></div>
      </div>

      <!-- Tab 2 -->
      <div class="resp-tabs tab_drawer_heading tab_drawer_2" @click.prevent="setActive('tab2')" :class="{ active: isActive('tab2') }">
        <div>
          <h2>Transfer Tickets</h2><p>How to transfer tickets</p><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
        </div>
      </div>
      <div class="tab_content tab-pane fades" :class="{ 'active show': isActive('tab2') }" id="tab2">
        <h3 class="hidden-xs">Transfer Tickets</h3>
        <div class="bg-img"></div>
      </div>
      
      <!-- Tab 3 -->
      <div class="resp-tabs tab_drawer_heading tab_drawer_3" @click.prevent="setActive('tab3')" :class="{ active: isActive('tab3') }">
        <div>
          <h2>Ticket Exchange</h2><p>How to exchange tickets</p><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
        </div>
      </div>
      <div class="tab_content tab-pane fades" :class="{ 'active show': isActive('tab3') }" id="tab3">
        <ul class="nav nav-tabs nav-justified exchange-tabs">
          <li class="nav-item" @click.prevent="setSubActive('home')" :class="{ active: isSubActive('home') }" href="#mvpexchange">
            <a class="nav-link" >MVP Member Ticket Exchange</a>
          </li>
          <li class="nav-item" @click.prevent="setSubActive('profile')" :class="{ active: isSubActive('profile') }" href="#profile">
            <a class="nav-link">Courtside Member Ticket Exchange</a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fades" :class="{ 'active show': isSubActive('home') }" id="mvpexchange"><div class="bg-img"></div></div>
          <div class="tab-pane fades" :class="{ 'active show': isSubActive('profile') }" id="courtsideexchange"><div class="bg-img"></div></div>
        </div>
      </div>
      
      <!-- Tab 4 -->
      <div class="resp-tabs tab_drawer_heading tab_drawer_4" @click.prevent="setActive('tab4')" :class="{ active: isActive('tab4') }">
        <div>
          <h2>Resell Tickets</h2><p>How to resell tickets</p><span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
        </div>
      </div>
      <div class="tab_content tab-pane fades" :class="{ 'active show': isActive('tab4') }" id="tab4">
        <h3 class="hidden-xs">Resell Tickets</h3>
        <div class="bg-img"></div>
      </div>
    </div>

  </div>
</template>
<script>



export default {
  data() {
    return {
      activeItem: 'tab1',
      activeSubItem: 'home'
    }
  },
  methods: {
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    },
    isSubActive (menuItem) {
      return this.activeSubItem === menuItem
    },
    setSubActive (menuItem) {
      this.activeSubItem = menuItem
    }
  }

}
</script>
<style src="../../assets/css/membercenter/style.css" scoped></style>
<style src="../../assets/css/cityedition/tabs.css" scoped></style>
<style scoped>
@media screen and (max-width: 767px){
  .nav-tabs{
    display:none;
  }
  .exchange-tabs{
    display: block;
  }
}
@media screen and (min-width: 767px){
  .tab-content > .resp-tabs.active,
  .resp-tabs{
    display:none;
  }
}
</style>