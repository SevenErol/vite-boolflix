<script>
import { store } from "../store.js"

export default {
    name: "SingleMovie",
    data() {
        return {
            store
        }
    },
    props: {
        movie: Object
    },
    methods: {
        getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    },
    computed: {
        stars() {
            return this.store.integerVote = this.store.starsVote(parseInt(this.movie.vote_average))
        }

    }
}

</script>

<template>

    <div>
        <h2>{{ movie.title }}</h2>
        <h2>{{ movie.original_title }}</h2>
        <p>{{ movie.original_language }}</p>
        <p>{{ stars }}</p>
        <img :src="getImagePath(store.checkFlag(movie))" :alt="movie.original_language">
        <img :src="store.cover_URL + 'w342' + movie.backdrop_path" :alt="movie.original_title">
    </div>


</template>

<style lang="scss" scoped>

</style>