import Vue from 'vue'
import Vuex from 'vuex'
import login from './login.store'
import user from './user.store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    user,
  }
})
