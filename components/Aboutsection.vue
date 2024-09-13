<template>
    <div class="min-h-screen px-4 pt-16 md:px-10 md:pt-[50px] pb-[100px] flex items-center justify-center gap-2">
        <div class="w-full md:w-[85%] hidden lg:block">
            <img src="https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/Right_Side.gif?raw=true" alt="coding">
        </div>
        <div class="text-left pr-4">
            <div>
                <h2 class="font-black mb-4 text-1xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl">
                    About Me
                </h2>
                <p class="font-popins text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl mb-1">
                    Hello, I'm Ishan Hansaka Silva, a self-motivated and curious undergraduate at the University of
                    Moratuwa, pursuing a BSc (Hons) in Information Technology. I am eager to contribute to the tech
                    industry and explore new opportunities for growth and innovation.
                </p>
            </div>
            <div class="flex-glow">
                <div class="flex gap-5 mb-5">
                    <p class="font-popins mt-4 mb-1 underline text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl cursor-pointer"
                        @click="showSection('skills')">Skills</p>
                    <p class="font-popins mt-4 mb-1 underline text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl cursor-pointer"
                        @click="showSection('experience')">Experience</p>
                    <p class="font-popins mt-4 mb-1 underline text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl cursor-pointer"
                        @click="showSection('education')">Education</p>
                </div>
                <div v-if="activeSection === 'skills'" id="skills">
                    <ul class="list-disc list-inside pl-4">
                        <li class="mb-2">
                            <span class="about-li">Skill
                                1</span>
                        </li>
                        <li class="mb-2">
                            <span class="about-li">Skill
                                2</span>
                        </li>
                        <li class="mb-2">
                            <span class="about-li">Skill
                                3</span>
                        </li>
                    </ul>
                </div>
                <div v-if="activeSection === 'experience'" id="experience">
                    <ul class="list-disc list-inside pl-4">
                        <li class="mb-2">
                            <span
                                class="about-li">Experience
                                1</span>
                        </li>
                        <li class="mb-2">
                            <span
                                class="about-li">Experience
                                2</span>
                        </li>
                        <li class="mb-2">
                            <span
                                class="about-li">Experience
                                3</span>
                        </li>
                    </ul>
                </div>
                <div v-if="activeSection === 'education'" id="education">
                    <ul class="list-disc list-inside pl-4">
                        <li class="mb-2">
                            <span
                                class="about-li">Undergraduate
                                at University of Moratuwa</span>
                            <br>Bachelor of Science Honours in Information Technology (2023 - 2027)
                        </li>
                        <li class="mb-2">
                            <span class="about-li">Ananda
                                Shasthralaya National School</span> <br>Physical Science stream (2019 - 2022)
                        </li>
                        <li class="mb-2">
                            <span class="about-li">Aluthgama
                                Maha Vidyalaya National School</span>
                            <br>(2008 - 2019)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const activeSection = ref('skills');

function showSection(section) {
    activeSection.value = section;
}
</script>

<style scoped></style>
