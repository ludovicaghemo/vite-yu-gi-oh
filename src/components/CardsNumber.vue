<script>
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <p class="text-end">Total: {{ store.cardsList.length }} cards</p>
  </div>
</template>

<style scoped lang="scss">
</style>