<template>
  <div id="app">
    <app-header />
    <app-body />
  </div>
</template>
<script>
  import Header from "./components/Header.vue"
  import Body from "./components/Body.vue"
  export default {
    name: 'app',
    components: {
      "app-header": Header,
      "app-body": Body,
    },

  }
</script>
<style>
  body {
    background-color: rgb(217, 247, 247)
  }

  #app {
    max-width: 1100px;
    margin: auto;
  }
</style>