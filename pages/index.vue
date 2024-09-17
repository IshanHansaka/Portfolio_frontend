<template>
    <div class="relative">
        <HeaderComponent />
        <div id="sections-container" class="overflow-hidden h-screen">
            <section v-for="section in sections" :id="section.id" :key="section.id" class="h-screen snap-center">
                <component :is="section.component" />
            </section>
        </div>
        <FooterComponent />
        <VerticalDotScrollbar :sections="sections.map(section => section.id)" />
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import HomeSection from '@components/HomeSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
import ArticlesSection from '../components/ArticlesSection.vue';
import ContactSection from '../components/ContactSection.vue';

const sections = [
    { id: 'section1', component: HomeSection },
    { id: 'section2', component: AboutSection },
    { id: 'section3', component: ProjectsSection },
    { id: 'section4', component: ArticlesSection },
    { id: 'section5', component: ContactSection },
];

const currentSection = ref(0);

const navigateToSection = (index) => {
    if (index >= 0 && index < sections.length) {
        currentSection.value = index;
        const section = document.getElementById(sections[index].id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
};

let scrollTimeout;

const handleScroll = (event) => {
    if (scrollTimeout) clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        if (event.deltaY > 0 && currentSection.value < sections.length - 1) {
            navigateToSection(currentSection.value + 1);
        } else if (event.deltaY < 0 && currentSection.value > 0) {
            navigateToSection(currentSection.value - 1);
        }
    }, 150);
};

onMounted(() => {
    window.addEventListener('wheel', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('wheel', handleScroll);
});
</script>

<style scoped></style>