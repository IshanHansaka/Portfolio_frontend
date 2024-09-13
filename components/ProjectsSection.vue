<template>
    <div
        class="bg-sea2 min-h-screen bg-center bg-no-repeat bg-cover bg-fixed px-10 pt-[90px] md:pt-[50px] pb-[100px] flex flex-col items-center">
        <div class="pt-[50px]">
            <div class="text-center mb-5">
                <h1 class="text-4xl font-bold text-black">Projects</h1>
                <p class="text-lg text-gray-500 mt-2">Check out some of my latest projects below.
                    <NuxtLink :to="`https://github.com/IshanHansaka?tab=repositories`"
                        class="text-blue-500 hover:underline">
                        view more</NuxtLink>
                </p>
                <div v-if="pending" class="text-4xl text-black mt-2">Loading projects...</div>
                <div v-if="error" class="text-4xl text-black mt-2">Ooops! Error 404 projects not found</div>
            </div>
            <div class="flex overflow-x-auto">
                <div class="p-6 flex-shrink-0" v-for="project in projects" :key="project.name">
                    <ProjectCard :project="{
                        title: project.name,
                        description: project.description,
                        githubLink: project.github_link
                    }" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { data: projects, pending, error } = useFetch("http://localhost:5000/projects");
</script>

<style scoped></style>