import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

// TODO: 学完ts，要把该文件改为ts格式
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location) {
  return originPush.call(this, location).catch(err => err)
}
VueRouter.prototype.replace = function (location) {
  return originReplace.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes= [
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
