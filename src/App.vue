<template>
    <div id="app" class="min-h-screen bg-[rgba(241,241,240,1)]">
        <!-- Header (se oculta si la ruta tiene meta.hideHeader) -->
        <HeaderComponent v-if="!route.meta.hideHeader" />

        <!-- Contenido de rutas -->
        <router-view />

        <!-- Botón para ir a Home: visible en TODAS las rutas menos Home -->
        <BotonHome v-if="route.name !== 'Home'" />

        <BotonAtras :maxScroll="150" :hideOnRoutes="['Home']" hideMetaKey="hideBack" :hideOnPaths="['/']" />

        <!-- Mostrarlo siempre -->
        <BotonSubir :threshold="100" :onlyHome="false" />

    </div>
</template>

<script setup>
    import {
        useRoute
    } from 'vue-router'
    import HeaderComponent from './componentes/headers/header.vue'
    import BotonHome from './componentes/body/botonhome.vue'
    import BotonAtras from './componentes/body/botonatras.vue'
    import BotonSubir from './componentes/body/botonsubir.vue'

    /* Ruta reactiva para usar en el template */
    const route = useRoute()
</script>

<style>
    #app {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>
