import Vue from 'vue'
import Vuex from 'vuex'
import entrada from './entrada'
import saida from './saida'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    entrada,
    saida,
  }
})
