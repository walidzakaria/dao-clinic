<template>
  <div class="prices">
    <h1>This is prices page</h1>
    <button @click="retriveCurrency()">Test</button>
    <select class="form-control" name="currency" id="currency"
      ref="currency" v-model="selectedCurrency">
      <option value="EUR">USD</option>
      <option v-for="(k, index) in currencyNames" :key="index" :value="k">
        {{ k }}
      </option>
    </select>
    <p>{{ currencyRate }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currency: null,
      selectedCurrency: 'USD',
      selectedRate: 1,
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
  },
  methods: {
    retriveCurrency() {
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
  },
};
</script>
