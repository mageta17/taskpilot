import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import login from '../views/auth/login.vue'
import register from '../views/auth/register.vue'
import dashboard from '../views/auth/dashboard.vue'

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
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
    },
  ],
})

export default router
