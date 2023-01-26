import axios from 'axios'

const API_URL = process.env.API_URL

class PaymentsService {
  async getAllPayments(token) {
    const url = API_URL + 'tpvv/listaPagos'
    const params = { token }

    try {
      const response = await axios.get(url, { params })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async getPayment(params) {
    const url = API_URL + 'tpvv/detallesPago'

    try {
      const response = await axios.get(url, { params })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async makePayment(data) {
    const url = API_URL + 'tpvv/realizarPago'

    try {
      await axios.post(url, data.payment, {
        params: { token: data.token },
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default new PaymentsService()
