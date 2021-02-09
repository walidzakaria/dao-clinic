import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

export default ({
  namespaced: true,
  state: {
    userInfo: {
      id: Cookies.get('id') || 0,
      username: Cookies.get('username') || '',
      firstName: Cookies.get('firstName') || '',
      lastName: Cookies.get('lastName') || '',
      email: Cookies.get('email') || '',
      phone: Cookies.get('phone') || '',
    },
    token: Cookies.get('token') || null,
  },
  mutations: {
    updateUserInfo(state, newInfo) {
      if (!newInfo) {
        state.userInfo = {
          id: 0,
          username: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
        };
        Cookies.remove('id');
        Cookies.remove('username');
        Cookies.remove('firstName');
        Cookies.remove('lastName');
        Cookies.remove('email');
        Cookies.remove('phone');
      } else {
        state.userInfo = newInfo;
        Cookies.set('id', newInfo.id, { expires: 30 });
        Cookies.set('username', newInfo.username, { expires: 30 });
        Cookies.set('firstName', newInfo.firstName, { expires: 30 });
        Cookies.set('lastName', newInfo.lastName, { expires: 30 });
        Cookies.set('email', newInfo.email, { expires: 30 });
        Cookies.set('phone', newInfo.phone, { expires: 30 });
      }
    },
    retrieveToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    retrieveIsDoctor() {
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: '/api/chat/is-doctor/',
        }).then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: '/api/auth/token/login/',
          data: {
            password: credentials.password,
            email: credentials.email,
          },
        }).then((response) => {
          const token = response.data.auth_token;
          Cookies.set('token', token, { expires: 30 });
          context.commit('retrieveToken', token);
          axios.defaults.headers.common.Authorization = `Token ${context.state.token}`;
          resolve(response);
        }).catch((error) => {
          console.log(error.response.data);
          reject(error);
        });
      });
    },
    destroyToken(context) {
      axios.defaults.headers.common.Authorization = `Token ${context.state.token}`;
      return new Promise((resolve, reject) => {
        axios({
          url: '/api/auth/token/logout/',
          method: 'post',
        }).then((response) => {
          Cookies.remove('token');
          context.commit('retrieveToken', '');
          console.log(response);
          axios.defaults.headers.common.Authorization = '';
          context.commit('updateUserInfo', null);
          resolve(response);
        }).catch((error) => {
          console.log(error.data);
          Cookies.remove('token');
          context.commit('retrieveToken', '');
          axios.defaults.headers.common.Authorization = '';
          reject(error);
        });
      });
    },
    retrieveUserData(context) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/api/auth/users/me/',
          method: 'get',
        }).then((result) => {
          const resultInfo = {
            id: result.data.id,
            username: result.data.username,
            firstName: result.data.first_name,
            lastName: result.data.last_name,
            email: result.data.email,
            phone: result.data.phone,
          };
          console.log(resultInfo);
          console.log(result);
          context.commit('updateUserInfo', resultInfo);
          resolve(result);
        }).catch((error) => {
          console.log(error.data);
          reject(error);
        });
      });
    },
    register(context, newUser) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: '/api/auth/users/',
          data: newUser,
        }).then((response) => {
          resolve(response);
        }).catch((error) => {
          const result = error.response.data;
          console.log(result);
          reject(result);
        });
      });
    },
    updateProfile(context, newUser) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'patch',
          url: '/api/auth/users/me/',
          data: newUser,
        }).then((response) => {
          resolve(response);
        }).catch((error) => {
          const result = error.response.data;
          console.log(result);
          reject(result);
        });
      });
    },
    resetPassword(context, email) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: '/api/auth/users/reset_password/',
          data: {
            email,
          },
        }).then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    resetPasswordConfirm(context, data) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: '/api/auth/users/reset_password_confirm/',
          data,
        }).then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    activateUser(context, data) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: '/api/auth/users/activation/',
          data: {
            uid: data.uid,
            token: data.token,
          },
        }).then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    resendActivate(context, email) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: '/api/auth/users/resend_activation/',
          data: {
            email,
          },
        }).then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    deactivate() {
      return new Promise((resolve, reject) => {
        axios({
          method: 'patch',
          url: '/api/auth/users/me/change/',
        }).then((response) => {
          console.log(response);
          resolve(response);
        }).catch((error) => {
          console.log(error);
          reject(error);
        });
      });
    },
  },
  getters: {
    userInfo(state) {
      return state.userInfo;
    },
    token(state) {
      return state.token;
    },
    isAuthenticated(state) {
      const result = !!state.token;
      if (result) {
        console.log('this user is authenticated');
        axios.defaults.headers.common.Authorization = `Token ${state.token}`;
      }
      return result;
    },
    loginName(state) {
      return state.username;
    },
  },
});
