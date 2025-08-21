// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

// Tema PrimeVue - asegúrate de tener la versión correcta instalada
import '@primeuix/themes/lara'
import 'primeicons/primeicons.css'

// Tus estilos globales
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  // Configuración adicional si es necesaria
  ripple: true,
})

app.mount('#app')