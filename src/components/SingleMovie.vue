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
        checkFlag(movie) {
            if (movie.original_language === "it") {
                return this.store.src = "../assets/img/italian_flag.png"
            } else if (movie.original_language === "en") {
                return this.store.src = "../assets/img/great_britain_flag.png"
            } else if (movie.original_language === "fr") {
                return this.store.src = "../assets/img/france_flag.png"

            }
        },
        getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    }
}

</script>

<template>

    <div>
        <h2>{{ movie.title }}</h2>
        <h2>{{ movie.original_title }}</h2>
        <p>{{ movie.original_language }}</p>
        <p>{{ movie.vote_average }}</p>
        <img :src="getImagePath(checkFlag(movie))" :alt="movie.original_language">
    </div>


</template>

<style lang="scss" scoped>

</style>