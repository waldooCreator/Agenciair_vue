<template> 
  <div
    class="bg-[rgba(235,102,55,255)] text-white rounded-full shadow-md relative flex items-center justify-between
      px-3 sm:px-4 md:px-8 lg:px-16
      py-4 sm:py-2.5 md:py-3
      w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:w-full
      mx-auto md:max-w-7xl
      mt-4 md:mt-4 mb-6 md:mb-10"
  >
    <!-- LOGO -->
    <router-link to="/" class="text-lg sm:text-xl md:text-2xl font-bold">
      <img
        src="/images/image.png"
        alt="Agencia Ir"
        class="block h-7 sm:h-8 md:h-9 lg:h-10 w-auto object-contain select-none"
        loading="lazy"
        decoding="async"
      />
    </router-link>

    <!-- BOTÓN HAMBURGUESA (móvil) -->
    <button
      @click="toggleMobileMenu"
      class="md:hidden flex flex-col items-center justify-center w-8 h-8 relative z-50"
      aria-label="Abrir menú"
    >
      <span class="block w-6 h-0.5 bg-white mb-1 transition-all duration-300 transform"
        :class="{ 'rotate-45 translate-y-1.5 mb-0': mobileMenuOpen }"></span>
      <span class="block w-6 h-0.5 bg-white mb-1 transition-all duration-300"
        :class="{ 'opacity-0': mobileMenuOpen }"></span>
      <span class="block w-6 h-0.5 bg-white transition-all duration-300 transform"
        :class="{ '-rotate-45 -translate-y-1.5': mobileMenuOpen }"></span>
    </button>

    <!-- MENÚ MÓVIL -->
    <div v-show="mobileMenuOpen"
      class="md:hidden absolute top-full right-4 sm:right-6 mt-2 bg-white rounded-xl shadow-xl py-3 
             w-[80vw] max-w-[350px] z-40 border border-gray-100">

      <!-- ENVÍA MÓVIL -->
      <div class="relative">
        <button @click="toggleMobileDropdown('envia')"
          class="flex items-center justify-between w-full text-left text-orange-600 font-medium py-2.5 px-4 hover:bg-orange-50 transition duration-200">
          <span>Envía</span>
          <svg class="w-4 h-4 transform transition-transform duration-200"
            :class="{ 'rotate-180': mobileDropdowns.envia }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-show="mobileDropdowns.envia" class="bg-orange-50 border-l-2 border-orange-200 ml-4 mr-2 rounded">
          <button @click="irAHacerEnvio"
            class="block w-full text-left px-4 py-2 !text-[rgb(58,29,34)] hover:bg-orange-100 transition text-xs sm:text-[13px] font-medium leading-tight">
            Hacer envío
          </button>
          <button @click="irACotizarEnvio"
            class="block w-full text-left px-4 py-2 !text-[rgb(58,29,34)] hover:bg-orange-100 transition text-xs sm:text-[13px] font-medium leading-tight">
            Cotiza tu envío
          </button>
        </div>
      </div>

      <!-- SERVICIOS MÓVIL -->
      <div class="relative">
        <button @click="toggleMobileDropdown('servicios')"
          class="flex items-center justify-between w-full text-left text-orange-600 font-medium py-2.5 px-4 hover:bg-orange-50 transition duration-200">
          <span>Servicios</span>
          <svg class="w-4 h-4 transform transition-transform duration-200"
            :class="{ 'rotate-180': mobileDropdowns.servicios }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-show="mobileDropdowns.servicios" class="bg-orange-50 border-l-2 border-orange-200 ml-4 mr-2 rounded">
          <button
            class="block w-full text-left px-4 py-2 !text-[rgb(58,29,34)] hover:bg-orange-100 transition text-xs sm:text-[13px] font-medium leading-tight">
            Pick-Up
          </button>
          <button
            class="block w-full text-left px-4 py-2 !text-[rgb(58,29,34)] hover:bg-orange-100 transition text-xs sm:text-[13px] font-medium leading-tight">
            UPS Internacional
          </button>
          <button
            class="block w-full text-left px-4 py-2 !text-[rgb(58,29,34)] hover:bg-orange-100 transition text-xs sm:text-[13px] font-medium leading-tight">
            TCC
          </button>
        </div>
      </div>

      <!-- NOSOTROS MÓVIL -->
      <div class="relative">
        <button @click="toggleMobileDropdown('nosotros')"
          class="flex items-center justify-between w-full text-left text-orange-600 font-medium py-2.5 px-4 hover:bg-orange-50 transition duration-200">
          <span>Nosotros</span>
          <svg class="w-4 h-4 transform transition-transform duration-200"
            :class="{ 'rotate-180': mobileDropdowns.nosotros }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-show="mobileDropdowns.nosotros" class="bg-orange-50 border-l-2 border-orange-200 ml-4 mr-2 rounded">
          <button @click="irANuestraHistoria"
            class="block w-full text-left px-4 py-2 !text-[rgb(58,29,34)] hover:bg-orange-100 transition text-xs sm:text-[13px] font-medium leading-tight">
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

    <!-- MENÚ DESKTOP -->
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
            class="block w-full text-left px-6 py-2 !text-[rgb(58,29,34)] hover:bg-orange-100 transition text-[13px] lg:text-sm leading-tight font-semibold whitespace-nowrap">
            Hacer envío
          </button>
          <button @click="irACotizarEnvio"
            class="block w-full text-left px-6 py-2 !text-[rgb(58,29,34)] hover:bg-orange-100 transition text-[13px] lg:text-sm leading-tight font-semibold whitespace-nowrap">
            Cotiza tu envío
          </button>
        </div>
      </div>

      <!-- Servicios -->
      <div class="relative" @mouseenter="mostrarDropdown('servicios')" @mouseleave="ocultarDropdown('servicios')">
        <button class="text-white font-medium border-b-2 border-transparent transition duration-300 py-1"
          :class="{ 'border-white': dropdownsVisible.servicios }">
          Servicios
        </button>
        <div v-show="dropdownsVisible.servicios"
          class="absolute left-0 mt-2 z-20 bg-white rounded-xl shadow-lg py-2 min-w-[180px]">
          <button
            class="block w-full text-left px-6 py-2 !text-[rgb(58,29,34)] hover:bg-orange-100 transition text-[13px] lg:text-sm leading-tight font-semibold whitespace-nowrap">
            Pick-Up
          </button>
          <button
            class="block w-full text-left px-6 py-2 !text-[rgb(58,29,34)] hover:bg-orange-100 transition text-[13px] lg:text-sm leading-tight font-semibold whitespace-nowrap">
            UPS Internacional
          </button>
          <button
            class="block w-full text-left px-6 py-2 !text-[rgb(58,29,34)] hover:bg-orange-100 transition text-[13px] lg:text-sm leading-tight font-semibold whitespace-nowrap">
            TCC
          </button>
        </div>
      </div>

      <!-- Nosotros -->
      <div class="relative" @mouseenter="mostrarDropdown('nosotros')" @mouseleave="ocultarDropdown('nosotros')">
        <button class="text-white font-medium border-b-2 border-transparent transition duration-300 py-1"
          :class="{ 'border-white': dropdownsVisible.nosotros }">
          Nosotros
        </button>
        <div v-show="dropdownsVisible.nosotros"
          class="absolute left-0 mt-2 z-20 bg-white rounded-xl shadow-lg py-2 min-w-[200px]">
          <button @click="irANuestraHistoria"
            class="block w-full text-left px-6 py-2 !text-[rgb(58,29,34)] hover:bg-orange-100 transition text-[13px] lg:text-sm leading-tight font-semibold whitespace-nowrap">
            Nuestra Historia
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'

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

