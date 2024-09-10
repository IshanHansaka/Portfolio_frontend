<template>
    <div>
        <div class="footer fixed bottom-0 left-0 z-20 w-full h-auto">
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
                            <ul class="relative z-10 text-center leading-tight">
                                <li class="inline-block cursor-pointer">
                                    <button @click="openChatbot">
                                        <LottieAnimation :animationData="chatIconAnimation" style="width: 6rem;" />
                                    </button>
                                </li>
                            </ul>
                            <div class="footerSocial relative px-2">
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
                                    <li class="inline-block mx-2">
                                        <a href="https://stackoverflow.com/users/22502508/ishan-hansaka-silva">
                                            <Icon name="mdi:stackoverflow" />
                                        </a>
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

<script setup>

import LottieAnimation from '~/components/LottieAnimation.vue';
import chatIconAnimation from '~/assets/images/chat-icon.json';

const openChatbot = () => {
    const flaskChatbotUrl = 'http://127.0.0.1:5000';
    window.location.href = flaskChatbotUrl;
}

</script>

<style scoped></style>