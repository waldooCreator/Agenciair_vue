<template>
  <!-- Contenedor exterior -->
  <div class="mt-8 md:mt-12 px-4 md:px-8 lg:px-12 mb-10 md:mb-14">
    <!-- Contenedor centrado -->
    <div class="relative w-full max-w-none lg:max-w-7xl mx-auto overflow-hidden rounded-xl lg:rounded-2xl">

      <!-- Carrusel -->
      <div class="relative h-48 sm:h-56 md:h-64 lg:h-[20rem] xl:h-[24rem] 2xl:h-[28rem]">
        <!-- Nueva transición: slide (sin mode="out-in" para que se superpongan) -->
        <Transition name="slide">
          <img
            :src="images[currentIndex]"
            :key="images[currentIndex]"
            class="absolute inset-0 w-full h-full object-cover"
            :alt="`Slide ${currentIndex + 1}`"
          />
        </Transition>
      </div>

      <!-- Indicadores -->
      <div class="absolute bottom-3 md:bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-3">
        <button
          v-for="(img, i) in images"
          :key="i"
          @click="currentIndex = i"
          class="w-2.5 h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full transition-colors duration-200"
          :class="currentIndex === i ? 'bg-white' : 'bg-gray-400 hover:bg-gray-300'"
          :aria-label="`Ir a slide ${i + 1}`"
        ></button>
      </div>

      <!-- Control anterior -->
      <button
        @click="prevSlide"
        class="absolute top-1/2 left-2 md:left-4 lg:left-6 transform -translate-y-1/2
               bg-black bg-opacity-50 hover:bg-opacity-70 text-white
               p-1.5 md:p-2 lg:p-3 rounded-full transition-all duration-200"
        aria-label="Slide anterior"
      >
        <svg class="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>

      <!-- Control siguiente -->
      <button
        @click="nextSlide"
        class="absolute top-1/2 right-2 md:right-4 lg:right-6 transform -translate-y-1/2
               bg-black bg-opacity-50 hover:bg-opacity-70 text-white
               p-1.5 md:p-2 lg:p-3 rounded-full transition-all duration-200"
        aria-label="Siguiente slide"
      >
        <svg class="w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  '/images/Gemini_Generated_Image_9zjii59zjii59zji.png',
  '/images/neta.png',
  '/images/paquete.png',
]

const currentIndex = ref(0)
let interval = null

function prevSlide() {
  currentIndex.value = currentIndex.value === 0 ? images.length - 1 : currentIndex.value - 1
}

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

onMounted(() => {
  interval = setInterval(() => {
    nextSlide()
  }, 9000) // mantiene el tiempo de cambio
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped>
/* Slide-fade superpuesto: nunca queda el fondo vacío porque ambas imágenes conviven un instante */
.slide-enter-active,
.slide-leave-active {
  position: absolute;           /* apilar ambas imágenes */
  inset: 0;
  transition:
    transform 360ms cubic-bezier(.22,.61,.36,1),
    opacity   360ms cubic-bezier(.22,.61,.36,1);
  will-change: transform, opacity;
  backface-visibility: hidden;
}

/* La nueva imagen entra desde la derecha, sutilmente y con leve fade-in */
.slide-enter-from {
  transform: translateX(6%);
  opacity: 0.001;
}
.slide-enter-to {
  transform: translateX(0%);
  opacity: 1;
}

/* La imagen actual sale hacia la izquierda con leve fade-out */
.slide-leave-from {
  transform: translateX(0%);
  opacity: 1;
}
.slide-leave-to {
  transform: translateX(-6%);
  opacity: 0.001;
}
</style>
