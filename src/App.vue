<template>

<nav class="bg-indigo-900 text-gray-100 py-4 px-2">
  <router-link to="/" class="nav_item" >Home</router-link> |
  <router-link to="/about" class="nav_item">About</router-link> |
  <router-link to="/legends" class="nav_item">Legends</router-link> |
  <router-link to="/login" class="nav_item">login</router-link>
</nav>
<div>  
  <router-view/>
</div>


</template>

<style scoped>
.nav_item {
  @apply py-2 px-1 rounded-lg transition hover:text-indigo-900 hover:bg-gray-100
}


</style>

