<template>
  <div id="github-search" style="padding: 2%; margin: 2% 0;">
    <div id="inputs" style="display: flex;">
      <input 
        type="text" 
        name="search-input-field" 
        placeholder="Insira aqui o nome ou id do usuário que você deseja encontrar" 
        v-model="searchInput"
        @input="search()"
        style="width: 60%; border-style: double; margin: 0 auto;"
      >
      
    </div>

  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'search-component',
  computed: {
    ...mapState(['searchString']),
    searchInput: {
      get() {
        return this.searchString;
      },
      set(val) {
        return this.setSearchString(val);
      }
    }
  },
  data() {
    return {
      // searchInput: '',
    }
  },
  methods: {
    ...mapActions(['setSearchString', 'searchUser']),
    search() {
      if (this.searchInput && this.searchInput.length > 1) {
        this.searchUser()
      }
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
