import { createRouter, createWebHistory } from 'vue-router'

// Importar componentes principales
import Home from '../componentes/home.vue'
import HacerEnvio from '../componentes/redireccionar/hacerenvio.vue'
import Register from '../componentes/redireccionar/register.vue'
import Sesion from '@/componentes/redireccionar/sesion.vue'
import TodasLasNoticias from '../componentes/redireccionar/todaslasnoticias.vue'
import TerminosCondiciones from '@/componentes/redireccionar/terminos-condiciones.vue'
import CotizarInfo from '@/componentes/redireccionar/cotizar-info.vue'
import Mapa from '@/componentes/redireccionar/mapa.vue'


// Noticias
import Noticia1 from '@/componentes/redireccionar/noticia1.vue'
import Noticia2 from '@/componentes/redireccionar/noticia2.vue'

// Targets
import Target1Info from '../componentes/Targets-info/target1-info.vue'
import Target2Info from '../componentes/Targets-info/target2-info.vue'
import Target3Info from '@/componentes/Targets-info/target3-info.vue'
import Target4Info from '@/componentes/Targets-info/target4-info.vue'

// Rastreo
import RastrearGuia from '@/componentes/redireccionar/rastreo-info.vue'

// Nosotros
import NuestraHistoria from '@/componentes/nosotros/nuestra-historia.vue'

// Aliados


// Servicios
import Embalaje from '@/componentes/servicios/embalaje.vue'
import InteligenciaComercial from '@/componentes/servicios/inteligencia-comercial.vue'
import NuevosMercados from '@/componentes/servicios/nuevos-mercados.vue'
import Recoleccion from '@/componentes/servicios/recoleccion.vue'

// Mercancia Prohibida
import MercanciaProhibida from '@/componentes/redireccionar/mercanciaprohibida.vue'
import PoliticaDePrivacidad from '@/componentes/redireccionar/politicadeprivacidad.vue'
import CartaDeResponsabilidad from '@/componentes/redireccionar/cartaderesponsabilidad.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/hacer-envio', name: 'HacerEnvio', component: HacerEnvio, meta: { hideHeader: true, hideBack: false } },
  { path: '/register', name: 'Register', component: Register },
  { path: '/sesion', name: 'Sesion', component: Sesion },
  { path: '/cotizar-info', name: 'CotizarInfo', component: CotizarInfo, meta: { hideHeader: true } },
  { path: '/todaslasnoticias', name: 'TodasLasNoticias', component: TodasLasNoticias, meta: { hideHeader: true } },
  { path: '/terminos-condiciones', name: 'TerminosCondiciones', component: TerminosCondiciones, meta: { hideHeader: true } },
  { path: '/mapa', name: 'Mapa', component: Mapa, meta: { hideHeader: true } },
  { path: '/politica-de-privacidad', name: 'PoliticaDePrivacidad', component: PoliticaDePrivacidad, meta: { hideHeader: true } }, 

  // Noticias (rutas reales)
  { path: '/redireccionar/noticia1', name: 'Noticia1', component: Noticia1, meta: { hideHeader: true } },
  { path: '/redireccionar/noticia2', name: 'Noticia2', component: Noticia2, meta: { hideHeader: true } },

  // Redirecciones compatibles con /noticia/1 y /noticia/2
  { path: '/noticia/1', redirect: { name: 'Noticia1' } },
  { path: '/noticia/2', redirect: { name: 'Noticia2' } },

  // Ruta del rastreador
  { path: '/rastrear-guia', name: 'RastrearGuia', component: RastrearGuia, meta: { hideHeader: true } },

  // Sección Nosotros
  { path: '/nosotros/nuestra-historia', name: 'NuestraHistoria', component: NuestraHistoria, meta: { hideHeader: true } },

  // Targets
  { path: '/target1-info', name: 'Target1Info', component: Target1Info, meta: { hideHeader: true } },
  { path: '/target2-info', name: 'Target2Info', component: Target2Info, meta: { hideHeader: true } },
  { path: '/target3-info', name: 'Target3Info', component: Target3Info, meta: { hideHeader: true } },
  { path: '/target4-info', name: 'Target4Info', component: Target4Info, meta: { hideHeader: true } },

  // Aliados
  

  // Servicios
  { path: '/servicio-de-embalaje', name: 'Embalaje', component: Embalaje, meta: { hideHeader: true } },
  { path: '/asesoria-en-inteligencia-comercial', name: 'InteligenciaComercial', component: InteligenciaComercial, meta: { hideHeader: true } },
  { path: '/investigacion-de-nuevos-mercados', name: 'NuevosMercados', component: NuevosMercados, meta: { hideHeader: true } },
  { path: '/recoleccion-en-fabrica', name: 'Recoleccion', component: Recoleccion, meta: { hideHeader: true } },

  // Mercancia Prohibida
  { path: '/mercancia-prohibida', name: 'MercanciaProhibida', component: MercanciaProhibida, meta: { hideHeader: true } },
  { path: '/carta-de-responsabilidad', name: 'CartaDeResponsabilidad', component: CartaDeResponsabilidad, meta: { hideHeader: true } },

  // 404 -> Home (opcional)
  { path: '/:pathMatch(.*)*', redirect: { name: 'Home' } }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    if (savedPosition) return savedPosition
    return { left: 0, top: 0, behavior: 'smooth' }
  }
})

export default router