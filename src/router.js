import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router"

//import the files in the views folder so that we can import this
//file into the app later on
import About from "./views/About.vue"
import Home from "./views/Home.vue"
import NotFound from "./views/NotFound.vue"
import Legends from "./views/legends.vue"
import login from "./views/login.vue"
import Secret from "./views/Secret.vue"
import signUp from "./views/signUp.vue"
import { isAuthenticated } from "./helpers/useAuth.js"

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/:pathMatch(.*)*", component: NotFound },
  { path: "/Legends", component: Legends },
  { path: "/login", component: login },
  {
    path: "/Secret",
    component: Secret,
    beforeEnter: (to, from) => {
      if (isAuthenticated.value) return true
      return "/login"
    },
  },
  { path: "/signUp", component: signUp },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
