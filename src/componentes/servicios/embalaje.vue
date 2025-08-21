<template>
  <div class="min-h-screen" style="background: linear-gradient(135deg, #f1ea da 0%, #e8dcc6 100%);">
    <!-- Hero Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="text-center">
        <div class="inline-flex items-center justify-center px-6 py-2 mb-6 rounded-full" style="background: rgba(248, 112, 63, 0.1);">
          <div class="w-3 h-3 rounded-full mr-2" style="background: rgb(248, 112, 63);"></div>
          <span class="text-sm font-semibold" style="color: rgb(58, 29, 34);">ENVÍOS NACIONALES</span>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-black mb-4" style="color: rgb(248, 112, 63);">
          Cubrimos Todo Colombia
        </h1>
        
        <p class="text-base max-w-2xl mx-auto" style="color: rgb(58, 29, 34);">
          Descubre cómo nuestros aliados nacionales nos permiten 
          <span class="font-semibold" style="color: rgb(248, 112, 63);">llegar a cada rincón de Colombia</span>
          con la confianza de trabajar con las empresas de mensajería más reconocidas del país.
        </p>
      </div>
    </div>

    <!-- Features Section -->
    <div id="lideres-section" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4" style="color: rgb(58, 29, 34);">
          Líderes en Embalaje de Exportación
        </h2>
        <p class="text-lg max-w-2xl mx-auto" style="color: rgba(58, 29, 34, 0.8);">
          Especializados en soluciones de embalaje que cumplen con los más altos estándares internacionales
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="(feature, index) in features" 
          :key="index" 
          class="rounded-2xl shadow-lg p-8 transition-all duration-300 transform hover:-translate-y-2"
          style="background: #ffffff; box-shadow: 0 10px 25px rgba(96, 58, 38, 0.1);"
          @mouseenter="$event.target.style.boxShadow = '0 20px 40px rgba(96, 58, 38, 0.15)'"
          @mouseleave="$event.target.style.boxShadow = '0 10px 25px rgba(96, 58, 38, 0.1)'"
        >
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 text-white rounded-xl flex items-center justify-center font-bold text-xl mr-4" style="background: rgb(248, 112, 63);">
              {{ feature.number }}
            </div>
            <div class="text-3xl">{{ feature.icon }}</div>
          </div>
          <h3 class="text-xl font-bold mb-3" style="color: rgb(58, 29, 34);">{{ feature.title }}</h3>
          <p class="leading-relaxed" style="color: rgba(58, 29, 34, 0.7);">{{ feature.subtitle }}</p>
        </div>
      </div>
    </div>

    <!-- Main Image Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div class="bg-white rounded-3xl overflow-hidden" style="box-shadow: 0 25px 50px rgba(96, 58, 38, 0.15);">
        <div class="relative h-96 md:h-[500px]" style="background: linear-gradient(135deg, #603a26 0%, #4a2f1e 100%);">
          <img 
            v-if="mainImage" 
            :src="mainImage" 
            alt="Servicio de Embalaje Profesional" 
            class="w-full h-full object-cover"
          >
          <div v-else class="absolute inset-0 flex items-center justify-center">
            <div class="text-center p-8">
              <div class="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6" style="background: rgba(241, 88, 42, 0.2);">
                <svg class="w-16 h-16" style="color: #f1582a;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12l4-4 4 2 4-2 4 4"/>
                </svg>
              </div>
              <p class="text-lg" style="color: rgba(241, 234, 218, 0.8);">Imagen principal del servicio de embalaje profesional</p>
            </div>
          </div>
        </div>
        
        <div class="p-8 md:p-12">
          <h3 class="text-2xl font-bold mb-4" style="color: rgb(248, 112, 63);">AGENCIA IR</h3>
          <p class="text-lg leading-relaxed mb-6" style="color: rgb(58, 29, 34);">
            es uno de los proveedores de servicios de embalaje más confiables de Colombia, con más de 7 años de 
            experiencia en el mercado nacional e internacional. Nuestra especialización en técnicas avanzadas de 
            embalaje y nuestro enfoque en la protección total del producto nos convierte en un aliado estratégico 
            fundamental para empresas exportadoras en todo el territorio nacional.
          </p>
          
          <p class="leading-relaxed" style="color: rgba(58, 29, 34, 0.8);">
            Con presencia en más de 20 ciudades principales y una red especializada que incluye técnicos 
            certificados en diferentes tipos de embalaje, Agencia IR ha desarrollado soluciones específicas y 
            confiables para diversos sectores industriales, garantizando la integridad de los productos durante 
            todo el proceso de exportación.
          </p>
        </div>
      </div>
    </div>

    <!-- Services Gallery Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4" style="color: rgb(58, 29, 34);">
          Nuestros Servicios de Embalaje
        </h2>
        <p class="text-lg max-w-2xl mx-auto" style="color: rgba(58, 29, 34, 0.8);">
          Soluciones especializadas para cada tipo de producto y destino
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
          style="box-shadow: 0 10px 25px rgba(96, 58, 38, 0.1);"
          @mouseenter="$event.target.style.boxShadow = '0 20px 40px rgba(96, 58, 38, 0.15)'"
          @mouseleave="$event.target.style.boxShadow = '0 10px 25px rgba(96, 58, 38, 0.1)'"
        >
          <div class="relative h-64" style="background: linear-gradient(135deg, #603a26 0%, #4a2f1e 100%);">
            <img 
              v-if="service.image" 
              :src="service.image" 
              :alt="service.title" 
              class="w-full h-full object-cover"
            >
            <div v-else class="absolute inset-0 flex items-center justify-center">
              <div class="text-center">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4" style="background: rgba(241, 88, 42, 0.2);">
                  <svg class="w-10 h-10" style="color: #f1582a;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                  </svg>
                </div>
                <p style="color: rgba(241, 234, 218, 0.8);">{{ service.title }}</p>
              </div>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold mb-3" style="color: rgb(58, 29, 34);">{{ service.title }}</h3>
            <p class="leading-relaxed mb-4" style="color: rgba(58, 29, 34, 0.7);">{{ service.description }}</p>
            <button 
              @click="verMasDetalles(service)"
              class="font-semibold flex items-center transition-colors duration-300"
              style="color: rgb(248, 112, 63);"
              @mouseenter="$event.target.style.color = 'rgb(240, 100, 50)'"
              @mouseleave="$event.target.style.color = 'rgb(248, 112, 63)'"
            >
              Ver más detalles
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Auto scroll después de 2 segundos
onMounted(() => {
  setTimeout(() => {
    const lideresSection = document.getElementById('lideres-section')
    if (lideresSection) {
      lideresSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }, 2000)
})

const features = ref([
  {
    number: "1",
    title: "Especialistas en Protección",
    subtitle: "7 años protegiendo productos de exportación con excelencia",
    icon: "🛡️"
  },
  {
    number: "2", 
    title: "Materiales de Primera Calidad",
    subtitle: "Utilizamos los mejores materiales para cada tipo de producto",
    icon: "📦"
  },
  {
    number: "3",
    title: "Normativas Internacionales",
    subtitle: "Cumplimos con estándares de embalaje para exportación global",
    icon: "🌍"
  }
])

const services = ref([
  {
    title: "Embalaje Industrial",
    description: "Protección especializada para maquinaria pesada y equipos industriales con materiales resistentes y técnicas avanzadas.",
    image: "/public/images/embalaje.png"
  },
  {
    title: "Embalaje de Productos Frágiles",
    description: "Técnicas especializadas para cristalería, cerámica y productos delicados que requieren máxima protección.",
    image: "/public/images/embalaje2.png"
  },
  {
    title: "Embalaje Alimentario",
    description: "Soluciones que mantienen la frescura y calidad de productos alimenticios durante el transporte internacional.",
    image: "/public/images/embalaje.png"
  },
  {
    title: "Embalaje Farmacéutico",
    description: "Condiciones controladas para medicamentos y productos farmacéuticos con certificaciones internacionales.",
    image: "/public/images/embalaje2.png"
  }
])

const mainImage = ref("/public/images/embalaje.png")

function solicitarCotizacion() {
  router.push('/cotizar-embalaje')
}

function contactarAhora() {
  router.push('/contacto')
}

function verPortafolio() {
  router.push('/portafolio-embalaje')
}

function verMasDetalles(service) {
  console.log('Ver detalles de:', service.title)
}
</script>

<style scoped>
.fade-in {
  animation: fadeIn 0.6s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>