<template>
    <div
        class="bg-[rgba(235,102,55,255)] mt-4 md:mt-8 text-white rounded-2xl md:rounded-full px-4 sm:px-6 md:px-10 lg:px-16 py-3 md:py-4 shadow-md max-w-7xl mx-auto w-full flex items-center justify-between mb-8 md:mb-12 relative">

        <!-- LOGO/TÍTULO -->
        <h1 class="text-xl sm:text-2xl md:text-3xl font-bold">
            Agencia Ir
        </h1>

        <!-- BOTÓN HAMBURGUESA MÓVIL -->
        <button @click="toggleMobileMenu"
            class="md:hidden flex flex-col items-center justify-center w-8 h-8 relative z-50">
            <span class="block w-6 h-0.5 bg-white mb-1 transition-all duration-300 transform"
                :class="{ 'rotate-45 translate-y-1.5 mb-0': mobileMenuOpen }"></span>
            <span class="block w-6 h-0.5 bg-white mb-1 transition-all duration-300"
                :class="{ 'opacity-0': mobileMenuOpen }"></span>
            <span class="block w-6 h-0.5 bg-white transition-all duration-300 transform"
                :class="{ '-rotate-45 -translate-y-1.5': mobileMenuOpen }"></span>
        </button>

        <!-- MENÚ DESPLEGABLE MÓVIL -->
        <div v-show="mobileMenuOpen"
            class="md:hidden absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl py-3 w-[80vw] max-w-[350px] z-40 border border-gray-100">
            
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
                <div v-show="mobileDropdowns.envia"
                    class="bg-orange-50 border-l-2 border-orange-200 ml-4 mr-2 rounded">
                    <button @click="irAHacerEnvio"
                        class="block w-full text-left px-4 py-2 text-orange-500 hover:bg-orange-100 transition text-sm font-medium">
                        Hacer envío
                    </button>
                </div>
            </div>

            <!-- SERVICIOS MÓVIL -->
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
                    <button
                        class="block w-full text-left px-4 py-2 text-orange-500 hover:bg-orange-100 transition text-sm font-medium">
                        Pick‑Up
                    </button>
                    <button
                        class="block w-full text-left px-4 py-2 text-orange-500 hover:bg-orange-100 transition text-sm font-medium">
                        UPS Internacional
                    </button>
                    <button
                        class="block w-full text-left px-4 py-2 text-orange-500 hover:bg-orange-100 transition text-sm font-medium">
                        TCC
                    </button>
                </div>
            </div>

            <!-- BENEFICIOS MÓVIL -->
            <div class="relative">
                <button @click="toggleMobileDropdown('beneficios')"
                    class="flex items-center justify-between w-full text-left text-orange-600 font-medium py-2.5 px-4 hover:bg-orange-50 transition duration-200">
                    <span>Beneficios</span>
                    <svg class="w-4 h-4 transform transition-transform duration-200"
                        :class="{ 'rotate-180': mobileDropdowns.beneficios }" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <div v-show="mobileDropdowns.beneficios"
                    class="bg-orange-50 border-l-2 border-orange-200 ml-4 mr-2 rounded">
                    <button
                        class="block w-full text-left px-4 py-2 text-orange-500 hover:bg-orange-100 transition text-sm font-medium">
                        De Cúcuta Pal' Mundo
                    </button>
                    <button
                        class="block w-full text-left px-4 py-2 text-orange-500 hover:bg-orange-100 transition text-sm font-medium">
                        Cliente Leal
                    </button>
                    <button
                        class="block w-full text-left px-4 py-2 text-orange-500 hover:bg-orange-100 transition text-sm font-medium">
                        Acumula tus Box
                    </button>
                </div>
            </div>

            <button
                class="block w-full text-left text-orange-600 font-medium py-2.5 px-4 hover:bg-orange-50 transition duration-200">
                Convenios
            </button>
            <button
                class="block w-full text-left text-orange-600 font-medium py-2.5 px-4 hover:bg-orange-50 transition duration-200">
                Regístrate
            </button>
        </div>

        <!-- MENÚ DE NAVEGACIÓN DESKTOP -->
        <div class="hidden md:flex gap-4 lg:gap-8 xl:gap-12 text-base lg:text-lg xl:text-xl font-medium relative">
            
            <!-- ENVÍA DROPDOWN -->
            <div class="relative" @mouseenter="mostrarDropdown('envia')" @mouseleave="ocultarDropdown('envia')">
                <button class="text-white font-medium border-b-2 border-transparent transition duration-300 py-1"
                    :class="{ 'border-white': dropdownsVisible.envia }">
                    Envía
                </button>
                <div v-show="dropdownsVisible.envia"
                    class="absolute left-0 mt-2 z-20 bg-white rounded-xl shadow-lg py-2 min-w-[160px]">
                    <button @click="irAHacerEnvio"
                        class="block w-full text-left px-6 py-2 text-orange-500 hover:bg-orange-100 transition font-semibold whitespace-nowrap">
                        Hacer envío
                    </button>
                </div>
            </div>

            <!-- SERVICIOS DROPDOWN -->
            <div class="relative" @mouseenter="mostrarDropdown('servicios')" @mouseleave="ocultarDropdown('servicios')">
                <button class="text-white font-medium border-b-2 border-transparent transition duration-300 py-1"
                    :class="{ 'border-white': dropdownsVisible.servicios }">
                    Servicios
                </button>
                <div v-show="dropdownsVisible.servicios"
                    class="absolute left-0 mt-2 z-20 bg-white rounded-xl shadow-lg py-2 min-w-[180px]">
                    <button
                        class="block w-full text-left px-6 py-2 text-orange-500 hover:bg-orange-100 transition font-semibold whitespace-nowrap">
                        Pick‑Up
                    </button>
                    <button
                        class="block w-full text-left px-6 py-2 text-orange-500 hover:bg-orange-100 transition font-semibold whitespace-nowrap">
                        UPS Internacional
                    </button>
                    <button
                        class="block w-full text-left px-6 py-2 text-orange-500 hover:bg-orange-100 transition font-semibold whitespace-nowrap">
                        TCC
                    </button>
                </div>
            </div>

            <!-- BENEFICIOS DROPDOWN -->
            <div class="relative" @mouseenter="mostrarDropdown('beneficios')"
                @mouseleave="ocultarDropdown('beneficios')">
                <button class="text-white font-medium border-b-2 border-transparent transition duration-300 py-1"
                    :class="{ 'border-white': dropdownsVisible.beneficios }">
                    Beneficios
                </button>
                <div v-show="dropdownsVisible.beneficios"
                    class="absolute left-0 mt-2 z-20 bg-white rounded-xl shadow-lg py-2 min-w-[200px]">
                    <button
                        class="block w-full text-left px-6 py-2 text-orange-500 hover:bg-orange-100 transition font-semibold whitespace-nowrap">
                        De Cúcuta Pal' Mundo
                    </button>
                    <button
                        class="block w-full text-left px-6 py-2 text-orange-500 hover:bg-orange-100 transition font-semibold whitespace-nowrap">
                        Cliente Leal
                    </button>
                    <button
                        class="block w-full text-left px-6 py-2 text-orange-500 hover:bg-orange-100 transition font-semibold whitespace-nowrap">
                        Acumula tus Box
                    </button>
                </div>
            </div>

            <button
                class="text-white font-medium border-b-2 border-transparent hover:border-white transition duration-300 py-1">
                Convenios
            </button>
            <button
                class="text-white font-medium border-b-2 border-transparent hover:border-white transition duration-300 py-1">
                Regístrate
            </button>
        </div>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'

    // Dropdowns desktop
    const dropdownsVisible = ref({
        envia: false,
        servicios: false,
        beneficios: false
    })
    const mobileDropdowns = ref({
        envia: false,
        servicios: false,
        beneficios: false
    })

    // Menú móvil
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
                beneficios: false
            }
        }
    }

    function toggleMobileDropdown(tipo) {
        mobileDropdowns.value[tipo] = !mobileDropdowns.value[tipo]
    }

    function irAHacerEnvio() {
        window.location.href = '/hacer-envio'
    }
</script>