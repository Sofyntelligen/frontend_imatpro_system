import ServiceGeneric from '@/services/ServiceGeneric.js'

async function deleteData(endpoint) {
  try {
    const response = await ServiceGeneric.delete(endpoint)
    return response.data
  } catch (error) {
    console.error('DELETE request Generic error : ', error)
    return error.response
  }
}

export default deleteData
