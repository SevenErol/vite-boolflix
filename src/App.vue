<script>

import { store } from './store.js';
import axios from 'axios'

export default {
  name: "App",
  data() {
    return {
      store
    }
  },
  mounted() {
    this.store.methods.callApi(this.store.API_URL)
  }
}

</script>

<template>

</template>

<style lang="scss" scoped>

</style>
