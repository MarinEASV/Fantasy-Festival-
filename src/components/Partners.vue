<template>
    <section class="meet-you-there bg-[#181532] py-20 px-6 flex flex-col items-center">
        <h2 class=" text-white text-4xl text-center font-semibold tracking-widest leading-snug mb-8 font-title">MEET YOU THERE!</h2>
        <a class="mx-auto" href="#tickets">
            <button class="bg-yellow hover:bg-amber-400 text-black font-bold font-body p-4 px-20 text-lg mt-4">
                Get your ticket!
            </button>
        </a>
    </section>


    <section class="bg-dark_purple py-12 px-6">
        <div class="container mx-auto text-center">
            <h2 class="body text-white text-lg font-medium mb-4">OUR PARTNERS:</h2>
            <div class="flex justify-center items-center flex-wrap space-x-8 gap-12">
                <img src="../assets/Danish_crown_logo_2020.svg" alt="Partner 1 Logo" class="partner-logo size-48">
                <img src="../assets/Fliyingtiger.svg" alt="Partner 2 Logo" class="partner-logo size-40">
                <img src="../assets/Hummel_logo_aktuell.svg" alt="Partner 3 Logo" class="partner-logo size-20">
                <img src="../assets/Select-Sport_Logo.svg" alt="Partner 4 Logo" class="partner-logo size-20">
                <img src="../assets/Føtex_logo.svg" alt="Partner 5 Logo" class="partner-logo size-28">
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.partner-logo {
    filter: brightness(0) invert(1); /* Make sure the logos are white on dark background */
}
</style>