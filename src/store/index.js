
import { createStore } from 'vuex'

export default createStore({
  state: {
    showMenu: false
  },
  mutations: {
    toggleMenu(state) {
      state.showMenu = !state.showMenu
      console.log(state.showMenu)
    },
    hideMenu(state) {
      state.showMenu = false
      console.log(state.showMenu)
    }
  },
  actions: {
    toggleMenuAction(context) {
      context.commit('toggleMenu')
    },
    hideMenuAction(context) {
      context.commit('hideMenu')
    }
  },
  getters() { },
  modules: {
  }
})
