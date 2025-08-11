<template>
    <div class="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
        <!-- Título del formulario -->
        <div class="text-center mb-8">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Hacer Pedido</h2>
            <p class="text-gray-600">Complete la información para procesar su envío</p>
        </div>

        <!-- Selector de tipo de envío -->
        <div class="mb-8">
            <div class="flex justify-center">
                <div class="inline-flex bg-gray-100 rounded-full p-1">
                    
                    <button
                        class="px-6 py-2 bg-[rgba(235,102,55,255)] text-white rounded-full flex items-center space-x-2 shadow-md transition-all duration-300">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1v6m6-6v6" />
                        </svg>
                        <span>Paquetes</span>
                    </button>
                </div>
            </div>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Ciudad de origen -->
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                    Ciudad de origen
                </label>
                <div class="relative">
                    <input v-model="formData.ciudadOrigen" type="text" placeholder="Seleccione ciudad de origen"
                        class="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgba(235,102,55,255)] focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                        required>
                    <svg class="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            <!-- Ciudad de destino -->
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                    Ciudad de destino
                </label>
                <div class="relative">
                    <input v-model="formData.ciudadDestino" type="text" placeholder="Seleccione ciudad de destino"
                        class="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgba(235,102,55,255)] focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                        required>
                    <svg class="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            <!-- Dimensiones del paquete -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Alto (cm)
                    </label>
                    <input v-model="formData.alto" type="number" placeholder="0" min="1"
                        class="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgba(235,102,55,255)] focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                        required>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Largo (cm)
                    </label>
                    <input v-model="formData.largo" type="number" placeholder="0" min="1"
                        class="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgba(235,102,55,255)] focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                        required>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Ancho (cm)
                    </label>
                    <input v-model="formData.ancho" type="number" placeholder="0" min="1"
                        class="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgba(235,102,55,255)] focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                        required>
                </div>
            </div>

            <!-- Peso mínimo -->
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                    Peso mínimo: 1kg
                </label>
                <input v-model="formData.peso" type="number" placeholder="1" min="1" step="0.1"
                    class="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgba(235,102,55,255)] focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                    required>
            </div>

            <!-- Valor declarado -->
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                    Valor declarado mínimo (USD): 10
                </label>
                <input v-model="formData.valorDeclarado" type="number" placeholder="10" min="10"
                    class="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgba(235,102,55,255)] focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                    required>
            </div>

            <!-- Botón de envío -->
            <div class="pt-4">
                <button type="submit" :disabled="isSubmitting"
                    class="w-full bg-[rgba(235,102,55,255)] hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
                    <span v-if="!isSubmitting" class="flex items-center justify-center space-x-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        <span>Hacer Pedido</span>
                    </span>
                    <span v-else class="flex items-center justify-center space-x-2">
                        <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                stroke-width="4" />
                            <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Procesando...</span>
                    </span>
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'FormularioPedido',
        data() {
            return {
                isSubmitting: false,
                formData: {
                    ciudadOrigen: '',
                    ciudadDestino: '',
                    alto: '',
                    largo: '',
                    ancho: '',
                    peso: '',
                    valorDeclarado: ''
                }
            }
        },
        methods: {
            async handleSubmit() {
                this.isSubmitting = true

                try {
                    // Simular procesamiento
                    await new Promise(resolve => setTimeout(resolve, 2000))

                    console.log('Datos del pedido:', this.formData)

                    // Aquí puedes agregar tu lógica de envío
                    // Ejemplo: await this.$http.post('/api/pedidos', this.formData)

                    // Mostrar mensaje de éxito
                    alert('¡Pedido enviado exitosamente!')

                    // Limpiar formulario
                    this.resetForm()

                } catch (error) {
                    console.error('Error al enviar pedido:', error)
                    alert('Error al procesar el pedido. Intente nuevamente.')
                } finally {
                    this.isSubmitting = false
                }
            },

            resetForm() {
                this.formData = {
                    ciudadOrigen: '',
                    ciudadDestino: '',
                    alto: '',
                    largo: '',
                    ancho: '',
                    peso: '',
                    valorDeclarado: ''
                }
            }
        }
    }
</script>

<style scoped>
    /* Animación para el botón */
    .transform {
        transition: transform 0.2s ease-in-out;
    }

    /* Estados de focus mejorados */
    input:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(235, 102, 55, 0.1);
    }

    /* Hover effects para inputs */
    input:hover {
        border-color: rgba(235, 102, 55, 0.3);
    }

    /* Estilos para el placeholder */
    input::placeholder {
        color: #9CA3AF;
        opacity: 1;
    }

    /* Animación suave para el botón deshabilitado */
    button:disabled {
        transform: none !important;
    }

    /* Mejora visual en dispositivos móviles */
    @media (max-width: 640px) {
        .grid-cols-3 {
            grid-template-columns: 1fr;
        }
    }
</style>
