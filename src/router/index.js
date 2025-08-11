import { createRouter, createWebHistory } from 'vue-router'
import Home from '../componentes/home.vue'
import HacerEnvio from '../componentes/redireccionar/hacerenvio.vue'
import Register from '../componentes/redireccionar/register.vue' // ← Agrega esta línea
import Sesion from '@/componentes/redireccionar/sesion.vue'
import Separador1Noticias from '../componentes/redireccionar/separador1Noticias.vue'

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
  },
  {
    path: '/register', // ← Agrega esta ruta
    name: 'Register',
    component: Register
  },
  {
    path: '/sesion', // ← Agrega esta ruta
    name: 'Sesion',
    component: Sesion 
  },
  {
    path: '/separador1-noticias',
    name: 'Separador1Noticias',
    component: Separador1Noticias,
    meta: { hideHeader: true } // 👈 aquí
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router