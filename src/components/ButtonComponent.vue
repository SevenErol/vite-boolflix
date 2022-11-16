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

    <button @click="$emit('searchBar')">Search</button>

</template>