import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Appointments from '../views/Appointments.vue';
import Prices from '../views/Prices.vue';
import ConstactUs from '../views/ContactUs.vue';
import VideoSession from '../home/VideoSession.vue';
import LoginForm from '../login/LoginPage.vue';
import SignupForm from '../login/SignupPage.vue';
import ForgotPassword from '../login/ForgotPassword.vue';
import ActivateUser from '../login/ActivateSuccess.vue';
import ResetPassword from '../login/ResetSuccess.vue';
import ResendActivation from '../login/ResendActivation.vue';
import MyAccount from '../login/MyAccount.vue';
import Logout from '../login/LogoutPage.vue';

import store from '../store';

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters['user/isAuthenticated']) {
    next();
    return;
  }
  next('/');
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters['user/isAuthenticated']) {
    next();
    return;
  }
  next('/login');
};

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/appointments',
    name: 'Appointments',
    component: Appointments,
  }, {
    path: '/prices',
    name: 'Prices',
    component: Prices,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ConstactUs,
  },
  {
    path: '/session/:sessionId',
    name: 'Session',
    component: VideoSession,
    props: true,
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/auth/activate/:uid/:token',
    name: 'Activate',
    component: ActivateUser,
  },
  {
    path: '/auth/password/reset/confirm/:uid/:token',
    name: 'ResetConfirm',
    component: ResetPassword,
  }, {
    path: '/auth/account/resend/activation',
    name: 'ResendActivation',
    component: ResendActivation,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupForm,
    beforeEnter: ifNotAuthenticated,
  }, {
    path: '/reset',
    name: 'Reset',
    component: ForgotPassword,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: '/me',
    name: 'Me',
    component: MyAccount,
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
  },
  {
    // otherwise redirect to home
    path: '*',
    redirect: '/',
  },
];

// const routes = [
//   { component: Home, path: '/' },
//   { component: About, path: '/about/' },
// ];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeResolve((to, from, next) => {
  next();
});

// eslint-disable-next-line consistent-return
// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/', '/about', '/appointments',
//      '/prices', '/contact', '/login', '/signup', '/reset'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   if (authRequired && !loggedIn) {
//     return next('/login');
//   }

//   next();
// });

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
});

export default router;
