const state = {
  locales: [],
  locale: 'en',
}

const getters = {
  getLocales: (state) => state.locales,
  getLocale: (state) => state.locale,
}

const actions = {
  changeLocale({ commit }, locale) {
    commit('setLocale', locale)
  },
}

const mutations = {
  setLocale(state, locale) {
    state.locale = locale
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
