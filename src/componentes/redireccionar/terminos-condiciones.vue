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
                Términos y Condiciones
              </span>
            </div>
          </div>
        </div>

        <!-- Título principal -->
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[rgb(248,112,62)] to-[rgb(248,112,62)] bg-clip-text text-transparent leading-tight mb-6">
            Contrato de uso de la plataforma
          </h1>
          
          <p class="text-lg md:text-xl text-[rgb(58,26,29)] leading-relaxed max-w-2xl mx-auto">
            Lee atentamente este documento. Al utilizar nuestros servicios 
            <span class="font-semibold text-[rgb(248,112,62)]">aceptas estas condiciones</span>.
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
              <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              
              <div class="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-8 h-8 bg-[rgb(248,112,62)] rounded-lg flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
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
                    class="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[rgb(248,112,62)]/10 text-[rgb(58,26,29)] hover:text-[rgb(248,112,62)] transition-all duration-300 border border-transparent hover:border-[rgb(248,112,62)]/20"
                  >
                    <div class="w-6 h-6 rounded-full bg-[rgb(248,112,62)]/20 flex items-center justify-center text-xs font-bold text-[rgb(248,112,62)] group-hover:bg-[rgb(248,112,62)] group-hover:text-white transition-all">
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
            <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            
            <div class="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-500">
              <!-- Número de sección -->
              <div class="absolute -top-4 -left-4 w-12 h-12 bg-[rgb(248,112,62)] rounded-xl flex items-center justify-center shadow-lg">
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
                      <div class="w-2 h-2 bg-[rgb(248,112,62)] rounded-full mt-3 flex-shrink-0"></div>
                      <span class="text-base md:text-lg">{{ b }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Sección de aceptación rediseñada -->
          <div class="relative group mt-16">
            <div class="relative bg-white rounded-3xl p-8 md:p-10 lg:p-12 shadow-md border border-gray-200">
              <div class="text-center">
                <!-- Icono central -->
                <div class="w-16 h-16 md:w-20 md:h-20 bg-[rgb(248,112,62)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <svg class="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>

                <h3 class="text-2xl md:text-3xl font-black text-[rgb(58,26,29)] mb-4">
                  ¿Aceptas estos términos?
                </h3>
                
                <p class="text-base md:text-lg text-[rgb(58,26,29)] mb-8 max-w-lg mx-auto">
                  Deberas aceptar estos términos para continuar creando tu cuenta y utilizar nuestros servicios.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    @click="aceptarTerminos"
                    class="group relative overflow-hidden bg-[rgb(248,112,62)] hover:bg-[rgb(248,112,62)]/90 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 flex items-center gap-3 text-sm md:text-base"
                  >
                    <span class="relative z-10">Acepto los Términos y Condiciones</span>
                    <svg class="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </button>

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

// Índice y contenido (manteniendo tu estructura)
const toc = [
  { id: 'alcance', label: 'Alcance' },
  { id: 'cuentas', label: 'Cuentas y seguridad' },
  { id: 'pagos', label: 'Pagos y facturación' },
  { id: 'envios', label: 'Envíos y restricciones' },
  { id: 'privacidad', label: 'Privacidad' },
  { id: 'propiedad', label: 'Propiedad intelectual' },
  { id: 'responsabilidad', label: 'Limitación de responsabilidad' },
  { id: 'cambios', label: 'Cambios a estos términos' }
]

const sections = [
  {
    id: 'alcance',
    title: '1. Alcance',
    paragraphs: [
      'Estos términos regulan el uso de la plataforma y de los servicios ofrecidos por la empresa.',
      'Al registrarte o usar el sitio declaras que tienes la capacidad legal para contratar.'
    ]
  },
  {
    id: 'cuentas',
    title: '2. Cuentas y seguridad',
    paragraphs: [
      'Eres responsable de la veracidad de la información y de mantener la confidencialidad de tus credenciales.',
      'Podemos suspender cuentas que incumplan estas condiciones.'
    ],
    bullets: ['Datos actualizados', 'Contraseñas seguras', 'Uso personal y no transferible']
  },
  {
    id: 'pagos',
    title: '3. Pagos y facturación',
    paragraphs: [
      'Los precios, comisiones y cargos se informan antes de confirmar cada operación.',
      'Podemos modificar tarifas de forma no retroactiva.'
    ]
  },
  {
    id: 'envios',
    title: '4. Envíos y restricciones',
    paragraphs: [
      'Todos los envíos deben cumplir la normativa aplicable y nuestras políticas internas.',
      'Artículos prohibidos o restringidos podrán ser retenidos o devueltos.'
    ]
  },
  {
    id: 'privacidad',
    title: '5. Privacidad',
    paragraphs: [
      'Tratamos tus datos conforme a nuestra Política de Privacidad.',
      'Usamos medidas razonables de seguridad, sin garantía absoluta.'
    ]
  },
  {
    id: 'propiedad',
    title: '6. Propiedad intelectual',
    paragraphs: [
      'El contenido, marcas y software son propiedad de sus titulares.',
      'No está permitido copiar o explotar el material sin autorización.'
    ]
  },
  {
    id: 'responsabilidad',
    title: '7. Limitación de responsabilidad',
    paragraphs: [
      'En la medida permitida por la ley, no seremos responsables por daños indirectos o lucro cesante.',
      'La responsabilidad total, si existiera, se limitará al monto pagado por los últimos servicios.'
    ]
  },
  {
    id: 'cambios',
    title: '8. Cambios a estos términos',
    paragraphs: [
      'Podemos actualizar estos términos y publicaremos la versión vigente en este sitio.',
      'El uso posterior a la modificación implica tu aceptación.'
    ]
  }
]

// Función para aceptar términos
function aceptarTerminos() {
  router.push({ name: 'Register', query: { aceptaTerminos: '1' } })
}

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