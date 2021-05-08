<template>
  <div class="h-3/6 w-3/6 mx-auto">
    <img src="https://wallpaperaccess.com/full/3518234.jpg" alt="" />
  </div>
  <div class="w-3/6 px-5 py-4 bg-gray-600 justify-center mx-auto">
    <div class="mb-3 pt-0 space-y-2 mx-12">
      <input
        v-model="character.name"
        type="text"
        placeholder="Character Name"
        class="px-2 py-1 placeholder-blueGray-300 text-blue-400 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
      />
      <div class="mb-3 pt-0">
        <input
          v-model="character.description"
          type="text"
          placeholder="character description"
          class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        />
      </div>
    </div>
  </div>
  <div class="float-right mx-80">
    <button
      @click="sendCharacter(character)"
      class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
    >
      Create Char
    </button>
  </div>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core'
import { sendCharacter } from '../helpers/useCharacters'

const character = {
  name: '',
  description: '',
}
</script>
