<template>
    <div class="ml-6 mr-6 mt-4">
        <!-- DESKTOP Y TABLET: Siempre flex side by side -->
        <div 
            class="hidden md:flex justify-between items-center"
        >
            <!-- Rastreo Component -->
            <RastreoComponent />
            
            <!-- Cotizar Component -->
            <CotizarComponent />
        </div>

        <!-- MÓVIL: Lógica especial -->
        <div class="md:hidden space-y-2">
            <!-- Rastreo siempre visible en móvil -->
            <div 
                class="transition-all duration-300 relative z-20"
                :class="{
                    'mb-2': !rastreoExpandido,
                    'mb-48': rastreoExpandido
                }"
            >
                <RastreoComponent @abrio="manejarRastreoAbierto" @cerro="manejarRastreoCerrado" />
            </div>
            
            <!-- Cotizar con expansión especial en móvil -->
            <div 
                class="transition-all duration-300 relative z-10"
                :class="{
                    'mt-2': !rastreoExpandido,
                    'mt-8': rastreoExpandido
                }"
            >
                <CotizarComponent @abrio="manejarCotizarAbierto" @cerro="manejarCotizarCerrado" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
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