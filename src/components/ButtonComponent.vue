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

    <button type="button" class="btn btn-primary" @click="$emit('searchBarClick')">Search</button>

</template>