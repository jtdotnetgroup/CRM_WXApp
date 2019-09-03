<template>
  <div>
    <search />
    <customlist id="customlist" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MyClient',
  data () {
    return {}
  },
  components: {
    search: () => import('./components/search.vue'),
    customlist: () => import('./components/customlist.vue')
  },
  created () {
    // store中的custom值用于编辑客户时调用，回到客户列表时应清空
    sessionStorage.removeItem('custom')
  }
})
</script>

<style lang='stylus' scoped>
#customlist
  margin-top 54px

</style>
