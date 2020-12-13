import axios from 'axios';
import Cookies from 'js-cookie';

export default ({
  namespaced: true,
  state: {
    clientId: '0000',
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
    async getClientId({ commit }) {
      const savedId = Cookies.get('clientId');
      if (savedId) {
        commit('updateClientId', savedId);
      } else {
        await axios.get('http://127.0.0.1:8000/api/auth/get-code/')
          .then((result) => {
            commit('updateClientId', result.data);
            return result.data;
          })
          .catch(console.error);
      }
    },
    getConversation({ commit }, roomId) {
      axios.get(`http://localhost:8000/api/chat/get-chat/${roomId}/`)
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
