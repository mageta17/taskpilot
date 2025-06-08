import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
  ],
})

export default router
