<template>
  <div class="about">
    <h1>About Us</h1>
    <video autoplay muted loop id="myVideo">
    <source src="../assets/vid/about-us.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    <div class="content">
  <h1>Welcome to DAO Slimming Centers</h1>
    <p>
      Create a New YOU!
    </p>
    </div>
    <!-- Feature Tabs -->
      <div class="row feture-tabs" data-aos="fade-up">
        <div class="col-lg-6 features">
          <h2>Features</h2>

          <!-- Tabs -->
          <ul class="nav nav-pills mb-3">
            <li>
              <button data-bs-toggle="pill"
                  @click="selectedPage = 1" class="btn" :class="{ 'clicked': selectedPage === 1}">
                Our History
              </button>
            </li>
            <li>
              <button data-bs-toggle="pill"
                  @click="selectedPage = 2" class="btn" :class="{ 'clicked': selectedPage === 2}">
                Our Mission
              </button>
            </li>
            <li>
              <button data-bs-toggle="pill"
                  @click="selectedPage = 3" class="btn" :class="{ 'clicked': selectedPage === 3}">
                Our Vision
              </button>
            </li>
          </ul><!-- End Tabs -->

          <!-- Tab Content -->
          <div class="tab-content">

            <div class="tab-pane fade show" :class="{ 'active': selectedPage === 1 }" id="tab1">
              <p>Dr. Ahmed Omar started his career as an obesity
                specialist in 2001 in Haram branch.</p>
              <p>
                His clinic was well received because of his talent in
                dealing with overweight and the psyche of an obese patient.
              </p>
              <p>
                He created his own school to lose the largest number of extra
                kilograms in the shortest possible time and ensure the final
                weight stabilization. It is completely dependent on dietary systems only,
                in what has been called Bedouin System
              </p>
              <p>
                In 2007, the expansion began and Mohandessin branch was opened,
                and it became the destination of many art stars and celebrities.
              </p>
              <p>
                In 2013 Sheikh Zayed branch was opened and he was hosted in
                many programs and was called the Magician.
              </p>
              <p>
                When Dr. Ahmed was asked about the possibility of using diets in
                many sites and the pages of celebrities, she always answered him,
                Lord, accept him as a science that will benefit him.
              </p>
              <p>
                To graduate batches of other doctors with the same knowledge
                through a training course in the belief that DAO ACADEMY established
                2015 in beneficial science will not be limited to one person.
              </p>
              <p>
                To deal with childhood obesity through dedicated systems for dealing
                with children, Dao Kids was established in 2016.
              </p>
              <p>
                From there, a number of obesity cases were attracted in a 12-week
                competition GOLDEN Transformers in 2017, he established a competition
                in which he smashed the standard scores, and the winner was given a gram
                of Gold for every kilogram he lost, as an encouragement for his efforts.
              </p>
              <p>
                DAO ONLINE In 2018, after his name spread internationally,
                he opened his online clinic and through it,
                he was able to reach customers outside Egypt,
                and the demand for hem was from all over the world.
              </p>
              <p>
                And in 2019, it became required in all capitals of the world,
                especially the Gulf countries, to give a training course with accredited
                certificates entitled "Dealing with Overweight" strategy.
              </p>
              <p>
                The magician Ahmed Omar and the international slimming legend is still
                seeking to provide more ideas to fight obesity.
              </p>
            </div><!-- End Tab 1 Content -->
            <div class="tab-pane fade show" :class="{ 'active': selectedPage === 2 }" id="tab2">
              <div class="d-flex align-items-center mb-2">
                <i class="bi bi-check2"></i>
                <h4>World without obesity</h4>
              </div>
              <p>
                Dao slimming centers have a mission is to build permanent,
                healthy habits through daily practice, to increase fitness level
                and lose excess fat by committing to regular activity and monitoring
                food intake, and to maintain any weight lost all the while ensuring
                that this journey is a happy and healthy one by celebrating every step
                taken that  can also enjoy an active lifestyle for fun while
                enduring that make themself and my own health as big of a priority
                as anything else in  life and take the time they need to
                be active and to support on plan eating..
              </p>
            </div><!-- End Tab 2 Content -->

            <div class="tab-pane fade show" :class="{ 'active': selectedPage === 3 }" id="tab3">
              <p>Pioneering changing the popular weight loss mindset and practicing sports
                where the primary goal of exercise is to build
                and maintain muscle and psychological strength.</p>
            </div><!-- End Tab 3 Content -->

          </div>
        </div>
        <div class="col-lg-6 carousel-container">
            <FeaturesCarousel />
          </div>
        <div class="parallax-img" v-parallax="0.2">
          <img src="../assets/img/about/dr-ahmed-quote.jpg" class="img-fluid" alt="dr-ahmed">
        </div>
        <div class="quote-section">
          <q>
            Obesity is neither a defect nor a deficiency in YOU.
            It's a disease and has a cure.
            Its start is a decision and motivation.
            <div class="more-qoute">
              The drive to change for the better is not in your appearance and body,
              but rather in your personality, way of thinking, and outlook on life.
              And to get out of a body that you are refusing to be in.
            </div>
          </q>
        </div>
    </div><!-- End Feature Tabs -->

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">

      <div class="container" data-aos="fade-up">

        <header id="contact-us" class="section-header">
          <h2>Contact Us</h2>
        </header>

        <div class="row gy-4">

          <div class="col-lg-6 info-section">

            <div class="row gy-4">
              <div class="col-md-6">
                <div class="info-box">
                  <i class="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <a href="https://goo.gl/maps/9zrf3vFoFHMtqNyQA" target="_blank">
                    <img src="../assets/img/icon/iconmonstr-location-19.svg" alt="location-logo">
                    Mohandseen: 49 Sudan st.
                  </a><br>
                  <a href="https://g.page/ZayedDowntown?share" target="_blank">
                    <img src="../assets/img/icon/iconmonstr-location-19.svg" alt="location-logo">
                    Sheikh Zayed: 208 2nd Floor Downtown Mall
                  </a>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box">
                  <i class="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <a href="tel:00201019090187" target="_blank">
                    <img src="../assets/img/icon/iconmonstr-phone-6.svg" alt="phone-logo">
                    (+20) 10 190 90187
                  </a><br>
                <a href="https://wa.me/201019090187" target="_blank">
                  <img src="../assets/img/icon/iconmonstr-whatsapp-1.svg" alt="whatsapp-logo">
                  (+20) 10 190 90187
                </a>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box">
                  <i class="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <a href="mailto:info@daoegypt.com" target="_blank">
                    <img src="../assets/img/icon/iconmonstr-email-1.svg" alt="mail">
                    info@daoegypt.com
                </a>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box">
                  <i class="bi bi-clock"></i>
                  <h3>Open Hours</h3>
                  <p>{{ openingDays }}<br>{{openingHours}}</p>
                </div>
              </div>
            </div>

          </div>

          <div class="col-lg-6">
            <form v-on:submit.prevent @submit="sendRequest()">
      <h3>Submit Request</h3>

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
      <div v-if="isSent" class="sent-message">
        Your message has been sent. Thank you!
      </div>
      <div v-if="isNotSent" class="error-message">
        Failed to send your message!
      </div>
      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Send Message <span v-if="isLoading" class="spinner-border"></span>
      </button>
      <br>
    </form>

          </div>

        </div>

      </div>

    </section><!-- End Contact Section -->
  </div>
