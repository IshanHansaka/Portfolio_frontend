<template>
    <div>
        <div
            class="footer fixed bottom-0 left-0 z-20 w-full h-auto">
            <footer>
                <div class="footerInner bg-initial py-3">
                    <div class="container-fluid mx-auto px-5">
                        <div class="flex flex-wrap items-center justify-between -mx-4">
                            <div class="footerCredit relative px-4">
                                <div class="footerCreditTxt relative z-10 text-left color-gray-500">
                                    <p>Copyright © 2024 Ishan</p>
                                    <p>All Rights Reserved.</p>
                                </div>
                            </div>
                            <div class="footerSocial relative px-7">
                                <ul
                                    class="relative z-10 text-center leading-tight text-base sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl">
                                    <li class="inline-block mx-2">
                                        <a href="https://www.linkedin.com/in/ishanhansakasilva">
                                            <Icon name="uil:linkedin" />
                                        </a>
                                    </li>
                                    <li class="inline-block mx-2">
                                        <a href="https://github.com/IshanHansaka">
                                            <Icon name="uil:github" />
                                        </a>
                                    </li>
                                    <li class="inline-block mx-2">
                                        <a href="https://medium.com/@ishanhansakasilva">
                                            <Icon name="simple-icons:medium" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <ul class="relative z-10 text-center leading-tight text-[2.5rem]">
                                <li class="inline-block mx-2 cursor-pointer">
                                    <LottieAnimation :animationData="chatIconAnimation" style="width: 5rem;" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script setup>

import LottieAnimation from '~/components/LottieAnimation.vue';
import chatIconAnimation from '~/assets/images/chat-icon.json';

</script>

<style scoped></style>