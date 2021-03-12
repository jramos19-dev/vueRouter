<template>
  <section class="bg-neutral max-w-2xl mx-auto rounded text-white">
    <div class="container flex items-center justify-center text-center">
      <form
        @submit.prevent
        class="flex flex-col w-full max-w-lg p-12 rounded shadow-lg text-white ng-untouched ng-pristine ng-valid"
      >
        <label
          v-if="form === 'signUp'"
          for="username"
          class="self-start text-xs font-semibold"
          >Name</label
        >
        <input
          v-if="form === 'signUp'"
          id="name"
          type="text"
          class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-coolGray-900"
          v-model="name"
        />
        <label for="username" class="self-start text-xs font-semibold"
          >Email</label
        >
        <input
          id="username"
          type="text"
          class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-coolGray-900"
          v-model="email"
        />
        <label for="password" class="self-start mt-3 text-xs font-semibold"
          >Password</label
        >
        <input
          id="password"
          type="password"
          class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-coolGray-900"
          v-model="password"
        />
        <button
          v-if="form == 'login'"
          @click="login"
          class="btn btn-primary mt-4"
        >
          Login
        </button>
        <button v-else @click="register" class="btn btn-primary mt-4">
          Sign Up
        </button>
        <button @click="google" class="btn bg-error mt-4">
          <img class="w-8" src="../assets/google.svg" alt="google logo" />
          Google
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, defineProps } from "vue"
import { useRouter } from "vue-router"
import { signIn, signUp, googlePopup, auth } from "../helpers/useAuth"
import { isError, msg } from "../helpers/useError"

const router = useRouter()
const login = async () => {
  try {
    await signIn(email.value, password.value)
    isError.value = false
    router.push("/")
  } catch (error) {
    isError.value = true
    msg.value = "UserName or Password is incorrect"
    console.log(error)
  }
}
const register = async () => {
  try {
    await signUp(email.value, password.value)
    const user = auth().currentUser

    await user.updateProfile({ displayName: name.value })
    isError.value = false
    router.push("/")
  } catch (error) {
    isError.value = true
    msg.value = "There was an Authentication Error"
    console.log(error)
  }
}
const google = async () => {
  try {
    await googlePopup()
    isError.value = false
    router.push("/")
  } catch (error) {
    isError.value = true
    msg.value = "There was an Authentication Error"
    console.log(error)
  }
}

const email = ref("")
const password = ref("")
const name = ref("")

defineProps({
  form: {
    type: String,
    default: "Login",
  },
})
</script>
