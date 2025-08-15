<template>
  <transition name="fade">
    <button
      v-if="showButton"
      @click="goToHome"
      class="boton-home"
      :title="buttonTitle"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    </button>
  </transition>
</template>

<script>
export default {
  name: 'BotonHome',
  data() {
    return {
      showButton: false
    }
  },
  computed: {
    buttonTitle() {
      return this.$route.name === 'Home' ? 'Ir al inicio de la página' : 'Ir al inicio'
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
    this.showButton = true
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.showButton = true
    },
    goToHome() {
      if (this.$route.name === 'Home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
.boton-home {
  position: fixed;
  bottom: 20px;
  left: 20px; /* Mantener a la izquierda */
  width: 56px;
  height: 56px;
  background: rgba(235, 102, 55, 1);

  /* Estilo elegante (coincide con los otros botones) */
  border: 1.5px solid rgba(255, 255, 255, .85);
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Halo sutil y profundidad */
  outline: 3px solid rgba(235, 102, 55, .16);
  outline-offset: 3px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);

  transition: transform .3s ease, box-shadow .3s ease, outline-color .3s ease;
  z-index: 1000;
}
.boton-home:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.26);
  outline-color: rgba(235, 102, 55, .28);
  background: rgba(215, 82, 35, 1);
}
.boton-home:active {
  transform: translateY(-1px) scale(1.02);
}
.boton-home:focus-visible {
  outline: 4px solid rgba(235, 102, 55, .35);
  outline-offset: 4px;
}
.boton-home svg {
  width: 24px;
  height: 24px;
  transition: transform 0.2s ease;
}
.boton-home:hover svg {
  transform: scale(1.1);
}

/* Transiciones */
.fade-enter-active, .fade-leave-active { transition: all 0.3s ease; }
.fade-enter-from { opacity: 0; transform: translateY(20px) scale(0.8); }
.fade-leave-to { opacity: 0; transform: translateY(20px) scale(0.8); }

/* Móvil */
@media (max-width: 768px) {
  .boton-home { bottom: 15px; left: 15px; width: 50px; height: 50px; }
  .boton-home svg { width: 20px; height: 20px; }
}
</style>
