<template>
  <main class="min-h-screen bg-[rgb(241,234,218)]">
    <div class="py-6 md:py-12">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-8 md:mb-12">
          <div class="group relative inline-block mb-6">
            <div class="absolute -inset-0.5 bg-[rgb(248,112,62)] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div class="relative inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg">
              <svg class="w-4 h-4 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 012 2z" />
              </svg>
              <span class="text-sm font-bold text-[rgb(58,26,29)] tracking-wider uppercase">Cotizador</span>
            </div>
          </div>
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[rgb(248,112,62)] to-[rgb(248,112,62)] bg-clip-text text-transparent leading-tight">Cotiza tu envío</h1>
        </div>

        <!-- Main Form -->
        <div class="max-w-4xl mx-auto">
          <div class="relative group">
            <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>

            <div class="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
              <!-- Panel de errores global -->
              <transition enter-active-class="transition-all duration-500 ease-out" enter-from-class="transform -translate-y-4 opacity-0 scale-95" enter-to-class="transform translate-y-0 opacity-100 scale-100" leave-active-class="transition-all duration-300 ease-in" leave-from-class="transform translate-y-0 opacity-100 scale-100" leave-to-class="transform -translate-y-4 opacity-0 scale-95">
                <div v-if="errorSummary.length" class="mx-6 md:mx-8 lg:mx-10 mt-6 rounded-2xl border-l-4 border-red-400 bg-gradient-to-r from-red-50 to-red-25 shadow-lg">
                  <div class="p-5">
                    <div class="flex items-start">
                      <div class="flex-shrink-0">
                        <svg class="w-5 h-5 text-red-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>
                      </div>
                      <div class="ml-3 flex-1">
                        <h4 class="font-bold text-red-800 text-sm mb-2">¡Oops! Faltan algunos datos importantes</h4>
                        <div class="text-red-700 text-sm space-y-1">
                          <div v-for="(msg, i) in errorSummary" :key="i" class="flex items-center gap-2 opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]" :style="{ animationDelay: `${i * 100}ms` }">
                            <div class="w-1 h-1 bg-red-400 rounded-full"></div>
                            <span>{{ msg }}</span>
                          </div>
                        </div>
                      </div>
                      <button @click="clearAllErrors" class="flex-shrink-0 text-red-400 hover:text-red-600 transition-colors">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </transition>

              <!-- Tabs -->
              <div class="border-b border-gray-100">
                <div class="flex overflow-x-auto scrollbar-thin scrollbar-thumb-[rgb(248,112,62)] scrollbar-track-gray-100">
                  <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id" :class="[clsTabBtn, activeTab === tab.id ? clsTabActive : clsTabIdle]">
                    <svg v-if="tab.id === 'documento'" class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                    <svg v-else class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                    <span class="text-sm md:text-base">{{ tab.label }}</span>
                  </button>
                </div>
              </div>

              <div class="p-6 md:p-8 lg:p-10">
                <!-- Locations -->
                <div class="grid md:grid-cols-2 gap-6 mb-6">
                  <div v-for="f in locationFields" :key="f.name">
                    <label class="block text-sm font-semibold text-[rgb(58,26,29)] mb-3">{{ f.label }}</label>
                    <input :name="f.name" :type="f.type" v-model="formData[f.name]" :class="inputClass(f.name)" :placeholder="f.placeholder"/>
                    <transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="transform translate-y-1 opacity-0" enter-to-class="transform translate-y-0 opacity-100">
                      <p v-if="errors[f.name]" class="mt-2 text-xs text-red-600 flex items-center gap-1">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                        {{ errors[f.name] }}
                      </p>
                    </transition>
                  </div>
                </div>

                <!-- Códigos Postales -->
                <div class="grid md:grid-cols-2 gap-6 mb-8">
                  <div v-for="f in postalFields" :key="f.name">
                    <label class="block text-sm font-semibold text-[rgb(58,26,29)] mb-3">{{ f.label }}</label>
                    <input :name="f.name" type="text" v-model="formData[f.name]" :class="inputClass(f.name)" :placeholder="f.placeholder" />
                    <transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="transform translate-y-1 opacity-0" enter-to-class="transform translate-y-0 opacity-100">
                      <p v-if="errors[f.name]" class="mt-2 text-xs text-red-600 flex items-center gap-1">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                        {{ errors[f.name] }}
                      </p>
                    </transition>
                  </div>
                </div>

                <!-- Prohibited Items -->
                <div class="mb-8">
                  <label class="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" v-model="isProhibited" class="sr-only" />
                    <div :class="['w-5 h-5 rounded border-2 flex items-center justify-center transition-all mt-1', isProhibited ? 'border-[rgb(248,112,62)] bg-[rgb(248,112,62)]' : 'border-gray-300']">
                      <svg v-if="isProhibited" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                    </div>
                    <span class="text-sm text-[rgb(248,112,62)] font-medium">Declaro que mi envío no es <strong>Mercancía de Prohibido Transporte</strong><router-link to="/prohibidos" class="underline hover:no-underline ml-1">Ver lista</router-link></span>
                  </label>
                  <transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="transform translate-y-1 opacity-0" enter-to-class="transform translate-y-0 opacity-100">
                    <p v-if="errors.declaracion" class="mt-3 ml-8 text-xs text-red-600 flex items-center gap-1">
                      <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                      {{ errors.declaracion }}
                    </p>
                  </transition>
                </div>

                <!-- Package Details -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div>
                    <label class="block text-sm font-semibold text-[rgb(58,26,29)] mb-3">Cantidad</label>
                    <input type="number" v-model="formData.cantidad" class="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-[rgb(248,112,62)] focus:ring-2 focus:ring-[rgb(248,112,62)]/20 outline-none transition-all duration-300 text-[rgb(58,26,29)]" />
                  </div>

                  <div>
                    <label class="block text-sm font-semibold text-[rgb(58,26,29)] mb-3">Peso</label>
                    <div class="relative">
                      <input name="peso" type="number" v-model="formData.peso" :class="inputClass('peso', true)" />
                      <span class="absolute right-4 top-1/2 -translate-y-1/2 text-[rgb(248,112,62)] font-bold text-sm">kg</span>
                    </div>
                    <transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="transform translate-y-1 opacity-0" enter-to-class="transform translate-y-0 opacity-100">
                      <p v-if="errors.peso" class="mt-2 text-xs text-red-600 flex items-center gap-1">
                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                        {{ errors.peso }}
                      </p>
                    </transition>
                  </div>

                  <div class="lg:col-span-2">
                    <label class="block text-sm font-semibold text-[rgb(58,26,29)] mb-3">Dimensiones (cm)</label>
                    <div class="grid grid-cols-3 gap-3">
                      <template v-for="f in dimensionFields" :key="f.name">
                        <input :name="f.name" type="number" v-model="formData[f.name]" :placeholder="f.placeholder" :class="inputClass(f.name, true)" />
                      </template>
                    </div>
                    <div class="grid grid-cols-3 gap-3 mt-2">
                      <template v-for="f in dimensionFields" :key="f.name">
                        <transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="transform translate-y-1 opacity-0" enter-to-class="transform translate-y-0 opacity-100">
                          <p v-if="errors[f.name]" class="text-xs text-red-600 flex items-center gap-1">
                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
                            {{ errors[f.name] }}
                          </p>
                        </transition>
                      </template>
                    </div>
                  </div>
                </div>

                <!-- Quote Summary & Delivery Info -->
                <div class="grid md:grid-cols-2 gap-8 items-stretch">
                  <!-- Pricing Details -->
                  <div class="relative h-full">
                    <div class="absolute -inset-0.5 bg-[rgb(248,112,62)] rounded-2xl blur opacity-20"></div>
                    <div class="relative bg-gray-50 rounded-2xl p-6 border border-gray-200 h-full flex flex-col">
                      <h3 class="text-lg font-bold text-[rgb(58,26,29)] mb-4">Desglose de costos</h3>
                      <div class="space-y-3">
                        <div class="flex justify-between items-center">
                          <span class="text-[rgb(58,26,29)]">Valor de envío</span>
                          <transition enter-active-class="transition-all duration-700 ease-out" enter-from-class="transform scale-75 opacity-0" enter-to-class="transform scale-100 opacity-100" mode="out-in">
                            <span :key="valorEnvioDisplay" class="font-bold text-[rgb(58,26,29)]">$ <span ref="valorEnvioCounter">{{ formatCurrency(valorEnvioDisplay) }}</span></span>
                          </transition>
                        </div>
                        <div class="flex justify-between items-center">
                          <span class="text-[rgb(58,26,29)]">Seguro del envío</span>
                          <transition enter-active-class="transition-all duration-700 ease-out" enter-from-class="transform scale-75 opacity-0" enter-to-class="transform scale-100 opacity-100" mode="out-in">
                            <span :key="seguroEnvioDisplay" class="font-bold text-[rgb(58,26,29)]">$ <span ref="seguroEnvioCounter">{{ formatCurrency(seguroEnvioDisplay) }}</span></span>
                          </transition>
                        </div>
                        <div class="border-t border-gray-300 pt-3 mt-auto">
                          <div class="flex justify-between items-center">
                            <span class="text-lg font-bold text-[rgb(58,26,29)]">TOTAL</span>
                            <transition enter-active-class="transition-all duration-1000 ease-out" enter-from-class="transform scale-50 opacity-0 rotate-12" enter-to-class="transform scale-100 opacity-100 rotate-0" mode="out-in">
                              <span :key="totalCostDisplay" class="text-2xl font-black text-[rgb(248,112,62)] relative">$ <span ref="totalCounter">{{ formatCurrency(totalCostDisplay) }}</span>
                                <div v-if="cotizacionRealizada && totalCostDisplay > 0" class="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                              </span>
                            </transition>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Delivery Info -->
                  <div class="relative h-full">
                    <div class="absolute -inset-0.5 bg-[rgb(248,112,62)] rounded-2xl blur opacity-20"></div>
                    <div class="relative bg-gray-50 rounded-2xl p-6 border border-gray-200 h-full flex flex-col">
                      <h3 class="text-lg font-bold text-[rgb(58,26,29)] mb-4">Información de entrega</h3>
                      <div class="space-y-4">
                        <div>
                          <span class="block text-sm text-[rgb(58,26,29)] mb-1">Tiempo de entrega</span>
                          <transition enter-active-class="transition-all duration-800 ease-out" enter-from-class="transform translate-x-4 opacity-0" enter-to-class="transform translate-x-0 opacity-100">
                            <span v-if="cotizacionRealizada" class="text-xl font-bold text-[rgb(248,112,62)]">3-4 días hábiles</span>
                            <span v-else class="text-xl font-bold text-gray-400">-- días hábiles</span>
                          </transition>
                        </div>
                        <transition enter-active-class="transition-all duration-900 ease-out" enter-from-class="transform translate-y-4 opacity-0" enter-to-class="transform translate-y-0 opacity-100">
                          <p v-if="cotizacionRealizada" class="text-sm text-[rgb(58,26,29)] italic">*El TOTAL es un valor estimado, el envío está sujeto a verificación.</p>
                        </transition>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <button @click="cotizarPedido" :class="clsBtnPrimary" class="group" :disabled="enviando">
                    <span>{{ enviando ? 'Cotizando...' : textBotonPrincipal }}</span>
                    <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                  </button>

                  <button @click="acercarsePuntoServicio" :class="clsBtnGhost" class="group">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    <span class="hidden sm:inline">Acércate a un Punto de Servicio</span>
                    <span class="sm:hidden">Punto de Servicio</span>
                  </button>

                  <button @click="limpiarFormulario" :class="clsBtnOutline" class="group"><span>Limpiar</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

