<template>
    <main class="min-h-screen bg-[rgb(241,241,240)]">
        <div class="py-6 md:py-12">
            <div class="container mx-auto px-4 md:px-6 lg:px-8">

                <!-- Header -->
                <div class="text-center mb-8 md:mb-12">
                    <div class="group relative inline-block mb-6">
                        <div
                            class="absolute -inset-0.5 bg-[rgb(248,112,62)] rounded-full blur opacity-75 group-hover:opacity-100 transition">
                        </div>
                        <div class="relative inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg">
                            <svg class="w-4 h-4 text-[rgb(248,112,62)]" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <span class="text-sm font-bold text-[rgb(58,26,29)] tracking-wider uppercase">
                                Cotizador
                            </span>
                        </div>
                    </div>

                    <h1
                        class="text-3xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[rgb(248,112,62)] to-[rgb(248,112,62)] bg-clip-text text-transparent leading-tight">
                        Cotiza tu envío
                    </h1>
                </div>

                <!-- Main Form -->
                <div class="max-w-4xl mx-auto">
                    <div class="relative group">
                        <div
                            class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500">
                        </div>

                        <div
                            class="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">

                            <!-- Tabs -->
                            <div class="border-b border-gray-100">
                                <div class="flex overflow-x-auto">
                                    <button v-for="tab in tabs" :key="tab.id" @click="activeTab = tab.id"
                                        :class="[
                                            'flex items-center gap-3 px-6 md:px-8 py-4 md:py-6 font-semibold transition-all duration-300 whitespace-nowrap',
                                            activeTab === tab.id ?
                                            'text-[rgb(248,112,62)] border-b-3 border-[rgb(248,112,62)] bg-[rgb(248,112,62)]/5' :
                                            'text-[rgb(58,26,29)] hover:text-[rgb(248,112,62)] hover:bg-[rgb(248,112,62)]/5'
                                        ]">
                                        <svg v-if="tab.id === 'documento'" class="w-4 h-4 md:w-5 md:h-5" fill="none"
                                            stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <svg v-else class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                        <span class="text-sm md:text-base">{{ tab . label }}</span>
                                    </button>
                                </div>
                            </div>

                            <div class="p-6 md:p-8 lg:p-10">
                                <!-- Locations -->
                                <div class="grid md:grid-cols-2 gap-6 mb-8">
                                    <div>
                                        <label class="block text-sm font-semibold text-[rgb(58,26,29)] mb-3">
                                            Lugar de origen
                                        </label>
                                        <input type="text" v-model="formData.origen"
                                            placeholder="Ingrese ciudad de origen"
                                            class="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-[rgb(248,112,62)] focus:ring-2 focus:ring-[rgb(248,112,62)]/20 outline-none transition-all duration-300 text-[rgb(58,26,29)]" />
                                    </div>

                                    <div>
                                        <label class="block text-sm font-semibold text-[rgb(58,26,29)] mb-3">
                                            Lugar de destino
                                        </label>
                                        <input type="text" v-model="formData.destino"
                                            placeholder="Ingrese ciudad de destino"
                                            class="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-[rgb(248,112,62)] focus:ring-2 focus:ring-[rgb(248,112,62)]/20 outline-none transition-all duration-300 text-[rgb(58,26,29)]" />
                                    </div>
                                </div>

                                <!-- Prohibited Items -->
                                <div class="mb-8">
                                    <label class="flex items-start gap-3 cursor-pointer">
                                        <input type="checkbox" v-model="isProhibited" class="sr-only" />
                                        <div
                                            :class="[
                                                'w-5 h-5 rounded border-2 flex items-center justify-center transition-all mt-1',
                                                isProhibited ? 'border-[rgb(248,112,62)] bg-[rgb(248,112,62)]' :
                                                'border-gray-300'
                                            ]">
                                            <svg v-if="isProhibited" class="w-3 h-3 text-white" fill="currentColor"
                                                viewBox="0 0 20 20">
                                                <path fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <span class="text-sm text-[rgb(248,112,62)] font-medium">
                                            Declaro que mi envío no es <strong>Mercancía de Prohibido
                                                Transporte</strong>
                                        </span>
                                    </label>
                                </div>

                                <!-- Package Details -->
                                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                    <div>
                                        <label class="block text-sm font-semibold text-[rgb(58,26,29)] mb-3">
                                            Cantidad
                                        </label>
                                        <input type="number" v-model="formData.cantidad"
                                            class="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-[rgb(248,112,62)] focus:ring-2 focus:ring-[rgb(248,112,62)]/20 outline-none transition-all duration-300 text-[rgb(58,26,29)]" />
                                    </div>

                                    <div>
                                        <label class="block text-sm font-semibold text-[rgb(58,26,29)] mb-3">
                                            Peso
                                        </label>
                                        <div class="relative">
                                            <input type="number" v-model="formData.peso"
                                                class="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-[rgb(248,112,62)] focus:ring-2 focus:ring-[rgb(248,112,62)]/20 outline-none transition-all duration-300 text-[rgb(58,26,29)] pr-12" />
                                            <span
                                                class="absolute right-4 top-1/2 transform -translate-y-1/2 text-[rgb(248,112,62)] font-bold text-sm">
                                                kg
                                            </span>
                                        </div>
                                    </div>

                                    <div class="lg:col-span-2">
                                        <label class="block text-sm font-semibold text-[rgb(58,26,29)] mb-3">
                                            Dimensiones (cm)
                                        </label>
                                        <div class="grid grid-cols-3 gap-3">
                                            <input type="number" v-model="formData.largo" placeholder="Largo"
                                                class="w-full px-3 py-4 rounded-2xl border border-gray-200 focus:border-[rgb(248,112,62)] focus:ring-2 focus:ring-[rgb(248,112,62)]/20 outline-none transition-all duration-300 text-[rgb(58,26,29)] text-sm" />
                                            <input type="number" v-model="formData.ancho" placeholder="Ancho"
                                                class="w-full px-3 py-4 rounded-2xl border border-gray-200 focus:border-[rgb(248,112,62)] focus:ring-2 focus:ring-[rgb(248,112,62)]/20 outline-none transition-all duration-300 text-[rgb(58,26,29)] text-sm" />
                                            <input type="number" v-model="formData.alto" placeholder="Alto"
                                                class="w-full px-3 py-4 rounded-2xl border border-gray-200 focus:border-[rgb(248,112,62)] focus:ring-2 focus:ring-[rgb(248,112,62)]/20 outline-none transition-all duration-300 text-[rgb(58,26,29)] text-sm" />
                                        </div>
                                    </div>
                                </div>

                                <!-- Quote Summary -->
                                <div class="grid md:grid-cols-2 gap-8">
                                    <!-- Pricing Details -->
                                    <div class="relative">
                                        <div
                                            class="absolute -inset-0.5 bg-[rgb(248,112,62)] rounded-2xl blur opacity-20">
                                        </div>
                                        <div class="relative bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                            <h3 class="text-lg font-bold text-[rgb(58,26,29)] mb-4">Desglose de costos
                                            </h3>
                                            <div class="space-y-3">
                                                <div class="flex justify-between items-center">
                                                    <span class="text-[rgb(58,26,29)]">Valor de envío</span>
                                                    <span class="font-bold text-[rgb(58,26,29)]">$
                                                        {{ valorEnvio }}</span>
                                                </div>
                                                <div class="flex justify-between items-center">
                                                    <span class="text-[rgb(58,26,29)]">Seguro del envío</span>
                                                    <span class="font-bold text-[rgb(58,26,29)]">$
                                                        {{ seguroEnvio }}</span>
                                                </div>
                                                <div class="border-t border-gray-300 pt-3">
                                                    <div class="flex justify-between items-center">
                                                        <span
                                                            class="text-lg font-bold text-[rgb(58,26,29)]">TOTAL</span>
                                                        <span class="text-2xl font-black text-[rgb(248,112,62)]">$
                                                            {{ totalCost }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Delivery Info -->
                                    <div class="relative">
                                        <div
                                            class="absolute -inset-0.5 bg-[rgb(248,112,62)] rounded-2xl blur opacity-20">
                                        </div>
                                        <div class="relative bg-gray-50 rounded-2xl p-6 border border-gray-200">
                                            <h3 class="text-lg font-bold text-[rgb(58,26,29)] mb-4">Información de
                                                entrega</h3>
                                            <div class="space-y-4">
                                                <div>
                                                    <span class="block text-sm text-[rgb(58,26,29)] mb-1">Tiempo de
                                                        entrega</span>
                                                    <span class="text-xl font-bold text-[rgb(248,112,62)]">3-4 días
                                                        hábiles</span>
                                                </div>
                                                <p class="text-sm text-[rgb(58,26,29)] italic">
                                                    *El TOTAL es un valor estimado, el envío está sujeto a verificación.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Action Buttons -->
                                <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                                    <button @click="solicitarRecoleccion"
                                        class="group relative overflow-hidden bg-[rgb(248,112,62)] hover:bg-[rgb(248,112,62)]/90 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                                        <span>Solicitar Recolección</span>
                                        <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>

                                    <button @click="acercarsePuntoServicio"
                                        class="group font-bold text-[rgb(248,112,62)] hover:text-[rgb(248,112,62)]/80 px-8 py-4 rounded-2xl bg-[rgb(248,112,62)]/10 hover:bg-[rgb(248,112,62)]/20 transition-all duration-300 flex items-center justify-center gap-3 border-2 border-[rgb(248,112,62)]/20 hover:border-[rgb(248,112,62)]/40">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span class="hidden sm:inline">Acércate a un Punto de Servicio</span>
                                        <span class="sm:hidden">Punto de Servicio</span>
                                    </button>

                                    <button @click="limpiarFormulario"
                                        class="group font-bold text-[rgb(248,112,62)] hover:text-white px-8 py-4 rounded-2xl bg-transparent hover:bg-[rgb(248,112,62)] border-2 border-[rgb(248,112,62)] transition-all duration-300 flex items-center justify-center gap-3">
                                        <span>Limpiar</span>
                                    </button>
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
    import {
        ref,
        computed
    } from 'vue'
    import {
        useRouter
    } from 'vue-router'

    const router = useRouter()

    // Reactive data
    const activeTab = ref('paquete')
    const isProhibited = ref(false)

    const formData = ref({
        cantidad: '1',
        peso: '15',
        largo: '20',
        ancho: '30',
        alto: '30',
        origen: '',
        destino: ''
    })

    // Tab configuration (solo paquetes y documentos)
    const tabs = ref([{
            id: 'documento',
            label: 'Documento'
        },
        {
            id: 'paquete',
            label: 'Paquete'
        }
    ])

    // Computed values for pricing
    const valorEnvio = computed(() => {
        return 72500
    })

    const seguroEnvio = computed(() => {
        return 10800
    })

    const totalCost = computed(() => {
        return valorEnvio.value + seguroEnvio.value
    })

    // Methods
    const solicitarRecoleccion = () => {
        // Preparar datos para el formulario de hacer envío
        const datosParaEnvio = {
            ciudadOrigen: formData.value.origen,
            ciudadDestino: formData.value.destino,
            alto: formData.value.alto,
            largo: formData.value.largo,
            ancho: formData.value.ancho,
            peso: formData.value.peso,
            tipoEnvio: activeTab.value,
            valorDeclarado: '10' // valor mínimo por defecto
        }

        // Navegar a la página hacer-envio con los datos
        router.push({
            name: 'HacerEnvio',
            params: datosParaEnvio
        })
    }

    const acercarsePuntoServicio = () => {
        console.log('Mostrando puntos de servicio...')
        // Aquí iría la lógica para mostrar puntos de servicio
    }

    const limpiarFormulario = () => {
        formData.value = {
            cantidad: '1',
            peso: '15',
            largo: '20',
            ancho: '30',
            alto: '30',
            origen: '',
            destino: ''
        }
        isProhibited.value = false
        activeTab.value = 'paquete'
    }
</script>

<style scoped>
    /* Custom styles for better visual effects */
    .backdrop-blur-sm {
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
    }

    /* Animation for tabs */
    .border-b-3 {
        border-bottom-width: 3px;
    }

    /* Smooth transitions */
    * {
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
    }

    /* Custom focus styles */
    input:focus,
    select:focus {
        box-shadow: 0 0 0 3px rgba(248, 112, 62, 0.1);
    }

    /* Hover animations */
    button:hover {
        transform: translateY(-1px);
    }

    /* Custom scrollbar for mobile tabs */
    .overflow-x-auto::-webkit-scrollbar {
        height: 4px;
    }

    .overflow-x-auto::-webkit-scrollbar-track {
        background: #f1f1f0;
    }

    .overflow-x-auto::-webkit-scrollbar-thumb {
        background: rgb(248, 112, 62);
        border-radius: 4px;
    }
</style>
