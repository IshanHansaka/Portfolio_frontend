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
import { ref, onMounted, onUnmounted } from 'vue';

const sections = ['section1', 'section2', 'section3', 'section4', 'section5'];
const currentSection = ref(0);
let isSwiping = false; // Add a flag to prevent multiple swipes during a single gesture
let swipeTimeout; // Timeout to reset swiping lock after a certain duration

// Navigate to section function
const navigateToSection = (index) => {
    currentSection.value = index;
    const section = document.getElementById(sections[index]);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

// Keyboard event handler
const handleKeydown = (event) => {
    if (event.key === 'ArrowDown' && currentSection.value < sections.length - 1) {
        navigateToSection(currentSection.value + 1);
    } else if (event.key === 'ArrowUp' && currentSection.value > 0) {
        navigateToSection(currentSection.value - 1);
    }
};

// Touch event handling for mobile
let startY = 0;
const handleTouchStart = (event) => {
    startY = event.touches[0].clientY;
};

const handleTouchMove = (event) => {
    if (isSwiping) return; // Ignore if already swiping

    const currentY = event.touches[0].clientY;
    const deltaY = startY - currentY;

    if (Math.abs(deltaY) > 50) { // Threshold for swipe sensitivity
        if (deltaY > 0 && currentSection.value < sections.length - 1) {
            navigateToSection(currentSection.value + 1); // Swipe up
        } else if (deltaY < 0 && currentSection.value > 0) {
            navigateToSection(currentSection.value - 1); // Swipe down
        }
        isSwiping = true; // Lock swiping during one swipe

        // Reset the swiping lock after a short delay (e.g., 500ms)
        clearTimeout(swipeTimeout);
        swipeTimeout = setTimeout(() => {
            isSwiping = false;
        }, 500);
    }
};

onMounted(() => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
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

    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
    window.removeEventListener('touchstart', handleTouchStart);
    window.removeEventListener('touchmove', handleTouchMove);
});
</script>

<style scoped>
</style>