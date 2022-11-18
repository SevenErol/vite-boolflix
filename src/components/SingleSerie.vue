<script>
import { store } from "../store.js"
import SingleStar from "./SingleStar.vue"
import SingleStarEmpty from "./SingleStarEmpty.vue"

export default {
    name: "SingleSerie",
    data() {
        return {
            store
        }
    },
    props: {
        serie: Object
    },
    methods: {
        getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    },
    computed: {
        stars() {
            return this.store.integerVote = this.store.starsVote(parseInt(this.serie.vote_average))
        }

    },
    components: {
        SingleStar,
        SingleStarEmpty
    }
}

</script>

<template>

    <div class="col-4">

        <div class="info">
            <h5> Titolo: <span>{{ serie.original_name }}</span></h5>
            <h5>Voto:
                <span>
                    <SingleStar v-for="n in this.store.starsVote(parseInt(this.serie.vote_average)) " />
                    <SingleStarEmpty v-for="n in (5 - this.store.starsVote(parseInt(this.serie.vote_average)))" />
                </span>
            </h5>
            <div class="language_flag mb-2">
                <span>{{ serie.original_language }}</span>
                <img :src="getImagePath(store.checkFlag(serie))" :alt="serie.original_language">
            </div>

            <p>{{ serie.overview }}</p>


        </div>

        <div class="poster" v-if="serie.backdrop_path !== null">
            <img :src="store.cover_URL + 'original' + serie.backdrop_path" :alt="serie.original_name">
        </div>

        <div class="poster not_found" v-else>
            <img src="../assets/img/not_available.webp" alt="">
        </div>

    </div>


</template>

<style lang="scss" scoped>

</style>