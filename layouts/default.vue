<template>
    <div>
        <div id="nav"
            class="navigation fixed top-0 left-0 z-20 h-auto w-full transition-[top] duration-[1s] ease-[cubic-bezier(.4,0,.2,1)]">
            <header>
                <div class="container-fluid mx-auto px-4 md:px-7">
                    <div class="headerInner bg-initial pt-3 pb-3 md:pt-4 md:pb-4">
                        <div class="flex flex-wrap items-center -mx-2 md:-mx-3 xl:-mx-4">
                            <div class="headerLogo px-1 sm:px-2 md:px-3 xl:px-4">
                                <NuxtLink to="/"
                                    class="font-bold text-base sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl cursor-pointer">
                                    Ishan Hansaka Silva
                                </NuxtLink>
                            </div>
                            <div class="headerSocial relative px-7 sm:px-2 md:px-3 xl:px-4 ml-auto">
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
                            <div class="headerMenu px-1 sm:px-2 md:px-3 xl:px-4">
                                <i
                                    class="material-icons text-base sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl cursor-pointer">menu</i>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        <div
            class="footer fixed bottom-0 left-0 z-20 w-full h-auto transition-all duration-1000 ease-[cubic-bezier(.4,0,.2,1)] delay-[1900ms]">
            <footer>
                <div class="footerInner bg-initial pt-3">
                    <div class="container-fluid mx-auto px-5">
                        <div class="flex flex-wrap items-center justify-between -mx-4">
                            <div class="footerCredit relative px-4">
                                <div class="footerCreditTxt relative z-10 text-left color-gray-500">
                                    <p>Copyright © 2024  Ishan</p>
                                    <p>All Rights Reserved.</p>
                                </div>
                            </div>
                            <div class="footerSocial relative px-7">
                                <ul class="relative z-10 text-center leading-tight text-[2.5rem]">
                                    <li class="inline-block mx-2 cursor-pointer">
                                        <LottieAnimation :animationData="chatIconAnimation" style="width: 5rem;"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

        <div class="container">
            <slot />
        </div>
    </div>
</template>

<script setup>
import LottieAnimation from '~/components/LottieAnimation.vue';
import chatIconAnimation from '~/assets/images/chat-icon.json';
</script>

<style scoped></style>
