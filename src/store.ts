import Vue from 'vue'
import Vuex from 'vuex'
import account from './store/account'
import custom from './store/custom'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules:{
    account:account,
    custom:custom
  },
  getters:{

  }
})
