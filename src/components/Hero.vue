<template>
  <section class="parallax overflow-hidden relative h-screen" id="home">
    <!-- Desktop Background Image -->
    <img src="../assets/HERO/Hero-BG.png" alt="Background" class="z-0 w-full h-full object-cover background-desktop">

    <!-- Mobile Background Image -->
    <img src="../assets/HERO/Hero-BG-mobile.jpg" alt="Background Mobile" class="z-0 w-full h-full object-cover background-mobile">

    <!-- Always Visible Heading -->
    <h1 :class="{ 'heading': true, 'static-heading': isMobile }" class="text-8xl sm:text-9xl absolute text-white text-center z-20 w-full font-title font-semibold">Fantasy Quest</h1>

    <!-- Parallax Layers -->
    <img src="../assets/HERO/statues.png" alt="Statues" class="z-50 parallax-layer statues">
    <img src="../assets/HERO/cloud-left.png" alt="Clouds Left" class="parallax-layer left animate-cloud-left">
    <img src="../assets/HERO/cloud-right.png" alt="Clouds Right" class="parallax-layer right animate-cloud-right">
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMobile = window.innerWidth <= 800;

const handleScroll = () => {
  if (!isMobile) {
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    parallaxLayers.forEach(layer => {
      const depth = layer.getAttribute('data-depth');
      const movement = (window.scrollY * depth) / 10;
      layer.style.transform = `translate3d(0, ${movement}px, 0)`;
    });

    // Adjust the heading position based on scroll position
    const scrollPosition = window.scrollY;
    const heading = document.querySelector('.heading');
    if (heading) {
      heading.style.top = `calc(25% + ${scrollPosition}px)`;
    }
  }
};

onMounted(() => {
  if (!isMobile) {
    window.addEventListener('scroll', handleScroll);
  }
});

onUnmounted(() => {
  if (!isMobile) {
    window.removeEventListener('scroll', handleScroll);
  }
});
</script>
  
<style lang="scss" scoped>
.heading {
  top: 25%;
  transition: top 0.1s;
}
.parallax {
  perspective: 1px;
  position: relative;
  height: 100vh;
}
  
.parallax-layer {
  position: absolute;
  will-change: transform;
}
  
.statues {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 330px;
}
  
.left {
  top: 120px;
  left: -1px;
  width: 38%;
}
  
.right {
  top: 90px;
  left: 62%;
  width: 38%;
}
  
.animate-cloud-left {
  animation: moveLeft 3s ease-in-out ;
}
  
.animate-cloud-right {
  animation: moveRight 3s ease-in-out ;
}
  
@keyframes moveLeft {
  0% {
    transform: translateX(-60%);
  }
  100% {
    transform: translateX(0);
  }
}
  
@keyframes moveRight {
  0% {
    transform: translateX(60%);
  }
  100% {
    transform: translateX(0);
  }
}
  
.background-desktop {
  display: block;
}
  
.background-mobile {
  display: none;
}
  
.static-heading {
  position: absolute;
  top: 30%;
  transform: translateY(-300%);
}

@media (max-width: 800px) {
  .parallax-layer,
  .background-desktop {
    display: none;
  }

  .background-mobile {
    display: block;
  }

  .heading {
    position: static;
  }
}

@media (min-width: 801px) {
  .background-mobile {
    display: none;
  }
}
</style>
