<template>
    <div
        class="mx-auto bg-white shadow-xl border-2 border-gray-100 rounded-lg overflow-hidden w-[300px] h-[350px] transform transition-transform duration-300 ease-in-out hover:scale-105">
        <div class="h-full flex flex-col justify-between px-6 py-4">
            <div>
                <h1 class="text-2xl font-bold text-black">{{ article.title }}</h1>
                <p class="mt-2 text-sm text-gray-500">{{ formattedDate }}</p>
                <p class="mt-4 text-sm text-gray-700 font-popins">{{ article.content }}</p>
            </div>
            <a :href="article.mediumLink"
                class="mt-10 px-6 py-2 border-2 border-black bg-black text-white rounded-md hover:bg-white hover:text-black text-center"
                target="_blank" rel="noopener noreferrer">
                Read on Medium
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        article: {
            type: Object,
            required: true,
        }
    },
    computed: {
        formattedDate() {
            const date = new Date(this.article.date);
            return date.toISOString().split('T')[0];
        }
    }
}
</script>

<style scoped>
.transform {
    transition: transform 0.38s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.hover\:scale-105:hover {
    transform: scale(1.035);
}
</style>
