import { createRouter, createWebHistory } from 'vue-router'

import HomeComponent from '@/components/HomeComponent.vue'
import AboutUs from '@/components/AboutUs.vue'
import Contact from '@/components/Contact.vue'
import UserCreate from '@/components/users/UserCreate.vue'
import listProduct from '@/components/products/listProduct.vue'
import createProduct from '@/components/products/createProduct.vue'
import productHomepageVue from './components/products/productHomepage.vue'
import CartComponent from "./components/CartComponent.vue";
// import LearningComponent from '@/components/LearningComponent.vue'

const routes = [
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/aboutUs',
        component: AboutUs
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/user/create',
        component: UserCreate
    },
    {
        path: '/products/list',
        component: listProduct
    },
    {
        path: '/products/create',
        component: createProduct
    },
    {
        path: '/products',
        component: productHomepageVue
    },
    {
        path: '/cart',
        component: CartComponent
    },
    {
        path: '/:catchAll(.*)',
        component: Error
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
