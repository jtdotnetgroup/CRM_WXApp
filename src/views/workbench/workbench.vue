<template>
  <div>
    <van-panel>
      <circlecharts />
    </van-panel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'workbench',
  components: {
    circlecharts: () => import('./components/circle_chart.vue')
  }
})
</script>

<style lang="stylus" scoped>
.van-panel {
  box-shadow: 2px 2px 5px #aeb7ed;
  border-radius: 10px;
  .van-cell {
    border-radius: 10px;
  }

  .van-cell::after{
      border-bottom-width 0 !important
  }
}
</style>
