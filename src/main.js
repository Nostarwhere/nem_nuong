import { createApp } from 'vue'
// import App from './App.vue'
import route from '@/router/route'
import MainLayout from '@/components/templates/MainLayout.vue'

const app = createApp(MainLayout).use(route)
app.mount('#app')




