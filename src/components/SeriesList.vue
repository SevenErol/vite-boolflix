<script>
import SingleSerie from "./SingleSerie.vue"

import { store } from '../store.js'

export default {
    name: "SeriesList",
    components: {
        SingleSerie
    },
    data() {
        return {
            store
        }
    }
}

</script>

<template>

    <div class="section_container p-3">
        <h2 class="text-white">Lista serie TV</h2>
        <div class="row flex-nowrap my_row">
            <SingleSerie v-for="serie in store.series" :serie="serie" />
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>