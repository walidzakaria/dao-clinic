import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
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
