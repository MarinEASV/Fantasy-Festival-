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
                        <a href="https://fantasyfestival.dk/" target="_blank" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
		<path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.12 104.12 0 0 0 128 24m88 104a87.6 87.6 0 0 1-3.33 24h-38.51a157.4 157.4 0 0 0 0-48h38.51a87.6 87.6 0 0 1 3.33 24m-114 40h52a115.1 115.1 0 0 1-26 45a115.3 115.3 0 0 1-26-45m-3.9-16a140.8 140.8 0 0 1 0-48h59.88a140.8 140.8 0 0 1 0 48ZM40 128a87.6 87.6 0 0 1 3.33-24h38.51a157.4 157.4 0 0 0 0 48H43.33A87.6 87.6 0 0 1 40 128m114-40h-52a115.1 115.1 0 0 1 26-45a115.3 115.3 0 0 1 26 45m52.33 0h-35.62a135.3 135.3 0 0 0-22.3-45.6A88.29 88.29 0 0 1 206.37 88Zm-98.74-45.6A135.3 135.3 0 0 0 85.29 88H49.63a88.29 88.29 0 0 1 57.96-45.6M49.63 168h35.66a135.3 135.3 0 0 0 22.3 45.6A88.29 88.29 0 0 1 49.63 168m98.78 45.6a135.3 135.3 0 0 0 22.3-45.6h35.66a88.29 88.29 0 0 1-57.96 45.6" />
	</svg>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center text-center mt-12 ">
            <p>&copy; 2024 Created by MJCG</p>
        </div>
    </footer>
</template>
<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'PhGlobe',
});
</script>


  
  <style lang="scss" scoped>
  /* Footer Section */
  .dragon-image img {
      max-width: 100%;
      height: auto;
  }
  </style>
  