<template>
  <div> 
    <a @click="$modal.show('platinum-modal')">View Seating Map</a> 
    <modal name="platinum-modal" :height="570" :adaptive="true">
      <!-- <a @click="$modal.hide('my-first-modal')">close</a> -->
      <h3>Platinum Seating</h3>
      <img class="img-responsive" src="https://clippersweb.blob.core.windows.net/mvp/img/Membership_Benefits_Seating_Chart_Platinum.png">
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
        this.$modal.show('platinum-modal');
    },
    hide () {
        this.$modal.hide('platinum-modal');
    }
  },
  mount () {
    this.show()
  }
}
</script>
<style src="../../assets/css/membercenter/style.css" scoped></style>