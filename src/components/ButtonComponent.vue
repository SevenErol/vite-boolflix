<script>

import { store } from "../store"

export default {
    name: "ButtonComponent",
    data() {
        return {
            store
        }
    }
}

</script>

<template>

    <button @click="$emit('searchBarClick')">Search</button>

</template>