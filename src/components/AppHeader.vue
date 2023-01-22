<script>
export default {
    
}
</script>

<template lang="">
    <header class="container-fluid color-white">
        <div class="row">
            <div class="col-12 g-2 d-flex flex-wrap align-items-center g-2">
                <img class="mx-2" src="https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg" alt="">
                <h2>Yu-Gi-Oh!</h2>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;

    header{
        height: 80px;
        background-color: $bleached;

        .row{
            .col-12{
                img{
                    height: 80px;
                    width: 80px;
                    object-fit: contain;
                }
                h2{
                    font-weight: 500;
                } 
            }
        }
    }

    

</style>