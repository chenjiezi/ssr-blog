import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'
import createStore from './store'
import { sync } from 'vuex-router-sync'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);

// import {
//   Icon,
//   Button,
//   Divider,
//   Anchor,
//   Col,
//   Row,
//   Layout,
//   Pagination,
//   Menu,
//   Tree,
//   Empty
// } from 'ant-design-vue'

// Vue.use(Icon)
// Vue.use(Button)
// Vue.use(Divider)
// Vue.use(Anchor)
// Vue.use(Col)
// Vue.use(Row)
// Vue.use(Layout)
// Vue.use(Pagination)
// Vue.use(Menu)
// Vue.use(Tree)
// Vue.use(Empty)

export function createApp () {
  const router = createRouter()
  const store = createStore()

  // 同步路由状态(route state)到 store
  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store }
}