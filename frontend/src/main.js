import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

const client = axios.create({
    baseURL: "/api/v1",
})

createApp(App).use(VueAxios, client).mount('#app')
