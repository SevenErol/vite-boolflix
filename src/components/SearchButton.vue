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

            if (this.store.searchText.length > 0) {
                this.store.params.query = this.store.searchText
                this.store.callApi(this.store.API_URL)
                this.store.searchText = ''
            }

        }
    },
    components: {
        ButtonComponent
    }
}

</script>

<template>


    <input type="text" v-model="store.searchText" @keyup.enter="searchBar()" class="me-3">
    <ButtonComponent @searchBarClick="searchBar()" />



</template>

<style lang="scss" scoped>

</style>