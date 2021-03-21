<template>
  <div class="home">
    <h1 class="slogan">DAO Slimming Centers</h1>
    <carousel />
    <div>
      <button class="btn btn-dark" id="book-now"
          type="button" data-aos="zoom-in-down" @click="bookNow()">
        <span style="font-size:16px;">Book with the LEGEND</span><br>
        <span style="font-size:12px;">Dr. Ahmed Omar</span>
      </button>
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
      titleTemplate: '%s | Home',
      // meta: [
      //   {
      //     name: 'description',
      //     content: '...',
      //   },
      //   { name: 'robots', content: 'index,follow' },
      // ],
    };
  },
  methods: {
    bookNow() {
      this.$router.push('/booking');
    },
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
  /* width: 220px; */
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

#book-now {
  margin: 10px auto;
  display: block;
  position: inherit;
  border-radius: 5px;
  -webkit-box-shadow: -5px -5px 23px -8px rgba(10,10,10,1);
  -moz-box-shadow: -5px -5px 23px -8px rgba(10,10,10,1);
  box-shadow: -5px -5px 23px -8px rgba(10,10,10,1);
}
</style>
