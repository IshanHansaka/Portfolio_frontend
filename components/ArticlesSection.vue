<template>
    <div class="min-h-screen px-10 pt-[90px] md:pt-[50px] pb-[100px] flex justify-center items-center">
        <div class="pt-[30px]">
            <div class="text-center mb-5">
                <h1 class="text-4xl font-bold text-black">Articles</h1>
                <p class="text-lg text-gray-500 mt-2">Explore some of my latest articles below.</p>
            </div>
            <div class="flex overflow-x-auto space-x-2"> <!-- Decreased space between cards -->
                <div class="p-4 flex-shrink-0"> <!-- Reduced padding -->
                    <ProjectCard :article="{
                        title: 'Article 1',
                        description: 'A detailed analysis of Nuxt.js features.',
                        readMoreLink: 'https://your-blog-link1'
                    }" />
                </div>
                <div class="p-4 flex-shrink-0"> <!-- Reduced padding -->
                    <ProjectCard :article="{
                        title: 'Article 2',
                        description: 'Exploring the benefits of server-side rendering with Nuxt.js.',
                        readMoreLink: 'https://your-blog-link2'
                    }" />
                </div>
                <div class="p-4 flex-shrink-0"> <!-- Reduced padding -->
                    <ProjectCard :article="{
                        title: 'Article 3',
                        description: 'A beginner\'s guide to using Nuxt.js for modern web applications.',
                        readMoreLink: 'https://your-blog-link3'
                    }" />
                </div>
                <div class="p-4 flex-shrink-0"> <!-- Reduced padding -->
                    <ProjectCard :article="{
                        title: 'Article 4',
                        description: 'Advanced techniques for optimizing Nuxt.js performance.',
                        readMoreLink: 'https://your-blog-link4'
                    }" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped></style>
