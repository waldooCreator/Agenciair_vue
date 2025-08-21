<template>
  <main class="min-h-screen bg-[rgb(241,234,218)] pb-20 flex flex-col lg:flex-row">
    <!-- Tabla de contenido lateral para desktop -->
    <nav
      class="hidden lg:block fixed left-6 top-40 w-72 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 text-[rgb(58,26,29)] z-30"
      aria-label="Tabla de contenido"
    >
      <div class="font-semibold mb-4 text-lg flex items-center gap-2">
        <svg class="w-5 h-5 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h18M3 12h18M3 19h18" />
        </svg>
        Contenido
      </div>
      <ul class="space-y-3">
        <li><a href="#quienes-somos" :class="activeId === 'quienes-somos' ? 'bg-[rgb(248,112,62)]/20 text-[rgb(248,112,62)] font-bold' : ''" @click.prevent="scrollToId('quienes-somos')" class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-[rgb(248,112,62)]/10 hover:text-[rgb(248,112,62)] transition-colors">Quiénes somos</a></li>
        <li><a href="#mision" :class="activeId === 'mision' ? 'bg-[rgb(248,112,62)]/20 text-[rgb(248,112,62)] font-bold' : ''" @click.prevent="scrollToId('mision')" class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-[rgb(248,112,62)]/10 hover:text-[rgb(248,112,62)] transition-colors">Misión</a></li>
        <li><a href="#vision" :class="activeId === 'vision' ? 'bg-[rgb(248,112,62)]/20 text-[rgb(248,112,62)] font-bold' : ''" @click.prevent="scrollToId('vision')" class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-[rgb(248,112,62)]/10 hover:text-[rgb(248,112,62)] transition-colors">Visión</a></li>
        <li><a href="#propuesta-valor" :class="activeId === 'propuesta-valor' ? 'bg-[rgb(248,112,62)]/20 text-[rgb(248,112,62)] font-bold' : ''" @click.prevent="scrollToId('propuesta-valor')" class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-[rgb(248,112,62)]/10 hover:text-[rgb(248,112,62)] transition-colors">Nuestra propuesta de valor</a></li>
        <li><a href="#valores" :class="activeId === 'valores' ? 'bg-[rgb(248,112,62)]/20 text-[rgb(248,112,62)] font-bold' : ''" @click.prevent="scrollToId('valores')" class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-[rgb(248,112,62)]/10 hover:text-[rgb(248,112,62)] transition-colors">Valores</a></li>
      </ul>
    </nav>

    <!-- Contenido principal desplazado a la izquierda para simular margen como en el ejemplo -->
    <section class="lg:ml-[23rem] max-w-4xl w-full xl:w-5/6 2xl:w-3/4 px-4 py-10" role="main">
      <!-- QUIÉNES SOMOS -->
      <div id="quienes-somos" class="group relative mb-10 scroll-mt-24">
        <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
        <div class="relative glass-effect rounded-3xl p-6 md:p-10 shadow-lg border border-white/50">
          <div class="text-center mb-8">
            <div class="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h2 class="text-2xl md:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[rgb(248,112,62)] to-[rgb(248,112,62)] bg-clip-text text-transparent">Quiénes somos</h2>
          </div>
          <p class="text-base md:text-lg xl:text-lg leading-relaxed text-justify text-[rgb(58,26,29)]">
            Somos una agencia aliada en logística, transporte y mensajería que conecta empresas y personas con soluciones rápidas, confiables y personalizadas, enfocándonos en la calidad y la confianza.
          </p>
        </div>
      </div>

      <!-- MISIÓN -->
      <article id="mision" class="group relative mb-10 scroll-mt-24">
        <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
        <div class="relative glass-effect rounded-3xl p-6 md:p-10 shadow-lg border border-white/50">
          <div class="text-center mb-6">
            <h2 class="text-2xl md:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[rgb(248,112,62)] to-[rgb(248,112,62)] bg-clip-text text-transparent">Misión</h2>
          </div>
          <p class="text-base md:text-lg xl:text-lg leading-relaxed text-justify text-[rgb(58,26,29)]">
            Ofrecer un servicio de calidad y de confianza con una metodología logística estructurada, con tiempo de respuesta rápida y enfocada en soluciones.
          </p>
        </div>
      </article>

      <!-- VISIÓN -->
      <article id="vision" class="group relative mb-10 scroll-mt-24">
        <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
        <div class="relative glass-effect rounded-3xl p-6 md:p-10 shadow-lg border border-white/50">
          <div class="text-center mb-6">
            <h2 class="text-2xl md:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[rgb(248,112,62)] to-[rgb(248,112,62)] bg-clip-text text-transparent">Visión</h2>
          </div>
          <p class="text-base md:text-lg xl:text-lg leading-relaxed text-justify text-[rgb(58,26,29)]">
            Ser reconocidos como una agencia intermediadora confiable y rentable entre el cliente y la transportadora, para la venta de servicios de transporte nacional e internacional a microempresarios y Pymes del área metropolitana de Cúcuta.
          </p>
        </div>
      </article>

      <!-- PROPUESTA DE VALOR -->
      <article id="propuesta-valor" class="group relative mb-10 scroll-mt-24">
        <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
        <div class="relative glass-effect rounded-3xl p-6 md:p-10 shadow-lg border border-white/50">
          <div class="text-base md:text-lg font-bold text-[rgb(248,112,62)] mb-4">
            Nuestra propuesta de valor
          </div>
          <p class="text-base md:text-lg xl:text-lg leading-relaxed text-justify text-[rgb(58,26,29)] mb-6">
            En nuestra agencia creemos que la logística va mucho más allá de transportar una caja de un punto a otro. Nuestra propuesta de valor radica en convertirnos en un aliado que educa, asesora y empodera a sus clientes.
          </p>
          <ul class="list-disc ml-6 text-base md:text-lg xl:text-lg leading-relaxed text-justify text-[rgb(58,26,29)] space-y-2 mb-6">
            <li>No solo llevamos tus envíos: <span class="font-semibold text-[rgb(248,112,62)]">te enseñamos a comprender y gestionar tu propio proceso logístico.</span></li>
            <li>Te asesoramos de manera personalizada, brindándote información clara y práctica sobre trámites, regulaciones y mejores prácticas.</li>
            <li>Te mantenemos informado de la trazabilidad de tus envíos, para que siempre sepas en qué etapa se encuentran tus mercancías.</li>
            <li>Te ayudamos a fortalecer la relación con tus clientes, brindándoles acompañamiento en sus negocios y generando confianza en cada operación.</li>
          </ul>
          <div class="bg-[rgb(248,112,62)]/10 rounded-2xl p-4 md:p-6 border-l-4 border-[rgb(248,112,62)] mb-6">
            <blockquote class="text-lg md:text-xl font-medium text-[rgb(58,26,29)] italic text-justify">
              No solo entregamos paquetes: entregamos experiencias, aportamos conocimiento y contribuimos a que cada cliente tenga el control de su logística.
            </blockquote>
          </div>
          <p class="text-base md:text-lg xl:text-lg leading-relaxed text-justify text-[rgb(58,26,29)]">
            Nuestro objetivo final es que cada envío se convierta en una oportunidad para fidelizar a tus clientes, abrir nuevas puertas y hacer crecer tu negocio.
          </p>
        </div>
      </article>

      <!-- VALORES -->
      <div id="valores" class="group relative mb-10 scroll-mt-24">
        <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
        <div class="relative glass-effect rounded-3xl p-6 md:p-10 shadow-lg border border-white/50">
          <div class="text-left mb-10">
            <div class="uppercase tracking-widest text-[rgb(248,112,62)] font-semibold text-sm md:text-base mb-1">Nuestros</div>
            <h2 class="font-extrabold text-[rgb(31,23,37)] text-2xl md:text-3xl xl:text-4xl leading-tight">Valores</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="flex flex-col items-center">
              <div class="w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 bg-[rgb(248,112,62)] rounded-full flex items-center justify-center mb-4">
                <svg class="h-7 w-7 md:w-8 md:h-8 xl:w-10 xl:h-10 text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path stroke-width="2" stroke="currentColor" d="M12 17.09l5.41 3.18-1.64-5.81 4.55-3.51-5.82-.5L12 5.15l-2.5 5.3-5.82.5 4.55 3.51-1.64 5.81z"/></svg>
              </div>
              <h3 class="font-bold text-lg md:text-xl text-[rgb(58,26,29)] mb-2 text-center">Servicio</h3>
              <p class="text-gray-700 text-justify">
                Servir a nuestros clientes con la finalidad de satisfacer su necesidad al realizar los envíos de sus mercancías de forma correcta, generando una experiencia única y diferenciadora.
              </p>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 bg-[rgb(248,112,62)] rounded-full flex items-center justify-center mb-4">
                <svg class="h-7 w-7 md:w-8 md:h-8 xl:w-10 xl:h-10 text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path stroke-width="2" stroke="currentColor" d="M12 17.09l5.41 3.18-1.64-5.81 4.55-3.51-5.82-.5L12 5.15l-2.5 5.3-5.82.5 4.55 3.51-1.64 5.81z"/></svg>
              </div>
              <h3 class="font-bold text-lg md:text-xl text-[rgb(58,26,29)] mb-2 text-center">Cumplimiento</h3>
              <p class="text-gray-700 text-justify">
                Estamos comprometidos con nuestras responsabilidades y obligaciones regulatorias y comerciales, con el fin de llevar a cabo nuestras metas y objetivos trazados en la compañía.
              </p>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 bg-[rgb(248,112,62)] rounded-full flex items-center justify-center mb-4">
                <svg class="h-7 w-7 md:w-8 md:h-8 xl:w-10 xl:h-10 text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path stroke-width="2" stroke="currentColor" d="M12 17.09l5.41 3.18-1.64-5.81 4.55-3.51-5.82-.5L12 5.15l-2.5 5.3-5.82.5 4.55 3.51-1.64 5.81z"/></svg>
              </div>
              <h3 class="font-bold text-lg md:text-xl text-[rgb(58,26,29)] mb-2 text-center">Confianza</h3>
              <p class="text-gray-700 text-justify">
                Entregamos a nuestros clientes el trabajo hecho con amor, conocimiento y compromiso, que son suficientes para ganar su fé al dejar los procesos logísticos de su mercancía en nuestras manos.
              </p>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 bg-[rgb(248,112,62)] rounded-full flex items-center justify-center mb-4">
                <svg class="h-7 w-7 md:w-8 md:h-8 xl:w-10 xl:h-10 text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path stroke-width="2" stroke="currentColor" d="M12 17.09l5.41 3.18-1.64-5.81 4.55-3.51-5.82-.5L12 5.15l-2.5 5.3-5.82.5 4.55 3.51-1.64 5.81z"/></svg>
              </div>
              <h3 class="font-bold text-lg md:text-xl text-[rgb(58,26,29)] mb-2 text-center">Trabajo en equipo</h3>
              <p class="text-gray-700 text-justify">
                Trabajo integral, aportando de los conocimientos y habilidades de todos, como miembros del mismo, para el alcance de los objetivos comunes, propios de la organización.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- TOC responsive -->
    <nav class="lg:hidden sticky top-0 bg-[rgb(241,234,218)] z-20 shadow-sm border-b border-[rgb(248,112,62)]/20">
      <ul class="flex overflow-x-auto whitespace-nowrap px-4 py-3 space-x-6 text-[rgb(58,26,29)]">
        <li><a href="#quienes-somos" :class="activeId === 'quienes-somos' ? 'bg-[rgb(248,112,62)]/20 text-[rgb(248,112,62)] font-bold' : 'hover:bg-[rgb(248,112,62)]/10 hover:text-[rgb(248,112,62)]'" @click.prevent="scrollToId('quienes-somos')" class="text-sm font-medium px-2 py-1 rounded-lg block">Quiénes somos</a></li>
        <li><a href="#mision" :class="activeId === 'mision' ? 'bg-[rgb(248,112,62)]/20 text-[rgb(248,112,62)] font-bold' : 'hover:bg-[rgb(248,112,62)]/10 hover:text-[rgb(248,112,62)]'" @click.prevent="scrollToId('mision')" class="text-sm font-medium px-2 py-1 rounded-lg block">Misión</a></li>
        <li><a href="#vision" :class="activeId === 'vision' ? 'bg-[rgb(248,112,62)]/20 text-[rgb(248,112,62)] font-bold' : 'hover:bg-[rgb(248,112,62)]/10 hover:text-[rgb(248,112,62)]'" @click.prevent="scrollToId('vision')" class="text-sm font-medium px-2 py-1 rounded-lg block">Visión</a></li>
        <li><a href="#propuesta-valor" :class="activeId === 'propuesta-valor' ? 'bg-[rgb(248,112,62)]/20 text-[rgb(248,112,62)] font-bold' : 'hover:bg-[rgb(248,112,62)]/10 hover:text-[rgb(248,112,62)]'" @click.prevent="scrollToId('propuesta-valor')" class="text-sm font-medium px-2 py-1 rounded-lg block">Propuesta de Valor</a></li>
        <li><a href="#valores" :class="activeId === 'valores' ? 'bg-[rgb(248,112,62)]/20 text-[rgb(248,112,62)] font-bold' : 'hover:bg-[rgb(248,112,62)]/10 hover:text-[rgb(248,112,62)]'" @click.prevent="scrollToId('valores')" class="text-sm font-medium px-2 py-1 rounded-lg block">Valores</a></li>
      </ul>
    </nav>
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const activeId = ref('quienes-somos')
function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
let observer
onMounted(() => {
  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      })
    },
    { rootMargin: '0px 0px -70% 0px', threshold: 0.1 }
  )
  const sections = ['quienes-somos', 'mision', 'vision', 'propuesta-valor', 'valores']
  sections.forEach(id => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
})
onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.glass-effect {
  background: rgba(255, 255, 255, 0.98);
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
.animate-float { animation: float 3s ease-in-out infinite; }
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #f1f1f0; }
::-webkit-scrollbar-thumb { background: rgb(248,112,62); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: rgba(248, 112, 62, 0.8); }
</style>
