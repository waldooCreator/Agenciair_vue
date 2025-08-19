<template>     
    <div class="relative w-full max-w-md mx-auto z-10 font-sans antialiased text-[15px] sm:text-base md:text-[17px] lg:text-[18px]"         
         ref="root"> <!-- 👈 ref para detectar click-outside -->         
        <!-- Barra compacta -->         
        <div class="flex items-center justify-between bg-white rounded-full shadow-md px-4 py-3 cursor-pointer hover:shadow-lg transition-shadow"             
             @click="toggleExpanded">             
            <span class="text-sm text-gray-700 font-medium text-[15px] sm:text-base md:text-[17px] lg:text-[18px]">
                Rastrear Envio
            </span>             
            <svg class="w-4 h-4 text-[rgb(235,102,55)] transform transition-transform duration-200 flex-shrink-0 ml-2"                 
                 :class="{ 'rotate-180': isExpanded }" fill="none" stroke="currentColor" viewBox="0 0 24 24">                 
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />             
            </svg>         
        </div>          
        
        <!-- Panel -->         
        <div v-show="isExpanded"             
             class="absolute top-full left-0 w-full mt-2 transform transition-all duration-300 ease-in-out z-20"             
             :class="{ 'opacity-100 translate-y-0': isExpanded, 'opacity-0 -translate-y-2': !isExpanded }">             
            <div class="bg-white rounded-lg shadow-lg p-4 border-t-2 border-[rgb(235,102,55)]">                 
                <div class="mb-3">                     
                    <label class="block text-sm font-medium text-gray-700 mb-2 text-[15px] sm:text-base md:text-[17px] lg:text-[18px]">
                        Digita el número de guía:
                    </label>                     
                    <input type="text" v-model="numeroGuia" placeholder="Ej: 123456789"                         
                           class="w-full bg-gray-50 text-gray-700 text-sm px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[rgb(235,102,55)] focus:border-transparent text-[15px] sm:text-base md:text-[17px] lg:text-[18px] placeholder:text-[15px] sm:placeholder:text-base md:placeholder:text-[17px] lg:placeholder:text-[18px]" />                 
                </div>                 
                <button @click="irArastrearGuia"
                        class="w-full bg-[rgb(235,102,55)] hover:bg-[rgba(235,102,55,0.9)] text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-[15px] sm:text-base md:text-[17px] lg:text-[18px]">                     
                    Rastrear                 
                </button>             
            </div>         
        </div>     
    </div> 
</template>  

<script setup>     
    import { ref, onMounted, onUnmounted, defineEmits } from 'vue'
    import { useRouter } from 'vue-router'
    
    const router = useRouter()
    const emit = defineEmits(['abrio', 'cerro'])      

    const root = ref(null) // 👈 contenedor raíz para click-outside     
    const isExpanded = ref(false)     
    const numeroGuia = ref('')      

    const toggleExpanded = () => {         
        isExpanded.value = !isExpanded.value         
        if (isExpanded.value) emit('abrio');         
        else emit('cerro')     
    }      

    const rastrear = () => {         
        if (numeroGuia.value.trim()) {             
            console.log('Rastreando:', numeroGuia.value)         
        } else {             
            alert('Por favor ingresa un número de guía válido')         
        }     
    }

    // Nueva función para navegar con el número de guía
    const irArastrearGuia = () => {
        if (numeroGuia.value.trim()) {
            // Navegar a rastrear-guia pasando el número como query parameter
            router.push({
                path: '/rastrear-guia',
                query: { guia: numeroGuia.value.trim() }
            })
        } else {
            alert('Por favor ingresa un número de guía válido')
        }
    }      

    /* 👇 Cerrar al hacer click fuera del componente */     
    const onClickOutside = (e) => {         
        if (!isExpanded.value) return         
        // si el click no ocurrió dentro del root -> cerrar         
        if (root.value && !root.value.contains(e.target)) {             
            isExpanded.value = false             
            emit('cerro')         
        }     
    }      

    onMounted(() => {         
        document.addEventListener('click', onClickOutside, true) // capture para mayor fiabilidad     
    })     
    
    onUnmounted(() => {         
        document.removeEventListener('click', onClickOutside, true)     
    }) 
</script>