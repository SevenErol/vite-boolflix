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

    <ul>
        <SingleCastMember v-for="cast in castList" :cast="cast" />
    </ul>

</template>