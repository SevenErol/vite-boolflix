<script>
import { store } from "../store.js"

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
    }
}

</script>

<template>

    <div>
        <h2>{{ serie.original_name }}</h2>
        <p>{{ serie.original_language }}</p>
        <p>{{ serie.vote_average }}</p>
        <img :src="getImagePath(store.checkFlag(serie))" :alt="serie.original_language">
        <img :src="store.cover_URL + 'w342' + serie.backdrop_path" :alt="serie.original_name">
    </div>


</template>

<style lang="scss" scoped>

</style>