<template>
    <van-list>
        <van-cell v-for="(item,index) in customerList" :key="index" :title="item.custName" >
            <template slot="default" >
                <div class="circular"><span>抢</span></div>
            </template>
        </van-cell>
    </van-list>
</template>

<script lang="ts">
import Vue from 'vue'
import { public_getall } from '@/api/customer'

export default Vue.extend({
  name: 'public_customers',
  data () {
    return {
      customerList: []
    }
  },
  created () {
    public_getall(undefined).then(res => {
      this.customerList = res.data
    })
  }
})
</script>

<style lang='stylus' scoped>
$circolor=#ec3c28

.van-list
    text-align left

.circular
    border-radius 100%
    border 2px solid $circolor
    width 25px
    height 25px
    text-align center
    float right
    color $circolor
    line-height 2
</style>
