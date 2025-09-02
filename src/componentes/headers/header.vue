<template>
    <div
        class="bg-[rgba(235,102,55,255)] text-white rounded-full shadow-md relative flex items-center justify-between
      px-3 sm:px-4 md:px-8 lg:px-16
      py-4 sm:py-2.5 md:py-3
      w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:w-full
      mx-auto md:max-w-7xl
      mt-4 md:mt-4 mb-6 md:mb-10">
        <!-- LOGO -->
        <router-link to="/" class="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-bold">
            <img src="/images/image.png" alt="Agencia Ir"
                class="h-7 sm:h-8 md:h-9 lg:h-10 w-auto object-contain select-none" loading="lazy" decoding="async" />
            <span class="text-white">Agencia Ir</span>
        </router-link>

        <!-- BOTÓN HAMBURGUESA (móvil) -->
        <button @click="toggleMobileMenu"
            class="md:hidden flex flex-col items-center justify-center w-8 h-8 relative z-50" aria-label="Abrir menú">
            <span class="block w-6 h-0.5 bg-white mb-1 transition-all duration-300 transform"
                :class="{ 'rotate-45 translate-y-1.5 mb-0': mobileMenuOpen }"></span>
            <span class="block w-6 h-0.5 bg-white mb-1 transition-all duration-300"
                :class="{ 'opacity-0': mobileMenuOpen }"></span>
            <span class="block w-6 h-0.5 bg-white transition-all duration-300 transform"
                :class="{ '-rotate-45 -translate-y-1.5': mobileMenuOpen }"></span>
        </button>

        <!-- OVERLAY (cerrar al hacer click fuera, solo móvil) -->
        <div v-show="mobileMenuOpen" class="fixed inset-0 bg-black/10 md:hidden z-30" @click="closeMobileMenu"></div>

        <!-- MENÚ MÓVIL -->
        <div v-show="mobileMenuOpen" @click.stop
            class="md:hidden absolute top-full right-4 sm:right-6 mt-2 bg-white rounded-xl shadow-xl py-3
        w-[80vw] max-w-[350px] z-40 border border-gray-100">
            <!-- ENVÍA MÓVIL -->
            <div class="relative">
                <button @click="toggleMobileDropdown('envia')"
                    class="flex items-center justify-between w-full text-left text-orange-600 font-medium py-2.5 px-4 hover:bg-orange-50 transition duration-200">
                    <span>Envía</span>
                    <svg class="w-4 h-4 transform transition-transform duration-200"
                        :class="{ 'rotate-180': mobileDropdowns.envia }" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <div v-show="mobileDropdowns.envia" class="bg-orange-50 border-l-2 border-orange-200 ml-4 mr-2 rounded">
                    <!-- (1) Agregar iconos en móvil -->
                    <button @click="irAHacerEnvio"
                        class="flex items-center w-full text-left px-4 py-2 !text-[rgb(58,29,34)] hover:bg-orange-100 transition text-xs sm:text-[13px] font-medium leading-tight">
                        <svg class="w-4 h-4 mr-2 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 19l9 2-9-18-9 18 9-2m0 0v-8" />
                        </svg>
                        Hacer envío
                    </button>
                    <button @click="irACotizarEnvio"
                        class="flex items-center w-full text-left px-4 py-2 !text-[rgb(58,29,34)] hover:bg-orange-100 transition text-xs sm:text-[13px] font-medium leading-tight">
                        <svg class="w-4 h-4 mr-2 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M12 11h.01M12 17V7a5 5 0 00-10 0v10a5 5 0 0010 0z" />
                        </svg>
                        Cotiza tu envío
                    </button>
                </div>
            </div>

            <!-- SERVICIOS MÓVIL MEJORADO -->
            <div class="relative">
                <button @click="toggleMobileDropdown('servicios')"
                    class="flex items-center justify-between w-full text-left text-orange-600 font-medium py-2.5 px-4 hover:bg-orange-50 transition duration-200">
                    <span>Servicios</span>
                    <svg class="w-4 h-4 transform transition-transform duration-200"
                        :class="{ 'rotate-180': mobileDropdowns.servicios }" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <div v-show="mobileDropdowns.servicios"
                    class="bg-orange-50 border-l-2 border-orange-200 ml-4 mr-2 rounded">
                    <button @click="irARecoleccion"
                        class="flex items-center w-full text-left px-4 py-2.5 !text-[rgb(58,29,34)] hover:bg-orange-100 transition text-xs sm:text-[13px] font-medium leading-tight">
                        <svg class="w-4 h-4 mr-2 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        Recolección
                    </button>
                    <button @click="irAServicioEmbalaje"
                        class="flex items-center w-full text-left px-4 py-2.5 !text-[rgb(58,29,34)] hover:bg-orange-100 transition text-xs sm:text-[13px] font-medium leading-tight">
                        <svg class="w-4 h-4 mr-2 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 12l4-4 4 2 4-2 4 4" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2" />
                        </svg>
                        Embalaje
                    </button>
                    <button @click="irAAsesoria"
                        class="flex items-center w-full text-left px-4 py-2.5 !text-[rgb(58,29,34)] hover:bg-orange-100 transition text-xs sm:text-[13px] font-medium leading-tight">
                        <svg class="w-4 h-4 mr-2 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        Asesoría Comercial
                    </button>
                    <button @click="irAInvestigacion"
                        class="flex items-center w-full text-left px-4 py-2.5 !text-[rgb(58,29,34)] hover:bg-orange-100 transition text-xs sm:text-[13px] font-medium leading-tight">
                        <svg class="w-4 h-4 mr-2 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Nuevos Mercados
                    </button>
                </div>
            </div>

            <!-- NOSOTROS MÓVIL -->
            <div class="relative">
                <button @click="toggleMobileDropdown('nosotros')"
                    class="flex items-center justify-between w-full text-left text-orange-600 font-medium py-2.5 px-4 hover:bg-orange-50 transition duration-200">
                    <span>Nosotros</span>
                    <svg class="w-4 h-4 transform transition-transform duration-200"
                        :class="{ 'rotate-180': mobileDropdowns.nosotros }" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <div v-show="mobileDropdowns.nosotros"
                    class="bg-orange-50 border-l-2 border-orange-200 ml-4 mr-2 rounded">
                    <button @click="irANuestraHistoria"
                        class="flex items-center w-full text-left px-4 py-2.5 !text-[rgb(58,29,34)] hover:bg-orange-100 transition text-xs sm:text-[13px] font-medium leading-tight">
                        <svg class="w-4 h-4 mr-2 text-orange-500 flex-shrink-0" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Nuestra Historia
                    </button>
                </div>
            </div>

            <!-- Sesión -->
            <button @click="irASesion" @touchstart="irASesion"
                class="block w-full text-left text-orange-600 font-medium py-2.5 px-4 hover:bg-orange-50 transition duration-200">
                Iniciar sesión
            </button>
            <button @click="irARegistro" @touchstart="irARegistro"
                class="block w-full text-left text-orange-600 font-medium py-2.5 px-4 hover:bg-orange-50 transition duration-200">
                Regístrate
            </button>
        </div>

        <!-- MENÚ DESKTOP MEJORADO -->
        <div class="hidden md:flex gap-4 lg:gap-8 xl:gap-12 text-base lg:text-lg xl:text-xl font-medium relative">
            <!-- Envía -->
            <div class="relative" @mouseenter="mostrarDropdown('envia')" @mouseleave="ocultarDropdown('envia')">
                <button class="text-white font-medium border-b-2 border-transparent transition duration-300 py-1"
                    :class="{ 'border-white': dropdownsVisible.envia }">
                    Envía
                </button>
                <div v-show="dropdownsVisible.envia"
                    class="absolute left-0 mt-2 z-20 bg-white rounded-xl shadow-lg py-2 min-w-[160px]">
                    <button @click="irAHacerEnvio"
                        class="flex items-center w-full text-left px-6 py-2 !text-[rgb(58,29,34)] hover:bg-orange-100 transition text-[13px] lg:text-sm leading-tight font-semibold whitespace-nowrap">
                        <svg class="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 19l9 2-9-18-9 18 9-2m0 0v-8" />
                        </svg>
                        Hacer envío
                    </button>
                    <button @click="irACotizarEnvio"
                        class="flex items-center w-full text-left px-6 py-2 !text-[rgb(58,29,34)] hover:bg-orange-100 transition text-[13px] lg:text-sm leading-tight font-semibold whitespace-nowrap">
                        <svg class="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 14h.01M12 11h.01M12 17V7a5 5 0 00-10 0v10a5 5 0 0010 0z" />
                        </svg>
                        Cotizar envío
                    </button>
                </div>
            </div>

            <!-- Servicios MEJORADO DESKTOP -->
            <div class="relative" @mouseenter="mostrarDropdown('servicios')"
                @mouseleave="ocultarDropdown('servicios')">
                <button class="text-white font-medium border-b-2 border-transparent transition duration-300 py-1"
                    :class="{ 'border-white': dropdownsVisible.servicios }">
                    Servicios
                </button>
                <div v-show="dropdownsVisible.servicios"
                    class="absolute left-0 mt-2 z-20 bg-white rounded-xl shadow-xl py-3 min-w-[240px] border border-gray-100">
                    <button @click="irARecoleccion"
                        class="flex items-center w-full text-left px-6 py-3 !text-[rgb(58,29,34)] hover:bg-orange-50 hover:text-orange-600 transition group">
                        <svg class="w-5 h-5 mr-3 text-orange-500 group-hover:text-orange-600 flex-shrink-0"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        <div>
                            <div class="font-semibold text-sm">Recolección</div>
                            <div class="text-xs text-gray-500 leading-tight">Recogemos en tu fábrica</div>
                        </div>
                    </button>

                    <button @click="irAServicioEmbalaje"
                        class="flex items-center w-full text-left px-6 py-3 !text-[rgb(58,29,34)] hover:bg-orange-50 hover:text-orange-600 transition group">
                        <svg class="w-5 h-5 mr-3 text-orange-500 group-hover:text-orange-600 flex-shrink-0"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 12l4-4 4 2 4-2 4 4" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 8V6a2 2 0 012-2h4a2 2 0 012 2v2" />
                        </svg>
                        <div>
                            <div class="font-semibold text-sm">Embalaje</div>
                            <div class="text-xs text-gray-500 leading-tight">Protección profesional</div>
                        </div>
                    </button>

                    <button @click="irAAsesoria"
                        class="flex items-center w-full text-left px-6 py-3 !text-[rgb(58,29,34)] hover:bg-orange-50 hover:text-orange-600 transition group">
                        <svg class="w-5 h-5 mr-3 text-orange-500 group-hover:text-orange-600 flex-shrink-0"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <div>
                            <div class="font-semibold text-sm">Inteligencia Comercial</div>
                            <div class="text-xs text-gray-500 leading-tight">Asesoría estratégica</div>
                        </div>
                    </button>

                    <button @click="irAInvestigacion"
                        class="flex items-center w-full text-left px-6 py-3 !text-[rgb(58,29,34)] hover:bg-orange-50 hover:text-orange-600 transition group">
                        <svg class="w-5 h-5 mr-3 text-orange-500 group-hover:text-orange-600 flex-shrink-0"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <div>
                            <div class="font-semibold text-sm">Nuevos Mercados</div>
                            <div class="text-xs text-gray-500 leading-tight">Investigación comercial</div>
                        </div>
                    </button>
                </div>
            </div>

            <!-- Nosotros -->
            <div class="relative" @mouseenter="mostrarDropdown('nosotros')"
                @mouseleave="ocultarDropdown('nosotros')">
                <button class="text-white font-medium border-b-2 border-transparent transition duration-300 py-1"
                    :class="{ 'border-white': dropdownsVisible.nosotros }">
                    Nosotros
                </button>
                <div v-show="dropdownsVisible.nosotros"
                    class="absolute left-0 mt-2 z-20 bg-white rounded-xl shadow-lg py-2 min-w-[200px]">
                    <button @click="irANuestraHistoria"
                        class="flex items-center w-full text-left px-6 py-3 !text-[rgb(58,29,34)] hover:bg-orange-50 hover:text-orange-600 transition group">
                        <svg class="w-5 h-5 mr-3 text-orange-500 group-hover:text-orange-600 flex-shrink-0"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <div>
                            <div class="font-semibold text-sm">Nuestra Historia</div>
                            <div class="text-xs text-gray-500 leading-tight">Conoce nuestro camino</div>
                        </div>
                    </button>
                </div>
            </div>

            <!-- Acciones -->
            <router-link to="/sesion" @touchstart.native="irASesion"
                class="text-white font-medium border-b-2 border-transparent hover:border-white transition duration-300 py-1">
                Iniciar sesión
            </router-link>
            <router-link to="/register" @touchstart.native="irARegistro"
                class="text-white font-medium border-b-2 border-transparent hover:border-white transition duration-300 py-1">
                Regístrate
            </router-link>
        </div>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    import {
        useRouter
    } from 'vue-router'

    const router = useRouter()

    const dropdownsVisible = ref({
        envia: false,
        servicios: false,
        nosotros: false
    })
    const mobileDropdowns = ref({
        envia: false,
        servicios: false,
        nosotros: false
    })

    const mobileMenuOpen = ref(false)
    const timeouts = ref({})

    function mostrarDropdown(tipo) {
        Object.keys(dropdownsVisible.value).forEach(key => {
            if (key !== tipo) dropdownsVisible.value[key] = false
        })
        if (timeouts.value[tipo]) clearTimeout(timeouts.value[tipo])
        dropdownsVisible.value[tipo] = true
    }

    function ocultarDropdown(tipo) {
        timeouts.value[tipo] = setTimeout(() => {
            dropdownsVisible.value[tipo] = false
            delete timeouts.value[tipo]
        }, 300)
    }

    function toggleMobileMenu() {
        mobileMenuOpen.value = !mobileMenuOpen.value
        if (!mobileMenuOpen.value) {
            mobileDropdowns.value = {
                envia: false,
                servicios: false,
                nosotros: false
            }
        }
    }

    function closeMobileMenu() {
        mobileMenuOpen.value = false
        mobileDropdowns.value = {
            envia: false,
            servicios: false,
            nosotros: false
        }
    }

    function toggleMobileDropdown(tipo) {
        mobileDropdowns.value[tipo] = !mobileDropdowns.value[tipo]
    }

    function irAHacerEnvio() {
        window.location.href = '/hacer-envio'
    }

    function irACotizarEnvio() {
        router.push('/cotizar-info')
        mobileMenuOpen.value = false
    }

    function irASesion() {
        router.push('/sesion')
        mobileMenuOpen.value = false
    }

    function irARegistro() {
        router.push('/register')
        mobileMenuOpen.value = false
    }

    function irANuestraHistoria() {
        router.push('/nosotros/nuestra-historia')
        mobileMenuOpen.value = false
    }

    function irARecoleccion() {
        router.push('/recoleccion-en-fabrica')
        mobileMenuOpen.value = false
    }

    function irAServicioEmbalaje() {
        router.push('/servicio-de-embalaje')
        mobileMenuOpen.value = false
    }

    function irAAsesoria() {
        router.push('/asesoria-en-inteligencia-comercial')
        mobileMenuOpen.value = false
    }

    function irAInvestigacion() {
        router.push('/investigacion-de-nuevos-mercados')
        mobileMenuOpen.value = false
    }
</script>
