<!-- CartaResponsabilidad.vue -->
<template>
  <main class="min-h-screen bg-gradient-to-br from-[rgb(241,234,218)] via-[rgb(248,242,229)] to-[rgb(241,234,218)]">
    <div class="relative py-8 md:py-16 lg:py-20">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-3xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[rgb(248,112,62)] via-[rgb(220,85,45)] to-[rgb(248,112,62)] bg-clip-text text-transparent leading-tight tracking-tight">
            Carta de Responsabilidad
          </h1>
          <div class="w-32 h-1 bg-gradient-to-r from-transparent via-[rgb(248,112,62)] to-transparent rounded-full mx-auto mt-4"></div>
        </div>

        <!-- Main content -->
        <div class="max-w-4xl mx-auto">
          <div class="relative group">
            <!-- Glow effect -->
            <div class="absolute -inset-2 bg-gradient-to-r from-[rgb(248,112,62)]/20 via-[rgb(248,112,62)]/10 to-[rgb(248,112,62)]/20 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition-all duration-700"></div>
            
            <!-- Main card -->
            <div class="relative bg-white rounded-3xl shadow-2xl border border-[rgb(248,112,62)]/10 overflow-hidden">
              <!-- Top accent border -->
              <div class="h-1 bg-gradient-to-r from-[rgb(248,112,62)] via-[rgb(220,85,45)] to-[rgb(248,112,62)]"></div>
              
              <!-- Document icon -->
              <div class="flex justify-center pt-8 pb-4">
                <div class="w-14 h-14 bg-gradient-to-br from-[rgb(248,112,62)] to-[rgb(220,85,45)] rounded-xl flex items-center justify-center shadow-lg">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
              </div>

              <!-- Content -->
              <div class="px-8 md:px-12 lg:px-16 pb-12">
                <div class="space-y-6 text-[rgb(58,26,29)] leading-relaxed text-justify">
                  
                  <!-- Párrafo 1 -->
                  <div class="relative pl-6 border-l-4 border-[rgb(248,112,62)]/30">
                    <p class="text-lg">
                      Yo acepto la carta de responsabilidad, declarando bajo mi compromiso que la información
                      suministrada en el proceso de envío es <span class="text-[rgb(248,112,62)] font-semibold">veraz</span> 
                      y que los bienes cumplen con todas las disposiciones legales vigentes.
                    </p>
                  </div>

                  <!-- Párrafo 2 -->
                  <div class="relative pl-6 border-l-4 border-[rgb(248,112,62)]/30">
                    <p class="text-lg">
                      Declaro además que 
                      <span class=" text-[rgb(248,112,62)] font-semibold px-2 py-1 rounded">
                        no incluyo mercancía prohibida ni restringida
                      </span>
                      de acuerdo con la normativa nacional e internacional aplicable al transporte de bienes.
                    </p>
                  </div>

                  <!-- Párrafo 3 -->
                  <div class="relative pl-6 border-l-4 border-[rgb(248,112,62)]/30">
                    <p class="text-lg">
                      Reconozco que soy el <span class="text-[rgb(248,112,62)] font-semibold">único responsable</span> 
                      por la veracidad de los datos de contacto, dirección de origen y destino,
                      así como de las dimensiones, peso y valor declarado de los artículos enviados.
                    </p>
                  </div>

                  <!-- Párrafo 4 -->
                  <div class="relative pl-6 border-l-4 border-[rgb(248,112,62)]/30">
                    <p class="text-lg">
                      Me comprometo a responder frente a cualquier autoridad competente en caso de que se presenten 
                      irregularidades relacionadas con la información o los bienes declarados.
                    </p>
                  </div>

                </div>

                <!-- Fecha centrada -->
                <div class="mt-12 pt-8 border-t border-[rgb(248,112,62)]/20">
                  <div class="flex justify-center">
                    <div class="bg-gradient-to-r from-[rgb(248,112,62)]/5 to-[rgb(248,112,62)]/10 px-8 py-4 rounded-2xl border border-[rgb(248,112,62)]/20 shadow-sm">
                      <div class="text-sm text-[rgb(58,26,29)]/70 font-medium mb-1 text-center">Fecha de declaración</div>
                      <div class="text-xl font-bold text-[rgb(248,112,62)] text-center">03/09/2025</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
// Componente puramente visual
</script>

<style scoped>
.tracking-tight {
  letter-spacing: -0.025em;
}

/* Transiciones suaves */
* {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>