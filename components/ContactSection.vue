<template>
    <div
        class="bg-sea3 min-h-screen bg-fixed bg-no-repeat bg-cover px-10 pt-[90px] md:pt-[50px] pb-[100px] flex justify-center items-center">
        <div class="w-full max-w-4xl mt-[20px] bg-white py-6 px-8 rounded-lg shadow-2xl border-2 border-gray-100">
            <h1 class="font-black text-gray-800 text-title mb-2 text-center">Contact</h1>
            <form @submit.prevent="handleSubmit" class="space-y-4">
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label for="firstName" class="block text-gray-700 font-medium mb-1 text">First Name</label>
                        <input v-model="form.firstName" id="firstName" type="text" placeholder="John"
                            class="w-full border-2 border-gray-300 rounded-md shadow-sm p-1 text"
                            :class="{ 'border-red-500': errors.firstName }" />
                        <p v-if="errors.firstName" class="text-red-500 text-sm mt-1">{{ errors.firstName }}</p>
                    </div>
                    <div>
                        <label for="lastName" class="block text-gray-700 font-medium mb-1 text">Last Name</label>
                        <input v-model="form.lastName" id="lastName" type="text" placeholder="Doe"
                            class="w-full border-2 border-gray-300 rounded-md shadow-sm p-1 text"
                            :class="{ 'border-red-500': errors.lastName }" />
                        <p v-if="errors.lastName" class="text-red-500 text-sm mt-1">{{ errors.lastName }}</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="email" class="block text-gray-700 font-medium text">Email</label>
                        <input v-model="form.email" id="email" type="email" placeholder="john.doe@example.com"
                            class="w-full border-2 border-gray-300 rounded-md shadow-sm p-1 text"
                            :class="{ 'border-red-500': errors.email }" />
                        <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
                    </div>
                    <div>
                        <label for="phone" class="block text-gray-700 font-medium text">Phone Number</label>
                        <input v-model="form.phoneNumber" id="phone" type="tel" placeholder="+94773124593"
                            class="w-full border-2 border-gray-300 rounded-md shadow-sm p-1 text"
                            :class="{ 'border-red-500': errors.phone }" />
                        <p v-if="errors.phoneNumber" class="text-red-500 text-sm mt-1">{{ errors.phoneNumber }}</p>
                    </div>
                </div>
                <div>
                    <label for="message" class="block text-gray-700 font-medium mb-1 text">Message</label>
                    <textarea v-model="form.message" id="message" placeholder="Your message here..."
                        class="w-full border-2 border-gray-300 rounded-md shadow-sm p-1 text"
                        :class="{ 'border-red-500': errors.message }" rows="4"></textarea>
                    <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
                    <p v-if="success" class="text-blue-500 text-sm mt-1" aria-live="assertive">{{ success }}</p>
                    <p v-if="fail" class="text-red-500 text-sm mt-1" aria-live="assertive">{{ fail }}</p>
                </div>
                <div class="text-center">
                    <button type="submit"
                        class="px-6 py-2 border-2 border-black bg-black text-white rounded-md hover:bg-white hover:text-black">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const backendURL = "https://devlabs-portfolio-backend-06205972995f.herokuapp.com";

const form = ref({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
});

const errors = ref({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
});

const success = ref("");
const fail = ref("");

const formError = ref('');

const validateForm = () => {
    errors.value = {
        firstName: form.value.firstName ? '' : 'First name is required',
        lastName: form.value.lastName ? '' : 'Last name is required',
        email: form.value.email && /\S+@\S+\.\S+/.test(form.value.email) ? '' : 'Valid email is required',
        phoneNumber: form.value.phoneNumber && /^\+94\d{9}$/.test(form.value.phoneNumber) ? '' : 'Valid phone number is required',
        message: form.value.message ? '' : 'Message is required'
    };
    return !Object.values(errors.value).some(error => error);
};

const handleSubmit = async () => {
    if (validateForm()) {
        formError.value = '';

        try {
            const response = await fetch(`${backendURL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form.value),
            });

            if (response.ok) {
                success.value = "Message sent successfully";
                setTimeout(() => {
                    success.value = "";
                }, 3000);
            } else {
                fail.value = 'Failed to send message.';
                setTimeout(() => {
                    fail.value = "";
                }, 3000);
            }
            form.value = {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                message: ''
            };
        } catch (error) {
            console.error('Error sending message:', error);
            formError.value = 'An error occurred. Please try again later.';
        }
    } else {
        formError.value = 'Please fix the errors above.';
    }
};
</script>

<style scoped>
.text-title {
    @apply text-lg sm:text-base md:text-xl lg:text-2xl xl:text-4xl
}

.text {
    @apply text-sm sm:text-base md:text-sm lg:text-lg
}
</style>