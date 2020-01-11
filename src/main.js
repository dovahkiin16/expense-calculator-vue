import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
import axios from 'axios'
import './global.filters'

Vue.config.productionTip = false
axios.defaults.baseURL = process.env.VUE_APP_BACKEND

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
