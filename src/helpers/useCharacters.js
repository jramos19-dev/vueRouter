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

export const character = ref([])
export const characters = ref([])

export const getAllCharacters = async () => {
  const { data } = await api.get('/characters')
  characters.value = data
}

export const getCharacterById = async (id) => {
  // /tipsbycharid/3
  const { data } = await api.get(`/characters/${id}`)
  character.value = data
}

export const sendCharacter = async (character) => {
  console.log(character.value)
  await api.post('/characters/', { character })
}

export const editCharater = async (character, id) => {
  await api.put(`/characters/${id}`, { character })
}
