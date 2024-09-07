<template>
    <nav class="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        <ul class="space-y-2">
            <li v-for="(section, index) in sections" :key="index">
                <span
                    :class="['my-3.5 block w-3 h-3 rounded-full cursor-pointer transition-colors duration-300',
                        { 'bg-gray-900': currentSection === index, 'bg-gray-300 hover:bg-gray-500': currentSection !== index }]"
                    @click="navigateToSection(index)">
                </span>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from '#app';

const sections = ['', 'about', 'projects', 'articles', 'contact'];
const currentSection = ref(0);

const router = useRouter();
const route = useRoute();

watch(() => route.path, (newPath) => {
    const index = sections.indexOf(newPath.replace('/', ''));
    if (index !== -1) {
        currentSection.value = index;
    }
});

const navigateToSection = (index) => {
    const path = `/${sections[index]}`;
    router.push(path);
};
</script>

<style scoped></style>
