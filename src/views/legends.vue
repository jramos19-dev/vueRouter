<template>
  <div class="border-green-700 bg-gray-300 px-4 py-2 mx-2 my-2 rounded-lg">
    <h1 class="text-center text-3xl font-bold font-serif">Legends</h1>
  </div>

  <div>
    <span class="bg-red-900 text-purple-700">
      <ul class="text-center">
        <li class="hover:bg-gray-300 hover:text-red-900 -mx-1">Lifeline</li>
        <li class="hover:bg-gray-300 hover:text-red-900">Octane</li>
        <li class="hover:bg-gray-300 hover:text-red-900">BloodHound</li>
        <li class="hover:bg-gray-300 hover:text-red-900">Mirage</li>
        <li class="hover:bg-gray-300 hover:text-red-900">PathFinder</li>
        <li class="hover:bg-gray-300 hover:text-red-900">Rampart</li>
        <li class="hover:bg-gray-300 hover:text-red-900">Gibraltar</li>
      </ul>
    </span>
  </div>

  <div>
    <img
      src="../assets/lifeLine.jpg"
      alt="Lifeline"
      class="w-3/6 h-1/3 block mx-auto"
    />
  </div>
</template>

<script setup>
const showLifeLine = () => console.log("hello there")
</script>