/* ========= NUEVO: backend ========= */
const API_URL = 'http://127.0.0.1:8000/api/intake'
const enviando = ref(false)
/* ================================== */

// ----- Clases reutilizables (misma estética) -----
const clsTabBtn = 'flex items-center gap-3 px-6 md:px-8 py-4 md:py-6 font-semibold transition-all duration-300 whitespace-nowrap'
const clsTabActive = 'text-[rgb(248,112,62)] border-b-4 border-[rgb(248,112,62)] bg-[rgb(248,112,62)]/5'
const clsTabIdle = 'text-[rgb(58,26,29)] hover:text-[rgb(248,112,62)] hover:bg-[rgb(248,112,62)]/5'
const clsBtnPrimary = 'relative overflow-hidden bg-[rgb(248,112,62)] hover:bg-[rgb(248,112,62)]/90 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3'
const clsBtnGhost = 'font-bold text-[rgb(248,112,62)] hover:text-[rgb(248,112,62)]/80 px-8 py-4 rounded-2xl bg-[rgb(248,112,62)]/10 hover:bg-[rgb(248,112,62)]/20 transition-all duration-300 flex items-center justify-center gap-3 border-2 border-[rgb(248,112,62)]/20 hover:border-[rgb(248,112,62)]/40'
const clsBtnOutline = 'font-bold text-[rgb(248,112,62)] hover:text-white px-8 py-4 rounded-2xl bg-transparent hover:bg-[rgb(248,112,62)] border-2 border-[rgb(248,112,62)] transition-all duration-300 flex items-center justify-center gap-3'

