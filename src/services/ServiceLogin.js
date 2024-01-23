import http from './http-commons.js'

async function getAuthenticationUser(endpoint, data) {
  try {
    const response = await http.post(endpoint, JSON.stringify(data))
    const result = response.data
    result['status'] = response.status
    return result
  } catch (error) {
    console.error('Error en la solicitud : ', error)
    return error.response
  }
}

export default getAuthenticationUser
