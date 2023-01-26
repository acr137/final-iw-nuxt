import TicketsService from '../services/tickets.service'

export const state = () => ({})

export const mutations = {}

export const actions = {
  async getAllTickets({ commit }, params) {
    return await TicketsService.getAllTickets(params)
  },

  async getTicket({ commit }, params) {
    return await TicketsService.getTicket(params)
  },

  async deleteTicket({ commit }, params) {
    return await TicketsService.deleteTicket(params)
  },

  async createTicket({ commit }, data) {
    return await TicketsService.createTicket(data)
  },

  async rateTicket({ commit }, data) {
    return await TicketsService.rateTicket(data)
  },

  async chatTicket({ commit }, params) {
    return await TicketsService.chatTicket(params)
  },

  async sendMessage({ commit }, data) {
    return await TicketsService.sendMessage(data)
  },
}

export const getters = {}
