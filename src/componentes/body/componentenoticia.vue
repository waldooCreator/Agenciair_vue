<template>
  <div class="w-full bg-[rgba(235,102,55,255)] rounded-2xl overflow-hidden shadow-lg font-sans antialiased text-[15px] sm:text-base md:text-[17px] lg:text-[18px]">
    <div class="flex items-center min-h-[200px] p-8 lg:p-12">
      <!-- Imagen a la izquierda -->
      <div class="hidden md:block md:w-1/3 lg:w-1/4 mr-8">
        <div class="relative">
          <div class="bg-white rounded-xl p-4 shadow-md transform rotate-3">
            <div class="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
              <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
          </div>
          <div class="absolute -top-2 -right-2 bg-white rounded-lg p-2 shadow-md transform -rotate-12">
            <div class="w-16 h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-md flex items-center justify-center">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Contenido principal -->
      <div class="flex-1">
        <!-- === Solo tipografía y organización responsive del texto (como REFERENCIA) === -->
        <div class="text-white space-y-4 sm:space-y-6 lg:pr-8 text-center lg:text-left">
          <h1 class="font-bold leading-tight text-[22px] sm:text-[28px] md:text-[36px] lg:text-[44px]">
            Sortear los Últimos Cambios Arancelarios
          </h1>
          <p class="leading-relaxed text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] opacity-90 max-w-2xl mx-auto lg:mx-0">
            El comercio a nivel mundial es cada vez más difícil debido a los nuevos aranceles de Estados
            Unidos y a las diversas medidas de reciprocidad que surgen entre países e industrias. En Agencia
            IR, estamos comprometidos con ayudarte a sortear estos cambios.
          </p>

          <!-- Botón (solo ajuste tipografía para que coincida con referencia) -->
          <router-link
            to="/todaslasnoticias"
            role="button"
            class="inline-block bg-white text-orange-600 font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-300 text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px]"
          >
            Explore Nuestras Soluciones
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerArancelario',
  methods: {
    handleExploreClick () {
      console.log('Explorando soluciones...')
    }
  }
}
</script>

<style scoped>
/* Animación sutil para los documentos */
.transform { transition: transform 0.3s ease-in-out; }
.transform:hover { transform: rotate(6deg) scale(1.02); }
</style>
