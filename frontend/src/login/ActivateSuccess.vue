<template>
  <div class="vue-tempalte">
    <div v-if="activated">
      <h2>You're registered successfully :-)</h2>
      <h3>You may login now.</h3>
      <p>Click <router-link to="/login" exact="">here</router-link> to login.</p>
      <p>Click <router-link to="/" exact="">here</router-link> to visit our home page.</p>
    </div>
    <div v-else>
      <h2 v-if="!isError">Activating Your E-Mail!</h2>
      <h3 v-if="!isError">loading...</h3>
      <div v-else>
        <h2>Something went wrong :-(</h2>
        <h3>The activation link you provided is invalid.</h3>
        <p>Click <router-link to="/signup" exact="">here</router-link> to register.</p>
        <p>Click <router-link to="/" exact="">here</router-link> to visit our home page.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      activated: false,
      isError: false,
    };
  },
  created() {
    console.log('created');
  },
  mounted() {
    this.applyActivation();
  },
  computed: {
  },
  methods: {
    applyActivation() {
      const requestBody = {
        uid: this.$route.params.uid,
        token: this.$route.params.token,
      };
      // @TODO: test wfhen response is successful
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/api/auth/users/activation/',
        data: requestBody,
      }).then((result) => {
        console.log(result);
        this.activated = true;
      }).catch((error) => {
        this.isError = true;
        const result = error.response.data;
        console.log(result);
      });
    },
  },
};
</script>

<style scoped>

</style>
