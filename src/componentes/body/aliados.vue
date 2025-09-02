<template>
  <section class="relative w-full bg-[rgb(241,234,218)] py-10 md:py-14 overflow-hidden">
    <div class="container mx-auto px-6 md:px-10 lg:px-16">

      <!-- ENCABEZADO -->
      <div class="text-center mb-8 md:mb-12">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[rgb(58,26,29)] tracking-tight">
          Nuestros Aliados Estratégicos
        </h2>
        <p class="text-[rgb(58,26,29)]/70 text-sm md:text-base max-w-2xl mx-auto mt-3">
          Trabajamos junto a las mejores empresas del sector logístico para ofrecerte el servicio más completo y confiable.
        </p>
      </div>

      <!-- GRID DE PARTNERS -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5 md:gap-6 lg:gap-8">
        <div
          v-for="(partner, index) in partners"
          :key="partner.name"
          class="partner-card group relative"
          :class="getResponsiveClass(index)"
          :style="{ animationDelay: `${index * 120}ms` }"
        >
          <!-- TARJETA CLICABLE (enlace externo) -->
          <a
            class="block bg-white rounded-2xl p-5 md:p-6 border border-neutral-200 
                   shadow-[0_6px_20px_rgba(0,0,0,0.06)] 
                   hover:shadow-[0_10px_28px_rgba(0,0,0,0.10)] 
                   transition-all duration-300 transform hover:-translate-y-1 cursor-pointer outline-none"
            :href="partner.href"
            target="_blank"
            rel="noopener"
            :aria-label="`Abrir sitio oficial de ${partner.name}`"
          >
            <div class="aspect-square flex items-center justify-center overflow-hidden rounded-xl">
              <img
                :src="partner.src"
                :alt="partner.name"
                class="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                @error="handleImageError"
              />
            </div>

            <!-- Título -->
            <div class="mt-3 text-center min-h-[2.5rem] sm:min-h-[2.75rem] flex items-center justify-center">
              <h3
                class="font-semibold text-[rgb(58,26,29)] leading-snug whitespace-normal"
                :class="nameSizeClass(partner.name)"
              >
                {{ partner.name }}
              </h3>
            </div>

            <!-- PUNTO VERDE -->
            <span
              class="absolute top-2.5 right-2.5 inline-block w-2.5 h-2.5 rounded-full 
                     bg-emerald-400/90 ring-2 ring-white"
              aria-hidden="true"
            ></span>
          </a>

          <!-- TOOLTIP -->
          <div
            class="absolute -top-10 left-1/2 -translate-x-1/2 bg-[rgb(58,26,29)] text-white 
                   text-[11px] px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 
                   transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg"
          >
            {{ partner.name }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PartnersShowcase',
  data() {
    return {
      partners: [
        { name: 'Cámara de Comercio',   src: '/aliados/camaracomercio.png',   href: 'https://www.cccucuta.org.co/' },
        { name: 'Coordinadora',         src: '/aliados/coordinadora.jpg',     href: 'https://www.coordinadora.com/' },
        { name: 'DHL',                  src: '/aliados/dhl-1.svg',            href: 'https://www.dhl.com/' },
        { name: 'Interrapidísimo',      src: '/aliados/interrapidisimo.png',  href: 'https://www.interrapidisimo.com/' },
        { name: 'Servientrega',         src: '/aliados/Servientrega.png',     href: 'https://www.servientrega.com/' },
        { name: 'TCC',                  src: '/aliados/tcc.png',              href: 'https://www.tcc.com.co/' },
        { name: 'UPS',                  src: '/aliados/UPS.jpg',              href: 'https://www.ups.com/' }
      ]
    }
  },
  mounted() {
    this.animateOnScroll()
  },
  methods: {
    // Tamaño de fuente: reduce si el nombre es largo
    nameSizeClass(name) {
      const isLong = name.length > 14
      return isLong
        ? 'text-[clamp(11px,3.2vw,14px)] sm:text-[clamp(11px,2.0vw,14px)] lg:text-[15px]'
        : 'text-[clamp(12px,3.4vw,15px)] sm:text-[clamp(12px,2.2vw,15px)] lg:text-[16px]'
    },

    // Centrado del último ítem en móvil/tablet cuando hay número impar
    getResponsiveClass(index) {
      const isLast = index === this.partners.length - 1
      if (!isLast) return ''
      const classes = []
      if (this.partners.length % 2 === 1) {
        classes.push('col-span-2','mx-auto','mobile-last-eq','sm:col-span-1','sm:mx-0')
      }
      if (this.partners.length % 3 === 1) {
        classes.push('sm:col-start-2','lg:col-start-auto')
      }
      classes.push('lg:col-span-1','lg:mx-0')
      return classes.join(' ')
    },

    animateOnScroll() {
      const observer = new IntersectionObserver(
        entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('animate-fade-in-up')),
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      )
      this.$nextTick(() =>
        document.querySelectorAll('.partner-card').forEach(c => observer.observe(c))
      )
    },

    handleImageError(event) {
      const img = event.target
      img.style.display = 'none'
      const placeholder = document.createElement('div')
      placeholder.className =
        'w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg flex items-center justify-center'
      placeholder.innerHTML =
        '<span class="text-neutral-400 text-xs font-medium">Logo</span>'
      img.parentNode.appendChild(placeholder)
    }
  }
}
</script>

<style scoped>
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up { animation: fadeInUp 0.5s ease-out forwards; }
.partner-card { opacity: 0; transform: translateY(18px); }

/* 📱 Igualar ancho del último centrado en móvil */
@media (max-width: 639px) {
  .mobile-last-eq { width: calc(50% - 0.625rem); }
}
</style>
