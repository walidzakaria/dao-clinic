import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

export default ({
  namespaced: true,
  state: {
    clientId: Cookies.get('clientId') || '0000',
    conversation: [],
  },
  mutations: {
    updateClientId(state, newId) {
      state.clientId = newId;
      Cookies.set('clientId', newId, { expires: 365 });
    },
    updateConversation(state, chat) {
      state.conversation = chat;
    },
  },
  actions: {
    getClientId({ commit }) {
      return new Promise((resolve, reject) => {
        const savedId = Cookies.get('clientId');
        if (savedId) {
          commit('updateClientId', savedId);
          resolve(savedId);
        } else {
          axios.get('/api/auth/get-code/')
            .then((result) => {
              commit('updateClientId', result.data);
              resolve(result.data);
            })
            .catch((error) => {
              console.log(error.response.data);
              reject(error);
            });
        }
      });
    },
    getConversation({ commit }, roomId) {
      axios.get(`/api/chat/get-chat/${roomId}/`)
        .then((result) => {
          commit('updateConversation', result.data);
        })
        .catch(console.error);
    },
  },
  getters: {
    clientId(state) {
      return state.clientId;
    },
    conversation(state) {
      return state.conversation;
    },
  },
});
