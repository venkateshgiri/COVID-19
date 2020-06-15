import axios from 'axios';

export default {
  state: {
    globals: {},
    countries: [],
  },
  getters: {

  },
  mutations: {
    SET_DAILY_REPORT_SUMMARY(state, payload) {
      state.globals = payload.Global;
      state.countries = payload.Countries;
    },
  },
  actions: {
    async GET_DAILY_REPORT_SUMMARY({ commit }) {
      const { data } = await axios.get('https://api.covid19api.com/summary');
      commit('SET_DAILY_REPORT_SUMMARY', data);
    },
  },
};
