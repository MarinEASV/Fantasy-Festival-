<template>
  <section class="py-28 px-6" id="characters">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl md:fm font-bold font-title tracking-wider leading-snug mb-4">MEET OUR CHARACTERS</h2>
      <p class="font-body text-lg mb-12">Step into a world of enchantment with our diverse cast of characters. <br> From brave
        heroes to mystical creatures, each one brings unique magic to the Fantasy Festival.</p>
  
      <div class="character-container flex items-center justify-between">
        <button class="arrow left-arrow bg-gray-200 text-black p-2 rounded-full">
          &larr;
        </button>
  
        <div class="characters flex flex-col md:flex-row justify-center gap-10">
          <div class="character-group flex flex-row gap-10">
            <div class="character-item relative" @mouseenter="playVideo($event)" @mouseleave="pauseVideo($event)">
              <video class="character-video" loop muted>
                <source src="../assets/videos/Havfruedronning_animation.mov" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <p class="character-name absolute bottom-0 text-yellow bg-dark_purple px-4 py-2 font-body">Havfruedronning</p>
            </div>
  
            <div class="character-item relative" @mouseenter="playVideo($event)" @mouseleave="pauseVideo($event)">
              <video class="character-video" loop muted>
                <source src="../assets/videos/Arkivaren_animation.mov" type="video/mp4">
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
          </div>
  
          <div class="character-group flex flex-row gap-10">
            <div class="character-item relative" @mouseenter="playVideo($event)" @mouseleave="pauseVideo($event)">
              <video class="character-video" loop muted>
                <source src="../assets/videos/Gygaz_animation.mov" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <p class="character-name absolute bottom-0 text-yellow bg-dark_purple px-4 py-2 font-body">Gygaz</p>
            </div>
  
            <div class="character-item relative" @mouseenter="playVideo($event)" @mouseleave="pauseVideo($event)">
              <video class="character-video" loop muted>
                <source src="../assets/videos/Gnist_animation.mov" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <p class="character-name absolute bottom-0 text-yellow bg-dark_purple px-4 py-2 font-body">Gnist</p>
            </div>
          </div>
  
        </div>
  
        <button class="arrow right-arrow bg-gray-200 text-black p-2 rounded-full">
          &rarr;
        </button>
      </div>
  
      <div class="dots mt-6 flex justify-center space-x-2">
        <span class="dot w-3 h-3 bg-gray-400 rounded-full"></span>
        <span class="dot w-3 h-3 bg-gray-200 rounded-full"></span>
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
  
  document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const characterGroups = document.querySelectorAll('.character-group');
    const dots = document.querySelectorAll('.dot');
  
    let currentIndex = 0;
  
    function updateCharacters(index) {
      characterGroups.forEach((group, i) => {
        group.style.display = i === index ? 'flex' : 'none';
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('bg-gray-400', i === index);
        dot.classList.toggle('bg-gray-200', i !== index);
      });
    }
  
    leftArrow.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : characterGroups.length - 1;
      updateCharacters(currentIndex);
    });
  
    rightArrow.addEventListener('click', () => {
      currentIndex = (currentIndex < characterGroups.length - 1) ? currentIndex + 1 : 0;
      updateCharacters(currentIndex);
    });
  
    updateCharacters(currentIndex); // Initialize
  });
  </script>
  
  <style lang="scss" scoped>
.character-container {
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

.character-group {
  display: none; /* Start with all groups hidden */
}

.character-item {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;
  width: 300px;
  height: 400px;
}

.character-item:hover {
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

@media screen and (max-width: 640px) {
  .character-group {
    flex-direction: column;
    gap: 20px; /* Adjust spacing between items */
  }

  .character-item {
    width: 100%; /* Make items occupy full width */
    max-width: none; /* Reset max-width */
    height: auto; /* Allow height to adjust based on content */
  }
}
</style>
  