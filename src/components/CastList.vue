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
        castList: Object
    }
}


</script>

<template>


    <li>{{ castList.name }}</li>


</template>