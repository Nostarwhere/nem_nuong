import { createRouter, createWebHistory } from 'vue-router'

import MainHomepage from '@/components/pages/MainHomepage.vue'


const routes = [
    {
        path: '/',
        component: MainHomepage
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
