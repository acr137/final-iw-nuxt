import axios from 'axios'

const API_URL = 'http://localhost:8000/'

class AuthService {
  async registerUser(user) {
    try {
      const response = await axios.post(API_URL + 'users', user)
      return response.data
    } catch (error) {
      this.$log.error(error)
    }
  }

  async modifyUser(user) {
    try {
      const response = await axios.put(API_URL + 'users', user)
      return response.data
    } catch (error) {
      this.$log.error(error)
    }
  }

  async loginUser(user) {
    try {
      const response = await axios.post(API_URL + 'login', user)
      return response.data
    } catch (error) {
      this.$log.error(error)
    }
  }
}

export default new AuthService()
