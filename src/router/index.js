import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'

//clientes
import EditarCustomer from '../components/clientes/EditarCustomer.vue';
import NewComuna from '../components/clientes/NewCustomer.vue';
import Clientes from '../views/Clientes';

//categories
import categories from '../views/Categories';
import PayMode from '../views/PayMode';
import Products from '../views/Products';

const routes = [
  {
    path: '/Products',
    name: 'Products',
    component: Products
  },
  //
  {
    path: '/PayMode',
    name: 'PayMode',
    component: PayMode
  },
  //
  {
    path: '/categories',
    name: 'categories',
    component: categories
  },
  //Clientes
  {
    path: '/clientes',
    name: 'Clientes',
    component: Clientes
  },
  {
    path: '/editar-comuna/:id',
    name: 'EditarCustomer',
    component: Clientes
  },
  {
    path: '/add-customer/',
    name: 'NewCustomer',
    component: Clientes
  },

  //
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
