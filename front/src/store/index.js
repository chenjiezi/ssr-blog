import Vue from 'vue'
import Vuex from 'vuex'
import { tagList, articleList } from '../mock'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articleList: [],
    tagList: [],
    pageParams: {},
  },
  actions: {
    FETCH_TAG_LIST({ commit }) {
      return new Promise((resolve, reject) => {
        // TODO: ajax
        setTimeout(() => {
          commit('SET_TAG_LIST', tagList)
          resolve(tagList)
        }, 1024)
      })
    },
    FETCH_ARTICLE_LIST({ commit }) {
      return new Promise((resolve, reject) => {
        // TODO: ajax
        setTimeout(() => {
          commit('SET_ARTICLE_LIST', articleList)
          resolve(articleList)
        }, 1024)
      })
    },
  },
  mutations: {
    SET_ARTICLE_LIST(state, { articleList }) {
      Vue.set(state, 'articleList', articleList)
    },
    SET_TAG_LIST(state, tagList) {
      Vue.set(state, 'tagList', tagList)
    },
    SET_PAGE_PARAMS(state, { pageParams }) {
      Vue.set(state, 'pageParams', pageParams)
    },
  },
  getters: {
    articleList(state) {
      return state.articleList
    },
    tagList(state) {
      return state.tagList
    },
    pageParams(state) {
      return state.pageParams
    },
  },
})
