<template>
    <section class="flex justify-center items-center bg-yellow pt-28 pb-4 px-6">
      <div class="grid grid-cols-2 gap-4 text-6xl font-bold font-title text-dark_purple md:flex md:space-x-4">
        <div class="flex flex-col items-center border border-dark_purple p-6 w-full h-32 md:w-40 md:h-40">
          <span>{{ days }}</span>
          <span class="text-xl font-body mt-3">DAYS</span>
        </div>
  
        <div class="flex flex-col items-center border border-dark_purple p-6 w-full h-32 md:w-40 md:h-40">
          <span>{{ hours }}</span>
          <span class="text-xl font-body mt-3">HOURS</span>
        </div>
  
        <div class="flex flex-col items-center border border-dark_purple p-6 w-full h-32 md:w-40 md:h-40">
          <span>{{ minutes }}</span>
          <span class="text-xl font-body mt-3">MINUTES</span>
        </div>
  
        <div class="flex flex-col items-center border border-dark_purple p-6 w-full h-32 md:w-40 md:h-40">
          <span>{{ seconds }}</span>
          <span class="text-xl font-body mt-3">SECONDS</span>
        </div>
      </div>
    </section>
  </template>
  
  <script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const targetDate = new Date('2024-09-14T10:00:00'); // Set your target date here

    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);

    const updateCountdown = () => {
      const now = new Date();
      const timeRemaining = targetDate - now;

      if (timeRemaining >= 0) {
        days.value = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        hours.value = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes.value = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        seconds.value = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      }
    };

    let interval;

    onMounted(() => {
      updateCountdown();
      interval = setInterval(updateCountdown, 1000);
    });

    onUnmounted(() => {
      clearInterval(interval);
    });

    return { days, hours, minutes, seconds };
  }
};
</script>
  
  <style scoped>
  
  </style>
  