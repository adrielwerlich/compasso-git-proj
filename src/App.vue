<template>
  <div id="app">
    <github-search-component></github-search-component>
  </div>
</template>

<script>
import GithubSearchComponent from './components/GithubSearchComponent.vue'

export default {
  name: 'App',
  components: {
    GithubSearchComponent
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
