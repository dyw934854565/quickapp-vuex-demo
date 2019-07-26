import Vuex from 'quickapp-vuex'
import createLogger from 'quickapp-vuex/dist/logger'

const counter = {
  namespaced: true,
  state: {
    count: 1
  },
  getters: {
    count (state) {
      return state.count
    }
  },
  mutations: {
    increment (state) {
      state.count ++
    },
    decrement (state) {
      state.count --
    }
  },
}

export default new Vuex.Store({
  state: {
    a: '123',
    b: '456'
  },
  getters: {
    a (state) {
      return state.a
    },
    b (state) {
      return state.b
    },
    c (state) {
      return state.a + state.b
    }
  },
  mutations: {
    setA (state, a) {
      state.a = a
    }
  },
  actions: {
    setAction (context) {
      context.commit('setA', '765')
    }
  },
  modules: {
    counter
  },
  plugins: [createLogger()]
})
