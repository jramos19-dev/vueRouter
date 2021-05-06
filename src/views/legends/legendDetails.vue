<template>
  <div class="container mx-auto">
    <h1 class="text-gray-300 text-4xl text-center">Legends Details Page</h1>
    <div class="text-gray-300 text-center text-2xl">
      <h2>The details page for legend {{ $route.params.id }}</h2>
    </div>
  </div>

  <div class="w-64 h-64 mx-auto">
    <img :src="character.url" :alt="character.description" />
  </div>

  <div v-for="(tip, index) in tips" :key="index" class="text-center">
    <h3 class="text-fuchsia-400 text-3xl">Tip {{ tip.title || 'no title' }}</h3>
    <p class="px-80 text-2xl text-gray-300">
      {{ tip.content || 'none' }}
    </p>
  </div>
</template>

<script setup>
import { tips, getTipsByCharId } from '../../helpers/useTips'
import { character, getCharacterById } from '../../helpers/useCharacters'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'

const r = useRoute()

onMounted(async () => {
  await getTipsByCharId(r.params.id)
  await getCharacterById(r.params.id)
  console.log(character)
})
</script>
