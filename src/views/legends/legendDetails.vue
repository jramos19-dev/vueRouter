<template>
  <div class="containter mx-auto">
    <div class="mx-auto w-auto h-60 flex justify-center rounded-t-full">
      <img :src="character.url" :alt="character.description" />
    </div>
    <div>
      <div
        v-for="(tip, index) in tips"
        :key="index"
        class="text-gray-400 justify-center text-center"
      >
        <h2 class="text-rose-500">
          {{ tip.title }}
        </h2>
        <p>
          {{ tip.content }}
        </p>
      </div>
    </div>
  </div>

  <div
    v-if="isAuthenticated"
    class="bg-blueGray-400 grid mx-auto px-64 w-40 justify-start"
  >
    <input type="text" placeholder="name" />
    <input type="text" placeholder="description" />
    <input type="text" placeholder="imageURL" />
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 border border-blue-700 rounded"
    >
      Edit Character
    </button>
    <input type="text" placeholder="tip" />
    <input type="text" placeholder="content" />
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 border border-blue-700 rounded"
    >
      Edit Tip
    </button>
  </div>
</template>

<script setup>
import { tips, getTipsByCharId } from '../../helpers/useTips'
import { character, getCharacterById } from '../../helpers/useCharacters'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { isAuthenticated, user } from '../../helpers/useAuth'
const r = useRoute()

onMounted(async () => {
  await getTipsByCharId(r.params.id)
  await getCharacterById(r.params.id)
  console.log(character)
})
</script>
