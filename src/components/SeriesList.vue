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

    <SingleSerie v-for="serie in store.series" :serie="serie" />


</template>

<style lang="scss" scoped>

</style>