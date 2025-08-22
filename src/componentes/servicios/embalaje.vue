<template>
  <div class="min-h-screen" style="background: linear-gradient(135deg, #f1eada 0%, #e8dcc6 100%);">
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

    <!-- Contact CTA Section (contenedor blanco, mismo estilo del otro componente) -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div class="bg-white rounded-3xl p-10 md:p-12 text-center" style="box-shadow: 0 25px 50px rgba(96, 58, 38, 0.15);">
        <div class="w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center" style="background: rgb(248, 112, 63);">
          <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h1.28a2 2 0 011.789 1.106l1.12 2.24a2 2 0 01-.45 2.309l-.87.87a16 16 0 006.06 6.06l.87-.87a2 2 0 012.309-.45l2.24 1.12A2 2 0 0121 19.72V21a2 2 0 01-2 2h-1a18 18 0 01-18-18V5z"/>
          </svg>
        </div>

        <h3 class="text-3xl font-extrabold mb-2" style="color: rgb(58, 29, 34);">Contáctanos</h3>
        <p class="max-w-xl mx-auto mb-8 text-base md:text-lg" style="color: rgba(58,29,34,0.8);">
          ¿Necesitas más información? Llámanos o escríbenos y te atenderemos con gusto.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            :href="`tel:${telefonoLink}`"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white shadow-md transition-transform"
            style="background: rgb(248, 112, 63); box-shadow: 0 10px 20px rgba(241,88,42,0.2);"
            @mouseenter="$event.currentTarget.style.transform = 'translateY(-2px)'"
            @mouseleave="$event.currentTarget.style.transform = 'translateY(0)'"
            aria-label="Llamar por teléfono"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h1.28a2 2 0 011.789 1.106l1.12 2.24a2 2 0 01-.45 2.309l-.87.87a16 16 0 006.06 6.06l.87-.87a2 2 0 012.309-.45l2.24 1.12A2 2 0 0121 19.72V21a2 2 0 01-2 2h-1a18 18 0 01-18-18V5z"/>
            </svg>
            {{ telefonoTexto }}
          </a>

          <a
            :href="whatsappHref"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold"
            style="color: rgb(248, 112, 63); background: rgba(248, 112, 63, 0.08); border: 1px solid rgba(248, 112, 63, 0.3);"
            @mouseenter="$event.currentTarget.style.background = 'rgba(248,112,63,0.12)'"
            @mouseleave="$event.currentTarget.style.background = 'rgba(248,112,63,0.08)'"
            aria-label="Escribir por WhatsApp"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.62-6.003C.122 5.281 5.403 0 12.057 0c3.18 0 6.167 1.24 8.413 3.488A11.86 11.86 0 0124 12.053c-.003 6.653-5.284 11.94-11.938 11.94a11.9 11.9 0 01-6.013-1.616L.057 24zm6.597-3.807c1.74 1.037 3.276 1.662 5.392 1.662 5.448 0 9.886-4.434 9.889-9.877.003-5.462-4.415-9.89-9.881-9.893-5.45 0-9.887 4.434-9.89 9.878 0 2.225.726 3.891 1.947 5.605l-.997 3.648 3.54-.023zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.03-.967-.272-.099-.47-.148-.669.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.612-.916-2.207-.241-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.148.198 2.096 3.2 5.084 4.487.711.306 1.265.489 1.697.626.713.227 1.362.195 1.875.118.572-.085 1.758-.718 2.006-1.41.248-.694.248-1.289.173-1.414z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
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

// Todas las imágenes apuntan a la misma ruta solicitada
const IMAGE_URL = '/public/images/recoleccion.png'

const services = ref([
  {
    title: "Embalaje Industrial",
    description: "Protección especializada para maquinaria pesada y equipos industriales con materiales resistentes y técnicas avanzadas.",
    image: IMAGE_URL
  },
  {
    title: "Embalaje de Productos Frágiles",
    description: "Técnicas especializadas para cristalería, cerámica y productos delicados que requieren máxima protección.",
    image: IMAGE_URL
  },
  {
    title: "Embalaje Alimentario",
    description: "Soluciones que mantienen la frescura y calidad de productos alimenticios durante el transporte internacional.",
    image: IMAGE_URL
  },
  {
    title: "Embalaje Farmacéutico",
    description: "Condiciones controladas para medicamentos y productos farmacéuticos con certificaciones internacionales.",
    image: IMAGE_URL
  }
])

const mainImage = ref(IMAGE_URL)

// Contacto
const telefonoTexto = '+57 300 123 4567'
const telefonoLink = '+573001234567'
const whatsappNumber = '573001234567' // sin +

const whatsappHref = computed(() => {
  const msg = encodeURIComponent('Hola, quiero información sobre sus servicios.')
  return `https://wa.me/${whatsappNumber}?text=${msg}`
})

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
