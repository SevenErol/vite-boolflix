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

    <div class="section_container p-3">

        <h2 class="text-white">Lista film</h2>
        <div class="row flex-nowrap my_row">
            <SingleMovie v-for="movie in store.results" :movie="movie" />
        </div>

    </div>




</template>

<style lang="scss" scoped>

</style>
