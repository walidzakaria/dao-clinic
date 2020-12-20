<template>
  <div class="container-fluid pb-0 mb-0 justify-content-center text-light ">
    <footer>
      <div class="row my-5 justify-content-center py-5">
        <div class="col-11">
          <div class="row ">
            <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
              <!-- <h3 class="text-muted mb-md-0 mb-5 bold-text">Pepper.</h3> -->
              <img id="footer-logo" src="../assets/DAO-LOGO.png" alt="dao logo">
            </div>
            <div class="col-xl-2 col-md-4 col-sm-4 col-12">
              <h6 class="mb-3 mb-lg-4 bold-text "><b>MENU</b></h6>
              <ul class="list-unstyled">
                <li>
                  <router-link class="nav-link" to="/" exact>Home</router-link>
                </li>
                <li>
                  <router-link class="nav-link" to="/about/" exact>About Us</router-link>
                </li>
                <li>
                  <router-link class="nav-link" to="/appointments/" exact>Appointments</router-link>
                </li>
                <li>
                  <router-link class="nav-link" to="/prices/" exact>Prices</router-link>
                </li>
                <li>
                  <router-link class="nav-link" to="/contact/" exact="">Contact Us</router-link>
                </li>
              </ul>
            </div>
            <div class="col-xl-2 col-md-4 col-sm-4 col-12">
              <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5"><b>ADDRESS</b></h6>
              <p class="mb-1">MOHANDSEEN 49 SUDAN ST.</p>
              <p>SHEIKH ZAYED 208</p>
              <P>2ND FLOOR DOWNTOWN MALL</P>
            </div>
          </div>
          <div class="row ">
            <div
              class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5
                    order-sm-1 order-3 align-self-end">
              <p class="social text-muted mb-0 pb-0 bold-text">
                <span class="mx-2">
                  <a href="https://www.facebook.com/DrAhmedOmar1" target="_blank">
                    <img src="../assets/iconmonstr-facebook-1.svg" alt="facebook">
                  </a>
                </span>
                <span class="mx-2">
                  <a href="https://wa.me/00201019090187" target="_blank">
                    <img src="../assets/iconmonstr-whatsapp-1.svg" alt="whatsapp">
                  </a>
                </span>
                <span class="mx-2">
                  <a href="https://linkedin.com" target="_blank">
                    <img src="../assets/iconmonstr-linkedin-3.svg" alt="linkedin">
                  </a>
                  </span>
                  <span class="mx-2">
                  <a href="https://tweitter.com">
                    <img src="../assets/iconmonstr-twitter-1.svg" alt="twitter">
                  </a>
                  <br/>
                  </span> </p><small class="rights"><span>&#174;
                </span>
                  Developed with &#10084; by
                    <a href="mailto:walidpiano@yahoo.com">Walid Zakaria
                    </a>
                  </small>
            </div>
            <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
              <h6 class="mt-55 mt-2 text-muted bold-text">
                <b>CALL US</b>
              </h6>
              <small>
                <span>
                    <img src="../assets/iconmonstr-phone-3.svg" alt="phone">
                  </span>
                <a href="tel:00201019090187" target="_blank">
                  (+20) 10 190 90 187
                </a>
              </small>
            </div>
            <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
              <h6 class="text-muted bold-text">
                <b>MAIL US</b>
              </h6>
              <small>
                <a href="mailto:daoegypt@gmail.com" target="_blank">
                  <span>
                    <img src="../assets/iconmonstr-email-1.svg" alt="mail">
                  </span> daoegypt@gmail.com
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  components: {
  },
};
</script>

<style scoped>

 body {
     background: linear-gradient(0deg, #fff, 50%, #DEEEFE);
     font-family: 'Rubik', sans-serif;
     background: #455A64;
     height: 100 !important
 }

 .container-fluid {
     overflow: hidden;
     margin-top: 250px;
     background: #262626;
     color: #627482 !important;
     margin-bottom: 0;
     padding-bottom: 0
 }

 small {
     font-size: calc(12px + (15 - 12) * ((100vw - 360px) / (1600 - 360))) !important
 }

 .bold-text {
     color: #989c9e !important
 }

 .mt-55 {
     margin-top: calc(50px + (60 - 50) * ((100vw - 360px) / (1600 - 360))) !important
 }

 h3 {
     font-size: calc(34px + (40 - 34) * ((100vw - 360px) / (1600 - 360))) !important
 }

 .social {
     font-size: 21px !important
 }

 .rights {
     font-size: calc(10px + (12 - 10) * ((100vw - 360px) / (1600 - 360))) !important
 }

#footer-logo {
  max-width: 250px;
}

a {
  color: #007bff !important;
}

</style>
