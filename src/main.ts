import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'primeicons/primeicons.css'
import { createPinia } from 'pinia'
import Aura from "@primevue/themes/aura"
import PrimeVue from 'primevue/config'


const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
    }
}) // Habilita el efecto de "ripple" en PrimeVue

app.mount('#app')
