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

Vue.use(VueRouter);

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
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupForm,
  }, {
    path: '/reset',
    name: 'Reset',
    component: ForgotPassword,
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

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
});

export default router;
