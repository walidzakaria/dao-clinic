<template>
  <div>
    <h2>Payment Status</h2>
    <div v-if="paymentStatus === 'A'">
      Your payment transaction was done successfully.
      Go to your schedule from<router-link to="/my-schedule/" exact> here. </router-link>
      Or visit our<router-link to="/" exact> home page </router-link>
    </div>.
    <div v-if="paymentStatus !== null && paymentStatus !== 'A'">
      Your payment transaction failed.
      Please <router-link to="/appointments/" exact>try again.  </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      load: true,
      paymentStatus: null,
    };
  },
  async created() {
    await this.$store.dispatch('res/checkPayment')
      .then((response) => {
        console.log(response);
        this.paymentStatus = response.data.status;
        this.load = false;
      }).catch((error) => {
        console.log(error);
        this.paymentStatus = 'X';
        this.load = false;
      });
  },
};
</script>

<style scoped>
</style>
