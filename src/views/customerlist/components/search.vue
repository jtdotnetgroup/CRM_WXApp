<template>
  <van-cell>
    <div id="search">
      <van-dropdown-menu>
        <van-dropdown-item title="筛选" ref="item"></van-dropdown-item>
        <van-dropdown-item title="排序" v-model="order" :options="orderoptions" @change="orderChange"></van-dropdown-item>
      </van-dropdown-menu>
      <van-search placeholder="搜索关键词" />
    </div>
  </van-cell>
</template>

<script lang='ts'>
import Vue from 'vue'

// interface customer {
//   custName: string;
//   customIndex: string;
//   addr: string;
//   status: string;
//   contact: Object;
//   createTime: string;
//   followTime: string;
//   updateTime: string;
// }

export default Vue.extend({
  name: 'search',
  data () {
    return {
      orderoptions: [
        { text: '创建时间', value: 'createtime' },
        { text: '更新时间', value: 'updatetime' },
        { text: '跟进时间', value: 'followtime' }
      ],
      order: ''
    }
  },
  methods: {
    async orderChange (value:string) {
      this.$store.commit('UPDATE_LOADING', true)
      let data = this.$store.state.custom.customerlist
      const _this = this
      switch (value) {
        case 'createtime': {
          data = data.sort((a:any, b:any) => {
            if (_this.$moment(a.createTime).isSame(b.createTime)) {
              return 0
            } else {
              return _this.$moment(a.createTime).isBefore(b.createTime) ? -1 : 1
            }
          })
          break
        }
        case 'updatetime': {
          data = data.sort((a:any, b:any) => {
            if (_this.$moment(a.updateTime).isSame(b.updateTime)) {
              return 0
            } else {
              return _this.$moment(a.updateTime).isBefore(b.updateTime) ? -1 : 1
            }
          })
          break
        }
        case 'followtime': {
          data = data.sort((a:any, b:any) => {
            if (_this.$moment(a.followTime).isSame(b.followTime)) {
              return 0
            } else {
              return _this.$moment(a.followTime).isBefore(b.followTime) ? -1 : 1
            }
          })
          break
        }
      }
      this.$store.commit('custom/UPATE_CUSTOMERLIST', data)
      await setTimeout(() => {
        this.$store.commit('UPDATE_LOADING', false)
      }, 500)
    }
  }
})
</script>

<style lang='stylus' scoped>
#search {
  width 100%
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  position: fixed;
  top: 0;
  z-index 999;
}

.van-cell {
  padding: 0 !important;
}

.van-dropdown-menu:after {
  border: 0 !important;
}

.van-search>div {
  border-radius: 10px;
}
</style>
