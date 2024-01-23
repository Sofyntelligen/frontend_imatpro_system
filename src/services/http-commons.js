import axios from 'axios'
import { API_URL_BACKEND } from '@/config.js'

export default axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  baseURL: API_URL_BACKEND,
  timeout: 5000
})
