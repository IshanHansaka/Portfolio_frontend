<template>
    <nav class="fixed right-5 top-1/2 transform -translate-y-1/2 z-50">
        <ul class="space-y-2">
            <li v-for="(section, index) in sections" :key="index" @click="scrollToSection(index)">
                <span
                    :class="['my-3.5 block w-2.5 h-2.5 rounded-full cursor-pointer transition-colors duration-300', { 'bg-gray-900': currentSection === index, 'bg-gray-300': currentSection !== index }]"></span>
            </li>
        </ul>
    </nav>
</template>

<script setup>

import { ref } from 'vue';

const sections = ['Home', 'About', 'Projects', 'Articles', 'Contact'];
const currentSection = ref(0);

const scrollToSection = (index) => {
    currentSection.value = index;
    document.getElementById(`section-${index}`).scrollIntoView({ behavior: 'smooth' });
};

</script>

<style scoped></style>