<template>
    <div class="vue-tempalte">
        <form v-on:submit.prevent @submit="applyReset()">
            <h3>Resend Activation Code</h3>

            <div class="form-group">
                <label>Email address <span class="text-danger">*</span></label>
                <input v-model.trim="email" type="email"
                  class="form-control form-control-lg" required autofocus/>
            </div>
            <div v-if="submitted.isSubmitted">
              <p v-if="submitted.isSuccess" class="text-success">
                We sent a an activation link to your email.
                <br>
                Please check your email, or you can visit our
                 <router-link to="/">home</router-link> page.
              </p>
              <p v-if="!submitted.isSuccess" class="text-danger">
                Something went wrong :-(
                  <br>Please try another email!
              </p>
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">
              Resend Activation  <span v-if="isLoading" class="spinner-border"></span>
            </button>

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
      submitted: {
        isSuccess: true,
        isSubmitted: false,
      },
      email: '',
    };
  },
  methods: {
    async applyReset() {
      if (this.isLoading) { return; }
      this.isLoading = true;
      const requestBody = {
        email: this.email,
      };

      await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/auth/users/resend_activation/',
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
  .spinner-border {
    height: 1.5rem;
    width: 1.5rem;
  }
</style>
