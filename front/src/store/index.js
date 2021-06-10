import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { getMenuList } from '@/api/menu'

export default function createStore () {
  return new Vuex.Store({
    state: {
      menuList: []
    },
    actions: {
      fetchMenuList ({ commit }) {
        return getMenuList().then(res => {
          commit('setMenuList', { menuList: res.data.menuList })
        })
      }
    },
    mutations: {
      setMenuList (state, { menuList }) {
        Vue.set(state.menuList, menuList)
      }
    }
  })
}