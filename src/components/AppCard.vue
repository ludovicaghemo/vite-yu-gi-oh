<script>
export default {
  props: {
    card: Object,
  },
};
</script>

<template>
  <div class="custom-card">
    <img :src="card.card_images[0].image_url_small" alt="">
    <h6 class="text-center my-3">{{ card.name }}</h6>
    <p class="text-center">{{ card.archetype ? card.archetype : "Nessun archetipo" }}</p>
  </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.custom-card {
  background-color: #d48f38;
  height: 100%;
  
  img {
    width: 100%;
    padding: 1rem;
  }

  h6 {
    font-size: .8rem;
  }

  p {
    color: black;
    font-size: .8rem;
  }
}
</style>
