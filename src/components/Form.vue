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
        <p class="capitalize text-red-500 text-sm text-left">
          {{ nameError }}
        </p>
        <label for="username" class="self-start text-xs font-semibold"
          >Email</label
        >
        {{ email }}
        <input
          id="username"
          type="text"
          class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-coolGray-900"
          v-model="email"
        />
        <p class="capitalize text-red-500 text-sm text-left">
          {{ errorEmail }}
        </p>

        <label for="password" class="self-start mt-3 text-xs font-semibold"
          >Password</label
        >
        <input
          id="password"
          type="password"
          class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-coolGray-900"
          v-model="password"
        />
        <p class="capitalize text-red-500 text-sm text-left">
          {{ errorPassword }}
        </p>
        <label
          for="passwordConfirmation"
          class="self-start mt-3 text-xs font-semibold"
          >Confirm Password</label
        >
        <input
          v-if="form == 'signUp'"
          id="passwordConfirmation"
          type="password"
          class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-coolGray-900"
          v-model="passwordConfirmation"
        />
        <p class="capitalize text-red-500 text-sm text-left">
          {{ errorPasswordConfirmation }}
        </p>

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
import { defineProps } from "vue"
import { useRouter } from "vue-router"
import { useField } from "vee-validate"
import { signIn, signUp, googlePopup, auth } from "../helpers/useAuth"
import { isError, msg } from "../helpers/useError"
import * as yup from "yup"

const router = useRouter()
const login = async () => {
  try {
    if (emailMeta.valid && passwordMeta.valid) {
      await signIn(email.value, password.value)
      isError.value = false
      router.push("/")
    } else {
      isError.value = true
      msg.value = "invalid Values"
    }
  } catch (error) {
    isError.value = true
    msg.value = "UserName or Password is incorrect"
    console.log(error)
  }
}
const register = async () => {
  try {
    if (
      nameMeta.valid &&
      emailMeta.valid &&
      passwordMeta.valid &&
      passwordConfirmationMeta.valid
    ) {
      await signUp(email.value, password.value)
      const user = auth().currentUser

      await user.updateProfile({ displayName: name.value })
      isError.value = false
      router.push("/")
    } else {
      isError.value = true
      msg.value = "invalid Values"
    }
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

const { value: email, errorMessage: errorEmail, meta: emailMeta } = useField(
  "email",
  yup.string().required().email()
)
const {
  value: password,
  errorMessage: errorPassword,
  meta: passwordMeta,
} = useField("password", yup.string().required().min(8))

const passwordConfirmationFn = () => {
  if (password.value === passwordConfirmation.value) {
    return true
  }
  return "password doesnt match"
}

const {
  value: passwordConfirmation,
  errorMessage: errorPasswordConfirmation,
  meta: passwordConfirmationMeta,
} = useField("passwordConfirmation", passwordConfirmationFn)

const { value: name, errorMessage: nameError, meta: nameMeta } = useField(
  "name",
  yup.string().required()
)

defineProps({
  form: {
    type: String,
    default: "Login",
  },
})
</script>
