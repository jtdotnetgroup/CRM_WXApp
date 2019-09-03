<template>
  <div>
    <van-panel>
      <div class="header">
        <van-image show-loading width="5rem" height="5rem" round :src="imgsrc" fit="cover" />
        <div class="username">{{userName}}/{{companyName}}</div>
      </div>
    </van-panel>
    <van-cell >
        <div slot="title">
            客服电话：
            <tel tel='13702740886' />
        </div>
    </van-cell>
    <van-cell title="修改密码" is-link />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'userprofile',
  data () {
    return {
      imgsrc: 'https://img.yzcdn.cn/vant/cat.jpeg'
    }
  },
  computed: {
    userName ():string {
      const username = this.$store.state.account.userName || '张三'
      return username
    },
    companyName ():string {
      return this.$store.state.account.companyName || '捷特信息'
    }
  }
})
</script>
<style lang="stylus" scoped>
.van-panel
    .van-cell{
        padding 0
    }

.van-cell{
    text-align left
}
.header {
  padding: 5px 10px;
  text-align: left;

  display grid
  grid-template-columns 48px auto
  grid-column-gap  15px
  .username{
      display inline
      line-height 3
      font-weight bold
      padding-left 5px
      font-size 2rem
  }
}

.van-panel {
  .van-cell::after {
    border-bottom 0
  }
}
</style>
