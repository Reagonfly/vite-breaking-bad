import { reactive } from 'vue'

export const store = reactive({
    cardsList: [],
    url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=',
    isLoaded: false,
    selectedGenre: 'Alien'
});