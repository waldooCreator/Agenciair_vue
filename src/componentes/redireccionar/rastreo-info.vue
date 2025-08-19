<template>
  <main class="min-h-screen bg-[rgb(241,234,218)]">
    <div class="py-8 md:py-16">
      <div class="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        
        <!-- Header -->
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100 mb-6">
            <div class="w-8 h-8 bg-[rgb(248,112,62)] rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <span class="text-sm font-bold text-[rgb(58,29,34)] tracking-wider uppercase">
              Sistema de Rastreo
            </span>
          </div>

          <!-- Título todo naranja -->
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-[rgb(248,112,62)]">
            <span class="block">Rastrea tu</span>
            <span class="block">envío</span>
          </h1>
          
          <!-- Buscador -->
          <div class="max-w-2xl mx-auto mt-8">
            <div class="relative">
              <input
                v-model="queryNumber"
                type="text"
                class="w-full px-6 py-4 text-lg rounded-2xl bg-white border-2 border-gray-100 focus:border-[rgb(248,112,62)] focus:ring-4 focus:ring-[rgb(248,112,62)]/20 outline-none shadow-xl transition-all duration-300"
                placeholder="Ingresa tu número de guía"
              />
              <button
                @click="cargarDemo"
                class="absolute right-2 top-2 bottom-2 px-8 rounded-xl bg-[rgb(248,112,62)] text-white font-bold hover:bg-[rgb(58,29,34)] shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Contenido principal -->
        <div v-if="shipment && pack" class="space-y-8">
          
          <!-- Tarjeta de estado principal (franja compacta) -->
          <div class="relative" id="estado-envio">
            <div class="absolute inset-0 bg-[rgb(248,112,62)]/10 rounded-3xl blur-xl"></div>
            <div class="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              
              <!-- Header compacto -->
              <div class="bg-[rgb(248,112,62)] px-6 py-4 text-white">
                <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div class="flex items-center gap-3">
                    <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 text-xs font-bold">
                      <span class="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
                      {{ estadoLabel }}
                    </span>
                    <h2 class="text-2xl md:text-3xl font-extrabold">Estado del Envío</h2>
                  </div>
                  <div class="text-right">
                    <div class="text-[13px] opacity-90 mb-1">Número de Guía</div>
                    <div class="text-xl md:text-2xl font-black bg-white/20 px-3 py-1.5 rounded-lg inline-block">
                      {{ pack.trackingNumber }}
                    </div>
                  </div>
                </div>
                <p class="mt-2 text-sm md:text-base opacity-95">{{ pack.currentStatus?.description || '—' }}</p>
              </div>

              <!-- Información del envío -->
              <div class="p-8">
                <div class="grid gap-8 lg:grid-cols-3">
                  
                  <!-- Resumen -->
                  <div class="lg:col-span-1">
                    <div class="bg-white rounded-2xl p-6 h-full border border-gray-100">
                      <h3 class="text-xl font-black text-[rgb(58,29,34)] mb-6 flex items-center gap-2">
                        <!-- Ícono naranja -->
                        <div class="w-8 h-8 bg-[rgb(248,112,62)] rounded-lg flex items-center justify-center">
                          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                          </svg>
                        </div>
                        Detalles del Envío
                      </h3>
                      
                      <div class="space-y-4">
                        <div class="flex justify-between items-center py-2 border-b border-gray-200">
                          <span class="text-sm font-semibold text-gray-600">Servicio</span>
                          <span class="font-bold text-[rgb(58,29,34)]">{{ pack.service?.description?.replace('®', '') || '—' }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-200">
                          <span class="text-sm font-semibold text-gray-600">Peso</span>
                          <span class="font-bold text-[rgb(58,29,34)]">{{ pack.weight?.weight }} {{ pack.weight?.unitOfMeasurement }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-200">
                          <span class="text-sm font-semibold text-gray-600">Dimensiones</span>
                          <span class="font-bold text-[rgb(58,29,34)]">{{ pack.dimension?.length }}×{{ pack.dimension?.width }}×{{ pack.dimension?.height }} {{ pack.dimension?.unitOfDimension }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-gray-200">
                          <span class="text-sm font-semibold text-gray-600">Paquetes</span>
                          <span class="font-bold text-[rgb(58,29,34)]">{{ pack.packageCount || 1 }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2">
                          <span class="text-sm font-semibold text-gray-600">Fecha de Recolección</span>
                          <span class="font-bold text-[rgb(58,29,34)]">{{ formatDate(shipment.pickupDate) }}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Origen y Destino -->
                  <div class="lg:col-span-2 space-y-6">
                    <!-- Origen -->
                    <div class="bg-white rounded-2xl p-6 border-2 border-[rgb(248,112,62)]/10">
                      <h3 class="text-xl font-black text-[rgb(58,29,34)] mb-4 flex items-center gap-3">
                        <div class="w-10 h-10 bg-[rgb(248,112,62)] rounded-xl flex items-center justify-center">
                          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
                          </svg>
                        </div>
                        Origen
                      </h3>
                      <div class="bg-white rounded-xl p-4 border border-gray-200">
                        <p class="font-bold text-lg text-[rgb(58,29,34)] mb-2">{{ origin?.name }}</p>
                        <p class="text-gray-600">{{ formatAddress(origin?.address) }}</p>
                      </div>
                    </div>

                    <!-- Destino (ícono naranja) -->
                    <div class="bg-white rounded-2xl p-6 border-2 border-[rgb(248,112,62)]/10">
                      <h3 class="text-xl font-black text-[rgb(58,29,34)] mb-4 flex items-center gap-3">
                        <div class="w-10 h-10 bg-[rgb(248,112,62)] rounded-xl flex items-center justify-center">
                          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
                          </svg>
                        </div>
                        Destino
                      </h3>
                      <div class="bg-white rounded-xl p-4 border border-gray-200">
                        <p class="font-bold text-lg text-[rgb(58,29,34)] mb-2">{{ destination?.attentionName || destination?.name }}</p>
                        <p class="text-gray-600">{{ formatAddress(destination?.address) }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Línea de tiempo (header naranja) -->
          <div class="relative">
            <div class="absolute inset-0 bg-[rgb(248,112,62)]/10 rounded-3xl blur-xl"></div>
            <div class="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              
              <div class="bg-[rgb(248,112,62)] p-8 text-white">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-3xl font-black mb-2">Seguimiento Detallado</h3>
                    <p class="text-lg opacity-90">Historial completo del envío</p>
                  </div>
                  <div class="text-right">
                    <div class="text-4xl font-black">{{ activities.length }}</div>
                    <div class="text-sm opacity-80">Evento{{ activities.length !== 1 ? 's' : '' }}</div>
                  </div>
                </div>
              </div>

              <!-- (contenido de la línea de tiempo intacto) -->
              <div class="p-8">
                <div v-if="activities.length" class="space-y-8">
                  <div v-for="(activity, index) in activitiesSortedDesc" :key="index" class="relative">
                    <div v-if="index < activitiesSortedDesc.length - 1"
                         class="absolute left-8 top-20 w-1 h-16 bg-gray-200 rounded-full"></div>
                    <div class="flex items-start gap-8">
                      <div class="relative flex-shrink-0">
                        <div v-if="index === 0" class="absolute -inset-2 rounded-full animate-pulse"
                             :class="getStatusIcon(activity.status).glowColor"></div>
                        <div class="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500 hover:scale-110"
                             :class="getStatusIcon(activity.status).bgColor">
                          <div class="absolute inset-0 rounded-2xl bg-white/20"></div>
                          <svg class="relative w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                            <path v-if="getStatusIcon(activity.status).icon === 'tag'" stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                            <path v-else-if="getStatusIcon(activity.status).icon === 'truck'" stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                            <path v-else-if="getStatusIcon(activity.status).icon === 'building'" stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1"></path>
                            <path v-else-if="getStatusIcon(activity.status).icon === 'check'" stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                            <path v-else-if="getStatusIcon(activity.status).icon === 'warning'" stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                            <path v-else stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                      </div>

                      <div class="flex-1 min-w-0">
                        <div class="bg-gradient-to-br from-white to-gray-50 rounded-2xl border-2 border-gray-100 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                            <div>
                              <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border-2"
                                    :class="getStatusBadge(activity.status).class">
                                <span class="w-2 h-2 rounded-full animate-pulse" :class="getStatusBadge(activity.status).dotClass"></span>
                                {{ getStatusDescription(activity.status) }}
                              </span>
                            </div>
                            <div class="flex items-center gap-3 text-gray-600 bg-gray-100 rounded-xl px-4 py-2">
                              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                              <div class="text-sm font-semibold">
                                {{ formatDate(activity.date) }} • {{ formatTime(activity.time) }}
                              </div>
                            </div>
                          </div>

                          <div class="mb-4">
                            <h4 class="text-xl font-black text-[rgb(58,29,34)] mb-3">
                              {{ activity.status?.description?.split(',')[0] || 'Actualización de estado' }}
                            </h4>
                            <p class="text-gray-700 leading-relaxed bg-white rounded-xl p-4 border border-gray-200">
                              {{ getDetailedDescription(activity.status) }}
                            </p>
                          </div>

                          <div v-if="activity.location" class="flex items-center gap-3 text-gray-700 bg-gray-100 rounded-xl p-3">
                            <div class="w-8 h-8 bg-[rgb(248,112,62)] rounded-lg flex items-center justify-center">
                              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
                              </svg>
                            </div>
                            <span class="font-semibold">
                              {{ formatLocation(activity.location) }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Punto de inicio -->
                  <div class="flex items-center gap-8 opacity-60">
                    <div class="w-16 h-16 rounded-2xl bg-[rgb(58,29,34)] flex items-center justify-center shadow-lg">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="text-lg font-black text-[rgb(58,29,34)]">Inicio del Proceso</div>
                      <div class="text-gray-600">El envío ha sido registrado en el sistema</div>
                    </div>
                  </div>
                </div>

                <div v-else class="text-center py-20">
                  <div class="w-20 h-20 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg class="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h4 class="text-2xl font-black text-[rgb(58,29,34)] mb-3">Sin Eventos Registrados</h4>
                  <p class="text-gray-600 max-w-md mx-auto">El envío está siendo procesado. Los eventos de seguimiento aparecerán pronto.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Pie -->
          <div class="text-center">
            <div class="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100">
              <svg class="w-4 h-4 text-[rgb(248,112,62)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="text-sm text-[rgb(58,29,34)]">Información proporcionada por el transportista • Los tiempos pueden variar</span>
            </div>
          </div>
        </div>

        <!-- Estado vacío -->
        <div v-else class="text-center">
          <div class="relative max-w-2xl mx-auto">
            <div class="absolute inset-0 bg-[rgb(248,112,62)]/10 rounded-3xl blur-xl"></div>
            <div class="relative bg-white rounded-3xl border border-gray-100 p-12 shadow-2xl">
              <div class="w-20 h-20 bg-gray-300 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-black text-[rgb(58,29,34)] mb-3">¿Listo para rastrear?</h3>
              <p class="text-gray-600 leading-relaxed">Ingresa tu número de guía en el campo superior para ver toda la información detallada de tu envío.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>
<script setup>
import { computed, ref, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const props = defineProps({
  data: {
    type: Object,
    default: null
  }
})

/** ---- Delay global para el auto-scroll (2s) ---- */
const SCROLL_DELAY_MS = 2000
let scrollTimer = null
const scheduleScroll = (delay = SCROLL_DELAY_MS) => {
  if (scrollTimer) clearTimeout(scrollTimer)
  scrollTimer = setTimeout(scrollToEstado, delay)
}

/** ---- Auto-scroll: función reutilizable ---- */
const scrollToEstado = () => {
  const el = document.getElementById('estado-envio')
  if (!el) return
  const y = el.getBoundingClientRect().top + window.pageYOffset - 20 // offset pequeño
  window.scrollTo({ top: y, behavior: 'smooth' })
}

const demoResponse = {
  "trackResponse": {
    "shipment": [
      {
        "inquiryNumber": "1ZYA27550424697984",
        "shipmentType": "S",
        "shipperNumber": "YA2755",
        "pickupDate": "20250819",
        "package": [
          {
            "trackingNumber": "1ZYA27550424697984",
            "deliveryDate": [],
            "activity": [
              {
                "location": { "address": { "countryCode": "CO", "country": "CO" } },
                "status": { "type": "M", "description": "Shipper created a label, UPS has not received the package yet. ", "code": "MP", "statusCode": "003" },
                "date": "20250819", "time": "081559", "gmtDate": "20250819", "gmtOffset": "-05:00", "gmtTime": "13:15:59"
              },
              {
                "location": { "address": { "countryCode": "CO", "country": "CO", "city": "CUCUTA" } },
                "status": { "type": "I", "description": "Package is in transit", "code": "IT", "statusCode": "004" },
                "date": "20250820", "time": "143000", "gmtDate": "20250820", "gmtOffset": "-05:00", "gmtTime": "19:30:00"
              },
              {
                "location": { "address": { "countryCode": "US", "country": "US", "city": "MIAMI", "stateProvince": "FL" } },
                "status": { "type": "I", "description": "Package arrived at facility", "code": "AF", "statusCode": "005" },
                "date": "20250821", "time": "080000", "gmtDate": "20250821", "gmtOffset": "-04:00", "gmtTime": "12:00:00"
              }
            ],
            "currentStatus": { "description": "Shipment Ready for UPS", "code": "003" },
            "packageAddress": [
              { "type": "ORIGIN", "name": "AGENCIA IMM II", "attentionName": "", "address": { "addressLine1": "  AV 6 12 05 BRR EL CENTRO ", "addressLine2": "", "city": "CUCUTA", "stateProvince": "", "postalCode": "540003", "countryCode": "CO", "country": "CO" } },
              { "type": "DESTINATION", "name": "SHIPTO_NAME", "attentionName": "JOHN DOE", "address": { "addressLine1": "1234 NW 72ND AVE", "addressLine2": "", "city": "MIAMI", "stateProvince": "FL", "postalCode": "33166", "countryCode": "US", "country": "US" } }
            ],
            "weight": { "unitOfMeasurement": "KGS", "weight": "5.00" },
            "service": { "code": "566", "levelCode": "065", "description": "UPS Worldwide Express Saver®" },
            "referenceNumber": [{ "type": "SHIPMENT", "number": "YA2755BHLMC", "code": "13", "description": "UPS Waybill Number" }],
            "deliveryInformation": { "deliveryPhoto": { "isNonPostalCodeCountry": false, "isProximityMapViewable": false } },
            "taxIndicator": "false",
            "dimension": { "height": "2.00", "length": "8.00", "width": "2.00", "unitOfDimension": "CM" },
            "isSmartPackage": false,
            "packageCount": 1
          }
        ],
        "userRelation": ["SHIPPER"]
      }
    ]
  }
}

const queryNumber = ref('')
const responseData = ref(props.data)

onMounted(() => {
  const guiaFromQuery = route.query.guia
  if (guiaFromQuery) {
    queryNumber.value = guiaFromQuery
    cargarDemo() // programará el scroll con 2s
  } else {
    scheduleScroll(SCROLL_DELAY_MS) // 2s tras entrar si no hay guía en la URL
  }
})

const cargarDemo = () => {
  responseData.value = demoResponse
  // Enfocar la sección 2s después de que se rendericen los datos
  nextTick(() => scheduleScroll(SCROLL_DELAY_MS))
}

const shipment = computed(() => responseData.value?.trackResponse?.shipment?.[0] || null)
const pack = computed(() => shipment.value?.package?.[0] || null)
const activities = computed(() => pack.value?.activity || [])
const activitiesSortedDesc = computed(() => {
  return [...activities.value].sort((a, b) => {
    const aKey = `${a.date || ''}${a.time || ''}`
    const bKey = `${b.date || ''}${b.time || ''}`
    return bKey.localeCompare(aKey)
  })
})

const origin = computed(() => pack.value?.packageAddress?.find(a => a.type === 'ORIGIN') || null)
const destination = computed(() => pack.value?.packageAddress?.find(a => a.type === 'DESTINATION') || null)

const estadoLabel = computed(() => {
  const code = pack.value?.currentStatus?.code || pack.value?.activity?.[0]?.status?.statusCode || ''
  switch (code) {
    case '003': return 'Etiqueta Creada'
    case 'I': return 'En Tránsito'
    case 'D': return 'Entregado'
    case 'X': return 'Excepción'
    case 'O': return 'En Reparto'
    default: return pack.value?.currentStatus?.description || 'Estado del Envío'
  }
})

/** Paleta: naranja primario y vino terciario para excepciones/entregado */
const getStatusIcon = (status) => {
  const code = status?.statusCode || status?.code || ''
  const type = status?.type || ''
  if (type === 'X') return { bgColor: 'bg-[rgb(58,29,34)]', glowColor: 'bg-[rgb(58,29,34)]/30', icon: 'warning' }
  if (type === 'D') return { bgColor: 'bg-[rgb(58,29,34)]', glowColor: 'bg-[rgb(58,29,34)]/30', icon: 'check' }
  switch (code) {
    case '003': return { bgColor: 'bg-[rgb(248,112,62)]', glowColor: 'bg-[rgb(248,112,62)]/30', icon: 'tag' }
    case '004': return { bgColor: 'bg-[rgb(248,112,62)]', glowColor: 'bg-[rgb(248,112,62)]/30', icon: 'truck' }
    case '005': return { bgColor: 'bg-[rgb(248,112,62)]', glowColor: 'bg-[rgb(248,112,62)]/30', icon: 'building' }
    default:     return { bgColor: 'bg-[rgb(248,112,62)]', glowColor: 'bg-[rgb(248,112,62)]/30', icon: 'info' }
  }
}

const getStatusBadge = (status) => {
  const type = status?.type || ''
  if (type === 'X' || type === 'D') {
    return {
      class: 'bg-[rgb(58,29,34)]/10 text-[rgb(58,29,34)] border-[rgb(58,29,34)]/30',
      dotClass: 'bg-[rgb(58,29,34)]'
    }
  }
  return {
    class: 'bg-[rgb(248,112,62)]/10 text-[rgb(58,29,34)] border-[rgb(248,112,62)]/30',
    dotClass: 'bg-[rgb(248,112,62)]'
  }
}

const getStatusDescription = (status) => {
  const code = status?.statusCode || status?.code || ''
  const type = status?.type || ''
  switch (code) {
    case '003': return 'Etiqueta Creada'
    case '004': return 'En Tránsito'
    case '005': return 'En Instalación'
    default:
      if (type === 'D') return 'Entregado'
      if (type === 'X') return 'Excepción'
      if (type === 'O') return 'En Reparto'
      return status?.description?.split(',')[0] || 'Actualización'
  }
}

const getDetailedDescription = (status) => {
  const code = status?.statusCode || status?.code || ''
  const description = status?.description || ''
  switch (code) {
    case '003': return 'Se ha creado la etiqueta de envío y está listo para ser recogido por el transportista.'
    case '004': return 'El paquete está en movimiento hacia su destino.'
    case '005': return 'El paquete ha llegado a una instalación de clasificación o centro de distribución.'
    default: return description || 'El estado del envío ha sido actualizado.'
  }
}

const formatDate = (yyyymmdd) => {
  if (!yyyymmdd) return '—'
  const y = yyyymmdd.slice(0, 4), m = yyyymmdd.slice(4, 6), d = yyyymmdd.slice(6, 8)
  const date = new Date(y, m - 1, d)
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })
}

const formatTime = (hhmmss) => {
  if (!hhmmss) return ''
  const h = hhmmss.slice(0, 2), m = hhmmss.slice(2, 4)
  return `${h}:${m}`
}

const formatAddress = (a) => {
  if (!a) return '—'
  const parts = [a.addressLine1, a.addressLine2, a.city, a.stateProvince, a.postalCode, a.countryCode].filter(Boolean)
  return parts.join(', ').replace(/\s{2,}/g, ' ').trim()
}

const formatLocation = (loc) => {
  const a = loc?.address
  if (!a) return '—'
  const parts = [a.city, a.stateProvince, a.postalCode, a.countryCode].filter(Boolean)
  return parts.join(', ')
}
</script>
