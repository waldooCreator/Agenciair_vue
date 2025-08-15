<template>
    <transition name="fade">
        <button v-if="visible" @click="goBack" class="boton-subir" :title="titleText" aria-label="Volver atrás">
            <!-- Flecha a la izquierda -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6" />
            </svg>
        </button>
    </transition>
</template>

<script>
    export default {
        name: 'BotonAtras',
        props: {
            /** Aparece solo si scrollY < maxScroll */
            maxScroll: {
                type: Number,
                default: 150
            },

            /**
             * Nombres de rutas donde NO debe mostrarse (por defecto oculta en Home).
             * Ej: ['Home','Landing']
             */
            hideOnRoutes: {
                type: Array,
                default: () => ['Home']
            },

            /**
             * Si la ruta tiene meta[hideMetaKey] === true, NO se muestra.
             * Útil si ya usas meta.hideHeader o meta.hideBack.
             */
            hideMetaKey: {
                type: String,
                default: 'hideBack'
            },

            /**
             * Alternativa por path: ocúltalo si el path actual está aquí
             * Ej: ['/','/login']
             */
            hideOnPaths: {
                type: Array,
                default: () => ['/']
            }
        },
        data() {
            return {
                visible: false
            }
        },
        computed: {
            titleText() {
                return 'Volver atrás';
            },
            currentName() {
                return this.$route?.name || '';
            },
            currentPath() {
                return this.$route?.path || '';
            },
            metaHides() {
                const meta = this.$route?.meta || {};
                return !!(this.hideMetaKey && meta[this.hideMetaKey] === true);
            },
            shouldHideByRoute() {
                return this.hideOnRoutes.includes(this.currentName);
            },
            shouldHideByPath() {
                return this.hideOnPaths.includes(this.currentPath);
            },
            shouldHide() {
                return this.metaHides || this.shouldHideByRoute || this.shouldHideByPath;
            }
        },
        mounted() {
            window.addEventListener('scroll', this.onScroll, {
                passive: true
            });
            this.onScroll();
        },
        beforeUnmount() {
            window.removeEventListener('scroll', this.onScroll);
        },
        watch: {
            $route() {
                this.onScroll();
            }
        },
        methods: {
            onScroll() {
                const scrollOk = window.scrollY < this.maxScroll;
                this.visible = scrollOk && !this.shouldHide;
            },
            goBack() {
                if (window.history.length > 1) {
                    this.$router ? this.$router.go(-1) : window.history.back();
                } else {
                    // Fallback si no hay historial
                    this.$router && this.$router.push({
                        name: 'Home'
                    });
                }
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
        border: none;
        border-radius: 50%;
        color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 15px rgba(0, 0, 0, .2);
        transition: all .3s ease;
        z-index: 1000;
    }

    .boton-subir:hover {
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 8px 25px rgba(0, 0, 0, .3);
        background: rgba(215, 82, 35, 1);
    }

    .boton-subir:active {
        transform: translateY(-1px) scale(1.02);
    }

    .boton-subir svg {
        width: 24px;
        height: 24px;
        transition: transform .2s ease;
    }

    .boton-subir:hover svg {
        transform: scale(1.1);
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all .25s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
        transform: translateY(12px) scale(.95);
    }

    @media (max-width: 768px) {
        .boton-subir {
            bottom: 15px;
            right: 15px;
            width: 50px;
            height: 50px;
        }

        .boton-subir svg {
            width: 20px;
            height: 20px;
        }
    }
</style>
