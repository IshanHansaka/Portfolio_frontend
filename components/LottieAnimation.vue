<template>
    <div ref="lottieContainer"></div>
</template>

<script>
import lottie from 'lottie-web';

export default {
    props: {
        animationData: {
            type: Object,
            required: true
        }
    },
    mounted() {
        this.loadAnimation();
    },
    methods: {
        loadAnimation() {
            lottie.loadAnimation({
                container: this.$refs.lottieContainer,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: this.animationData,
            });
        }
    }
};
</script>