import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

export default ({
  namespaced: true,
  state: {
    userInfo: {
      id: Cookies.get('userInfo.id') || 0,
      username: Cookies.get('userInfo.username') || 0,
      firstName: Cookies.get('userInfo.firstName') || 0,
      lastName: Cookies.get('userInfo.lastName') || 0,
      email: Cookies.get('userInfo.email') || 0,
    },
    userKey: Cookies.get('userKey') || '',
  },
  mutations: {
    updateInfo(state, newInfo) {
      state = newInfo;
      Cookies.set('userInfo', newInfo, { expires: 30 });
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
    getUser({ commit, state }) {
      axios({
        url: 'http://127.0.0.1:8000/api/auth/users/me/',
        method: 'get',
        headers: {
          Authorization: `Token ${state.userKey}`,
        },
      }).then((result) => {
        commit('updateInfo', result.data);
      }).catch(console.error.data);
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
