<template>
  <div id="app">
    <header class="container-fluid" id="app-header">
      <div class="wrap">
        <div id="hamburger" @click="displayMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <router-link @click.native="open = false"
          class="navbar-brand" id="logo-link" to="/" exact="">
          <img id="logo" ref="logo"
            src="./assets/DAO-LOGO.png"
            alt="logo">
        </router-link>
        <nav id="menu" ref="menu">
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
            <router-link class="nav-link" to="/contact/" exact>CONTACT US</router-link>
          </li>
          <li id="login-drop" class="drop">
            <a class="nav-link" v-on:click="toggleDropMenu()">
              ACCOUNT <i class="icon-arrow" ref="toggleButton"></i>
            </a>
            <ul class="drop_menu nav-link" :class="{'display': open}">
              <div v-if="!isAuthenticated">
                <router-link to="/login/" exact>LOGIN</router-link>
                <router-link to="/signup/" exact>SIGN UP</router-link>
              </div>
              <div v-else>
                <router-link to="/me/" exact>PROFILE</router-link>
                <router-link to="/my-schedule/" exact>SCHEDULE</router-link>
                <router-link to="/logout/" exact>LOGOUT</router-link>
              </div>
            </ul>
          </li>
        </nav>
      </div>
    </header>
    <div id="loader" v-if="load">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div id="overlay" v-if="load"></div>
    <main @click="open=false" id="background" class="container content">
      <router-view/>
    </main>
    <ChatBox/>
    <Footer/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ChatBox from './chat/ChatBox.vue';
import Footer from './home/PageFooter.vue';

export default {
  data() {
    return {
      load: false,
      open: false,
    };
  },
  components: {
    ChatBox,
    Footer,
  },
  computed: {
    // ...mapState('user', ['userKey', 'userInfo']),
    ...mapGetters('user', ['userKey', 'isAuthenticated', 'userInfo', 'loginName']),
  },
  created() {
    this.$nextTick(() => {
      console.log(this.isAuthenticated);
      console.log(this.userInfo);
    });
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', () => {
        const navbar = this.$refs.menu;
        const appLogo = this.$refs.logo;
        const navClasses = navbar.classList;
        const logoClasses = appLogo.classList;
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
  methods: {
    ...mapActions('user', ['logout']),
    displayMenu() {
      const body = document.getElementsByTagName('body')[0];
      if (!body.classList.contains('display_menu')) {
        body.classList.add('display_menu');
      } else {
        body.classList.remove('display_menu');
      }
      this.open = false;
    },
    toggleDropMenu() {
      this.open = !this.open;
      this.$refs.toggleButton.style.transform = this.open ? 'rotate(180deg)' : 'rotate(0deg)';
      // if (window.innerWidth < 660 && this.open) {
      //   // event.target.parentElement.nextSibling.
      //   // nextSibling.style.marginTop = `${dropMenu.clientHeight}px`;
      // }
    },
    displayDropMenu(event) {
      const dropMenu = event.target.parentElement.getElementsByClassName('drop_menu')[0];
      const dropMenus = document.getElementsByClassName('drop_menu');

      Array.from(dropMenus).forEach((e) => {
        if (e !== dropMenu) {
          e.classList.remove('display');
        }
      });
      const lis = document.getElementById('menu').getElementsByTagName('li');
      Array.from(lis).forEach((e) => {
        e.style.marginTop = 0;
      });
      if (!dropMenu.classList.contains('display')) {
        dropMenu.classList.add('display');
      } else {
        dropMenu.classList.remove('display');
      }

      if (window.innerWidth < 850 && dropMenu.classList.contains('display')) {
        event.target.parentElement.nextSibling.nextSibling.style.marginTop = `${dropMenu.clientHeight}px`;
      }
    },
    loaded() {
      document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
      this.load = true;
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
  color: #2c3e50;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}

.icon-arrow {
  mask:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 284.929 284.929'><path d='M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441    L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z'/></svg>");
}

i {
  vertical-align: middle;
  display: inline-block;
  background-repeat: no-repeat;
}

html, body {
  margin: 0;width: 100%;height: 100%; font-size: 14px; font-family: 'Roboto', sans-serif;
}

* {
  box-sizing: border-box;
}

ul {padding: 0; margin: 0;}
li {list-style: none;}
.wrap {
  min-width: 320px;
}

header {
  display: flex;
  z-index: 999;
  padding: 10px 0;
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  top: 0;
  justify-content: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
  transition: 0.33s;
  opacity: 1;
}

.shrink-nav {
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
}

.shrink-logo {
  height: 60px !important;
}

#logo-link {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
}
#menu {
  padding-bottom: 0;
  padding-top: 0;
}

header .wrap {
  padding: 0 2%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}

header img {
  height: 100px;
  transition: width 2s, height 1s, margin 1s;
}

header #menu {
  display: flex;
  flex-direction: row;
}

header #menu li {
  position: relative;
  user-select: none;

}
/* header #menu li i {
  width: 12px;
  height: 12px;
  background-color: #3E3A37;
} */
header #menu li i a {
  cursor: pointer;
  font-size: 1.15em;
  border: none;
  border-bottom: 2px solid #ffffff;
  transition: 0.15s;
  background: none;
  color: #333 !important;
  text-align: left;
}

