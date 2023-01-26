import axios from 'axios'

const API_URL = process.env.API_URL

class TicketsService {
  async getAllTickets(params) {
    const url = API_URL + 'tpvv/listaTickets'

    try {
      const response = await axios.get(url, { params })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async getTicket(params) {
    const url = API_URL + 'tpvv/detallesTicket'

    try {
      const response = await axios.get(url, { params })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async deleteTicket(params) {
    const url = API_URL + 'tpvv/borrarTicket'

    try {
      const response = await axios.delete(url, { params })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async createTicket(data) {
    const url = API_URL + 'tpvv/crearTicket'

    try {
      const response = await axios.post(url, data.ticket, {
        params: { token: data.token },
      })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async rateTicket(data) {
    const url = API_URL + 'tpvv/valorarTicket'

    try {
      const response = await axios.post(url, data.rating, {
        params: { token: data.token, idTicket: data.idTicket },
      })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async chatTicket(params) {
    const url = API_URL + 'tpvv/chatTicket'

    try {
      const response = await axios.get(url, { params })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async sendMessage(data) {
    const url = API_URL + 'tpvv/chatTicket/enviarMessage'

    try {
      const response = await axios.post(url, data.message, {
        params: { token: data.token, idTicket: data.idTicket },
      })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}

export default new TicketsService()
