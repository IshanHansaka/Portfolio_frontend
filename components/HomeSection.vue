<template>
    <div
        class="min-h-screen flex flex-col md:flex-row items-center justify-center bg-fixed bg-no-repeat bg-cover bg-center px-6 pt-16 pb-16 md:px-10 md:pt-24 md:pb-24">
        <div class="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-5">
            <div class="flex flex-col mt-10 items-center md:items-start text-center md:text-left">
                <h4 class="font-poppins pl-[3px] text-1xl md:text-3xl">Undergraduate at University of Moratuwa</h4>
                <h1 class="font-black text-4xl md:text-7xl"><span class="">Ishan</span> Hansaka</h1>
                <button @click="downloadResume"
                    class="mt-10 px-6 py-2 border-2 border-black bg-black text-white rounded-md hover:bg-white hover:text-black transition duration-300 ease-in-out">Download
                    Resume</button>
            </div>
            <img src="../public/ishan-dp.webp" alt="Profile Picture" class="w-48 md:w-[25rem] rounded-full mb-10">
        </div>
    </div>
</template>

<script setup>
const backendURL = "https://devlabs-portfolio-backend-06205972995f.herokuapp.com";
const downloadResume = async () => {
    try {
        const response = await fetch(`${backendURL}/resume`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/pdf',
            }
        });

        if (!response.ok) {
            throw new Error('Error downloading the resume');
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        
    } catch (error) {
        console.error('Error downloading the resume:', error);
    }
}
</script>

<style scoped></style>