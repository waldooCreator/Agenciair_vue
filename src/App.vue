<template>
    <div id="app" class="min-h-screen bg-[rgba(241,241,240,1)]">
        <!-- Header Component (siempre visible) -->
        <HeaderComponent />
        
        <!-- Router View - aquí se mostrarán las diferentes páginas -->
        <router-view />
        <BotonHome />
    </div>
</template>

<script setup>
    import HeaderComponent from './componentes/headers/header.vue'
    import BotonHome from './componentes/body/botonhome.vue'

</script>

<style>
    #app {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
</style>