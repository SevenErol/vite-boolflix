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
        cast: Array
    },
    components: {
        SingleMember
    }
}

</script>

<template>

    <SingleMember v-for="member in cast " :member="member" />

</template>