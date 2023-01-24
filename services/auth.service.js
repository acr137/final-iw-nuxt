import axios from 'axios'

const API_URL = process.env.API_URL

class AuthService {
  async loginUser(user) {
    const url = API_URL + 'tpvv/login'

    try {
      const response = await axios.post(url, user)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async getUserToken(idUsuario) {
    const url = API_URL + 'tpvv/token'
    const params = { idUsuario }

    try {
      const response = await axios.post(url, { params })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}

export default new AuthService()
