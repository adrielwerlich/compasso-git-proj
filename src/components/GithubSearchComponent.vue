<template>
  <div id="github-search">
    <input 
      type="text" 
      name="search-input-field" 
      placeholder="Insira aqui o nome ou id do usuário que você deseja encontrar" 
      v-model="searchInput"
      @input="search()"
    >
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      searchInput: '',
    }
  },
  methods: {
    search() {
      
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
