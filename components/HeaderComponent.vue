<template>
    <div>
        <div id="nav" class="navigation fixed top-0 left-0 z-20 h-auto w-full">
            <header>
                <div class="container-fluid mx-auto px-4 sm:px-6 md:px-7 lg:px-8 xl:px-8">
                    <div class="py-3 md:py-4 flex flex-col items-center justify-between custom:flex-row">
                        <div class="headerLogo flex-shrink-0">
                            <img src="/name-logo3.webp" alt="logo" class="w-48 md:w-48 lg:w-60 xl:w-80">
                        </div>
                        <div class="relative flex items-center mt-2 sm:mt-0 custom:flex-row-reverse">
                            <div class="relative group">
                                <NuxtLink to="/chat">
                                    <LottieAnimation :animationData="chatIconAnimation"
                                        class="w-10 sm:w-10 md:w-12 lg:w-12 xl:w-16" />
                                </NuxtLink>
                                <div
                                    class="popup-text absolute right-20 bottom-2 mb-2 px-2 py-1 bg-black text-white text-sm sm:text-base lg:text-lg font-popins rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    Curious about me? 🤔 Let's chat!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </div>
</template>

<script setup>
import LottieAnimation from '~/components/LottieAnimation.vue';
import chatIconAnimation from '~/assets/images/chat-icon.json';
</script>

<style scoped>
@media (min-width: 304px) {
    .custom\:flex-row {
        flex-direction: row;
    }

    .custom\:flex-row-reverse {
        flex-direction: row-reverse;
    }
}

.popup-text {
    white-space: nowrap;
    @apply transition-all ease-in-out;
    @apply text-xs sm:text-sm md:text-base lg:text-lg;
    @apply px-2 py-1;
}
</style>