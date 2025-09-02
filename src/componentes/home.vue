<template>
    <!-- Main Content Area - Más cerca del header -->
    <main class="w-full max-w-7xl mx-auto px-10 mb-2">
        <!-- Carrusel Component (Carousel) - Con margen superior para separar del rastreo -->
        <div class="mt-20">
            <CarruselComponent />
        </div>

        <!-- Contenedor horizontal para Rastreo y Cotizar -->
        <ContenedorEnvios />

        <!-- Separador visual -->
        <div class="mt-14">
            <ComponenteNoticia />
        </div>

        <div class="flex flex-col gap-2">
            <!-- Targets Component (Service Cards) -->
            <div id="targets-section">
                <TargetsComponent />
            </div>

            <div class="mb-24">
                <!-- Mobile App Component -->
                <RedesComponent />
            </div>

            <AliadosComponent/>
        </div>
    </main>

    <!-- Footer Component -->
    <FooterComponent />
</template>

<script setup>
    import CarruselComponent from "./body/carrusel.vue";
    import ContenedorEnvios from './body/contenedorenvios.vue'
    import ComponenteNoticia from "./body/Componentenoticia.vue";
    import TargetsComponent from "./body/targets.vue";
    import RedesComponent from "./body/redes.vue";
    import AliadosComponent from "./body/aliados.vue";
    import FooterComponent from "./footers/footer.vue";
</script>
