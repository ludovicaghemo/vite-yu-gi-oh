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
    <select class="form-select w-25" aria-label="Default select example" v-model="store.selectedOption"
        @change="$emit('showCards')">
        <option value="">Choose an archetype</option>
        <option value="Alien">Alien</option>
        <option value="Ally of Justice">Ally of Justice</option>
        <option value="Ancient Gear">Ancient Gear</option>
    </select>
</template>

<style lang="scss" scoped>

</style>