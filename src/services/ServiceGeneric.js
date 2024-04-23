import http from './http-commons.js'

class ServiceGeneric {
  getAll(endpoint, params) {
    try {
      return http.get(endpoint, { params })
    } catch (error) {
      console.error('GET request error : ', error)
      return error.response
    }
  }

  get(endpoint, id) {
    try {
      return http.get(endpoint + id)
    } catch (error) {
      console.error('GET request error : ', error)
      return error.response
    }
  }

  post(endpoint, body) {
    try {
      return http.post(endpoint, body)
    } catch (error) {
      console.error('POST request error : ', error)
      return error.response
    }
  }

  put(endpoint, id, data) {
    try {
      return http.delete(endpoint + id, data)
    } catch (error) {
      console.error('PUT request error : ', error)
      return error.response
    }
  }

  delete(endpoint, id) {
    try {
      return http.delete(endpoint + id)
    } catch (error) {
      console.error('DELETE request error : ', error)
      return error.response
    }
  }
}

export default new ServiceGeneric()
