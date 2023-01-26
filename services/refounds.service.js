import axios from 'axios'

const API_URL = process.env.API_URL

class RefoundsService {
  async getAllRefounds(token) {
    const url = API_URL + 'tpvv/listaDevoluciones'
    const params = { token }
    try {
      const response = await axios.get(url, { params })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async getRefound(params) {
    const url = API_URL + 'tpvv/detallesDevolucion'

    try {
      const response = await axios.get(url, { params })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async makeRefound(data) {
    const url = API_URL + 'tpvv/realizarDevolucion'

    try {
      await axios.post(url, data.refound, {
        params: { token: data.token },
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default new RefoundsService()
