import Vuex, { Store } from 'vuex'
import Vue from 'vue'

// Modules
import sessions from './modules/session'
import locale from './modules/locale'

Vue.use(Vuex)

const createStore = () =>
  new Store({
    modules: {
      sessions,
      locale,
    },
  })

export default createStore
