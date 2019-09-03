<template>
  <div id="buttongroup">
    <div @click="show">更多</div>
    <van-popup v-model="visiable" position="bottom">
      <van-cell
        title-class="button_title"
        v-for="(item,index) in buttons"
        :key="index"
        :title="item.text"
        @click="itemClick(item)"
      />
      <van-cell title-class="cancel" title="取消" @click="visiable=false" />
    </van-popup>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'buttongroup',
  data () {
    return {
      visiable: false
    }
  },
  methods: {
    show () {
      this.visiable = true
    },
    itemClick (item) {
      item.onClick()
      this.visiable = false
    }
  },
  props: {
    buttons: {
      type: Array,
      required: true
    }
  }
})
</script>

<style lang="stylus" scoped>
#buttongroup {
  background-color: #5d87f3;
  border-radius: 10px;
  text-align: center;
  color: #fff;
}

.cancel {
  color: #2c76cb;
  font-weight: bold;
  font-size: 2rem;
}

.button_title {
  font-size: 2rem;
}
</style>
