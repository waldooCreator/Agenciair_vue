<template>
  <main class="min-h-screen bg-[#f3f4f6]">
    <!-- Hero -->
    <section class="container mx-auto px-4 sm:px-6 lg:px-10 py-8">
      <div class="bg-[rgb(235,102,55)] text-white rounded-2xl p-6 sm:p-8 shadow-xl">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold">Blog de Noticias</h1>
        <p class="mt-2 text-white/90 text-sm sm:text-base max-w-3xl">
          Información clara y útil sobre nuestros servicios, operaciones y recomendaciones.
        </p>
      </div>
    </section>

    <!-- Entradas -->
    <section class="container mx-auto px-4 sm:px-6 lg:px-10 pb-16">
      <div v-for="(post, i) in posts" :key="post.id" class="space-y-6">
        <!-- Card de noticia -->
        <article class="bg-white rounded-2xl shadow-md overflow-hidden">
          <!-- Título y metadatos -->
          <header class="p-5 sm:p-7">
            <div class="flex flex-wrap items-center gap-3 text-xs">
              <span class="inline-flex items-center px-3 py-1 rounded-full bg-[rgb(235,102,55)] text-white font-semibold">
                {{ post.tag }}
              </span>
              <span class="text-gray-500">{{ post.date }} • {{ post.read }} min</span>
            </div>
            <h2 class="mt-3 text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
              {{ post.title }}
            </h2>
            <p class="mt-2 text-gray-600 text-sm sm:text-base">
              {{ post.subtitle }}
            </p>
          </header>

          <!-- Imagen principal -->
          <div class="px-5 sm:px-7">
            <div class="rounded-xl overflow-hidden ring-1 ring-gray-100">
              <img :src="post.cover" :alt="post.title" class="w-full h-56 sm:h-80 object-cover" loading="lazy" />
            </div>
          </div>

          <!-- Texto + imagen intermedia + texto -->
          <div class="p-5 sm:p-7 space-y-5 sm:space-y-6 text-gray-700 text-sm sm:text-[15px] leading-relaxed">
            <p v-for="(p, idx) in post.paragraphsTop" :key="'pt-' + idx">{{ p }}</p>

            <div v-if="post.middleImg" class="rounded-xl overflow-hidden ring-1 ring-gray-100">
              <img :src="post.middleImg" :alt="'Imagen ' + post.title" class="w-full object-cover" loading="lazy" />
            </div>

            <p v-for="(p, idx) in post.paragraphsBottom" :key="'pb-' + idx">{{ p }}</p>

            <!-- Galería opcional -->
            <div v-if="post.gallery?.length" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="(g, gi) in post.gallery" :key="'g-' + gi" class="rounded-xl overflow-hidden ring-1 ring-gray-100">
                <img :src="g" class="w-full h-48 sm:h-56 object-cover" loading="lazy" />
              </div>
            </div>
          </div>

          <!-- CTA sutil -->
          <footer class="px-5 sm:px-7 pb-6">
            <div class="flex flex-wrap items-center gap-3">
              <button
                type="button"
                class="bg-[rgb(235,102,55)] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-200"
                @click="copyLink(post.id)"
              >
                Copiar enlace
              </button>
              <router-link
                to="/"
                class="inline-block text-[rgb(235,102,55)] text-xs font-semibold px-3 py-2 rounded-lg hover:bg-[rgb(235,102,55)]/10 transition"
              >
                Volver al inicio
              </router-link>
            </div>
          </footer>
        </article>

        <!-- DIVISOR: línea con punto central (no se muestra después del último) -->
        <div v-if="i < posts.length - 1" class="relative py-8">
          <div class="h-[2px] bg-[rgb(235,102,55)]/50 rounded-full"></div>
          <div class="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-[rgb(235,102,55)] rounded-full ring-4 ring-[rgb(235,102,55)]/20"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Separador1Noticias',
  data() {
    return {
      posts: [
        {
          id: 1,
          tag: 'Actualización',
          date: '12 ago 2025',
          read: 3,
          title: 'Nueva cobertura internacional y mejoras de tránsito',
          subtitle:
            'Ampliamos rutas a Norteamérica y Europa con mejores tiempos de entrega y trazabilidad más clara.',
          cover: new URL('../../assets/news1-cover.jpg', import.meta.url).href,
          paragraphsTop: [
            'Estamos incrementando la cobertura de envíos hacia ciudades clave y optimizando la conexión entre hubs estratégicos.',
            'Esto se traduce en tiempos más consistentes y mayor visibilidad durante todo el tránsito de tu paquete.'
          ],
          middleImg: new URL('../../assets/news1-mid.jpg', import.meta.url).href,
          paragraphsBottom: [
            'Para aprovechar estas mejoras, te recomendamos preparar tus envíos con antelación y validar dimensiones y pesos.',
            'Nuestro equipo de soporte está disponible para ayudarte a seleccionar el servicio que mejor se ajuste a tus necesidades.'
          ],
          gallery: [
            new URL('../../assets/news1-g1.jpg', import.meta.url).href,
            new URL('../../assets/news1-g2.jpg', import.meta.url).href
          ]
        },
        {
          id: 2,
          tag: 'Guía',
          date: '05 ago 2025',
          read: 4,
          title: 'Embalaje seguro para mercancía frágil',
          subtitle:
            'Recomendaciones simples para minimizar riesgos de daño: materiales, relleno y sellado correcto.',
          cover: new URL('../../assets/news2-cover.jpg', import.meta.url).href,
          paragraphsTop: [
            'Usa cajas rígidas y relleno que absorba impactos. Evita espacios vacíos y coloca etiquetas de frágil.',
            'El sellado en H refuerza las uniones y reduce aperturas accidentales durante el transporte.'
          ],
          middleImg: new URL('../../assets/news2-mid.jpg', import.meta.url).href,
          paragraphsBottom: [
            'Si envías múltiples artículos, separa cada pieza con material acolchado y mantén la distribución del peso.',
            'Ante dudas, nuestro centro de atención puede validar tu empaque antes del despacho.'
          ],
          gallery: []
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

<style scoped>
/* Tailwind cubre casi todo; este archivo queda limpio. */
</style>
