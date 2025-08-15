<template>
  <main class="min-h-screen bg-[rgb(241,241,240)]">
    <!-- HERO SECTION -->
    <section class="relative overflow-hidden py-12 md:py-20">
      <div class="container mx-auto px-6 md:px-10 lg:px-16 relative">
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
        <div class="text-center max-w-5xl mx-auto">
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
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
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
    </section>

    <!-- CONTENT SECTION -->
    <section class="container mx-auto px-6 md:px-10 lg:px-16 pb-24">
      <div class="max-w-4xl mx-auto">
        
        <!-- Introducción narrativa -->
        <article class="section-spacing ">
          <div class="relative group">
            <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            
            <div class="relative glass-effect rounded-3xl p-8 md:p-12 shadow-lg border border-white/50">
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

        <!-- Sección Calidex -->
        <div class="section-spacing">
          <div class="relative group mb-12">
            <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur opacity-0 group-hover:opacity-15 transition duration-500"></div>
            
            <div class="relative glass-effect rounded-3xl p-8 md:p-10 shadow-lg border border-white/50">
              <!-- Header con imagen -->
              <div class="mb-8">
                <!-- ⬇️ Reemplaza aquí el antiguo logo/texto por una imagen configurable -->
                <div class="w-full h-48 md:h-64 rounded-2xl mb-2 overflow-hidden shadow-lg bg-gray-100">
                  <img
                    :src="calidexImageUrl"
                    alt="Imagen del aliado (ejemplo)"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p class="text-xs text-center text-[rgb(58,26,29)]/70 mb-4">
                  Ejemplo de imagen. Cambia <code>calidexImageUrl</code> en el &lt;script setup&gt; para usar tu logo/foto.
                </p>
                
                <div class="flex flex-wrap items-center gap-4 mb-6">
                  <span class="px-4 py-2 bg-[rgb(248,112,62)]/20 text-[rgb(248,112,62)] text-sm font-bold rounded-full">
                    Especialista Internacional
                  </span>
                  <span class="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full flex items-center gap-1">
                    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                    Aliado desde Enero 2021
                  </span>
                  <div class="flex items-center gap-1">
                    <div class="flex">
                      <svg v-for="estrella in 5" :key="estrella" 
                           class="w-4 h-4" 
                           :class="estrella <= 4 ? 'text-yellow-400' : 'text-gray-300'" 
                           fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <span class="text-sm text-[rgb(58,26,29)] font-medium ml-1">4.8/5</span>
                  </div>
                </div>
              </div>

              <div class="prose prose-lg max-w-none text-[rgb(58,26,29)] space-y-6">
                <p class="text-lg leading-relaxed">
                  <strong class="text-[rgb(248,112,62)]">Calidex</strong> se ha consolidado como el operador logístico 
                  de referencia para envíos entre Colombia y Venezuela. Con más de 15 años de experiencia especializada 
                  en este corredor, conocen cada detalle del proceso: desde la documentación requerida hasta los tiempos 
                  de tránsito más eficientes, pasando por el manejo cuidadoso de productos sensibles como medicinas y alimentos.
                </p>
                
                <p class="text-lg leading-relaxed">
                  Su red operativa cubre los principales estados venezolanos y cuenta con un equipo bilingüe que entiende 
                  las particularidades culturales y comerciales de ambos países. Calidex no solo transporta paquetes: 
                  facilita el reencuentro de familias, apoya el comercio bilateral y contribuye a mantener vivos 
                  los lazos históricos entre Colombia y Venezuela.
                </p>

                <div class="grid md:grid-cols-2 gap-6 my-8">
                  <div class="bg-white/50 rounded-2xl p-6 border border-white/30">
                    <div class="flex items-center gap-3 mb-4">
                      <svg class="w-6 h-6 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <h4 class="font-bold text-[rgb(58,26,29)]">Cobertura Venezuela</h4>
                    </div>
                    <p class="text-[rgb(58,26,29)]">18 estados venezolanos cubiertos, incluyendo Caracas, Valencia, Maracaibo, Barquisimeto y principales ciudades</p>
                  </div>
                  
                  <div class="bg-white/50 rounded-2xl p-6 border border-white/30">
                    <div class="flex items-center gap-3 mb-4">
                      <svg class="w-6 h-6 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.012-3.459A11.956 11.956 0 0121 12a12 12 0 01-12 12c-3.313 0-6.315-1.344-8.485-3.515"/>
                      </svg>
                      <h4 class="font-bold text-[rgb(58,26,29)]">Experiencia Comprobada</h4>
                    </div>
                    <p class="text-[rgb(58,26,29)]">Más de 28,000 envíos exitosos a Venezuela con 96% de satisfacción del cliente</p>
                  </div>
                </div>

                <div class="bg-[rgb(248,112,62)]/5 rounded-2xl p-6 border border-[rgb(248,112,62)]/10">
                  <h4 class="font-bold text-[rgb(58,26,29)] mb-3">Servicios Especializados:</h4>
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <span class="px-3 py-2 bg-[rgb(248,112,62)]/10 text-[rgb(248,112,62)] text-sm font-medium rounded-xl text-center">
                      Paquetes Personales
                    </span>
                    <span class="px-3 py-2 bg-[rgb(248,112,62)]/10 text-[rgb(248,112,62)] text-sm font-medium rounded-xl text-center">
                      Medicinas
                    </span>
                    <span class="px-3 py-2 bg-[rgb(248,112,62)]/10 text-[rgb(248,112,62)] text-sm font-medium rounded-xl text-center">
                      Documentos
                    </span>
                    <span class="px-3 py-2 bg-[rgb(248,112,62)]/10 text-[rgb(248,112,62)] text-sm font-medium rounded-xl text-center">
                      Remesas Comerciales
                    </span>
                    <span class="px-3 py-2 bg-[rgb(248,112,62)]/10 text-[rgb(248,112,62)] text-sm font-medium rounded-xl text-center">
                      Alimentos No Perecederos
                    </span>
                    <span class="px-3 py-2 bg-[rgb(248,112,62)]/10 text-[rgb(248,112,62)] text-sm font-medium rounded-xl text-center">
                      Productos Tecnológicos
                    </span>
                  </div>
                </div>

                <div class="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <h4 class="font-bold text-[rgb(58,26,29)] mb-4 flex items-center gap-2">
                    <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Casos de Éxito Venezuela
                  </h4>
                  <div class="space-y-3">
                    <div class="bg-white rounded-xl p-4 border">
                      <h5 class="font-semibold text-[rgb(58,26,29)] mb-2">Programa de Medicinas Familiares</h5>
                      <p class="text-sm text-[rgb(58,26,29)]/80">Envío mensual de medicamentos para 150 familias venezolanas desde Bogotá hacia Caracas y Valencia</p>
                      <span class="inline-block mt-2 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        98% entregas exitosas
                      </span>
                    </div>
                    <div class="bg-white rounded-xl p-4 border">
                      <h5 class="font-semibold text-[rgb(58,26,29)] mb-2">Comercio Bilateral PYME</h5>
                      <p class="text-sm text-[rgb(58,26,29)]/80">Facilitación de intercambio comercial para 25 pequeñas empresas entre Cúcuta y Maracaibo</p>
                      <span class="inline-block mt-2 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        2,800 envíos procesados
                      </span>
                    </div>
                    <div class="bg-white rounded-xl p-4 border">
                      <h5 class="font-semibold text-[rgb(58,26,29)] mb-2">Reencuentro Familiar</h5>
                      <p class="text-sm text-[rgb(58,26,29)]/80">Envío especial de objetos personales y documentos para familia reunificada en Barquisimeto</p>
                      <span class="inline-block mt-2 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        Entrega en tiempo récord
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Información importante sobre envíos a Venezuela -->
                <div class="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                  <h4 class="font-bold text-[rgb(58,26,29)] mb-4 flex items-center gap-2">
                    <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Información Importante
                  </h4>
                  <div class="text-sm text-[rgb(58,26,29)] space-y-2">
                    <p><strong>• Documentación:</strong> Todos los envíos requieren cedula del remitente y destinatario</p>
                    <p><strong>• Tiempos de entrega:</strong> Entre 8-15 días hábiles dependiendo del destino</p>
                    <p><strong>• Restricciones:</strong> No se permiten líquidos, productos perecederos o artículos prohibidos</p>
                    <p><strong>• Seguimiento:</strong> Tracking disponible desde el origen hasta la entrega final</p>
                    <p><strong>• Atención:</strong> Soporte en español con conocimiento de ambos países</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sección de contacto -->
        <div class="relative group mt-16">
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
                  class="group relative overflow-hidden bg-[rgb(248,112,62)] hover:bg-[rgb(248,112,62)]/90 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 flex items-center gap-3 text-sm md:text-base"
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
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Imagen del aliado (ejemplo visual). Reemplaza esta URL por la tuya.
const calidexImageUrl = ref(
  'https://calidex.co/wp-content/uploads/2025/03/hero-1.png'
)

// Estadísticas de Venezuela
const experienciaAnos = computed(() => '15')
const estadosVenezuela = computed(() => '18')
const ratingVenezuela = computed(() => '4.8')

// Métodos para navegación
function cotizarVenezuela() {
  router.push('/cotizar-venezuela') // Ajusta la ruta según tu aplicación
}

function masInformacionVenezuela() {
  router.push({ name: 'cotizar-info' }) // Ajusta según tus rutas
}
</script>

<style scoped>
.section-spacing {
  margin-bottom: 3rem;
}

.glass-effect {
  background: rgba(255, 255, 255, 0.25);
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

.prose p {
  margin-bottom: 1.5rem;
}

.prose p:last-child {
  margin-bottom: 0;
}
</style>
