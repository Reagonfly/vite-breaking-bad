<script>
import { store } from '../store.js';

export default {
    data(){
        return{
            store
        }
    }
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="text-center mt-4">
                    <h3> Founded {{ store.cardsList.length }} Cards</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;

    h3{
        color: $bleached;
    }
    
</style>