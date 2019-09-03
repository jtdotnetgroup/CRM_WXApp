
<template>
  <div class="addBtn" @click="onClick">
    <span>+</span>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'addBtn',
  methods: {
    onClick () {
      if (this.isObject) {
        this.url.onClick()
      } else {
        this.$router.push({ path: this.url })
      }
    }
  },
  props: {
    url: {
      type: Object | String,
      required: true
    }
  },
  computed: {
    isObject () {
      return !!this.url.onClick
    }
  }
})
</script>
<style lang="stylus" scoped>
$btnsize = 50px;

.addBtn {
  border-radius: 100%;
  width: $btnsize;
  height: $btnsize;
  position: fixed;
  top: 70%;
  right: 9px;
  z-index: 999;
  line-height: 1;
  font-size: 5rem;
  color: #fff;
  background-color: #5587ec;
}
</style>
