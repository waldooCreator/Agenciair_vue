<template>
  <main class="min-h-screen bg-[rgb(241,234,218)] pb-20">
    <!-- HERO SECTION -->
    <section class="relative overflow-hidden py-8 md:py-12 lg:py-20">
      <div class="lg:ml-72 lg:pl-8 md:px-6 px-4 relative">
        <div class="container mx-auto">
          <!-- Badge -->
          <div class="flex justify-center mb-6 md:mb-8">
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-[rgb(248,112,62)] rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
              <div class="relative inline-flex items-center gap-2 md:gap-3 bg-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg">
                <div class="w-2 h-2 md:w-3 md:h-3 bg-[rgb(248,112,62)] rounded-full animate-pulse"></div>
                <span class="text-xs md:text-sm font-bold text-[rgb(58,26,29)] tracking-wider uppercase">
                  Envíos Internacionales
                </span>
              </div>
            </div>
          </div>

          <!-- Título principal -->
          <div class="text-center max-w-5xl mx-auto">
            <h1 class="text-3xl md:text-5xl lg:text-7xl font-black bg-gradient-to-r from-[rgb(248,112,62)] to-[rgb(248,112,62)] bg-clip-text text-transparent leading-tight mb-4 md:mb-6">
              Conectamos el Mundo
            </h1>

            <p class="text-base md:text-lg lg:text-xl text-[rgb(58,26,29)] leading-relaxed max-w-3xl mx-auto mb-6 md:mb-8 px-2">
              Descubre cómo nuestros aliados internacionales nos permiten
              <span class="font-semibold text-[rgb(248,112,62)]">llevar tus envíos a cualquier destino global</span>
              con la confianza y seguridad que solo los líderes mundiales en logística pueden ofrecer.
            </p>

            <!-- Stats destacados -->
            <div class="grid grid-cols-3 gap-3 md:gap-6 max-w-2xl mx-auto mb-8 md:mb-12">
              <div class="text-center">
                <div class="text-xl md:text-3xl font-black text-[rgb(248,112,62)]">{{ totalAliados }}+</div>
                <div class="text-xs md:text-sm text-[rgb(58,26,29)] font-medium">Aliados Globales</div>
              </div>
              <div class="text-center">
                <div class="text-xl md:text-3xl font-black text-[rgb(248,112,62)]">{{ totalPaises }}+</div>
                <div class="text-xs md:text-sm text-[rgb(58,26,29)] font-medium">Países de Destino</div>
              </div>
              <div class="text-center">
                <div class="text-xl md:text-3xl font-black text-[rgb(248,112,62)]">{{ ratingPromedio }}</div>
                <div class="text-xs md:text-sm text-[rgb(58,26,29)] font-medium">Rating Promedio</div>
              </div>
            </div>

            <!-- Scroll indicator -->
            <div class="flex justify-center">
              <div class="animate-bounce">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTENT SECTION -->
    <section class="relative">
      <!-- NAV FIJO DESKTOP -->
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

      <!-- *** NUEVO TOC PARA MOBILE/TABLET (inline al inicio) *** -->
      <div class="lg:ml-72 lg:pl-8 px-4 md:px-6">
        <div class="lg:hidden max-w-4xl mx-auto -mt-2 mb-6 md:mb-8">
          <div class="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 md:p-5">
            <div class="flex items-center gap-2 text-[rgb(58,26,29)] font-semibold mb-3">
              <svg class="w-4 h-4 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h18M3 12h18M3 19h18"/>
              </svg>
              <span>Contenido</span>
            </div>

            <div class="grid gap-1">
              <a
                v-for="item in tocItems"
                :key="item.id"
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
            </div>
          </div>
        </div>
      </div>
      <!-- *** FIN TOC MOBILE/TABLET *** -->

      <!-- CONTENT -->
      <div class="lg:ml-72 lg:pl-8 px-4 md:px-6 pt-6 md:pt-8">
        <div class="max-w-4xl mx-auto">
          <!-- Introducción -->
          <article id="intro" class="mb-12 md:mb-16 scroll-mt-28 md:scroll-mt-36">
            <div class="relative group">
              <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div class="relative glass-effect rounded-3xl p-6 md:p-8 lg:p-12 shadow-lg border border-white/50">
                <div class="text-center mb-6 md:mb-8">
                  <div class="w-16 h-16 md:w-20 md:h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 animate-float">
                    <svg class="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                  <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[rgb(58,26,29)] mb-4 md:mb-6">
                    Alianzas Globales de Confianza
                  </h2>
                </div>

                <div class="text-[rgb(58,26,29)] space-y-4 md:space-y-6">
                  <p class="text-base md:text-lg leading-relaxed">
                    En el complejo mundo de la logística internacional, <strong class="text-[rgb(248,112,62)]">la confiabilidad es fundamental</strong>.
                    Por eso hemos establecido alianzas estratégicas con los líderes mundiales más reconocidos en envíos internacionales.
                  </p>

                  <p class="text-base md:text-lg leading-relaxed">
                    Estas alianzas nos permiten ofrecer acceso directo a redes logísticas que abarcan más de 220 países,
                    garantizando que sus envíos lleguen con máxima seguridad y puntualidad.
                  </p>

                  <div class="bg-[rgb(248,112,62)]/10 rounded-2xl p-4 md:p-6 border-l-4 border-[rgb(248,112,62)]">
                    <blockquote class="text-lg md:text-xl font-medium text-[rgb(58,26,29)] italic">
                      "Trabajar con líderes mundiales nos permite ofrecer el mismo nivel de servicio premium
                      con atención personalizada que nos caracteriza."
                    </blockquote>
                    <cite class="text-sm text-[rgb(248,112,62)] font-semibold mt-2 block">- Equipo de Logística Internacional</cite>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <!-- Título Líderes -->
          <div id="lideres" class="relative group mb-6 md:mb-8 scroll-mt-28 md:scroll-mt-36">
            <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            <div class="relative glass-effect rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg border border-white/50">
              <div class="flex items-center gap-3 md:gap-4">
                <div class="w-12 h-12 md:w-16 md:h-16 gradient-bg rounded-xl flex items-center justify-center shadow-lg">
                  <span class="text-white font-black text-lg md:text-xl">1</span>
                </div>
                <div>
                  <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-[rgb(58,26,29)]">
                    Líderes Mundiales en Logística
                  </h2>
                  <p class="text-[rgb(58,26,29)]/70 mt-1 md:mt-2 text-sm md:text-base">
                    Aliados con presencia en más de 220 países
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Aliados -->
          <div
            v-for="(aliado, indiceAliado) in aliadosInternacionales"
            :key="indiceAliado"
            :id="`aliado-${indiceAliado}`"
            class="relative group mb-8 md:mb-12 scroll-mt-28 md:scroll-mt-36"
          >
            <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur opacity-0 group-hover:opacity-15 transition duration-500"></div>
            <div class="relative glass-effect rounded-3xl p-4 md:p-6 lg:p-10 shadow-lg border border-white/50">

              <!-- Header con imagen -->
              <div class="mb-6 md:mb-8">
                <div class="w-full rounded-2xl mb-4 md:mb-6 overflow-hidden shadow-lg aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-64">
                  <img
                    :src="aliado.imagenUrl"
                    :alt="aliado.nombre"
                    class="w-full h-full hover:scale-105 transition-transform duration-500"
                    :class="[
                      aliado.nombre.includes('DHL') 
                        ? 'object-contain bg-white p-2 md:p-4' 
                        : 'object-cover'
                    ]"
                    loading="lazy"
                  />
                </div>

                <div class="flex flex-wrap items-center gap-2 md:gap-4 mb-4 md:mb-6">
                  <span class="px-3 md:px-4 py-1 md:py-2 bg-[rgb(248,112,62)]/20 text-[rgb(248,112,62)] text-xs md:text-sm font-bold rounded-full">
                    {{ aliado.categoria }}
                  </span>
                  <span class="px-2 md:px-3 py-1 bg-green-100 text-green-700 text-xs md:text-sm font-medium rounded-full flex items-center gap-1">
                    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                    Aliado desde {{ aliado.fechaAlianza }}
                  </span>
                  <div class="flex items-center gap-1">
                    <div class="flex">
                      <svg v-for="estrella in 5" :key="estrella" class="w-3 h-3 md:w-4 md:h-4"
                           :class="estrella <= aliado.rating ? 'text-yellow-400' : 'text-gray-300'"
                           fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span class="text-xs md:text-sm text-[rgb(58,26,29)] font-medium ml-1">{{ aliado.rating }}/5</span>
                  </div>
                </div>
              </div>

              <div class="text-[rgb(58,26,29)] space-y-4 md:space-y-6">
                <p class="text-sm md:text-base lg:text-lg leading-relaxed" v-html="aliado.descripcionCompleta"></p>
                <p class="text-sm md:text-base lg:text-lg leading-relaxed" v-html="aliado.descripcionAdicional"></p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-6 md:my-8">
                  <div class="bg-white/50 rounded-2xl p-4 md:p-6 border border-white/30">
                    <div class="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <svg class="w-5 h-5 md:w-6 md:h-6 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                      </svg>
                      <h4 class="font-bold text-[rgb(58,26,29)] text-sm md:text-base">Cobertura Global</h4>
                    </div>
                    <p class="text-[rgb(58,26,29)] text-sm md:text-base">{{ aliado.cobertura }}</p>
                  </div>

                  <div class="bg-white/50 rounded-2xl p-4 md:p-6 border border-white/30">
                    <div class="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                      <svg class="w-5 h-5 md:w-6 md:h-6 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <h4 class="font-bold text-[rgb(58,26,29)] text-sm md:text-base">Rendimiento</h4>
                    </div>
                    <p class="text-[rgb(58,26,29)] text-sm md:text-base">
                      Más de {{ aliado.enviosCompletados.toLocaleString() }} envíos exitosos
                    </p>
                  </div>
                </div>

                <!-- Servicios -->
                <div class="bg-[rgb(248,112,62)]/5 rounded-2xl p-4 md:p-6 border border-[rgb(248,112,62)]/10">
                  <h4 class="font-bold text-[rgb(58,26,29)] mb-3 text-sm md:text-base">Servicios Especializados:</h4>
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                    <span v-for="servicio in aliado.servicios" :key="servicio"
                          class="px-2 md:px-3 py-1 md:py-2 bg-[rgb(248,112,62)]/10 text-[rgb(248,112,62)] text-xs md:text-sm font-medium rounded-xl text-center">
                      {{ servicio }}
                    </span>
                  </div>
                </div>

                <!-- Ventajas Competitivas -->
                <div class="bg-white/50 rounded-2xl p-4 md:p-6 border border-white/30">
                  <h4 class="font-bold text-[rgb(58,26,29)] mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                    <svg class="w-4 h-4 md:w-5 md:h-5 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7 7a3 3 0 00-3 3v0a3 3 0 003 3h3m4-6a3 3 0 013-3v0a3 3 0 013 3v0a3 3 0 01-3 3h-3m-6 0v0a3 3 0 003-3v0a3 3 0 013 3v0a3 3 0 01-3 3h-3z" />
                    </svg>
                    Ventajas Competitivas
                  </h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div v-for="ventaja in aliado.ventajasCompetitivas" :key="ventaja.titulo"
                         class="bg-white/70 rounded-xl p-3 md:p-4 border border-white/30">
                      <div class="flex items-start gap-2 md:gap-3">
                        <div class="w-8 h-8 md:w-10 md:h-10 bg-[rgb(248,112,62)] rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg class="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="ventaja.iconPath" />
                          </svg>
                        </div>
                        <div>
                          <h5 class="font-semibold text-[rgb(58,26,29)] mb-1 text-sm md:text-base">{{ ventaja.titulo }}</h5>
                          <p class="text-xs md:text-sm text-[rgb(58,26,29)]/80">{{ ventaja.descripcion }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Tiempos de Entrega -->
                <div class="bg-white/50 rounded-2xl p-4 md:p-6 border border-white/30">
                  <h4 class="font-bold text-[rgb(58,26,29)] mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                    <svg class="w-4 h-4 md:w-5 md:h-5 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Tiempos de Entrega Promedio
                  </h4>
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    <div v-for="(tiempo, region) in aliado.tiemposEntrega" :key="region"
                         class="bg-white/70 rounded-xl p-3 md:p-4 text-center border border-white/30">
                      <div class="text-xl md:text-2xl font-black text-[rgb(248,112,62)] mb-1">{{ tiempo }}</div>
                      <div class="text-xs md:text-sm text-[rgb(58,26,29)] font-medium">{{ region }}</div>
                    </div>
                  </div>
                </div>

                <!-- Certificaciones -->
                <div class="bg-white/50 rounded-2xl p-4 md:p-6 border border-white/30">
                  <h4 class="font-bold text-[rgb(58,26,29)] mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                    <svg class="w-4 h-4 md:w-5 md:h-5 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Certificaciones y Acreditaciones
                  </h4>
                  <div class="flex flex-wrap gap-2 md:gap-3">
                    <span v-for="cert in aliado.certificaciones" :key="cert"
                          class="px-3 md:px-4 py-1 md:py-2 bg-white/70 text-[rgb(58,26,29)] text-xs md:text-sm font-bold rounded-xl border border-white/30 flex items-center gap-2">
                      <svg class="w-3 h-3 md:w-4 md:h-4 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {{ cert }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sección de contacto -->
          <div id="contacto" class="relative group mt-12 md:mt-16 scroll-mt-28 md:scroll-mt-36">
            <div class="relative bg-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-md border border-gray-200">
              <div class="text-center">
                <div class="w-16 h-16 md:w-20 md:h-20 bg-[rgb(248,112,62)] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-sm">
                  <svg class="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>

                <h3 class="text-xl md:text-2xl lg:text-3xl font-black text-[rgb(58,26,29)] mb-3 md:mb-4">
                  ¿Necesitas enviar al extranjero?
                </h3>

                <p class="text-sm md:text-base lg:text-lg text-[rgb(58,26,29)] mb-6 md:mb-8 max-w-lg mx-auto">
                  Conecta tu negocio con el mundo entero a través de nuestros aliados internacionales de confianza.
                </p>

                <div class="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                  <button @click="cotizarInternacional"
                          class="group relative overflow-hidden bg-[rgb(248,112,62)] hover:bg-[rgb(248,112,62)]/90 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 flex items-center gap-2 md:gap-3 text-sm md:text-base">
                    <span class="relative z-10">Cotizar Envío Internacional</span>
                    <svg class="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform"
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>

                  <button @click="masInformacion"
                          class="group font-bold text-[rgb(248,112,62)] hover:text-[rgb(248,112,62)]/80 px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-[rgb(248,112,62)]/10 hover:bg-[rgb(248,112,62)]/20 transition-all duration-300 flex items-center gap-2 md:gap-3 border-2 border-[rgb(248,112,62)]/20 hover:border-[rgb(248,112,62)]/40 text-sm md:text-base">
                    <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Más información</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()


// TOC State
const activeId = ref('intro')

const tocItems = computed(() => {
  const base = [
    { id: 'intro', label: 'Introducción', num: 1 },
    { id: 'lideres', label: 'Líderes Mundiales', num: 2 }
  ]
  const aliados = aliadosInternacionales.map((a, i) => ({
    id: `aliado-${i}`,
    label: a.nombre,
    num: i + 3
  }))
  const contacto = { id: 'contacto', label: 'Hacer envío al extranjero', num: aliados.length + 3 }
  return [...base, ...aliados, contacto]
})

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

let observer
onMounted(() => {
  // Intersection Observer para secciones activas
  observer = new IntersectionObserver(
    entries => {
      entries.forEach(e => { if (e.isIntersecting) activeId.value = e.target.id })
    },
    { rootMargin: '0px 0px -70% 0px', threshold: 0.1 }
  )
  tocItems.value.forEach(item => {
    const el = document.getElementById(item.id)
    if (el) observer.observe(el)
  })
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})

// Datos de aliados
const aliadosInternacionales = [{
  nombre: 'UPS - United Parcel Service',
  categoria: 'Líder Mundial en Logística',
  imagenUrl: 'https://imagenes.eltiempo.com/files/image_1200_535/uploads/2025/01/16/67895daddef98.jpeg',
  descripcionCompleta: '<strong class="text-[rgb(248,112,62)]">UPS</strong> es sinónimo de confiabilidad en envíos internacionales. Como uno de los líderes mundiales indiscutidos en logística, esta alianza estratégica nos permite ofrecer a nuestros clientes acceso directo a la red más extensa y confiable del planeta.',
  descripcionAdicional: 'Su tecnología de vanguardia en seguimiento, su flota aérea propia y su experiencia de más de 100 años en el mercado hacen de UPS el socio perfecto para envíos críticos.',
  servicios: ['UPS Express', 'UPS Worldwide Express', 'UPS Standard', 'UPS Freight', 'UPS Mail Innovations', 'UPS Healthcare'],
  cobertura: 'Más de 220 países y territorios mundialmente',
  fechaAlianza: 'Marzo 2019',
  rating: 5,
  enviosCompletados: 45000,
  ventajasCompetitivas: [
    { titulo: 'Seguridad Garantizada', descripcion: 'Sistema de rastreo en tiempo real y seguros completos', iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { titulo: 'Entrega Puntual', descripcion: 'Más de 95% de entregas a tiempo globalmente', iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { titulo: 'Flota Propia', descripcion: 'Más de 125,000 vehículos y 550 aviones propios', iconPath: 'M8 9l4-4 4 4m0 6l-4 4-4-4' },
    { titulo: 'Soporte 24/7', descripcion: 'Atención al cliente especializada las 24 horas', iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857' }
  ],
  tiemposEntrega: { 'América': '1-2 días', 'Europa': '2-3 días', 'Asia': '3-4 días', 'Oceanía': '4-5 días' },
  certificaciones: ['ISO 14001', 'TAPA FSR', 'C-TPAT', 'AEO', 'IATA CEIV Pharma']
}, {
  nombre: 'DHL Express',
  categoria: 'Express Internacional',
  imagenUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/DHL_Logo.svg/2560px-DHL_Logo.svg.png',
  descripcionCompleta: '<strong class="text-[rgb(248,112,62)]">DHL Express</strong> es el líder indiscutible en envíos express internacionales. Con su característica agilidad alemana y presencia en más de 220 países, DHL nos permite ofrecer soluciones de envío rápido que conectan Colombia con el mundo en tiempo récord.',
  descripcionAdicional: 'Su red de distribución express más grande del mundo, combinada con tecnología de seguimiento de última generación y un compromiso inquebrantable con la puntualidad, hace de DHL el socio ideal para envíos urgentes.',
  servicios: ['DHL Express Worldwide', 'DHL Express 12:00', 'DHL Express 9:00', 'DHL Medical Express', 'DHL Same Day', 'DHL Automotive'],
  cobertura: '220+ países y territorios con red express líder mundial',
  fechaAlianza: 'Enero 2020',
  rating: 5,
  enviosCompletados: 38000,
  ventajasCompetitivas: [
    { titulo: 'Express Líder', descripcion: 'Red express #1 mundial con entregas en 24-48 horas', iconPath: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { titulo: 'Tracking Avanzado', descripcion: 'Seguimiento en tiempo real con precisión minuto a minuto', iconPath: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
    { titulo: 'Especialización', descripcion: 'Expertos en envíos médicos, farmacéuticos y alta tecnología', iconPath: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
    { titulo: 'Garantía Express', descripcion: 'Garantía de entrega a tiempo o reembolso completo', iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' }
  ],
  tiemposEntrega: { 'América': '1-2 días', 'Europa': '1-2 días', 'Asia': '2-3 días', 'Oceanía': '2-3 días' },
  certificaciones: ['ISO 14001', 'GDP', 'CEIV Pharma', 'TAPA FSR', 'AEO']
}]

// Computed properties
const totalAliados = computed(() => aliadosInternacionales.length)
const totalPaises = computed(() => 220)
const ratingPromedio = computed(() => {
  const suma = aliadosInternacionales.reduce((acc, aliado) => acc + aliado.rating, 0)
  return (suma / aliadosInternacionales.length).toFixed(1)
})

// Métodos
const cotizarInternacional = () => router.push({ name: 'CotizarInfo' })
const masInformacion = () => console.log('Mostrando más información...')
</script>

<style scoped>
.glass-effect {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.gradient-bg {
  background: linear-gradient(135deg, rgb(248,112,62) 0%, rgb(248,112,62) 100%);
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Custom scrollbar */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #f1f1f0; }
::-webkit-scrollbar-thumb { background: rgb(248,112,62); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: rgba(248,112,62, 0.8); }
</style>
