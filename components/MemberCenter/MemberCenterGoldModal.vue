<template>
  <div> 
    <a @click="$modal.show('gold-modal')">View Seating Map</a> 
    <modal name="gold-modal" :height="570" :adaptive="true">
      <!-- <a @click="$modal.hide('my-first-modal')">close</a> -->
      <h3>Gold Seating</h3>
      <img class="img-responsive" src="https://clippersweb.blob.core.windows.net/mvp/img/Membership_Benefits_Seating_Chart_Gold.png">
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
        this.$modal.show('gold-modal');
    },
    hide () {
        this.$modal.hide('gold-modal');
    }
  },
  mount () {
    this.show()
  }
}
</script>
<style src="../../assets/css/membercenter/style.css" scoped></style>