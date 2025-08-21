<template>
    <!-- Main Content Area - Más cerca del header -->
    <main class="w-full max-w-7xl mx-auto px-10 mb-2">
        <!-- Index Component (Carousel) - Con margen superior para separar del rastreo -->
        <div class="mt-20">
            <IndexComponent />
        </div>
        <!-- Contenedor horizontal para Rastreo y Cotizar -->
        <ContenedorEnvios />
        <!-- Separador visual -->
        <div class="mt-14">
            <Separador1 />
        </div>

        <div class="flex flex-col gap-2">
            <!-- Targets Component (Service Cards) -->
            <TargetsComponent />

            <div class="mb-24">
                <!-- Mobile App Component -->
                <MobileappComponent />
            </div>
            <Separador2 />
        </div>
    </main>
    <!-- Footer Component -->
    <FooterComponent />
</template>

<script setup>
    import IndexComponent from "./body/index.vue";
    import ContenedorEnvios from './body/contenedorenvios.vue' // ajusta la ruta
    import Separador1 from "./body/separador1.vue";
    import TargetsComponent from "./body/targets.vue";
    import MobileappComponent from "./body/mobileapp.vue";
    import Separador2 from "./redireccionar/separador2.vue";
    import FooterComponent from "./footers/footer.vue";
</script>
