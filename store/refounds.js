import PaymentsService from '../services/payments.service'

export const state = () => ({})

export const mutations = {}

export const actions = {
  async getAllRefounds({ commit }, token) {
    return await PaymentsService.getAllRefounds(token)
  },

  async getRefound({ commit }, token, idPago) {
    return await PaymentsService.getRefound(token, idPago)
  },

  async makeRefound({ commit }, token, idPago) {
    return await PaymentsService.makeRefound(token, idPago)
  },
}

export const getters = {}
