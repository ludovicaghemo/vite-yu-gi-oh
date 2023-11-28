<script>
//importare componenti
import axios from "axios";
import AppHeader from './components/AppHeader.vue';
import { store } from "./store.js";
import AppBody from './components/AppBody.vue';
import AppSelect from "./components/AppSelect.vue";

//dichiarare componenti
export default {
  data() {
    return {
      store: store
    };
  },
  created() {
    this.store.loading = true
    axios
      .get(this.store.apiUrl, {
        params: {
          num: 20,
          offset: 0
        },
      })
      .then((resp) => {
        //console.log(resp);
        this.store.cardsList = resp.data;
        this.store.loading = false;
      })
  },
  components: {
    AppHeader,
    AppBody,
    AppSelect
  },
  methods: {
    handleSelect() {
      axios.get(this.store.apiArchUrl, {
        params: {
          archetype: this.store.selectedOption,
          num: 20,
          offset: 0
        }
      }).then((resp) => {
        this.store.cardsList = resp.data;
      })
    }
  },
};
</script>

<template>
  <!-- utilizzare componenti-->
  <AppHeader />
  <AppSelect @showCards="handleSelect" />
  <AppBody />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
