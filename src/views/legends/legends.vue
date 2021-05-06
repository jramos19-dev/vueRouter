<template>
  <div class="border-green-700 bg-gray-300 px-4 py-2 mx-2 my-2 rounded-lg">
    <h1 class="text-center text-3xl font-bold font-serif">Legends</h1>

    <div
      v-for="character in characters"
      :key="character"
      class="text-lg text-center"
    >
      <router-link
        :to="{ name: 'legendDetails', params: { id: character.id } }"
      >
        <h2>{{ character.name }}</h2>
      </router-link>
    </div>
  </div>
  <div>
    <img
      src="../../assets/lifeLine.jpg"
      alt="Lifeline"
      class="w-3/6 h-1/3 block mx-auto"
    />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { characters, getAllCharacters } from '../../helpers/useCharacters'

const r = useRoute()
// const legends = [
//   { name: 'octane', id: 1, details: 'lorem' },
//   { name: 'lifeline', id: 2, details: 'lorem' },
//   { name: 'Caustic', id: 3, details: 'lorem' },
// ]

onMounted(async () => {
  getAllCharacters()
  console.log(characters)
})

const route = useRoute()
</script>
