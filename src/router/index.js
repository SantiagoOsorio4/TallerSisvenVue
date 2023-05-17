import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Clientes from '../views/Clientes';

const routes = [
  {
    path: '/clientes',
    name: 'Clientes',
    component: Clientes
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
