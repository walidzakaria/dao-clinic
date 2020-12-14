import axios from 'axios';
import Cookies from 'js-cookie';

export default ({
  namespaced: true,
  state: {
    userInfo: {
      userId: 1,
      username: null,
      firstName: null,
      lastName: null,
      userMail: null,
    },
    userKey: Cookies.get('userKey') || '',
  },
  mutations: {
    updateInfo(state, newInfo) {
      state = newInfo;
    },
    updateUserKey(state, newKey) {
      state.userKey = newKey;
      Cookies.set('userKey', newKey, { expires: 30 });
    },
  },
  actions: {
    logout({ commit, state }) {
      axios({
        url: 'http://127.0.0.1:8000/api/auth/token/logout/',
        method: 'post',
        headers: {
          Authorization: `Token ${state.userKey}`,
        },
      }).then().catch(console.error.data);
      commit('updateUserKey', '');
    },
  },
  getters: {
    userInfo(state) {
      return state.userInfo;
    },
    userKey(state) {
      return state.userKey;
    },
    isAuthenticated(state) {
      return !!state.userKey;
    },
  },
});
