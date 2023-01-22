<script>
import { store } from '../store.js';

export default {
    data(){
        return{
            store,
            archetypes:[
                'Alien',
                'Ancient Gear',
                'Armed Dragon',
                'Cipher',
                'Dark Magician',
                'Destiny HERO',
                'Dragonmaid',
                'Elemental HERO',
                'Evil HERO',
                'Gaia The Fierce Knight',
                'Laval',
                'Paleozoic',
                'Six Samurai',
                'Watt',
                'Zoodiac'
            ],
        }
    }
    
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 p-2 d-flex align-items-center w-100">
                <select class="mt-2 mx-3 p-2" v-model="store.selectedGenre" @change="$emit('search')">
                    <option v-for="(item, index) in archetypes" :value="item">{{ item }}</option>
                </select>
                <p>{{ index }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;

    .col-12{
        background-color: $myboi;
        
        select{
            background-color: $bleached;
            width: 200px;
            text-align: center;
            border-radius: 5px;
            
            option{
                font-weight: 400;
            }
        }
    }

</style>