<template>
    <div>
        <div id="nav" class="navigation fixed top-0 left-0 z-20 h-auto w-full">
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
                            <div class="headerNav relative px-7 sm:px-2 md:px-3 xl:px-4 ml-auto">
                                <ul
                                    class="text-[1rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] xl:text-[1.3rem] cursor-pointer">
                                    <li class="inline-block mx-3">
                                        <NuxtLink to="/">Home</NuxtLink>
                                    </li>
                                    <li class="inline-block mx-3">
                                        <NuxtLink to="/about">About</NuxtLink>
                                    </li>
                                    <li class="inline-block mx-3">
                                        <NuxtLink to="/projects">Projects</NuxtLink>
                                    </li>
                                    <li class="inline-block mx-3">
                                        <NuxtLink to="/articles">Articles</NuxtLink>
                                    </li>
                                    <li class="inline-block mx-3">
                                        <NuxtLink to="/contact">Contact</NuxtLink>
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
    </div>
</template>

<script setup>

</script>

<style scoped></style>