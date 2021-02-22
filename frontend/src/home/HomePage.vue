<template>
  <div class="home">
    <h1 class="slogan">DAO Slimming Centers</h1>
    <carousel />
    <div>
      <router-link to="/booking/" exact id="btn-book" class="btn"
          data-aos="zoom-in-down">
        Book with Dr. Ahmed
      </router-link>
      <p class="main-info">
        <span class="badge">DAO Slimming Centers</span>
        is considered one of the most successful centers
        for weight loss all over Egypt. Our journey began <b>{{ daoYears }}</b> years ago
        with the opending of Haram clinic in 2001.
        <span v-if="!readMore"
            class="span-read-more btn btn-link btn-read-more"
            @click="readMore = true">Read More
        </span>
      </p>
      <transition name="list">
        <p class="main-info" v-show="readMore">
          The thing that makes <span class="badge">Dr. Ahmed's success</span>
          very unique is that helping
          people to lose weight and can reach over 70-80kg weight loss with
          absolutely no Surgery or even Medications,
          and definitely the concept of weight fixation coming into real life,
          and so on the success continues to reach 220,000 cases and that was just the start.<br>
          But once he reached 700,000 cases and almost reached million cases he started to train
          doctors to assist him so he can deliver the help to a wider range of people and also
          launched new departments.<br>
          So he decided to start the expansion and inaugurated Mohandesin clinic and then
          Zayed...<br>
          As it was mentioned, departments in each branch was launched,
          when it was found
          that the cases are interested in reshaping as well as weight loss we started the
          "Localized Obesity" department for the reshaping with its own specialized
          doctors and equipment
          and the results was astonishing, and the kids, when they were
          found committed with amazing parents
          that care enough for their children's health and weight we
          started our "Childhood Obesity"
          department from age of 4 years old to 14 with it own doctors and the
          results was also amazing.<br>
          As people not only from all over Egypt or all over the Middle East
          but from all over the world try
          to reach us and travel across the continents just to pay us a visit
          we decided that we should reach
          them no matter where they are so we launched the "Online Clinic" to
          meet them via a video call every
          week just as the offline clinic...<br>
          Last but not least,
          we tried to encourage the cases by
          a competition..<br>
          Our "<span class="badge">Golden Transformer Competition</span>",
          it's a wonderful success
          for 6 seasons now with more than 11 winners each and everyone lost around 30kg in only
          3 months and every  winner won as much as he lost <span class="badge">Gold</span>!
          And the series of success is just beginning...
          <span class="span-read-more btn btn-link btn-read-more"
              v-show="readMore" @click="readMore = false">Read Less
          </span>
        </p>
      </transition>
      <div id="bottom-line"></div>
    </div>
<!-- ======= Team Section ======= -->
    <section id="team" class="team">

      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <p>Our Activities</p>
        </header>

        <div class="row gy-4">

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-delay="100">
            <div class="member">
              <div class="member-img">
                <img src="../assets/img/dr-ahmed-legend.webp" class="img-fluid" alt="">
              </div>
              <div class="member-info">
                <h4>Dr. Ahmed Omar</h4>
                <span>The Legend</span>
                <!-- <p>The founder of DAO Slimming Centers</p> -->
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-delay="200">
            <div class="member">
              <div class="member-img">
                <img src="../assets/img/dao-online.webp" class="img-fluid" alt="">
              </div>
              <div class="member-info">
                <h4>DAO Online</h4>
                <span>All Over the World</span>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-delay="300">
            <div class="member">
              <div class="member-img">
                <img src="../assets/img/dr-dalia.webp" class="img-fluid" alt="">
              </div>
              <div class="member-info">
                <h4>DAO Localized</h4>
                <span>And Sports Nutritions</span>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-delay="400">
            <div class="member">
              <div class="member-img">
                <img src="../assets/img/dr-aya.webp" class="img-fluid" alt="">
              </div>
              <div class="member-info">
                <h4>DAO Kids</h4>
                <span></span>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-delay="400">
            <div class="member">
              <div class="member-img">
                <img src="../assets/img/academy.webp" class="img-fluid" alt="">
              </div>
              <div class="member-info">
                <h4>DAO Academy</h4>
                <span></span>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-delay="400">
            <div class="member">
              <div class="member-img">
                <img src="../assets/img/golden-transformers.webp" class="img-fluid" alt="">
              </div>
              <div class="member-info">
                <h4>DAO Golden</h4>
                <span>Transformers</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section><!-- End Team Section -->
    <Footer/>
  </div>
</template>

<script>
const Carousel = () => import('./CarouselPage.vue');

