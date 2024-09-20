<template>
    <div v-if="isAuthenticated">
        <Admin />
    </div>
    <div v-else>
        <Login @authenticated="handleAuth" />
    </div>
</template>

<script setup>
import Login from '@/components/Login.vue';
import Admin from '@/components/Admin.vue';
import { ref, onMounted } from 'vue';

definePageMeta({
    layout: false
})

const isAuthenticated = ref(false);

onMounted(() => {
    isAuthenticated.value = localStorage.getItem('portfolioAdmin') === 'true';
});

const handleAuth = () => {
    isAuthenticated.value = true;
    localStorage.setItem('portfolioAdmin', 'true');
};
</script>

<style scoped></style>