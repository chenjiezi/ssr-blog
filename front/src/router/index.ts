import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Note',
    name: 'Note',
    component: () => import('../views/Note.vue')
  },
  {
    path: '/Archive',
    name: 'Archive',
    component: () => import('../views/Archive.vue')
  }
]


export default function () {
  return  new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
}