export default {
  name: 'HomePage',
  props: {
  },
  data() {
    return {
      readMore: false,
    };
  },
  components: {
    Carousel,
  },
  computed: {
    daoYears() {
      const d = new Date().getFullYear();
      return d - 2001;
    },
  },
  metaInfo() {
    return {
      title: 'DAO World',
      meta: [
        {
          name: 'DAO World',
          content: '',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/**
/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/
:root {
  scroll-behavior: smooth;
}

/*--------------------------------------------------------------
# Sections
--------------------------------------------------------------*/
section {
  padding: 60px 0;
  overflow: hidden;
}

.section-header {
  text-align: center;
  padding-bottom: 40px;
}

.section-header p {
  margin: 10px 0 0 0;
  padding: 0;
  font-size: 30px;
  line-height: 42px;
  /* font-weight: 700; */
}

@media (max-width: 768px) {
  .section-header p {
    font-size: 28px;
    line-height: 32px;
  }

  .member {
    margin-left: auto;
    margin-right: auto;
  }
}

/*--------------------------------------------------------------
# Disable aos animation delay on mobile devices
--------------------------------------------------------------*/
@media screen and (max-width: 768px) {
  [data-aos-delay] {
    transition-delay: 0 !important;
  }
}

/*--------------------------------------------------------------
# Team
--------------------------------------------------------------*/
.team {
  background: #fff;
  padding: 60px 0;
}

.team .member {
  overflow: hidden;
  text-align: center;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.08);
  transition: 0.3s;
}

.team .member .member-img {
  position: relative;
  overflow: hidden;
}

.team .member .member-img:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  /* background: url(../img/team-shape.svg) no-repeat center bottom; */
  background-size: contain;
  z-index: 1;
}

.team .member .social {
  position: absolute;
  right: -100%;
  top: 30px;
  opacity: 0;
  border-radius: 4px;
  transition: 0.5s;
  background: rgba(255, 255, 255, 0.3);
  z-index: 2;
}

.team .member .social a {
  transition: color 0.3s;
  margin: 15px 12px;
  display: block;
  line-height: 0;
  text-align: center;
}

.team .member .social i {
  font-size: 18px;
}

.team .member .member-info {
  padding: 10px 15px 20px 15px;
}

.team .member .member-info h4 {
  /* font-weight: 700; */
  margin-bottom: 5px;
  font-size: 20px;
}

.team .member .member-info span {
  display: block;
  font-size: 14px;
  /* font-weight: 400; */
  color: #aaaaaa;
}

.team .member .member-info p {
  font-style: italic;
  font-size: 14px;
  padding-top: 15px;
  line-height: 26px;
  color: #5e5e5e;
}

.team .member:hover {
  transform: scale(1.08);
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);
}

.team .member:hover .social {
  right: 8px;
  opacity: 1;
}

.slogan {
  text-align: center;
}

#staff-image {
  width: 100%;
  position: relative;
}

.team .member {
  overflow: hidden;
  text-align: center;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0 30px rgb(1 41 112 / 8%);
  transition: 0.3s;
}

.team .member .social {
    position: absolute;
    right: -100%;
    top: 30px;
    opacity: 0;
    border-radius: 4px;
    transition: 0.5s;
    background: rgba(255, 255, 255, 0.3);
    z-index: 2;
}

.team .member .member-info {
    padding: 10px 15px 20px 15px;
}

.team .member .member-info h4 {
    /* font-weight: 700; */
    margin-bottom: 5px;
    font-size: 20px;
}

/* h1, h2, h3, h4, h5, h6 {
    font-family: "Nunito", sans-serif;
} */

.team .member .member-info span {
    display: block;
    font-size: 14px;
    /* font-weight: 400; */
    color: #aaaaaa;
}

.team .member .member-info p {
    font-style: italic;
    font-size: 14px;
    padding-top: 15px;
    line-height: 26px;
    color: #5e5e5e;
}

p {
    margin-top: 0;
    margin-bottom: 1rem;
}

.team .member .member-img {
  position: relative;
  overflow: hidden;
}

img, svg {
    vertical-align: middle;
}

/* #icon-container {

} */
.icons {
  height: 300px;
  margin: 10px;
  display: inline-block;
  border: 1px solid #272627;
  border-radius: 0 50px;
  padding: 0;
}

.icon-img {
  width: 100%;
  border-radius: 0 50px;
  margin: 0;
}

.icon-title {
  color: #272627 !important;
  font-weight: normal;
  font-size: 14px;
  display: inline;
  margin: -50px auto 0 auto !important;
}

#btn-book {
  margin: 10px auto;
  display: block;
  width: 220px;
  background-color: #4b4746;
  color: whitesmoke;
  font-size: 17px;
  border-radius: 50px;
}

#slogan {
  color: rgb(255, 210, 10);
  margin: 0 auto;
  text-align: center;
  font-size: 60px !important;
}

#dr-ahmed {
  color: rgb(255, 210, 10);
  margin: 0 auto;
  text-align: center;
  font-size: 50px !important;
}

.badge {
  color: #9a7338;
  font-size: 17px !important;
  padding: 0 !important;
  margin: 0;
}

.main-info {
  width: 65%;
  margin: 0 auto;
  padding-left: 50px;
  padding-right: 50px;
  text-align: justify;
  text-justify: inter-word;
  transition: all 0.2s;
  font-size: 17px;
}

.btn-read-more {
  display: inline !important;
  white-space: nowrap;
  color: whitesmoke !important;
  background-color: #9a7338 !important;
}

.list-enter,
.list-leave-to {
  visibility: hidden;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}

#bottom-line {
  width: 65%;
  margin: 0 auto;
  border-bottom: 0.5px solid #272627;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
}

#read-more {
  background-color: #9a7338;
  color: whitesmoke;
}

@media screen  and (max-width: 1065px) {
  .main-info {
    width: 95%;
  }
  /* .span-read-more {
    margin-left: -165px;
  } */
}

@media screen  and (max-width: 575px) {
  .main-info {
    width: 100%;
    padding-left: 5%;
    padding-right: 5% ;
  }
}

@media screen and (max-width: 410px) {
  .main-info {
    text-align: center;
  }
}
</style>
