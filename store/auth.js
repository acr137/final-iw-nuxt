import Cookies from 'js-cookie'
import AuthService from '@/services/auth.service'

export const state = () => ({
  user: {},
  accessToken: '',
  admin: true,
})

export const mutations = {
  setAccessToken(state, accessToken) {
    state.accessToken = accessToken
  },
  setUser(state, user) {
    state.user = user
  },
  setUserType(state, type) {
    type === 'admin' ? (state.admin = true) : (state.admin = false)
  },
  deleteAccessToken(state) {
    state.accessToken = ''
  },
  deleteUser(state) {
    state.user = {}
  },
}

export const actions = {
  setAccessToken({ commit }, accessToken) {
    commit('setAccessToken', accessToken)
  },

  logout({ commit }) {
    Cookies.remove('auth')
    commit('deleteAccessToken')
    commit('deleteUser')
  },

  async login({ commit, dispatch }, user) {
    const data = await AuthService.loginUser(user)
    if (data.token !== '') {
      Cookies.set('auth', { token: data.token, id: data.id })

      commit('setUserType', data.tipoUsuario)
      commit('setAccessToken', data.token)
      commit('setUser', data)
    }
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
  isAdmin(state) {
    return state.admin
  },
}
