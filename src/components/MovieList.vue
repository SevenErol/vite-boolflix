<script>
// import single mobie component
import SingleMovie from "./SingleMovie.vue"

// import store JS object
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

    <!-- section movies  -->
    <div class="section_container p-3">

        <!-- section title  -->
        <h2 class="text-white">Lista film</h2>

        <!-- row with images covers and info -->
        <div class="row flex-nowrap my_row">
            <SingleMovie v-for="movie in store.results" :movie="movie" />
        </div>

    </div>




</template>

<style lang="scss" scoped>

</style>
