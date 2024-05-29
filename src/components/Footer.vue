<template>
    <footer class="bg-dark_purple py-20 px-6 text-white font-body text-lg">
        <div class="container mx-auto flex flex-col md:flex-row justify-around gap-12">
            <div class="dragon-image">
                <img src="../assets/purple-dragon.svg" alt="Dragon Image" class="mx-auto md:mx-0">
            </div>
            <div class="flex flex-col md:flex-row justify-end w-full md:w-auto pl-40 md:pl-0">
                <div class="me-0 md:me-24 mb-8 md:mb-0">
                    <h3 class="text-2xl font-title">Contacts</h3><br>
                    <p><i class="fas fa-phone"></i> +45 76 16 20 00</p><br>
                    <p><i class="fas fa-envelope"></i> email@email.dk</p><br>
                    <p><i class="fas fa-map-marker-alt"></i> The main library<br>Nørregade 19<br>6700 Esbjerg</p>
                </div>
                <div class="me-0 md:me-8">
                    <h3 class="text-2xl font-title">Follow us</h3><br>
                    <div class="flex gap-4 justify-left md:justify-start">
                        <a href="https://www.facebook.com/fantasyfestivalen/?locale=da_DK" target="_blank" ><i class="fab fa-facebook text-3xl hover:text-yellow"></i></a>
                        <a href="https://www.instagram.com/fantasyfestivalen/" target="_blank" ><i class="fab fa-instagram text-3xl hover:text-yellow"></i></a>
                        <a href="https://fantasyfestival.dk/" target="_blank" ><i class="fa-solid fa-globe text-3xl hover:text-yellow"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center text-center mt-12 ">
            <p>&copy; 2024 Created by MJCG</p>
        </div>
    </footer>
</template>
  
<script setup>
</script>
  
  <style lang="scss" scoped>
  /* Footer Section */
  .dragon-image img {
      max-width: 100%;
      height: auto;
  }
  </style>
  