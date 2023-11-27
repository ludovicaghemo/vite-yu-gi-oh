<script>
//importare AppHeader 
import AppHeader from './components/AppHeader.vue';

//dichiarare AppHeader 
export default {
  components: {
    AppHeader,
  },
};
</script>

<template>
<!-- utilizzare AppHeader -->
<AppHeader />

</template>

<style lang="scss">
@use "./style/general.scss";
</style>
