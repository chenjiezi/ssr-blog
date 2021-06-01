import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function () {
  return new Vuex.Store({
    state: {
      currentActiveMenu: ['home']
    },
    getters: {
      currentActiveMenu: ({ currentActiveMenu }) => currentActiveMenu
    },
    mutations: {
      currentActiveMenu: (state, value) => {
        state.currentActiveMenu = value
      }
    },
    actions: {
    },
    modules: {
    }
  })
}
