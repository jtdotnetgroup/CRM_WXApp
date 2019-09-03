<template>
  <van-steps direction="vertical" :active="0">
    <van-step v-for="(item,index) in followList" :key="index">
      <followitem :followrecord="item" />
    </van-step>
  </van-steps>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'followrecordlist',
  data () {
    return {
      list: []
    }
  },
  components: {
    followitem: () => import('./FollowRecordItem.vue')
  },
  props: {
    followrecords: {
      required: true,
      type: Array
    }
  },
  methods: {

  },
  computed: {
    followList ():Array<any> {
      let data = this.followrecords.slice(0)
      data = data.sort((a: any, b: any) => {
        if (this.$moment(a.followTime).isSame(b.followTime)) {
          return 0
        } else {
          return this.$moment(a.followTime).isBefore(b.followTime) ? 1 : -1
        }
      })

      return data
    }
  },
  watch: {

  }

})
</script>

<style scoped>
</style>
