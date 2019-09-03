<template>
  <van-list>
    <customitem v-for="(item,index) in customlist" :key="index" :custom="item" />
    <addbtn :url="addbtn"/>
  </van-list>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'customlist',
  components: {
    customitem: () => import('./customitem.vue')
  },
  data () {
    return {
      addbtn: '/newclient'
    }
  },
  computed: {
    customlist (): any {
      let data = this.$store.state.custom.customerlist
      if (!!data && data.length > 0) {
        return data
      } else {
        this.$store.dispatch('custom/GetCustomerList').then(res => {
          return this.$store.state.custom.customerlist
        })
      }
    }
  }
})
</script>

<style lang='stylus' scoped>
.van-cell
  font-size 1.5rem;
</style>
