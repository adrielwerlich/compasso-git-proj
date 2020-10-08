import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    searchQuery: '',
    user: null,
  },

  actions: {
    async search( {commit, state} ) {
      try {
        const { data } = await axios.get(`https://api.github.com/users/${state.searchQuery}`)
        commit('SET_USER', data)
      } catch (error) {
        
      }
    }
  },

  mutations: {
    'SET_SEARCH_QUERY': (state, payload) => state.searchQuery = payload,
    'SET_USER': (state, payload) => state.user = payload
  },

})