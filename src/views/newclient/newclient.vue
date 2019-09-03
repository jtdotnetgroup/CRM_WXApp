<template>
  <div>
    <van-cell-group title="基础信息">
      <van-field label="全称" v-model="form.custName" />
      <van-field label="简称" v-model="form.shortname" />
      <van-cell
        :value="item.value"
        v-for="(item,index) in popfields"
        :key="index"
        :title="item.title"
        is-link
        @click="popupshow(item.type)"
      />
      <van-field label="详细地址" v-model="form.addr" />
      <van-field label="行业" v-model="form.industry" />
      <van-field label="区域" v-model="form.area" />
    </van-cell-group>
    <van-cell-group title="联系人信息">
      <van-field label="姓名" v-model="form.contact.name" />
      <van-cell title="性别">
        <template slot="default">
          <span>先生</span>
          <van-switch v-model="form.contact.sex" size="15px" />
          <span>女士</span>
        </template>
      </van-cell>
      <van-field label="部门" v-model="form.contact.depart" />
      <van-field label="职位" v-model="form.contact.post" />
      <van-field type="tel" label="电话" v-model="form.contact.phone" />
      <van-field type="email" label="邮箱" v-model="form.contact.email" />
    </van-cell-group>
    <van-button type="primary" size="normal">保存</van-button>

    <van-popup position="bottom" v-model="popupShow">
      <van-area v-if="popuptype==='addr'" :area-list="areaList" />
      <van-picker v-if="popuptype==='camefrom'" show-toolbar @confirm="changeCamefrom" :columns="camefromList" />
      <van-picker v-if="popuptype==='statage'" show-toolbar @confirm="changeCamefrom" :columns="statageList" />
    </van-popup>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import areaList from '@/libs/areaList'

export default Vue.extend({
  name: 'newclient',
  data () {
    return {
      popuptype: '',
      form: {
        custName: '',
        shortname: '',
        addr: '',
        addrDetail: '',
        industry: '',
        area: '',
        contact: {
          name: '',
          sex: 0,
          phone: '',
          email: ''
        },
        customIndex: '',
        statage: ''
      },

      popfields: [
        { title: '客户来源', type: 'camefrom', value: '' },
        { title: '当前阶段', type: 'statage', value: '' },
        { title: '省市', type: 'addr', value: '' }
      ],
      areaList: areaList,
      camefromList: ['自寻客户', '分配客户'],
      statageList: ['成交', '洽谈', '商机'],
      popupShow: false
    }
  },
  methods: {
    popupshow (type: string) {
      this.popuptype = type
      this.popupShow = true
    },
    changeCamefrom (value: any, index: any) {
      this.popfields.filter(e => {
        return e.type === this.popuptype
      })[0].value = value

      this.popupShow = false
    }
  },
  created () {
    if (this.isEdit) {
      this.form = this.custom
      //   this.shortname=
    }
  },
  computed: {
    custom () {
      const custom = sessionStorage.getItem('custom')
      if (custom) {
        return JSON.parse(custom)
      } else {
        return undefined
      }
    },
    isEdit (): Boolean {
      return !!this.custom
    }
  }
})
</script>

<style lang='stylus' scoped>
.van-cell, van-cell-group {
  text-align: left;
}

.van-switch {
  top: 3px;
}

.van-button {
  width: 70vw;
  margin: 15px 0;
}
</style>