#logout-button {
  width: 100% !important;
  text-align: left;
  display: block;
  margin-left: 3px;
  margin-right: 3px;
  padding: 10px 0 0 0;
}

header #menu li i a:hover {
  border-bottom-color: #41B883;
  color: #41B883;
}

/* header #menu li i a i {
  background-color: #41B883;
} */

header .drop_menu {
  position: absolute;
  display: block;
  top: 100%;
  transform: scaleY(0);
  width: auto;
  transform-origin: top;
  background-color: #ffffff;
  transition: 0.25s;
  padding-bottom: 10px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);
}

header .drop_menu  a {
  margin-left: 3px;
  display: block;
  transition: 0.45s;
  opacity: 0;
  margin-right: 3px;
  padding: 10px 0 0 0;
}

header .drop_menu.display {
  transform: scaleY(1);
}

header .drop_menu.display a {
  opacity: 1;
}
header #hamburger {
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  left: 3%;
  top: 30px;
  display: none;
  transform: translateY(-50%);
}
header #hamburger span {
  height: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #3E3A37;
  display: block;
  transition: 0.33s;
}

header #hamburger span:nth-child(1) {width: 12px;}
header #hamburger span:nth-child(2) {width: 24px;}
header #hamburger span:nth-child(3) {width: 12px;}

.display_menu header #hamburger span:nth-child(1) {
  transform: rotate(45deg) translate(2px, 1px);
}

.display_menu header #hamburger span:nth-child(2) {
  transform: rotate(-45deg) ;
}
.display_menu header #hamburger span:nth-child(3) {
  transform: rotate(45deg) translate(6px, -9px);
}

#background {
  margin-top: 90px;
  content: '';
  display: block;
  width: 100vw;
  height: 200vh;
  padding: 5%;
}

#background h3 {
  margin: 0;
  margin-bottom: 1%;
  font-size: 1.5em;
  text-align: center;
  color: #ffffff;
}
#background h3 i {
  width: 13px;
  height: 20px;
  background-color: #ffffff;
}

button {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  padding: 5px 10px;
  font-size: 1.3em;
  border:none;
  background-color: #435466;
  color: #ffffff;
}

header li a {
  color: #444;
  border-bottom: 3px solid transparent;
  cursor: pointer;
}

.drop_menu a {
  border-bottom: none;
}

.drop_menu a:hover {
  border-bottom: none;
}

header li a:hover {
  border-bottom: 3px solid #333;
  color: #222;
}

.btn-link {
  border-bottom: 3px solid transparent;
  width: 100% !important;
}

.router-link-exact-active {
  font-weight: 550 !important;
}

