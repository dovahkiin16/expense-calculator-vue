import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import login from './login.store'
import user from './user.store'
import expenses from './expenses.store'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    user,
    expenses,
  },
  plugins: [vuexLocal.plugin]
})
