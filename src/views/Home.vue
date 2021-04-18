<template>
  <div class="border-green-400 bg-gray-300 px-4 py-2 mx-2 my-2 rounded-lg">
    <h1 class="text-gray-800 text-center text-4xl">Home Page</h1>
  </div>

  <div>
    <p class="text-center pt-12 text-red-800 text-4xl mb-0">
      Welcome {{ user?.displayName || "New User" }} to the apex arena <br />
      Choose your legend and their abilities<br />
    </p>

    <img src="../assets/apex_1.jpg" alt="apex pic" class="Apex_img" />
  </div>

  <footer class="align-bottom text-center left-0 bottom-0">
    Facebook:
    <img src="../assets/Facebook.png" alt="facebookpage" class="img_logo" />
    Twitter:
    <img src="../assets/tweeter.png" alt="tweeterlogo" class="img_logo" />
  </footer>
</template>

<style scoped>
.Apex_img {
  @apply mx-auto my-auto block w-6/12;
}
</style>

<style scoped>
.foot {
  @apply fixed left-0 bottom-0 min-w-full bg-red-900 text-white text-center;
}
</style>

<style scoped>
.img_logo {
  @apply max-w-xs h-10 inline-block;
}
</style>

<script setup>
import { user } from "../helpers/useAuth"
</script>
