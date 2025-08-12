<template> 
    <div id="app" class="min-h-screen bg-[rgba(241,241,240,1)]">
        <!-- Header Component (siempre visible menos noticias) -->
        <HeaderComponent v-if="!$route.meta.hideHeader" />
        
        <!-- Router View - aquí se mostrarán las diferentes páginas -->
        <router-view />

        <!-- Botón para volver al inicio (Home) -->
        <BotonHome v-if="$route.name !== 'Home'" />

        <!-- Botón para subir al inicio de la página -->
        <BotonSubir :threshold="250" :onlyHome="true" />
    </div>
</template>

<script setup>
import HeaderComponent from './componentes/headers/header.vue'
import BotonHome from './componentes/body/botonhome.vue'
import BotonSubir from './componentes/body/botonsubir.vue'
</script>

<style>
#app {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
