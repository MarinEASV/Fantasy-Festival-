<template>
    <section class="text-center py-24 px-6">
        <div class="container mx-auto">
            <h2 class="text-4xl md:text-5xl font-title font-semibold tracking-tight leading-relaxed mb-6 text-black">CUSTOMER TESTIMONIALS</h2>
            <p class="text-lg mb-12 font-body">
                Hear from those who have experienced the magic of the Fantasy Festival. Our attendees share their
                unforgettable moments, favorite events, and how the festival has inspired their love for fantasy.
            </p>
    
            <div class="testimonial-container flex items-center justify-between">
                <button class="arrow left-arrow bg-gray-200 text-black p-2 rounded-full">
                    &larr;
                </button>
    
                <div class="testimonials flex flex-col md:flex-row justify-center gap-10">
                    <div class="testimonial-pair flex flex-row gap-10">
                        <div class="testimonial text-center max-w-md">
                            <img src="../assets/image-jeanette.jpg" alt="Emma Hansen"
                                class="mx-auto rounded-full w-24 h-24 mb-4">
                            <h3 class="text-xl font-semibold mb-2">Emma Hansen</h3>
                            <p class="font-body text-base italic text-gray-600">
                                "I attended the Fantasy Festival last year, and it was an incredible experience! The variety of
                                activities and events kept me engaged all weekend. Meeting my favorite authors and discovering
                                new ones was a highlight, and the atmosphere was truly magical. The children's workshops were
                                fantastic for my kids, sparking their creativity and love for reading. I can't wait to return
                                this year and see what new adventures await!"
                            </p>
                        </div>
    
                        <div class="testimonial text-center max-w-md">
                            <img src="../assets/image-daniel.jpg" alt="Søren Andersen" class="mx-auto rounded-full w-24 h-24 mb-4">
                            <h3 class="text-xl font-semibold mb-2">Søren Andersen</h3>
                            <p class="font-body text-base italic text-gray-600">
                                "Fantasy Festival exceeded all my expectations! From fascinating panel discussions to immersive
                                role-playing games, every moment was filled with excitement. The highlight for me was meeting RF
                                Kuang and attending her lecture. The festival is perfect for all ages, and my family had a blast
                                exploring the children's area and participating in creative workshops. It's a must-visit event
                                for any fantasy fan!"
                            </p>
                        </div>
                    </div>
    
                    <div class="testimonial-pair flex flex-row gap-10">
                        <div class="testimonial text-center max-w-md">
                            <img src="../assets/image-kira.jpg" alt="Sofie Larsen" class="mx-auto rounded-full w-24 h-24 mb-4">
                            <h3 class="text-xl font-semibold mb-2">Sofie Larsen</h3>
                            <p class="font-body text-base italic text-gray-600">
                                "Attending the Fantasy Festival was an unforgettable experience! The themed areas and interactive activities were incredible. I particularly enjoyed the live-action role-play events and the chance to meet my favorite fantasy authors. The atmosphere was magical, and there was something for everyone, from kids to adults. We will definitely be coming back next year!"
                            </p>
                        </div>
    
                        <div class="testimonial text-center max-w-md">
                            <img src="../assets/image-jonathan.jpg" alt="Mads Nielsen" class="mx-auto rounded-full w-24 h-24 mb-4">
                            <h3 class="text-xl font-semibold mb-2">Mads Nielsen</h3>
                            <p class="font-body text-base italic text-gray-600">
                                "The Fantasy Festival is a dream come true for any fantasy enthusiast. The variety of workshops and panels provided so much insight and inspiration. My favorite part was the cosplay competition, where I saw amazing costumes and met fellow fans. The whole event was well-organized, and the staff were extremely friendly and helpful. I can't recommend it enough!"
                            </p>
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
    import { onMounted } from 'vue';
    
    onMounted(() => {
        const leftArrow = document.querySelector('.left-arrow');
        const rightArrow = document.querySelector('.right-arrow');
        const testimonialPairs = document.querySelectorAll('.testimonial-pair');
        const dots = document.querySelectorAll('.dot');
    
        let currentIndex = 0;
    
        function updateTestimonials(index) {
            testimonialPairs.forEach((pair, i) => {
                pair.style.display = i === index ? 'flex' : 'none';
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('bg-gray-400', i === index);
                dot.classList.toggle('bg-gray-200', i !== index);
            });
        }
    
        leftArrow.addEventListener('click', () => {
            console.log('Left arrow clicked');
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonialPairs.length - 1;
            updateTestimonials(currentIndex);
        });
    
        rightArrow.addEventListener('click', () => {
            console.log('Right arrow clicked');
            currentIndex = (currentIndex < testimonialPairs.length - 1) ? currentIndex + 1 : 0;
            updateTestimonials(currentIndex);
        });
    
        updateTestimonials(currentIndex); // Initialize
    });
    </script>
    
    <style scoped>
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
    
    .testimonial-pair {
        display: none; /* Start with all pairs hidden */
    }
    
    /* Display the first testimonial pair initially */
    .testimonial-pair:first-of-type {
        display: flex;
    }
    </style>
    