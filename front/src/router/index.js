import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const Article = () => import('../views/Article.vue')
const Archives = () => import('../views/Archives.vue')
const About = () => import('../views/About.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/article',
    name: 'Article',
    component: Article,
  },
  {
    path: '/archives',
    name: 'Archives',
    component: Archives,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
