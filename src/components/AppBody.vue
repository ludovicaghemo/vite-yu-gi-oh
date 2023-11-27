<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";

export default {
    data() {
        return {
            store
        }
    },
    components: { AppCard }
}
</script>

<template>
    <div class="container pt-4">
        <div class="row">
            <div class="col-3 align-items-stretch" v-for="card in store.cardsList.data">
                <AppCard :card="card"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        width: 90%;
        max-width: 1100px;
        margin: 0 auto;
        background-color: #d48f38;
        color: white;
        padding: 0 2rem;
    }
</style>