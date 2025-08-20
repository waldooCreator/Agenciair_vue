<template>
  <main class="min-h-screen">
    <!-- HERO SECTION -->
    <section class="relative overflow-hidden py-12 md:py-20">
      <!-- Aplicar el mismo margen que el contenido principal -->
      <div class="lg:ml-72 lg:pl-8 md:px-10 px-6 relative">
        <div class="max-w-4xl mx-auto">
          <!-- Badge -->
          <div class="flex justify-center mb-8">
            <div class="group relative">
              <div class="absolute -inset-0.5 bg-[rgb(248,112,62)] rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
              <div class="relative inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg">
                <div class="w-3 h-3 bg-[rgb(248,112,62)] rounded-full animate-pulse"></div>
                <span class="text-sm font-bold text-[rgb(58,26,29)] tracking-wider uppercase">
                  Envíos Nacionales
                </span>
              </div>
            </div>
          </div>

          <!-- Título principal -->
          <div class="text-center">
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[rgb(248,112,62)] to-[rgb(248,112,62)] bg-clip-text text-transparent leading-tight mb-6">
              Cubrimos Todo Colombia
            </h1>
            
            <p class="text-lg md:text-xl text-[rgb(58,26,29)] leading-relaxed max-w-3xl mx-auto mb-8">
              Descubre cómo nuestros aliados nacionales nos permiten 
              <span class="font-semibold text-[rgb(248,112,62)]">llegar a cada rincón de Colombia</span> 
              con la confianza de trabajar con las empresas de mensajería más reconocidas del país.
            </p>

            <!-- Stats destacados -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
              <div class="text-center">
                <div class="text-3xl font-black text-[rgb(248,112,62)]">{{ totalAliados }}+</div>
                <div class="text-sm text-[rgb(58,26,29)] font-medium">Aliados Nacionales</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-black text-[rgb(248,112,62)]">{{ totalMunicipios }}+</div>
                <div class="text-sm text-[rgb(58,26,29)] font-medium">Municipios Cubiertos</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-black text-[rgb(248,112,62)]">{{ ratingPromedio }}</div>
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
      <!-- TOC MOBILE/TABLET (inline al inicio) -->
