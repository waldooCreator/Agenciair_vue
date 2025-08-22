<template>
  <main class="min-h-screen bg-[rgb(241,234,218)] pb-20 flex flex-col lg:flex-row">
    <!-- TOC lateral (desktop) -->
    <nav
      class="hidden lg:block fixed left-6 top-40 w-72 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200 shadow-sm p-6 text-[rgb(58,26,29)] z-30"
      aria-label="Tabla de contenido"
    >
      <div class="font-semibold mb-4 text-lg flex items-center gap-2">
        <svg class="w-5 h-5 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h18M3 12h18M3 19h18" />
        </svg>
        Contenido
      </div>
      <ul class="space-y-3">
        <li>
          <a
            href="#quienes-somos"
            :class="activeId === 'quienes-somos' ? 'bg-[rgb(248,112,62)]/20 text-[rgb(248,112,62)] font-bold' : ''"
            @click.prevent="scrollToId('quienes-somos')"
            class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-[rgb(248,112,62)]/10 hover:text-[rgb(248,112,62)] transition-colors"
          >Quiénes somos</a>
        </li>
        <li>
          <a
            href="#mision"
            :class="activeId === 'mision' ? 'bg-[rgb(248,112,62)]/20 text-[rgb(248,112,62)] font-bold' : ''"
            @click.prevent="scrollToId('mision')"
            class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-[rgb(248,112,62)]/10 hover:text-[rgb(248,112,62)] transition-colors"
          >Misión</a>
        </li>
        <li>
          <a
            href="#vision"
            :class="activeId === 'vision' ? 'bg-[rgb(248,112,62)]/20 text-[rgb(248,112,62)] font-bold' : ''"
            @click.prevent="scrollToId('vision')"
            class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-[rgb(248,112,62)]/10 hover:text-[rgb(248,112,62)] transition-colors"
          >Visión</a>
        </li>
        <li>
          <a
            href="#propuesta-valor"
            :class="activeId === 'propuesta-valor' ? 'bg-[rgb(248,112,62)]/20 text-[rgb(248,112,62)] font-bold' : ''"
            @click.prevent="scrollToId('propuesta-valor')"
            class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-[rgb(248,112,62)]/10 hover:text-[rgb(248,112,62)] transition-colors"
          >Nuestra propuesta de valor</a>
        </li>
        <li>
          <a
            href="#valores"
            :class="activeId === 'valores' ? 'bg-[rgb(248,112,62)]/20 text-[rgb(248,112,62)] font-bold' : ''"
            @click.prevent="scrollToId('valores')"
            class="block px-3 py-2 rounded-lg text-sm font-medium hover:bg-[rgb(248,112,62)]/10 hover:text-[rgb(248,112,62)] transition-colors"
          >Valores</a>
        </li>
      </ul>
    </nav>

    <!-- Contenido principal -->
    <section class="lg:ml-[23rem] max-w-4xl w-full xl:w-5/6 2xl:w-3/4 px-4 py-10" role="main">
      <!-- QUIÉNES SOMOS -->
      <div id="quienes-somos" class="group relative mb-10 scroll-mt-24">
        <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur-md opacity-0 group-hover:opacity-20 transition duration-500"></div>
        <div class="relative bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-lg border border-white/50">
          <!-- encabezado -->
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-gradient-to-br from-[rgb(248,112,62)] to-[rgb(248,112,62)] rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h2 class="text-2xl md:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-[rgb(248,112,62)] to-[rgb(248,112,62)] bg-clip-text text-transparent">
              Quiénes somos
            </h2>
          </div>

          <!-- layout gráfico: texto + KPIs -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <p class="text-base md:text-lg xl:text-lg leading-relaxed text-justify text-[rgb(58,26,29)]">
                Somos una agencia aliada en logística, transporte y mensajería que conecta empresas y personas con soluciones rápidas,
                confiables y personalizadas, enfocándonos en la calidad y la confianza.
              </p>
              <ul class="mt-5 space-y-3">
                <li class="flex items-start gap-3">
                  <span class="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-[rgb(248,112,62)]"></span>
                  <span class="text-[rgb(58,26,29)] text-sm md:text-base leading-relaxed">Acompañamiento integral antes, durante y después del envío.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-[rgb(248,112,62)]"></span>
                  <span class="text-[rgb(58,26,29)] text-sm md:text-base leading-relaxed">Procesos claros y trazables para tu tranquilidad.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-[rgb(248,112,62)]"></span>
                  <span class="text-[rgb(58,26,29)] text-sm md:text-base leading-relaxed">Soluciones a medida para microempresas y Pymes.</span>
                </li>
              </ul>
            </div>

            <div class="grid grid-cols-3 gap-3 md:gap-4">
              <div class="bg-white border border-[rgb(248,112,62)]/20 rounded-2xl p-4 text-center shadow-sm">
                <div class="text-xl md:text-2xl font-extrabold text-[rgb(58,26,29)]">+24k</div>
                <div class="text-[13px] md:text-sm text-[rgb(58,26,29)]/70">Envíos guiados</div>
              </div>
              <div class="bg-white border border-[rgb(248,112,62)]/20 rounded-2xl p-4 text-center shadow-sm">
                <div class="text-xl md:text-2xl font-extrabold text-[rgb(58,26,29)]">98%</div>
                <div class="text-[13px] md:text-sm text-[rgb(58,26,29)]/70">Satisfacción</div>
              </div>
              <div class="bg-white border border-[rgb(248,112,62)]/20 rounded-2xl p-4 text-center shadow-sm">
                <div class="text-xl md:text-2xl font-extrabold text-[rgb(58,26,29)]">+40</div>
                <div class="text-[13px] md:text-sm text-[rgb(58,26,29)]/70">Aliados</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Misión y Visión en grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- MISIÓN -->
        <article id="mision" class="group relative scroll-mt-24">
          <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur-md opacity-0 group-hover:opacity-20 transition duration-500"></div>
          <div class="relative bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-lg border border-white/50 h-full">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-full bg-[rgb(248,112,62)] text-white flex items-center justify-center shadow">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v8m-4-4h8"></path>
                </svg>
              </div>
              <h2 class="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[rgb(248,112,62)] to-[rgb(248,112,62)] bg-clip-text text-transparent">
                Misión
              </h2>
            </div>
            <p class="text-base md:text-lg leading-relaxed text-justify text-[rgb(58,26,29)]">
              Ofrecer un servicio de calidad y de confianza con una metodología logística estructurada, con tiempo de respuesta rápida y enfocada en soluciones.
            </p>
            <ul class="mt-5 space-y-2">
              <li class="flex items-center gap-2 text-[rgb(58,26,29)]">
                <span class="inline-block w-3 h-3 rounded-full bg-[rgb(248,112,62)]"></span> Respuesta ágil
              </li>
              <li class="flex items-center gap-2 text-[rgb(58,26,29)]">
                <span class="inline-block w-3 h-3 rounded-full bg-[rgb(248,112,62)]"></span> Metodología clara
              </li>
              <li class="flex items-center gap-2 text-[rgb(58,26,29)]">
                <span class="inline-block w-3 h-3 rounded-full bg-[rgb(248,112,62)]"></span> Soluciones centradas en el cliente
              </li>
            </ul>
          </div>
        </article>

        <!-- VISIÓN -->
        <article id="vision" class="group relative scroll-mt-24">
          <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur-md opacity-0 group-hover:opacity-20 transition duration-500"></div>
          <div class="relative bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-lg border border-white/50 h-full">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-full bg-[rgb(248,112,62)] text-white flex items-center justify-center shadow">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h4l3 10 4-18 3 8h4"></path>
                </svg>
              </div>
              <h2 class="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[rgb(248,112,62)] to-[rgb(248,112,62)] bg-clip-text text-transparent">
                Visión
              </h2>
            </div>
            <p class="text-base md:text-lg leading-relaxed text-justify text-[rgb(58,26,29)]">
              Ser reconocidos como una agencia intermediadora confiable y rentable entre el cliente y la transportadora, para la venta de servicios de transporte nacional e internacional a microempresarios y Pymes del área metropolitana de Cúcuta.
            </p>
            <div class="mt-5 grid grid-cols-3 gap-3">
              <div class="bg-white border border-[rgb(248,112,62)]/20 rounded-xl p-3 text-center">
                <span class="block text-sm font-semibold text-[rgb(58,26,29)]">Confiable</span>
                <span class="block text-[12px] text-[rgb(58,26,29)]/70">Intermediación</span>
              </div>
              <div class="bg-white border border-[rgb(248,112,62)]/20 rounded-xl p-3 text-center">
                <span class="block text-sm font-semibold text-[rgb(58,26,29)]">Rentable</span>
                <span class="block text-[12px] text-[rgb(58,26,29)]/70">Crecimiento</span>
              </div>
              <div class="bg-white border border-[rgb(248,112,62)]/20 rounded-xl p-3 text-center">
                <span class="block text-sm font-semibold text-[rgb(58,26,29)]">Local</span>
                <span class="block text-[12px] text-[rgb(58,26,29)]/70">Cúcuta</span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- PROPUESTA DE VALOR -->
      <article id="propuesta-valor" class="group relative mt-10 scroll-mt-24">
        <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur-md opacity-0 group-hover:opacity-20 transition duration-500"></div>
        <div class="relative bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-lg border border-white/50">
          <div class="text-base md:text-lg font-bold text-[rgb(248,112,62)] mb-4">
            Nuestra propuesta de valor
          </div>

          <p class="text-base md:text-lg leading-relaxed text-justify text-[rgb(58,26,29)] mb-6">
            En nuestra agencia creemos que la logística va mucho más allá de transportar una caja de un punto a otro. Nuestra propuesta de valor radica en convertirnos en un aliado que educa, asesora y empodera a sus clientes.
          </p>

          <!-- Proceso horizontal -->
          <div class="overflow-x-auto">
            <div class="flex items-stretch gap-4 md:gap-6 min-w-[720px]">
              <div class="bg-white border border-[rgb(248,112,62)]/20 rounded-2xl p-4 md:p-5 min-w-[200px] shadow-sm">
                <div class="w-8 h-8 rounded-full bg-[rgb(248,112,62)] text-white flex items-center justify-center font-bold mb-3">1</div>
                <div class="text-[rgb(58,26,29)] font-semibold">Te enseñamos</div>
                <p class="text-[rgb(58,26,29)]/80 text-sm mt-1">Entiende tu propio proceso logístico.</p>
              </div>
              <div class="flex items-center text-2xl text-[rgb(248,112,62)]/80 font-bold select-none">→</div>
              <div class="bg-white border border-[rgb(248,112,62)]/20 rounded-2xl p-4 md:p-5 min-w-[200px] shadow-sm">
                <div class="w-8 h-8 rounded-full bg-[rgb(248,112,62)] text-white flex items-center justify-center font-bold mb-3">2</div>
                <div class="text-[rgb(58,26,29)] font-semibold">Te asesoramos</div>
                <p class="text-[rgb(58,26,29)]/80 text-sm mt-1">Trámites, regulaciones y mejores prácticas.</p>
              </div>
              <div class="flex items-center text-2xl text-[rgb(248,112,62)]/80 font-bold select-none">→</div>
              <div class="bg-white border border-[rgb(248,112,62)]/20 rounded-2xl p-4 md:p-5 min-w-[200px] shadow-sm">
                <div class="w-8 h-8 rounded-full bg-[rgb(248,112,62)] text-white flex items-center justify-center font-bold mb-3">3</div>
                <div class="text-[rgb(58,26,29)] font-semibold">Trazabilidad</div>
                <p class="text-[rgb(58,26,29)]/80 text-sm mt-1">Información clara en cada etapa del envío.</p>
              </div>
              <div class="flex items-center text-2xl text-[rgb(248,112,62)]/80 font-bold select-none">→</div>
              <div class="bg-white border border-[rgb(248,112,62)]/20 rounded-2xl p-4 md:p-5 min-w-[200px] shadow-sm">
                <div class="w-8 h-8 rounded-full bg-[rgb(248,112,62)] text-white flex items-center justify-center font-bold mb-3">4</div>
                <div class="text-[rgb(58,26,29)] font-semibold">Fidelización</div>
                <p class="text-[rgb(58,26,29)]/80 text-sm mt-1">Acompañamiento que fortalece relaciones.</p>
              </div>
            </div>
          </div>

          <!-- Bullets -->
          <ul class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <li class="flex items-start gap-2 text-[rgb(58,26,29)]">
              <span class="mt-2 w-2.5 h-2.5 rounded-full bg-[rgb(248,112,62)]"></span>
              <span>No solo llevamos tus envíos: <span class="font-semibold text-[rgb(248,112,62)]">te enseñamos a comprender y gestionar tu propio proceso logístico.</span></span>
            </li>
            <li class="flex items-start gap-2 text-[rgb(58,26,29)]">
              <span class="mt-2 w-2.5 h-2.5 rounded-full bg-[rgb(248,112,62)]"></span>
              <span>Asesoría personalizada con información clara y práctica.</span>
            </li>
            <li class="flex items-start gap-2 text-[rgb(58,26,29)]">
              <span class="mt-2 w-2.5 h-2.5 rounded-full bg-[rgb(248,112,62)]"></span>
              <span>Trazabilidad real para saber dónde están tus mercancías.</span>
            </li>
            <li class="flex items-start gap-2 text-[rgb(58,26,29)]">
              <span class="mt-2 w-2.5 h-2.5 rounded-full bg-[rgb(248,112,62)]"></span>
              <span>Acompañamiento que genera confianza y lealtad.</span>
            </li>
          </ul>

          <div class="bg-[rgb(248,112,62)]/10 rounded-2xl p-4 md:p-6 border-l-4 border-[rgb(248,112,62)] mt-8">
            <blockquote class="text-lg md:text-xl font-medium text-[rgb(58,26,29)] italic text-justify">
              No solo entregamos paquetes: entregamos experiencias, aportamos conocimiento y contribuimos a que cada cliente tenga el control de su logística.
            </blockquote>
          </div>

          <p class="text-base md:text-lg leading-relaxed text-justify text-[rgb(58,26,29)] mt-6">
            Nuestro objetivo final es que cada envío se convierta en una oportunidad para fidelizar a tus clientes, abrir nuevas puertas y hacer crecer tu negocio.
          </p>
        </div>
      </article>

      <!-- VALORES -->
      <div id="valores" class="group relative mt-10 scroll-mt-24">
        <div class="absolute -inset-1 bg-[rgb(248,112,62)] rounded-3xl blur-md opacity-0 group-hover:opacity-20 transition duration-500"></div>
        <div class="relative bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-lg border border-white/50">
          <div class="text-left mb-8">
            <div class="uppercase tracking-widest text-[rgb(248,112,62)] font-semibold text-sm md:text-base mb-1">Nuestros</div>
            <h2 class="font-extrabold text-[rgb(31,23,37)] text-2xl md:text-3xl xl:text-4xl leading-tight">Valores</h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Servicio -->
            <div class="flex flex-col items-center text-center bg-white rounded-2xl border border-[rgb(248,112,62)]/20 p-6 shadow-sm hover:shadow-md transition-shadow h-full">
              <div class="w-16 h-16 md:w-16 md:h-16 xl:w-20 xl:h-20 bg-[rgb(248,112,62)] rounded-full flex items-center justify-center mb-4 text-white">
                <svg class="h-7 w-7 md:w-8 md:h-8 xl:w-10 xl:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="font-bold text-lg md:text-xl text-[rgb(58,26,29)] mb-2">Servicio</h3>
              <p class="text-gray-700 text-justify">
                Servir a nuestros clientes para satisfacer su necesidad de envío correcta, generando una experiencia única y diferenciadora.
              </p>
              <div class="mt-auto pt-4 flex flex-wrap gap-2 justify-center">
                <span class="text-[11px] uppercase tracking-wide bg-[rgb(248,112,62)]/10 text-[rgb(248,112,62)] px-2.5 py-1 rounded-full border border-[rgb(248,112,62)]/20">Empatía</span>
                <span class="text-[11px] uppercase tracking-wide bg-[rgb(248,112,62)]/10 text-[rgb(248,112,62)] px-2.5 py-1 rounded-full border border-[rgb(248,112,62)]/20">Calidad</span>
              </div>
            </div>

            <!-- Cumplimiento -->
            <div class="flex flex-col items-center text-center bg-white rounded-2xl border border-[rgb(248,112,62)]/20 p-6 shadow-sm hover:shadow-md transition-shadow h-full">
              <div class="w-16 h-16 md:w-16 md:h-16 xl:w-20 xl:h-20 bg-[rgb(248,112,62)] rounded-full flex items-center justify-center mb-4 text-white">
                <svg class="h-7 w-7 md:w-8 md:h-8 xl:w-10 xl:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3" />
                </svg>
              </div>
              <h3 class="font-bold text-lg md:text-xl text-[rgb(58,26,29)] mb-2">Cumplimiento</h3>
              <p class="text-gray-700 text-justify">
                Compromiso con responsabilidades regulatorias y comerciales para alcanzar metas y objetivos trazados.
              </p>
              <div class="mt-auto pt-4 flex flex-wrap gap-2 justify-center">
                <span class="text-[11px] uppercase tracking-wide bg-[rgb(248,112,62)]/10 text-[rgb(248,112,62)] px-2.5 py-1 rounded-full border border-[rgb(248,112,62)]/20">Disciplina</span>
                <span class="text-[11px] uppercase tracking-wide bg-[rgb(248,112,62)]/10 text-[rgb(248,112,62)] px-2.5 py-1 rounded-full border border-[rgb(248,112,62)]/20">Plazos</span>
              </div>
            </div>

            <!-- Confianza -->
            <div class="flex flex-col items-center text-center bg-white rounded-2xl border border-[rgb(248,112,62)]/20 p-6 shadow-sm hover:shadow-md transition-shadow h-full">
              <div class="w-16 h-16 md:w-16 md:h-16 xl:w-20 xl:h-20 bg-[rgb(248,112,62)] rounded-full flex items-center justify-center mb-4 text-white">
                <svg class="h-7 w-7 md:w-8 md:h-8 xl:w-10 xl:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zM5.5 20a6.5 6.5 0 0113 0" />
                </svg>
              </div>
              <h3 class="font-bold text-lg md:text-xl text-[rgb(58,26,29)] mb-2">Confianza</h3>
              <p class="text-gray-700 text-justify">
                Trabajo con amor, conocimiento y compromiso para ganar la fe de nuestros clientes en cada proceso.
              </p>
              <div class="mt-auto pt-4 flex flex-wrap gap-2 justify-center">
                <span class="text-[11px] uppercase tracking-wide bg-[rgb(248,112,62)]/10 text-[rgb(248,112,62)] px-2.5 py-1 rounded-full border border-[rgb(248,112,62)]/20">Transparencia</span>
                <span class="text-[11px] uppercase tracking-wide bg-[rgb(248,112,62)]/10 text-[rgb(248,112,62)] px-2.5 py-1 rounded-full border border-[rgb(248,112,62)]/20">Seguridad</span>
              </div>
            </div>

            <!-- Trabajo en equipo -->
            <div class="flex flex-col items-center text-center bg-white rounded-2xl border border-[rgb(248,112,62)]/20 p-6 shadow-sm hover:shadow-md transition-shadow h-full">
              <div class="w-16 h-16 md:w-16 md:h-16 xl:w-20 xl:h-20 bg-[rgb(248,112,62)] rounded-full flex items-center justify-center mb-4 text-white">
                <svg class="h-7 w-7 md:w-8 md:h-8 xl:w-10 xl:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1M7 20H2v-2a4 4 0 014-4h1m8-5a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 class="font-bold text-lg md:text-xl text-[rgb(58,26,29)] mb-2">Trabajo en equipo</h3>
              <p class="text-gray-700 text-justify">
                Integración de habilidades y conocimientos para alcanzar objetivos comunes propios de la organización.
              </p>
              <div class="mt-auto pt-4 flex flex-wrap gap-2 justify-center">
                <span class="text-[11px] uppercase tracking-wide bg-[rgb(248,112,62)]/10 text-[rgb(248,112,62)] px-2.5 py-1 rounded-full border border-[rgb(248,112,62)]/20">Colaboración</span>
                <span class="text-[11px] uppercase tracking-wide bg-[rgb(248,112,62)]/10 text-[rgb(248,112,62)] px-2.5 py-1 rounded-full border border-[rgb(248,112,62)]/20">Sinergia</span>
              </div>
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
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
let observer
onMounted(() => {
  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => { if (entry.isIntersecting) activeId.value = entry.target.id })
    },
    { rootMargin: '0px 0px -70% 0px', threshold: 0.1 }
  )
  ;['quienes-somos','mision','vision','propuesta-valor','valores'].forEach(id => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
})
onBeforeUnmount(() => { if (observer) observer.disconnect() })
</script>
