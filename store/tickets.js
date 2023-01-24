import TicketsService from '../services/tickets.service'

export const state = () => ({})

export const mutations = {}

export const actions = {
  async getAllTickets({ commit }, token, estado) {
    return await TicketsService.getAllTickets(token, estado)
  },

  async getTicket({ commit }, token, idTicket) {
    return await TicketsService.getTicket(token, idTicket)
  },

  async deleteTicket({ commit }, token, idTicket) {
    return await TicketsService.deleteTicket(token, idTicket)
  },

  async createTicket({ commit }, token, ticket) {
    return await TicketsService.createTicket(token, ticket)
  },

  async rateTicket({ commit }, token, idUsuario, rating) {
    return await TicketsService.rateTicket(token, idUsuario, rating)
  },

  async chatTicket({ commit }, token, idTicket) {
    return await TicketsService.chatTicket(token, idTicket)
  },

  async sendMessage({ commit }, token, idTicket, message) {
    return await TicketsService.sendMessage(token, idTicket, message)
  },
}

export const getters = {}
