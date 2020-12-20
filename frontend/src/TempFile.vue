<template>
  <div id="app">
    <header class="container-fluid" id="app-header">
      <nav id="navbar"
      class="navbar navbar-expand-lg navbar-light bg-light is-transparent is-fixed-top"
      ref="navbar">
        <router-link class="navbar-brand" id="logo-link" to="/">
          <img id="logo" src="./assets/DAO-LOGO.png" alt="home logo">
        </router-link>
        <button class="navbar-toggler" type="button"
            @click.stop="toggleNavbar()">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div :class="collapseClasses" id="navbarSupportedContent"
          :style="collapseStyle" ref="mynav">
             <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <router-link class="nav-link" to="/" exact>HOME</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/about/" exact>ABOUT US</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/appointments/" exact>
                    APPOINTMENTS
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/prices/" exact>PRICES</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/contact/" exact="">CONTACT US</router-link>
                </li>
                <li v-if="!isAuthenticated" class="nav-item">
                  <router-link class="nav-link" to="/login/" exact="">LOGIN</router-link>
                </li>
                <li v-if="isAuthenticated" class="nav-item">
                  <button @click="logout()"
                    class="nav-link btn btn-link router-link-exact-active router-link-active">
                    LOGOUT
                  </button>
                </li>
                <!-- Dropdown -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                  WALIDPIANO
                </a>
                <div class="dropdown-menu.show">
                  <a class="dropdown-item" href="#">Link 1</a>
                  <a class="dropdown-item" href="#">Link 2</a>
                  <a class="dropdown-item" href="#">Link 3</a>
                </div>
              </li>
                <!--
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li> -->
            </ul>
            <!-- <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search"
                placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> -->
        </div>
      </nav>
    </header>
    <main class="container content">
      <router-view/>
    </main>
    <ChatBox/>
    <Footer/>
  </div>
</template>

<script>
// import VueNativeSock from 'vue-native-websocket';
// import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import ChatBox from './chat/ChatBox.vue';
import Footer from './home/PageFooter.vue';

export default {
  created() {
    document.title = 'DAO World';
    console.log('created');
    this.$nextTick(() => {
      console.log(this.isAuthenticated);
    });
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        const logo = document.getElementById('logo');
        const navClasses = navbar.classList;
        const logoClasses = logo.classList;
        if (document.documentElement.scrollTop >= 100) {
          if (navClasses.contains('shrink-nav') === false) {
            navClasses.toggle('shrink-nav');
            logoClasses.toggle('shrink-logo');
          }
        } else if (navClasses.contains('shrink-nav') === true) {
          navClasses.toggle('shrink-nav');
          logoClasses.toggle('shrink-logo');
        }
      });
    });
    // this.$options.sockets.onmessage = (data) => console.log(data);
  },
  components: {
    ChatBox,
    Footer,
  },
  data() {
    return {
      collapseClasses: {
        'navbar-collapse': true,
        collapse: true,
        collapsing: false,
        show: false,
      },
      collapseStyle: {},
    };
  },
  computed: {
    // ...mapState('user', ['userKey', 'userInfo']),
    ...mapGetters('user', ['userKey', 'isAuthenticated']),
  },
  methods: {
    ...mapActions('user', ['logout']),
    toggleNavbar() {
      const curr = this.collapseClasses;
      this.collapseClasses = {
        ...curr,
        ...{
          collapsing: true,
          collapse: false,
          show: false,
        },
      };

      setTimeout(() => {
        const navHeight = this.$refs.mynav.clientHeight;
        console.log(navHeight);
        this.collapseStyle = { height: '270px' };
        this.collapseClasses = {
          ...curr,
          ...{
            collapsing: false,
            collapse: true,
            show: !curr.show,
          },
        };
      }, 340);
    },
  },
};
</script>

<style>
#app {
  font-size: 1rem;
  line-height: 1.5;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}

header {
  position: fixed;
  opacity: 1;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  display: block;
}

.shrink-nav {
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
}

#logo-link {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
}

#navbar {
  padding-bottom: 0;
  padding-top: 0;
}

#logo {
  height: 85px;
  margin-top: 0;
  margin-bottom: 0;
  left: 10px;
  border-bottom: 6px solid #333;
  transition: width 2s, height 1s, margin 1s;
}

.shrink-logo {
  height: 60px !important;
}

nav ul a{
  border-bottom: 3px solid transparent;
}

nav ul a:hover {
  border-bottom: 3px solid #333;
}

.btn-link {
  border-bottom: 3px solid transparent;
  width: 100% !important;
}

/* .btn:focus {
  outline: none !important;
  box-shadow: none !important;
} */

.btn-link:hover {
  border-bottom: 3px solid #333;
}

.router-link-active {
  font-weight: 500;
}

main {
  position: relative !important;
  top: 140px;
  width: 100%;
  margin-bottom: 180px;
}

footer {
  position: relative;
}

</style>
