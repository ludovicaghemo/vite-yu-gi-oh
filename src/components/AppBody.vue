<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";
import AppLoading from "./AppLoading.vue";


export default {
    data() {
        return {
            store
        }
    },
    components: { AppCard, AppLoading }
}
</script>

<template>
    <div class="container pt-4">
        <AppLoading  v-if="store.loading"/>
        <div class="row row-cols-5 g-4" v-else>
            <div class="col" v-for="card in store.cardsList.data">
                <AppCard :card="card"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        width: 90%;
        max-width: 1100px;
        margin: 4rem auto;
        background-color: white;
        color: white;
        padding: 2rem;
    }
</style>