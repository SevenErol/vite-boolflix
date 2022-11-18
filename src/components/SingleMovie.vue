<script>
import { store } from "../store.js"

import SingleStar from "./SingleStar.vue"
import SingleStarEmpty from "./SingleStarEmpty.vue"

import CastList from "./CastList.vue"

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

    },
    components: {
        SingleStar,
        SingleStarEmpty,
        CastList
    }
}

</script>

<template>

    <div class="col-4">
        <div class="info">

            <h5> Titolo: <span>{{ movie.title }}</span></h5>
            <h5>Titolo originale: <span>{{ movie.original_title }}</span></h5>
            <h5>Voto:
                <span>
                    <SingleStar v-for="n in this.store.starsVote(parseInt(this.movie.vote_average)) " />
                    <SingleStarEmpty v-for="n in (5 - this.store.starsVote(parseInt(this.movie.vote_average)))" />
                </span>
            </h5>
            <div class="language_flag mb-2">
                <span class="me-2">{{ movie.original_language }}</span>
                <img :src="getImagePath(store.checkFlag(movie))" :alt="movie.original_language">
            </div>

            <p>{{ movie.overview }}</p>

            <ul>
                <CastList v-for="cast in movie.cast" :castList="cast" />
            </ul>



        </div>

        <div class="poster" v-if="movie.backdrop_path !== null">

            <img :src="store.cover_URL + 'original' + movie.backdrop_path" :alt="movie.original_title">

        </div>

        <div class="poster not_found" v-else>
            <img src="../assets/img/not_available.webp" alt="">
        </div>

    </div>


</template>

<style lang="scss" scoped>

</style>