<template>
    <div class="vue-tempalte">
        <form v-on:submit.prevent @submit="applyReset()">
            <h3>Forgot Password</h3>

            <div class="form-group">
                <label>Email address <span class="text-danger">*</span></label>
                <input v-model.trim="email" type="email"
                  class="form-control form-control-lg" required/>
            </div>
            <div v-if="submitted.isSubmitted">
              <p v-if="submitted.isSuccess" class="text-success">
                We sent a reset link to your email.
                <br>
                Or you can visit our <router-link to="/">home</router-link> page.
              </p>
              <p v-if="!submitted.isSuccess" class="text-danger">
                Something went wrong :-(
                  <br>Please try another email!
              </p>
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">Reset password</button>

        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      submitted: {
        isSuccess: true,
        isSubmitted: false,
      },
      email: '',
    };
  },
  methods: {
    applyReset() {
      const requestBody = {
        email: this.email,
      };

      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/auth/users/reset_password/',
        data: requestBody,
      }).then((result) => {
        console.log(result);
        this.submitted.isSuccess = true;
        this.submitted.isSubmitted = true;
      }).catch((error) => {
        const result = error.response.data;
        console.log(result);
        this.submitted.isSuccess = false;
        this.submitted.isSubmitted = true;
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
</style>
