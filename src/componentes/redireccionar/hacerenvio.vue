<!-- HacerPedido.vue -->
<template>
  <main class="min-h-screen bg-[rgb(241,234,218)]">
    <div class="py-6 md:py-12">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">

        <!-- Header -->
        <div class="text-center mb-8 md:mb-12">
          <div class="group relative inline-block mb-6">
            <div class="absolute -inset-0.5 bg-[rgb(248,112,62)] rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
            <div class="relative inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg">
              <svg class="w-4 h-4 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 7h4l2 5h8l2-5h4M5 21h14a2 2 0 002-2v-6H3v6a2 2 0 002 2z"/>
              </svg>
              <span class="text-sm font-bold text-[rgb(58,26,29)] tracking-wider uppercase">
                Pedido
              </span>
            </div>
          </div>

          <h1 class="text-3xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[rgb(248,112,62)] to-[rgb(248,112,62)] bg-clip-text text-transparent leading-tight">
            Hacer Pedido
          </h1>
        </div>

        <!-- Card principal -->
        <div class="max-w-3xl mx-auto">
          <div class="relative group">
            <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>

            <div class="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">

              <!-- Indicador de datos prellenados -->
              <div v-if="datosPrellenos"
                   class="mx-6 md:mx-8 lg:mx-10 mt-6 rounded-2xl border border-green-200 bg-green-50 p-3 text-green-700 text-sm">
                ✅ Datos cargados automáticamente desde el cotizador
              </div>

              <div class="p-6 md:p-8 lg:p-10">
                <!-- Selector de tipo de envío -->
                <div class="mb-8">
                  <div class="flex justify-center">
                    <div class="inline-flex bg-gray-100 rounded-full p-1">
                      <button
                        class="px-6 py-2 rounded-full flex items-center gap-2 shadow-md transition-all duration-300
                               bg-[rgb(248,112,62)] text-white hover:bg-[rgb(248,112,62)]/90">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"/>
                        </svg>
                        <span class="font-semibold">Paquetes</span>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Formulario -->
                <form @submit.prevent="handleSubmit" class="space-y-6">

                  <!-- Ciudad de origen -->
                  <div>
                    <label class="block text-sm font-semibold text-[rgb(58,26,29)] mb-2">
                      Ciudad de origen
                    </label>
                    <div class="relative">
                      <input v-model="formData.ciudadOrigen" type="text" placeholder="Seleccione ciudad de origen"
                             class="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-[rgb(248,112,62)] focus:ring-2 focus:ring-[rgb(248,112,62)]/20 outline-none transition-all duration-300 text-[rgb(58,26,29)] placeholder-gray-400"
                             required>
                      <svg class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none"
                           stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>
                  </div>

                  <!-- Ciudad de destino -->
                  <div>
                    <label class="block text-sm font-semibold text-[rgb(58,26,29)] mb-2">
                      Ciudad de destino
                    </label>
                    <div class="relative">
                      <input v-model="formData.ciudadDestino" type="text" placeholder="Seleccione ciudad de destino"
                             class="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-[rgb(248,112,62)] focus:ring-2 focus:ring-[rgb(248,112,62)]/20 outline-none transition-all duration-300 text-[rgb(58,26,29)] placeholder-gray-400"
                             required>
                      <svg class="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none"
                           stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </div>
                  </div>

                  <!-- Dimensiones del paquete -->
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label class="block text-sm font-semibold text-[rgb(58,26,29)] mb-2">
                        Alto (cm)
                      </label>
                      <input v-model="formData.alto" type="number" placeholder="0" min="1"
                             class="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-[rgb(248,112,62)] focus:ring-2 focus:ring-[rgb(248,112,62)]/20 outline-none transition-all duration-300 text-[rgb(58,26,29)] placeholder-gray-400"
                             required>
                    </div>
                    <div>
                      <label class="block text-sm font-semibold text-[rgb(58,26,29)] mb-2">
                        Largo (cm)
                      </label>
                      <input v-model="formData.largo" type="number" placeholder="0" min="1"
                             class="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-[rgb(248,112,62)] focus:ring-2 focus:ring-[rgb(248,112,62)]/20 outline-none transition-all duration-300 text-[rgb(58,26,29)] placeholder-gray-400"
                             required>
                    </div>
                    <div>
                      <label class="block text-sm font-semibold text-[rgb(58,26,29)] mb-2">
                        Ancho (cm)
                      </label>
                      <input v-model="formData.ancho" type="number" placeholder="0" min="1"
                             class="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-[rgb(248,112,62)] focus:ring-2 focus:ring-[rgb(248,112,62)]/20 outline-none transition-all duration-300 text-[rgb(58,26,29)] placeholder-gray-400"
                             required>
                    </div>
                  </div>

                  <!-- Peso mínimo -->
                  <div>
                    <label class="block text-sm font-semibold text-[rgb(58,26,29)] mb-2">
                      Peso mínimo: 1 kg
                    </label>
                    <input v-model="formData.peso" type="number" placeholder="1" min="1" step="0.1"
                           class="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-[rgb(248,112,62)] focus:ring-2 focus:ring-[rgb(248,112,62)]/20 outline-none transition-all duration-300 text-[rgb(58,26,29)] placeholder-gray-400"
                           required>
                  </div>

                  <!-- Valor declarado -->
                  <div>
                    <label class="block text-sm font-semibold text-[rgb(58,26,29)] mb-2">
                      Valor declarado mínimo (USD): 10
                    </label>
                    <input type="number" min="10" autocomplete="off" placeholder=""
                           :value="(formData.valorDeclarado === 10 || formData.valorDeclarado === '10') ? '' : formData.valorDeclarado"
                           @focus="(formData.valorDeclarado === 10 || formData.valorDeclarado === '10') && (formData.valorDeclarado = '')"
                           @input="formData.valorDeclarado = $event.target.value"
                           class="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-[rgb(248,112,62)] focus:ring-2 focus:ring-[rgb(248,112,62)]/20 outline-none transition-all duration-300 text-[rgb(58,26,29)] placeholder-gray-400"
                           required>
                  </div>

                  <!-- Botón de envío -->
                  <div class="pt-4">
                    <button type="submit" :disabled="isSubmitting"
                            class="group relative overflow-hidden bg-[rgb(248,112,62)] hover:bg-[rgb(248,112,62)]/90 text-white font-bold w-full px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                      <span v-if="!isSubmitting" class="flex items-center justify-center gap-2">
                        <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                        </svg>
                        <span>Hacer Pedido</span>
                      </span>
                      <span v-else class="flex items-center justify-center gap-2">
                        <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                          <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                        <span>Procesando...</span>
                      </span>
                    </button>
                  </div>
                </form>
              </div> <!-- /p-... -->
            </div> <!-- /card -->
          </div> <!-- /group -->
        </div> <!-- /max-w -->
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isSubmitting = ref(false)
const datosPrellenos = ref(false)

