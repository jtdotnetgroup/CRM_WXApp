<template>
  <van-panel :title="custom.custName" :status="custom.status" @click="onClick">
    <customerContent :custom="custom"/>
    <div class="footer" slot="footer">
      <div>{{custom.followTime}}</div>
      <div></div>
    </div>
  </van-panel>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'customitem',
  data () {
    return {
    }
  },
  components: {
    customerContent: () => import('@/components/customerContent.vue')
  },
  props: {
    custom: {
      type: Object,
      required: true
    }
  },
  methods: {
    onClick () {
      const custom = JSON.stringify(this.custom)
      sessionStorage.setItem('custom', custom)
      this.$router.push({ name: 'clientdetails' })
    }
  }
})
</script>

<style lang='stylus' scoped>

.van-cell, .footer, .content {
  text-align: left;
}

.van-cell__title{
  font-weight bold
  font-size 1.5rem
  color #999
}

.footer {
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.van-panel {
  margin-bottom: 5px;
}

</style>
