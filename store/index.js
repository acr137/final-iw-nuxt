export const state = () => ({})

export const mutations = {}

export const actions = {
  nuxtServerInit({ dispatch, commit, getters }, { req, query }) {
    const cookies = {
      auth: this.$cookies.get('auth'),
    }

    if (typeof cookies.auth !== 'undefined') {
      commit('users/setAccessToken', cookies.auth)
    }
  },
}

export const getters = {}
