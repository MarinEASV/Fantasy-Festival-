<template>
    <section class="py-20 px-6">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold font-title tracking-wider mb-4">MEET OUR CHARACTERS</h2>
        <p class="font-body text-lg mb-12">Step into a world of enchantment with our diverse cast of characters. <br> From brave
          heroes to mystical creatures, each one brings unique magic to the Fantasy Festival.</p>
        
        <div class="flex flex-wrap justify-center justify-items-center items-center gap-8">
  
          <div class="character-item relative" @mouseenter="playVideo($event)" @mouseleave="pauseVideo($event)">
            <video class="character-video" loop muted>
              <source src="../assets/videos/Havfruedronning_animation.mov" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <p class="character-name absolute bottom-0 text-yellow bg-dark_purple px-4 py-2 font-body">Havfruedronning</p>
          </div>
  
          <div class="character-item relative" @mouseenter="playVideo($event)" @mouseleave="pauseVideo($event)">
            <video class="character-video" loop muted>
              <source src="../assets/videos/Arkivaren_color_soft_animation.mov" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <p class="character-name absolute bottom-0 text-yellow bg-dark_purple px-4 py-2 font-body">Arkivaren</p>
          </div>
  
          <div class="character-item relative" @mouseenter="playVideo($event)" @mouseleave="pauseVideo($event)">
            <video class="character-video" loop muted>
              <source src="../assets/videos/Malice_animation.mov" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <p class="character-name absolute bottom-0 text-yellow bg-dark_purple px-4 py-2 font-body">Malice</p>
          </div>
  
          <div class="character-item relative" @mouseenter="playVideo($event)" @mouseleave="pauseVideo($event)">
            <video class="character-video" loop muted>
              <source src="../assets/videos/Gygaz_animation.mov" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <p class="character-name absolute bottom-0 text-yellow bg-dark_purple px-4 py-2 font-body">Gygaz</p>
          </div>
  
          <div class="character-item relative" @mouseenter="playVideo($event)" @mouseleave="pauseVideo($event)">
            <video class="character-video" loop muted>
              <source src="../assets/videos/Gnist_color_Soft_animation.mov" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <p class="character-name absolute bottom-0 text-yellow bg-dark_purple px-4 py-2 font-body">Gnist</p>
          </div>
  
          <div class="character-item-6 relative" @mouseenter="playVideo($event)" @mouseleave="pauseVideo($event)">
            <video class="character-video" loop muted>
              <source src="../assets/videos/Vogterk├ªmper_animation.mov" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <p class="character-name absolute bottom-0 text-yellow bg-dark_purple px-4 py-2 font-body">Arkivaren</p>
          </div>
  
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const playVideo = (event) => {
    const video = event.currentTarget.querySelector('.character-video');
    if (video) {
      video.play();
    }
  };
  
  const pauseVideo = (event) => {
    const video = event.currentTarget.querySelector('.character-video');
    if (video) {
      video.pause();
    }
  };
  </script>
  
  <style lang="scss" scoped>
 
  .character-item,
  .character-item-6 {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s;
  }
  
  .character-item {
    width: 300px;
    height: 400px;
  }
  
  .character-item-6 {
    width: 600px;
    height: 400px;
  }
  
  .character-item:hover,
  .character-item-6:hover {
    transform: scale(1.05);
  }
  
  .character-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .character-name {
    font-size: 1.5rem;
    text-align: center;
    width: 100%;
  }
  </style>
  