// ----- Estado -----
const activeTab = ref('paquete')
const isProhibited = ref(false)
const cotizacionRealizada = ref(false)

const formData = ref({ cantidad:'1', peso:'15', largo:'20', ancho:'30', alto:'30', origen:'', destino:'', codigoPostalOrigen:'', codigoPostalDestino:'' })

// Campos configurables
const locationFields = [
  { name:'origen',  label:'Lugar de origen',  placeholder:'Ingrese ciudad de origen',  type:'text' },
  { name:'destino', label:'Lugar de destino', placeholder:'Ingrese ciudad de destino', type:'text' }
]
const postalFields = [
  { name:'codigoPostalOrigen',  label:'Código postal de origen',  placeholder:'Ingrese código postal de origen' },
  { name:'codigoPostalDestino', label:'Código postal de destino', placeholder:'Ingrese código postal de destino' }
]
const dimensionFields = [
  { name:'largo', placeholder:'Largo' },
  { name:'ancho', placeholder:'Ancho' },
  { name:'alto',  placeholder:'Alto' }
]

// Precarga desde query params
onMounted(() => {
  const q = route.query || {}
  const pre = {
    origen: q.origen ?? '', destino: q.destino ?? '', peso: q.peso ?? '',
    largo: q.largo ?? '', ancho: q.ancho ?? '', alto: q.altura ?? q.alto ?? ''
  }
  if (Object.values(pre).some(v => (v ?? '') !== '')) {
    Object.assign(formData.value, Object.fromEntries(Object.entries(pre).map(([k,v]) => [k, String(v)])))
  } else {
    formData.value = { cantidad:'', peso:'', largo:'', ancho:'', alto:'', origen:'', destino:'', codigoPostalOrigen:'', codigoPostalDestino:'' }
    isProhibited.value = false
    activeTab.value = 'paquete'
  }
})

