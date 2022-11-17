<script>

import MovieList from "./MovieList.vue"
import SeriesList from "./SeriesList.vue";

export default {
    name: "AppMain",
    components: {
        MovieList,
        SeriesList
    }
}

</script>

<template>

    <div class="main_container">

        <MovieList />

        <SeriesList />

    </div>

</template>

<style lang="scss" scoped>

</style>
