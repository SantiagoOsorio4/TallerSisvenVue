import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import Clientes from '../views/Clientes';
import categories from '../views/Categories';
import PayMode from '../views/PayMode';
const routes = [
  {
    path: '/PayMode',
    name: 'PayMode',
    component: PayMode
  },
  {
    path: '/categories',
    name: 'categories',
    component: categories
  },
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
