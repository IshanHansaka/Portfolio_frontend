<template>
    <div
        class="mx-auto bg-white shadow-xl border-2 border-gray-100 rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 w-72 sm:w-72 md:w-84 lg:w-84 xl:w-96 h-[360px]">
        <div class="h-full flex flex-col justify-between px-4 py-6">
            <div>
                <h1 class="text-2xl sm:text-3xl font-bold text-black">{{ project.title }}</h1>
                <p class="mt-3 text-gray-700 text-sm sm:text-sm md:text-base lg:text-base xl:text-baseleading-relaxed font-popins">
                    {{ project.description }}
                </p>
                <div class="mt-3 flex space-x-4">
                    <img v-for="(tool, index) in project.tools" :key="index" :src="getIconUrl(tool)" :alt="tool"
                        class="w-8 sm:w-10" />
                </div>
            </div>
            <a :href="project.githubLink"
                class="mt-6 sm:mt-6 px-4 sm:px-6 py-2 border-2 border-black bg-black text-white rounded-md hover:bg-white hover:text-black text-center"
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
            default: () => ({
                title: '',
                description: '',
                githubLink: '',
                tools: []
            })
        }
    },
    methods: {
        getIconUrl(iconName) {
            return `https://github.com/IshanHansaka/skill-icons/blob/main/icons/${iconName}.svg?raw=true`;
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
