import UserService from '../services/users.service'

export const state = () => ({})

export const mutations = {}

export const actions = {
  async getAllUsers({ commit }, token) {
    return await UserService.getAllUsers(token)
  },

  async getUser({ commit }, token, idUsuario) {
    return await UserService.getUser(token, idUsuario)
  },

  async deleteUser({ commit }, token, idUsuario) {
    return await UserService.deleteUser(token, idUsuario)
  },

  async createUser({ commit }, token, user) {
    return await UserService.createUser(token, user)
  },

  async editUser({ commit }, token, idUsuario, user) {
    return await UserService.editUser(token, idUsuario, user)
  },

  async regenerateUserToken({ commit }, token) {
    return await UserService.editUser(token)
  },
}

export const getters = {}
