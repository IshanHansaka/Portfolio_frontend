<template>
    <div
        class="bg-sea3 min-h-screen bg-fixed bg-no-repeat bg-cover px-10 pt-[90px] md:pt-[50px] pb-[100px] flex justify-center items-center">
        <div class="w-full max-w-4xl mt-[20px] bg-white py-6 px-8 rounded-lg shadow-2xl">
            <h1 class="text-4xl font-bold text-gray-800 mb-6 text-center">Contact</h1>
            <form @submit.prevent="handleSubmit" class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                        <label for="firstName" class="block text-gray-700 font-medium mb-1">First Name</label>
                        <input v-model="form.firstName" id="firstName" type="text" placeholder="John"
                            class="w-full border-gray-700 rounded-md shadow-sm p-2"
                            :class="{ 'border-red-500': errors.firstName }" />
                        <p v-if="errors.firstName" class="text-red-500 text-sm mt-1">{{ errors.firstName }}</p>
                    </div>
                    <div>
                        <label for="lastName" class="block text-gray-700 font-medium mb-1">Last Name</label>
                        <input v-model="form.lastName" id="lastName" type="text" placeholder="Doe"
                            class="w-full border-gray-500 rounded-md shadow-sm p-2"
                            :class="{ 'border-red-500': errors.lastName }" />
                        <p v-if="errors.lastName" class="text-red-500 text-sm mt-1">{{ errors.lastName }}</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label for="email" class="block text-gray-700 font-medium mb-1">Email</label>
                        <input v-model="form.email" id="email" type="email" placeholder="john.doe@example.com"
                            class="w-full border-gray-500 rounded-md shadow-sm p-2"
                            :class="{ 'border-red-500': errors.email }" />
                        <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
                    </div>
                    <div>
                        <label for="phone" class="block text-gray-700 font-medium mb-1">Phone Number</label>
                        <input v-model="form.phone" id="phone" type="tel" placeholder="+94773124593"
                            class="w-full border-gray-500 rounded-md shadow-sm p-2"
                            :class="{ 'border-red-500': errors.phone }" />
                        <p v-if="errors.phone" class="text-red-500 text-sm mt-1">{{ errors.phone }}</p>
                    </div>
                </div>
                <div>
                    <label for="message" class="block text-gray-700 font-medium mb-1">Message</label>
                    <textarea v-model="form.message" id="message" placeholder="Your message here..."
                        class="w-full border-gray-500 rounded-md shadow-sm p-1"
                        :class="{ 'border-red-500': errors.message }" rows="4"></textarea>
                    <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
                </div>
                <div class="text-center">
                    <button type="submit"
                        class="px-6 py-2 border-2 border-black bg-black text-white rounded-md hover:bg-white hover:text-black">Submit</button>
                </div>
            </form>
        </div>

        <div v-if="showPopup" class="fixed inset-0 flex items-center justify-center z-50">
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <p class="text-lg font-semibold">{{ popupMessage }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
});

const errors = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
});

const formError = ref('');
const showPopup = ref(false);
const popupMessage = ref('');

const validateForm = () => {
    errors.value = {
        firstName: form.value.firstName ? '' : 'First name is required',
        lastName: form.value.lastName ? '' : 'Last name is required',
        email: form.value.email && /\S+@\S+\.\S+/.test(form.value.email) ? '' : 'Valid email is required',
        phone: form.value.phone && /^\+94\d{9}$/.test(form.value.phone) ? '' : 'Phone number must be in the format +94-77-456-7890',
        message: form.value.message ? '' : 'Message is required'
    };
    return !Object.values(errors.value).some(error => error);
};

const handleSubmit = () => {
    if (validateForm()) {
        formError.value = '';
        popupMessage.value = 'Thank you for your message!';
        showPopup.value = true;
        form.value = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
        };
    } else {
        formError.value = 'Please fix the errors above.';
    }
};
</script>

<style scoped></style>