</template>

<script>
import FeaturesCarousel from '../about-us/FeaturesCarousel.vue';

export default {
  components: {
    FeaturesCarousel,
  },
  metaInfo() {
    return {
      title: 'DAO World',
      titleTemplate: '%s | About Us',
    };
  },
  data() {
    return {
      url: '../assets/img/icon/iconmonstr-email-1.svg',
      isLoading: false,
      isSent: false,
      isNotSent: false,
      name: '',
      email: '',
      phone: '',
      message: '',
      selectedPage: 1,
    };
  },
  computed: {
    openingDays() {
      const { availableDays } = this.$store.state.res;
      let openDays = '';
      if (availableDays.Saturday) { openDays += 'Saturday, '; }
      if (availableDays.Sunday) { openDays += 'Sunday, '; }
      if (availableDays.Monday) { openDays += 'Monday, '; }
      if (availableDays.Tuesday) { openDays += 'Tuesday, '; }
      if (availableDays.Wednesday) { openDays += 'Wednesday, '; }
      if (availableDays.Thursday) { openDays += 'Thursday, '; }
      if (availableDays.Friday) { openDays += 'Friday, '; }
      openDays = openDays.slice(0, -2);
      return openDays;
    },
    openingHours() {
      const { availableDays } = this.$store.state.res;
      let openHours = '';
      openHours = `${availableDays.openTime} to ${availableDays.closeTime}`;
      return openHours;
    },
  },
  mounted() {
    this.$store.dispatch('res/getAvailableDays');
  },
  methods: {
    async sendRequest() {
      if (this.isLoading) { return; }
      this.isSent = false;
      this.isNotSent = false;
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
          this.name = '';
          this.phone = '';
          this.email = '';
          this.message = '';
          this.isSent = true;
        }).catch((error) => {
          console.log(error);
          this.isNotSent = true;
        });
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

#myVideo {
  margin: -55px auto 55px auto;
  width: 100%;
}

