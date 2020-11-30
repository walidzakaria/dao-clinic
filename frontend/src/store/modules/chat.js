import axios from 'axios';

export default ({
  namespaced: true,
  state: {
    userId: null,
    userChats: [],
  },
  mutations: {
    getUserId(state, id) {
      state.userId = id;
    },
  },
  actions: {
    obtainUserId({ commit }) {
      const savedId = localStorage.getItem('savedId');
      if (!savedId) {
        commit('getUserId', savedId);
      } else {
        axios.get('/api/auth/get-code/')
          .then((result) => {
            commit('getUserId', result.data);
            localStorage.setItem('savedId', result.data);
          })
          .catch(console.error);
      }
    },
    getters: {
      userIdItem(state) {
        return state.userId;
      },
    },
  },
});
