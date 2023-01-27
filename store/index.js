import Cookies from 'js-cookie'

export const state = () => ({})

export const mutations = {}

export const actions = {
  nuxtServerInit({ dispatch, commit, getters }, { req, query }) {
    const auth = Cookies.get('auth')
    if (typeof auth !== 'undefined') {
      commit('users/setAccessToken', auth.token)
    }
  },
}

export const getters = {}
