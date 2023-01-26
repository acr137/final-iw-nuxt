import UserService from '../services/users.service'

export const state = () => ({})

export const mutations = {}

export const actions = {
  async getAllUsers({ commit }, token) {
    return await UserService.getAllUsers(token)
  },

  async getUser({ commit }, params) {
    return await UserService.getUser(params)
  },

  async deleteUser({ commit }, params) {
    await UserService.deleteUser(params)
  },

  async createUser({ commit }, data) {
    await UserService.createUser(data)
  },

  async editUser({ commit }, data) {
    await UserService.editUser(data)
  },

  async regenerateUserToken({ commit }, token) {
    return await UserService.editUser(token)
  },
}

export const getters = {}
