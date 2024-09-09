<template>
    <div
        class="bg-sea2 min-h-screen bg-center bg-no-repeat bg-cover bg-fixed px-10 pt-[90px] md:pt-[50px] pb-[100px] flex flex-col items-center">
        <!-- Header Section -->
        <div class="pt-[50px]">
            <div class="text-center mb-5">
                <h1 class="text-4xl font-bold text-black">Projects</h1>
                <p class="text-lg text-gray-500 mt-2">Check out some of my latest projects below.</p>
            </div>

            <!-- Project Cards Section -->
            <div class="flex overflow-x-auto space-x-8">
                <div class="p-8 flex-shrink-0">
                    <ProjectCard :project="{
                        title: 'Nuxt Project 1',
                        description: 'A simple project built with Nuxt.js.',
                        githubLink: 'https://github.com/your-repo-link1'
                    }" />
                </div>
                <div class="p-8 flex-shrink-0">
                    <ProjectCard :project="{
                        title: 'Nuxt Project 2',
                        description: 'Another project built with Nuxt.js.',
                        githubLink: 'https://github.com/your-repo-link2'
                    }" />
                </div>
                <div class="p-8 flex-shrink-0">
                    <ProjectCard :project="{
                        title: 'Nuxt Project 3',
                        description: 'Yet another project built with Nuxt.js.',
                        githubLink: 'https://github.com/your-repo-link3'
                    }" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
/* Additional styles if needed */
</style>