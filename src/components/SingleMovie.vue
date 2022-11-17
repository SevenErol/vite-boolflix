<script>
import { store } from "../store.js"
import SingleStar from "./SingleStar.vue"
import SingleStarEmpty from "./SingleStarEmpty.vue"

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
        SingleStarEmpty
    }
}

</script>

<template>

    <div class="col-3">
        <div class="info">

            <h5 class="m-0"> Titolo: <span>{{ movie.title }}</span></h5>
            <h5 class="m-0">Titolo originale: <span>{{ movie.original_title }}</span></h5>
            <h5 class="m-0">Voto:
                <span>
                    <SingleStar v-for="n in this.store.starsVote(parseInt(this.movie.vote_average)) " />
                    <SingleStarEmpty v-for="n in (5 - this.store.starsVote(parseInt(this.movie.vote_average)))" />
                </span>
            </h5>
            <div class="language_flag">
                <span>{{ movie.original_language }}</span>
                <img :src="getImagePath(store.checkFlag(movie))" :alt="movie.original_language">
            </div>

            <p class="m-0">{{ movie.overview }}</p>



        </div>

        <div class="poster">

            <img :src="store.cover_URL + 'w342' + movie.backdrop_path" :alt="movie.original_title">

        </div>


    </div>


</template>

<style lang="scss" scoped>

</style>