<template> 
    <div class="pb-8">
        <div class="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg mb-8">
            <!-- Título del formulario -->
            <div class="text-center mb-8">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Crear Cuenta</h2>
                <p class="text-gray-600">Complete sus datos para registrarse</p>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-6">
                <!-- Nombre y Apellidos -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                        <input v-model="formData.nombre" type="text" placeholder="Ingrese su nombre"
                            class="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgba(235,102,55,255)] focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                            required>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Apellidos</label>
                        <input v-model="formData.apellidos" type="text" placeholder="Ingrese sus apellidos"
                            class="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgba(235,102,55,255)] focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400"
                            required>
                    </div>
                </div>

                <!-- Tipo de documento y Número -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Tipo de documento</label>
                        <div class="relative">
                            <select v-model="formData.tipoDocumento"
                                class="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgba(235,102,55,255)] focus:border-transparent transition-all duración-300 text-gray-700 bg-white appearance-none"
                                required>
                                <option value="">Seleccione tipo</option>
                                <option value="CC">Cédula de Ciudadanía</option>
                                <option value="TI">Tarjeta de Identidad</option>
                                <option value="CE">Cédula de Extranjería</option>
                                <option value="PP">Pasaporte</option>
                                <option value="NIT">NIT</option>
                            </select>
                            <svg class="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Número de documento</label>
                        <input v-model="formData.numeroDocumento" type="text" placeholder="Número de documento"
                            class="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgba(235,102,55,255)] focus:border-transparent transition-all duración-300 text-gray-700 placeholder-gray-400"
                            required>
                    </div>
                </div>

                <!-- Correo electrónico -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                    <input v-model="formData.email" type="email" placeholder="correo@ejemplo.com"
                        class="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgba(235,102,55,255)] focus:border-transparent transition-all duración-300 text-gray-700 placeholder-gray-400"
                        required>
                </div>

                <!-- Teléfono -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                    <input v-model="formData.telefono" type="tel" placeholder="Número de teléfono"
                        class="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgba(235,102,55,255)] focus:border-transparent transition-all duración-300 text-gray-700 placeholder-gray-400"
                        required>
                </div>

                <!-- Dirección -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Dirección</label>
                    <input v-model="formData.direccion" type="text" placeholder="Dirección completa"
                        class="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgba(235,102,55,255)] focus:border-transparent transition-all duración-300 text-gray-700 placeholder-gray-400"
                        required>
                </div>

                <!-- Fecha de nacimiento -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Fecha de nacimiento</label>
                    <div class="relative">
                        <input v-model="fechaFormateada" @click="mostrarCalendario = !mostrarCalendario" type="text"
                            placeholder="Seleccione su fecha de nacimiento" readonly
                            class="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[rgba(235,102,55,255)] focus:border-transparent transition-all duración-300 text-gray-700 placeholder-gray-400 cursor-pointer"
                            required>
                        <svg class="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>

                        <!-- Calendario personalizado -->
                        <div v-if="mostrarCalendario"
                            class="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-slideDown">
                            <!-- Header del calendario -->
                            <div class="bg-gradient-to-r from-[rgba(235,102,55,255)] to-orange-600 text-white p-4">
                                <div class="flex items-center justify-between">
                                    <button @click="cambiarMes(-1)" type="button"
                                        class="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors duration-200">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <div class="text-center">
                                        <div class="font-semibold text-lg">{{ nombreMes }} {{ añoActual }}</div>
                                    </div>
                                    <button @click="cambiarMes(1)" type="button"
                                        class="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors duration-200">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>

                                <!-- Input de año -->
                                <div class="flex items-center justify-center mt-3 gap-3 px-3">
                                    <div class="relative w-32">
                                        <input v-model.number="añoInput" @input="validarYCambiarAño"
                                            @blur="validarAñoCompleto" type="number" :min="añoMinimo"
                                            :max="añoMaximo" placeholder="Año"
                                            class="w-full px-3 py-2 bg-white bg-opacity-20 rounded-lg text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-40 placeholder-white placeholder-opacity-70 text-center"
                                            :class="{ 'border-2 border-red-300': errorAño }">
                                        <!-- Mantengo el bloque original pero oculto para que no tape el calendario -->
                                        <div v-if="errorAño"
                                            class="hidden absolute top-full left-0 right-0 mt-1 text-xs text-red-200 text-center bg-red-500 bg-opacity-20 rounded px-2 py-1">
                                            {{ mensajeErrorAño }}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Error visible y estético debajo del header -->
                            <div v-if="errorAño"
                                 class="px-3 py-2 text-xs text-red-600 text-center bg-red-50 border-t border-red-100">
                                {{ mensajeErrorAño }}
                            </div>

                            <!-- Días de la semana -->
                            <div class="grid grid-cols-7 bg-gray-50">
                                <div v-for="dia in diasSemana" :key="dia"
                                    class="p-3 text-center text-sm font-medium text-gray-600">
                                    {{ dia }}
                                </div>
                            </div>

                            <!-- Días del mes -->
                            <div class="grid grid-cols-7 p-2">
                                <button v-for="dia in diasDelMes" :key="dia.fecha"
                                    @click="seleccionarFecha(dia)" type="button" :disabled="!dia.esDelMes"
                                    :class="[
                                        'p-3 text-sm rounded-lg transition-all duration-200 transform hover:scale-105',
                                        dia.esDelMes ? 'hover:bg-orange-100 text-gray-700' :
                                        'text-gray-300 cursor-not-allowed',
                                        dia.esHoy ? 'bg-blue-100 text-blue-600 font-semibold' : '',
                                        dia.estaSeleccionado ?
                                        'bg-[rgba(235,102,55,255)] text-white font-semibold shadow-lg' : '',
                                        !dia.esDelMes ? 'opacity-30' : ''
                                    ]">
                                    {{ dia . numero }}
                                </button>
                            </div>

                            <!-- Footer calendario -->
                            <div class="border-t bg-gray-50 p-3 flex justify-end space-x-2">
                                <button @click="limpiarFecha" type="button"
                                    class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                                    Limpiar
                                </button>
                                <button @click="mostrarCalendario = false" type="button"
                                    class="px-4 py-2 bg-[rgba(235,102,55,255)] text-white rounded-lg hover:bg-orange-600 transition-colors duration-200">
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Términos y condiciones -->
                <div class="flex items-start space-x-3">
                    <input v-model="formData.aceptaTerminos" type="checkbox" id="terminos"
                        class="mt-1 w-4 h-4 text-[rgba(235,102,55,255)] bg-gray-100 border-gray-300 rounded focus:ring-[rgba(235,102,55,255)] focus:ring-2"
                        required>
                    <label for="terminos" class="text-sm text-gray-700">
                        Acepto los
                        <!-- 🔗 ahora es un router-link a la ruta de T&C -->
                        <router-link to="/terminos-condiciones"
                            class="text-[rgb(248,112,62)] hover:underline font-medium">
                            términos y condiciones
                        </router-link>
                        y la
                        <a href="#" class="text-[rgba(235,102,55,255)] hover:underline font-medium">política de
                            privacidad</a>
                    </label>
                </div>

                <!-- Botón de registro -->
                <div class="pt-4">
                    <button type="submit" :disabled="isSubmitting || !formData.aceptaTerminos"
                        class="w-full bg-[rgba(235,102,55,255)] hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed">
                        <span v-if="!isSubmitting" class="flex items-center justify-center space-x-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                            <span>Crear Cuenta</span>
                        </span>
                        <span v-else class="flex items-center justify-center space-x-2">
                            <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10"
                                    stroke="currentColor" stroke-width="4" />
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>Creando cuenta...</span>
                        </span>
                    </button>
                </div>

                <!-- Enlaces adicionales -->
                <div class="text-center pt-4 border-t border-gray-100">
                    <p class="text-sm text-gray-600">
                        ¿Ya tienes cuenta?
                        <router-link to="/sesion" class="text-[rgba(235,102,55,255)] hover:underline font-medium">
                            Inicia sesión aquí
                        </router-link>
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'FormularioRegistro',
        data() {
            return {
                isSubmitting: false,
                mostrarCalendario: false,
                mesActual: new Date().getMonth(),
                añoActual: new Date().getFullYear(),
                añoInput: new Date().getFullYear(),
                fechaSeleccionada: null,
                errorAño: false,
                mensajeErrorAño: '',
                diasSemana: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
                meses: [
                    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
                ],
                formData: {
                    nombre: '',
                    apellidos: '',
                    tipoDocumento: '',
                    numeroDocumento: '',
                    email: '',
                    telefono: '',
                    direccion: '',
                    fechaNacimiento: '',
                    aceptaTerminos: false
                }
            }
        },
        computed: {
            nombreMes() {
                return this.meses[this.mesActual]
            },
            añoMinimo() {
                return new Date().getFullYear() - 90
            },
            añoMaximo() {
                return new Date().getFullYear() - 18
            },
            fechaFormateada() {
                if (!this.fechaSeleccionada) return ''
                const opciones = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }
                return this.fechaSeleccionada.toLocaleDateString('es-ES', opciones)
            },
            diasDelMes() {
                const dias = []
                const fecha = new Date(this.añoActual, this.mesActual, 1)
                const primerDia = fecha.getDay()
                const ultimoDia = new Date(this.añoActual, this.mesActual + 1, 0).getDate()
                const hoy = new Date()

                // del mes anterior
                const mesAnterior = new Date(this.añoActual, this.mesActual, 0).getDate()
                for (let i = primerDia - 1; i >= 0; i--) {
                    dias.push({
                        numero: mesAnterior - i,
                        fecha: new Date(this.añoActual, this.mesActual - 1, mesAnterior - i),
                        esDelMes: false,
                        esHoy: false,
                        estaSeleccionado: false
                    })
                }

                // mes actual
                for (let dia = 1; dia <= ultimoDia; dia++) {
                    const fechaDia = new Date(this.añoActual, this.mesActual, dia)
                    dias.push({
                        numero: dia,
                        fecha: fechaDia,
                        esDelMes: true,
                        esHoy: fechaDia.toDateString() === hoy.toDateString(),
                        estaSeleccionado: this.fechaSeleccionada &&
                            fechaDia.toDateString() === this.fechaSeleccionada.toDateString()
                    })
                }

                // siguiente
                const diasRestantes = 42 - dias.length
                for (let dia = 1; dia <= diasRestantes; dia++) {
                    dias.push({
                        numero: dia,
                        fecha: new Date(this.añoActual, this.mesActual + 1, dia),
                        esDelMes: false,
                        esHoy: false,
                        estaSeleccionado: false
                    })
                }
                return dias
            }
        },
        methods: {
            validarYCambiarAño() {
                this.errorAño = false
                this.mensajeErrorAño = ''

                const valor = Number(this.añoInput)

                // Validar formato (4 dígitos)
                if (!Number.isInteger(valor) || this.añoInput.toString().length !== 4) {
                    this.errorAño = true
                    this.mensajeErrorAño = 'Ingrese un año válido (4 dígitos)'
                    return
                }

                // Máximo: debe ser mayor o igual a 18 años
                if (valor > this.añoMaximo) {
                    this.errorAño = true
                    this.mensajeErrorAño = 'Debe ser mayor de 18 años'
                    this.añoInput = this.añoMaximo
                    return
                }

                // Mínimo: edad máxima 90 años
                if (valor < this.añoMinimo) {
                    this.errorAño = true
                    this.mensajeErrorAño = 'Edad máxima: 90 años'
                    this.añoInput = this.añoMinimo
                    return
                }

                // Año permitido
                this.añoActual = valor

                // Si está en el año máximo (justo 18 años), no permitir meses futuros
                const mesHoy = new Date().getMonth()
                if (this.añoActual === this.añoMaximo && this.mesActual > mesHoy) {
                    this.mesActual = mesHoy
                }
            },
            validarAñoCompleto() {
                const valor = Number(this.añoInput)

                if (!Number.isInteger(valor) || this.añoInput.toString().length !== 4) {
                    this.errorAño = true;
                    this.mensajeErrorAño = 'Ingrese un año válido (4 dígitos)';
                    return
                }
                if (valor < this.añoMinimo) {
                    this.errorAño = true
                    this.mensajeErrorAño = 'Edad máxima: 90 años'
                    return
                }
                if (valor > this.añoMaximo) {
                    this.errorAño = true
                    this.mensajeErrorAño = 'Debe ser mayor de 18 años'
                    return
                }
                this.errorAño = false;
                this.mensajeErrorAño = ''
            },
            cambiarMes(direccion) {
                const hoy = new Date()
                this.mesActual += direccion
                if (this.mesActual < 0) {
                    this.mesActual = 11;
                    this.añoActual--;
                } else if (this.mesActual > 11) {
                    this.mesActual = 0;
                    this.añoActual++;
                }

                // Mantener año dentro del rango
                if (this.añoActual < this.añoMinimo) {
                    this.añoActual = this.añoMinimo
                    this.mesActual = 0
                }
                if (this.añoActual > this.añoMaximo) {
                    this.añoActual = this.añoMaximo
                    if (this.mesActual > hoy.getMonth()) this.mesActual = hoy.getMonth()
                }

                this.añoInput = this.añoActual
            },
            seleccionarFecha(dia) {
                if (!dia.esDelMes) return

                // Bloquear fechas que dejen < 18 años
                const hoy = new Date()
                let edad = hoy.getFullYear() - dia.fecha.getFullYear()
                const mesActual = hoy.getMonth()
                const mesNacimiento = dia.fecha.getMonth()
                if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < dia.fecha.getDate())) {
                    edad = edad - 1
                }
                if (edad < 18) {
                    this.errorAño = true
                    this.mensajeErrorAño = 'Debe ser mayor de 18 años'
                    return
                }

                this.fechaSeleccionada = dia.fecha
                this.formData.fechaNacimiento = dia.fecha.toISOString().split('T')[0]
                this.mostrarCalendario = false
                this.errorAño = false
                this.mensajeErrorAño = ''
            },
            limpiarFecha() {
                this.fechaSeleccionada = null
                this.formData.fechaNacimiento = ''
                this.mostrarCalendario = false
            },
            async handleSubmit() {
                this.isSubmitting = true
                try {
                    const validacionEdad = this.validarEdadCompleta()
                    if (!validacionEdad.valida) {
                        alert(validacionEdad.mensaje);
                        return
                    }

                    await new Promise(r => setTimeout(r, 2000))
                    console.log('Datos de registro:', this.formData)
                    alert('¡Cuenta creada exitosamente!')
                    this.resetForm()
                } catch (e) {
                    console.error('Error al crear cuenta:', e)
                    alert('Error al crear la cuenta. Intente nuevamente.')
                } finally {
                    this.isSubmitting = false
                }
            },
            validarEdadCompleta() {
                if (!this.formData.fechaNacimiento) {
                    return {
                        valida: false,
                        mensaje: 'Debe seleccionar su fecha de nacimiento'
                    }
                }
                const fechaNacimiento = new Date(this.formData.fechaNacimiento)
                const hoy = new Date()
                let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
                const mesActual = hoy.getMonth()
                const mesNacimiento = fechaNacimiento.getMonth()
                if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < fechaNacimiento
                        .getDate())) {
                    edad = edad - 1
                }
                if (edad < 18) return {
                    valida: false,
                    mensaje: 'Debe ser mayor de 18 años para registrarse'
                }
                if (edad > 90) return {
                    valida: false,
                    mensaje: 'La edad máxima permitida es de 90 años'
                }
                return {
                    valida: true,
                    mensaje: ''
                }
            },
            resetForm() {
                this.formData = {
                    nombre: '',
                    apellidos: '',
                    tipoDocumento: '',
                    numeroDocumento: '',
                    email: '',
                    telefono: '',
                    direccion: '',
                    fechaNacimiento: '',
                    aceptaTerminos: false
                }
                this.fechaSeleccionada = null
                this.añoInput = new Date().getFullYear()
                this.añoActual = new Date().getFullYear()
                this.errorAño = false
                this.mensajeErrorAño = ''
            }
        },
        mounted() {
            // ✅ Marcar automáticamente la casilla si vienes desde /terminos-condiciones?aceptaTerminos=1
            const q = this.$route.query
            if (q.aceptaTerminos === '1' || q.terminos === 'true' || q.accepted === 'true') {
                this.formData.aceptaTerminos = true
            }

            // Cerrar calendario al hacer clic fuera (tu lógica original)
            document.addEventListener('click', (e) => {
                if (!this.$el.contains(e.target)) {
                    this.mostrarCalendario = false
                }
            })
        }
    }
</script>


<style scoped>
    .transform {
        transition: transform 0.2s ease-in-out;
    }

    input:focus,
    select:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(235, 102, 55, 0.1);
    }

    input:hover,
    select:hover {
        border-color: rgba(235, 102, 55, 0.3);
    }

    input::placeholder {
        color: #9CA3AF;
        opacity: 1;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }

    select {
        background-image: none;
    }

    button:disabled {
        transform: none !important;
    }

    input[type="checkbox"]:checked {
        background-color: rgba(235, 102, 55, 255);
        border-color: rgba(235, 102, 55, 255);
    }

    @media (max-width: 640px) {
        .grid-cols-2 {
            grid-template-columns: 1fr;
        }
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
        }

        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    .animate-slideDown {
        animation: slideDown 0.2s ease-out;
    }

    .calendar-day:hover {
        transform: scale(1.05);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    button {
        transition: all 0.2s ease-in-out;
    }

    .shadow-2xl {
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
</style>
