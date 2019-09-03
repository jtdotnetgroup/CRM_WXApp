<template>
  <div id="menus">
    <van-panel v-for="(group,index) in menugroupsdisplay" class="menugroup" :key="index">
      <template slot="header">
        <van-cell :title="group.title" :icon="group.icon" />
      </template>
      <template slot="default">
        <div class="content">
          <div
            v-for="(item,itemIndex) in group.menulist"
            :key="itemIndex"
            @click="menuClick(item.url)"
            class="menuItem"
          >
            <div
              class="iconfont"
              :class="item.icon"
              :style="{'background-color':item.backgroundcolor,'color':'#fff'}"
            ></div>
            {{item.title}}
          </div>
        </div>
      </template>
    </van-panel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { randomColor } from '@/mock/index'

export default Vue.extend({
  name: 'appmenu',
  data () {
    return {
      menugroups: [
        {
          title: '销售管理',
          icon: '',
          menulist: [
            { title: '商机管理', icon: 'jiticon-shangji1', url: '/business' },
            { title: '客户管理', icon: 'jiticon-kehu', url: '/customerlist' },
            {
              title: '跟进管理',
              icon: 'jiticon-genjinguanli',
              url: '/followcenter'
            },
            { title: '合同管理', icon: 'jiticon-hetongguanli', url: '' },
            { title: '回款计划', icon: 'jiticon-huikuanjihua', url: '' },
            { title: '回款管理', icon: 'jiticon-huikuanguanli', url: '' },
            { title: '任务管理', icon: 'jiticon-CRM', url: '' },
            { title: '费用管理', icon: 'jiticon-feiyongguanli', url: '' }
          ]
        },
        {
          title: '日常管理',
          icon: '',
          menulist: [
            { title: '项目管理', icon: 'jiticon-data', url: '' },
            { title: '汇报管理', icon: 'jiticon-huibaoguanli', url: '' },
            { title: '工作报告', icon: 'jiticon-gongzuohuibao', url: '' },
            { title: '新增报告', icon: 'jiticon-baogao1', url: '' },
            { title: '签到记录', icon: 'jiticon-qiandao2', url: '' },
            { title: '新增签到', icon: 'jiticon-qiandao', url: '' }
          ]
        },
        {
          title: '常用功能',
          icon: '',
          menulist: [
            { title: '新增跟进', icon: 'jiticon-baogao', url: '' },
            { title: '新增客户', icon: 'jiticon-userprofile', url: '' },
            { title: '新增商机', icon: 'jiticon-shangji', url: '' },
            { title: '新增合同', icon: 'jiticon-hetong', url: '' },
            { title: '新增收款', icon: 'jiticon-feiyongguanli1', url: '' },
            { title: '新增费用', icon: 'jiticon-feiyongguanli', url: '' }
          ]
        },
        {
          title: '销售支持',
          icon: '',
          menulist: [
            { title: '附近客户', icon: 'jiticon-fujin', url: '' },
            {
              title: '客户公海',
              icon: 'jiticon-gonghai',
              url: '/publiccustomers'
            },
            { title: '知识库', icon: 'jiticon-zhishi', url: '' },
            { title: '新增知识', icon: 'jiticon-zhishi1', url: '' },
            { title: '查重', icon: 'jiticon-mingchengchazhong', url: '' }
          ]
        }
      ]
    }
  },
  computed: {
    title (): string {
      return this.$route.meta.title
    },
    menugroupsdisplay (): object {
      this.menugroups.forEach(g => {
        g.menulist.forEach((i: any) => {
          i.backgroundcolor = randomColor()
        })
      })

      return this.menugroups
    }
  },
  methods: {
    menuClick (url: any) {
      this.$router.push({ path: url })
    }
  },
  created () {}
})
</script>
<style lang="stylus" scoped>
.van-cell {
  text-align: left;
}

.content {
  display: grid;
  width: 100vw;
  grid-template-columns: repeat(auto-fill, 60px);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  padding-top: 10px;
  justify-content: space-around;
}

.iconfont {
  font-size: 3.2rem;
  height: 50px;
  width: 50px;
  border-radius: 10px;
  margin: 0 auto;
  line-height: 1.5;
}

.menuItem {
  color: #878787;
}

.menugroup {
  padding-bottom: 10px;
  box-shadow: 2px 2px 5px #aeb7ed;

  .van-cell {
    border-radius: 10px;
    padding 5px 15px
  }
}

.van-panel {
  margin-bottom: 5px;
  border-radius: 10px;

}

.van-hairline--top-bottom::after{
    border none
}

</style>
