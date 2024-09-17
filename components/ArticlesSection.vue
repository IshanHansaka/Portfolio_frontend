<template>
    <div class="min-h-screen px-16 pt-[90px] md:pt-[50px] pb-[100px] flex justify-center items-center">
        <div class="w-full">
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
            <div class="flex overflow-x-auto gap-40">
                <div class="p-4 flex-shrink-0 w-72 sm:w-64 md:w-56 lg:w-48 xl:w-40" v-for="blog in blogs"
                    :key="blog.title">
                    <ArticleCard :article="{
                        title: blog.title,
                        content: blog.content,
                        date: blog.date,
                        mediumLink: blog.medium_link
                    }" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data: blogs, pending, error } = useFetch("https://devlabs-portfolio-backend-06205972995f.herokuapp.com/blogs");
</script>

<style scoped></style>