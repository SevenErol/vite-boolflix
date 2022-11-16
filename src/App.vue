<script>
import AppMain from "./components/AppMain.vue"
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
    AppMain
  }
}

</script>

<template>

  <AppMain />

</template>

<style lang="scss" scoped>

</style>
