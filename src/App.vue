<script>
//importare AppHeader 
import axios from "axios";
import AppHeader from './components/AppHeader.vue';
import { store } from "./store.js";
import AppBody from './components/AppBody.vue';

//dichiarare AppHeader 
export default {
  data() {
    return {
      store: store
    };
  },
  created() {
    this.store.loading = true
    axios
      .get(this.store.apiUrl)
      .then((resp) => {
        //console.log(resp);
        this.store.cardsList = resp.data;
        this.store.loading = false;
      })
  },
  components: {
    AppHeader,
    AppBody,
},
};
</script>

<template>
  <!-- utilizzare AppHeader e AppBody-->
  <AppHeader />
  <AppBody />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
