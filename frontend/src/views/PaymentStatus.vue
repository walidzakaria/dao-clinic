<template>
  <div>
    <h2>Payment Status</h2>
    <div v-if="paymentStatus === 'A'">Your payment was done successfully!</div>
    <div v-if="paymentStatus !== null && paymentStatus !== 'A'">Failed to submit your payment</div>
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
        this.load = false;
      });
  },
};
</script>
