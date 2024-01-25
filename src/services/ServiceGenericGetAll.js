import ServiceGeneric from '@/services/ServiceGeneric.js'

async function getAllData(endpoint, page) {
  const params = new URLSearchParams()
  params.append('page', page)

  try {
    const response = await ServiceGeneric.getAll(endpoint, params)
    return response.data
  } catch (error) {
    console.error('GET request Generic error : ', error)
    return error.response
  }
}

export default getAllData
