import { createRouter,createWebHashHistory, createWebHistory } from 'vue-router'

//import the files in the views folder so that we can import this 
//file into the app later on
import About from './views/About.vue'
import Home from './views/Home.vue'
import NotFound from './views/404.vue'
import Legends from './views/legends.vue'
import login from './views/login.vue'



const routes = [
    
    { path: '/', component: Home },
    { path: '/about', component: About },
    {path: '/:pathMatch(.*)*', component: NotFound},
    {path: '/Legends', component:Legends},
    {path: '/login', component:login},

]


export const router = createRouter({
    history: createWebHistory(),
    routes
})