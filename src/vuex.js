import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    searchQuery: '',
    user: null,
    loading: false,
  },

  actions: {
    async searchUser( {commit, state} ) {
      try {
        const { data } = await axios.get(`https://api.github.com/users/${state.searchQuery}`)
        commit('SET_USER', data)
      } catch (error) {
        console.log('error in searching user', error)
      }
    },
    async searchRepo( {commit, state} ) {
      try {
        const { data } = await axios.get(`https://api.github.com/users/${state.user.id}/repos`)
        commit('SET_USER', data)
      } catch (error) {
        console.log('error in searching user', error)
      }
    },
  },

  mutations: {
    'SET_SEARCH_QUERY': (state, payload) => state.searchQuery = payload,
    'SET_USER': (state, payload) => state.user = payload,
    'SET_LOADING': (state, payload) => state.loading = payload
  },

})