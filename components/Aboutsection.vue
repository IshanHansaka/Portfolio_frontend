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
                                ESP32 Microcontrollers
                            </span>
                        </li>
                        <li class="mb-2">
                            <span class="about-li">Full-stack Development

                            </span>
                        </li>
                        <li class="mb-2">
                            <span class="about-li">
                                Event Management
                            </span>
                        </li>
                        <li class="mb-2">
                            <span class="about-li">
                                Video Editing
                            </span>
                        </li>
                        <li class="mb-2">
                            <span class="about-li">
                                Tecnical Writting
                            </span>
                        </li>
                    </ul>
                </div>
                <div v-if="activeSection === 'experience'" id="experience">
                    <ul class="list-disc list-inside pl-4">
                        <li class="mb-2">
                            <span class="about-li">Member of the Event Committee</span><br>
                            IEEE Student Branch University of Moratuwa (2023 Oct - 2024 Oct)
                        </li>
                        <li class="mb-2">
                            <span class="about-li">Co-Chairperson</span><br>
                            Mora UXplore 2.0 hosted by IEEE SB UOM (2024 Feb - 2024 Aug)
                        </li>
                        <li class="mb-2">
                            <span class="about-li">Design and Editorial Committee Member</span><br>
                            Manusath Handa hosted by Rotaract Club UOM (2023 May - 2024 Apr)
                        </li>
                    </ul>
                </div>
                <div v-if="activeSection === 'education'" id="education">
                    <ul class="list-disc list-inside pl-4">
                        <li class="mb-2">
                            <span class="about-li">Undergraduate
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
const activeSection = ref('skills');

function showSection(section) {
    activeSection.value = section;
}
</script>

<style scoped>
.about-ul {
  @apply font-popins mt-4 mb-1 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl cursor-pointer relative;
}

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
