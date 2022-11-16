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
    }
}

</script>

<template>

    <div>
        <h2>{{ movie.title }}</h2>
        <h2>{{ movie.original_title }}</h2>
        <p>{{ movie.original_language }}</p>
        <p>{{ movie.vote_average }}</p>
    </div>


</template>

<style lang="scss" scoped>

</style>