<script>
import cardsList from './cardsList.vue';
import DeckCards from './DeckCards.vue'

export default {
    components: {
        DeckCards,
        cardsList,
    }
}
</script>

<template lang="">
    <main>
        <DeckCards />
        <cardsList />
    </main>
</template>

<style lang="">
    
</style>