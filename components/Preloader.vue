<template>
    <div class="preloader">
        <div class="loader"></div>
        <div class="loading-text">Loading...</div>
    </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import LottieAnimation from '@components/LottieAnimation.vue'
import preloader from './public/preloader.json'
import gsap from 'gsap'

onMounted(() => {
    nextTick(() => {
        setTimeout(async () => {
            await document.fonts.load
            gsap.to('.preloader-animation', {
                opacity: 1,
                duration: 0.5
            })
            gsap.set('body', {
                overflow: 'hidden'
            })
            setTimeout(() => {
                gsap.to('.preloader', {
                    clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
                    duration: 0.7,
                    opacity: 0,
                    onComplete() {
                        gsap.set('body', {
                            clearProps: 'all'
                        })
                    }
                })
            }, 3000)
        }, 0)
    })
})
</script>

<style scoped>
.loader {
    width: 60px;
    aspect-ratio: 1;
    display: grid;
    border-radius: 50%;
    background:
        linear-gradient(0deg, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0) 0 70%, rgba(255, 255, 255, 1) 0) 50%/8% 100%,
        linear-gradient(90deg, rgba(255, 255, 255, 0.25) 30%, rgba(255, 255, 255, 0) 0 70%, rgba(255, 255, 255, 0.75) 0) 50%/100% 8%;
    background-repeat: no-repeat;
    animation: l23 1s infinite steps(12);
}

.loader::before,
.loader::after {
    content: "";
    grid-area: 1/1;
    border-radius: 50%;
    background: inherit;
    opacity: 0.915;
    transform: rotate(30deg);
}

.loader::after {
    opacity: 0.83;
    transform: rotate(60deg);
}

@keyframes l23 {
    100% {
        transform: rotate(1turn)
    }
}

.preloader {
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    background: rgba(0, 0, 0);
}

.preloader-animation {
    width: 75px;
    height: 75px;
    opacity: 0;
    transition: opacity 0.5s ease;
}

.loading-text {
    color: white;
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
    animation: fadeIn 1s ease-in-out infinite;
}

@keyframes fadeIn {
    0%, 100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
}
</style>