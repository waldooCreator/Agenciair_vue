<template>
  <main class="min-h-screen bg-[rgb(241,241,240)]">
    <!-- HERO SECTION -->
    <section class="relative overflow-hidden">
      <div class="container mx-auto px-6 md:px-10 lg:px-16 py-4 md:py-8 relative">
        <!-- Badge -->
        <div class="flex justify-center mb-8">
          <div class="group relative">
            <div class="absolute -inset-0.5 bg-[rgb(248,112,62)] rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
            <div class="relative inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg">
              <div class="w-3 h-3 bg-[rgb(248,112,62)] rounded-full animate-pulse"></div>
              <span class="text-sm font-bold text-[rgb(58,26,29)] tracking-wider uppercase">
                Noticias
              </span>
            </div>
          </div>
        </div>

        <!-- Título principal -->
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[rgb(248,112,62)] to-[rgb(248,112,62)] bg-clip-text text-transparent leading-tight mb-6">
            Blog de novedades y actualizaciones
          </h1>
          
          <p class="text-lg md:text-xl text-[rgb(58,26,29)] leading-relaxed max-w-2xl mx-auto">
            Información clara sobre servicios, operaciones y 
            <span class="font-semibold text-[rgb(248,112,62)]">recomendaciones</span> 
            para que tus envíos fluyan mejor.
          </p>

          <!-- Scroll indicator -->
          <div class="mt-12 flex justify-center">
            <div class="animate-bounce">
              <svg class="w-6 h-6 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTENT SECTION -->
    <section class="container mx-auto px-6 md:px-10 lg:px-16 pb-24">
      <div class="space-y-12">
        <article 
          v-for="(post, index) in posts" 
          :key="post.id" 
          :id="'post-' + post.id"
          class="group relative"
        >
          <!-- Card con efectos especiales -->
          <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
          
          <div class="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-500 overflow-hidden">
            <!-- Número de artículo -->
            <div class="absolute top-4 left-4 z-20 w-12 h-12 bg-[rgb(248,112,62)] rounded-xl flex items-center justify-center shadow-sm">
              <span class="text-white font-black text-lg">{{ index + 1 }}</span>
            </div>

            <div class="grid lg:grid-cols-12 gap-0">
              <!-- Imagen -->
              <div class="lg:col-span-5 relative">
                <div class="w-full h-full overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
                  <div class="w-full h-full min-h-[300px] lg:min-h-full">
                    <img 
                      :src="post.cover" 
                      :alt="post.title"
                      class="w-full h-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-[1.02]"
                      loading="lazy" 
                    />
                  </div>
                </div>
                
                <!-- Tag -->
                <div class="absolute right-4 top-4 z-10">
                  <div class="relative group/tag">
                    <div class="absolute -inset-0.5 bg-[rgb(248,112,62)] rounded-full blur opacity-75"></div>
                    <div class="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 shadow-sm">
                      <div class="w-2 h-2 bg-[rgb(248,112,62)] rounded-full"></div>
                      <span class="text-xs font-bold text-[rgb(58,26,29)] tracking-wider uppercase">
                        {{ post.tag }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Contenido -->
              <div class="lg:col-span-7 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <!-- Meta información -->
                <div class="flex items-center gap-3 mb-4">
                  <div class="flex items-center gap-2 text-[rgb(58,26,29)]/60 text-xs font-medium">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <span>{{ post.date }}</span>
                  </div>
                  <div class="w-1 h-1 bg-[rgb(58,26,29)]/30 rounded-full"></div>
                  <div class="flex items-center gap-2 text-[rgb(58,26,29)]/60 text-xs font-medium">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>{{ post.read }} min</span>
                  </div>
                </div>

                <!-- Título -->
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-black text-[rgb(58,26,29)] leading-tight mb-4">
                  {{ post.title }}
                </h2>
                
                <!-- Subtítulo -->
                <p class="text-lg md:text-xl text-[rgb(58,26,29)]/80 leading-relaxed mb-6">
                  {{ post.subtitle }}
                </p>

                <!-- Párrafos -->
                <div v-if="post.paragraphs?.length" class="space-y-4 text-[rgb(58,26,29)] leading-relaxed mb-8">
                  <p 
                    v-for="(p, idx) in post.paragraphs" 
                    :key="idx"
                    class="text-base md:text-lg leading-relaxed"
                  >
                    {{ p }}
                  </p>
                </div>

                <!-- Botones de acción -->
                <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <button
                    type="button"
                    @click="copyLink(post.id)"
                    class="group relative overflow-hidden bg-[rgb(248,112,62)] hover:bg-[rgb(248,112,62)]/90 text-white font-bold px-6 py-3 rounded-xl shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  >
                    <span class="relative z-10">Copiar enlace</span>
                    <svg class="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                    </svg>
                  </button>

                  <router-link
                    to="/"
                    class="group font-bold text-[rgb(248,112,62)] hover:text-[rgb(248,112,62)]/80 px-6 py-3 rounded-xl bg-[rgb(248,112,62)]/10 hover:bg-[rgb(248,112,62)]/20 transition-all duration-300 flex items-center gap-2 border-2 border-[rgb(248,112,62)]/20 hover:border-[rgb(248,112,62)]/40"
                  >
                    <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                    <span>Volver al inicio</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const posts = ref([
  {
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
])

// Función para copiar enlace
function copyLink(id) {
  const url = `${window.location.origin}/noticias#post-${id}`
  navigator.clipboard.writeText(url).catch(() => {
    // Fallback si clipboard no está disponible
    console.log('Enlace:', url)
  })
}
</script>