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
    <span class="text-end">Total: {{ store.cardsList.length }} cards</span>
  </div>
</template>

<style scoped lang="scss"></style>