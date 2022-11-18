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
        cast: Array,
        index: Number
    },
    components: {
        SingleMember
    }
}

</script>

<template>

    <ul>
        <SingleMember v-for="member in cast " :member="member" />
    </ul>

</template>