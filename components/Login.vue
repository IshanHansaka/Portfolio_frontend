<template>
    <div class="flex justify-center items-center h-screen w-full">
        <form @submit.prevent="handleLogin" class="admin-form">
            <div class="mb-8">
                <h1 class="admin-title">Login: Admin</h1>
            </div>
            <div class="mb-4">
                <input v-model="password" type="password" placeholder="Password" class="input-text" />
            </div>
            <button type="submit" class="btn">Login</button>
            <div v-if="error" class="text-red-500 mt-4">{{ error }}</div>
        </form>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const backendURL = "https://devlabs-portfolio-backend-06205972995f.herokuapp.com";

const emits = defineEmits(['authenticated']);

const password = ref('');
const error = ref('');

const handleLogin = async () => {
    try {
        const response = await fetch(`${backendURL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password: password.value })
        });

        const result = await response.json();

        if (response.ok) {
            localStorage.setItem('portfolioAdmin', 'true');
            emits('authenticated');
        } else {
            error.value = result.message || 'Login failed';
        }

        password.value = '';
    } catch (err) {
        error.value = 'An error occurred';
    }
};
</script>

<style scoped></style>