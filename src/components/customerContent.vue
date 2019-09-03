<template>
  <div class="content">
    <div class="customIndex">
      <div>
        <van-icon name="label-o" />
        <div class="customIndex_title">
          <span>{{custom.customIndex}}</span>
        </div>
      </div>
      <div></div>
      <div></div>
      <buttons v-if="showmore" ref="buttongroup" :buttons="buttons" />
    </div>
    <div class="contact">
      <div class="contact_paddingleft">
        <!-- <img :src="customIcon" alt /> -->
        <van-icon name="manager-o" />
        <span>{{custom.contact.name}}</span>
      </div>
      <tel :tel="custom.contact.phone" />
    </div>
    <van-cell :title="custom.addr" icon="location-o" />
    <van-dialog />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Dialog } from 'vant'

export default Vue.extend({
  name: 'customerContent',
  components: {},
  props: {
    custom: {
      type: Object,
      required: true
    },
    showmore: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  methods: {},
  data () {
    return {
      buttons: [
        { text: '编辑',
          onClick: () => {
            sessionStorage.setItem('custom', JSON.stringify(this.custom))
            this.$router.push({ path: '/newclient' })
          } },
        {
          text: '删除',
          onClick: () => {
            Dialog.confirm({
              title: '消息提示',
              message: '确认删除？'
            })
              .then(() => {
                console.log('删除')
              })
              .catch(() => {
                console.log('取消删除')
              })
          }
        }
      ]
    }
  }
})
</script>

<style lang='stylus' scoped>
$customIcon = 24px;

i {
  padding-right: 5px;
  color: #999;
}

.van-cell, .footer, .content {
  text-align: left;
}

.content {
  padding: 0 15px;
  vertical-align: middle;
  font-size: 1.5rem;

  .van-cell {
    padding: 2px 0px;
  }
}

.contact {
  display: grid;
  grid-template-columns: 1.2fr 2fr 1fr 1fr;
  padding: 2px 0;
  line-height: 2;
}

.customIndex {
  margin-top: 2px;
  display: grid;
  grid-template-columns: 95px 2fr 1fr 1fr;

  div {
    display: inline;
  }

  i {
    vertical-align: middle;
  }
}

.customIndex_title {
  background-color: #5d87f3;
  border-radius: 20px;
  width: 80px;
  text-align: center;
  color: #fff;
  padding: 2px 5px;
  font-size: 1rem;
}
</style>
