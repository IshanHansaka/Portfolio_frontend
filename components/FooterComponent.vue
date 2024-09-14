<template>
    <div>
        <div class="footer fixed bottom-0 left-0 z-20 w-full h-auto">
            <footer>
                <div class="bg-initial py-3">
                    <div class="container-fluid mx-auto px-5">
                        <div class="flex flex-wrap items-center justify-between">
                            <div class="relative px-4">
                                <div class="relative z-10 text-left color-gray-500 text-sm sm:text-sm md:text-lg lg:text-lg xl:text-lg">
                                    <p>Copyright © 2024 Ishan</p>
                                    <p>All Rights Reserved.</p>
                                </div>
                            </div>
                            <ul class="relative z-10 text-center leading-tight">
                                <li class="inline-block cursor-pointer">
                                    <button @click="openChatbot">
                                        <LottieAnimation :animationData="chatIconAnimation" style="width: 6rem;" />
                                    </button>
                                </li>
                            </ul>
                            <div class="footerSocial relative px-2">
                                <ul
                                    class="relative z-10 text-center leading-tight text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
                                    <li class="inline-block mx-2">
                                        <NuxtLink :to="`mailto:ishanhansakasilva@gmail.com`">
                                            <Icon name="material-symbols:mail-outline-rounded" />
                                        </NuxtLink>
                                    </li>
                                    <li class="inline-block mx-2">
                                        <NuxtLink :to="`https://www.linkedin.com/in/ishanhansakasilva`">
                                            <Icon name="uil:linkedin" />
                                        </NuxtLink>
                                    </li>
                                    <li class="inline-block mx-2">
                                        <NuxtLink :to="`https://github.com/IshanHansaka`">
                                            <Icon name="uil:github" />
                                        </NuxtLink>
                                    </li>
                                    <li class="inline-block mx-2">
                                        <NuxtLink :to="`https://medium.com/@ishanhansakasilva`">
                                            <Icon name="simple-icons:medium" />
                                        </NuxtLink>
                                    </li>
                                    <li class="inline-block mx-2">
                                        <NuxtLink :to="`https://stackoverflow.com/users/22502508/ishan-hansaka-silva`">
                                            <Icon name="mdi:stackoverflow" />
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script setup></script>

<style scoped></style>