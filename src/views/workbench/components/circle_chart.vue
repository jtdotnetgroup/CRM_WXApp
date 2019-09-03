<template>
  <div>
    <van-circle :value="performance" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'circle_chart',
  data () {
    return {
      data: {
        performance: {
          value: 10,
          target: 100
        },
        followrecord: {
          value: 0,
          target: 100
        }
      }
    }
  },
  computed: {
    performance: {
      get: function ():any {
        const { value, target } = this.data.performance
        return value === 0 ? 0 : value / target * 100
      },
      set: function (val:any) {
        this.data.performance.value = val
      }
    }
  }
})
</script>

<style scoped>
</style>
