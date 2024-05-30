import { h, ref } from 'vue'

import daniel from '../assets/image-daniel.jpg'
import jonathan from '../assets/image-jonathan.jpg'
import kira from '../assets/image-kira.jpg'
import jeanette from '../assets/image-jeanette.jpg'

const getTestimonial = () => {
  const testimonials = ref([
    {
      name: 'Emma Hansen',
      testimonial:
      "I attended the Fantasy Festival last year, and it was an incredible experience! The variety of activities and events kept me engaged all weekend. Meeting my favorite authors and discovering new ones was a highlight, and the atmosphere was truly magical. The children's workshops were fantastic for my kids, sparking their creativity and love for reading. I can't wait to return this year and see what new adventures await!",
      image: jeanette,
    },
    {
      name: 'Søren Andersen',
      testimonial:
      "Fantasy Festival exceeded all my expectations! From fascinating panel discussions to immersive role-playing games, every moment was filled with excitement. The highlight for me was meeting RF Kuang and attending her lecture. The festival is perfect for all ages, and my family had a blast exploring the children's area and participating in creative workshops. It's a must-visit event for any fantasy fan!",
      image: daniel,
    },
    {
      name: 'Sofie Larsen',
      testimonial:
      "Attending the Fantasy Festival was an unforgettable experience! The themed areas and interactive activities were incredible. I particularly enjoyed the live-action role-play events and the chance to meet my favorite fantasy authors. The atmosphere was magical, and there was something for everyone, from kids to adults. We will definitely be coming back next year!",
      image: kira,
    },
    {
      name: 'Mads Nielsen',
      testimonial:
      "The Fantasy Festival is a dream come true for any fantasy enthusiast. The variety of workshops and panels provided so much insight and inspiration. My favorite part was the cosplay competition, where I saw amazing costumes and met fellow fans. The whole event was well-organized, and the staff were extremely friendly and helpful. I can't recommend it enough!",
      image: jonathan,
    },
  ])

  return { testimonials }
}

export default getTestimonial