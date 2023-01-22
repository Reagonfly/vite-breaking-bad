<script>
import CharCard from './CharCard.vue';
import { store } from '../store.js';

export default {
    components:{
        CharCard
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template lang="">
    <main class="container">
        <div class="row g-2">
            <CharCard v-for="(item, index) in store.cardsList" :key="index" :card="item" />
        </div>
    </main>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;

    main{
        background-color: $bleached;
        margin-top: 4rem;
    }
</style>