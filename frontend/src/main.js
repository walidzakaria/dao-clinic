import Vue from 'vue';
import VueCookie from 'vue-cookie';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// import VueNativeSock from 'vue-native-websocket';
import NProgress from 'nprogress';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../node_modules/nprogress/nprogress.css';

// import vueConfig from '../vue.config';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueCookie);

// function getMyClient() {
//   return '5463360595343258887311041973949567202';
//   // console.log(Vue.$store.getters['chat/userIdItem']);
//   // return Vue.$store.getters['chat/userIdItem'];
//   // return this.$store;
// }

// Vue.use(VueNativeSock, `ws://127.0.0.1:8000/ws/chat/${getMyClient()}/`, {
//   reconnection: true,
//   reconnectionAttempts: 5,
//   reconnectionDelay: 3000,
// });

new Vue({
  router,
  store,
  components: {
  },
  render: (h) => h(App),
}).$mount('#app');

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  NProgress.done();
});
