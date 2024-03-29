import AuthService from '@/services/auth.service'

export const state = () => ({
  user: {
    id: 1,
    nombre: 'Iw Admin',
    email: 'luis290499@gmail.com',
    nombreEmpresa: 'IW Tpvv S.L',
    tipoUsuario: 'admin',
  },
  accessToken: 'ZNOZZUHqpnASPLgi7tSf3UPS3',
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
    commit('deleteAccessToken')
    commit('deleteUser')
  },

  async login({ commit, dispatch }, user) {
    const data = await AuthService.loginUser(user)
    if (data.token !== '') {
      const date = new Date()
      date.setDate(date.getDate() + 30)
      this.$cookies.set('auth', data.token, {
        expires: date,
        path: '/',
      })

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
