<template>
  <div class="min-h-screen" style="background: linear-gradient(135deg, #f1eada 0%, #e8dcc6 100%);">
    <!-- HERO (dos columnas) -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-16 pb-6 md:pb-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div class="text-center md:text-left">
          <div class="inline-flex items-center justify-center md:justify-start px-6 py-2 mb-6 rounded-full"
               style="background: rgba(248, 112, 63, 0.1);">
            <div class="w-3 h-3 rounded-full mr-2" style="background: rgb(248, 112, 63);"></div>
            <span class="text-sm font-semibold" style="color: rgb(58, 29, 34);">
              INVESTIGACIÓN DE NUEVOS MERCADOS
            </span>
          </div>

          <h1 class="text-5xl md:text-6xl font-black mb-4 leading-tight" style="color: rgb(248, 112, 63);">
            Encuentra dónde vender mejor
          </h1>

          <p class="text-base md:text-lg max-w-2xl md:max-w-none mx-auto md:mx-0" style="color: rgb(58, 29, 34);">
            En <b>Agencia Ir Mercancía y Mensajería</b> investigamos países y clientes para que sepas
            <b>si tu producto tiene espacio</b>, cuánto podría venderse y qué pasos seguir.
            Todo con un lenguaje directo y recomendaciones accionables.
          </p>

          <div class="flex flex-wrap gap-2 mt-6">
            <span class="text-xs font-semibold px-3 py-1 rounded-full"
                  style="background:#fff; color: rgb(58,29,34); box-shadow:0 6px 16px rgba(96,58,38,.08);">
              Clientes ideales
            </span>
            <span class="text-xs font-semibold px-3 py-1 rounded-full"
                  style="background:#fff; color: rgb(58,29,34); box-shadow:0 6px 16px rgba(96,58,38,.08);">
              Competencia
            </span>
            <span class="text-xs font-semibold px-3 py-1 rounded-full"
                  style="background:#fff; color: rgb(58,29,34); box-shadow:0 6px 16px rgba(96,58,38,.08);">
              Costos y tiempos
            </span>
          </div>
        </div>

        <div class="order-first md:order-last">
          <div class="bg-white rounded-3xl overflow-hidden" style="box-shadow: 0 25px 50px rgba(96, 58, 38, 0.15);">
            <div class="relative h-64 sm:h-80 md:h-[420px]"
                 style="background: linear-gradient(135deg, #603a26 0%, #4a2f1e 100%);">
              <img
                :src="mainImage"
                alt="Investigación de nuevos mercados"
                class="w-full h-full object-cover"
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- VALOR -->
    <div id="lideres-section" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold mb-4" style="color: rgb(58, 29, 34);">
          Lo que hacemos por ti
        </h2>
        <p class="text-lg max-w-3xl mx-auto" style="color: rgba(58, 29, 34, 0.8);">
          Estudiamos opciones, comparamos países y te damos un plan claro para empezar con pie derecho.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(f, i) in features" :key="i"
             class="rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2"
             style="background:#ffffff; box-shadow:0 10px 25px rgba(96,58,38,.1);"
             @mouseenter="$event.currentTarget.style.boxShadow='0 20px 40px rgba(96,58,38,.15)'"
             @mouseleave="$event.currentTarget.style.boxShadow='0 10px 25px rgba(96,58,38,.1)'">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 text-white rounded-xl flex items-center justify-center font-bold text-xl mr-4"
                 style="background: rgb(248, 112, 63);">
              {{ f.number }}
            </div>
            <div class="text-3xl">{{ f.icon }}</div>
          </div>
          <h3 class="text-xl font-bold mb-3" style="color: rgb(58, 29, 34);">{{ f.title }}</h3>
          <p class="leading-relaxed" style="color: rgba(58,29,34,.7);">
            {{ f.subtitle }}
          </p>
        </div>
      </div>
    </div>

    <!-- CÓMO LO HACEMOS (PRESENCIAL) -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div class="bg-white rounded-3xl p-8 md:p-12" style="box-shadow: 0 25px 50px rgba(96,58,38,.15);">
        <h3 class="text-2xl font-bold mb-4" style="color: rgb(248, 112, 63);">Cómo lo hacemos</h3>

        <p class="text-lg leading-relaxed mb-4" style="color: rgb(58,29,34);">
          Realizamos una <b>charla presencial en tu empresa</b> con las áreas clave. En 90–120 minutos
          revisamos tu producto, objetivos y dudas, y compartimos <b>pautas y recomendaciones</b>
          para preparar <b>tu primer envio</b> con seguridad.
        </p>
        <p class="leading-relaxed mb-8" style="color: rgba(58,29,34,.85);">
          Durante la sesión cubrimos: a quién vender y cómo acercarnos, qué observar de la competencia,
          costos y tiempos estimados, requisitos básicos y <b>errores comunes que conviene evitar</b>.
          Terminamos con un <b>checklist práctico</b> y un orden sugerido de acciones para las próximas semanas.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(b, i) in bullets" :key="i" class="flex items-start gap-3">
            <div class="w-8 h-8 flex items-center justify-center rounded-xl"
                 style="background: rgba(248,112,63,.12); color: rgb(248,112,63);">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="b.path"/>
              </svg>
            </div>
            <div>
              <div class="font-semibold" style="color: rgb(58,29,34);">{{ b.title }}</div>
              <div class="text-sm" style="color: rgba(58,29,34,.75);">{{ b.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- PAQUETES -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold mb-4" style="color: rgb(58, 29, 34);">
          Opciones de investigación
        </h2>
        <p class="text-lg max-w-2xl mx-auto" style="color: rgba(58,29,34,.8);">
          Elige la que mejor se ajuste a tu momento.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(s, i) in services" :key="i"
             class="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
             style="box-shadow:0 10px 25px rgba(96,58,38,.1);"
             @mouseenter="$event.currentTarget.style.boxShadow='0 20px 40px rgba(96,58,38,.15)'"
             @mouseleave="$event.currentTarget.style.boxShadow='0 10px 25px rgba(96,58,38,.1)'">
          <div class="relative h-60" style="background: linear-gradient(135deg, #603a26 0%, #4a2f1e 100%);">
            <img :src="s.image" :alt="s.title" class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold mb-3" style="color: rgb(58,29,34);">{{ s.title }}</h3>
            <p class="leading-relaxed mb-4" style="color: rgba(58,29,34,.7);">{{ s.description }}</p>
            <button
              @click="verMasDetalles(s)"
              class="font-semibold flex items-center transition-colors duration-300"
              style="color: rgb(248, 112, 63);"
              @mouseenter="$event.target.style.color='rgb(240,100,50)'"
              @mouseleave="$event.target.style.color='rgb(248,112,63)'"
            >
              Ver más detalles
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div class="bg-white rounded-3xl p-10 md:p-12 text-center"
           style="box-shadow: 0 25px 50px rgba(96,58,38,.15);">
        <div class="w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center"
             style="background: rgb(248, 112, 63);">
          <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h1.28a2 2 0 011.789 1.106l1.12 2.24a2 2 0 01-.45 2.309l-.87.87a16 16 0 006.06 6.06l.87-.87a2 2 0 012.309-.45l2.24 1.12A2 2 0 0121 19.72V21a2 2 0 01-2 2h-1a18 18 0 01-18-18V5z"/>
          </svg>
        </div>

        <h3 class="text-3xl font-extrabold mb-2" style="color: rgb(58, 29, 34);">
          Conversemos sobre tu producto
        </h3>
        <p class="max-w-xl mx-auto mb-8 text-base md:text-lg" style="color: rgba(58,29,34,.8);">
          Te mostraremos con claridad dónde tienes mejores posibilidades y cómo empezar.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a :href="`tel:${telefonoLink}`"
             class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white shadow-md transition-transform"
             style="background: rgb(248, 112, 63); box-shadow: 0 10px 20px rgba(241,88,42,0.2);"
             @mouseenter="$event.currentTarget.style.transform='translateY(-2px)'"
             @mouseleave="$event.currentTarget.style.transform='translateY(0)'">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h1.28a2 2 0 011.789 1.106l1.12 2.24a2 2 0 01-.45 2.309l-.87.87a16 16 0 006.06 6.06l.87-.87a2 2 0 012.309-.45l2.24 1.12A2 2 0 0121 19.72V21a2 2 0 01-2 2h-1a18 18 0 01-18-18V5z"/>
            </svg>
            {{ telefonoTexto }}
          </a>

          <a :href="whatsappHref" target="_blank" rel="noopener"
             class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold"
             style="color: rgb(248, 112, 63); background: rgba(248,112,63,.08); border:1px solid rgba(248,112,63,.3);"
             @mouseenter="$event.currentTarget.style.background='rgba(248,112,63,.12)'"
             @mouseleave="$event.currentTarget.style.background='rgba(248,112,63,.08)'">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.62-6.003C.122 5.281 5.403 0 12.057 0c3.18 0 6.167 1.24 8.413 3.488A11.86 11.86 0 0124 12.053c-.003 6.653-5.284 11.94-11.938 11.94a11.9 11.9 0 01-6.013-1.616L.057 24zm6.597-3.807c1.74 1.037 3.276 1.662 5.392 1.662 5.448 0 9.886-4.434 9.889-9.877.003-5.462-4.415-9.89-9.881-9.893-5.45 0-9.887 4.434-9.89 9.878 0 2.225.726 3.891 1.947 5.605l-.997 3.648 3.54-.023zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.272-.099-.47-.148-.669.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.612-.916-2.207-.241-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.148.198 2.096 3.2 5.084 4.487.711.306 1.265.489 1.697.626.713.227 1.362.195 1.875.118.572-.085 1.758-.718 2.006-1.41.248-.694.248-1.289.173-1.414z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

onMounted(() => {
  setTimeout(() => {
    const el = document.getElementById('lideres-section')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, 1200)
})

const mainImage = ref('/public/images/recoleccion.png')

const features = ref([
  { number: '1', title: 'Conocer a tus clientes', subtitle: 'Quiénes son, qué buscan y cuánto estarían dispuestos a pagar.', icon: '🧭' },
  { number: '2', title: 'Mirar la competencia',  subtitle: 'Qué ofrecen otros, cómo venden y qué te hace diferente.',          icon: '🧩' },
  { number: '3', title: 'Calcular lo básico',     subtitle: 'Costos y tiempos estimados para entrar sin sorpresas.',          icon: '⏱️' }
])

// Bullets adaptados a la charla presencial
const bullets = ref([
  { title: 'Sesión presencial en tu empresa', text: 'Reunimos a compras, logística, producción y comercial para alinear criterios y resolver dudas en el momento.', path: 'M10 3h4l7 7v7a4 4 0 01-4 4H7a4 4 0 01-4-4V10l7-7z' },
  { title: 'Guía para el primer pedido',      text: 'Checklist de requisitos, responsabilidades y orden sugerido de tareas.',                                    path: 'M3 7h18M5 12h14M7 17h10' },
  { title: 'Recomendaciones y próximos pasos',text: 'Acciones para las próximas semanas y señales de control para avanzar con confianza.',                         path: 'M9 12l2 2 4-4M7 20h10a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z' }
])

const IMAGE_URL = '/public/images/recoleccion.png'
const services = ref([
  { title: 'Exploración rápida',  description: 'Vista general de varios países y recomendación de los 2 mejores.', image: IMAGE_URL },
  { title: 'Estudio a detalle',   description: 'Un país elegido: clientes, precios, canales y requisitos básicos.', image: IMAGE_URL },
  { title: 'Opinión del mercado', description: 'Hablamos con posibles compradores para medir interés real.',       image: IMAGE_URL },
  { title: 'Plan de 90 días',     description: 'Calendario simple con tareas, responsables y metas iniciales.',    image: IMAGE_URL }
])

// Contacto
const telefonoTexto = '+57 300 123 4567'
const telefonoLink  = '+573001234567'
const whatsappNumber = '573001234567'
const whatsappHref = computed(() => {
  const msg = encodeURIComponent('Hola, quiero coordinar la charla presencial para mi primer pedido.')
  return `https://wa.me/${whatsappNumber}?text=${msg}`
})

function verMasDetalles(s) {
  console.log('Ver detalles de:', s.title)
}
</script>

<style scoped>
.fade-in { animation: fadeIn 0.6s ease-in; }
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
