<script>
export default {
  props: {
    card: Object,
  },
};
</script>

<template>
      <div class="custom-card">
        <img :src="card.card_images[0].image_url" alt="">
        <h6 class="text-center mb-2">{{ card.name }}</h6>
        <p class="text-center">{{ card.archetype }}</p>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;
.custom-card {
    img {
    width: 100%;
    }
    p {
        color: black;
    }
}
</style>
