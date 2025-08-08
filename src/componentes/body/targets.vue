<template>
    <div class="bg-[rgba(241,241,240,1)]">
        <!-- SECCIÓN DE TARGETS DE SERVICIOS -->
        <div class="py-16 max-w-7xl mx-auto px-8">

            <!-- TÍTULO PRINCIPAL -->
            <div class="text-center mb-12">
                <h2 class="text-2xl font-bold text-gray-800 uppercase tracking-wide">
                    — SOMOS EXPERTOS EN LOGÍSTICA | CONOCE NUESTROS PORTALES —
                </h2>
            </div>

            <!-- CONTENEDOR DE TARGETS (4 HORIZONTALES) -->
            <div class="flex justify-center gap-14 flex-wrap">

                <!-- TARGET 1: N servicios -->
                <div @click="handleTargetClick('Nuestros servicios')"
                    class="relative w-48 h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group">
                    <!-- IMAGEN DE FONDO -->
                    <div class="absolute inset-0">
                        <img :src="servicesData.courier.image" class="w-full h-full object-cover"
                            :alt="servicesData.courier.title">
                    </div>

                    <!-- OVERLAY OSCURO -->
                    <div class="absolute inset-0 bg-black bg-opacity-30"></div>

                    <!-- CONTENIDO DEL TARGET -->
                    <div class="absolute inset-0 p-6 flex flex-col justify-between text-white">
                        <!-- TÍTULO -->
                        <div>
                            <h3 class="text-xl font-bold uppercase tracking-wide mb-2">{{ servicesData . courier . title }}
                            </h3>
                        </div>

                        <!-- ÍCONO DE FLECHA -->
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

                <!-- TARGET 2: TRANSPORTE -->
                <div @click="handleTargetClick('transporte')"
                    class="relative w-48 h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group">
                    <div class="absolute inset-0">
                        <img :src="servicesData.transporte.image" class="w-full h-full object-cover"
                            :alt="servicesData.transporte.title">
                    </div>
                    <div class="absolute inset-0 bg-black bg-opacity-30"></div>
                    <div class="absolute inset-0 p-6 flex flex-col justify-between text-white">
                        <div>
                            <h3 class="text-xl font-bold uppercase tracking-wide mb-2">
                                {{ servicesData . transporte . title }}</h3>
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

                <!-- TARGET 3: CARGA INTERNACIONAL -->
                <div @click="handleTargetClick('carga-internacional')"
                    class="relative w-48 h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group">
                    <div class="absolute inset-0">
                        <img :src="servicesData.cargaInternacional.image" class="w-full h-full object-cover"
                            :alt="servicesData.cargaInternacional.title">
                    </div>
                    <div class="absolute inset-0 bg-black bg-opacity-30"></div>
                    <div class="absolute inset-0 p-6 flex flex-col justify-between text-white">
                        <div>
                            <h3 class="text-lg font-bold uppercase tracking-wide mb-2">
                                {{ servicesData . cargaInternacional . title }}</h3>
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

                <!-- TARGET 4: LOGÍSTICA INTEGRAL -->
                <div @click="handleTargetClick('logistica-integral')"
                    class="relative w-48 h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer group">
                    <div class="absolute inset-0">
                        <img :src="servicesData.logisticaIntegral.image" class="w-full h-full object-cover"
                            :alt="servicesData.logisticaIntegral.title">
                    </div>
                    <div class="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div class="absolute inset-0 p-6 flex flex-col justify-between">
                        <div>
                            <h3 class="text-xl font-bold uppercase tracking-wide mb-2 text-white">
                                {{ servicesData . logisticaIntegral . title }}</h3>
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
    // CONFIGURACIÓN DE LAS TARJETAS DE SERVICIOS
    // Aquí puedes cambiar fácilmente las imágenes, títulos y subtítulos
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
            subtitle: "CONTACTA CON NOSOTROS",
            image: "/images/Gemini_Generated_Image_25c4dq25c4dq25c4.png"
        }
    }

    function handleTargetClick(targetType) {
        console.log(`Clicked on ${targetType}`)
        // Aquí puedes agregar navegación o mostrar más información
        // Ejemplo: 
        // if (targetType === 'courier') {
        //   router.push('/courier')
        // }
    }
</script>