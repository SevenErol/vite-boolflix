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
            }

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
        <ButtonComponent @searchBarClick="searchBar()" />
    </div>


</template>

<style lang="scss" scoped>

</style>