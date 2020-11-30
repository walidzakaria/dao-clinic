import Vue from 'vue';
import Vuex from 'vuex';

import userModule from './modules/users';
import chatModule from './modules/chat';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users: userModule,
    chat: chatModule,
  },
});
