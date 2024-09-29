<template>
    <div class="max-w-full px-4 mx-auto text-black md:max-w-xl">
        <h1 class="my-8 text-3xl font-bold text-center text-black md:text-5xl">Ishan's AI Assistant</h1>
        <div class="max-w-full px-4 mx-auto md:max-w-xl">
            <div class="bg-white shadow-2xl border-4 border-gray-100 rounded-lg overflow-hidden  h-[65vh] md:h-[75vh] flex flex-col justify-between">
                <div class="h-full overflow-auto chat-messages">
                    <div v-for="(message, i) in messages" :key="i" class="flex flex-col p-2 md:p-4">
                        <div v-if="message.role === 'AI'" class="pr-4 md:pr-8 mr-auto">
                            <div class="p-2 mt-1 text-xs text-gray-700 bg-gray-200 rounded-lg md:text-sm">
                                {{ message.message }}
                            </div>
                        </div>
                        <div v-else class="pl-4 md:pl-8 ml-auto">
                            <div class="p-2 mt-1 text-xs text-white bg-blue-400 rounded-lg md:text-sm">
                                {{ message.message }}
                            </div>
                        </div>
                    </div>
                    <div class="p-4 ml-10 mr-auto" v-if="loading">
                        <span class="loader"></span>
                    </div>
                </div>
                <form @submit.prevent="sendPrompt">
                    <div class="flex items-center w-full p-4">
                        <input v-model="message" type="text" placeholder="Type here..."
                            class="w-full p-2 text-xs text-black bg-gray-100 border rounded-md shadow md:text-sm md:p-3 border-white/40 grow" />
                        <button :disabled="loading" type="submit"
                            class="flex items-center justify-center flex-none bg-gray-700 ml-2 rounded-full w-8 h-8 md:w-10 md:h-10">
                            <Icon name="tabler:send" class="text-white w-4 h-4 md:w-6 md:h-6" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const backendURL = "https://devlabs-portfolio-backend-06205972995f.herokuapp.com";

definePageMeta({
    layout: false
});

const messages = ref([
    {
        role: 'AI',
        message: 'Hello!👋 What would you like to discover about Ishan?',
    }
]);

const loading = ref(false);
const message = ref('');

const scrollToEnd = () => {
    setTimeout(() => {
        const chatMessages = document.querySelector('.chat-messages');
        chatMessages?.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });
    }, 100);
};

const sendPrompt = async () => {
    if (message.value.trim() === '') return;
    loading.value = true;

    messages.value.push({
        role: 'User',
        message: message.value,
    });

    scrollToEnd();
    const userMessage = message.value;
    message.value = '';

    try {
        const res = await fetch(`${backendURL}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: userMessage,
                model: 'text-davinci-003',
                prompt: prompt,
                temperature: 0.1,
                max_tokens: 512,
                top_p: 1.0,
                frequency_penalty: 0,
                presence_penalty: 0.6,
                stop: [' User:', ' AI:']
            }),
        });

        if (res.ok) {
            const response = await res.json();
            messages.value.push({
                role: 'AI',
                message: response.message,
            });
        } else {
            const errorMessage = await res.text();
            messages.value.push({
                role: 'AI',
                message: `Error: ${errorMessage || 'An error occurred.'}`,
            });
        }
    } catch (error) {
        messages.value.push({
            role: 'AI',
            message: 'Sorry, unable to reach the server.',
        });
    } finally {
        loading.value = false;
        scrollToEnd();
    }
};
</script>

<style scoped>
.loader {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: block;
    position: relative;
    color: #d3d3d3;
    box-sizing: border-box;
    animation: animloader 1.1s linear infinite;
}

@keyframes animloader {
    0% {
        box-shadow:
            14px 0 0 0 rgba(211, 211, 211, 1),
            38px 0 0 0 rgba(211, 211, 211, 0.5),
            -14px 0 0 0 rgba(211, 211, 211, 0.5),
            -38px 0 0 0 rgba(211, 211, 211, 0.5);
    }

    25% {
        box-shadow:
            14px 0 0 0 rgba(211, 211, 211, 0.5),
            38px 0 0 5px rgba(211, 211, 211, 1),
            -14px 0 0 0 rgba(211, 211, 211, 0.5),
            -38px 0 0 0 rgba(211, 211, 211, 0.5);
    }

    50% {
        box-shadow:
            14px 0 0 0 rgba(211, 211, 211, 0.5),
            38px 0 0 0 rgba(211, 211, 211, 0.5),
            -14px 0 0 5px rgba(211, 211, 211, 1),
            -38px 0 0 0 rgba(211, 211, 211, 0.5);
    }

    75% {
        box-shadow:
            14px 0 0 0 rgba(211, 211, 211, 0.5),
            38px 0 0 0 rgba(211, 211, 211, 0.5),
            -14px 0 0 0 rgba(211, 211, 211, 0.5),
            -38px 0 0 5px rgba(211, 211, 211, 1);
    }

    100% {
        box-shadow:
            14px 0 0 0 rgba(211, 211, 211, 0.5),
            38px 0 0 0 rgba(211, 211, 211, 0.5),
            -14px 0 0 0 rgba(211, 211, 211, 0.5),
            -38px 0 0 0 rgba(211, 211, 211, 0.5);
    }
}
</style>