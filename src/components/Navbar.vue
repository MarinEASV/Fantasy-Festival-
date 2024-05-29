<template>
  <nav class="navbar fixed w-full bg-dark_purple bg-opacity-70 z-50 font-body text-white text-lg md:px-24 py-4 px-6">
    <a href="#home" class="logo-link">
      <img src="../assets/logo.png" alt="FantasyFestival Logo"/>
    </a>
    <ul :class="{ 'nav-menu': true, 'active': isMenuOpen }">
      <li class="nav-item"><a @click="toggleMenu" href="#home" class="fs-nav nav-link font-semibold">HOME</a></li>
      <li class="nav-item"><a @click="toggleMenu" href="#about" class="fs-nav nav-link font-semibold">ABOUT</a></li>
      <li class="nav-item"><a @click="toggleMenu" href="#quest" class="fs-nav nav-link font-semibold">QUESTS</a></li>
      <li class="nav-item"><a @click="toggleMenu" href="#tickets" class="fs-nav nav-link font-semibold">TICKETS</a></li>
      <li class="nav-item"><a @click="toggleMenu" href="#characters" class="fs-nav nav-link font-semibold">CHARACTERS</a></li>
    </ul>
    <div class="hamburger " :class="{ 'active': isMenuOpen }" @click="toggleMenu">
      <span :class="{ 'bar': true, 'active': isMenuOpen }" v-for="n in 3" :key="n"></span>
    </div>
    <a href="#tickets">
    <button class="bg-yellow hover:bg-amber-400 text-black font-bold font-body px-5 py-2 hidden md:block ml-2">BUY TICKET!</button>
    </a>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style lang="scss" scoped>
/* Navigation */
button {
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  gap: 2rem;
}

.nav-link{
  transition: 0.3s ease;
  text-decoration: none;
  color: var(--clr-White, #fff);

}

.nav-link:hover {
  color: #f6c567;
}

.nav-menu.active {
  left: 0;
  padding: 1em;
}


.hamburger {
  display: none;
}

@media (max-width: 900px) {
button{
  display: none;
}

.navbar{
  justify-content: space-between;
}

.navbar img {
  width: auto;
  height: 64px;
}


  .nav-menu {
    background-color: #181532;
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
    transition: 0.3s;
  }

  .nav-item {
    margin: 1em 0;
  }

  .hamburger {
    position: relative;
    display: block;
    cursor: pointer;
    z-index: 500;
    transition: 0.3s;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }
  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .bar {
    z-index: 550;
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: var(--clr-White, #fff);
  }
}
</style>

