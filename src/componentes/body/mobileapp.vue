<template>
    <section class="w-full bg-[#EB6637] py-10 lg:py-16 px-6 lg:px-12 rounded-2xl overflow-hidden shadow-lg font-sans antialiased">
        <div class="flex flex-col lg:flex-row items-center justify-center min-h-[200px] p-8 lg:p-12 gap-12">

            <!-- Contenido de texto -->
            <div class="text-white space-y-6 lg:pr-8 flex-1 text-center lg:text-left">
                <h1 class="font-bold leading-tight text-[22px] sm:text-[28px] md:text-[36px] lg:text-[44px]">
                    {{ title }}
                </h1>
                <p class="leading-relaxed text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] opacity-90">
                    {{ subtitle }}
                </p>
                <!-- Botones de contacto -->
                <div class="flex flex-col sm:flex-row gap-4 pt-4">
                    <!-- Botón de teléfono -->
                    <a :href="phoneUrl"
                        class="inline-flex items-center bg-white text-[#EB6637] px-6 py-3 rounded-full font-bold text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px] hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                        <svg class="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {{ phoneButtonText }}
                    </a>
                    
                    <!-- Botón de WhatsApp -->
                    <a :href="whatsappUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center bg-[#1cad52] text-white px-6 py-3 rounded-full font-bold text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px] hover:bg-[#128C7E] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                        <svg class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
                        </svg>
                        {{ whatsappButtonText }}
                    </a>
                </div>

                <!-- Características adicionales -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6" v-if="features && features.length > 0">
                    <div v-for="(feature, index) in features" :key="index"
                        class="flex items-center justify-center lg:justify-start space-x-2 text-white/90 text-[15px] sm:text-[17px] md:text-[18px] lg:text-[20px]">
                        <div class="w-2 h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span>{{ feature }}</span>
                    </div>
                </div>
            </div>

            <!-- Mockup de teléfonos -->
            <div class="relative flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-3 flex-1">
                <!-- Teléfono 1 - Instagram -->
                <a :href="instagramUrl" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="group z-10 cursor-pointer">
                    <div class="w-32 sm:w-36 lg:w-40 h-64 sm:h-72 lg:h-80 bg-black rounded-[2rem] shadow-2xl overflow-hidden border-4 border-gray-800 relative transition-all duration-700 ease-out group-hover:shadow-3xl group-hover:-translate-y-3 group-hover:scale-105">
                        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-5 bg-black rounded-b-2xl z-20"></div>
                        <img src="/public/images/ig.png" alt="Instagram"
                            class="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110" />
                        <div class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 h-1 bg-white rounded-full z-20"></div>
                        <!-- Overlay suave -->
                        <div class="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-700 ease-out"></div>
                    </div>
                </a>

                <!-- Teléfono 2 - Facebook -->
                <a :href="facebookUrl" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="group z-10 cursor-pointer">
                    <div class="w-36 sm:w-40 lg:w-44 h-72 sm:h-80 lg:h-88 bg-black rounded-[2rem] shadow-2xl overflow-hidden border-4 border-gray-800 relative transition-all duration-700 ease-out group-hover:shadow-3xl group-hover:-translate-y-3 group-hover:scale-105">
                        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-5 bg-black rounded-b-2xl z-20"></div>
                        <img src="/public/images/wasa.png" alt="Facebook"
                            class="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110" />
                        <div class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 h-1 bg-white rounded-full z-20"></div>
                        <!-- Overlay suave -->
                        <div class="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-700 ease-out"></div>
                    </div>
                </a>

                <!-- Teléfono 3 - TikTok -->
                <a :href="tiktokUrl" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="group z-10 cursor-pointer">
                    <div class="w-32 sm:w-36 lg:w-40 h-64 sm:h-72 lg:h-80 bg-black rounded-[2rem] shadow-2xl overflow-hidden border-4 border-gray-800 relative transition-all duration-700 ease-out group-hover:shadow-3xl group-hover:-translate-y-3 group-hover:scale-105">
                        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-5 bg-black rounded-b-2xl z-20"></div>
                        <img src="/public/images/tik.png" alt="TikTok"
                            class="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110" />
                        <div class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 h-1 bg-white rounded-full z-20"></div>
                        <!-- Overlay suave -->
                        <div class="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-700 ease-out"></div>
                    </div>
                </a>
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

        // Botones de contacto
        phoneButtonText: {
            type: String,
            default: 'Llamar'
        },
        phoneUrl: {
            type: String,
            default: 'tel:+573001234567'
        },
        whatsappButtonText: {
            type: String,
            default: 'WhatsApp'
        },
        whatsappUrl: {
            type: String,
            default: 'https://wa.me/573001234567'
        },

        // URLs de redes sociales
        instagramUrl: {
            type: String,
            default: 'https://www.instagram.com/irmercanciamensajeria/'
        },
        facebookUrl: {
            type: String,
            default: 'https://www.facebook.com/irmercanciamensajeria/?locale=es_LA'
        },
        tiktokUrl: {
            type: String,
            default: 'https://www.tiktok.com/@irmercanciamensajeria'
        },

        // Características adicionales
        features: {
            type: Array,
            default: () => []
        },

        // Imágenes de los teléfonos
        phone1Image: {
            type: String,
            default: '/public/images/ig.png'
        },
        phone1Alt: {
            type: String,
            default: 'Instagram'
        },
        phone2Image: {
            type: String,
            default: '/public/images/wasa.png'
        },
        phone2Alt: {
            type: String,
            default: 'Facebook'
        },
        phone3Image: {
            type: String,
            default: '/public/images/tik.png'
        },
        phone3Alt: {
            type: String,
            default: 'TikTok'
        }
    })
</script>

<style scoped>
    /* Animaciones personalizadas más suaves */
    @keyframes float {
        0%, 100% {
            transform: translateY(0px) rotate(-12deg);
        }
        50% {
            transform: translateY(-10px) rotate(-12deg);
        }
    }

    @keyframes float-delayed {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
        }
        50% {
            transform: translateY(-15px) rotate(0deg);
        }
    }

    @keyframes float-reverse {
        0%, 100% {
            transform: translateY(0px) rotate(12deg);
        }
        50% {
            transform: translateY(-10px) rotate(12deg);
        }
    }

    .float-animation {
        animation: float 6s ease-in-out infinite;
    }

    .float-animation-delayed {
        animation: float-delayed 6s ease-in-out infinite;
        animation-delay: -2s;
    }

    .float-animation:nth-child(3) {
        animation: float-reverse 6s ease-in-out infinite;
        animation-delay: -4s;
    }

    /* Sombras elegantes */
    .shadow-2xl {
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    .shadow-3xl {
        box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05);
    }

    /* Efectos hover suaves */
    .hover\:scale-105:hover {
        transform: scale(1.05);
    }

    .hover\:shadow-xl:hover {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    /* Transiciones suaves personalizadas */
    .group:hover .group-hover\:scale-110 {
        transform: scale(1.1);
    }

    .group:hover .group-hover\:-translate-y-3 {
        transform: translateY(-12px);
    }

    .group:hover .group-hover\:scale-105 {
        transform: scale(1.05);
    }


</style>