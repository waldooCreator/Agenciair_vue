<template>
    <div class="bg-[rgba(241,241,240,1)]">
        <div class="py-16 max-w-7xl mx-auto px-8">

            <!-- TÍTULO PRINCIPAL -->
            <div class="text-center mb-20 max-w-5xl mx-auto px-4">
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[rgb(58,26,29)] uppercase leading-snug">
                    SOMOS EXPERTOS EN LOGÍSTICA
                </h2>

                <!-- Separador estético -->
                <div class="flex justify-center my-3">
                    <span class="block w-24 h-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></span>
                </div>

                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[rgb(58,26,29)] uppercase leading-snug">
                    CONOCE NUESTROS PORTALES
                </h2>
            </div>


            <!-- CONTENEDOR DE TARGETS CON GRID -->
            <div class=" mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">

                <!-- TARJETA GENÉRICA -->
                <div v-for="(item, key) in servicesData" :key="key" @click="handleTargetClick(key)"
                    class="relative w-full
                 aspect-[3/4] sm:aspect-[3/4] md:aspect-[2/3] lg:aspect-[2/3] xl:aspect-[7/10]
                 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl
                 transition-all duration-300 transform hover:scale-105
                 cursor-pointer group">

                    <!-- Imagen -->
                    <div class="absolute inset-0">
                        <img :src="item.image" class="w-full h-full object-cover" :alt="item.title">
                    </div>

                    <!-- Overlay -->
                    <div class="absolute inset-0 bg-black bg-opacity-30"></div>

                    <!-- Contenido -->
                    <div class="absolute inset-0 p-6 flex flex-col justify-between text-white">
                        <div>
                            <h3 class="text-lg sm:text-xl font-bold uppercase tracking-wide mb-2">
                                {{ item . title }}
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
