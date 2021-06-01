import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'
import createStore from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.use(Antd);

export function createApp () {
  const router = createRouter()
  const store = createStore()

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store }
}