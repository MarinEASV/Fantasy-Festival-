import { ref } from 'vue'

import Havfruedronning from '../assets/videos/Havfruedronning_animation.mov'
import Gnist from '../assets/videos/Gnist_animation.mov'
import Gygaz from '../assets/videos/Gygaz_animation.mov'
import Malice from '../assets/videos/Malice_animation.mov'
import Arkivaren from '../assets/videos/Arkivaren_animation.mov'


const getCharacter = () => {
    const characters = ref([
        {
            name: 'Havfruedronning',
            video: Havfruedronning,
        },
        {
            name: 'Gnist',
            video: Gnist,
        },
        {
            name: 'Gygaz',
            video: Gygaz,
        },
        {
            name: 'Malice',
            video: Malice,
        },
        {
            name: 'Arkivaren',
            video: Arkivaren,
        },
    ])

    return { characters }
}

export default getCharacter
