<script>

import { store } from "../store";


export default {
    name: "SingleMember",
    data() {
        return {
            store
        }
    },
    props: {
        member: Object
    }
}


</script>

<template>

    <li>{{ member.character }}</li>

</template>