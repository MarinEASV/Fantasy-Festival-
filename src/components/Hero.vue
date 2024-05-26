<template>
    <section class="parallax overflow-hidden relative h-screen">
        <!-- Desktop Background Image -->
        <img src="../assets/HERO/Hero-BG.png" alt="Background" class="z-0 w-full h-full object-cover ">
        
        <!-- Mobile Background Image -->
        <img src="../assets/HERO/Hero-BG-mobile.jpg" alt="Background Mobile" class="z-0 w-full h-full object-cover background-mobile">
        
        <!-- Always Visible Heading -->
        <h1 class="text-9xl absolute text-white text-center z-10 w-full top-1/3 transform -translate-y-1/2 font-title">Fantasy Quest</h1>
        
        <!-- Parallax Layers -->
        <img src="../assets/HERO/statues.png" alt="Statues" class="z-20 parallax-layer">
        <img src="../assets/HERO/cloud-left.png" alt="Clouds Left" class="parallax-layer left">
        <img src="../assets/HERO/cloud-right.png" alt="Clouds Right" class="parallax-layer right">
    </section>  
  </template>
  
  <script setup>
  </script>
  
  <style lang="scss" scoped>
  .parallax-layer {
              position: absolute;
              top: 330px;
              will-change: transform;
          }
  
          .parallax {
              perspective: 1px;
              overflow-x: hidden;
              overflow-y: auto;
              position: relative;
          }
  
          .left {
              top: 120px;
              left: 0%;
              width: 38%;
          }
  
          .right {
              top: 90px;
              left: 62%;
              width: 38%;
          }
  
          @media (max-width: 640px) {
              .parallax-layer,
              .parallax img {
                  position: static;
                  will-change: auto;
              }
  
              .parallax h1 {
                  position: relative;
                  top: auto;
                  transform: none;
                  margin-top: 20vh;
              }
  
              .background {
                  display: none;
              }
  
              .background-mobile {
                  display: block;
              }
          }
  
          @media (min-width: 640px) {
              .background-mobile {
                  display: none;
              }
          }
  </style>
  