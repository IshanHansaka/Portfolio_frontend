<!-- components/VerticalDotScrollbar.vue -->
<template>
    <nav class="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        <ul class="space-y-2">
            <li v-for="(section, index) in sections" :key="index">
                <span :class="[
                    'my-3.5 block w-3 h-3 rounded-full cursor-pointer transition-colors duration-300',
                    { 'bg-gray-900': currentSection === index, 'bg-gray-300 hover:bg-gray-500': currentSection !== index }
                ]" @click="navigateToSection(index)">
                </span>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const sections = ['section1', 'section2', 'section3', 'section4', 'section5']; // Replace with your section IDs or classes
const currentSection = ref(0);

const navigateToSection = (index) => {
    currentSection.value = index;
    const section = document.getElementById(sections[index]);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

onMounted(() => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // 50% of the section should be visible to consider it active
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                currentSection.value = sections.findIndex(section => section === entry.target.id);
            }
        });
    }, options);

    sections.forEach(sectionId => {
        const el = document.getElementById(sectionId);
        if (el) observer.observe(el);
    });
});
</script>

<style scoped>
/* You can add more styling for the scrollbar */
</style>