#login-drop {
  min-width: 100px;
}

#loader {
  display: block;
  width: 50px;
  height: 50px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 3;
  margin-left: -25px;
  margin-top: -25px;
  animation: spin 1s infinite linear;
}
#loader span {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  border-width: 0px 0px 10px 10px;
  border-style: solid;
  border-color: transparent;
}

#loader span:nth-child(0) {border-left-color: #4183b8;}
#loader span:nth-child(1) {transform: rotate(-40deg);  border-left-color: #4183b8;}
#loader span:nth-child(2) {transform: rotate(-80deg);  border-left-color: #4183b8;}
#loader span:nth-child(3) {transform: rotate(-130deg);  border-left-color: #bbbbbb;}
#loader span:nth-child(4) {transform: rotate(-170deg);  border-left-color: #bbbbbb;}
#loader span:nth-child(5) {transform: rotate(-210deg);  border-left-color: #bbbbbb;}
#loader span:nth-child(6) {transform: rotate(-250deg);  border-left-color: #3E3A37;}
#loader span:nth-child(7) {transform: rotate(-280deg);  border-left-color: #3E3A37;}
#loader span:nth-child(8) {transform: rotate(-320deg);  border-left-color: #3E3A37;}
#loader span:nth-child(9) {transform: rotate(-360deg);  border-left-color: #4183b8;}

@keyframes spin { from {transform: rotate(0deg);} to {transform: rotate(-360deg);}}
#overlay {
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: #525252;
  opacity: 0.5;
}

@media screen  and (max-width: 1015px) {
  .nav-link {
    padding: 0.5rem !important;
  }
}

@media screen and (max-width: 850px) {
  body {padding-top: 70px;}
  header .wrap {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
  }

  #app {
    margin-top: -250px;
  }

  header img {height: 50px;}
  header #hamburger {
    display: block;
  }

  .shrink-logo {
    height: 50px !important;
  }

  header #menu {
    width: 100%;
    display: block;
    height: 0;
    transform-origin: 50% 0;
    transition: 0.33s ease;
    flex-direction: column;
  }
.display_menu header #menu {
  height: calc(100vh - 64px);
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

.display_menu header #menu li {
  height: calc((100vh - 113px)/8);
  border-bottom: 1px solid #DAD9D7;
  transition: 0.25s ease;
  opacity: 1;
  display: block;
}

header #menu li {
  height: 0;
  opacity: 0;
  margin-left: 0;
  transition: 0.25s ease;
  border-bottom: 3px solid transparent;
}

header #menu li a {
  left: 0;
  line-height: calc((100vh - 130px)/9);
  padding-left: 20px;
  border: none;
  height: 100%;
  width: 100%;
  display: block;
  color: #333 !important;
}

#logout-button {
  padding-left: 40px !important;
}

.nav-link {
  color: #333 !important;
}

header #menu li a :hover {
  color: #ffffff;
  background-color: #41B883;
}

header #menu li a :hover i {background-color: #ffffff;}
header #menu li a :hover i i {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #3E3A37;
}

header .drop_menu {
  top: calc((100vh - 113px)/8);
  box-shadow: none;
  left: 0;
  padding-bottom: 0;
  width: 100%;
}
header .drop_menu a {
  width: 100%;
  padding: 0 !important;
  padding-left: 40px !important;
  margin: 0;
  border-bottom: 1px solid #DAD9D7 !important;
}
}
@media screen and(max-width: 850px) and(max-height: 500px) {
  .display_menu header  {
    max-height: 100vh;
    overflow-y: scroll;
    }
    .display_menu header #menu li{
      height: calc((100vh - 113px)/4);
    }

  header #menu li a {
    line-height: calc((100vh - 113px)/4);
  }
  header #menu li header .drop_menu {
    top: calc((100vh - 113px)/4);
  }
  header #menu li i {
    vertical-align: middle;
    display: inline-block;
    background-repeat: no-repeat;
  }
}
</style>
