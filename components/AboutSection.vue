<template>
    <div class="min-h-screen px-4 pt-16 md:px-10 md:pt-[50px] pb-[100px] flex items-center justify-center gap-8">
        <div class="w-full md:w-[65%] hidden lg:block">
            <img class="w-96" src="../public/computer-office.webp" alt="coding">
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
                    <p :class="['about-ul', { 'active': activeSection === 'skills' }]" @click="showSection('skills')">
                        Skills</p>
                    <p :class="['about-ul', { 'active': activeSection === 'experience' }]"
                        @click="showSection('experience')">Experience</p>
                    <p :class="['about-ul', { 'active': activeSection === 'education' }]"
                        @click="showSection('education')">Education</p>
                </div>
                <div v-if="activeSection === 'skills'" id="skills">
                    <ul class="list-disc list-inside pl-4">
                        <li class="mb-2">
                            <span class="about-li">
                                Full-stack Development
                            </span>
                        </li>
                        <li class="mb-2">
                            <span class="about-li">
                                ESP32 Microcontrollers
                            </span>
                        </li>
                        <li class="mb-2">
                            <span class="about-li">
                                Technical Writing
                            </span>
                        </li>
                        <li class="mb-2">
                            <span class="about-li">
                                Video Editing
                            </span>
                        </li>
                        <li class="mb-2">
                            <span class="about-li">
                                Event Management
                            </span>
                        </li>
                    </ul>
                </div>
                <div v-if="activeSection === 'experience'" id="experience">
                    <ul class="list-disc list-inside pl-4">
                        <li class="mb-2">
                            <span class="about-li">Member of the Event Committee</span><br>
                            <span class="about-li-br">IEEE Student Branch University of Moratuwa
                                <p class="about-li-p">(2023 Oct - 2024 Oct)</p>
                            </span>
                        </li>
                        <li class="mb-2">
                            <span class="about-li">Co-Chairperson</span><br>
                            <span class="about-li-br">Mora UXplore 2.0 hosted by IEEE SB UOM
                                <p class="about-li-p">(2024 Feb - 2024 Aug)</p>
                            </span>
                        </li>
                        <li class="mb-2">
                            <span class="about-li">Design and Editorial Committee Member</span><br>
                            <span class="about-li-br">Manusath Handa hosted by Rotaract Club UOM
                                <p class="about-li-p">(2023 May - 2024 Apr)</p>
                            </span>
                        </li>
                    </ul>
                </div>
                <div v-if="activeSection === 'education'" id="education">
                    <ul class="list-disc list-inside pl-4">
                        <li class="mb-2">
                            <span class="about-li">Undergraduate
                                at University of Moratuwa</span>
                            <br>
                            <span class="about-li-br">
                                Bachelor of Science Honours in Information Technology
                                <p class="about-li-p">(2023 - 2027)</p>
                            </span>
                        </li>
                        <li class="mb-2">
                            <span class="about-li">Ananda
                                Shasthralaya National School</span><br>
                            <span class="about-li-br">Physical Science stream
                                <p class="about-li-p">(2019 - 2022)</p>
                            </span>
                        </li>
                        <li class="mb-2">
                            <span class="about-li">Aluthgama
                                Maha Vidyalaya National School</span>
                            <br><span class="about-li-br">(2008 - 2019)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const activeSection = ref('skills');

function showSection(section) {
    activeSection.value = section;
}
</script>

<style scoped>
.about-ul::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 3px;
    border-radius: 15px;
    background: black;
    transition: width 0.25s ease;
}

.about-ul.active::after {
    width: 100%;
}
</style>