import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import Login from './components/login.vue'
import Products from './products/products.vue'
import ProductsDetails from './products/productsDetails.vue'


Vue.use(Router)

export default new Router({

    mode: 'history', // permet d'enlever le # de l'url
    routes: [
    { 
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
        path: '/products/:id',
        name: 'ProductsDetails',
        component: ProductsDetails
      },


    ]
})