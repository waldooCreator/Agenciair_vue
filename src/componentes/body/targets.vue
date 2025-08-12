<template>
    <div class="bg-[rgba(241,241,240,1)]">
        <div class="py-16 max-w-7xl mx-auto px-8">

            <!-- TÍTULO PRINCIPAL (responsive) -->
            <div class="text-center mb-12">
                <h2
                  class="text-2xl sm:text-4xl font-bold text-gray-800 uppercase tracking-normal sm:tracking-wide leading-snug sm:leading-tight break-words px-2">
                    — SOMOS EXPERTOS EN LOGÍSTICA | CONOCE NUESTROS PORTALES —
                </h2>
            </div>

            <!-- CONTENEDOR DE TARGETS CON GRID -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">

                <!-- TARJETA GENÉRICA -->
                <div
                  v-for="(item, key) in servicesData" :key="key"
                  @click="handleTargetClick(key)"
                  class="relative w-full h-64 sm:h-72 md:h-80 lg:h-80 xl:h-80
                         rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group">

                    <!-- Imagen -->
                    <div class="absolute inset-0">
                        <img :src="item.image" class="w-full h-full object-cover" :alt="item.title">
                    </div>

                    <!-- Overlay -->
                    <div class="absolute inset-0 bg-black bg-opacity-30"></div>

                    <!-- Contenido -->
                    <div class="absolute inset-0 p-6 flex flex-col justify-between text-white">
                        <div>
                            <!-- Título de tarjeta (responsive) -->
                            <h3 class="text-lg sm:text-xl font-bold uppercase tracking-wide mb-2">
                                {{ item.title }}
                            </h3>
                        </div>
                        <div class="self-end">
                            <div
                                class="w-10 h-10 bg-[rgba(235,102,55,255)] rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
const servicesData = {
    courier: {
        title: "Servicios",
        image: "/images/agg-Pica.png"
    },
    transporte: {
        title: "TRANSPORTE",
        image: "/images/neta.png"
    },
    cargaInternacional: {
        title: "CARGA INTERNACIONAL",
        image: "/images/avion.png"
    },
    logisticaIntegral: {
        title: "LOGÍSTICA INTEGRAL",
        image: "/images/Gemini_Generated_Image_25c4dq25c4dq25c4.png"
    }
}

function handleTargetClick(targetType) {
    console.log(`Clicked on ${targetType}`)
}
</script>
