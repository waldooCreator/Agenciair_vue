<template>
    <main class="min-h-screen bg-[rgb(241,241,240)]">
        <!-- HERO SECTION -->
        <section class="relative overflow-hidden py-12 md:py-20">
            <div class="container mx-auto px-6 md:px-10 lg:px-16 relative">
                <!-- Badge -->
                <div class="flex justify-center mb-8">
                    <div class="group relative">
                        <div
                            class="absolute -inset-0.5 bg-[rgb(248,112,62)] rounded-full blur opacity-75 group-hover:opacity-100 transition">
                        </div>
                        <div class="relative inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg">
                            <div class="w-3 h-3 bg-[rgb(248,112,62)] rounded-full animate-pulse"></div>
                            <span class="text-sm font-bold text-[rgb(58,26,29)] tracking-wider uppercase">
                                Envíos Internacionales
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Título principal -->
                <div class="text-center max-w-5xl mx-auto">
                    <h1
                        class="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[rgb(248,112,62)] to-[rgb(248,112,62)] bg-clip-text text-transparent leading-tight mb-6">
                        Conectamos el Mundo
                    </h1>

                    <p class="text-lg md:text-xl text-[rgb(58,26,29)] leading-relaxed max-w-3xl mx-auto mb-8">
                        Descubre cómo nuestros aliados internacionales nos permiten
                        <span class="font-semibold text-[rgb(248,112,62)]">llevar tus envíos a cualquier destino
                            global</span>
                        con la confianza y seguridad que solo los líderes mundiales en logística pueden ofrecer.
                    </p>

                    <!-- Stats destacados -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
                        <div class="text-center">
                            <div class="text-3xl font-black text-[rgb(248,112,62)]">{{ totalAliados }}+</div>
                            <div class="text-sm text-[rgb(58,26,29)] font-medium">Aliados Globales</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-black text-[rgb(248,112,62)]">{{ totalPaises }}+</div>
                            <div class="text-sm text-[rgb(58,26,29)] font-medium">Países de Destino</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-black text-[rgb(248,112,62)]">{{ ratingPromedio }}</div>
                            <div class="text-sm text-[rgb(58,26,29)] font-medium">Rating Promedio</div>
                        </div>
                    </div>

                    <!-- Scroll indicator -->
                    <div class="flex justify-center">
                        <div class="animate-bounce">
                            <svg class="w-6 h-6 text-[rgb(248,112,62)]" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CONTENT SECTION -->
        <section class="container mx-auto px-6 md:px-10 lg:px-16 pb-24">
            <div class="max-w-4xl mx-auto">

                <!-- Introducción narrativa -->
                <article class="section-spacing">
                    <div class="relative group">
                        <div
                            class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500">
                        </div>

                        <div class="relative glass-effect rounded-3xl p-8 md:p-12 shadow-lg border border-white/50">
                            <div class="text-center mb-8">
                                <div
                                    class="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                                    </svg>
                                </div>
                                <h2 class="text-3xl md:text-4xl font-bold text-[rgb(58,26,29)] mb-6">
                                    Alianzas Globales de Confianza
                                </h2>
                            </div>

                            <div class="prose prose-lg max-w-none text-[rgb(58,26,29)] space-y-6">
                                <p class="text-lg leading-relaxed">
                                    En el complejo mundo de la logística internacional, <strong
                                        class="text-[rgb(248,112,62)]">la confiabilidad es fundamental</strong>.
                                    Por eso hemos establecido alianzas estratégicas con los líderes mundiales más
                                    reconocidos en envíos internacionales:
                                    UPS y DHL, dos gigantes que definen los estándares globales de calidad y eficiencia.
                                </p>

                                <p class="text-lg leading-relaxed">
                                    Estas alianzas nos permiten ofrecer a nuestros clientes acceso directo a redes
                                    logísticas que abarcan más de 220 países y territorios,
                                    garantizando que sus envíos lleguen a cualquier destino del mundo con la máxima
                                    seguridad y puntualidad.
                                    Desde documentos urgentes hasta mercancía especializada, tenemos la solución
                                    perfecta para cada necesidad internacional.
                                </p>

                                <div
                                    class="bg-[rgb(248,112,62)]/10 rounded-2xl p-6 border-l-4 border-[rgb(248,112,62)]">
                                    <blockquote class="text-xl font-medium text-[rgb(58,26,29)] italic">
                                        "Trabajar con los líderes mundiales nos permite ofrecer a nuestros clientes el
                                        mismo nivel de servicio premium
                                        que esperarían al enviar directamente con estas compañías, pero con el toque
                                        personal y la atención localizada que nos caracteriza."
                                    </blockquote>
                                    <cite class="text-sm text-[rgb(248,112,62)] font-semibold mt-2 block">- Equipo de
                                        Logística Internacional</cite>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <!-- Sección de aliados internacionales -->
                <div class="section-spacing">
                    <!-- Título de categoría -->
                    <div class="relative group mb-8">
                        <div
                            class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500">
                        </div>

                        <div class="relative glass-effect rounded-2xl p-6 md:p-8 shadow-lg border border-white/50">
                            <div class="flex items-center gap-4">
                                <div
                                    class="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center shadow-lg">
                                    <span class="text-white font-black text-xl">1</span>
                                </div>
                                <div>
                                    <h2 class="text-2xl md:text-3xl font-bold text-[rgb(58,26,29)]">
                                        Líderes Mundiales en Logística
                                    </h2>
                                    <p class="text-[rgb(58,26,29)]/70 mt-2">Aliados con presencia en más de 220 países
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Contenido de cada aliado -->
                    <div v-for="(aliado, indiceAliado) in aliadosInternacionales" :key="indiceAliado"
                        class="relative group mb-12">
                        <div
                            class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur opacity-0 group-hover:opacity-15 transition duration-500">
                        </div>

                        <div class="relative glass-effect rounded-3xl p-8 md:p-10 shadow-lg border border-white/50">
                            <!-- Header con imagen -->
                            <div class="mb-8">
                                <div class="w-full h-48 md:h-64 rounded-2xl mb-6 overflow-hidden shadow-lg">
                                    <img :src="aliado.imagenUrl" :alt="aliado.nombre"
                                        class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        loading="lazy" />
                                </div>

                                <div class="flex flex-wrap items-center gap-4 mb-6">
                                    <span
                                        class="px-4 py-2 bg-[rgb(248,112,62)]/20 text-[rgb(248,112,62)] text-sm font-bold rounded-full">
                                        {{ aliado . categoria }}
                                    </span>
                                    <span
                                        class="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full flex items-center gap-1">
                                        <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                                        Aliado desde {{ aliado . fechaAlianza }}
                                    </span>
                                    <div class="flex items-center gap-1">
                                        <div class="flex">
                                            <svg v-for="estrella in 5" :key="estrella" class="w-4 h-4"
                                                :class="estrella <= aliado.rating ? 'text-yellow-400' : 'text-gray-300'"
                                                fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>
                                        <span
                                            class="text-sm text-[rgb(58,26,29)] font-medium ml-1">{{ aliado . rating }}/5</span>
                                    </div>
                                </div>
                            </div>

                            <div class="prose prose-lg max-w-none text-[rgb(58,26,29)] space-y-6">
                                <p class="text-lg leading-relaxed" v-html="aliado.descripcionCompleta"></p>

                                <p class="text-lg leading-relaxed" v-html="aliado.descripcionAdicional"></p>

                                <div class="grid md:grid-cols-2 gap-6 my-8">
                                    <div class="bg-white/50 rounded-2xl p-6 border border-white/30">
                                        <div class="flex items-center gap-3 mb-4">
                                            <svg class="w-6 h-6 text-[rgb(248,112,62)]" fill="none"
                                                stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                                            </svg>
                                            <h4 class="font-bold text-[rgb(58,26,29)]">Cobertura Global</h4>
                                        </div>
                                        <p class="text-[rgb(58,26,29)]">{{ aliado . cobertura }}</p>
                                    </div>

                                    <div class="bg-white/50 rounded-2xl p-6 border border-white/30">
                                        <div class="flex items-center gap-3 mb-4">
                                            <svg class="w-6 h-6 text-[rgb(248,112,62)]" fill="none"
                                                stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                            <h4 class="font-bold text-[rgb(58,26,29)]">Rendimiento</h4>
                                        </div>
                                        <p class="text-[rgb(58,26,29)]">Más de
                                            {{ aliado . enviosCompletados . toLocaleString() }} envíos internacionales
                                            exitosos</p>
                                    </div>
                                </div>

                                <div class="bg-[rgb(248,112,62)]/5 rounded-2xl p-6 border border-[rgb(248,112,62)]/10">
                                    <h4 class="font-bold text-[rgb(58,26,29)] mb-3">Servicios Especializados:</h4>
                                    <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        <span v-for="servicio in aliado.servicios" :key="servicio"
                                            class="px-3 py-2 bg-[rgb(248,112,62)]/10 text-[rgb(248,112,62)] text-sm font-medium rounded-xl text-center">
                                            {{ servicio }}
                                        </span>
                                    </div>
                                </div>

                                <div v-if="aliado.casos" class="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                                    <h4 class="font-bold text-[rgb(58,26,29)] mb-4 flex items-center gap-2">
                                        <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Casos de Éxito Internacional
                                    </h4>
                                    <div class="space-y-3">
                                        <div v-for="caso in aliado.casos" :key="caso.titulo"
                                            class="bg-white rounded-xl p-4 border">
                                            <h5 class="font-semibold text-[rgb(58,26,29)] mb-2">{{ caso . titulo }}
                                            </h5>
                                            <p class="text-sm text-[rgb(58,26,29)]/80">{{ caso . descripcion }}</p>
                                            <span
                                                class="inline-block mt-2 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                                {{ caso . resultado }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sección de contacto y colaboración -->
                <div class="relative group mt-16">
                    <div class="relative bg-white rounded-3xl p-8 md:p-10 lg:p-12 shadow-md border border-gray-200">
                        <div class="text-center">
                            <!-- Icono central -->
                            <div
                                class="w-16 h-16 md:w-20 md:h-20 bg-[rgb(248,112,62)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <svg class="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                                </svg>
                            </div>

                            <h3 class="text-2xl md:text-3xl font-black text-[rgb(58,26,29)] mb-4">
                                ¿Necesitas enviar al extranjero?
                            </h3>

                            <p class="text-base md:text-lg text-[rgb(58,26,29)] mb-8 max-w-lg mx-auto">
                                Conecta tu negocio con el mundo entero a través de nuestros aliados internacionales de
                                confianza.
                            </p>

                            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <button @click="cotizarInternacional"
                                    class="group relative overflow-hidden bg-[rgb(248,112,62)] hover:bg-[rgb(248,112,62)]/90 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 flex items-center gap-3 text-sm md:text-base">
                                    <router-link :to="{ name: 'CotizarInfo' }" class="relative z-10">
                                        Cotizar Envío Internacional
                                    </router-link>

                                    <svg class="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>

                                <button @click="masInformacion"
                                    class="group font-bold text-[rgb(248,112,62)] hover:text-[rgb(248,112,62)]/80 px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-[rgb(248,112,62)]/10 hover:bg-[rgb(248,112,62)]/20 transition-all duration-300 flex items-center gap-3 border-2 border-[rgb(248,112,62)]/20 hover:border-[rgb(248,112,62)]/40 text-sm md:text-base">
                                    <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                    <span>Más información</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
    import {
        computed
    } from 'vue'

    // Datos de los aliados internacionales
    const aliadosInternacionales = [{
            nombre: 'UPS - United Parcel Service',
            categoria: 'Líder Mundial en Logística',
            imagenUrl: 'https://imagenes.eltiempo.com/files/image_1200_535/uploads/2025/01/16/67895daddef98.jpeg', // Reemplaza por imagen de UPS o centro logístico internacional
            descripcionCompleta: '<strong class="text-[rgb(248,112,62)]">UPS</strong> es sinónimo de confiabilidad en envíos internacionales. Como uno de los líderes mundiales indiscutidos en logística, esta alianza estratégica nos permite ofrecer a nuestros clientes acceso directo a la red más extensa y confiable del planeta, con presencia en más de 220 países y territorios.',
            descripcionAdicional: 'Su tecnología de vanguardia en seguimiento, su flota aérea propia y su experiencia de más de 100 años en el mercado hacen de UPS el socio perfecto para envíos críticos. Desde documentos urgentes hasta mercancía de gran valor, UPS maneja cada envío con los más altos estándares de seguridad y puntualidad que caracterizan a esta empresa americana.',
            servicios: ['UPS Express', 'UPS Worldwide Express', 'UPS Standard', 'UPS Freight',
                'UPS Mail Innovations', 'UPS Healthcare'
            ],
            cobertura: 'Más de 220 países y territorios mundialmente, con hubs principales en Louisville, Colonia, Shanghai y Filipinas',
            fechaAlianza: 'Marzo 2019',
            rating: 5,
            enviosCompletados: 45000,
            casos: [{
                    titulo: 'Envío Urgente de Muestras Médicas a Estados Unidos',
                    descripcion: 'Transporte crítico de muestras de laboratorio desde Bogotá a Miami en menos de 24 horas.',
                    resultado: 'Entrega en 18 horas'
                },
                {
                    titulo: 'Proyecto de Exportación Masiva',
                    descripcion: 'Gestión de 500 envíos semanales de productos colombianos a Europa durante 6 meses.',
                    resultado: '99.8% entregas exitosas'
                },
                {
                    titulo: 'Envío de Emergencia Humanitaria',
                    descripcion: 'Coordinación de ayuda humanitaria urgente tras desastre natural en Centroamérica.',
                    resultado: 'Misión cumplida en 12h'
                }
            ]
        },
        {
            nombre: 'DHL Express',
            categoria: 'Red Global Express',
            imagenUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/DHL-Fahrzeug.jpg', // Reemplaza por imagen de DHL o avión de carga
            descripcionCompleta: '<strong class="text-[rgb(248,112,62)]">DHL Express</strong> representa la excelencia en envíos express internacionales. Como pioneros en la industria de la mensajería internacional y líderes indiscutibles en mercados europeos y asiáticos, DHL nos permite ofrecer servicios premium con tiempos de entrega incomparables a nivel mundial.',
            descripcionAdicional: 'Su red de hubs estratégicamente ubicados, incluyendo el más grande del mundo en Leipzig, Alemania, y su flota de más de 290 aviones dedicados exclusivamente al transporte express, garantizan que los envíos más críticos lleguen a tiempo. DHL es especialmente fuerte en destinos europeos, asiáticos y del Medio Oriente, complementando perfectamente nuestra capacidad de alcance global.',
            servicios: ['DHL Express Worldwide', 'DHL Express 12:00', 'DHL Express 9:00', 'DHL Same Day',
                'DHL Medical Express', 'DHL Automotive'
            ],
            cobertura: 'Más de 220 países con fortaleza especial en Europa, Asia y Medio Oriente. Hub principal en Leipzig, Alemania',
            fechaAlianza: 'Julio 2019',
            rating: 5,
            enviosCompletados: 38000,
            casos: [{
                    titulo: 'Lanzamiento de Producto en Asia',
                    descripcion: 'Distribución simultánea de muestras de producto colombiano a 15 países asiáticos en 48 horas.',
                    resultado: '100% sincronización'
                },
                {
                    titulo: 'Documentos Legales Urgentes a Europa',
                    descripcion: 'Envío crítico de documentos legales desde Bogotá a Frankfurt con entrega antes de las 9:00 AM.',
                    resultado: 'Entregado 8:30 AM'
                },
                {
                    titulo: 'Cadena de Frío Farmacéutica',
                    descripcion: 'Transporte de medicamentos sensibles a temperatura desde Colombia hacia hospitales en Alemania.',
                    resultado: 'Cadena de frío intacta'
                }
            ]
        }
    ]

    // Calcular estadísticas
    const totalAliados = computed(() => {
        return aliadosInternacionales.length
    })

    const totalPaises = computed(() => {
        return '220' // Ambos cubren más de 220 países
    })

    const ratingPromedio = computed(() => {
        let sumaRatings = 0
        aliadosInternacionales.forEach(aliado => {
            sumaRatings += aliado.rating
        })
        return (sumaRatings / aliadosInternacionales.length).toFixed(1)
    })

    // Funciones para los botones
    const cotizarInternacional = () => {
        console.log('Cotizar envío internacional')
    }

    const masInformacion = () => {
        console.log('Más información sobre envíos internacionales')
    }
</script>

<style scoped>
    .gradient-bg {
        background: linear-gradient(135deg, rgb(248, 112, 62) 0%, rgb(248, 112, 62) 100%);
    }

    .glass-effect {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
    }

    .animate-float {
        animation: float 6s ease-in-out infinite;
    }

    @keyframes float {

        0%,
        100% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(-10px);
        }
    }

    .section-spacing {
        margin-bottom: 4rem;
    }

    @media (min-width: 768px) {
        .section-spacing {
            margin-bottom: 6rem;
        }
    }

    .prose {
        max-width: none;
    }

    .prose p {
        margin-bottom: 1.5rem;
    }

    .prose strong {
        font-weight: 700;
    }
</style>
