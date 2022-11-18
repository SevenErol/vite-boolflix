<script>

import { store } from "../store";

import SingleMember from "./SingleMember.vue"

export default {
    name: "SingleCastMember",
    data() {
        return {
            store
        }
    },
    props: {
        object: Object
    },
    components: {
        SingleMember
    },
    methods: {
        increment() {

            if (this.store.activeIndex === this.store.castMovies.length) {
                return this.store.activeIndex = 0
            }

            return this.store.activeIndex = this.store.activeIndex + 1
        }
    }
}

</script>

<template>

    <li>{{ object.name }}</li>

</template>