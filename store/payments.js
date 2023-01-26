import PaymentsService from '../services/payments.service'

export const state = () => ({})

export const mutations = {}

export const actions = {
  async getAllPayments({ commit }, token) {
    return await PaymentsService.getAllPayments(token)
  },

  async getPayments({ commit }, params) {
    return await PaymentsService.getPayment(params)
  },

  async makePayment({ commit }, data) {
    return await PaymentsService.makePayment(data)
  },
}

export const getters = {}
