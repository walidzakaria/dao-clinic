<template>
  <div id="app">
    <div class="upper-header" ref="upperHeader">
      <div class="link-wrapper">
        <div class="link-child">
          <a href="tel:00201019090187" target="_blank">
            <img src="./assets/img/icon/iconmonstr-phone-6.svg" alt="phone-logo">
            (+20) 10 190 90187
          </a>
        </div>
        <div class="link-child">
          <a href="https://wa.me/201019090187" target="_blank">
            <img src="./assets/img/icon/iconmonstr-whatsapp-1.svg" alt="whatsapp-logo">
            (+20) 10 190 90187
          </a>
        </div>
        <div class="link-child">
          <a href="https://goo.gl/maps/9zrf3vFoFHMtqNyQA" target="_blank">
            <img src="./assets/img/icon/iconmonstr-location-19.svg" alt="location-logo">
            Mohandseen: 49 Sudan st.
          </a>
          <a href="https://g.page/ZayedDowntown?share" target="_blank">
            <img src="./assets/img/icon/iconmonstr-location-19.svg" alt="location-logo">
            Sheikh Zayed: 208 2nd Floor Downtown Mall
          </a>
        </div>
      </div>
    </div>
    <header class="container-fluid"
        :class="{ 'sticky': scrolled }" id="app-header" ref="mainHeader">
      <div class="wrap">
        <div id="hamburger" @click="displayMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <router-link @click.native="open = false"
          class="navbar-brand" id="logo-link" to="/" exact>
          <div id="logo-container">
            <div id="logo-title">DAO Slimming Centers</div>
            <img id="logo" ref="logo" :class="{ 'shrink-logo': scrolled }"
              src="./assets/img/header/DAO-LOGO.webp"
              alt="logo">
          </div>
        </router-link>
        <nav id="menu" ref="menu" :class="{ 'shrink-nav': scrolled }">
          <li class="nav-item">
            <router-link class="nav-link" to="/" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about/" exact>About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/booking/" exact>
              Booking
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/doctors/" exact>Our Doctors</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/services/" exact>Services</router-link>
          </li>
          <li id="login-drop" class="drop">
            <a class="nav-link" v-on:click="toggleDropMenu()">
              {{ accountName }} <i class="icon-arrow" ref="toggleButton"></i>
            </a>
            <ul class="drop_menu nav-link" :class="{'display': open}">
              <div v-if="!isAuthenticated">
                <router-link to="/login/" exact>Login</router-link>
                <router-link to="/signup/" exact>Sign Up</router-link>
              </div>
              <div v-else>
                <!-- <router-link to="/me/" exact>PROFILE</router-link> -->
                <router-link to="/my-schedule/" exact>Schedule</router-link>
                <router-link to="/logout/" exact>Logout</router-link>
              </div>
            </ul>
          </li>
        </nav>
      </div>
    </header>
    <main id="background" class="container content"
        :class="{ 'increase-top': scrolled }" ref="mainSection">
      <router-view/>
    </main>
    <div v-if="showChat">
      <ChatBox/>
      <Footer/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

const ChatBox = () => import('./chat/ChatBox.vue');
const Footer = () => import('./home/PageFooter.vue');

export default {
  data() {
    return {
      load: false,
      open: false,
      scrolled: false,
      showChat: true,
    };
  },
  components: {
    ChatBox,
    Footer,
  },
  computed: {
    // ...mapState('user', 'userInfo']),
    ...mapGetters('user', ['isAuthenticated', 'userInfo', 'loginName']),
    accountName() {
      const name = this.isAuthenticated ? this.$store.state.user.userInfo.username : 'Account';
      return name;
    },
  },
  async created() {
    console.log('appview created');
    await this.$store.dispatch('chat/getClientId').then((response) => {
      console.log('received client id', response);
    });
  },
  mounted() {
    console.log('appview mounted');
    this.$nextTick(() => {
      window.addEventListener('scroll', () => {
        const upperHeaderSize = this.$refs.upperHeader.clientHeight;
        this.scrolled = document.documentElement.scrollTop > upperHeaderSize;
      });
      this.checkChatView();
    });
  },
  methods: {
    ...mapActions('user', ['logout']),
    wait(isWaiting) {
      this.load = isWaiting;
    },
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
    checkChatView() {
      const viewName = this.$route.name;
      if (viewName === 'ChatAdmin' || viewName === 'DoctorSession') {
        this.showChat = false;
      } else {
        this.showChat = true;
      }
    },
  },
  watch: {
    $route() {
      const body = document.getElementsByTagName('body')[0];
      if (body.classList.contains('display_menu')) {
        body.classList.remove('display_menu');
      }
      this.open = false;
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      this.checkChatView();
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

.link-wrapper {
  background-color: #9a7338;
  width: 100%;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.increase-top {
  margin-top: 98px !important;
}

#logo-title {
  color: #4b4746;
  padding-left: 2px;
  padding-right: 2px;
  font-size: 15px;
  font-weight: bolder;
  margin: 0 auto;
}

.link-child {
  color: whitesmoke;
  font-size: 12px;
  height: 100%;
  display: inline-block;
  line-height: 50px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
}

#app .upper-header a {
  color: whitesmoke;
  font-size: 12px;
}

#app .upper-header img {
  height: 23px;
  /* margin-left: 23%; */
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
  width: 100%;
  top: 0;
  justify-content: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, .1);
  transition: 0.33s;
  opacity: 1;
}

.sticky {
  position: fixed;
}

.shrink-nav {
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
}

.shrink-logo {
  height: 42px !important;
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
  border-bottom-color: #9a7338;
  color: #9a7338;
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
  top: 30px;
  display: none;
  transform: translateY(-20%);
  padding: 11px;
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
  content: '';
  display: block;
  padding: 14px 5% 5% 5%;
}

#background h3 {
  margin: 0;
  margin-bottom: 1%;
  font-size: 1.5em;
  text-align: center;
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
  border-bottom: 3px solid #9a7338;
  color: #9a7338;
}

.btn-link {
  border-bottom: 3px solid transparent;
  width: 100% !important;
}

.router-link-exact-active {
  font-weight: 550 !important;
  color: #9a7338;
}

#logo {
  margin: 0 auto;
  display: block;
  height: 60px;
}

#login-drop {
  min-width: 100px;
  text-transform: capitalize;
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
  /* body {padding-top: 20px;} */
  header .wrap {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
  }

  .link-child {
    line-height: 33px;
  }

  #app {
    margin-top: 0;
  }

  header img {height: 50px;}
  header #hamburger {
    display: block;
    margin-left: -90vw;
    margin-top: 10px;
  }

  #logo-container {
    margin-top: -44px;
  }

  #logo {
    margin-top: -38px;
    margin-left: 75vw;
  }

  #app-header {
    padding-top: 8px;
    padding-bottom: 1px;
  }

  #logo-title {
    margin-left: 40px;
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
    display: block;
    height: calc(100vh - 64px);
  }

  main {
    position: relative !important;
    /* top: 140px; */
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
  display: none;
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
@media screen and(max-width: 850px) and (max-height: 500px) {

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

@media screen and (max-width: 560px) {
  #hamburger {
    margin-left: -60vw;
  }

  #logo {
    margin-left: 66vw;
  }
}

@media screen and (max-width: 350px) {
  #logo {
    margin-left: 50vw;
  }

  #logo-title {
    visibility: hidden;
  }
}

h1 {
  text-align: center;
}
</style>
