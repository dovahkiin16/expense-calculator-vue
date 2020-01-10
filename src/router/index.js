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
    component: () => import(/* webpackChunkName: "home-group" */ '../views/Home'),
    beforeEnter: authOnly,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "home-group" */ '../views/Dashboard'),
        beforeEnter: authOnly,
      },
      {
        path: 'expenses',
        name: 'expenses',
        component: () => import(/* webpackChunkName: "home-group" */ '../views/Expenses'),
        beforeEnter: authOnly,
      },
      {
        path: 'expenses/new',
        name: 'expense-form',
        component: () => import(/* webpackChunkName: "home-group" */ '../views/ExpenseFormView'),
        beforeEnter: authOnly,
      }
    ],
  }
]

const router = new VueRouter({
  routes
})

export default router
