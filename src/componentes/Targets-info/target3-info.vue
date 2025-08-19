<template>
  <main class="min-h-screen">
    <!-- HERO SECTION -->
    <section class="relative overflow-hidden py-12 md:py-20">
      <!-- Mismo desplazamiento lateral derecho que el ejemplo -->
      <div class="lg:ml-72 lg:pl-8 md:px-10 px-6 relative">
        <div class="max-w-5xl mx-auto">
          <!-- Badge -->
          <div class="flex justify-center mb-8">
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-[rgb(248,112,62)] rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
              <div class="relative inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg">
                <div class="w-3 h-3 bg-[rgb(248,112,62)] rounded-full animate-pulse"></div>
                <span class="text-sm font-bold text-[rgb(58,26,29)] tracking-wider uppercase">
                  Envíos a Venezuela
                </span>
              </div>
            </div>
          </div>

          <!-- Título principal -->
          <div class="text-center">
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[rgb(248,112,62)] to-[rgb(248,112,62)] bg-clip-text text-transparent leading-tight mb-6">
              Conectamos con Venezuela
            </h1>
            
            <p class="text-lg md:text-xl text-[rgb(58,26,29)] leading-relaxed max-w-3xl mx-auto mb-8">
              A través de nuestro aliado estratégico 
              <span class="font-semibold text-[rgb(248,112,62)]">Calidex</span>, 
              llevamos tus envíos de manera segura y confiable al territorio venezolano, 
              manteniendo a las familias y empresas conectadas sin fronteras.
            </p>

            <!-- Stats destacados -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
              <div class="text-center">
                <div class="text-3xl font-black text-[rgb(248,112,62)]">{{ experienciaAnos }}+</div>
                <div class="text-sm text-[rgb(58,26,29)] font-medium">Años de Experiencia</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-black text-[rgb(248,112,62)]">{{ estadosVenezuela }}+</div>
                <div class="text-sm text-[rgb(58,26,29)] font-medium">Estados Cubiertos</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-black text-[rgb(248,112,62)]">{{ ratingVenezuela }}</div>
                <div class="text-sm text-[rgb(58,26,29)] font-medium">Rating Promedio</div>
              </div>
            </div>

            <!-- Scroll indicator -->
            <div class="flex justify-center">
              <div class="animate-bounce">
                <svg class="w-6 h-6 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTENT SECTION -->
    <section class="pb-24">
      <!-- NAV FIJO DEL ÍNDICE -->
      <nav class="hidden lg:block fixed left-6 top-40 w-64 z-30">
        <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
          <div class="flex items-center gap-2 text-[rgb(58,26,29)] font-semibold mb-3">
            <svg class="w-4 h-4 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h18M3 12h18M3 19h18"/>
            </svg>
            <span>Contenido</span>
          </div>
          <ul class="space-y-1">
            <li v-for="item in tocItems" :key="item.id">
              <a
                href="#"
                @click.prevent="scrollToId(item.id)"
                :class="[
                  'flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition',
                  activeId === item.id
                    ? 'bg-[rgb(248,112,62)]/10 text-[rgb(248,112,62)] font-semibold'
                    : 'text-[rgb(58,26,29)] hover:bg-[rgb(248,112,62)]/5'
                ]"
              >
                <span class="w-6 h-6 inline-flex items-center justify-center rounded-full bg-[rgb(248,112,62)]/10 text-[rgb(248,112,62)] text-xs font-bold">
                  {{ item.num }}
                </span>
                <span class="truncate">{{ item.label }}</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <!-- /NAV FIJO -->

      <!-- Contenido principal desplazado a la derecha -->
      <div class="lg:ml-72 lg:pl-8 md:px-10 px-6">
        <div class="max-w-4xl mx-auto">
          
          <!-- Introducción narrativa -->
          <article id="intro" class="section-spacing scroll-mt-28 md:scroll-mt-36">
            <div class="relative group">
              <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              
              <!-- CARD BLANCO SÓLIDO -->
              <div class="relative glass-effect rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200">
                <div class="text-center mb-8">
                  <div class="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h2 class="text-3xl md:text-4xl font-bold text-[rgb(58,26,29)] mb-6">
                    Puente Logístico Colombia-Venezuela
                  </h2>
                </div>

                <div class="prose prose-lg max-w-none text-[rgb(58,26,29)] space-y-6">
                  <p class="text-lg leading-relaxed">
                    Las fronteras no deben ser barreras para mantener unidas a las familias y los negocios. 
                    <strong class="text-[rgb(248,112,62)]">Entendemos la importancia de cada envío</strong> 
                    que cruza hacia Venezuela, ya sea un regalo para un ser querido, medicinas esenciales o productos comerciales 
                    que fortalecen los lazos entre ambos países hermanos.
                  </p>
                  
                  <p class="text-lg leading-relaxed">
                    Por eso confiamos en <strong class="text-[rgb(248,112,62)]">Calidex</strong>, una empresa especializada 
                    en logística internacional con amplio conocimiento de los procedimientos fronterizos, regulaciones aduaneras 
                    y la realidad operativa entre Colombia y Venezuela. Su experiencia de más de 15 años en este corredor 
                    nos permite ofrecer un servicio confiable, transparente y humano.
                  </p>

                  <div class="bg-[rgb(248,112,62)]/10 rounded-2xl p-6 border-l-4 border-[rgb(248,112,62)]">
                    <blockquote class="text-xl font-medium text-[rgb(58,26,29)] italic">
                      "Cada paquete hacia Venezuela lleva más que mercancía: lleva amor, esperanza y la promesa 
                      de mantener vivos los vínculos que nos unen como pueblos hermanos."
                    </blockquote>
                    <cite class="text-sm text-[rgb(248,112,62)] font-semibold mt-2 block">- Equipo de Logística Internacional</cite>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <!-- Sección de aliados internacionales -->
          <div class="section-spacing">
            <!-- Título de categoría -->
            <div id="especialista" class="relative group mb-8 scroll-mt-28 md:scroll-mt-36">
              <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

              <!-- CARD BLANCO SÓLIDO -->
              <div class="relative glass-effect rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
                <div class="flex items-center gap-4">
                  <div class="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center shadow-lg">
                    <span class="text-white font-black text-xl">1</span>
                  </div>
                  <div>
                    <h2 class="text-2xl md:text-3xl font-bold text-[rgb(58,26,29)]">
                      Especialista en Logística Internacional
                    </h2>
                    <p class="text-[rgb(58,26,29)]/70 mt-2">Aliado con cobertura en 18+ estados venezolanos</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contenido de cada aliado -->
            <div
              v-for="(aliado, indiceAliado) in aliadosInternacionales"
              :key="indiceAliado"
              :id="`aliado-${indiceAliado}`"
              class="relative group mb-12 scroll-mt-28 md:scroll-mt-36"
            >
              <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur opacity-0 group-hover:opacity-15 transition duration-500"></div>
              
              <!-- CARD BLANCO SÓLIDO -->
              <div class="relative glass-effect rounded-3xl p-8 md:p-10 shadow-lg border border-gray-200">
                <!-- Header con imagen -->
                <div class="mb-8">
                  <div class="w-full rounded-2xl mb-6 overflow-hidden shadow-lg
                              aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-64">
                    <img 
                      :src="aliado.imagenUrl" 
                      :alt="aliado.nombre"
                      class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  
                  <div class="flex flex-wrap items-center gap-4 mb-6">
                    <span class="px-4 py-2 bg-[rgb(248,112,62)]/20 text-[rgb(248,112,62)] text-sm font-bold rounded-full">
                      {{ aliado.categoria }}
                    </span>
                    <span class="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full flex items-center gap-1">
                      <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                      Aliado desde {{ aliado.fechaAlianza }}
                    </span>
                    <div class="flex items-center gap-1">
                      <div class="flex">
                        <svg v-for="estrella in 5" :key="estrella" 
                             class="w-4 h-4" 
                             :class="estrella <= aliado.rating ? 'text-yellow-400' : 'text-gray-300'" 
                             fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      </div>
                      <span class="text-sm text-[rgb(58,26,29)] font-medium ml-1">{{ aliado.rating }}/5</span>
                    </div>
                  </div>
                </div>

                <div class="prose prose-lg max-w-none text-[rgb(58,26,29)] space-y-6">
                  <p class="text-lg leading-relaxed" v-html="aliado.descripcionCompleta"></p>
                  
                  <p class="text-lg leading-relaxed" v-html="aliado.descripcionAdicional"></p>

                  <div class="grid md:grid-cols-2 gap-6 my-8">
                    <!-- CARDS BLANCOS -->
                    <div class="bg-white rounded-2xl p-6 border border-gray-200">
                      <div class="flex items-center gap-3 mb-4">
                        <svg class="w-6 h-6 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <h4 class="font-bold text-[rgb(58,26,29)]">Cobertura Venezuela</h4>
                      </div>
                      <p class="text-[rgb(58,26,29)]">{{ aliado.cobertura }}</p>
                    </div>
                    
                    <div class="bg-white rounded-2xl p-6 border border-gray-200">
                      <div class="flex items-center gap-3 mb-4">
                        <svg class="w-6 h-6 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                        <h4 class="font-bold text-[rgb(58,26,29)]">Rendimiento</h4>
                      </div>
                      <p class="text-[rgb(58,26,29)]">Más de {{ aliado.enviosCompletados.toLocaleString() }} envíos a Venezuela exitosos</p>
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

                  <!-- Fortalezas Regionales -->
                  <div class="bg-white rounded-2xl p-6 border border-gray-200">
                    <h4 class="font-bold text-[rgb(58,26,29)] mb-4 flex items-center gap-2">
                      <svg class="w-5 h-5 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      Fortalezas Regionales
                    </h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div v-for="fortaleza in aliado.fortalezasRegionales" :key="fortaleza.region"
                          class="bg-white rounded-xl p-4 border border-gray-200">
                        <div class="flex items-start gap-3">
                          <div class="w-10 h-10 bg-[rgb(248,112,62)] rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            </svg>
                          </div>
                          <div>
                            <h5 class="font-semibold text-[rgb(58,26,29)] mb-1">{{ fortaleza.region }}</h5>
                            <p class="text-sm text-[rgb(58,26,29)]/80">{{ fortaleza.descripcion }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Tiempos de Entrega -->
                  <div class="bg-white rounded-2xl p-6 border border-gray-200">
                    <h4 class="font-bold text-[rgb(58,26,29)] mb-4 flex items-center gap-2">
                      <svg class="w-5 h-5 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Tiempos de Entrega Promedio
                    </h4>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div v-for="(tiempo, region) in aliado.tiemposEntrega" :key="region"
                          class="bg-white rounded-xl p-4 text-center border border-gray-200">
                        <div class="text-2xl font-black text-[rgb(248,112,62)] mb-1">{{ tiempo }}</div>
                        <div class="text-sm text-[rgb(58,26,29)] font-medium">{{ region }}</div>
                      </div>
                    </div>
                  </div>

                  <!-- Certificaciones -->
                  <div class="bg-white rounded-2xl p-6 border border-gray-200">
                    <h4 class="font-bold text-[rgb(58,26,29)] mb-4 flex items-center gap-2">
                      <svg class="w-5 h-5 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Certificaciones y Acreditaciones
                    </h4>
                    <div class="flex flex-wrap gap-3">
                      <span v-for="cert in aliado.certificaciones" :key="cert"
                            class="px-4 py-2 bg-white text-[rgb(58,26,29)] text-sm font-bold rounded-xl border border-gray-200 flex items-center gap-2">
                        <svg class="w-4 h-4 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {{ cert }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /aliado -->
          </div>

          <!-- Sección de contacto -->
          <div id="contacto" class="relative group mt-16 scroll-mt-28 md:scroll-mt-36">
            <div class="relative bg-white rounded-3xl p-8 md:p-10 lg:p-12 shadow-md border border-gray-200">
              <div class="text-center">
                <div class="w-16 h-16 md:w-20 md:h-20 bg-[rgb(248,112,62)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <svg class="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>

                <h3 class="text-2xl md:text-3xl font-black text-[rgb(58,26,29)] mb-4">
                  ¿Necesitas enviar a Venezuela?
                </h3>
                
                <p class="text-base md:text-lg text-[rgb(58,26,29)] mb-8 max-w-lg mx-auto">
                  Conecta con tus seres queridos o expande tu negocio hacia Venezuela con la confianza de un aliado especializado.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    @click="cotizarVenezuela"
                    class="group relative overflow-hidden bg-[rgb(248,112,62)] hover:bg-[rgb(248,112,62)]/90 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-sm hover:shadow-md transform hover:scale-105 transition-all duración-300 flex items-center gap-3 text-sm md:text-base"
                  >
                    <span class="relative z-10">Cotizar Envío a Venezuela</span>
                    <svg class="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </button>

                  <button
                    @click="masInformacionVenezuela"
                    class="group font-bold text-[rgb(248,112,62)] hover:text-[rgb(248,112,62)]/80 px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-[rgb(248,112,62)]/10 hover:bg-[rgb(248,112,62)]/20 transition-all duration-300 flex items-center gap-3 border-2 border-[rgb(248,112,62)]/20 hover:border-[rgb(248,112,62)]/40 text-sm md:text-base"
                  >
                    <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                    <span>Más información</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- /contacto -->
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

/* ===== Índice y scroll suave ===== */
const activeId = ref('intro')

const tocItems = computed(() => {
  const base = [
    { id: 'intro',        label: 'Introducción',                 num: 1 },
    { id: 'especialista', label: 'Especialista Internacional',   num: 2 }
  ]
  const aliados = aliadosInternacionales.map((a, i) => ({
    id: `aliado-${i}`,
    label: a.nombre,
    num: i + 3
  }))
  const contacto = { id: 'contacto', label: 'Contacto', num: aliados.length + 3 }
  return [...base, ...aliados, contacto]
})

function scrollToId (id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

let observer
onMounted(() => {
  observer = new IntersectionObserver(
    entries => { entries.forEach(e => { if (e.isIntersecting) activeId.value = e.target.id }) },
    { rootMargin: '0px 0px -70% 0px', threshold: 0.1 }
  )
  tocItems.value.forEach(item => {
    const el = document.getElementById(item.id)
    if (el) observer.observe(el)
  })
})

onBeforeUnmount(() => observer && observer.disconnect())

// ===== Datos originales =====

// Datos de los aliados internacionales (Venezuela)
const aliadosInternacionales = [
  {
    nombre: 'Calidex - Logística Internacional',
    categoria: 'Especialista en Envíos Colombia-Venezuela',
    imagenUrl: 'https://calidex.co/wp-content/uploads/2025/03/hero-1.png',
    descripcionCompleta: '<strong class="text-[rgb(248,112,62)]">Calidex</strong> se ha consolidado como el operador logístico de referencia para envíos entre Colombia y Venezuela. Con más de 15 años de experiencia especializada en este corredor, conocen cada detalle del proceso: desde la documentación requerida hasta los tiempos de tránsito más eficientes, pasando por el manejo cuidadoso de productos sensibles como medicinas y alimentos.',
    descripcionAdicional: 'Su red operativa cubre los principales estados venezolanos y cuenta con un equipo bilingüe que entiende las particularidades culturales y comerciales de ambos países. Calidex no solo transporta paquetes: facilita el reencuentro de familias, apoya el comercio bilateral y contribuye a mantener vivos los lazos históricos entre Colombia y Venezuela.',
    servicios: ['Paquetes Personales', 'Medicinas', 'Documentos', 'Remesas Comerciales', 'Alimentos No Perecederos', 'Productos Tecnológicos'],
    cobertura: '18 estados venezolanos cubiertos, incluyendo Caracas, Valencia, Maracaibo, Barquisimeto y principales ciudades',
    fechaAlianza: 'Enero 2021',
    rating: 5,
    enviosCompletados: 28000,
    fortalezasRegionales: [
      { region: 'Región Capital', descripcion: 'Cobertura completa de Caracas y Miranda con entrega puerta a puerta' },
      { region: 'Región Zuliana', descripcion: 'Red especializada en Maracaibo y zona occidental venezolana' },
      { region: 'Región Central', descripcion: 'Hub logístico en Valencia para estados Aragua y Carabobo' },
      { region: 'Región Oriental', descripcion: 'Conectividad con Barcelona, Puerto La Cruz y estados orientales' }
    ],
    tiemposEntrega: {
      'Caracas': '8-10 días',
      'Valencia': '10-12 días',
      'Maracaibo': '12-14 días',
      'Otras Ciudades': '12-15 días'
    },
    certificaciones: ['Registro DIAN', 'Certificación Internacional', 'BASC Venezuela', 'ISO Logística', 'Habilitación Fronteriza']
  }
]

// Calcular estadísticas
const experienciaAnos = computed(() => '15')
const estadosVenezuela = computed(() => '18')
const ratingVenezuela = computed(() => '4.8')

// Métodos usados en los botones
function cotizarVenezuela () {
  router.push('/cotizar-venezuela')
}
function masInformacionVenezuela () {
  router.push({ name: 'cotizar-info' })
}
</script>

<!-- Global: scroll suave -->
<style>
html { scroll-behavior: smooth; }
</style>

<!-- Fondo aplicado SOLO al body -->
<style>
body {
  background-color: rgb(241, 241, 240); /* Gris cálido claro */
}
</style>

<style scoped>
.section-spacing { @apply mb-16; }

/* Blanco sólido para cards */
.glass-effect {
  background: #ffffff;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  box-shadow: 0 10px 20px rgba(0,0,0,0.06);
}

.gradient-bg {
  background: linear-gradient(135deg, rgb(248,112,62) 0%, rgb(248,112,62) 100%);
}

@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
.animate-float { animation: float 3s ease-in-out infinite; }

/* Responsive adjustments */
@media (max-width: 768px) { .container { @apply px-4; } }

/* Custom scrollbar */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #f1f1f0; }
::-webkit-scrollbar-thumb { background: rgb(248,112,62); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: rgba(248,112,62,0.8); }
</style>
