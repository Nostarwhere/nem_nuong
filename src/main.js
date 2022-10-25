import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import unoverlay from 'unoverlay-vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
// import VueAxios from 'vue-axios'
// import axios from 'axios'
// import vuex from 'vuex'

const app = createApp(App).use(router)
app.mount('#app')
app.use(BootstrapVue3)
app.use(unoverlay)
// app.use(VueAxios, { $request: axios })


