<template>
  <div>
    <div class="text-center text-3xl font-bold">Legends</div>

    <div v-for="character in characters" :key="character" class="text-center">
      <router-link
        :to="{ name: 'legendDetails', params: { id: character.id } }"
      >
        <h2>
          {{ character.name }}
        </h2>
      </router-link>
    </div>
  </div>
  <div class="w-3/6 h-1/3 block mx-auto">
    <img src="../../assets/lifeLine.jpg" alt="Lifeline" />
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
<style>
.links {
  display: flex;
  max-width: 100px;
  align-items: center;
  margin: auto;
}
</style>
