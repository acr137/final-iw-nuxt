import axios from 'axios'

const API_URL = process.env.API_URL

class PaymentsService {
  async getAllPayments(token) {
    const url = API_URL + 'tpvv/listaPagos'
    const params = { token }
    try {
      const response = await axios.get(url, { params })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async getPayment(token, idPago) {
    const url = API_URL + 'tpvv/detallesPago'
    const params = { token, idPago }

    try {
      const response = await axios.get(url, { params })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async makePayment(token, payment) {
    const url = API_URL + 'tpvv/realizarPago'
    const params = { token }
    const body = { payment }

    try {
      const response = await axios.post(url, { params, body })
      return response
    } catch (error) {
      console.log(error)
    }
  }
}

export default new PaymentsService()
