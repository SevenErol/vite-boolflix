<script>
import { store } from "../store";

import SearchButton from './SearchButton.vue';

export default {
    name: "AppHeader",
    components: {
        SearchButton
    },
    data() {
        return {
            store
        }
    }
}

</script>

<template>

    <header id="site_header" class="p-3">
        <div class="row justify-content-between">
            <div class="col-2">
                <img :src="store.cover_URL + 'w342' + store.netflix_logo" alt="" class="img-fluid p-3">
            </div>
            <div class="col-4 d-flex align-items-center">
                <SearchButton />
            </div>

        </div>

    </header>

</template>

<style lang="scss" scoped>

</style>