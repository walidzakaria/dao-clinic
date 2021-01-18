<template>
  <div class="prices">
    <h1>This is prices page</h1>
    <select class="form-control" name="currency" id="currency"
      ref="currency" v-model="selectedCurrency">
      <option v-for="(k, index) in currencyNames" :key="index" :value="k">
        {{ k }}
      </option>
    </select>
    <p>{{ currencyRate }}</p>
    <p>Single Session: {{ singleSessionPrice | currency(selectedCurrency) }}</p>
    <p>4 Times Session: {{ multiSessionPrice | currency(selectedCurrency) }}</p>

    <p>save up to {{ savedAmount | currency(selectedCurrency) }}</p>
    <router-link to="/appointments/" exact>Book Now</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currency: null,
      selectedCurrency: 'USD',
      singlePrice: null,
      multiPrice: null,
    };
  },
  computed: {
    currencyNames() {
      const keys = this.currency ? Object.keys(this.currency) : null;
      return keys;
    },
    currencyRate() {
      console.log(this.selectedCurrency);
      const rate = this.currency ? this.currency[this.selectedCurrency] : 1;
      return rate;
    },
    singleSessionPrice() {
      return this.currencyRate * this.singlePrice;
    },
    multiSessionPrice() {
      return this.currencyRate * this.multiPrice;
    },
    savedAmount() {
      return (this.singleSessionPrice * 4) - this.multiSessionPrice;
    },
  },
  mounted() {
    console.log('created');
    this.retrievePrices();
  },
  methods: {
    retrieveCurrency() {
      this.$store.dispatch('res/getCurrency')
        .then((response) => {
          if (response.data.rates) {
            this.currency = this.$store.state.res.currency;
            console.log('rates are:', this.currency);
          }
        }).catch((error) => {
          console.log(error);
        });
    },
    retrievePrices() {
      this.$store.dispatch('res/getPrices')
        .then((response) => {
          console.log(response);
          this.singlePrice = response.data.single_session_price;
          this.multiPrice = response.data.multi_session_price;
          this.retrieveCurrency();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>

</style>
