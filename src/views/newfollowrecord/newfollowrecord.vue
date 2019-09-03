<template>
  <div class="newfollowrecord">
    <div class="title">
      <van-icon name="records" />
      <span>新增跟进</span>
    </div>
    <div class="content">
      <van-field v-model="content" type="textarea" rows="3" autosize placeholder="请输入跟进内容" />
      <van-panel title="附件">
        <van-uploader v-model="filesList" multiple />
      </van-panel>
      <van-cell title="跟进方式" :value="followmethod" is-link @click="popshow('followmethod')" />
      <van-cell title="跟进时间" :value="followTimeDisplay" is-link @click="popshow('followtime')" />
      <van-cell
        title="下次时间"
        :value="follownextTimeDisplay"
        is-link
        @click="popshow('follownexttime')"
      />
    </div>
    <van-button type="primary" size="normal">保存</van-button>
    <van-popup v-model="PopupShow" position="bottom">
      <van-picker
        v-if="popuptype==='followmethod'"
        show-toolbar
        :columns="followMethodOptions"
        @cancel="pophiden"
        @confirm="followMethodConfirm"
      />
      <van-datetime-picker
        v-if="popuptype==='followtime'"
        v-model="followTime"
        @confirm="followTimeConfirm"
        @cancel="pophiden"
        type="datetime"
      />
      <van-datetime-picker
        v-if="popuptype==='follownexttime'"
        v-model="follownextTime"
        @confirm="followTimeConfirm"
        @cancel="pophiden"
        type="datetime"
      />
    </van-popup>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'newfollowrecord',
  data () {
    return {
      content: '',
      followmethod: '',
      followTime: new Date(),
      follownextTime: '',
      filesList: [],
      followMethodOptions: ['电话联系', '上门拜访', '邮件联系'],
      PopupShow: false,
      popuptype: ''
    }
  },
  methods: {
    pophiden () {
      this.PopupShow = false
    },
    popshow (poptype: string) {
      this.popuptype = poptype
      this.PopupShow = true
    },
    followMethodConfirm (value: any, index: any) {
      this.followmethod = value
      this.pophiden()
    },
    followTimeConfirm (value: any) {
      this.pophiden()
    }
  },
  computed: {
    followTimeDisplay (): string {
      return this.$moment(this.followTime).format('Y-M-D HH:mm')
    },
    follownextTimeDisplay (): string {
      if (!this.follownextTime) {
        return ''
      }
      return this.$moment(this.follownextTime).format('Y-M-D HH:mm')
    }
  }
})
</script>

<style lang='stylus' scoped>
.newfollowrecord {
  text-align: center;
  background-color: #fff;
}

.title {
  border-bottom: 1px solid #ededed;
  padding: 8px;
  font-size: 2rem;
  color: #4796e2;
  font-weight: bold;

  i {
    position: relative;
    top: 3px;
  }
}

.content {
  text-align: left;
}

.van-uploader {
  padding: 10px;
}

.van-button {
  width: 70vw;
  margin: 15px 0;
}
</style>
