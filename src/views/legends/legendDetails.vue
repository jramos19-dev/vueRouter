<template>
  <div class="container mx-auto">
    <h1 class="text-gray-300 text-4xl text-center">Legends Details Page</h1>
    <div class="text-gray-300 text-center text-2xl">
      <h2>The details page for legend {{ $route.params.id }}</h2>
    </div>
  </div>
  <div class="bg-yellow-400 w-64 h-64 mx-auto"></div>

  <div v-for="(tip, index) in tips" :key="index" :tip="tip" class="text-center">
    <h3>Tip {{ tip.title }}</h3>
    <p class="px-80 text-2xl text-gray-300">
      {{ tip.content }}
    </p>
  </div>
</template>

<script setup>
const id = ''

import { defineProps, onMounted } from 'vue'
import { tips, getAllTips, getTipsById } from '../../helpers/useTips'

onMounted(async () => await getTipsById())
</script>
