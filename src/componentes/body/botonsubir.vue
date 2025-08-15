<template>
  <transition name="fade">
    <button
      v-if="visible"
      @click="scrollTop"
      class="boton-subir"
      :title="titleText"
      aria-label="Subir al inicio"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
           viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"/>
        <line x1="12" y1="19" x2="12" y2="9"/>
      </svg>
    </button>
  </transition>
</template>

<script>
export default {
  name: 'BotonSubir',
  props: {
    threshold: { type: Number, default: 100 },
    onlyHome: { type: Boolean, default: true }
  },
  data() {
    return { visible: false }
  },
  computed: {
    isHome() {
      return this.$route?.name === 'Home';
    },
    titleText() {
      return 'Subir al inicio';
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.onScroll();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  watch: {
    $route() { this.onScroll(); }
  },
  methods: {
    onScroll() {
      const passed = window.scrollY > this.threshold;
      this.visible = this.onlyHome ? (this.isHome && passed) : passed;
    },
    scrollTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
.boton-subir {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 56px;
  height: 56px;
  background: rgba(235, 102, 55, 1);
  /* Borde fino y elegante */
  border: 1.5px solid rgba(255,255,255,.85);
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Halo sutil alrededor del botón */
  outline: 3px solid rgba(235,102,55,.16);
  outline-offset: 3px;

  /* Profundidad suave */
  box-shadow: 0 6px 20px rgba(0,0,0,.18);
  transition: transform .3s ease, box-shadow .3s ease, outline-color .3s ease;
  z-index: 1000;
}
.boton-subir:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 28px rgba(0,0,0,.26);
  outline-color: rgba(235,102,55,.28);
  background: rgba(215, 82, 35, 1);
}
.boton-subir:active {
  transform: translateY(-1px) scale(1.02);
}
.boton-subir:focus-visible {
  outline: 4px solid rgba(235,102,55,.35);
  outline-offset: 4px;
}
.boton-subir svg {
  width: 24px; height: 24px;
  transition: transform .2s ease;
}
.boton-subir:hover svg { transform: scale(1.1); }

/* Transiciones del fade */
.fade-enter-active, .fade-leave-active { transition: all .25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(12px) scale(.95); }

/* Ajustes en móvil */
@media (max-width: 768px) {
  .boton-subir { bottom: 15px; right: 15px; width: 50px; height: 50px; }
  .boton-subir svg { width: 20px; height: 20px; }
}
</style>
