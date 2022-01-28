<template>
  <div>
    <!-- Close Button Example -->
    <a href="#" class="close text-navy" @click="close">close</a>
    <div class="announcement">Sample Announcement</div>
    <!-- Active click example -->
    <!-- <div :class="{ active: isActive }" @click="isActive = !isActive" class="div">
    </div>     -->
    <!-- Tabs Example -->
    <ul class="nav nav-tabs nav-justified">
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('home')" :class="{ active: isActive('home') }" href="#home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('profile')" :class="{ active: isActive('profile') }" href="#profile">Profile</a>
      </li>
    </ul>
    <div class="tab-content py-3" id="myTabContent">
      <!-- <div class="resp-tabs" @click.prevent="setActive('home')" :class="{ active: isActive('home') }">Tab 1</div> -->
      <div class="tab-pane fades" :class="{ 'active show': isActive('home') }" id="home">Home content</div>
      <div class="resp-tabs" @click.prevent="setActive('profile')" :class="{ active: isActive('profile') }">Tab 2</div>
      <div class="tab-pane fades" :class="{ 'active show': isActive('profile') }" id="profile">Profile content</div>
      <div class="resp-tabs" @click.prevent="setActive('contact')" :class="{ active: isActive('contact') }">Tab 3</div>
      <div class="tab-pane fades" :class="{ 'active show': isActive('contact') }" id="contact">Contact content</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // isActive: false,
      activeItem: 'home'
    }
  },
  methods: {
    close () {
      var elem = document.querySelector('.announcement').style.display = 'none';
      var elem = document.querySelector('.close').style.display = 'none';
    },
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    }
  }
}
</script>
<style src="../../assets/css/miniplans/style.css" scoped></style>

<style scoped>
.red{background: red;}
.active{background: blue;}
.div{
  width: 100px;
  height: 100px;
  display: inline-block;
  border: 1px solid black;
}

@media screen and (max-width: 767px){
  .nav-tabs{
    display:none;
  }
}
@media screen and (min-width: 767px){
  .resp-tabs{
    display:none;
  }
}
</style>