import axios from 'axios';
import Cookies from 'js-cookie';

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
        if (savedId && savedId.length !== 0 && savedId !== '0000') {
          commit('updateClientId', savedId);
          console.log('saved id: ', savedId);
          resolve(savedId);
        } else {
          axios.get('/api/auth/get-code/')
            .then((response) => {
              commit('updateClientId', response.data);
              console.log('new id: ', response);
              resolve(response.data);
            })
            .catch((error) => {
              console.log(error.response.data);
              reject(error);
            });
        }
      });
    },
    getConversation({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios.get(`/api/chat/get-chat/${state.clientId}/`)
          .then((result) => {
            commit('updateConversation', result.data);
            resolve(result.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    getCSConversation(context, roomName) {
      console.log('room name: ', roomName);
      return new Promise((resolve, reject) => {
        axios.get(`/api/chat/get-chat/${roomName}/`)
          .then((result) => {
            resolve(result.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    getOnlineUsers() {
      return new Promise((resolve, reject) => {
        axios.get('/api/chat/active-rooms')
          .then((result) => {
            resolve(result.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
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
