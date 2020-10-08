import Vue from 'vue'
import App from './App.vue'
import vuex from 'vuex'

Vue.config.productionTip = false

new Vue({
  vuex,
  render: function (h) { return h(App) }
}).$mount('#app')