const formData = ref({
  ciudadOrigen: '',
  ciudadDestino: '',
  alto: '',
  largo: '',
  ancho: '',
  peso: '',
  valorDeclarado: '10'
})

// Al montar el componente, verificar si hay datos del cotizador por query params
onMounted(() => {
  const queryParams = route.query

  if (queryParams && Object.keys(queryParams).length > 0) {
    if (queryParams.ciudadOrigen) {
      formData.value.ciudadOrigen = String(queryParams.ciudadOrigen)
      datosPrellenos.value = true
    }
    if (queryParams.ciudadDestino) {
      formData.value.ciudadDestino = String(queryParams.ciudadDestino)
      datosPrellenos.value = true
    }
    if (queryParams.alto) {
      formData.value.alto = String(queryParams.alto)
      datosPrellenos.value = true
    }
    if (queryParams.largo) {
      formData.value.largo = String(queryParams.largo)
      datosPrellenos.value = true
    }
    if (queryParams.ancho) {
      formData.value.ancho = String(queryParams.ancho)
      datosPrellenos.value = true
    }
    if (queryParams.peso) {
      formData.value.peso = String(queryParams.peso)
      datosPrellenos.value = true
    }
    if (queryParams.valorDeclarado) {
      formData.value.valorDeclarado = String(queryParams.valorDeclarado)
      // no es indicador obligatorio
    }
  }
})

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    // Simulación de procesamiento
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Aquí va tu lógica real de envío
    // await fetch('/api/pedidos', { ... })

    alert('¡Pedido enviado exitosamente!')
    resetForm()
  } catch (error) {
    console.error('Error al enviar pedido:', error)
    alert('Error al procesar el pedido. Intente nuevamente.')
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  formData.value = {
    ciudadOrigen: '',
    ciudadDestino: '',
    alto: '',
    largo: '',
    ancho: '',
    peso: '',
    valorDeclarado: '10'
  }
  datosPrellenos.value = false
}
</script>

<style scoped>
.backdrop-blur-sm { backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); }
* { transition-property: all; transition-timing-function: cubic-bezier(0.4,0,0.2,1); transition-duration: 300ms; }
input:focus { box-shadow: 0 0 0 3px rgba(248,112,62,0.1); }
button:hover { transform: translateY(-1px); }

/* Hover inputs */
input:hover { border-color: rgba(248,112,62,0.3); }

/* Placeholder */
input::placeholder { color: #9CA3AF; opacity: 1; }

/* Botón deshabilitado */
button:disabled { transform: none !important; }

/* Responsive refuerzo por si acaso */
@media (max-width: 640px) {
  .grid-cols-3 { grid-template-columns: 1fr; }
}
</style>
