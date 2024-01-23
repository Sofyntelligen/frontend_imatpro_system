import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useMainStore = defineStore('main', () => {
  const userName = ref('Guest')
  const userEmail = ref('guest@example.com')

  const userAvatar = computed(
    () =>
      `https://api.dicebear.com/7.x/initials/svg?seed=${userEmail.value.replace(
        /[^a-z0-9]+/gi,
        '-'
      )}.svg`
  )

  const isFieldFocusRegistered = ref(false)

  const clients = ref([])
  const history = ref([])
  const products = ref([])
  const updates = ref([])

  function setUser(payload) {
    if (payload.name) {
      userName.value = payload.name
    }
    if (payload.email) {
      userEmail.value = payload.email
    }
  }

  function fetchSampleClients() {
    axios
      .get(`data-sources/clients.json`)
      .then((result) => {
        clients.value = result?.data?.data
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  function fetchSampleHistory() {
    axios
      .get(`data-sources/history.json`)
      .then((result) => {
        history.value = result?.data?.data
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  function fetchSampleProducts() {
    axios
      .get(`data-sources/products.json`)
      .then((result) => {
        products.value = result?.data?.data
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  function fetchSampleUpdates() {
    axios
      .get(`data-sources/updates.json`)
      .then((result) => {
        updates.value = result?.data?.data
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return {
    userName,
    userEmail,
    userAvatar,
    isFieldFocusRegistered,
    clients,
    history,
    products,
    updates,
    setUser,
    fetchSampleClients,
    fetchSampleHistory,
    fetchSampleProducts,
    fetchSampleUpdates
  }
})
