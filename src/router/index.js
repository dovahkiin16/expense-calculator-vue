import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import {authOnly, noAuth} from './guards'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    beforeEnter: noAuth,
  },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home-group" */ '../views/Home'),
    beforeEnter: authOnly,
  }
]

const router = new VueRouter({
  routes
})

export default router
