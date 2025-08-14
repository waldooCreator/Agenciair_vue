<template>
  <div
    class="relative w-full mx-auto z-10 transition-all duration-300 font-sans antialiased text-[15px] sm:text-base md:text-[17px] lg:text-[18px]"
    :class="{ 'max-w-md': isDesktop, 'max-w-full': !isDesktop }"
    ref="root"
  >
    <!-- Barra compacta (toggle) -->
    <div
      class="flex items-center justify-between bg-white rounded-full shadow-md px-4 py-3 cursor-pointer hover:shadow-lg transition-shadow"
      @click="toggleExpanded"
    >
      <span class="text-sm text-gray-700 font-medium text-[15px] sm:text-base md:text-[17px] lg:text-[18px]">Cotizar envío</span>
      <svg
        class="w-4 h-4 text-[rgb(235,102,55)] transform transition-transform duration-200 flex-shrink-0 ml-2"
        :class="{ 'rotate-180': isExpanded }"
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>

    <!-- Panel -->
    <div
      v-show="isExpanded"
      class="absolute top-full left-0 w-full mt-2 transform transition-all duration-300 ease-in-out z-30"
      :class="{
        'opacity-100 translate-y-0': isExpanded,
        'opacity-0 -translate-y-2': !isExpanded,
        'md:max-w-md': isDesktop,
        'max-w-full': !isDesktop
      }"
    >
      <div class="bg-white rounded-lg shadow-xl p-4 border-t-2 border-[rgb(235,102,55)]">
        <div class="space-y-3">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2 text-[15px] sm:text-base md:text-[17px] lg:text-[18px]">Ciudad de origen:</label>
            <input
              type="text" v-model="origen" placeholder="Ej: Bogotá, Colombia"
              class="w-full bg-gray-50 text-gray-700 text-sm px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[rgb(235,102,55)] focus:border-transparent text-[15px] sm:text-base md:text-[17px] lg:text-[18px] placeholder:text-[15px] sm:placeholder:text-base md:placeholder:text-[17px] lg:placeholder:text-[18px]"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2 text-[15px] sm:text-base md:text-[17px] lg:text-[18px]">Ciudad de destino:</label>
            <input
              type="text" v-model="destino" placeholder="Ej: Los Angeles, USA"
              class="w-full bg-gray-50 text-gray-700 text-sm px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[rgb(235,102,55)] focus:border-transparent text-[15px] sm:text-base md:text-[17px] lg:text-[18px] placeholder:text-[15px] sm:placeholder:text-base md:placeholder:text-[17px] lg:placeholder:text-[18px]"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2 text-[15px] sm:text-base md:text-[17px] lg:text-[18px]">Dimensiones del paquete:</label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <div>
                <input type="number" v-model="peso" placeholder="Peso (kg)" min="0.1" step="0.1"
                  class="w-full bg-gray-50 text-gray-700 text-xs px-2 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[rgb(235,102,55)] focus:border-transparent text-[15px] sm:text-base md:text-[17px] lg:text-[18px] placeholder:text-[15px] sm:placeholder:text-base md:placeholder:text-[17px] lg:placeholder:text-[18px]" />
              </div>
              <div>
                <input type="number" v-model="altura" placeholder="Alto (cm)" min="1" step="0.1"
                  class="w-full bg-gray-50 text-gray-700 text-xs px-2 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[rgb(235,102,55)] focus:border-transparent text-[15px] sm:text-base md:text-[17px] lg:text-[18px] placeholder:text-[15px] sm:placeholder:text-base md:placeholder:text-[17px] lg:placeholder:text-[18px]" />
              </div>
              <div>
                <input type="number" v-model="ancho" placeholder="Ancho (cm)" min="1" step="0.1"
                  class="w-full bg-gray-50 text-gray-700 text-xs px-2 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[rgb(235,102,55)] focus:border-transparent text-[15px] sm:text-base md:text-[17px] lg:text-[18px] placeholder:text-[15px] sm:placeholder:text-base md:placeholder:text-[17px] lg:placeholder:text-[18px]" />
              </div>
              <div>
                <input type="number" v-model="largo" placeholder="Largo (cm)" min="1" step="0.1"
                  class="w-full bg-gray-50 text-gray-700 text-xs px-2 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[rgb(235,102,55)] focus:border-transparent text-[15px] sm:text-base md:text-[17px] lg:text-[18px] placeholder:text-[15px] sm:placeholder:text-base md:placeholder:text-[17px] lg:placeholder:text-[18px]" />
              </div>
            </div>
          </div>
        </div>

        <button
          @click="cotizar"
          class="w-full mt-4 bg-[rgb(235,102,55)] hover:bg-[rgba(235,102,55,0.9)] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-[15px] sm:text-base md:text-[17px] lg:text-[18px]"
        >
          Cotizar Envío
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineEmits } from 'vue'
import { useRouter } from 'vue-router' // agregado para redirección

const emit = defineEmits(['abrio', 'cerro'])
const router = useRouter() // instancia del router

const root = ref(null)  // contenedor raíz para detectar click-outside
const isExpanded = ref(false)
const origen = ref('')
const destino = ref('')
const peso = ref('')
const altura = ref('')
const ancho = ref('')
const largo = ref('')
const isDesktop = ref(false)

const updateViewport = () => { isDesktop.value = window.innerWidth >= 768 }

onMounted(() => {
  updateViewport()
  window.addEventListener('resize', updateViewport)
  document.addEventListener('click', onClickOutside, true)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateViewport)
  document.removeEventListener('click', onClickOutside, true)
})

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
  if (isExpanded.value) emit('abrio'); else emit('cerro')
}

const onClickOutside = (e) => {
  if (!isExpanded.value) return
  if (root.value && !root.value.contains(e.target)) {
    isExpanded.value = false
    emit('cerro')
  }
}

const cotizar = () => {
  if (origen.value.trim() && destino.value.trim() && peso.value && altura.value && ancho.value && largo.value) {
    // === NUEVO: guardamos un "payload" en sessionStorage ===
    const payload = {
      origen: origen.value,
      destino: destino.value,
      peso: peso.value,
      altura: altura.value,
      ancho: ancho.value,
      largo: largo.value
    }
    sessionStorage.setItem('cotizacion', JSON.stringify(payload))

    // Navegamos (dejé tus query params tal cual)
    router.push({ 
      name: 'CotizarInfo', 
      query: payload
    })
  } else {
    alert('Por favor completa todos los campos')
  }
}
</script>
