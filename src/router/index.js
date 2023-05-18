import { createRouter, createWebHashHistory } from 'vue-router';


//clientes
import EditarClientes from '../components/Clientes/EditarClientes.vue';
import NewClientes from '../components/Clientes/NewClientes.vue';
import Clientes from '../views/Clientes';

//PayMode
import EditarPayMode from '../components/PayMode/EditarPayMode.vue';
import NewPayMode from '../components/PayMode/NewPayMode.vue';
import PayMode from '../views/PayMode';

//Products
import EditarProducts from '../components/Products/EditarProducts.vue';
import NewProducts from '../components/Products/NewProducts.vue';
import Products from '../views/Products';

//Categories
import EditarCategories from '../components/Categories/EditarCategories.vue';
import NewCategories from '../components/Categories/NewCategories.vue';
import categories from '../views/Categories';

//
import HomeView from '../views/HomeView.vue';

const routes = [
  // Products
  {
    path: '/Products',
    name: 'Products',
    component: Products
  },
  {
    path: '/editar-Products/:id',
    name: 'EditarProducts>',
    component: EditarProducts
  },
  {
    path: '/add-Products/',
    name: 'NewProducts',
    component: NewProducts
  },
  
  //PayMode
  {
    path: '/PayMode',
    name: 'PayMode',
    component: PayMode
  },
  {
    path: '/editar-PayMode/:id',
    name: 'EditarPayMode>',
    component: EditarPayMode
  },
  {
    path: '/add-PayMode/',
    name: 'NewPayMode',
    component: NewPayMode
  },

  //Categories
  {
    path: '/categories',
    name: 'categories',
    component: categories
  },
  {
    path: '/editar-Categories/:id',
    name: 'EditarCategories',
    component: EditarCategories
  },
  {
    path: '/add-Categories/',
    name: 'NewCategories',
    component: NewCategories
  },

  //Clientes
  {
    path: '/clientes',
    name: 'Clientes',
    component: Clientes
  },
  {
    path: '/editar-Clientes/:id',
    name: 'EditarClientes',
    component: EditarClientes
  },
  {
    path: '/add-Clientes/',
    name: 'NewClientes',
    component: NewClientes
  },

  //home
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
