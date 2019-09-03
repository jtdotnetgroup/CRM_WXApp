<template>
  <div class="schedule">
    <Calendar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Calendar from 'vue-calendar-component'

export default Vue.extend({
  name: 'schedule',
  components: {
    Calendar
  }
})
</script>

<style lang="stylus" scoped>

</style>
