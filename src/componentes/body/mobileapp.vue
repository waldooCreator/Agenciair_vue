<template>
    <section class="w-full bg-[#EB6637] py-10 lg:py-16 px-6 lg:px-12 rounded-2xl overflow-hidden shadow-lg">
        <div class="flex flex-col lg:flex-row items-center min-h-[200px] p-8 lg:p-12 gap-12">

            <!-- Contenido de texto -->
            <div class="text-white space-y-6 lg:pr-8 flex-1">
                <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    {{ title }}
                </h1>
                <p class="text-base lg:text-lg text-white/90 leading-relaxed">
                    {{ subtitle }}
                </p>

                <!-- Botón de acción -->
                <div class="pt-4">
                    <a :href="buttonUrl"
                        class="inline-flex items-center bg-white text-[#EB6637] px-6 py-3 rounded-full font-bold text-base hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                        {{ buttonText }}
                        <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                <!-- Características adicionales -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6" v-if="features && features.length > 0">
                    <div v-for="(feature, index) in features" :key="index"
                        class="flex items-center space-x-2 text-white/90 text-sm lg:text-base">
                        <div class="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span>{{ feature }}</span>
                    </div>
                </div>
            </div>

            <!-- Mockup de teléfonos -->
            <div class="relative flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-3 flex-1">
                <!-- Teléfono 1 con imagen completa -->
                 <div class="z-10">
                    <div
                        class="w-32 sm:w-36 lg:w-40 h-64 sm:h-72 lg:h-80 bg-black rounded-[2rem] shadow-2xl overflow-hidden border-4 border-gray-800 relative">

                        <!-- Parte superior del teléfono -->
                        <div
                            class="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-5 bg-black rounded-b-2xl z-20">
                        </div>

                        <!-- Imagen cubriendo toda la pantalla del teléfono -->
                        <img src="/public/images/ig.png" alt="Imagen WhatsApp"
                            class="absolute inset-0 w-full h-full object-cover" />

                        <!-- Parte inferior del teléfono -->
                        <div
                            class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 h-1 bg-white rounded-full z-20">
                        </div>

                    </div>
                </div>


                <!-- Teléfono 2 -->

                <div class="z-10">
                    <div
                        class="w-36 sm:w-40 lg:w-44 h-72 sm:h-80 lg:h-88 bg-black rounded-[2rem] shadow-2xl overflow-hidden border-4 border-gray-800 relative">

                        <!-- Parte superior del teléfono -->
                        <div
                            class="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-5 bg-black rounded-b-2xl z-20">
                        </div>

                        <!-- Imagen cubriendo toda la pantalla del teléfono -->
                        <img src="/public/images/wasa.png" alt="Imagen WhatsApp"
                            class="absolute inset-0 w-full h-full object-cover" />

                        <!-- Parte inferior del teléfono -->
                        <div
                            class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 h-1 bg-white rounded-full z-20">
                        </div>

                    </div>
                </div>


                <!-- Teléfono 3 -->
                <div class="z-10">
                    <div
                        class="w-32 sm:w-36 lg:w-40 h-64 sm:h-72 lg:h-80 bg-black rounded-[2rem] shadow-2xl overflow-hidden border-4 border-gray-800 relative">

                        <!-- Parte superior del teléfono -->
                        <div
                            class="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-5 bg-black rounded-b-2xl z-20">
                        </div>

                        <!-- Imagen cubriendo toda la pantalla del teléfono -->
                        <img src="/public/images/tik.png" alt="Imagen WhatsApp"
                            class="absolute inset-0 w-full h-full object-cover" />

                        <!-- Parte inferior del teléfono -->
                        <div
                            class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 h-1 bg-white rounded-full z-20">
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </section>
</template>


<script setup>
    // Props para personalizar el componente
    defineProps({
        // Contenido de texto
        title: {
            type: String,
            default: 'Conoce Nuestras Redes Sociales'
        },
        subtitle: {
            type: String,
            default: 'Permanece Conectado y Actualizado con Nuestras Últimas Noticias y Ofertas a Través de Nuestras Redes Sociales.'
        },

        // Botón de acción
        buttonText: {
            type: String,
            default: 'Comunicate con nosotros'
        },
        buttonUrl: {
            type: String,
            default: '#'
        },

        

        // Imágenes de los teléfonos
        phone1Image: {
            type: String,
            default: ''
        },
        phone1Alt: {
            type: String,
            default: 'Pantalla 1 de la aplicación'
        },
        phone2Image: {
            type: String,
            default: ''
        },
        phone2Alt: {
            type: String,
            default: 'Pantalla 2 de la aplicación'
        },
        phone3Image: {
            type: String,
            default: ''
        },
        phone3Alt: {
            type: String,
            default: 'Pantalla 3 de la aplicación'
        }
    })
</script>

<style scoped>
    /* Animaciones personalizadas */
    @keyframes float {

        0%,
        100% {
            transform: translateY(0px) rotate(-12deg);
        }

        50% {
            transform: translateY(-15px) rotate(-12deg);
        }
    }

    @keyframes float-delayed {

        0%,
        100% {
            transform: translateY(0px) rotate(0deg);
        }

        50% {
            transform: translateY(-20px) rotate(0deg);
        }
    }

    @keyframes float-reverse {

        0%,
        100% {
            transform: translateY(0px) rotate(12deg);
        }

        50% {
            transform: translateY(-15px) rotate(12deg);
        }
    }

    .float-animation {
        animation: float 4s ease-in-out infinite;
    }

    .float-animation-delayed {
        animation: float-delayed 4s ease-in-out infinite;
        animation-delay: -1.5s;
    }

    .float-animation:nth-child(3) {
        animation: float-reverse 4s ease-in-out infinite;
        animation-delay: -3s;
    }

    /* Sombras mejoradas */
    .shadow-2xl {
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    /* Efectos hover */
    .hover\:scale-105:hover {
        transform: scale(1.05);
    }

    .hover\:shadow-xl:hover {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
</style>
