<template>
    <main class="min-h-screen bg-[rgb(241,234,218)]">
        <!-- Hero Section -->
        <section class="bg-[rgb(241,234,218)] pt-16 pb-14">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
                <!-- Badge -->
                <div class="group relative inline-flex mb-8">
                    <span
                        class="absolute -inset-2 rounded-full bg-[rgba(235,102,55,0.25)] blur-md opacity-80 group-hover:opacity-100 transition"></span>
                    <span class="relative inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-md">
                        <span class="w-2.5 h-2.5 bg-[rgba(235,102,55,255)] rounded-full"></span>
                        <span
                            class="uppercase tracking-wider text-[11px] md:text-[12px] font-semibold text-[rgba(235,102,55,255)]">
                            Noticias
                        </span>
                    </span>
                </div>

                <!-- Title -->
                <h1
                    class="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[rgb(248,112,62)] to-[rgb(248,112,62)] bg-clip-text text-transparent leading-tight mb-6">
                    Blog de novedades y
                    <br class="hidden sm:block" />
                    actualizaciones
                </h1>

                <!-- Subtítulo -->
                <p class="text-lg md:text-xl text-[rgb(58,26,29)] leading-relaxed max-w-2xl mx-auto">
                    Información clara sobre servicios, operaciones y
                    <span class="text-[rgb(248,112,62)] font-semibold">recomendaciones</span>
                    para que tus envíos fluyan mejor.
                </p>

                <!-- Flecha hacia abajo -->
                <div class="mt-12 flex justify-center">
                    <div class="animate-bounce">
                        <svg class="w-6 h-6 text-[rgb(248,112,62)]" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>

        <!-- Article Header -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mb-8">
            <div class="bg-white rounded-2xl shadow-lg px-6 sm:px-8 lg:px-12 py-8 lg:py-12">
                <!-- Breadcrumb -->
                <nav class="text-gray-500 text-sm mb-6">
                    <router-link to="/" class="hover:text-[rgba(235,102,55,255)]">Inicio</router-link>
                    <span class="mx-2">/</span>
                    <router-link to="/noticias" class="hover:text-[rgba(235,102,55,255)]">Noticias</router-link>
                    <span class="mx-2">/</span>
                    <span class="text-gray-700">Cobertura Internacional</span>
                </nav>

                <!-- Article Badge -->
                <div
                    class="inline-flex items-center gap-2 bg-[rgba(235,102,55,255)]/10 px-3 py-1 rounded-full text-[rgba(235,102,55,255)] text-sm font-medium mb-6">
                    Actualización
                </div>

                <!-- Article Title -->
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-black text-[rgb(58,26,29)] leading-tight mb-6">
                    Nueva cobertura internacional y mejoras de tránsito
                </h2>

                <p class="text-lg md:text-xl text-[rgb(58,26,29)]/80 leading-relaxed max-w-5xl">
                    Ampliamos rutas a Norteamérica y Europa con mejores tiempos de entrega y trazabilidad más clara.
                </p>
            </div>
        </section>

        <!-- Content -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pb-16">
            <!-- Main Image -->
            <div class="bg-white rounded-2xl shadow-lg p-6 lg:p-12 mb-8">
                <img src="/images/paquete.png" alt="Cobertura internacional"
                    class="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl mb-8" />
                <div class="max-w-5xl mx-auto">
                    <p class="text-base md:text-lg text-[rgb(58,26,29)] leading-relaxed mb-6">
                        En Agencia Ir continuamos fortaleciendo nuestra red internacional para ofrecerte mejores
                        opciones de envío.
                        Esta expansión representa nuestro compromiso con la conectividad global de tu mercancía.
                    </p>
                    <p class="text-base md:text-lg text-[rgb(58,26,29)] leading-relaxed">
                        Estamos incrementando la cobertura de envíos hacia ciudades clave y optimizando la conexión
                        entre hubs estratégicos.
                        Esto se traduce en tiempos más consistentes y mayor visibilidad durante todo el tránsito de tu
                        paquete.
                    </p>
                </div>
            </div>

            <!-- New Routes -->
            <div class="bg-white rounded-2xl shadow-lg p-6 lg:p-12 mb-8">
                <div class="max-w-6xl mx-auto">
                    <h2
                        class="text-2xl md:text-3xl lg:text-4xl font-black text-[rgb(58,26,29)] leading-tight mb-8 text-center">
                        Nuevas rutas disponibles</h2>

                    <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        <!-- North America -->
                        <div class="bg-gray-50 rounded-2xl p-6 lg:p-8">
                            <h3 class="text-lg lg:text-xl font-semibold text-[rgba(235,102,55,255)] mb-6">Norteamérica
                            </h3>
                            <ul class="space-y-3">
                                <li class="text-gray-700 text-base lg:text-lg">🇺🇸 Estados Unidos: Nueva York, Los
                                    Ángeles, Miami</li>
                                <li class="text-gray-700 text-base lg:text-lg">🇨🇦 Canadá: Toronto, Vancouver, Montreal
                                </li>
                                <li class="text-gray-700 text-base lg:text-lg">🇲🇽 México: Ciudad de México,
                                    Guadalajara</li>
                            </ul>
                        </div>

                        <!-- Europe -->
                        <div class="bg-gray-50 rounded-2xl p-6 lg:p-8">
                            <h3 class="text-lg lg:text-xl font-semibold text-[rgba(235,102,55,255)] mb-6">Europa</h3>
                            <ul class="space-y-3">
                                <li class="text-gray-700 text-base lg:text-lg">🇪🇸 España: Madrid, Barcelona, Valencia
                                </li>
                                <li class="text-gray-700 text-base lg:text-lg">🇫🇷 Francia: París, Lyon, Marsella</li>
                                <li class="text-gray-700 text-base lg:text-lg">🇩🇪 Alemania: Berlín, Hamburgo, Munich
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tracking Improvements -->
            <div class="bg-white rounded-2xl shadow-lg p-6 lg:p-12 mb-8">
                <div class="max-w-6xl mx-auto">
                    <h2
                        class="text-2xl md:text-3xl lg:text-4xl font-black text-[rgb(58,26,29)] leading-tight mb-8 text-center">
                        Mayor trazabilidad y control</h2>

                    <p
                        class="text-base md:text-lg text-[rgb(58,26,29)] leading-relaxed mb-12 text-center max-w-4xl mx-auto">
                        Implementamos nuevas tecnologías de seguimiento que te permiten conocer la ubicación exacta de
                        tu envío en tiempo real.
                    </p>

                    <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
                        <!-- Tiempo Real -->
                        <div class="text-center p-6">
                            <div
                                class="w-20 h-20 lg:w-24 lg:h-24 bg-[rgba(235,102,55,255)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg class="w-10 h-10 lg:w-12 lg:h-12 text-[rgba(235,102,55,255)]" fill="none"
                                    stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                                </svg>
                            </div>
                            <h3 class="font-semibold text-[rgb(58,26,29)] mb-3 text-lg lg:text-xl">Tiempo Real</h3>
                            <p class="text-sm lg:text-base text-[rgb(58,26,29)]/60">Seguimiento 24/7 de tu paquete</p>
                        </div>

                        <!-- Notificaciones -->
                        <div class="text-center p-6">
                            <div
                                class="w-20 h-20 lg:w-24 lg:h-24 bg-[rgba(235,102,55,255)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg class="w-10 h-10 lg:w-12 lg:h-12 text-[rgba(235,102,55,255)]" fill="none"
                                    stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </div>
                            <h3 class="font-semibold text-[rgb(58,26,29)] mb-3 text-lg lg:text-xl">Notificaciones</h3>
                            <p class="text-sm lg:text-base text-[rgb(58,26,29)]/60">Alertas automáticas de estado</p>
                        </div>

                        <!-- Seguridad -->
                        <div class="text-center p-6">
                            <div
                                class="w-20 h-20 lg:w-24 lg:h-24 bg-[rgba(235,102,55,255)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg class="w-10 h-10 lg:w-12 lg:h-12 text-[rgba(235,102,55,255)]" fill="none"
                                    stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 11c1.105 0 2 .895 2 2v2a2 2 0 11-4 0v-2c0-1.105.895-2 2-2z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17 11V7a5 5 0 00-10 0v4m-2 0h14v10H5V11z" />
                                </svg>
                            </div>
                            <h3 class="font-semibold text-[rgb(58,26,29)] mb-3 text-lg lg:text-xl">Seguridad</h3>
                            <p class="text-sm lg:text-base text-[rgb(58,26,29)]/60">Protección garantizada</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Delivery Times -->
            <div class="bg-white rounded-2xl shadow-lg p-6 lg:p-12 mb-8">
                <div class="max-w-6xl mx-auto">
                    <h2
                        class="text-2xl md:text-3xl lg:text-4xl font-black text-[rgb(58,26,29)] leading-tight mb-8 text-center">
                        Tiempos de entrega optimizados</h2>

                    <p
                        class="text-base md:text-lg text-[rgb(58,26,29)] leading-relaxed mb-12 text-center max-w-4xl mx-auto">
                        Hemos logrado reducir significativamente los tiempos de entrega internacional.
                    </p>

                    <div class="bg-gray-50 rounded-2xl p-8 lg:p-12">
                        <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
                            <div class="text-center">
                                <div class="text-3xl lg:text-4xl font-bold text-[rgba(235,102,55,255)] mb-2">3-5 días
                                </div>
                                <div class="text-base lg:text-lg text-[rgb(58,26,29)]/60 mb-3">Estados Unidos</div>
                                <div class="text-sm lg:text-base text-[rgba(235,102,55,255)] font-medium">40% más
                                    rápido</div>
                            </div>
                            <div class="text-center">
                                <div class="text-3xl lg:text-4xl font-bold text-[rgba(235,102,55,255)] mb-2">5-7 días
                                </div>
                                <div class="text-base lg:text-lg text-[rgb(58,26,29)]/60 mb-3">Europa</div>
                                <div class="text-sm lg:text-base text-[rgba(235,102,55,255)] font-medium">30% más
                                    rápido</div>
                            </div>
                            <div class="text-center">
                                <div class="text-3xl lg:text-4xl font-bold text-[rgba(235,102,55,255)] mb-2">4-6 días
                                </div>
                                <div class="text-base lg:text-lg text-[rgb(58,26,29)]/60 mb-3">Canadá</div>
                                <div class="text-sm lg:text-base text-[rgba(235,102,55,255)] font-medium">33% más
                                    rápido</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CTA -->
            <div class="bg-[rgba(235,102,55,255)] rounded-2xl p-8 lg:p-12 text-center text-white mb-8">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-black mb-6">¿Listo para enviar internacionalmente?
                    </h2>
                    <p class="mb-8 opacity-90 text-base md:text-lg">
                        Aprovecha nuestras nuevas rutas y mejores tiempos de entrega.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <router-link to="/cotizar-info"
                            class="bg-white text-[rgba(235,102,55,255)] font-semibold px-8 py-4 rounded-2xl shadow-sm transition transform hover:scale-105 hover:bg-[rgb(255,235,225)] text-base lg:text-lg">
                            Cotizar envío internacional
                        </router-link>
                        <router-link to="/#targets-section"
                            class="bg-white text-[rgba(235,102,55,255)] font-semibold px-8 py-4 rounded-2xl shadow-sm transition transform hover:scale-105 hover:bg-[rgb(255,235,225)] text-base lg:text-lg">
                            Conocer más servicios
                        </router-link>

                    </div>
                </div>
            </div>

            <!-- Navigation -->
            <div class="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                <div class="flex justify-between items-center max-w-6xl mx-auto">
                    <router-link to="/noticias"
                        class="flex items-center gap-2 text-[rgba(235,102,55,255)] hover:opacity-80 font-medium transition text-base lg:text-lg">
                        ← Volver a noticias
                    </router-link>

                    <button @click="copyLink"
                        class="flex items-center gap-2 text-[rgb(58,26,29)]/60 hover:text-[rgba(235,102,55,255)] transition rounded-2xl px-4 py-2 text-base lg:text-lg">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Compartir
                    </button>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
    import {
        useRouter
    } from 'vue-router'

    const router = useRouter()

    function copyLink() {
        const url = window.location.href
        navigator.clipboard.writeText(url).then(() => {
            console.log('Enlace copiado')
        }).catch(() => {
            console.log('Error al copiar enlace')
        })
    }
</script>
