<template>
    <div
        class="min-h-screen px-16 pt-[90px] md:pt-[50px] pb-[100px] flex justify-center items-center">
        <div class="w-full">
            <div class="text-center mb-2">
                <h1 class="text-4xl font-bold text-black">Projects</h1>
                <p class="text-lg text-gray-500 mt-2">
                    Check out some of my latest projects below.
                    <NuxtLink :to="`https://github.com/IshanHansaka?tab=repositories`"
                        class="text-blue-500 hover:underline">
                        view more
                    </NuxtLink>
                </p>
                <div v-if="pending" class="text-4xl text-black mt-2">Loading projects...</div>
                <div v-if="error" class="text-4xl text-black mt-2">Ooops! Error 404 projects not found</div>
            </div>
            <div class="flex overflow-x-auto gap-56">
                <div class="p-6 flex-shrink-0 w-80 sm:w-72 md:w-64 lg:w-56 xl:w-48" v-for="project in projects"
                    :key="project.name">
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