<template>
  <div id="layout">
    <van-tabbar v-if="showbar" v-model="activetab" route>
      <van-tabbar-item
        v-for="(item,index) in baritems"
        class="iconfont"
        replace
        :to="item.to"
        :class="[activetab===index?[item.activeicon,'activetab']:item.icon]"
        :key="index"
      >
        <span class="baritem_text">{{item.text}}</span>
      </van-tabbar-item>
    </van-tabbar>

    <div class="content">
      <transition mode="out-in" name="pageswich-fade">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Toast } from 'vant'

export default Vue.extend({
  name: 'BaseLayout',
  components: {},
  data () {
    return {
      loadingConfig: {
        mask: true,
        duration: 0,
        forbidClick: true,
        loadingType: 'spinner',
        message: '加载中...'
      },
      activetab: 2,
      baritems: [
        {
          text: '工作台',
          activeicon: ['jiticon-gongzuotai-active'],
          icon: ['jiticon-gongzuotai'],
          to: '/workbench'
        },
        {
          text: '工作',
          activeicon: ['jiticon-app-active'],
          icon: ['jiticon-app'],
          to: '/appmenu'
        },
        {
          text: '待办',
          activeicon: ['jiticon-schedule-active'],
          icon: ['jiticon-schedule'],
          to: '/schedule'
        },
        {
          text: '我的',
          activeicon: ['jiticon-userprofile-active'],
          icon: ['jiticon-userprofile'],
          to: '/userprofile'
        }
      ]
    }
  },
  props: {
    location: {
      type: Object
    },
    addBtn: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  methods: {
    addClick () {
      const addUrl = this.addUrl
      this.$router.push({ path: addUrl })
    }
  },
  computed: {
    addUrl (): string {
      return this.$route.meta.addBtnUrl
    },
    showAddBtn (): Boolean {
      return !!this.$route.meta.addBtnUrl
    },
    loading (): Boolean {
      return this.$store.state.loading
    },
    showSideMenu (): Boolean {
      return !!this.$route.meta.sidemenu
    },
    showbar (): Boolean {
      return this.$route.meta.showbar
    }
  },
  watch: {
    loading (newValue, oldValue) {
      if (newValue) {
        Toast.loading(this.loadingConfig)
      } else {
        Toast.clear()
      }
    }
  }
})
</script>

<style lang="stylus" scoped>
#layout {
  height: 100vh;

  .baritem_text {
    font-size: 0.6rem;
  }
}

.iconfont {
  font-size: 2rem !important;

  span {
    font-size: 1.5rem !important;
  }
}
.content{
  padding-bottom 50px
}

.van-tabbar-item {
  padding: 5px 0;
}

.pageswich-fade-enter-active, .pageswich-fade-leave-active {
  // 页面切换动画持续时间
  transition: all 0.4s;
}

.pageswich-fade-enter, .pageswich-fade-leave-active {
  // 设置透明度实现淡出淡入效果
  opacity: 0;
}

.pageswich-fade-enter {
  // 进入时从右边偏移50%屏幕宽度位置开始滑入
  transform: translateX(100vw);
}

.pageswich-fade-leave-active {
  // 离开时滑到左边偏移50%屏幕宽度位置结束
  transform: translateX(-100vw);
}
</style>
