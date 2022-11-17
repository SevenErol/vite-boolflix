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

    <div class="movie_container p-3">

        <div class="row flex-nowrap">
            <SingleMovie v-for="movie in store.results" :movie="movie" />
        </div>

    </div>




</template>

<style lang="scss" scoped>

</style>
