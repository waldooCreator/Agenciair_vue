<template>
  <main class="min-h-screen bg-[rgb(241,241,240)]">
    <!-- HERO SECTION -->
    <section class="relative overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-6 md:py-8 relative">
        <!-- Badge -->
        <div class="flex justify-center mb-6 sm:mb-8">
          <div class="group relative">
            <div class="absolute -inset-0.5 bg-[rgb(248,112,62)] rounded-full blur opacity-60 group-hover:opacity-100 transition"></div>
            <div class="relative inline-flex items-center gap-2.5 sm:gap-3 bg-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg">
              <div class="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[rgb(248,112,62)] rounded-full animate-pulse"></div>
              <span class="text-xs sm:text-sm font-bold text-[rgb(58,26,29)] tracking-wider uppercase">
                Nuestra Ubicación
              </span>
            </div>
          </div>
        </div>

        <!-- Título principal -->
        <div class="text-center max-w-4xl mx-auto">
          <h1
            id="titulo-principal"
            class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[rgb(248,112,62)] to-[rgb(248,112,62)] bg-clip-text text-transparent leading-tight sm:leading-tight mb-4 sm:mb-6"
          >
            Encuéntranos
          </h1>

          <p class="text-base sm:text-lg md:text-xl text-[rgb(58,26,29)] leading-relaxed max-w-2xl mx-auto">
            Visítanos en nuestra sede principal ubicada en el centro de la ciudad.
            <span class="font-semibold text-[rgb(248,112,62)]">¡Te esperamos!</span>
          </p>

          <!-- Scroll indicator -->
          <div class="mt-8 sm:mt-12 flex justify-center">
            <div class="animate-bounce">
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTENT SECTION -->
    <section class="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 pb-20 sm:pb-24">
      <div class="max-w-6xl mx-auto">
        <!-- Mapa principal -->
        <article id="seccion-mapa" class="w-full">
          <div class="relative group">
            <!-- Glow effect -->
            <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

            <div class="relative bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-500">
              <!-- Número de sección -->
              <div class="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-[rgb(248,112,62)] rounded-xl flex items-center justify-center shadow-lg">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
              </div>

              <!-- Contenido -->
              <div class="ml-0 sm:ml-4">
                <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[rgb(58,26,29)] mb-3 sm:mb-4 md:mb-6 leading-tight">
                  Nuestra Ubicación en el Mapa
                </h2>

                <div class="space-y-3 sm:space-y-4 text-[rgb(58,26,29)] leading-relaxed mb-5 sm:mb-6">
                  <p class="text-sm sm:text-base md:text-lg leading-relaxed">
                    Nos encontramos estratégicamente ubicados en el centro de la ciudad para brindarte el mejor servicio de envíos y mensajería.
                  </p>
                </div>

                <!-- Contenedor del mapa responsive -->
                <div
                  class="relative w-full h-0 rounded-xl overflow-hidden shadow-lg border-2 border-[rgb(248,112,62)]/20 hover:border-[rgb(248,112,62)]/40 transition-all duration-300
                         pb-[75%] sm:pb-[62.5%] md:pb-[56.25%] lg:pb-[50%]"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.984901903749!2d-72.50906121114504!3d7.8846202000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6645f148da440d%3A0x3cbdf3005701aa8b!2sAgencia%20IR%20-%20env%C3%ADos%20y%20mensajer%C3%ADa%20-%20Sede%20Centro!5e1!3m2!1ses-419!2sco!4v1755201533453!5m2!1ses-419!2sco&iwloc=near&disableDefaultUI=false&gestureHandling=cooperative"
                    class="absolute inset-0 w-full h-full border-0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Ubicación Agencia IR - Sede Centro">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- Sección de contacto -->
        <div class="relative group mt-10 sm:mt-12">
          <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-700"></div>

          <div class="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-7 md:p-8 shadow-lg border border-white/50">
            <div class="text-center">
              <!-- Icono central -->
              <div class="w-14 h-14 sm:w-16 sm:h-16 bg-[rgb(248,112,62)] rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 shadow-sm">
                <svg class="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>

              <h3 class="text-xl sm:text-2xl md:text-3xl font-black text-[rgb(58,26,29)] mb-3 sm:mb-4">
                Contáctanos
              </h3>

              <p class="text-sm sm:text-base md:text-lg text-[rgb(58,26,29)] mb-5 sm:mb-6 max-w-lg mx-auto">
                ¿Necesitas más información? Llámanos y te atenderemos con gusto.
              </p>

              <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
                <a
                  href="tel:+573001234567"
                  class="group relative overflow-hidden bg-[rgb(248,112,62)] hover:bg-[rgb(248,112,62)]/90 text-white font-bold px-5 sm:px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 sm:gap-3 text-sm md:text-base w-full sm:w-auto"
                >
                  <svg class="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span class="relative z-10">+57 300 123 4567</span>
                </a>

                <a
                  href="https://wa.me/573001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group font-bold text-[rgb(248,112,62)] hover:text-[rgb(248,112,62)]/80 px-5 sm:px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-[rgb(248,112,62)]/10 hover:bg-[rgb(248,112,62)]/20 transition-all duration-300 flex items-center justify-center gap-2.5 sm:gap-3 border-2 border-[rgb(248,112,62)]/20 hover:border-[rgb(248,112,62)]/40 text-sm md:text-base w-full sm:w-auto"
                >
                  <svg class="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.567-.01-.197 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.251"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
// Función para llamar
function llamar() {
  window.location.href = 'tel:+573001234567';
}

// Función para WhatsApp
function abrirWhatsApp() {
  window.open('https://wa.me/573001234567', '_blank');
}

// Auto-scroll cuando se monta el componente
import { onMounted } from 'vue'

onMounted(() => {
  const titulo = document.getElementById('titulo-principal');
  titulo.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });

  setTimeout(() => {
    const seccionMapa = document.getElementById('seccion-mapa');
    seccionMapa.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }, 1500);
});
</script>

<style scoped>
/* Asegurar que el iframe sea completamente responsive */
iframe {
  border-radius: 0.75rem;
  will-change: transform;
}

/* Animación suave para el hover del mapa */
.group:hover iframe {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}

/* Respeto por usuarios con “reducir movimiento” */
@media (prefers-reduced-motion: reduce) {
  .group:hover iframe {
    transform: none !important;
    transition: none !important;
  }
}
</style>
