<template>
  <div class="vue-tempalte">
    <h2>Activating Your Account</h2>
    <p v-if="isLoading">
      Please wait while activating your account...
      <span class="spinner-border"></span>
    </p>
    <div v-else>
      <div v-if="isSuccess">
      <h3>You're registered successfully :-)</h3>
      <h3>You may login now.</h3>
      <p>Click <router-link to="/login" exact="">here</router-link> to login.</p>
      <p>Click <router-link to="/" exact="">here</router-link> to visit our home page.</p>
    </div>
    <div v-if="!isSuccess">
      <h3>Something went wrong :-(</h3>
        <p>The activation link you provided is invalid.</p>
        <p>Click <router-link to="/signup" exact="">here</router-link> to register.</p>
        <p>Click <router-link to="/" exact="">here</router-link> to visit our home page.</p>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

export default {
  data() {
    return {
      isLoading: true,
      isSuccess: false,
    };
  },
  created() {
    console.log('created');
  },
  mounted() {
    this.$nextTick(() => {
      this.applyActivation();
    });
  },
  computed: {
  },
  methods: {
    applyActivation() {
      console.log('start request');
      const requestBody = {
        uid: this.$route.params.uid,
        token: this.$route.params.token,
      };
      // @DONE: test wfhen response is successful
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/auth/users/activation/',
        data: requestBody,
      }).then((result) => {
        console.log(result);
        this.isSuccess = true;
        this.isLoading = false;
      }).catch((error) => {
        this.isSuccess = false;
        const result = error.response.data;
        console.log(result);
        this.isLoading = false;
      });
      console.log('done');
    },
  },
};
</script>

<style scoped>
  .spinner-border {
    height: 1.5rem;
    width: 1.5rem;
  }

</style>
