<template>
    <div class="vue-tempalte">
      <div v-if="registered">
        <h2>You're registered successfully!</h2>
        <h3>Please check your email for confirmation.</h3>
        <p>Click <router-link to="/">here</router-link> to visit our home page.</p>
      </div>
        <form v-if="!registered" v-on:submit.prevent @submit="signup()">
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>Username <span class="text-danger">*</span></label>
                <input v-model.trim="newUser.username" type="text"
                  class="form-control form-control-lg" required autofocus/>
                <ul>
                  <li v-for="(m, index) in invalidEntry.username" :key="index"
                    class="text-danger">{{ m }}
                  </li>
                </ul>
            </div>

            <div class="form-group">
                <label>Email address <span class="text-danger">*</span></label>
                <input v-model.trim="newUser.email"
                  type="email" class="form-control form-control-lg" required/>
                <ul>
                  <li v-for="(m, index) in invalidEntry.email" :key="index"
                    class="text-danger">{{ m }}
                  </li>
                </ul>
            </div>

            <div class="form-group">
                <label>Phone Number <span class="text-danger">*</span></label>
                <input v-model.trim="newUser.phone" type="tel"
                  class="form-control form-control-lg" required/>
                <ul>
                  <li v-for="(m, index) in invalidEntry.phone" :key="index"
                    class="text-danger">{{ m }}
                  </li>
                </ul>
            </div>

            <div class="form-group">
                <label>First Name</label>
                <input v-model.trim="newUser.firstName"
                  type="text" class="form-control form-control-lg"/>
                <ul>
                  <li v-for="(m, index) in invalidEntry.firstName" :key="index"
                    class="text-danger">{{ m }}
                  </li>
                </ul>
            </div>

            <div class="form-group">
                <label>Last Name</label>
                <input v-model.trim="newUser.lastName" type="text"
                  class="form-control form-control-lg"/>
                <ul>
                  <li v-for="(m, index) in invalidEntry.lastName" :key="index"
                    class="text-danger">{{ m }}
                  </li>
                </ul>
            </div>

            <div class="form-group">
                <label>Password <span class="text-danger"> *</span></label>
                <input v-model="newUser.password"
                  type="password" class="form-control form-control-lg" required/>
                <ul>
                  <li v-for="(m, index) in invalidEntry.password" :key="index"
                    class="text-danger">{{ m }}
                  </li>
                </ul>
            </div>

            <div class="form-group">
                <label>Retype Password <span class="text-danger"> *</span></label>
                <input v-model="newUser.rePassword"
                  type="password" class="form-control form-control-lg" required/>
            </div>
            <ul>
              <li v-for="(m, index) in invalidEntry.nonFieldErrors" :key="index"
                class="text-danger">{{ m }}
              </li>
            </ul>

            <button type="submit" class="btn btn-dark btn-lg btn-block">
              Sign Up  <span v-if="isLoading" class="spinner-border"></span>
            </button>

            <p class="forgot-password text-right">
                Already registered
                <router-link to="/login/" exact="">sign in?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

export default {
  data() {
    return {
      isLoading: false,
      registered: false,
      newUser: {
        username: '',
        email: '',
        phone: '',
        firstName: '',
        lastName: '',
        password: '',
        rePassword: '',
      },
      invalidEntry: {
        username: [],
        email: [],
        phone: [],
        firstName: [],
        lastName: [],
        password: [],
        rePassword: [],
        nonFieldErrors: [],
      },
    };
  },
  computed: {
  },
  methods: {
    async signup() {
      if (this.isLoading) { return; }
      this.isLoading = true;
      const requestBody = {
        username: this.newUser.username,
        phone: this.newUser.phone,
        first_name: this.newUser.firstName,
        last_name: this.newUser.lastName,
        email: this.newUser.email,
        password: this.newUser.password,
        re_password: this.newUser.rePassword,
      };
      await this.dispatch('user/register', requestBody)
        .then((response) => {
          console.log(response);
          this.registered = true;
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        }).catch((error) => {
          this.invalidEntry.username = error.username || [];
          this.invalidEntry.phone = error.phone || [];
          this.invalidEntry.firstName = error.firstName || [];
          this.invalidEntry.lastName = error.lastName || [];
          this.invalidEntry.email = error.email || [];
          this.invalidEntry.password = error.password || [];
          this.invalidEntry.nonFieldErrors = (
            this.newUser.password === this.newUser.rePassword ? [] : ["The two password fields didn't match."]
          );
        });
      this.isLoading = false;
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

  li {
    margin: 0 auto 0 0;
    text-align: left !important;
  }

  .spinner-border {
    height: 1.5rem;
    width: 1.5rem;
  }
</style>
