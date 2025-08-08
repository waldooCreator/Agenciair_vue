<template>
    <footer class="relative w-full">
        <!-- Curva superior del footer que se extiende por toda la pantalla -->
        <div class="relative w-full overflow-hidden">
            <svg class="w-full h-16 md:h-20 lg:h-24" viewBox="0 0 1440 120" preserveAspectRatio="none">
                <path d="M0,0 C360,100 1080,100 1440,0 L1440,120 L0,120 Z" fill="rgba(235,102,55,255)"></path>
            </svg>
        </div>

        <!-- Contenido principal del footer -->
        <div class="bg-[rgba(235,102,55,255)] text-white w-full">
            <!-- Newsletter Section -->
            <div class="py-6 md:py-8">
                <div class="container mx-auto px-4 text-center max-w-4xl">
                    <h3 class="text-base md:text-lg font-semibold mb-2">
                        Suscríbete a nuestros boletines, con toda la
                    </h3>
                    <p class="text-sm mb-4 opacity-90">
                        actualidad del mercado logístico
                    </p>
                    <button @click="handleNewsletterSubscription"
                        class="bg-white text-orange-600 font-bold py-2 px-6 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        SUSCRÍBETE AQUÍ
                    </button>
                </div>
            </div>

            <!-- Navigation Links -->
            <div class="border-t border-orange-300 py-3 md:py-4">
                <div class="container mx-auto px-4">
                    <div class="flex flex-wrap justify-center items-center text-xs md:text-sm space-x-1 md:space-x-3">
                        <a href="#"
                            class="hover:text-yellow-300 cursor-pointer transition-colors duration-300 py-1">PORTAL
                            COURIER</a>
                        <span class="text-orange-200 hidden md:inline">|</span>
                        <a href="#"
                            class="hover:text-yellow-300 cursor-pointer transition-colors duration-300 py-1">PORTAL
                            TRANSPORTE</a>
                        <span class="text-orange-200 hidden md:inline">|</span>
                        <a href="#"
                            class="hover:text-yellow-300 cursor-pointer transition-colors duration-300 py-1">PORTAL
                            CARGA INTERNACIONAL</a>
                        <span class="text-orange-200 hidden md:inline">|</span>
                        <a href="#"
                            class="hover:text-yellow-300 cursor-pointer transition-colors duration-300 py-1">PORTAL
                            OPERACIÓN LOGÍSTICA</a>
                        <span class="text-orange-200 hidden md:inline">|</span>
                        <a href="#"
                            class="hover:text-yellow-300 cursor-pointer transition-colors duration-300 py-1">PORTAL TCC
                            CORPORATIVO</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer inferior con degradado sutil -->
        <div class="text-white w-full" style="background-color: rgb(26, 13, 4);">
            <div class="container mx-auto px-4 py-6 md:py-8">
                <!-- Logo y redes sociales -->
                <div class="flex flex-col lg:flex-row justify-between items-center mb-6 space-y-4 lg:space-y-0">
                    <!-- Logo container centrado -->
                    <!-- Reemplaza toda la sección del logo en tu footer: -->
                    <div class="flex justify-center lg:justify-start w-full lg:w-auto">
                        <div class="relative">
                            <div
                                class="bg-white rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 p-3">
                                <img src="/images/logo.png" alt="Logo" class="h-12 md:h-16 w-auto object-contain">
                            </div>
                        </div>
                    </div>

                    <!-- Redes sociales -->
                    <div class="flex justify-center space-x-4 md:space-x-6">
                        <a href="#" @click="handleSocialClick('facebook')"
                            class="text-orange-200 hover:text-white transition-all duration-300 transform hover:scale-110"
                            aria-label="Facebook">
                            <svg class="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a href="#" @click="handleSocialClick('pinterest')"
                            class="text-orange-200 hover:text-white transition-all duration-300 transform hover:scale-110"
                            aria-label="Pinterest">
                            <svg class="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.082.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                            </svg>
                        </a>
                        <a href="#" @click="handleSocialClick('tiktok')"
                            class="text-orange-200 hover:text-white transition-all duration-300 transform hover:scale-110"
                            aria-label="TikTok">
                            <svg class="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Información de contacto centrada -->
                <div class="text-center space-y-3">
                    <div class="space-y-1 text-sm md:text-base text-orange-100">
                        <p class="font-medium">Carrera 68 No. 67B - 35 Teléfono +571 407 12 12, Medellín, Colombia, CO.
                        </p>
                    </div>

                    <!-- Enlaces de servicios -->
                    <div
                        class="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm text-orange-200">
                        <a href="#" class="hover:text-white transition-colors duration-300">Centro de Ayudas</a>
                        <span class="hidden md:inline">•</span>
                        <a href="#" class="hover:text-white transition-colors duration-300">Términos y
                            Condiciones</a>
                        <span class="hidden md:inline">•</span>
                        <a href="#" class="hover:text-white transition-colors duration-300">Líneas de atención en
                            el país</a>
                        <span class="hidden md:inline">•</span>
                        <a href="#" class="hover:text-white transition-colors duration-300">Certificado de
                            Entregas</a>
                        <span class="hidden md:inline">•</span>
                        <a href="#" class="hover:text-white transition-colors duration-300">Sistemas de
                            Información</a>
                        <span class="hidden md:inline">•</span>
                        <a href="#" class="hover:text-white transition-colors duration-300">Aplicativo Móvil</a>
                    </div>
                </div>

                <!-- Copyright -->
                <div class="text-center mt-6 pt-4 border-t border-orange-500">
                    <p class="text-xs md:text-sm text-orange-200">
                        © {{ currentYear }} Tu Empresa. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'FooterComponent',
        data() {
            return {
                currentYear: new Date().getFullYear(),
                showPlaceholder: true
            }
        },
        methods: {
            // Método para manejar la suscripción al newsletter
            handleNewsletterSubscription() {
                console.log('Newsletter subscription clicked');
                // Aquí puedes agregar tu lógica de suscripción
                // Ejemplo: this.$emit('newsletter-subscribe');
            },

            // Método para manejar clicks en redes sociales
            handleSocialClick(platform) {
                console.log(`${platform} clicked`);
                // Aquí puedes agregar redirecciones o tracking
            }
        }
    }
</script>

<style scoped>
    /* Animaciones personalizadas */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .fade-in-up {
        animation: fadeInUp 0.6s ease-out;
    }

    /* Efectos de hover personalizados */
    .social-link:hover {
        filter: drop-shadow(0 4px 8px rgba(255, 255, 255, 0.3));
    }

    /* Responsivo adicional para dispositivos muy pequeños */
    @media (max-width: 375px) {
        .container {
            padding-left: 1rem;
            padding-right: 1rem;
        }

        .social-icons {
            gap: 1rem;
        }
    }

    /* Mejoras visuales para tablets */
    @media (min-width: 768px) and (max-width: 1024px) {
        .logo-container {
            margin-bottom: 1.5rem;
        }
    }

    /* Transiciones suaves para todos los elementos interactivos */
    a,
    button {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Efecto de glow sutil en hover */
    button:hover,
    .logo-container:hover {
        box-shadow: 0 0 20px rgba(253, 224, 71, 0.3);
    }

    /* Separadores responsivos */
    @media (max-width: 768px) {
        .nav-separator {
            display: none;
        }

        .nav-links a {
            display: block;
            margin: 0.25rem 0;
            text-align: center;
        }
    }
</style>
