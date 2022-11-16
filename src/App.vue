<script>
import AppMain from "./components/AppMain.vue"
import AppHeader from "./components/AppHeader.vue";
import { store } from './store.js';

export default {
  name: "App",
  data() {
    return {
      store
    }
  },
  mounted() {
    this.store.callApi(this.store.API_URL)
  },
  components: {
    AppMain,
    AppHeader
  }
}

</script>

<template>

  <AppHeader />

  <AppMain />

</template>

<style lang="scss" scoped>

</style>
