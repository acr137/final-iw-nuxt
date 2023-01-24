import PaymentsService from '../services/payments.service'

export const state = () => ({})

export const mutations = {}

export const actions = {
  async getAllPayments({ commit }, token) {
    return await PaymentsService.getAllPayments(token)
  },

  async getPayments({ commit }, token, idPago) {
    return await PaymentsService.getPayment(token, idPago)
  },

  async makePayment({ commit }, token, payment) {
    return await PaymentsService.makePayment(token, payment)
  },
}

export const getters = {}
