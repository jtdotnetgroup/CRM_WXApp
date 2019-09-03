<template>
  <div>
    <van-cell title="客户" is-link @click="popshow=true" :value="customer" />

    <followList :customId="customId" :followrecords="followList" />

    <van-popup position="bottom" v-model="popshow">
      <van-picker
        show-toolbar
        :columns="customerList"
        @confirm="customerChange"
        @cancel="popshow=false"
      ></van-picker>
    </van-popup>
    <addbtn :url="addbtn" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getall } from '@/api/followrecord'

export default Vue.extend({
  name: 'followcenter',
  components: {
    followList: () => import('@/components/FollowRecordList.vue')
  },
  data () {
    return {
      popshow: false,
      customer: '',
      followList: [],
      customId: '',
      addbtn: {
        onClick: () => {
          const customStr = sessionStorage.getItem('custom')
          if (customStr) {
            this.$router.push({ path: '/newfollowrecord' })
          } else {
            this.$toast({
              message: '请先选择客户'
            })
          }
        }
      }
    }
  },
  methods: {
    customerChange (value: string, index: any) {
      this.customer = value
      this.customId = index

      const customerlist = this.$store.state.custom.customerlist
      const result = customerlist.filter((c:any) => {
        return c.custName === value
      })

      sessionStorage.setItem('custom', result[0])

      this.popshow = false
      this.getFollowRecords()
    },
    getFollowRecords () {
      getall(undefined).then(res => {
        let { data } = res
        this.followList = data
      })
    }
  },
  computed: {
    customerList (): Array<any> {
      let list: Array<any>
      if (
        !this.$store.state.custom.customerlist ||
        this.$store.state.custom.customerlist.length === 0
      ) {
        this.$store.dispatch('custom/GetCustomerList')
      }

      list = this.$store.state.custom.customerlist

      const data: Array<any> = []

      list.forEach(e => {
        data.push(e.custName)
      })

      return data
    }
  },
  created () {
    sessionStorage.removeItem('custom')
  }
})
</script>

<style lang='stylus' scoped>
.van-cell {
  text-align: left;
}
</style>
