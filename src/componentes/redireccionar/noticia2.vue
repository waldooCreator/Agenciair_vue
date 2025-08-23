<template>
  <main class="min-h-screen bg-[rgb(241,234,218)]">
    <!-- Hero Section -->
    <section class="bg-[rgb(241,234,218)] pt-16 pb-14">
      <div class="max-w-5xl mx-auto px-6 text-center">
        <!-- Badge -->
        <div class="group relative inline-flex mb-8">
          <span class="absolute -inset-2 rounded-full bg-[rgba(235,102,55,0.25)] blur-md opacity-80 group-hover:opacity-100 transition"></span>
          <span class="relative inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-md">
            <span class="w-2.5 h-2.5 bg-[rgba(235,102,55,255)] rounded-full"></span>
            <span class="uppercase tracking-wider text-[11px] md:text-[12px] font-semibold text-[rgba(235,102,55,255)]">
              Noticias
            </span>
          </span>
        </div>

        <!-- Title -->
        <h1
          class="text-[2.75rem] sm:text-6xl lg:text-7xl font-extrabold text-[rgb(248,112,62)] leading-[0.92] tracking-tight mb-4"
        >
          Blog de novedades y
          <br class="hidden sm:block" />
          actualizaciones
        </h1>

        <!-- Subtitle -->
        <p class="text-[rgb(58,26,29)]/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          Información clara sobre servicios, operaciones y
          <span class="text-[rgb(248,112,62)] font-semibold">recomendaciones</span>
          para que tus envíos fluyan mejor.
        </p>

        <!-- Down arrow -->
        <div class="mt-8">
          <svg class="w-6 h-6 text-[rgb(248,112,62)] mx-auto animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- Article Header -->
    <section class="bg-white mx-6 max-w-4xl mx-auto rounded-2xl shadow-lg mb-8">
      <div class="px-8 py-8">
        <!-- Breadcrumb -->
        <nav class="text-gray-500 text-sm mb-6">
          <router-link to="/" class="hover:text-[rgba(235,102,55,255)]">Inicio</router-link>
          <span class="mx-2">/</span>
          <router-link to="/noticias" class="hover:text-[rgba(235,102,55,255)]">Noticias</router-link>
          <span class="mx-2">/</span>
          <span class="text-gray-700">Embalaje Seguro</span>
        </nav>

        <!-- Article Badge -->
        <div class="inline-flex items-center gap-2 bg-[rgba(235,102,55,255)]/10 px-3 py-1 rounded-full text-[rgba(235,102,55,255)] text-sm font-medium mb-4">
          Guía
        </div>

        <!-- Article Title -->
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
          Embalaje seguro para mercancía frágil
        </h2>
        
        <p class="text-xl text-gray-600 leading-relaxed">
          Recomendaciones simples para minimizar riesgos de daño: materiales, relleno y sellado correcto.
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="max-w-4xl mx-auto px-6 pb-16">
      <!-- Main Image -->
      <div class="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <img 
          src="/images/Gemini_Generated_Image_25c4dq25c4dq25c4.png" 
          alt="Embalaje seguro"
          class="w-full h-80 object-cover rounded-2xl"
        />
      </div>

      <!-- Introduction -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <p class="text-xl text-gray-700 leading-relaxed mb-6">
          Un embalaje correcto es la primera línea de defensa para proteger tu mercancía durante el transporte. 
          La diferencia entre un producto que llega en perfectas condiciones y uno dañado, muchas veces radica en 
          la calidad del empaque utilizado.
        </p>
        
        <p class="text-gray-600 leading-relaxed">
          Usa cajas rígidas y relleno que absorba impactos. Evita espacios vacíos y coloca etiquetas de frágil. 
          El sellado en H refuerza las uniones y reduce aperturas accidentales durante el transporte.
        </p>
      </div>

      <!-- Materials Guide -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Materiales por tipo de producto</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Fragile Products -->
          <div class="bg-gray-50 rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-[rgba(235,102,55,255)] mb-4 flex items-center gap-2">
              📦 Productos Frágiles
            </h3>
            <ul class="space-y-3 text-gray-700">
              <li><strong>Cajas:</strong> Cartón corrugado doble pared mínimo</li>
              <li><strong>Relleno:</strong> Plástico burbuja, espuma, papel arrugado</li>
              <li><strong>Separadores:</strong> Divisores de cartón o espuma</li>
              <li><strong>Sellado:</strong> Cinta adhesiva industrial de 48mm</li>
            </ul>
          </div>

          <!-- Heavy Products -->
          <div class="bg-gray-50 rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-[rgba(235,102,55,255)] mb-4 flex items-center gap-2">
              📏 Productos Pesados
            </h3>
            <ul class="space-y-3 text-gray-700">
              <li><strong>Cajas:</strong> Cartón triple pared o madera</li>
              <li><strong>Refuerzo:</strong> Esquineros de cartón o plástico</li>
              <li><strong>Base:</strong> Palé o base rígida adicional</li>
              <li><strong>Sellado:</strong> Cinta industrial + zunchos plásticos</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- H-Sealing Technique -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Técnica de sellado en H</h2>
        
        <p class="text-gray-600 mb-8">
          El sellado en H es la técnica más efectiva para reforzar las cajas y evitar aperturas accidentales. 
          Esta técnica distribuye la tensión uniformemente y proporciona máxima seguridad.
        </p>
        
        <div class="bg-gray-50 rounded-2xl p-8">
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-[rgba(235,102,55,255)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold text-[rgba(235,102,55,255)]">1</span>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Sellado central</h3>
              <p class="text-sm text-gray-600">Aplica cinta a lo largo de la unión central de la caja</p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-[rgba(235,102,55,255)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold text-[rgba(235,102,55,255)]">2</span>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Sellado perpendicular</h3>
              <p class="text-sm text-gray-600">Cruza con cinta perpendicular formando la "H"</p>
            </div>
            
            <div class="text-center">
              <div class="w-16 h-16 bg-[rgba(235,102,55,255)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl font-bold text-[rgba(235,102,55,255)]">3</span>
              </div>
              <h3 class="font-semibold text-gray-900 mb-2">Refuerzo lateral</h3>
              <p class="text-sm text-gray-600">Extiende la cinta por los laterales para mayor fijación</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Do's and Don'ts -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Qué hacer y qué evitar</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Don'ts -->
          <div class="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span class="text-[rgba(235,102,55,255)]">✖</span> Evita esto:
            </h3>
            <ul class="space-y-2 text-gray-700">
              <li>• Usar cajas muy grandes con mucho espacio vacío</li>
              <li>• Reutilizar cajas muy deterioradas</li>
              <li>• Sellar solo con una línea de cinta</li>
              <li>• Mezclar productos frágiles con pesados</li>
            </ul>
          </div>
          
          <!-- Do's -->
          <div class="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span class="text-[rgba(235,102,55,255)]">✔</span> Haz esto:
            </h3>
            <ul class="space-y-2 text-gray-700">
              <li>• Elegir caja del tamaño justo para tu producto</li>
              <li>• Usar cajas nuevas o en excelente estado</li>
              <li>• Aplicar sellado en H siempre</li>
              <li>• Etiquetar claramente productos frágiles</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Professional Service CTA -->
      <div class="bg-[rgba(235,102,55,255)] rounded-2xl p-8 text-center text-white mb-8">
        <h2 class="text-2xl font-bold mb-4">¿Prefieres que nosotros nos encarguemos?</h2>
        <p class="mb-6 opacity-90">
          Ofrecemos servicio profesional de embalaje para garantizar que tu mercancía llegue en perfectas condiciones.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/servicio-de-embalaje"
            class="bg-white text-[rgba(235,102,55,255)] font-semibold px-6 py-3 rounded-2xl shadow-sm transition transform hover:scale-105 hover:bg-[rgb(255,235,225)]"
          >
            Solicitar servicio de embalaje
          </router-link>
          <router-link 
            to="/cotizar-info"
            class="bg-white text-[rgba(235,102,55,255)] font-semibold px-6 py-3 rounded-2xl shadow-sm border border-transparent transition transform hover:scale-105 hover:bg-[rgb(255,235,225)]"
          >
            Cotizar con embalaje incluido
          </router-link>
        </div>
      </div>

      <!-- Navigation -->
      <div class="bg-white rounded-2xl shadow-lg p-6">
        <div class="flex justify-between items-center">
          <router-link 
            to="/noticias"
            class="flex items-center gap-2 text-[rgba(235,102,55,255)] hover:opacity-80 font-medium transition"
          >
            ← Volver a noticias
          </router-link>
          
          <button
            @click="copyLink"
            class="flex items-center gap-2 text-gray-600 hover:text-[rgba(235,102,55,255)] transition rounded-2xl px-4 py-2"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
            </svg>
            Compartir
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'

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
