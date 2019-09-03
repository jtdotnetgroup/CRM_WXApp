import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import tel from '@/components/tellink.vue'
import buttons from '@/components/buttongroup.vue'
import addbtn from '@/components/addBtn.vue'
import'@/assets/css/iconfont.css'

const moment=require('moment')

require('./config/vant.config.ts')
require('./router/router.guard')

require('@/mock/index')

Vue.config.productionTip = false

Vue.prototype.$moment=moment

Vue.component('tel',tel)
Vue.component('buttons',buttons)
Vue.component('addbtn',addbtn)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