.content {
  position: relative;
  background: rgba(0, 0, 0, 0.6);
  color: #faf967;
  width: 100%;
  padding: 20px;
  margin-top: -180px;
  text-align: center;
}

.feture-tabs {
  margin-top: 40px;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
  }

  .content {
    padding: 10px 5px 2px 5px;
  }

  #myVideo {
    margin-top: 0;
  }

  .quote-section {
    margin-top: -130px !important;
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }
}

@media screen and (max-width: 600px) {
  .parallax-img {
    margin-top: -50px;
  }

  .quote-section {
    margin-top: -130px;
    margin-bottom: 50px;
  }
}

@media screen and (max-width: 415px) {
  h1 {
    font-size: 1rem;
  }
}

.features .feature-box {
  padding: 24px 20px;
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.08);
  transition: 0.3s;
  height: 100%;
}

.features .feature-box h2 {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
}

.features .feature-box i {
  line-height: 0;
  background: #ecf3ff;
  padding: 4px;
  margin-right: 10px;
  font-size: 24px;
  border-radius: 3px;
  transition: 0.3s;
}

.features .feature-box:hover i {
  background: #9a7339;
  color: #fff;
}

.features .feture-tabs {
  margin-top: 120px;
}

.features .feture-tabs h2 {
  color: #9a7339;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .features .feture-tabs h2 {
    font-size: 28px;
  }
}

.features .feture-tabs .nav-pills {
  border-bottom: 1px solid #eee;
}

.features .feture-tabs .nav-link {
  background: none;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;
  color: #9a7339;
  padding: 12px 0;
  margin-right: 25px;
  margin-bottom: -2px;
  border-radius: 0;
}

.features .feture-tabs .nav-link.active {
  color: whitesmoke !important;
  border-bottom: 3px solid #9a7339;
}

.features .feture-tabs .tab-content h4 {
  font-size: 18px;
  margin: 0;
  font-weight: 700;
  color: #9a7339;
}

.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    color: #fff;
    background-color: #9a7339;
}

.nav-pills .nav-link {
    color: #9a7338;
}

.features .feture-tabs .tab-content i {
  font-size: 24px;
  line-height: 0;
  margin-right: 8px;
  color: #c5964f;
}

.features .feature-icons {
  margin-top: 120px;
}

.features .feature-icons h2 {
  color: #9a7339;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .features .feature-icons h2 {
    font-size: 28px;
  }
}

.features .feature-icons .content .icon-box {
  display: flex;
}

.features .feature-icons .content .icon-box h4 {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 10px 0;
  color: #9a7339;
}

.features .feature-icons .content .icon-box i {
  font-size: 44px;
  line-height: 44px;
  color: #9a7339;
  margin-right: 15px;
}

.features .feature-icons .content .icon-box p {
  font-size: 15px;
  color: #c5964f;
}

.clicked {
  background-color: #9a7339;
  color: whitesmoke !important;
}

button:focus {
  border-color: #9a7339;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(154, 115, 57, 0.5);
}

.parallax-img {
  margin-top: 80px;
  z-index: -999;
}

.features {
  background-color: white;
}

q {
  display: inline;
  color: #faf967;
  font-size: 18px;
  font-weight: 400;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.more-qoute {
  display: none;
}

@media screen and (min-width: 768px) {
  .more-qoute {
    display: inline;
  }
}

.quote-section {
  padding: 30px;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  margin-top: -230px;
  margin-bottom: 150px;
  width: 100%;
}

.carousel-container {
 background-color: white;
}

/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/

.contact .info-box {
  color: #444444;
  background: #fafbff;
  padding: 30px;
}

.contact .info-box i {
  font-size: 38px;
  line-height: 0;
  color: #4154f1;
}

.contact .info-box h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0 10px 0;
}

.contact .info-box p {
  padding: 0;
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}

.contact form {
  background: #fafbff;
  padding: 30px;
  height: 100%;
}

.error-message {
  background: #f78b6e;
  text-align: left;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.sent-message {
  background: #4bec96;
  text-align: left;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.contact form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}

.contact form input, .contact form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
  border-radius: 0;
}

.contact form input:focus, .contact form textarea:focus {
  border-color: #9a7338;
}

.contact form input {
  padding: 10px 15px;
}

.contact form textarea {
  padding: 12px 15px;
}

@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

form {
  z-index: 10;
  background-color: #fafbff;
  border-radius: 2px;
}

.section-header {
  text-align: center;
}

#contact a {
  color: #9a7338;
}

</style>
