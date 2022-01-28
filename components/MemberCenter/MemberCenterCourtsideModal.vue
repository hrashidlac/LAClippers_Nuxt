<template>
  <div> 
    <a @click="$modal.show('my-first-modal')">View Seating Map</a> 
    <modal name="my-first-modal" :height="450" :adaptive="true">
      <!-- <a @click="$modal.hide('my-first-modal')">close</a> -->
      <h3>Courtside Seating</h3>
      <img class="img-responsive" src="https://clippersweb.blob.core.windows.net/mvp/img/icons/Membership_Benefits_Seating_Chart_B_1200.jpg">
    </modal>
  </div>
</template>

<script>
import VModal from 'vue-js-modal'
export default {
  data() {
    return {

    }
  },
  methods: {
    show () {
        this.$modal.show('my-first-modal');
    },
    hide () {
        this.$modal.hide('my-first-modal');
    }
  },
  mount () {
    this.show()
  }
}
</script>
<style src="../../assets/css/membercenter/style.css" scoped></style>