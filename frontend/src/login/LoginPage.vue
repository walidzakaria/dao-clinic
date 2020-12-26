<template>
    <div class="vue-tempalte">
        <form v-on:submit.prevent @submit="login()">
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email address</label>
                <input v-model.trim="email" type="email"
                  class="form-control form-control-lg" required/>
            </div>

            <div class="form-group">
                <label>Password</label>
                <input v-model="password" type="password"
                  class="form-control form-control-lg" required/>
            </div>
            <p v-if="showError"
              class="text-danger">Unable to log in with provided credentials.
            </p>
            <button
              type="submit" class="btn btn-dark btn-lg btn-block">
                Sign In  <span v-if="isLoading" class="spinner-border"></span>
            </button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/signup/" exact="">Create account ?  </router-link>
                <router-link to="/reset/" exact="">Forgot password ?</router-link>
            </p>

            <!-- <div class="social-icons">
                <ul>
                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div> -->

        </form>
    </div>
</template>

<script>
// import { mapMutations, mapActions } from 'vuex';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

export default {
  data() {
    return {
      isLoading: false,
      cuurentUser: {},
      email: '',
      password: '',
      showError: false,
    };
  },
  computed: {
    // ...mapGetters('user', ['userInfo', 'userKey', 'requestErrors']),
  },
  methods: {
    // ...mapActions('user', ['getUser']),
    // ...mapMutations('user', ['updateUserKey']),
    // async applyLogin() {
    //   if (this.isLoading) { return; }
    //   this.isLoading = true;
    //   await axios({
    //     method: 'post',
    //     url: 'http://127.0.0.1:8000/api/auth/token/login/',
    //     data: { password: this.userPassword, email: this.userEmail },
    //   }).then((result) => {
    //     console.log(result.data);
    //     this.showError = false;
    //     this.$router.push('/');
    //     this.updateUserKey(result.data.auth_token);
    //     this.getUser();
    //   }).catch((error) => {
    //     console.log(error.response.data);
    //     this.showError = true;
    //     this.updateUserKey('');
    //   });
    //   this.isLoading = false;
    // },
    login() {
      if (this.isLoading) { return; }
      this.isLoading = true;
      this.$store.dispatch('user/retrieveToken', {
        email: this.email,
        password: this.password,
      }).then((response) => {
        console.log(response);
        this.showError = false;
        this.isLoading = false;
        this.$store.dispatch('user/retrieveUserData');
        this.$router.push('/');
      }).catch((error) => {
        console.log(error);
        this.showError = true;
        this.isLoading = false;
      });
    },
  },
};
</script>

<style scoped>
  form {
    max-width: 400px;
    margin: 10px auto;
    /* border: 2px solid grey; */
    padding: 12px 30px 5px 30px;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 23px -8px rgba(10,10,10,1);
    -moz-box-shadow: 0px 0px 23px -8px rgba(10,10,10,1);
    box-shadow: 0px 0px 23px -8px rgba(10,10,10,1);
  }

  label {
    text-align: left !important;
    width: 100%;
  }

  .spinner-border {
    height: 1.5rem;
    width: 1.5rem;
  }
</style>