<div class="lg:ml-72 lg:pl-8 md:px-10 px-6">
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

      <!-- Contenido principal con margen ajustado para desktop -->
      <div class="lg:ml-72 lg:pl-8 md:px-10 px-6">
        <div class="max-w-4xl mx-auto">
          
          <!-- Introducción narrativa -->
          <article id="intro" class="section-spacing scroll-mt-28 md:scroll-mt-36">
            <div class="relative group">
              <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              
              <div class="relative glass-effect rounded-3xl p-8 md:p-12 shadow-lg border border-white/50">
                <div class="text-center mb-8">
                  <div class="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    </svg>
                  </div>
                  <h2 class="text-3xl md:text-4xl font-bold text-[rgb(58,26,29)] mb-6">
                    La Red Nacional Más Completa
                  </h2>
                </div>

                <div class="prose prose-lg max-w-none text-[rgb(58,26,29)] space-y-6">
                  <p class="text-lg leading-relaxed">
                    Colombia es un país de geografía diversa y desafiante, desde las costas del Caribe y el Pacífico hasta los picos andinos y la selva amazónica. 
                    <strong class="text-[rgb(248,112,62)]">Conocer este territorio es nuestra ventaja</strong>. 
                    Por eso hemos formado alianzas estratégicas con los líderes nacionales que mejor conocen cada región, cada ciudad y cada pueblo de nuestro país.
                  </p>
                  
                  <p class="text-lg leading-relaxed">
                    Trabajamos con TCC, Servientrega, Coordinadora, Deprisa e Interrápidísimo - empresas colombianas con décadas de experiencia 
                    que han construido las redes de distribución más robustas del país. Esta combinación de conocimiento local y cobertura nacional 
                    nos permite garantizar que tu envío llegue a cualquier destino en Colombia, sin importar lo remoto que sea.
                  </p>

                  <div class="bg-[rgb(248,112,62)]/10 rounded-2xl p-6 border-l-4 border-[rgb(248,112,62)]">
                    <blockquote class="text-xl font-medium text-[rgb(58,26,29)] italic">
                      "Cada aliado aporta su fortaleza: algunos dominan las grandes ciudades, otros se especializan en zonas rurales, 
                      pero todos comparten nuestro compromiso de llevar cada paquete a su destino con puntualidad y cuidado."
                    </blockquote>
                    <cite class="text-sm text-[rgb(248,112,62)] font-semibold mt-2 block">- Equipo de Logística Nacional</cite>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <!-- Sección de aliados nacionales -->
          <div class="section-spacing">
            <!-- Título de categoría -->
            <div id="lideres" class="relative group mb-8 scroll-mt-28 md:scroll-mt-36">
              <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

              <div class="relative glass-effect rounded-2xl p-6 md:p-8 shadow-lg border border-white/50">
                <div class="flex items-center gap-4">
                  <div class="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center shadow-lg">
                    <span class="text-white font-black text-xl">1</span>
                  </div>
                  <div>
                    <h2 class="text-2xl md:text-3xl font-bold text-[rgb(58,26,29)]">
                      Líderes Nacionales en Mensajería
                    </h2>
                    <p class="text-[rgb(58,26,29)]/70 mt-2">Aliados con cobertura en más de 1100 municipios</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contenido de cada aliado -->
            <div v-for="(aliado, indiceAliado) in aliadosNacionales" :key="indiceAliado" :id="`aliado-${indiceAliado}`" class="relative group mb-12 scroll-mt-28 md:scroll-mt-36">
              <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur opacity-0 group-hover:opacity-15 transition duration-500"></div>
              
              <div class="relative glass-effect rounded-3xl p-8 md:p-10 shadow-lg border border-white/50">
                <!-- Header con imagen -->
                <div class="mb-8">
                  <div class="w-full rounded-2xl mb-6 overflow-hidden shadow-lg
                              aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-64">
                    <img 
                      :src="aliado.imagenUrl" 
                      :alt="aliado.nombre"
                      class="block w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
                    <div class="bg-white/50 rounded-2xl p-6 border border-white/30">
                      <div class="flex items-center gap-3 mb-4">
                        <svg class="w-6 h-6 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        </svg>
                        <h4 class="font-bold text-[rgb(58,26,29)]">Cobertura Nacional</h4>
                      </div>
                      <p class="text-[rgb(58,26,29)]">{{ aliado.cobertura }}</p>
                    </div>
                    
                    <div class="bg-white/50 rounded-2xl p-6 border border-white/30">
                      <div class="flex items-center gap-3 mb-4">
                        <svg class="w-6 h-6 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                        <h4 class="font-bold text-[rgb(58,26,29)]">Rendimiento</h4>
                      </div>
                      <p class="text-[rgb(58,26,29)]">Más de {{ aliado.enviosCompletados.toLocaleString() }} envíos nacionales exitosos</p>
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
                  <div class="bg-white/50 rounded-2xl p-6 border border-white/30">
                    <h4 class="font-bold text-[rgb(58,26,29)] mb-4 flex items-center gap-2">
                      <svg class="w-5 h-5 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                      Fortalezas Regionales
                    </h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div v-for="fortaleza in aliado.fortalezasRegionales" :key="fortaleza.region"
                          class="bg-white/70 rounded-xl p-4 border border-white/30">
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
                  <div class="bg-white/50 rounded-2xl p-6 border border-white/30">
                    <h4 class="font-bold text-[rgb(58,26,29)] mb-4 flex items-center gap-2">
                      <svg class="w-5 h-5 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Tiempos de Entrega Promedio
                    </h4>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div v-for="(tiempo, region) in aliado.tiemposEntrega" :key="region"
                          class="bg-white/70 rounded-xl p-4 text-center border border-white/30">
                        <div class="text-2xl font-black text-[rgb(248,112,62)] mb-1">{{ tiempo }}</div>
                        <div class="text-sm text-[rgb(58,26,29)] font-medium">{{ region }}</div>
                      </div>
                    </div>
                  </div>

                  <!-- Casos de Éxito -->
                  <div v-if="aliado.casos" class="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                    <h4 class="font-bold text-[rgb(58,26,29)] mb-4 flex items-center gap-2">
                      <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      Casos de Éxito Nacional
                    </h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div v-for="caso in aliado.casos" :key="caso.titulo" class="bg-white rounded-xl p-4 border border-white/30">
                        <div class="flex items-start gap-3">
                          <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"/>
                            </svg>
                          </div>
                          <div>
                            <h5 class="font-semibold text-[rgb(58,26,29)] mb-1">{{ caso.titulo }}</h5>
                            <p class="text-sm text-[rgb(58,26,29)]/80 mb-2">{{ caso.descripcion }}</p>
                            <span class="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                              {{ caso.resultado }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Certificaciones -->
                  <div class="bg-white/50 rounded-2xl p-6 border border-white/30">
                    <h4 class="font-bold text-[rgb(58,26,29)] mb-4 flex items-center gap-2">
                      <svg class="w-5 h-5 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Certificaciones y Acreditaciones
                    </h4>
                    <div class="flex flex-wrap gap-3">
                      <span v-for="cert in aliado.certificaciones" :key="cert"
                            class="px-4 py-2 bg-white/70 text-[rgb(58,26,29)] text-sm font-bold rounded-xl border border-white/30 flex items-center gap-2">
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
          </div>

          <!-- Sección de contacto -->
          <div id="contacto" class="relative group mt-16">
            <div class="relative bg-white rounded-3xl p-8 md:p-10 lg:p-12 shadow-md border border-gray-200">
              <div class="text-center">
                <div class="w-16 h-16 md:w-20 md:h-20 bg-[rgb(248,112,62)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <svg class="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  </svg>
                </div>

                <h3 class="text-2xl md:text-3xl font-black text-[rgb(58,26,29)] mb-4">
                  ¿Necesitas enviar dentro de Colombia?
                </h3>
                
                <p class="text-base md:text-lg text-[rgb(58,26,29)] mb-8 max-w-lg mx-auto">
                  Conecta tu negocio con todo el territorio nacional a través de nuestros aliados de confianza.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    @click="cotizarNacional"
                    class="group relative overflow-hidden bg-[rgb(248,112,62)] hover:bg-[rgb(248,112,62)]/90 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 flex items-center gap-3 text-sm md:text-base"
                  >
                    <span class="relative z-10">Cotizar Envío Nacional</span>
                    <svg class="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </button>

                  <button
                    @click="masInformacion"
                    class="group font-bold text-[rgb(248,112,62)] hover:text-[rgb(248,112,62)]/80 px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-[rgb(248,112,62)]/10 hover:bg-[rgb(248,112,62)]/20 transition-all duración-300 flex items-center gap-3 border-2 border-[rgb(248,112,62)]/20 hover:border-[rgb(248,112,62)]/40 text-sm md:text-base"
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
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
// Datos de los aliados nacionales
const aliadosNacionales = [
  {
    nombre: 'TCC - Transporte de Carga Coordinado',
    categoria: 'Líder Nacional en Logística',
    imagenUrl: 'https://www.portafolio.co/files/article_new_multimedia/uploads/2022/09/20/6329b41db2a33.png',
    descripcionCompleta: '<strong class="text-[rgb(248,112,62)]">TCC</strong> es uno de los operadores logísticos más importantes de Colombia, con más de 25 años de experiencia en el mercado nacional. Su amplia red de distribución y su enfoque en la innovación tecnológica los convierte en un aliado estratégico fundamental para nuestras operaciones en todo el territorio nacional.',
    descripcionAdicional: 'Con presencia en más de 900 municipios y una flota moderna que incluye vehículos especializados para diferentes tipos de carga, TCC ha demostrado ser un socio confiable para envíos que requieren atención especializada. Su sistema de seguimiento en tiempo real y su compromiso con los tiempos de entrega los posiciona como uno de los líderes indiscutibles del sector.',
    servicios: ['Envío Express', 'Carga Consolidada', 'Última Milla', 'Reverse Logistics', 'Cross Docking', 'Almacenamiento'],
    cobertura: 'Más de 900 municipios en todo Colombia, con centros de distribución en las principales ciudades',
    fechaAlianza: 'Febrero 2020',
    rating: 5,
    enviosCompletados: 85000,
    fortalezasRegionales: [
      { region: 'Región Andina', descripcion: 'Cobertura completa de Bogotá, Medellín y ciudades intermedias' },
      { region: 'Costa Atlántica', descripcion: 'Red especializada en Barranquilla, Cartagena y zona portuaria' },
      { region: 'Eje Cafetero', descripcion: 'Logística especializada para productos agroindustriales' },
      { region: 'Llanos Orientales', descripcion: 'Conectividad con zonas petrolíferas y ganaderas' }
    ],
    tiemposEntrega: {
      'Ciudades Principales': '1-2 días',
      'Ciudades Intermedias': '2-3 días',
      'Municipios Menores': '3-4 días',
      'Zonas Rurales': '4-5 días'
    },
    casos: [
      {
        titulo: 'Proyecto E-commerce Nacional',
        descripcion: 'Gestión de distribución para tienda online con 2000 envíos mensuales a nivel nacional.',
        resultado: '98.5% satisfacción cliente'
      },
      {
        titulo: 'Logística Inversa Masiva',
        descripcion: 'Coordinación de devoluciones desde 15 ciudades hacia centro de distribución principal.',
        resultado: '95% recuperación exitosa'
      }
    ],
    certificaciones: ['ISO 9001', 'BASC', 'OEA', 'ISO 14001', 'OHSAS 18001']
  },
  {
    nombre: 'Servientrega',
    categoria: 'Red Nacional de Mensajería',
    imagenUrl: 'https://img.lalr.co/cms/2021/02/08151702/servientrega-900.jpg?w=960',
    descripcionCompleta: '<strong class="text-[rgb(248,112,62)]">Servientrega</strong> es sinónimo de confianza en Colombia. Con más de 40 años de experiencia, es la empresa de mensajería que ha acompañado el crecimiento del país, conectando familias, empresas y comunidades desde Leticia hasta La Guajira, desde San Andrés hasta el Amazonas.',
    descripcionAdicional: 'Su red capilar de más de 1,400 puntos de atención a nivel nacional y su profundo conocimiento del territorio colombiano los convierte en el aliado perfecto para llegar a destinos que otros consideran imposibles. Servientrega entiende la idiosincrasia colombiana y ha adaptado sus servicios para satisfacer las necesidades específicas de cada región.',
    servicios: ['Mensajería Express', 'Paquetería Nacional', 'Giros y Pagos', 'Logística Rural', 'Servicios Especiales', 'Soluciones B2B'],
    cobertura: 'Más de 1,100 municipios con 1,400+ puntos de atención, incluyendo zonas rurales y apartadas',
    fechaAlianza: 'Enero 2019',
    rating: 5,
    enviosCompletados: 125000,
    fortalezasRegionales: [
      { region: 'Amazonía', descripcion: 'Única red de mensajería con cobertura completa en selva amazónica' },
      { region: 'Pacífico', descripcion: 'Conectividad especializada con comunidades afrodescendientes del litoral' },
      { region: 'Orinoquia', descripcion: 'Red robusta en llanos orientales y zonas fronterizas' },
      { region: 'Insular', descripcion: 'Servicio especializado a San Andrés, Providencia y archipiélagos' }
    ],
    tiemposEntrega: {
      'Capitales': '24 horas',
      'Intermedias': '1-2 días',
      'Municipios': '2-3 días',
      'Zonas Especiales': '3-5 días'
    },
    casos: [
      {
        titulo: 'Conexión con Zona Rural del Chocó',
        descripcion: 'Establecimiento de ruta regular hacia municipios de difícil acceso en el pacífico colombiano.',
        resultado: 'Cobertura 100% exitosa'
      },
      {
        titulo: 'Programa de Inclusión Amazónica',
        descripcion: 'Envíos regulares a comunidades indígenas del Amazonas con productos de primera necesidad.',
        resultado: '15 comunidades conectadas'
      }
    ],
    certificaciones: ['ISO 9001', 'BASC', 'Sello de Calidad', 'OEA', 'Certificación Verde']
  },
  {
    nombre: 'Coordinadora',
    categoria: 'Mensajería Especializada',
    imagenUrl: 'https://img.lalr.co/cms/2021/06/22164349/MACK2.png?size=sm',
    descripcionCompleta: '<strong class="text-[rgb(248,112,62)]">Coordinadora</strong> se ha especializado en ofrecer soluciones logísticas personalizadas para el mercado empresarial. Con más de 30 años en el mercado colombiano, han desarrollado una propuesta de valor única enfocada en la flexibilidad y la adaptación a las necesidades específicas de cada cliente.',
    descripcionAdicional: 'Su fortaleza radica en el manejo de envíos especiales y su capacidad de personalización de servicios. Coordinadora ha sido pionera en implementar tecnologías de seguimiento y en desarrollar soluciones para sectores específicos como farmacéutico, textil y agroindustrial, ofreciendo condiciones especiales de transporte según el tipo de mercancía.',
    servicios: ['Mensajería Empresarial', 'Carga Especial', 'Sector Farmacéutico', 'Textil y Confección', 'Agro-logística', 'Tecnología'],
    cobertura: 'Cobertura estratégica en más de 600 municipios con enfoque en corredores industriales',
    fechaAlianza: 'Abril 2020',
    rating: 4,
    enviosCompletados: 65000,
    fortalezasRegionales: [
      { region: 'Valle del Cauca', descripcion: 'Hub logístico principal con conexión puerto de Buenaventura' },
      { region: 'Antioquia', descripcion: 'Red especializada en sector textil y manufactura' },
      { region: 'Cundinamarca', descripcion: 'Cobertura empresarial y conexión con Bogotá' },
      { region: 'Santander', descripcion: 'Logística industrial y petroquímica especializada' }
    ],
    tiemposEntrega: {
      'Corredores Industriales': '24-48 horas',
      'Ciudades Principales': '1-2 días',
      'Zonas Empresariales': '2-3 días',
      'Municipios Menores': '3-4 días'
    },
    casos: [
      {
        titulo: 'Cadena de Frío Farmacéutica',
        descripcion: 'Transporte especializado de medicamentos termolábiles entre Bogotá y Medellín.',
        resultado: '100% cadena de frío intacta'
      },
      {
        titulo: 'Logística Textil Antioqueña',
        descripcion: 'Distribución semanal de productos textiles desde Medellín hacia 20 ciudades principales.',
        resultado: '97% entregas puntuales'
      }
    ],
    certificaciones: ['ISO 9001', 'BASC', 'GDP', 'BPD', 'Invima']
  },
  {
    nombre: 'Deprisa',
    categoria: 'Envíos Rápidos Nacional',
    imagenUrl: 'https://zonacaptiva.com/wp-content/uploads/2023/09/Zona-Captiva-post-2023-09-18T152201.306.png',
    descripcionCompleta: '<strong class="text-[rgb(248,112,62)]">Deprisa</strong> ha revolucionado el concepto de velocidad en envíos nacionales. Como especialistas en entregas rápidas y servicios express, han construido una red optimizada para minimizar los tiempos de tránsito sin comprometer la seguridad y el cuidado de los envíos.',
    descripcionAdicional: 'Su modelo operativo se centra en rutas directas y frecuencias altas entre las principales ciudades del país. Deprisa ha implementado sistemas de clasificación automatizada y manejo predictivo de la demanda, lo que les permite ofrecer ventanas de entrega muy precisas y servicios same-day en ciudades principales.',
    servicios: ['Express Nacional', 'Same Day', 'Next Day', 'Documentos Urgentes', 'E-commerce Rápido', 'Entregas Programadas'],
    cobertura: 'Red express cubriendo 300+ municipios con enfoque en velocidad entre ciudades principales',
    fechaAlianza: 'Junio 2020',
    rating: 4,
    enviosCompletados: 45000,
    fortalezasRegionales: [
      { region: 'Bogotá-Cundinamarca', descripcion: 'Same-day y next-day con cobertura metropolitana completa' },
      { region: 'Medellín-Antioquia', descripcion: 'Red express optimizada para valle de Aburrá' },
      { region: 'Cali-Valle', descripcion: 'Conexión rápida con corredor Cali-Buenaventura' },
      { region: 'Barranquilla-Atlántico', descripcion: 'Hub caribeño para distribución costeña' }
    ],
    tiemposEntrega: {
      'Same Day': '2-6 horas',
      'Next Day': '24 horas',
      'Express': '1-2 días',
      'Standard': '2-3 días'
    },
    casos: [
      {
        titulo: 'Documentos Legales Urgentes',
        descripcion: 'Envío express de documentos legales críticos entre Bogotá y Cali en menos de 24 horas.',
        resultado: 'Entregado en 18 horas'
      },
      {
        titulo: 'Same Day Médico',
        descripcion: 'Servicio same-day para equipos médicos urgentes dentro del área metropolitana.',
        resultado: '95% entregas mismo día'
      }
    ],
    certificaciones: ['ISO 9001', 'BASC', 'Certificación Express', 'OEA']
  },
  {
    nombre: 'Interrápidísimo',
    categoria: 'Mensajería Integral',
    imagenUrl: 'https://www.usme.com.co/wp-content/uploads/cache/images/interrapidisimo-usme-bogota/interrapidisimo-usme-bogota-3751659047.jpg',
    descripcionCompleta: '<strong class="text-[rgb(248,112,62)]">Interrápidísimo</strong> representa la evolución de la mensajería tradicional hacia una propuesta integral de servicios logísticos. Con presencia histórica en el mercado colombiano, han sabido adaptarse a los nuevos tiempos manteniendo su esencia de servicio personalizado y cercanía con el cliente.',
    descripcionAdicional: 'Su red combina la tradición de la mensajería colombiana con tecnología moderna, ofreciendo soluciones que van desde el envío de documentos hasta la logística completa para pequeñas y medianas empresas. Interrápidísimo se destaca por su flexibilidad operativa y su capacidad de adaptarse a necesidades específicas de cada cliente.',
    servicios: ['Mensajería Tradicional', 'Paquetería', 'Logística PYME', 'Servicios Financieros', 'Recaudo', 'Distribución Local'],
    cobertura: 'Amplia red nacional con más de 800 municipios y fuerte presencia en ciudades intermedias',
    fechaAlianza: 'Marzo 2021',
    rating: 4,
    enviosCompletados: 55000,
    fortalezasRegionales: [
      { region: 'Ciudades Intermedias', descripcion: 'Red especializada en capitales departamentales y municipios intermedios' },
      { region: 'PYMES Regionales', descripcion: 'Soluciones logísticas adaptadas a pequeñas y medianas empresas' },
      { region: 'Servicios Financieros', descripcion: 'Red de recaudo y pagos en todo el territorio nacional' },
      { region: 'Distribución Local', descripcion: 'Última milla especializada en centros urbanos' }
    ],
    tiemposEntrega: {
      'Intermunicipal': '1-2 días',
      'Regional': '2-3 días',
      'Nacional': '3-4 días',
      'Rural': '4-6 días'
    },
    casos: [
      {
        titulo: 'Apoyo a PYMES Regionales',
        descripcion: 'Programa de logística integral para 50 pequeñas empresas en ciudades intermedias.',
        resultado: '40% crecimiento ventas clientes'
      },
      {
        titulo: 'Red de Recaudo Nacional',
        descripcion: 'Implementación de sistema de recaudo para empresa de servicios públicos.',
        resultado: '99.2% efectividad recaudo'
      }
    ],
    certificaciones: ['ISO 9001', 'Certificación PYME', 'BASC', 'Sello Calidad']
  }
]

