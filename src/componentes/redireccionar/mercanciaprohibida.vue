<template>
  <main class="min-h-screen bg-[rgb(241,234,218)]">
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
                Mercancía Prohibida
              </span>
            </div>
          </div>
        </div>

        <!-- Título principal -->
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[rgb(248,112,62)]  bg-[rgb(248,112,62)] bg-clip-text text-transparent leading-tight mb-6">
            Declaración de Responsabilidad
          </h1>
          
          <p class="text-lg md:text-xl text-[rgb(58,26,29)] leading-relaxed max-w-2xl mx-auto">
            Lista completa de artículos prohibidos y 
            <span class="font-semibold text-[rgb(248,112,62)]">responsabilidades del remitente</span>.
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
      <div class="grid lg:grid-cols-12 gap-12">
        <!-- Índice lateral mejorado -->
        <aside class="lg:col-span-4">
          <div class="sticky top-8">
            <div class="relative group">
              <!-- Glow effect -->
              <div class="absolute -inset-1  bg-[rgb(248,112,62)] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              
              <div class="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-8 h-8  bg-[rgb(248,112,62)] rounded-lg flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                    </svg>
                  </div>
                  <h3 class="text-lg font-bold text-[rgb(58,26,29)]">Contenido</h3>
                </div>
                
                <nav class="space-y-2">
                  <a
                    v-for="(item, index) in toc"
                    :key="item.id"
                    href="#"
                    @click.prevent="scrollToSection(item.id)"
                    class="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 text-[rgb(58,26,29)] hover:text-[rgb(248,112,62)] transition-all duration-300 border border-transparent hover:border-red-500/20"
                  >
                    <div class="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-xs font-bold text-[rgb(248,112,62)] group-hover:bg-[rgb(248,112,62)] group-hover:text-white transition-all">
                      {{ index + 1 }}
                    </div>
                    <span class="font-medium group-hover:font-semibold transition-all">{{ item.label }}</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </aside>

        <!-- Contenido principal -->
        <article class="lg:col-span-8 space-y-8">
          <div
            v-for="(sec, index) in sections"
            :key="sec.id"
            :id="sec.id"
            class="group relative"
          >
            <!-- Card con efectos especiales -->
            <div class="absolute -inset-1  bg-[rgb(248,112,62)] rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            
            <div class="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-500">
              <!-- Número de sección -->
              <div class="absolute -top-4 -left-4 w-12 h-12  bg-[rgb(248,112,62)] rounded-xl flex items-center justify-center shadow-lg">
                <span class="text-white font-black text-lg">{{ index + 1 }}</span>
              </div>

              <!-- Contenido -->
              <div class="ml-4">
                <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-[rgb(58,26,29)] mb-4 md:mb-6 leading-tight">
                  {{ sec.title }}
                </h2>
                
                <div class="space-y-4 text-[rgb(58,26,29)] leading-relaxed">
                  <p 
                    v-for="(p, i) in sec.paragraphs" 
                    :key="i"
                    class="text-base md:text-lg leading-relaxed"
                  >
                    {{ p }}
                  </p>
                  
                  <ul v-if="sec.bullets?.length" class="space-y-3 mt-6">
                    <li 
                      v-for="(b, i) in sec.bullets" 
                      :key="i"
                      class="flex items-start gap-3"
                    >
                      <div class="w-2 h-2  bg-[rgb(248,112,62)] rounded-full mt-3 flex-shrink-0"></div>
                      <span class="text-base md:text-lg">{{ b }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Sección de declaración rediseñada -->
          <div class="relative group mt-16">
            <div class="relative bg-white rounded-3xl p-8 md:p-10 lg:p-12 shadow-md border border-gray-200">
              <div class="text-center">
                <!-- Icono central -->
                <div class="w-16 h-16 md:w-20 md:h-20  bg-[rgb(248,112,62)]  rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <svg class="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                  </svg>
                </div>

                <h3 class="text-2xl md:text-3xl font-black text-[rgb(58,26,29)] mb-4">
                  Declaración Importante
                </h3>
                
                <p class="text-base md:text-lg text-[rgb(58,26,29)] mb-8 max-w-lg mx-auto">
                  Al enviar mercancía, usted declara bajo su total responsabilidad que no está enviando ninguno de los artículos listados como prohibidos.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <router-link
                    to="/hacer-pedido"
                    class="group relative overflow-hidden bg-[rgb(248,112,62)] hover:bg-[rgb(248,112,62)]/90 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 flex items-center gap-3 text-sm md:text-base"
                  >
                    <span class="relative z-10">Entiendo y Acepto</span>
                    <svg class="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </router-link>

                  <router-link
                    to="/"
                    class="group font-bold text-[rgb(248,112,62)] hover:text-[rgb(248,112,62)]/80 px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-[rgb(248,112,62)]/10 hover:bg-[rgb(248,112,62)]/20 transition-all duration-300 flex items-center gap-3 border-2 border-[rgb(248,112,62)]/20 hover:border-[rgb(248,112,62)]/40 text-sm md:text-base"
                  >
                    <svg class="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
import { useRouter } from 'vue-router'

const router = useRouter()

// Índice de contenido
const toc = [
  { id: 'responsabilidad', label: 'Responsabilidad del remitente' },
  { id: 'sustancias-peligrosas', label: 'Sustancias peligrosas' },
  { id: 'armas-explosivos', label: 'Armas y explosivos' },
  { id: 'biologicos-medicos', label: 'Material biológico y médico' },
  { id: 'valores-dinero', label: 'Valores y dinero' },
  { id: 'tecnologia', label: 'Tecnología restringida' },
  { id: 'productos-ilegales', label: 'Productos ilegales' },
  { id: 'consecuencias', label: 'Consecuencias legales' }
]

// Secciones del documento
const sections = [
  {
    id: 'responsabilidad',
    title: '1. Responsabilidad del Remitente',
    paragraphs: [
      'El remitente es totalmente responsable de declarar verazmente el contenido de sus envíos.',
      'Cualquier envío que contenga mercancía prohibida será confiscado y podrá generar acciones legales.',
      'La empresa no se hace responsable por pérdidas o daños derivados del envío de mercancía no declarada o prohibida.'
    ],
    bullets: [
      'Declaración veraz y completa del contenido',
      'Conocimiento de las regulaciones aplicables',
      'Responsabilidad civil y penal por infracciones'
    ]
  },
  {
    id: 'sustancias-peligrosas',
    title: '2. Sustancias Peligrosas y Químicos',
    paragraphs: [
      'Está terminantemente prohibido el envío de cualquier sustancia que represente riesgo para la salud, seguridad o medio ambiente.'
    ],
    bullets: [
      'Ácidos, bases y corrosivos',
      'Solventes y químicos industriales',
      'Pesticidas y fertilizantes',
      'Gases comprimidos o licuados',
      'Material radioactivo',
      'Sustancias tóxicas o venenosas',
      'Materiales inflamables o combustibles'
    ]
  },
  {
    id: 'armas-explosivos',
    title: '3. Armas, Municiones y Explosivos',
    paragraphs: [
      'Cualquier tipo de arma, munición o material explosivo está estrictamente prohibido.'
    ],
    bullets: [
      'Armas de fuego de cualquier calibre',
      'Municiones y cartuchos',
      'Explosivos y detonadores',
      'Armas blancas y cortopunzantes',
      'Armas de electrochoque',
      'Fuegos artificiales y pirotecnia',
      'Réplicas realistas de armas'
    ]
  },
  {
    id: 'biologicos-medicos',
    title: '4. Material Biológico y Médico',
    paragraphs: [
      'Los materiales biológicos, médicos y farmacéuticos requieren permisos especiales y generalmente están prohibidos.'
    ],
    bullets: [
      'Medicamentos con receta médica',
      'Sustancias controladas y narcóticos',
      'Material biológico (sangre, tejidos, etc.)',
      'Vacunas y sueros',
      'Equipo médico no autorizado',
      'Cannabis y derivados',
      'Esteroides anabólicos'
    ]
  },
  {
    id: 'valores-dinero',
    title: '5. Valores, Dinero y Documentos',
    paragraphs: [
      'Los valores, documentos oficiales y ciertos artículos de alto valor están restringidos por razones de seguridad.'
    ],
    bullets: [
      'Dinero en efectivo de cualquier denominación',
      'Cheques, bonos y valores negociables',
      'Documentos de identidad oficiales',
      'Tarjetas de crédito y débito',
      'Joyas de alto valor (sin seguro especial)',
      'Obras de arte y antigüedades valiosas',
      'Metales preciosos'
    ]
  },
  {
    id: 'tecnologia',
    title: '6. Tecnología Restringida',
    paragraphs: [
      'Ciertos equipos tecnológicos están sujetos a regulaciones especiales de exportación e importación.'
    ],
    bullets: [
      'Equipos de telecomunicaciones no homologados',
      'Dispositivos de cifrado avanzado',
      'Componentes de uso militar',
      'Equipos de vigilancia no autorizados',
      'Drones sin permisos correspondientes',
      'Láser de alta potencia',
      'Equipos de hacking o espionaje'
    ]
  },
  {
    id: 'productos-ilegales',
    title: '7. Productos Ilegales o Falsificados',
    paragraphs: [
      'Cualquier producto que viole derechos de propiedad intelectual o sea ilegal está prohibido.'
    ],
    bullets: [
      'Productos falsificados o de imitación',
      'Material con derechos de autor violados',
      'Órganos humanos o animales',
      'Especies protegidas (flora y fauna)',
      'Pornografía infantil',
      'Material que promueva odio o violencia',
      'Productos de tabaco sin permisos',
      'Alcohol sin licencias correspondientes'
    ]
  },
  {
    id: 'consecuencias',
    title: '8. Consecuencias Legales',
    paragraphs: [
      'El envío de mercancía prohibida puede resultar en graves consecuencias legales y financieras.',
      'Las autoridades competentes serán notificadas inmediatamente de cualquier infracción.',
      'El remitente será responsable de todos los costos asociados con la confiscación, destrucción o devolución de mercancía prohibida.'
    ],
    bullets: [
      'Proceso penal por violación de regulaciones',
      'Multas y sanciones económicas',
      'Confiscación definitiva de la mercancía',
      'Prohibición de uso de servicios de envío',
      'Responsabilidad por daños a terceros',
      'Registro en listas de seguridad',
      'Costos de investigación y procedimientos legales'
    ]
  }
]

// Función para scroll suave a sección
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>