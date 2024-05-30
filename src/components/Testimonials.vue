<template>
    <section class="text-center py-24 px-6">
      <div class="container mx-auto">
        <h2 class="text-4xl md:text-5xl font-title font-semibold tracking-tight leading-relaxed mb-6 text-black">CUSTOMER TESTIMONIALS</h2>
        <p class="text-lg mb-12 font-body">
          Hear from those who have experienced the magic of the Fantasy Festival. Our attendees share their
          unforgettable moments, favorite events, and how the festival has inspired their love for fantasy.
        </p>
  
        <div class="testimonial-carousel">
          <div class="testimonial-container flex items-center justify-around">
            <button @click="prevSlide" class="arrow left-arrow bg-gray-200 text-black p-2 rounded-full">
              &larr;
            </button>
  
            <div :class="['testimonials flex', isSmallScreen ? 'flex-col' : 'flex-col md:flex-row']">
              <div v-for="(testimonial, index) in currentTestimonials" :key="index" class="testimonial text-center max-w-md mx-auto mb-10">
                <img :src="testimonial.image" :alt="testimonial.name" class="mx-auto rounded-full w-24 h-24 mb-4">
                <h3 class="text-xl font-semibold mb-2">{{ testimonial.name }}</h3>
                <p class="font-body text-base italic text-gray-600">{{ testimonial.testimonial }}</p>
              </div>
            </div>
  
            <button @click="nextSlide" class="arrow right-arrow bg-gray-200 text-black p-2 rounded-full">
              &rarr;
            </button>
          </div>
  
          <div class="dots mt-6 flex justify-center space-x-2">
            <span v-for="(dot, index) in dotCount" :key="index" :class="['dot w-3 h-3 rounded-full', currentIndex === index ? 'bg-gray-400' : 'bg-gray-200']"></span>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  import getTestimonial from '../modules/getTestimonial.js'
  
  const { testimonials } = getTestimonial()
  const currentIndex = ref(0)
  const isSmallScreen = ref(window.innerWidth <= 768)
  const testimonialsPerSlide = computed(() => (isSmallScreen.value ? 1 : 2))
  const dotCount = computed(() => Math.ceil(testimonials.value.length / testimonialsPerSlide.value))
  
  const currentTestimonials = computed(() => {
    const start = currentIndex.value * testimonialsPerSlide.value
    return testimonials.value.slice(start, start + testimonialsPerSlide.value)
  })
  
  const updateIndex = (increment) => {
    const maxIndex = dotCount.value - 1
    currentIndex.value = (currentIndex.value + increment + dotCount.value) % dotCount.value
  }
  
  const nextSlide = () => updateIndex(1)
  const prevSlide = () => updateIndex(-1)
  
  const handleResize = () => {
    isSmallScreen.value = window.innerWidth <= 768
  }
  
  window.addEventListener('resize', handleResize)
  
  onMounted(() => {
    handleResize()
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
  </script>
  
  <style lang="scss" scoped>
  .testimonial-container {
    position: relative;
  }
  
  .arrow {
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .arrow:hover {
    background-color: #ccc;
  }
  
  .dots .dot {
    transition: background-color 0.3s;
  }
  
  .dots .dot.active {
    background-color: #000;
  }
  </style>
  