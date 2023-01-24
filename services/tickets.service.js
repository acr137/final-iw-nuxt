import axios from 'axios'

const API_URL = process.env.API_URL

class TicketsService {
  async getAllTickets(token, estado) {
    const url = API_URL + 'tpvv/listaTickets'
    const params = { token, estado }

    try {
      const response = await axios.get(url, { params })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async getTicket(token, idTicket) {
    const url = API_URL + 'tpvv/detallesTicket'
    const params = { token, idTicket }

    try {
      const response = await axios.get(url, { params })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async deleteTicket(token, idTicket) {
    const url = API_URL + 'tpvv/borrarTicket'
    const params = { token, idTicket }

    try {
      const response = await axios.delete(url, { params })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async createTicket(token, ticket) {
    const url = API_URL + 'tpvv/crearTicket'
    const params = { token }
    const body = { ticket }

    try {
      const response = await axios.post(url, { params, body })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async rateTicket(token, idTicket, rating) {
    const url = API_URL + 'tpvv/valorarTicket'
    const params = { token, idTicket }
    const body = { rating }

    try {
      const response = await axios.post(url, { params, body })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async chatTicket(token, idTicket) {
    const url = API_URL + 'tpvv/chatTicket'
    const params = { token, idTicket }

    try {
      const response = await axios.get(url, { params })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async sendMessage(token, idTicket, message) {
    const url = API_URL + 'tpvv/chatTicket/enviarMessage'
    const params = { token, idTicket }
    const body = { message }

    try {
      const response = await axios.post(url, { params, body })
      return response
    } catch (error) {
      console.log(error)
    }
  }
}

export default new TicketsService()
