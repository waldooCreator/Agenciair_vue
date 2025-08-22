<template>
  <div class="ml-2 mr-2 md:ml-6 md:mr-6 mt-4">
    <!-- DESKTOP Y TABLET: -->
    <div class="hidden md:flex md:gap-x-8 justify-between items-center">
      <RastreoComponent />
      <CotizarComponent />
    </div>
    <!-- MÓVIL: -->
    <div class="md:hidden space-y-2 flex flex-col items-center relative">
      <div class="w-full max-w-[380px] transition-all duration-300 relative z-10">
        <RastreoComponent
          @abrio="manejarRastreoAbierto"
          @cerro="manejarRastreoCerrado"
          :expandido="rastreoExpandido"
        />
      </div>
      <div class="w-full max-w-[380px] transition-all duration-300 relative z-0">
        <CotizarComponent
          @abrio="manejarCotizarAbierto"
          @cerro="manejarCotizarCerrado"
        />
      </div>
      <!-- Capa flotante solo si rastreo está expandido -->
      <div
        v-if="rastreoExpandido"
        class="absolute left-0 right-0 mx-auto max-w-[380px] z-20"
        style="top: 0;"
      >
        <RastreoComponent
          @abrio="manejarRastreoAbierto"
          @cerro="manejarRastreoCerrado"
          :expandido="true"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RastreoComponent from './rastreo.vue'
import CotizarComponent from './cotizar.vue'

const rastreoExpandido = ref(false)

const manejarRastreoAbierto = () => {
  rastreoExpandido.value = true
}

const manejarRastreoCerrado = () => {
  rastreoExpandido.value = false
}

const manejarCotizarAbierto = () => {}
const manejarCotizarCerrado = () => {}
const cerrarCotizar = () => {}
</script>
