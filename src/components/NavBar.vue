<template>
  <div
    class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box"
  >
    <div class="flex-1 px-2 mx-2">
      <span class="text-lg font-bold"> Apex App </span>
    </div>
    <div class="flex-none hidden px-2 mx-2 lg:flex">
      <div class="flex items-stretch">
        <router-link to="/" class="btn btn-ghost btn-sm rounded-btn">
          Home
        </router-link>
        <router-link to="/legends" class="btn btn-ghost btn-sm rounded-btn">
          legends
        </router-link>
        <router-link to="/About" class="btn btn-ghost btn-sm rounded-btn">
          About
        </router-link>
        <div v-if="!isAuthenticated">
          <router-link
            to="/login"
            class="btn btn-ghost btn-sm rounded-btn hover:text-content-100"
          >
            Login
          </router-link>
          <router-link
            to="/signUp"
            class="btn btn-ghost btn-sm rounded-btn hover:text-content-100"
          >
            SignUp
          </router-link>
        </div>

        <div v-else>
          <router-link to="/Secret" class="btn btn-ghost btn-sm rounded-btn">
            Secret
          </router-link>
          <button class="btn btn-error btn-sm rounded-btn" @click="logout">
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
import { isAuthenticated, signOut } from "../helpers/useAuth"
const router = useRouter()
const logout = async () => {
  await signOut()
  router.push("/")
}
</script>

<style>
.router-link-active {
  @apply btn-success;
}
</style>
