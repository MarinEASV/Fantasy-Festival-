<template>
    <footer class="bg-dark_purple py-20 px-6 text-white font-body text-lg">
        <div class="container mx-auto flex flex-col md:flex-row justify-around gap-12">
            <div class="dragon-image">
                <img src="../assets/dragon-footer.png" alt="Dragon Image" class="mx-auto md:mx-0">
            </div>
            <div class="flex flex-col md:flex-row justify-end w-full md:w-auto">
                <div class="me-0 md:me-24 mb-8 md:mb-0">
                    <h3 class="text-2xl font-title">Contacts</h3><br>
                    <p><i class="fas fa-phone"></i> +45 76 16 20 00</p><br>
                    <p><i class="fas fa-envelope"></i> email@email.dk</p><br>
                    <p><i class="fas fa-map-marker-alt"></i> The main library<br>Nørregade 19<br>6700 Esbjerg</p>
                </div>
                <div class="me-0 md:me-8">
                    <h3 class="text-2xl font-title">Follow us</h3><br>
                    <div class="flex gap-4 justify-left md:justify-start">
                        <a href="#"><i class="fab fa-facebook text-2xl hover:text-yellow"></i></a>
                        <a href="#"><i class="fab fa-instagram text-2xl hover:text-yellow"></i></a>
                        <a href="#"><i class="fas fa-globe text-2xl hover:text-yellow"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
  
  <script setup>
  // No additional script needed for this setup
  </script>
  
  <style lang="scss" scoped>
  /* Footer Section */
  .dragon-image img {
      max-width: 100%;
      height: auto;
  }
  </style>
  