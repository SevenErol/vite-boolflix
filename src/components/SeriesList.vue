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

    <div class="section_container">
        <div class="row flex-nowrap p-3">
            <SingleSerie v-for="serie in store.series" :serie="serie" />
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>