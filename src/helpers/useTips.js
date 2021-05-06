import { ref } from 'vue'
import { useToggle } from '@vueuse/core'
import axios from 'axios'

// export const [show] = useToggle(false)

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD,
  },
})

export const tips = ref([])
export const tip = ref('')

export const getAllTips = async () => {
  const { data } = await api.get('/tips')
  tips.value = data
}

export const getTipsById = async (id) => {
  const { data } = await api.get(`/tips/${id}`)
  tips.value = data
  console.log(`the id is ${id}`)
}
