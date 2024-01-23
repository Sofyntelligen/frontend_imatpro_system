import ServiceGeneric from '@/services/ServiceGeneric.js'

async function getData(endpoint, id) {
  try {
    const response = await ServiceGeneric.get(endpoint, id)
    return response.data
  } catch (error) {
    console.error('GET request Generic error : ', error)
    return error.response
  }
}

export default getData
