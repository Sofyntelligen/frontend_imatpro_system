import ServiceGeneric from '@/services/ServiceGeneric.js'

async function getDataEquationAll(page) {
  const params = new URLSearchParams()
  params.append('page', page)
  params.append('type_representation', 'PRINCIPAL')

  try {
    const response = await ServiceGeneric.getAll('/equation/all', { params })
    return response.data
  } catch (error) {
    console.error('GET request Equation error : ', error)
    return error.response
  }
}

export default getDataEquationAll
