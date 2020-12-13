export default ({
  namespaced: true,
  state: {
    userInfo: {
      userLogged: false,
      userId: 1,
      username: null,
      firstName: null,
      lastName: null,
      userMail: null,
    },
    userKey: 123,
  },
  mutations: {},
  actions: {},
  getters: {
    userInfo(state) {
      return state.userInfo;
    },
    userKey(state) {
      return state.userKey;
    },
  },
});
