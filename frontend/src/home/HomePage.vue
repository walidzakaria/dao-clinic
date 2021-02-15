<template>
  <div class="home">
    <carousel />
    <div>
      <h3>DAO Slimming Centers</h3>
      <p class="main-info">
        <span class="badge">DAO Slimming Centers</span>
        is considered one of the most successful centers
        for weight loss all over Egypt. Our journey began <b>{{ daoYears }}</b> years ago
        with the opending of Haram clinic in 2001
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

.slogan {
  margin-top: -150px;
  padding: 5px 20px;
  background-color: transparent;
  z-index: 10;
  position: sticky;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
  border-radius: 10px;
  max-width: 700px;
}

#staff-image {
  width: 100%;
  position: relative;
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

</style>
