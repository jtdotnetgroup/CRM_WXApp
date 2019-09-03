<template>
  <van-panel>
    <div class="header_title" slot="header">
      <div>{{custom.custName}}</div>
      <div class="status">{{custom.status}}</div>
    </div>
    <customContent :custom="custom" :showmore="true" />
    <van-tabs v-model="activetab" swipeable @change="tabChange">
      <van-tab title="跟进"></van-tab>
      <van-tab title="联系人"></van-tab>
    </van-tabs>
    <router-view />
    <addbtn :url="addbtn" />
  </van-panel>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'clientdetails',
  components: {
    customContent: () => import('@/components/customerContent.vue')
  },
  data () {
    return {
      activetab: 0,
      addbtn: '/newfollowrecord'
    }
  },
  computed: {
    custom (): any {
      const custom: any = sessionStorage.getItem('custom')
      return JSON.parse(custom)
    }
  },
  methods: {
    tabChange (obj: any) {
      const custom = this.custom
      if (obj === 0) {
        this.$router.replace({ name: 'followrecord' })
      } else {
        this.$router.replace({ name: 'contactrecord' })
      }
    }
  },
  created () {
    this.tabChange(0)
  }
})
</script>

<style lang='stylus' scoped>

.header_title{
  font-weight bold
  font-size 2rem
  color #999
  text-align left
  display grid
  grid-template-columns 75vw 1fr
  padding-left 15px
}

.status{
  font-size 1rem
  font-weight normal
  text-align center
  padding 3px 0
  padding-right 15px
  color #e85252
}
</style>
