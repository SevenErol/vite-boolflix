<script>

import SingleCastMember from './SingleCastMember.vue';

import { store } from "../store";

export default {
    name: "CastList",
    components: {
        SingleCastMember
    },
    data() {
        return {
            store
        }
    },
    props: {
        castList: Array
    }
}


</script>

<template>

    <SingleCastMember v-for="( cast, index) in castList" :cast="cast" :index="index" />

</template>