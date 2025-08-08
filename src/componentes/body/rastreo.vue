<template>
    <div class="relative w-full max-w-md mx-auto z-10">
        <!-- Barra compacta (siempre visible) -->
        <div 
            class="flex items-center justify-between bg-white rounded-full shadow-md px-4 py-3 cursor-pointer hover:shadow-lg transition-shadow"
            @click="toggleExpanded"
        >
            <span class="text-sm text-gray-700 font-medium">
                Rastrear Envio
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
                <div class="mb-3">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Digita el número de guía:
                    </label>
                    <input 
                        type="text" 
                        v-model="numeroGuia"
                        placeholder="Ej: 123456789"
                        class="w-full bg-gray-50 text-gray-700 text-sm px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[rgb(235,102,55)] focus:border-transparent"
                    />
                </div>
                <button 
                    @click="rastrear"
                    class="w-full bg-[rgb(235,102,55)] hover:bg-[rgba(235,102,55,0.9)] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                    Rastrear
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const isExpanded = ref(false)
const numeroGuia = ref('')

const toggleExpanded = () => {
    isExpanded.value = !isExpanded.value
}

const rastrear = () => {
    if (numeroGuia.value.trim()) {
        console.log('Rastreando:', numeroGuia.value)
        // Aquí puedes agregar la lógica para rastrear
        // Por ejemplo, hacer una llamada a la API
    } else {
        alert('Por favor ingresa un número de guía válido')
    }
}

// Función para copiar al portapapeles (opcional)
const copiarNumero = () => {
    if (numeroGuia.value) {
        navigator.clipboard.writeText(numeroGuia.value)
    }
}
</script>

<style scoped>
/* Estilos adicionales si necesitas personalizar más */
</style>