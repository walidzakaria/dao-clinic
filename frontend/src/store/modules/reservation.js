// a59ac0f74da9403ea59b17dd76c4ee15
import axios from 'axios';
// import Cookies from 'js-cookie';

export default ({
  namespaced: true,
  state: {
    currency: null,
  },
  mutations: {
    updateCurrency(state, newData) {
      state.currency = JSON.parse(newData.rates) || null;
    },
  },
  actions: {
    getCurrency({ commit }) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: '/api/appointments/get_currency/',
        }).then((response) => {
          console.log(response);
          commit('updateCurrency', response.data);
          resolve(response);
        }).catch((error) => {
          console.log(error);
          reject(error);
        });
      });
    },
  },
  getters: {
  },
});
