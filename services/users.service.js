import axios from 'axios'

const API_URL = process.env.API_URL

class UserService {
  async getAllUsers(token) {
    const url = API_URL + 'tpvv/listaUsuarios'
    const params = { token }

    try {
      const response = await axios.get(url, { params })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async getUser(params) {
    const url = API_URL + 'tpvv/detallesUsuario'
    
    try {
      const response = await axios.get(url, { params })
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async deleteUser(params) {
    const url = API_URL + 'tpvv/borrarUsuario'

    try {
      await axios.delete(url, { params })
    } catch (error) {
      console.log(error)
    }
  }

  async createUser(data) {
    const url = API_URL + 'tpvv/crearUsuario'

    try {
      await axios.post(url, data.user, { params: { token: data.token } })
    } catch (error) {
      console.log(error)
    }
  }

  async editUser(data) {
    const url = API_URL + 'tpvv/modificarUsuario'

    try {
      await axios.put(url, data.user, { params: { token: data.token, idUsuario: data.idUsuario }})
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