function mostrarDropdown (tipo) {
  Object.keys(dropdownsVisible.value).forEach(key => {
    if (key !== tipo) dropdownsVisible.value[key] = false
  })
  if (timeouts.value[tipo]) clearTimeout(timeouts.value[tipo])
  dropdownsVisible.value[tipo] = true
}

function ocultarDropdown (tipo) {
  timeouts.value[tipo] = setTimeout(() => {
    dropdownsVisible.value[tipo] = false
    delete timeouts.value[tipo]
  }, 300)
}

function toggleMobileMenu () {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (!mobileMenuOpen.value) {
    mobileDropdowns.value = {
      envia: false,
      servicios: false,
      nosotros: false
    }
  }
}

function toggleMobileDropdown (tipo) {
  mobileDropdowns.value[tipo] = !mobileDropdowns.value[tipo]
}

function irAHacerEnvio () {
  window.location.href = '/hacer-envio'
}

function irACotizarEnvio () {
  router.push('/cotizar-info')
  mobileMenuOpen.value = false
}

function irASesion () {
  router.push('/sesion')
  mobileMenuOpen.value = false
}

function irARegistro () {
  router.push('/register')
  mobileMenuOpen.value = false
}

// 🔹 Funciones para navegación de la sección Nosotros
function irANuestraHistoria () {
  router.push('/nosotros/nuestra-historia')
  mobileMenuOpen.value = false
}

function irAMisionVision () {
  router.push('/nosotros/mision-vision')
  mobileMenuOpen.value = false
}

function irAValores () {
  router.push('/nosotros/valores')
  mobileMenuOpen.value = false
}
</script>