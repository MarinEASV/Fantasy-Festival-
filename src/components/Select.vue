<template>
    <section class="text-center pt-12 pb-28 bg-dark_purple" id="tickets" >
      <div class="container mx-auto">
        <h2 class="text-4xl px-6 font-semibold font-title tracking-widest leading-snug mb-4 text-yellow">SELECT YOUR PASS</h2>
        <p class="text-lg mb-10 text-yellow px-6 font-body ">Choose the perfect pass to unlock all the magic of the Fantasy Festival!</p>
  
        <div class="flex flex-col lg:flex-row justify-center gap-8">
          <div class="ticket bg-cover bg-no-repeat p-10 object-cover overflow-hidden mx-auto lg:m-0">
            <div class="p-12">
              <h3 class="text-2xl font-bold font-title tracking-wide mb-2 text-left">DAY QUEST</h3>
              <p class="mb-6 text-left font-body text-lg">Standard ticket - Family Quest</p>
              <div class="text-4xl text-left font-bold font-body mb-6">159.13 DKK</div>
              <hr class="border-black mb-8">
              <div>
                <p class="mb-2 flex justify-between font-body"><span>✓ Time: at 10.00-14.30</span><span>✓ Where: Torvet Esbjerg</span></p>
                <p class="mb-2 flex justify-between font-body"><span>✓ Children up to 12 years free</span><span>✓ When: September 14, 2024</span></p>
              </div>
              <a class="mx-auto" href="https://www.universe.com/events/family-quest-dagquest-tickets-C6PYX3" target="_blank">
                <button class="bg-dark_purple hover:bg-violet-900 text-white text-center font-semibold font-body p-4 w-full text-lg my-4">
                  Buy ticket
                </button>
              </a>
            </div>
          </div>
  
          <div class="ticket bg-cover bg-no-repeat p-10 object-cover overflow-hidden mx-auto lg:m-0 ">
            <div class="p-12">
              <h3 class="text-2xl font-bold font-title tracking-wide mb-2 text-left">EVENING QUEST</h3>
              <p class="mb-6 text-left font-body text-lg">Standard ticket - Fantasy Quest</p>
              <div class="text-4xl text-left font-bold font-body mb-6">243.13 DKK</div>
              <hr class="border-black mb-8">
              <div>
                <p class="mb-2 flex justify-between font-body"><span>✓ Time: at 18.00-22.30</span><span>✓ September 14, 2024</span></p>
                <p class="mb-2 flex justify-between font-body"><span>✓ Where: Torvet Esbjerg</span><span>✓ All prices are incl. ticket fees</span></p>
              </div>
              <a class="mx-auto" href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4" target="_blank">
                <button class="bg-dark_purple hover:bg-violet-900 text-white text-center font-semibold font-body p-4 w-full text-lg my-4">
                  Buy ticket
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style lang="scss" scoped>
  .ticket {
    width: 480px;
    height: auto;
    overflow: hidden;
    background-image: url('../assets/ticket.png');
  }
  
  .ticket .includes p {
    display: flex;
    justify-content: space-between;
  }
  
  .ticket .includes p span {
    flex: 1;
    margin-right: 10px;
  }
  
  .ticket .includes p span:last-child {
    margin-right: 0;
  }
  </style>
  