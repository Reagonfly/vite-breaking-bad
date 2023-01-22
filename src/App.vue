<script>
import AppLoader from './components/AppLoader.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppSerch from './components/AppSerch.vue';

import { store } from './store.js';
import axios from 'axios';

export default {
  components:{
    AppLoader,
    AppSerch,
    AppHeader,
    AppMain
  },
  data(){
    return{
      store
    }
  },

  created(){
    this.getCardsList();
  },

  methods:{
    getCardsList(){
      let myUrl = `${store.url}${store.selectedGenre}`;

      axios.get(myUrl).then((response) => {
        store.cardsList = response.data.data;
        setTimeout (() => {
          store.isLoaded = true;
        }, 2000)
      });
    }
  }
}

</script>

<template lang="">
  <div v-if="store.isLoaded">
    <AppHeader />
    <AppSerch @search="getCardsList" />
    <AppMain />
  </div>
  <div v-else>
    <AppLoader />
  </div>
</template>

<style lang="scss">
  @use '../src/styles/generals.scss' as *;
  
</style>
