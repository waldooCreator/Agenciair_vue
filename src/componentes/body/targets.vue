<template>
  <div class="bg-[rgb(241,234,218)] font-sans antialiased text-[15px] sm:text-base md:text-[17px] lg:text-[18px]">
    <div class="py-16 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

      <!-- TÍTULO PRINCIPAL -->
      <div class="text-center mb-12 md:mb-16 lg:mb-20 max-w-5xl mx-auto px-4">
        <h2 class="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[rgb(58,26,29)] uppercase leading-tight">
          SOMOS EXPERTOS EN LOGÍSTICA
        </h2>
        <div class="flex justify-center my-3">
          <span class="block w-24 h-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[rgb(58,26,29)] uppercase leading-tight">
          CONOCE NUESTROS PORTALES
        </h2>
      </div>

      <!-- TARJETAS -->
      <!-- Teléfono: 1 col | Tablet: 2 cols con 1ª tarjeta spanning 2 | PC: 3 cols normales -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10
               md:[&>*:first-child]:col-span-2 lg:[&>*:first-child]:col-span-1">
        <div
          v-for="item in servicesData"
          :key="item.key"
          @click="go(item.route)"
          class="relative w-full h-80 sm:h-[440px] md:h-[480px] lg:h-[520px]
                 rounded-[28px] overflow-hidden shadow-xl ring-1 ring-black/5
                 bg-gray-900 cursor-pointer transition-all duration-300
                 hover:shadow-2xl hover:-translate-y-1 group">

          <!-- Imagen -->
          <img :src="item.image" :alt="item.title" class="absolute inset-0 w-full h-full object-cover" />

          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/70 md:from-black/30 md:via-black/10 md:to-black/60"></div>

          <!-- Título -->
          <div class="absolute top-4 md:top-5 left-5 md:left-6 right-16 md:right-20">
            <h3 class="text-white font-extrabold uppercase tracking-wide text-sm sm:text-base md:text-lg drop-shadow-[0_1px_1px_rgba(0,0,0,.5)]">
              {{ item.title }}
            </h3>
          </div>

          <!-- Botón -->
          <div class="absolute bottom-5 right-5 md:right-6">
            <div class="w-11 h-11 md:w-12 md:h-12 rounded-full bg-[rgba(235,102,55,255)] flex items-center justify-center shadow-lg ring-1 ring-white/30 transition-transform duration-300 group-hover:translate-x-1">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const servicesData = [
  { key: 'courier',            title: 'ENVIOS INTERNACIONALES',           image: '/images/agg-Pica.png', route: '/target1-info' },
  { key: 'transporte',         title: 'ENVIOS NACIONALES',          image: '/images/neta.png',     route: '/target2-info' },
  { key: 'cargaInternacional', title: 'ENVIOS  A VENEZUELA', image: '/images/avion.png',    route: '/target3-info' }
]

function go(path) {
  if (path) router.push(path)
}
</script>
