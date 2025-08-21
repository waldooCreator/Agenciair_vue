<template>
    <div class="ml-2 mr-2 md:ml-6 md:mr-6 mt-4"> <!-- MÁS ANCHO en móvil -->
        <!-- DESKTOP Y TABLET: -->
        <div class="hidden md:flex justify-between items-center">
            
            
            <RastreoComponent />
            
            
            <CotizarComponent />
            
            
        </div>
        <!-- MÓVIL: -->
        <div class="md:hidden space-y-2 flex flex-col items-center"> <!-- CENTRADO Y MÁS ANCHO -->
            <div class="w-full max-w-[380px] transition-all duration-300 relative z-20">
                
                
                <RastreoComponent @abrio="manejarRastreoAbierto" @cerro="manejarRastreoCerrado" />
                
                
            </div>
            <div v-if="!rastreoExpandido"
                class="w-full max-w-[380px] transition-all duration-300 relative z-10">
                
                <CotizarComponent @abrio="manejarCotizarAbierto" @cerro="manejarCotizarCerrado" />
                
                
            </div>
            </div>
        </div>
</template>


<script setup>
    import {
        ref,
        onMounted,
        onUnmounted
    } from 'vue'
    import RastreoComponent from './rastreo.vue'
    import CotizarComponent from './cotizar.vue'

    const rastreoExpandido = ref(false)
    const cotizarExpandido = ref(false)

    const manejarRastreoAbierto = () => {
        rastreoExpandido.value = true
        // Cerrar cotizar cuando se abre rastreo
        cotizarExpandido.value = false
    }

    const manejarRastreoCerrado = () => {
        rastreoExpandido.value = false
    }

    const manejarCotizarAbierto = () => {
        cotizarExpandido.value = true
        // Cerrar rastreo cuando se abre cotizar
        rastreoExpandido.value = false
    }

    const manejarCotizarCerrado = () => {
        cotizarExpandido.value = false
    }

    const cerrarCotizar = () => {
        // Cuando se abre rastreo, cerrar cotizar si está abierto
        cotizarExpandido.value = false
    }
</script>
