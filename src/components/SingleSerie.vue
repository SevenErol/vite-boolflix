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

    <div class="col-3">

        <div class="info">
            <h2>{{ serie.original_name }}</h2>
            <p>{{ serie.original_language }}</p>
            <img :src="getImagePath(store.checkFlag(serie))" :alt="serie.original_language">
            <SingleStar v-for="n in this.store.starsVote(parseInt(this.serie.vote_average)) " />
            <SingleStarEmpty v-for="n in (5 - this.store.starsVote(parseInt(this.serie.vote_average)))" />
        </div>

        <div class="poster">
            <img :src="store.cover_URL + 'w342' + serie.backdrop_path" :alt="serie.original_name">
        </div>

    </div>


</template>

<style lang="scss" scoped>

</style>