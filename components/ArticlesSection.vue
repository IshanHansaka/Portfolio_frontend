<template>
    <div
        class="bg-sea2 min-h-screen bg-center bg-no-repeat bg-cover bg-fixed px-10 pt-[90px] md:pt-[50px] pb-[100px] flex flex-col items-center">
        <div class="pt-[50px] w-full">
            <div class="text-center mb-5">
                <h1 class="text-4xl font-bold text-black">Articles</h1>
                <p class="text-lg text-gray-500 mt-2">
                    Explore some of my latest articles below.
                    <NuxtLink :to="`https://medium.com/@ishanhansakasilva`" class="text-blue-500 hover:underline">
                        view more
                    </NuxtLink>
                </p>
                <div v-if="pending" class="text-4xl text-black mt-2">Loading articles...</div>
                <div v-if="error" class="text-4xl text-black mt-2">Ooops! Error 404 articles not found</div>
            </div>
            <div id="carousel" class="relative w-full">
                <!-- Carousel wrapper -->
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <!-- Article Items -->
                    <div v-for="(blog, index) in blogs" :key="blog.title"
                        class="absolute w-full transition-transform duration-700 ease-in-out"
                        :style="{ transform: `translateX(${(currentIndex - index) * 100}%)` }">
                        <ArticleCard :article="{
                            title: blog.title,
                            content: blog.content,
                            date: blog.date,
                            mediumLink: blog.medium_link
                        }" />
                    </div>
                </div>
                <!-- Slider controls -->
                <button type="button"
                    class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    @click="prevSlide">
                    <span
                        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 1 1 5l4 4" />
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button"
                    class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    @click="nextSlide">
                    <span
                        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const { data: blogs, pending, error } = useFetch("http://localhost:5000/blogs");

const currentIndex = ref(0);

const nextSlide = () => {
    if (blogs.value.length > 0) {
        currentIndex.value = (currentIndex.value + 1) % blogs.value.length;
    }
};

const prevSlide = () => {
    if (blogs.value.length > 0) {
        currentIndex.value = (currentIndex.value - 1 + blogs.value.length) % blogs.value.length;
    }
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>