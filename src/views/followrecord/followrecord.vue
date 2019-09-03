<template>
    <div>
        <followList :customId="customId" :followrecords="followList"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getall } from '@/api/followrecord'

export default Vue.extend({
  name: 'followrecord',
  components: {
    followList: () => import('@/components/FollowRecordList.vue')
  },
  computed: {
    customId () {
      return '1'
    }
  },
  data () {
    return {
      followList: []
    }
  },
  created () {
    getall(undefined).then(res => {
      this.followList = res.data
    })
  }
})
</script>

<style scoped>

</style>
