<template>
    <transition name="fade">
        <button v-if="showButton" @click="goToHome" class="boton-home" :title="buttonTitle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9,22 9,12 15,12 15,22" />
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
            this.handleScroll() // Verificar posición inicial
        },
        beforeUnmount() {
            window.removeEventListener('scroll', this.handleScroll)
        },
        methods: {
            handleScroll() {
                this.showButton = window.scrollY > 300
            },
            goToHome() {
                // Si estamos en la página Home, hacer scroll al inicio
                if (this.$route.name === 'Home') {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                } else {
                    // Si estamos en otra página, redirigir a Home
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
        right: 20px;
        width: 56px;
        height: 56px;
        background: rgba(235, 102, 55, 1);
        border: none;
        border-radius: 50%;
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        z-index: 1000;
    }

    .boton-home:hover {
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        background: rgba(215, 82, 35, 1);
    }

    .boton-home:active {
        transform: translateY(-1px) scale(1.02);
    }

    .boton-home svg {
        width: 24px;
        height: 24px;
        transition: transform 0.2s ease;
    }

    .boton-home:hover svg {
        transform: scale(1.1);
    }

    /* Animación de aparición/desaparición */
    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.3s ease;
    }

    .fade-enter-from {
        opacity: 0;
        transform: translateY(20px) scale(0.8);
    }

    .fade-leave-to {
        opacity: 0;
        transform: translateY(20px) scale(0.8);
    }

    /* Responsive */
    @media (max-width: 768px) {
        .boton-home {
            bottom: 15px;
            right: 15px;
            width: 50px;
            height: 50px;
        }

        .boton-home svg {
            width: 20px;
            height: 20px;
        }
    }
</style>
