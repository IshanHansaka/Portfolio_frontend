<template>
    <div class="preloader">
        <LottieAnimation :animationData="preloader" class="preloader-animation" />
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
            gsap.to('.preloader__animation', {
                opacity: 1,
                duration: 0.2
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
.preloader {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
}
.preloader-animation {
    width: 75px;
    height: 75px;
}
</style>