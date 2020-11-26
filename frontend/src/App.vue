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
                    <router-link class="nav-link" to="/contact/">CONTACT US</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/">LOGIN</router-link>
                </li>
                <!-- Dropdown -->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Dropdown link
      </a>
      <div class="dropdown-menu">
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
      <button class="btn btn-primary">GO</button>
    </main>
    <ChatBox/>
    <Footer/>
  </div>
</template>

<script>
import ChatBox from './chat/ChatBox.vue';
import Footer from './home/PageFooter.vue';

export default {
  created() {
    document.title = 'DAO World';
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
        show: false, // initial state
      },
      collapseStyle: {},
    };
  },
  methods: {
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
        this.collapseStyle = { height: '195px' };
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

nav ul a {
  border-bottom: 3px solid transparent;
}

nav ul a:hover {
  border-bottom: 3px solid #333;
}

.router-link-active {
  font-weight: 500;
}

main {
  position: relative !important;
  top: 140px;
  width: 100%;
}

footer {
  position: relative;
}
/* #nav {
  padding: 30px;
  display: flex;
  margin-left: auto;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* #logo-link {
  margin-left: 40px !important;
  margin-right: 0;
  padding-bottom: 10px;
  display: inline;
  float: left;
}

nav a {
  display: block;
  margin: 0;
  flex-wrap: wrap;
  list-style: none;
  color: #333;
  border: none !important;
  text-decoration: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.5;
  font-weight: 600;
  display: inline-block;
  padding: 10px;
  margin-top: 60px;
}

.is-scrolled {
  padding-bottom: 10px;
  padding-top: 10px;
}

.sticky {
  transition: all 0.25s ease-in-out 0s;
  -webkit-transition: all 0.25s ease-in-out 0s;
  -moz-transition: all 0.25s ease-in-out 0s;
  -ms-transition: all 0.25s ease-in-out 0s;
}
h1, h4 {
  color: black;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
