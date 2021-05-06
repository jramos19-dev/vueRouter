import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

//import the files in the views folder so that we can import this
//file into the app later on
import About from './views/About.vue'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import Legends from './views/legends/legends.vue'
import login from './views/login.vue'
import Secret from './views/Secret.vue'
import signUp from './views/signUp.vue'
import legendDetails from './views/legends/legendDetails.vue'
import { isAuthenticated } from './helpers/useAuth.js'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/Legends', name: 'Legends', component: Legends, props: true },
  { path: '/login', name: 'login', component: login },
  {
    path: '/legends/:id',
    name: 'legendDetails',
    component: legendDetails,
    props: true,
  },
  {
    path: '/Secret',
    component: Secret,
    beforeEnter: (to, from) => {
      if (isAuthenticated.value) return true
      return '/login'
    },
  },
  { path: '/signUp', component: signUp },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
