<template>
    <main class="min-h-screen bg-[#f3f4f6]">
        <section id="noticias-top" class="container mx-auto px-4 sm:px-6 lg:px-10 py-8">
            <div class="relative overflow-hidden rounded-3xl sm:rounded-[2rem] text-white shadow-xl">
                <div class="absolute inset-0 bg-[#F8703E]">
                    <div class="absolute inset-0 opacity-80 bg-gradient-to-br from-[#F8703E] via-[#F8703E] to-[#e26235]">
                    </div>
                </div>
                <div class="relative p-6 sm:p-8 lg:p-12">
                    <div class="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3 py-1.5 rounded-full">
                        <span class="h-2 w-2 rounded-full bg-white"></span>
                        <span class="text-xs font-semibold tracking-wide uppercase">Noticias</span>
                    </div>
                    <h1 class="mt-4 text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                        Blog de novedades y actualizaciones
                    </h1>
                    <p class="mt-3 sm:mt-4 max-w-3xl text-white/90 text-sm sm:text-base">
                        Información clara sobre servicios, operaciones y recomendaciones para que tus envíos fluyan
                        mejor.
                    </p>
                    <div class="mt-6 h-px w-full bg-white/20"></div>
                </div>
            </div>
        </section>

        <section class="container mx-auto px-4 sm:px-6 lg:px-10 pb-20">
            <div class="space-y-10">
                <article v-for="post in posts" :key="post.id" :id="'post-' + post.id"
                    class="relative overflow-hidden rounded-3xl bg-white shadow-[0_8px_28px_rgba(2,6,23,0.06)] ring-1 ring-black/5">

                    <div class="grid lg:grid-cols-12 gap-0">
                        <div class="lg:col-span-5 relative">
                            <div class="w-full overflow-hidden">
                                <div class="w-full aspect-[16/10] md:aspect-[5/4] lg:aspect-[4/3]">
                                    <img :src="post.cover" :alt="post.title"
                                        class="w-full h-full object-cover transition-transform duration-500 will-change-transform hover:scale-[1.02]"
                                        loading="lazy" />
                                </div>
                            </div>
                            <div class="absolute left-4 top-4">
                                <span
                                    class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 text-[#F8703E] font-semibold text-[11px] shadow">
                                    <span class="h-2 w-2 rounded-full bg-[#F8703E]"></span>{{ post . tag }}
                                </span>
                            </div>
                        </div>

                        <div class="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center">
                            <div class="text-gray-500 text-[11px] sm:text-xs">{{ post . date }} • {{ post . read }}
                                min</div>
                            <h2 class="mt-2 text-2xl sm:text-3xl font-bold leading-tight text-gray-900">
                                {{ post . title }}
                            </h2>
                            <p class="mt-3 text-gray-600">
                                {{ post . subtitle }}
                            </p>

                            <div v-if="post.paragraphs?.length"
                                class="mt-4 space-y-3 text-sm sm:text-[15px] leading-relaxed text-gray-700">
                                <p v-for="(p, idx) in post.paragraphs" :key="idx">{{ p }}</p>
                            </div>

                            <div class="mt-6 flex flex-wrap items-center gap-3">
                                <button type="button"
                                    class="bg-[#F8703E] text-white text-xs font-semibold px-4 py-2 rounded-lg transition hover:shadow-lg"
                                    @click="copyLink(post.id)">
                                    Copiar enlace
                                </button>
                                <router-link to="/"
                                    class="text-[#F8703E] text-xs font-semibold px-3 py-2 rounded-lg hover:bg-[#F8703E]/10">
                                    Volver al inicio
                                </router-link>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    </main>
</template>

<script>
    export default {
        name: 'Separador1Noticias',
        data() {
            return {
                posts: [{
                        id: 1,
                        tag: 'Actualización',
                        date: '12 ago 2025',
                        read: 3,
                        title: 'Nueva cobertura internacional y mejoras de tránsito',
                        subtitle: 'Ampliamos rutas a Norteamérica y Europa con mejores tiempos de entrega y trazabilidad más clara.',
                        cover: '/images/paquete.png',
                        paragraphs: [
                            'Estamos incrementando la cobertura de envíos hacia ciudades clave y optimizando la conexión entre hubs estratégicos.',
                            'Esto se traduce en tiempos más consistentes y mayor visibilidad durante todo el tránsito de tu paquete.'
                        ]
                    },
                    {
                        id: 2,
                        tag: 'Guía',
                        date: '05 ago 2025',
                        read: 4,
                        title: 'Embalaje seguro para mercancía frágil',
                        subtitle: 'Recomendaciones simples para minimizar riesgos de daño: materiales, relleno y sellado correcto.',
                        cover: '/images/Gemini_Generated_Image_25c4dq25c4dq25c4.png',
                        paragraphs: [
                            'Usa cajas rígidas y relleno que absorba impactos. Evita espacios vacíos y coloca etiquetas de frágil.',
                            'El sellado en H refuerza las uniones y reduce aperturas accidentales durante el transporte.'
                        ]
                    }
                ]
            }
        },
        methods: {
            copyLink(id) {
                const url = `${window.location.origin}/separador1-noticias#post-${id}`
                navigator.clipboard.writeText(url).catch(() => {})
            }
        }
    }
</script>
