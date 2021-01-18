<template>
    <div class="vue-tempalte">
      <h1>Contact Us</h1>
      <div v-if="registered">
        <h2>We received your request!</h2>
        <p>We will get in touch with you soon.</p>
        <p>Click <router-link to="/">here</router-link> to visit our home page.</p>
      </div>
        <form v-if="!registered">
          <h2>Our Contact Info</h2>
          <table class="table table-hover">
            <tbody>
              <tr>
                <a href="https://www.facebook.com/DrAhmedOmar1" target="_blank">
                  <td><img src="../assets/iconmonstr-facebook-1.svg" alt="facebook"></td>
                  <td>DrAhmedOmar1</td>
                </a>
              </tr>
              <tr>
                <a href="https://wa.me/00201019090187" target="_blank">
                  <td><img src="../assets/iconmonstr-whatsapp-1.svg" alt="whatsapp"></td>
                  <td>(+20) 10 190 90 187</td>
                </a>
              </tr>
              <tr>
                <a href="tel:00201019090187" target="_blank">
                  <td><img src="../assets/iconmonstr-phone-3.svg" alt="phone"></td>
                  <td>(+20) 10 190 90 187</td>
                </a>
              </tr>
              <tr>
                <a href="mailto:daoegypt@gmail.com" target="_blank">
                  <td><img src="../assets/iconmonstr-email-1.svg" alt="mail"></td>
                  <td>daoegypt@gmail.com</td>
                </a>
              </tr>

            </tbody>
          </table>
        </form>
        <br>
        <p>Submit you request here:</p>
        <form v-if="!registered" v-on:submit.prevent @submit="sendRequest()">
            <h2>Submit Request</h2>

            <div class="form-group">
                <label>Your name</label>
                <input v-model.trim="name"
                  type="text" class="form-control form-control-lg"/>
            </div>
            <div class="form-group">
                <label>Your email address <span class="text-danger">*</span></label>
                <input v-model.trim="email"
                  type="email" class="form-control form-control-lg" required/>
            </div>

            <div class="form-group">
                <label>Phone number</label>
                <input v-model.trim="phone" type="tel"
                  class="form-control form-control-lg"/>
            </div>
            <div class="form-group">
              <label for="comment">Your message: <span class="text-danger">*</span></label>
              <textarea v-model="message" class="form-control"
                  rows="5" id="comment" required></textarea>
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">
              Send  <span v-if="isLoading" class="spinner-border"></span>
            </button>

        </form>
    </div>
</template>

<script>

export default {
  data() {
    return {
      isLoading: false,
      registered: false,
      name: '',
      email: '',
      phone: '',
      message: '',
    };
  },
  computed: {
  },
  methods: {
    async sendRequest() {
      if (this.isLoading) { return; }
      this.isLoading = true;
      const requestBody = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        message: this.message,
      };
      await this.$store.dispatch('res/sendRequest', requestBody)
        .then((response) => {
          console.log(response);
          this.registered = true;
          this.name = '';
          this.phone = '';
          this.email = '';
          this.message = '';
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        }).catch((error) => {
          console.log(error);
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
