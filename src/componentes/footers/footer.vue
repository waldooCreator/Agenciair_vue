<template>
  <footer class="relative w-full">
    <!-- Curva superior del footer SIN carrusel -->
    <div class="relative w-full overflow-hidden">
      <!-- SVG de la curva -->
      <svg class="w-full h-16 md:h-20 lg:h-24" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,0 C360,100 1080,100 1440,0 L1440,120 L0,120 Z" fill="rgb(248, 112, 62)"></path>
      </svg>
    </div>

    <!-- Contenido principal del footer -->
    <div class="text-white w-full" style="background-color: rgb(248, 112, 62);">
      <!-- Newsletter -->
      <div class="py-6 md:py-8">
        <div class="container mx-auto px-4 text-center max-w-4xl">
          <h3 class="text-base md:text-lg font-semibold mb-2">
            Suscríbete a nuestros boletines, con toda la
          </h3>
          <p class="text-sm mb-4 opacity-90">
            actualidad del mercado logístico
          </p>
          <button
            @click="handleNewsletterSubscription"
            class="bg-white text-orange-600 font-bold py-2 px-6 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            SUSCRÍBETE AQUÍ
          </button>
        </div>
      </div>

      <!-- Navigation Links -->
      <div class="border-t border-orange-300 py-3 md:py-4">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center items-center text-xs md:text-sm space-x-1 md:space-x-3">
            <a href="#" class="hover:text-yellow-300">PORTAL COURIER</a>
            <span class="text-orange-200 hidden md:inline">|</span>
            <a href="#" class="hover:text-yellow-300">PORTAL TRANSPORTE</a>
            <span class="text-orange-200 hidden md:inline">|</span>
            <a href="#" class="hover:text-yellow-300">PORTAL CARGA INTERNACIONAL</a>
            <span class="text-orange-200 hidden md:inline">|</span>
            <a href="#" class="hover:text-yellow-300">PORTAL OPERACIÓN LOGÍSTICA</a>
            <span class="text-orange-200 hidden md:inline">|</span>
            <a href="#" class="hover:text-yellow-300">PORTAL Agencia IR CORPORATIVO</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer inferior -->
    <div class="text-white w-full" style="background-color: rgb(58, 29, 34);">
      <div class="container mx-auto px-4 py-6 md:py-8">
        <!-- Logo y redes sociales -->
        <div class="flex flex-col lg:flex-row justify-between items-center mb-6 space-y-4 lg:space-y-0">
          <div class="flex justify-center lg:justify-start w-full lg:w-auto">
            <div class="relative">
              <div class="bg-white rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 p-3">
                <img src="/images/logo.png" alt="Logo" class="h-12 md:h-16 w-auto object-contain">
              </div>
            </div>
          </div>
        </div>

        <!-- Información de contacto -->
        <div class="text-center space-y-3">
          <div class="space-y-1 text-sm md:text-base text-orange-100">
            <p class="font-medium">
              Carrera 68 No. 67B - 35 Teléfono +571 407 12 12, Medellín, Colombia, CO.
            </p>
          </div>
          <div class="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm text-orange-200">
            <a href="#" class="hover:text-white">Centro de Ayudas</a>
            <span class="hidden md:inline">•</span>
            <a href="#" class="hover:text-white">Términos y Condiciones</a>
            <span class="hidden md:inline">•</span>
            <a href="#" class="hover:text-white">Líneas de atención en el país</a>
            <span class="hidden md:inline">•</span>
            <a href="#" class="hover:text-white">Certificado de Entregas</a>
            <span class="hidden md:inline">•</span>
            <a href="#" class="hover:text-white">Sistemas de Información</a>
            <span class="hidden md:inline">•</span>
            <a href="#" class="hover:text-white">Aplicativo Móvil</a>
          </div>
        </div>
        <div class="text-center mt-6 pt-4 border-t border-orange-500">
          <p class="text-xs md:text-sm text-orange-200">
            © {{ currentYear }} Tu Empresa. Todos los derechos reservados.
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
    handleNewsletterSubscription() {
      console.log('Newsletter subscription clicked');
    }
  }
}
</script>

<style scoped>
/* Estilos básicos del footer */
</style>