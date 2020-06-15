import Vue from 'vue';
import Vuex from 'vuex';
import corona from './modules/corona';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    corona,
  },
});
