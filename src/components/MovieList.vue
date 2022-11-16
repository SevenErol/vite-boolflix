<script>
import SingleMovie from "./SingleMovie.vue"

import { store } from '../store.js'

export default {
    name: "MovieList",
    components: {
        SingleMovie
    },
    data() {
        return {
            store
        }
    }
}

</script>

<template>

    <SingleMovie v-for="movie in store.results" :movie="movie" />


</template>

<style lang="scss" scoped>

</style>
