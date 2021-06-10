import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

// ts不会写这段
// const originPush = VueRouter.prototype.push
// const originReplace = VueRouter.prototype.replace

// VueRouter.prototype.push = function (location: string) {
//   return originPush
//     .call(this, location)
//     .catch((err: string) => err)
// }
// VueRouter.prototype.replace = function (location: string) {
//   return originReplace
//   .call(this, location)
//   .catch((err: string) => err)
// }

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/Home',
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
  },
  {
    path: '/Article/:id',
    name: 'Article',
    component: () => import('../views/Article.vue')
  },
  { path: '*', name: '*', component: Home }
]


export default function () {
  return  new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
}
