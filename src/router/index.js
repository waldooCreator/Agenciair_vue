import { createRouter, createWebHistory } from 'vue-router'

// Importar componentes principales
import Home from '../componentes/home.vue'
import HacerEnvio from '../componentes/redireccionar/hacerenvio.vue'
import Register from '../componentes/redireccionar/register.vue'
import Sesion from '@/componentes/redireccionar/sesion.vue'
import Separador1Noticias from '../componentes/redireccionar/separador1Noticias.vue'
import terminosCondiciones from '@/componentes/redireccionar/terminos-condiciones.vue'
import CotizarInfo from '@/componentes/redireccionar/cotizar-info.vue'
import Mapa from '@/componentes/redireccionar/mapa.vue'

// Importar componentes de targets
import Target1Info from '../componentes/Targets-info/target1-info.vue'
import Target2Info from '../componentes/Targets-info/target2-info.vue'
import Target3Info from '@/componentes/Targets-info/target3-info.vue'

// Import corregido: rastreo
import RastrearGuia from '@/componentes/redireccionar/rastreo-info.vue'

// Importar sección Nosotros

import NuestraHistoria from '@/componentes/nosotros/nuestra-historia.vue'


// Aliados
import Separador2 from '@/componentes/redireccionar/separador2.vue'

// Importar servicios
import Embalaje from '@/componentes/servicios/embalaje.vue'
import InteligenciaComercial from '@/componentes/servicios/inteligencia-comercial.vue'
import NuevosMercados from '@/componentes/servicios/nuevos-mercados.vue'
import Recoleccion from '@/componentes/servicios/recoleccion.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/hacer-envio', name: 'HacerEnvio', component: HacerEnvio },
  { path: '/register', name: 'Register', component: Register },
  { path: '/sesion', name: 'Sesion', component: Sesion },
  { path: '/cotizar-info', name: 'CotizarInfo', component: CotizarInfo, meta: { hideHeader: true } },
  { path: '/separador1-noticias', name: 'Separador1Noticias', component: Separador1Noticias, meta: { hideHeader: true } },
  { path: '/terminos-condiciones', name: 'TerminosCondiciones', component: terminosCondiciones, meta: { hideHeader: true } },
  { path: '/mapa', name: 'Mapa', component: Mapa, meta: { hideHeader: true } },

  // Ruta del rastreador
  { path: '/rastrear-guia', name: 'RastrearGuia', component: RastrearGuia, meta: { hideHeader: true } },

  // Sección Nosotros
  
  { path: '/nosotros/nuestra-historia', name: 'NuestraHistoria', component: NuestraHistoria, meta: { hideHeader: true } },
  
  // Targets
  { path: '/target1-info', name: 'Target1Info', component: Target1Info, meta: { hideHeader: true } },
  { path: '/target2-info', name: 'Target2Info', component: Target2Info, meta: { hideHeader: true } },
  { path: '/target3-info', name: 'Target3Info', component: Target3Info, meta: { hideHeader: true } },

  // Aliados
  { path: '/aliados', name: 'Separador2', component: Separador2, meta: { hideHeader: true } },

  // Rutas de Servicios
  { path: '/servicio-de-embalaje', name: 'Embalaje', component: Embalaje, meta: { hideHeader: true } },
  { path: '/asesoria-en-inteligencia-comercial', name: 'InteligenciaComercial', component: InteligenciaComercial, meta: { hideHeader: true } },
  { path: '/investigacion-de-nuevos-mercados', name: 'NuevosMercados', component: NuevosMercados, meta: { hideHeader: true } },
  { path: '/recoleccion-en-fabrica', name: 'Recoleccion', component: Recoleccion, meta: { hideHeader: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { left: 0, top: 0, behavior: 'smooth' }
  }
})

export default router