// ===== Índice y scroll suave =====
const activeId = ref('intro')

const tocItems = computed(() => {
  const base = [
    { id: 'intro',   label: 'Introducción',       num: 1 },
    { id: 'lideres', label: 'Líderes Nacionales', num: 2 }
  ]
  const aliados = aliadosNacionales.map((a, i) => ({
    id: `aliado-${i}`,
    label: a.nombre,
    num: i + 3
  }))
  const contacto = { id: 'contacto', label: 'Haz un envio Nacional', num: aliados.length + 3 }
  return [...base, ...aliados, contacto]
})

function scrollToId (id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

let observer
onMounted(() => {
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

onBeforeUnmount(() => observer && observer.disconnect())

// Calcular estadísticas
const totalAliados = computed(() => aliadosNacionales.length)
const totalMunicipios = computed(() => '1100')
const ratingPromedio = computed(() => {
  const suma = aliadosNacionales.reduce((acc, a) => acc + (a.rating || 0), 0)
  const promedio = suma / (aliadosNacionales.length || 1)
  return promedio.toFixed(1)
})

// Navegar a CotizarInfo
const cotizarNacional = () => router.push({ name: 'CotizarInfo' })

// Déjalo como log (o cámbialo si tienes otra ruta real)
const masInformacion = () => console.log('Mostrando más información...')

</script>

<!-- Estilo global solo para el fondo del body -->
<style>
body {
  background-color: rgb(241, 241, 240);
}
</style>

<style scoped>
.gradient-bg {
  background: linear-gradient(135deg, rgb(248,112,62), rgb(248,112,62));
}

.glass-effect {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.section-spacing {
  margin-bottom: 3rem;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Estilos para el scroll suave */
html {
  scroll-behavior: smooth;
}
</style>
