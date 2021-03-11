import Vue from 'vue';
import Vuex from 'vuex';

import userModule from './modules/users';
import chatModule from './modules/chat';
import reservationModule from './modules/reservation';
import countries from './modules/country';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: {
  },
  actions: {
  },
  modules: {
    user: userModule,
    chat: chatModule,
    res: reservationModule,
    country: countries,
  },
});
