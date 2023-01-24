import axios from 'axios'

const API_URL = process.env.API_URL

class UserService {
  async getAllUsers(token) {
    const url = API_URL + 'tpvv/listaUsuarios'
    const params = { token }

    try {
      const response = await axios.get(url, { params })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  async getUser(token, idUsuario) {
    const url = API_URL + 'tpvv/detallesUsuario'
    const params = { token, idUsuario }

    try {
      const response = await axios.get(url, { params })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async deleteUser(token, idUsuario) {
    const url = API_URL + 'tpvv/borrarUsuario'
    const params = { token, idUsuario }

    try {
      const response = await axios.delete(url, { params })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async createUser(token, user) {
    const url = API_URL + 'tpvv/crearUsuario'
    const params = { token }
    const body = { user }

    try {
      const response = await axios.post(url, { params, body })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async editUser(token, idUsuario, data) {
    const url = API_URL + 'tpvv/modificarUsuario'
    const params = { token, idUsuario }
    const body = { data }

    try {
      const response = await axios.put(url, { params, body })
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async regenerateUserToken(token) {
    const url = API_URL + 'tpvv/regenerarTokenUsuario'
    const params = { token }

    try {
      const response = await axios.post(url, { params })
      return response
    } catch (error) {
      console.log(error)
    }
  }
}

export default new UserService()
