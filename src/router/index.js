import { createRouter, createWebHistory } from 'vue-router'
import Home from '../componentes/home.vue'  // ← Cambiar de './componentes/home.vue' a '../componentes/Home.vue'
import HacerEnvio from '../componentes/redireccionar/hacerenvio.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hacer-envio',
    name: 'HacerEnvio',
    component: HacerEnvio
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router