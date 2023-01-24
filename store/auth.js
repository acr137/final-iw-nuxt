import AuthService from '@/services/auth.service'

export const state = () => ({
  user: {},
  accessToken: '',
})

export const mutations = {
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken
  },
  setUser(state, user) {
    state.user = user
  },
  deleteAccessToken(state) {
    state.accessToken = ''
  },
}

export const actions = {
  setAccessToken({ commit }, accessToken) {
    commit('setAccessToken', accessToken)
  },

  logoutUser({ commit }) {
    commit('deleteAccessToken')
  },

  async login({ commit, dispatch }, user) {
    const data = await AuthService.loginUser(user)
    if (data?.token !== '') {
      dispatch('setAccessToken', data.token)
      commit('setUser', data.user)
    }
    return data
  },

  async getUserToken({ commit }, idUsuario) {
    return await AuthService.getUserToken(idUsuario)
  },
}

export const getters = {
  isLogin: (state) => {
    return !!state.accessToken
  },
}
