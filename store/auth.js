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
    const token = await AuthService.loginUser(user)
    if (token !== '') {
      const date = new Date()
      date.setDate(date.getDate() + 30)
      this.$cookies.set('auth', token, {
        expires: date,
        path: '/',
      })
      commit('setAccessToken', token)
    }
    return token
  },

  async getUserToken({ commit }, idUsuario) {
    return await AuthService.getUserToken(idUsuario)
  },
}

export const getters = {
  isLogin: (state) => {
    return !!state.accessToken
  },
  getToken(state) {
    return state.accessToken
  },
  getUser(state) {
    return state.user
  },
}
