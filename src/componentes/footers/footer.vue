<template>
  <footer class="relative w-full">
    <!-- Curva superior del footer -->
    <div class="relative w-full overflow-hidden">
      <svg class="w-full h-16 md:h-20 lg:h-24" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,0 C360,100 1080,100 1440,0 L1440,120 L0,120 Z" fill="rgb(248, 112, 62)"></path>
      </svg>
    </div>

    <!-- Sección Call-to-Action -->
    <div class="text-white w-full" style="background-color: rgb(248, 112, 62);">
      <div class="py-6 sm:py-8 md:py-12">
        <div class="container mx-auto px-4 sm:px-6 text-center max-w-4xl">
          <h3 class="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
            ¿Listo para enviar tu mercancía?
          </h3>
          <p class="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-white text-opacity-90 leading-relaxed">
            Cotiza tu envío en segundos y descubre nuestras tarifas competitivas
          </p>
          <button
            @click="handleCotizarEnvio"
            class="bg-white text-orange-600 font-bold py-2 sm:py-3 px-6 sm:px-8 md:px-10 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base">
            COTIZAR AHORA
          </button>
        </div>
      </div>
    </div>

    <!-- Footer principal -->
    <div class="text-white w-full" style="background-color: rgb(58, 29, 34);">
      <div class="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        
        <!-- Logo -->
        <div class="flex justify-center mb-6 sm:mb-8">
          <div class="bg-white rounded-lg p-2 sm:p-3 shadow-lg">
            <img src="/images/logo.png" alt="Agencia Ir Mercancía y Mensajería" class="h-10 sm:h-12 md:h-16 w-auto object-contain">
          </div>
        </div>

        <!-- Título y descripción -->
        <div class="text-center mb-8 sm:mb-10">
          <h4 class="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Agencia Ir Mercancía y Mensajería
          </h4>
          <p class="text-sm sm:text-base md:text-lg text-orange-100 max-w-3xl mx-auto leading-relaxed px-2">
            Agencia dedicada a realizar envíos de paquetería y mensajería a lo largo y ancho del territorio nacional y en el mundo.
          </p>
        </div>
        
        <!-- Información de contacto - Responsive: 1 columna en móvil, 3 en desktop -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto mb-8">
          
          <!-- Ubicaciones -->
          <div class="text-center">
            <h5 class="font-bold text-white text-lg sm:text-xl mb-4 uppercase tracking-wide">Cúcuta</h5>
            <p class="text-orange-100 text-sm sm:text-base mb-6">Av. 6 # 12-05 Centro</p>
            
            <h5 class="font-bold text-white text-lg sm:text-xl mb-4 uppercase tracking-wide">Bucaramanga</h5>
            <p class="text-orange-100 text-sm sm:text-base">Cra 35 # 52 - 24</p>
            <p class="text-orange-100 text-sm sm:text-base">Cabecera del llano, Santander</p>
          </div>

          <!-- Teléfonos -->
          <div class="text-center">
            <h5 class="font-bold text-white text-lg sm:text-xl mb-4 uppercase tracking-wide">Contáctanos</h5>
            <div class="space-y-3">
              <a href="tel:+573176420646" class="block text-orange-100 hover:text-white transition-colors text-base sm:text-lg font-medium">
                +(57) 317 642 0646
              </a>
              <a href="tel:+573158703463" class="block text-orange-100 hover:text-white transition-colors text-base sm:text-lg font-medium">
                +(57) 315 870 3463
              </a>
            </div>
          </div>

          <!-- Horarios -->
          <div class="text-center">
            <h5 class="font-bold text-white text-lg sm:text-xl mb-4 uppercase tracking-wide">Horarios de Atención</h5>
            <div class="text-orange-100 space-y-1">
              <p class="font-medium text-white text-sm sm:text-base">Lunes a Viernes:</p>
              <p class="text-sm sm:text-base">8:00 am - 12:00 pm</p>
              <p class="text-sm sm:text-base">2:00 pm - 6:00 pm</p>
              <p class="font-medium text-white mt-3 text-sm sm:text-base">Sábados:</p>
              <p class="text-sm sm:text-base">9:00 am - 1:00 pm</p>
            </div>
          </div>
        </div>
        <!-- Copyright -->
        <div class="text-center pt-4 border-t border-orange-500 border-opacity-30">
          <p class="text-xs sm:text-sm md:text-base text-orange-200 leading-relaxed px-2">
            © {{ currentYear }} Agencia Ir Mercancía y Mensajería. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  },
  methods: {
    handleCotizarEnvio() {
      this.$router.push('/cotizar-info');
    }
  }
}
</script>