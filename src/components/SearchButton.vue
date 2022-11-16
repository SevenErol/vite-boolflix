<script>

import { store } from '../store.js'

import ButtonComponent from "./ButtonComponent.vue";

export default {
    name: "SearchButton",
    data() {
        return {
            store
        }
    },
    methods: {
        searchBar() {
            this.store.params.query = this.store.searchText
            this.store.callApi(this.store.API_URL)
        }
    },
    components: {
        ButtonComponent
    }
}

</script>

<template>

    <div>
        <input type="text" v-model="store.searchText">
        <ButtonComponent @searchBar="searchBar()" />
    </div>


</template>

<style lang="scss" scoped>

</style>