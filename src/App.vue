<script>

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
  }
}

</script>

<template>

</template>

<style lang="scss" scoped>

</style>
