import ServiceGeneric from '@/services/ServiceGeneric.js'

async function putData(endpoint, body) {
  try {
    JSON.parse(JSON.stringify(body))
    const response = await ServiceGeneric.put(endpoint, body)
    return response.data
  } catch (error) {
    console.error('PUT request Generic error : ', error)
    return error.response
  }
}

export default putData
