import Vue from 'vue'
import App from './App.vue'
import createrouter from './router'
import createStore from './store'

Vue.config.productionTip = false

new Vue({
  router: createrouter(),
  store: createStore(),
  render: h => h(App)
}).$mount('#app')
