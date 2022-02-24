<template>
  <div> 
    <a @click="$modal.show('booking-modal')" class="btn">Request Appearance</a> 
    <modal name="booking-modal" :height="570" :adaptive="true">
      <!-- <a @click="$modal.hide('my-first-modal')">close</a> -->
      <iframe src="https://laclippers-forms.formstack.com/forms/clippers_spirit_request_form_website" title="Clippers Spirit Request Form - website" width="600" height="550"></iframe>
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
        this.$modal.show('booking-modal');
    },
    hide () {
        this.$modal.hide('booking-modal');
    }
  },
  mount () {
    this.show()
  }
}
</script>
<style scoped>
@media screen and ( max-width: 768px ) {
  .modal{
    width:100% !important;
  }
}
</style>