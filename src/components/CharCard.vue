<script>
export default {
    props:{
        card: Object
    }
}
</script>



<template lang="">
    <div class="col-12 col-md-3 my-2">
        <div class="form-control card mx-2">
            <div class="card-img">
                <img class="img-fluid" :src="card.card_images[0].image_url" />
            </div>
            <div class="card-info text-center p-3">
                <h4>{{ card.name }}</h4>
                <p>{{ card.type }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
    
    .card{
        background-color: $base-color;
        width: 100%;
        height: 100%;

        h4{
            text-transform: uppercase;
            color: $bleached;
        }
    }
</style>