// Tabs
const tabs = ref([{ id:'documento', label:'Documento' }, { id:'paquete', label:'Paquete' }])

// Precios estáticos (de demo)
const valorEnvioEstatico = 72500
const seguroEnvioEstatico = 10800

// Desglose (muestra cuando cotizacionRealizada = true)
const valorEnvioDisplay = computed(() => cotizacionRealizada.value ? valorEnvioEstatico : 0)
const seguroEnvioDisplay = computed(() => cotizacionRealizada.value ? seguroEnvioEstatico : 0)
const totalCostDisplay  = computed(() => valorEnvioDisplay.value + seguroEnvioDisplay.value)

// Botón principal (con estado enviando)
const textBotonPrincipal = computed(() =>
  cotizacionRealizada.value ? 'Continúa creando tu pedido' : 'Cotizar Pedido'
)

// Utiles
const formatCurrency = v => Number(v).toLocaleString('es-CO')
const animateNumber = (el, start, end, duration=1000) => {
  if (!el) return
  const t0 = performance.now()
  const step = (t) => {
    const p = Math.min((t - t0) / duration, 1)
    const e = 1 - Math.pow(1 - p, 3)
    el.textContent = Math.round(start + (end - start) * e).toLocaleString('es-CO')
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

// Validación compacta
const errors = ref({ origen:'', destino:'', codigoPostalOrigen:'', codigoPostalDestino:'', peso:'', largo:'', ancho:'', alto:'', declaracion:'' })
const errorSummary = ref([])
const rules = {
  origen: 'Ingresa el lugar de origen.', destino: 'Ingresa el lugar de destino.',
  codigoPostalOrigen: 'Ingresa el código postal de origen.', codigoPostalDestino: 'Ingresa el código postal de destino.',
  peso: 'Ingresa el peso.', largo: 'Ingresa el largo.', ancho: 'Ingresa el ancho.', alto: 'Ingresa el alto.'
}
const requiredText = v => String(v || '').trim().length > 0
const requiredNum  = v => v !== '' && v !== null && v !== undefined
const clearAllErrors = () => { Object.keys(errors.value).forEach(k => (errors.value[k]='')); errorSummary.value = [] }
const buildSummary = () => { errorSummary.value = Object.values(errors.value).filter(Boolean) }
const validate = () => {
  Object.keys(errors.value).forEach(k => (errors.value[k] = ''))
  const v = formData.value
  for (const k of ['origen','destino','codigoPostalOrigen','codigoPostalDestino']) if (!requiredText(v[k])) errors.value[k] = rules[k]
  for (const k of ['peso','largo','ancho','alto']) if (!requiredNum(v[k])) errors.value[k] = rules[k]
  if (!isProhibited.value) errors.value.declaracion = 'Debes aceptar la declaración de mercancía no prohibida.'
  buildSummary();
  return errorSummary.value.length === 0
}

watch(formData, () => {
  for (const [k, val] of Object.entries(formData.value)) if (String(val ?? '').trim() !== '') errors.value[k] && (errors.value[k] = '')
  buildSummary()
}, { deep:true })
watch(isProhibited, (nv) => { if (nv) { errors.value.declaracion = ''; buildSummary() } })

// Clases para inputs
function inputClass (field, isNumber=false) {
  const base = 'w-full px-4 py-4 rounded-2xl border outline-none transition-all duration-300 text-[rgb(58,26,29)] border-gray-200 focus:border-[rgb(248,112,62)] focus:ring-2 focus:ring-[rgb(248,112,62)]/20 ' + (isNumber ? 'pr-12 ' : '')
  const err  = errors.value[field] ? ' border-red-400 focus:border-red-500 focus:ring-red-200 bg-red-50' : ''
  return base + err
}

// Refs contadores
const valorEnvioCounter = ref(null)
const seguroEnvioCounter = ref(null)
const totalCounter = ref(null)

/* ========= NUEVO: envío al backend ========= */
const cotizarPedido = async () => {
  if (!validate()) {
    const firstKey = Object.keys(errors.value).find(k => errors.value[k])
    const el = document.querySelector(`[name="${firstKey}"]`) || document.querySelector('main')
    el?.scrollIntoView({ behavior:'smooth', block:'center' })
    return
  }
  if (enviando.value) return

  enviando.value = true
  try {
    const payload = {
      ciudadOrigen: formData.value.origen,
      ciudadDestino: formData.value.destino,
      alto: Number(formData.value.alto),
      largo: Number(formData.value.largo),
      ancho: Number(formData.value.ancho),
      peso: Number(formData.value.peso),
      valorDeclarado: 10,
      tipoEnvio: activeTab.value,
      cantidad: Number(formData.value.cantidad),
      codigoPostalOrigen: formData.value.codigoPostalOrigen,
      codigoPostalDestino: formData.value.codigoPostalDestino,
      declaracion: isProhibited.value === true
    }

    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const data = await res.json()

    if (!res.ok || !data?.ok) {
      if (res.status === 422 && data?.errors) {
        for (const [campo, msgs] of Object.entries(data.errors)) {
          errors.value[campo] = Array.isArray(msgs) ? msgs[0] : String(msgs)
        }
        buildSummary()
      }
      const msg = data?.message || data?.error?.message || 'No se pudo enviar el formulario.'
      throw new Error(msg)
    }

    // Éxito: tu API recibió/validó. Aprovechamos tu UI actual
    cotizacionRealizada.value = true

    await nextTick()
    const seq = [
      { ref: valorEnvioCounter, end: valorEnvioEstatico, delay: 200, dur: 800 },
      { ref: seguroEnvioCounter, end: seguroEnvioEstatico, delay: 400, dur: 800 },
      { ref: totalCounter,      end: valorEnvioEstatico + seguroEnvioEstatico, delay: 600, dur: 1000 }
    ]
    seq.forEach(({ref,end,delay,dur}) => setTimeout(() => ref.value && animateNumber(ref.value, 0, end, dur), delay))
  } catch (e) {
    console.error(e)
    alert(e.message || 'Error de red al enviar formulario.')
  } finally {
    enviando.value = false
  }
}
/* =========================================== */

const hacerPedido = () => {
  router.push({ name:'HacerEnvio', query: { ...formData.value, tipoEnvio: activeTab.value, valorEnvio: valorEnvioEstatico, seguroEnvio: seguroEnvioEstatico, totalCost: valorEnvioEstatico + seguroEnvioEstatico, valorDeclarado: '10' } })
}

const acercarsePuntoServicio = () => router.push({ name:'Mapa' })

const limpiarFormulario = () => {
  formData.value = { cantidad:'1', peso:'15', largo:'20', ancho:'30', alto:'30', origen:'', destino:'', codigoPostalOrigen:'', codigoPostalDestino:'' }
  isProhibited.value = false
  activeTab.value = 'paquete'
  cotizacionRealizada.value = false
  clearAllErrors()
}
</script>

<style scoped>
@keyframes fadeInUp { from { opacity:0; transform: translateY(10px);} to { opacity:1; transform: translateY(0);} }
/* Scrollbar personalizada */
.scrollbar-thin::-webkit-scrollbar { height: 6px; }
.scrollbar-thumb-orange-500::-webkit-scrollbar-thumb { background-color: rgb(248, 112, 62); border-radius: 3px; }
.scrollbar-track-gray-100::-webkit-scrollbar-track { background-color: rgb(243, 244, 246); border-radius: 3px; }
</style>
