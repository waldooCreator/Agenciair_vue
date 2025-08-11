<template>
    <div class="pb-8">
        <div class="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-lg mb-8">
            <!-- Título del formulario -->
            <div class="text-center mb-8">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Iniciar Sesión</h2>
                <p class="text-gray-600">Ingresa tus credenciales para acceder</p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
                <!-- Email o Documento -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Correo electrónico o documento
                    </label>
                    <input v-model="formData.usuario" type="text" placeholder="correo@ejemplo.com o número de documento"
                        class="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgba(235,102,55,255)] focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                        required>
                </div>

                <!-- Contraseña -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                        Contraseña
                    </label>
                    <div class="relative">
                        <input v-model="formData.password" 
                            :type="mostrarPassword ? 'text' : 'password'" 
                            placeholder="Ingresa tu contraseña"
                            class="w-full px-4 py-4 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgba(235,102,55,255)] focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                            required>
                        <button @click="mostrarPassword = !mostrarPassword" type="button"
                            class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                            <svg v-if="!mostrarPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Recordarme y Olvidé contraseña -->
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                        <input v-model="formData.recordarme" type="checkbox" id="recordarme"
                            class="w-4 h-4 text-[rgba(235,102,55,255)] bg-gray-100 border-gray-300 rounded focus:ring-[rgba(235,102,55,255)] focus:ring-2">
                        <label for="recordarme" class="text-sm text-gray-700">
                            Recordarme
                        </label>
                    </div>
                    <a href="#" @click="recuperarPassword" class="text-sm text-[rgba(235,102,55,255)] hover:underline font-medium">
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>

                <!-- Mostrar error si existe -->
                <div v-if="error" class="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div class="flex items-center">
                        <svg class="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="text-sm text-red-700">{{ error }}</p>
                    </div>
                </div>

                <!-- Botón de inicio de sesión -->
                <div class="pt-4">
                    <button type="submit" :disabled="isSubmitting"
                        class="w-full bg-[rgba(235,102,55,255)] hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
                        <span v-if="!isSubmitting" class="flex items-center justify-center space-x-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            <span>Iniciar Sesión</span>
                        </span>
                        <span v-else class="flex items-center justify-center space-x-2">
                            <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10"
                                    stroke="currentColor" stroke-width="4" />
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>Iniciando sesión...</span>
                        </span>
                    </button>
                </div>

                <!-- Separador -->
                <div class="relative my-6">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-200"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                        <span class="px-4 bg-white text-gray-500">O continúa con</span>
                    </div>
                </div>

                <!-- Botones de redes sociales -->
                <div class="grid grid-cols-2 gap-4">
                    <button @click="loginConGoogle" type="button"
                        class="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                        <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24">
                            <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <span class="text-sm font-medium text-gray-700">Google</span>
                    </button>
                    
                    <button @click="loginConFacebook" type="button"
                        class="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                        <svg class="w-5 h-5 mr-2" fill="#1877f2" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        <span class="text-sm font-medium text-gray-700">Facebook</span>
                    </button>
                </div>

                <!-- Enlaces adicionales -->
                <div class="text-center pt-4 border-t border-gray-100">
                    <p class="text-sm text-gray-600">
                        ¿No tienes cuenta?
                        <router-link to="/register" class="text-[rgba(235,102,55,255)] hover:underline font-medium">
                            Regístrate aquí
                        </router-link>
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FormularioSesion',
        data() {
            return {
                isSubmitting: false,
                mostrarPassword: false,
                error: '',
                formData: {
                    usuario: '',
                    password: '',
                    recordarme: false
                }
            }
        },
        methods: {
            async handleSubmit() {
                this.isSubmitting = true
                this.error = ''

                try {
                    // Validaciones básicas
                    if (!this.formData.usuario.trim()) {
                        throw new Error('Por favor ingresa tu correo o documento')
                    }

                    if (!this.formData.password.trim()) {
                        throw new Error('Por favor ingresa tu contraseña')
                    }

                    if (this.formData.password.length < 6) {
                        throw new Error('La contraseña debe tener al menos 6 caracteres')
                    }

                    // Simular procesamiento
                    await new Promise(resolve => setTimeout(resolve, 2000))

                    console.log('Datos de login:', {
                        usuario: this.formData.usuario,
                        recordarme: this.formData.recordarme
                    })

                    // Aquí puedes agregar tu lógica de autenticación
                    // Ejemplo: const response = await this.$http.post('/api/login', this.formData)

                    // Simular respuesta exitosa
                    const loginExitoso = Math.random() > 0.3 // 70% de éxito para demo

                    if (loginExitoso) {
                        // Mostrar mensaje de éxito
                        alert('¡Inicio de sesión exitoso!')
                        
                        // Redirigir al dashboard o página principal
                        // this.$router.push('/dashboard')
                        
                        this.resetForm()
                    } else {
                        throw new Error('Credenciales incorrectas. Verifica tu usuario y contraseña.')
                    }

                } catch (error) {
                    console.error('Error al iniciar sesión:', error)
                    this.error = error.message || 'Error al iniciar sesión. Intente nuevamente.'
                } finally {
                    this.isSubmitting = false
                }
            },

            recuperarPassword() {
                alert('Función de recuperar contraseña - Redirigir a formulario de recuperación')
                // Aquí puedes redirigir a una página de recuperación de contraseña
                // this.$router.push('/recuperar-password')
            },

            async loginConGoogle() {
                try {
                    console.log('Iniciando sesión con Google...')
                    // Aquí integrarías con Google OAuth
                    alert('Función de Google login - Por implementar')
                } catch (error) {
                    console.error('Error con Google login:', error)
                    this.error = 'Error al iniciar sesión con Google'
                }
            },

            async loginConFacebook() {
                try {
                    console.log('Iniciando sesión con Facebook...')
                    // Aquí integrarías con Facebook SDK
                    alert('Función de Facebook login - Por implementar')
                } catch (error) {
                    console.error('Error con Facebook login:', error)
                    this.error = 'Error al iniciar sesión con Facebook'
                }
            },

            resetForm() {
                this.formData = {
                    usuario: '',
                    password: '',
                    recordarme: false
                }
                this.error = ''
                this.mostrarPassword = false
            }
        },
        mounted() {
            // Enfocar el primer input cuando se monta el componente
            this.$nextTick(() => {
                const firstInput = this.$el.querySelector('input[type="text"]')
                if (firstInput) {
                    firstInput.focus()
                }
            })
        }
    }
</script>

<style scoped>
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

    /* Animación para el botón */
    .transform {
        transition: transform 0.2s ease-in-out;
    }

    /* Animación suave para el botón deshabilitado */
    button:disabled {
        transform: none !important;
    }

    /* Estilos para checkbox */
    input[type="checkbox"]:checked {
        background-color: rgba(235, 102, 55, 255);
        border-color: rgba(235, 102, 55, 255);
    }

    /* Efectos hover para botones sociales */
    button[type="button"]:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    /* Transiciones suaves */
    button, input {
        transition: all 0.2s ease-in-out;
    }

    /* Mejora visual en dispositivos móviles */
    @media (max-width: 640px) {
        .grid-cols-2 {
            grid-template-columns: 1fr;
        }
        
        .max-w-xl {
            max-width: 95%;
        }
    }

    /* Estilo para mensajes de error */
    .bg-red-50 {
        background-color: #fef2f2;
    }

    .border-red-200 {
        border-color: #fecaca;
    }

    .text-red-700 {
        color: #b91c1c;
    }

    .text-red-400 {
        color: #f87171;
    }
</style>