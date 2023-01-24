import axios from 'axios'

const API_URL = process.env.API_URL

class RefoundsService {
  async getAllRefounds(token) {
    const url = API_URL + 'tpvv/listaDevoluciones'
    const params = { token }
    try {
      const response = await axios.get(url, { params })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async getRefound(token, idPago) {
    const url = API_URL + 'tpvv/detallesDevolucion'
    const params = { token, idPago }

    try {
      const response = await axios.get(url, { params })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async makeRefound(token, idPago) {
    const url = API_URL + 'tpvv/realizarDevolucion'
    const params = { token, idPago }

    try {
      const response = await axios.post(url, { params })
      return response
    } catch (error) {
      console.log(error)
    }
  }
}

export default new RefoundsService()
