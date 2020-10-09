import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    searchString: '',
    user: null,
    repos: null,
    loading: false,
    loadingRepos: false,
  },

  actions: {
    setSearchString({commit}, searchString) {
      commit('SET_SEARCH_STRING', searchString);
    },
    async searchUser( {commit, state} ) {
      debugger
      commit('SET_LOADING', true)
      try {
        const { data } = await axios.get(`https://api.github.com/users/${state.searchString}`)
        commit('SET_USER', data)
      } catch (error) {
        console.log('error in searching user', error)
      }
      commit('SET_LOADING', false)
    },
    async displayRepos( {commit, state} ) {
      debugger
      commit('SET_LOADING_REPOS', true)
      try {
        const { data } = await axios.get(`https://api.github.com/users/${state.user.login}/repos`)
        commit('SET_REPOS', data)
      } catch (error) {
        console.log('error in searching user', error)
      }
      commit('SET_LOADING_REPOS', false)
    },
  },

  mutations: {
    'SET_SEARCH_STRING': (state, payload) => state.searchString = payload,
    'SET_USER': (state, payload) => state.user = payload,
    'SET_REPOS': (state, payload) => state.repos = payload,
    'SET_LOADING': (state, payload) => state.loading = payload,
    'SET_LOADING_REPOS': (state, payload) => state.loadingRepos = payload
  },

})