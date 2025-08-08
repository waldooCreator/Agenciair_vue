<template>
    <div 
        class="relative w-full mx-auto z-10 transition-all duration-300"
        :class="{
            'max-w-md': !isExpanded || isDesktop,
            'max-w-full px-4': isExpanded && !isDesktop
        }"
    >
        <!-- Barra compacta (siempre visible) -->
        <div 
            class="flex items-center justify-between bg-white rounded-full shadow-md px-4 py-3 cursor-pointer hover:shadow-lg transition-shadow"
            @click="toggleExpanded"
        >
            <span class="text-sm text-gray-700 font-medium">
                Cotizar envío
            </span>
            <!-- Icono flecha -->
            <svg 
                class="w-4 h-4 text-[rgb(235,102,55)] transform transition-transform duration-200 flex-shrink-0 ml-2"
                :class="{ 'rotate-180': isExpanded }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </div>

        <!-- Contenido expandido -->
        <div 
            v-show="isExpanded"
            class="absolute top-full left-0 w-full mt-2 transform transition-all duration-300 ease-in-out z-20"
            :class="{ 
                'opacity-100 translate-y-0': isExpanded,
                'opacity-0 -translate-y-2': !isExpanded
            }"
        >
            <div class="bg-white rounded-lg shadow-lg p-4 border-t-2 border-[rgb(235,102,55)]">
                <div class="space-y-3">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Ciudad de origen:
                        </label>
                        <input 
                            type="text" 
                            v-model="origen"
                            placeholder="Ej: Bogotá, Colombia"
                            class="w-full bg-gray-50 text-gray-700 text-sm px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[rgb(235,102,55)] focus:border-transparent"
                        />
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Ciudad de destino:
                        </label>
                        <input 
                            type="text" 
                            v-model="destino"
                            placeholder="Ej: Los Angeles, USA"
                            class="w-full bg-gray-50 text-gray-700 text-sm px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[rgb(235,102,55)] focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Dimensiones del paquete:
                        </label>
                        <div class="grid grid-cols-4 gap-2">
                            <div>
                                <input 
                                    type="number" 
                                    v-model="peso"
                                    placeholder="Peso (kg)"
                                    min="0.1"
                                    step="0.1"
                                    class="w-full bg-gray-50 text-gray-700 text-xs px-2 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[rgb(235,102,55)] focus:border-transparent"
                                />
                            </div>
                            <div>
                                <input 
                                    type="number" 
                                    v-model="altura"
                                    placeholder="Alto (cm)"
                                    min="1"
                                    step="0.1"
                                    class="w-full bg-gray-50 text-gray-700 text-xs px-2 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[rgb(235,102,55)] focus:border-transparent"
                                />
                            </div>
                            <div>
                                <input 
                                    type="number" 
                                    v-model="ancho"
                                    placeholder="Ancho (cm)"
                                    min="1"
                                    step="0.1"
                                    class="w-full bg-gray-50 text-gray-700 text-xs px-2 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[rgb(235,102,55)] focus:border-transparent"
                                />
                            </div>
                            <div>
                                <input 
                                    type="number" 
                                    v-model="largo"
                                    placeholder="Largo (cm)"
                                    min="1"
                                    step="0.1"
                                    class="w-full bg-gray-50 text-gray-700 text-xs px-2 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[rgb(235,102,55)] focus:border-transparent"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                <button 
                    @click="cotizar"
                    class="w-full mt-4 bg-[rgb(235,102,55)] hover:bg-[rgba(235,102,55,0.9)] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                    Cotizar Envío
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineEmits } from 'vue'

const emit = defineEmits(['abrio', 'cerro'])

const isExpanded = ref(false)
const origen = ref('')
const destino = ref('')
const peso = ref('')
const altura = ref('')
const ancho = ref('')
const largo = ref('')
const isDesktop = ref(false)

const updateViewport = () => {
    isDesktop.value = window.innerWidth >= 768
}

onMounted(() => {
    updateViewport()
    window.addEventListener('resize', updateViewport)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateViewport)
})

const toggleExpanded = () => {
    isExpanded.value = !isExpanded.value
    if (isExpanded.value) emit('abrio')
    else emit('cerro')
}

const cotizar = () => {
    if (origen.value.trim() && destino.value.trim() && peso.value && altura.value && ancho.value && largo.value) {
        console.log('Cotizando envío:', {
            origen: origen.value,
            destino: destino.value,
            peso: peso.value,
            dimensiones: {
                altura: altura.value,
                ancho: ancho.value,
                largo: largo.value
            }
        })
        alert(`Cotizando envío de ${origen.value} a ${destino.value}\nPeso: ${peso.value}kg\nDimensiones: ${altura.value}x${ancho.value}x${largo.value}cm`)
    } else {
        alert('Por favor completa todos los campos')
    }
}
</script>
