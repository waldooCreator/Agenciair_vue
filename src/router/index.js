import { createRouter, createWebHistory } from 'vue-router'
import Home from '../componentes/home.vue'
import HacerEnvio from '../componentes/redireccionar/hacerenvio.vue'
import Register from '../componentes/redireccionar/register.vue'
import Sesion from '@/componentes/redireccionar/sesion.vue'
import Separador1Noticias from '../componentes/redireccionar/separador1Noticias.vue'
import terminosCondiciones from '@/componentes/redireccionar/terminos-condiciones.vue'  
import CotizarInfo from '@/componentes/redireccionar/cotizar-info.vue'
import Mapa from '@/componentes/redireccionar/mapa.vue'

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
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/sesion',
    name: 'Sesion',
    component: Sesion
  },
  {
    path: '/cotizar-info',
    name: 'CotizarInfo',
    component: CotizarInfo,
    meta: { hideHeader: true }
  },
  {
    path: '/separador1-noticias',
    name: 'Separador1Noticias',
    component: Separador1Noticias,
    meta: { hideHeader: true }
  },
  {
    path: '/terminos-condiciones',
    name: 'TerminosCondiciones',
    component: terminosCondiciones,
    meta: { hideHeader: true }
  },
  {
    path: '/mapa',
    name: 'Mapa',
    component: Mapa,
    meta: { hideHeader: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 📌 Controla el scroll siempre que navegas
  scrollBehavior(to, from, savedPosition) {
    // Si hay ancla (#id), ve a ese elemento (header de noticias, etc.)
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    // Si vienes con back/forward del navegador:
    if (savedPosition) {
      return savedPosition
    }
    // Por defecto, siempre arriba
    return { left: 0, top: 0, behavior: 'smooth' }
  }
})

export default router
