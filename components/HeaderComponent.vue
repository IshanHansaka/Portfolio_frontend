<template>
    <div>
        <div id="nav" class="navigation fixed top-0 left-0 z-20 h-auto w-full">
            <header>
                <div class="container-fluid mx-auto px-4 sm:px-6 md:px-7 lg:px-8 xl:px-8">
                    <div class="py-3 md:py-4 flex flex-col items-center justify-between custom:flex-row">
                        <div class="headerLogo flex-shrink-0">
                            <img src="/name-logo3.png" alt="logo" class="w-48 md:w-48 lg:w-60 xl:w-80">
                        </div>
                        <div class="relative flex items-center mt-2 sm:mt-0 custom:flex-row-reverse">
                            <div
                                class="material-icons text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl cursor-pointer">
                                <button @click="openChatbot">
                                    <LottieAnimation :animationData="chatIconAnimation" style="width: 5rem;" />
                                </button>
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

const openChatbot = () => {
    const flaskChatbotUrl = 'http://127.0.0.1:5000';
    window.location.href = flaskChatbotUrl;
}
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
</style>