<template>
<div>
</div>
</template>

<script>
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

export default {
  created() {
    this.$store.dispatch('user/destroyToken');
    this.$router.push('/');
  },
};
</script>
