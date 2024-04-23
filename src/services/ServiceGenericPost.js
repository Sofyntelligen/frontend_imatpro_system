import ServiceGeneric from '@/services/ServiceGeneric.js'

async function postData(endpoint, body) {
  try {
    JSON.parse(JSON.stringify(body))
    const response = await ServiceGeneric.post(endpoint, body)
    return response.data
  } catch (error) {
    console.error('POST request Generic error : ', error)
    return error.response
  }
}

export default postData
