import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
import axios from 'axios'
import chart from 'chart.js'
import './global.filters'

Vue.config.productionTip = false
axios.defaults.baseURL = process.env.VUE_APP_BACKEND
chart.defaults.global.defaultFontColor = '#eee'

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
