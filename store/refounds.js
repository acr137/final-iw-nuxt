import RefoundsService from '../services/refounds.service'

export const state = () => ({})

export const mutations = {}

export const actions = {
  async getAllRefounds({ commit }, token) {
    return await RefoundsService.getAllRefounds(token)
  },

  async getRefound({ commit }, params) {
    return await RefoundsService.getRefound(params)
  },

  async makeRefound({ commit }, data) {
    return await RefoundsService.makeRefound(data)
  },
}

export const getters = {}
