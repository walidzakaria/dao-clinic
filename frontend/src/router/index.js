import Vue from 'vue';
import VueRouter from 'vue-router';
import Cookies from 'js-cookie';
import Home from '../views/Home.vue';

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
  const currentLink = window.location.href;
  console.log('current link', currentLink);
  Cookies.set('currentLink', currentLink, { expires: 1 });
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
    component: () => import('../views/About.vue'),
  },
  {
    path: '/booking',
    name: 'Booking',
    component: () => import('../views/Booking.vue'),
  }, {
    path: '/doctors',
    name: 'Doctors',
    component: () => import('../views/OurDoctors.vue'),
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue'),
  }, {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/BlogIndex.vue'),
  }, {
    path: '/blog/:title',
    name: 'BlogDetails',
    component: () => import('../views/BlogDetails.vue'),
  },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: ConstactUs,
  // },
  {
    path: '/session/:sessionId',
    name: 'Session',
    component: () => import('../home/VideoSession.vue'),
    props: true,
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/Doctor',
    name: 'DoctorSession',
    component: () => import('../home/DoctorSession.vue'),
    props: false,
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/my-schedule',
    name: 'MyAppointments',
    component: () => import('../login/UserSchedule.vue'),
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/auth/activate/:uid/:token',
    name: 'Activate',
    component: () => import('../login/ActivateSuccess.vue'),
  },
  {
    path: '/auth/password/reset/confirm/:uid/:token',
    name: 'ResetConfirm',
    component: () => import('../login/ResetSuccess.vue'),
  }, {
    path: '/auth/account/resend/activation',
    name: 'ResendActivation',
    component: () => import('../login/ResendActivation.vue'),
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../login/LoginPage.vue'),
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../login/SignupPage.vue'),
    beforeEnter: ifNotAuthenticated,
  }, {
    path: '/reset',
    name: 'Reset',
    component: () => import('../login/ForgotPassword.vue'),
    beforeEnter: ifNotAuthenticated,
  },
  // {
  //   path: '/me',
  //   name: 'Me',
  //   component: MyAccount,
  //   beforeEnter: ifAuthenticated,
  // },
  {
    path: '/chat-admin',
    name: 'ChatAdmin',
    component: () => import('../chat/ChatAdmin.vue'),
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import('../views/PaymentStatus.vue'),
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../login/LogoutPage.vue'),
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

// router.afterEach((to) => {
//   console.log('from before', to.name);
// });

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
