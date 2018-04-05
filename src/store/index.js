import Vue from 'vue';
import Vuex from 'vuex';

import github from './Github/store'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    github
  }
});
