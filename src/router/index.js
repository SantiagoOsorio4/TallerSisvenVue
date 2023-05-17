import { createRouter, createWebHashHistory } from 'vue-router';


//clientes
import EditarCustomer from '../components/clientes/EditarCustomer.vue';
import NewCustomer from '../components/clientes/NewCustomer.vue';
import Clientes from '../views/Clientes';

//PayMode
import EditarPayMode from '../components/PayMode/EditarPayMode.vue';
import NewPayMode from '../components/PayMode/NewPayMode.vue';
import PayMode from '../views/PayMode';

//Products
import EditarProducts from '../components/Products/EditarProducts.vue';
import NewProducts from '../components/Products/NewProducts.vue';
import Products from '../views/Products';

//
import categories from '../views/Categories';
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

  //Clientes
  {
    path: '/clientes',
    name: 'Clientes',
    component: Clientes
  },
  {
    path: '/editar-customer/:id',
    name: 'EditarCustomer',
    component: EditarCustomer
  },
  {
    path: '/add-customer/',
    name: 'NewCustomer',
    component: NewCustomer
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
