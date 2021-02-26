<template >
<div class="border-green-700 bg-gray-300 px-4 py-2 mx-2 my-2 rounded-lg">
  
    <h1 class= "text-center text-gray-800 text-4xl">
        Login Page
    </h1>

</div>


<div class="mt-4 pb-12 ">

  

    <span class="mx-auto w-3/6">
        
    <input type="text"  placeholder="Username" v-model="username" class="focus:ring-2 focus:ring-blue-500 border-2 border-black"> <br>
    <input type="password" placeholder="Password" v-model="password" class="focus:ring-2 focus:ring-blue-500 border-2 border-black"> <br>

     <button  class="bg-blue-500 hover:bg-blue-700 text-white font-font-bold py-2 px-4 rounded border-4">Sign In</button>

    <button @click="doit" class="bg-blue-500 hover:bg-blue-700 text-white font-font-bold py-2 px-4 rounded border-2">Sign Up</button>
    </span>

  
</div>

<div class="text-white">
    <p>Username: {{username}}</p>
    <p>Password: {{password}}</p>
</div>

</template>

<script setup>
import {ref} from 'vue'
const username =  ref('')
const password = ref('')

const doit = () => console.log('Hi')
</script>