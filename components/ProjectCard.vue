<template>
    <div class="mx-auto bg-white shadow-lg rounded-lg overflow-hidden w-[380px] h-[350px]">
        <div class="h-full flex flex-col justify-between px-4 py-6">
            <div>
                <h1 class="text-3xl font-bold text-black">{{ project.title }}</h1>
                <p class="mt-8 text-gray-700 text-base leading-relaxed font-popins">{{ project.description }}</p>
            </div>
            <a :href="project.githubLink"
                class="mt-10 px-6 py-2 border-2 border-black bg-black text-white rounded-md hover:bg-white hover:text-black text-center"
                target="_blank" rel="noopener noreferrer">
                View on GitHub
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped></style>