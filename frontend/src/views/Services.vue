<template>
  <div>
    <h1>Our Services</h1>
    <!-- ======= Team Section ======= -->
    <section id="team" class="team">

      <div class="container" data-aos="fade-up">

        <div class="row gy-4">

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-delay="100">
            <div class="member">
              <div class="member-img">
                <img src="../assets/img/services/dr-ahmed-legend.webp" class="img-fluid" alt="">
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
                <img src="../assets/img/services/dao-online.webp" class="img-fluid" alt="">
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
                <img src="../assets/img/services/dr-dalia.webp" class="img-fluid" alt="">
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
                <img src="../assets/img/services/dr-aya.webp" class="img-fluid" alt="">
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
                <img src="../assets/img/services/academy.webp" class="img-fluid" alt="">
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
                <img src="../assets/img/services/golden-transformers.webp" class="img-fluid" alt="">
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
            <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio">

      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h1>Testimonials</h1>
          <p class="subtitle">Check our Clients' Testimonials</p>
        </header>

        <div class="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div v-for="(i, index) in randomImages" :key="index"
              data-aos="fade-up"
              class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img :src="require(`../assets/img/testimony/testimony (${i}).webp`)"
                class="img-fluid" alt="testimony image">
              <div class="portfolio-info">
                <div class="portfolio-links">
                  <button @click="toggleLightBox(index)" class="portfokio-lightbox">
                    <img src="../assets/img/icon/iconmonstr-magnifier-7.svg" alt="">
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section><!-- End Portfolio Section -->

    <FsLightbox
      :toggler="toggler"
      :sources="[
        require(`../assets/img/testimony/testimony (${randomImages[imgIndex]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[1]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[2]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[3]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[4]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[5]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[6]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[7]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[8]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[9]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[10]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[11]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[12]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[13]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[14]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[15]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[16]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[17]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[18]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[19]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[20]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[21]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[22]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[23]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[24]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[25]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[26]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[27]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[28]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[29]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[30]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[31]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[32]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[33]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[34]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[35]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[36]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[37]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[38]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[39]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[40]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[41]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[42]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[43]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[44]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[45]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[46]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[47]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[48]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[49]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[50]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[51]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[52]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[53]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[54]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[55]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[56]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[57]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[58]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[59]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[60]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[71]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[72]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[73]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[74]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[75]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[76]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[77]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[78]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[79]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[80]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[81]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[82]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[83]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[84]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[85]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[86]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[87]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[88]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[89]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[90]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[91]}).webp`),
        require(`../assets/img/testimony/testimony (${randomImages[92]}).webp`),
      ]"

    />
  </div>
</template>

<script>
import FsLightbox from 'fslightbox-vue';

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

export default {
  metaInfo() {
    return {
      title: 'DAO World',
      titleTemplate: '%s | Services',
    };
  },
  data() {
    return {
      toggler: false,
      imgIndex: 0,
    };
  },
  components: {
    FsLightbox,
  },
  computed: {
    randomImages() {
      const imgList = [];
      for (let i = 1; i <= 93; i += 1) {
        imgList.push(i);
      }
      return shuffle(imgList);
    },
  },
  methods: {
    toggleLightBox(startIndex) {
      this.imgIndex = startIndex;
      this.toggler = !this.toggler;
    },
  },
};
</script>

<style scoped>
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

/*--------------------------------------------------------------
# Portfolio
--------------------------------------------------------------*/
.portfolio #portfolio-flters {
  padding: 0;
  margin: 0 auto 25px auto;
  list-style: none;
  text-align: center;
  background: white;
  border-radius: 50px;
  padding: 2px 15px;
}

.portfolio #portfolio-flters li {
  cursor: pointer;
  display: inline-block;
  padding: 8px 20px 10px 20px;
  font-size: 15px;
  font-weight: 600;
  line-height: 1;
  color: #444444;
  margin: 0 4px 8px 4px;
  transition: 0.3s;
  border-radius: 50px;
  border: 1px solid #fff;
}

.portfolio #portfolio-flters li:hover, .portfolio #portfolio-flters li.filter-active {
  color: #9a7338;
  border-color: #9a7338;
}

.portfolio #portfolio-flters li:last-child {
  margin-right: 0;
}

.portfolio .portfolio-wrap {
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.75);
  -webkit-box-shadow: 0px 0px 27px -5px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 27px -5px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 27px -5px rgba(0,0,0,0.75);
}

.portfolio .portfolio-wrap::before {
  content: "";
  background: rgba(255, 255, 255, 0.75);
  position: absolute;
  left: 30px;
  right: 30px;
  top: 30px;
  bottom: 30px;
  transition: all ease-in-out 0.3s;
  z-index: 2;
  opacity: 0;
}

.portfolio .portfolio-wrap img {
  transition: 1s;
}

.portfolio .portfolio-wrap .portfolio-info {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  z-index: 3;
  transition: all ease-in-out 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.portfolio .portfolio-wrap .portfolio-info::before {
  display: block;
  content: "";
  width: 48px;
  height: 48px;
  position: absolute;
  top: 35px;
  left: 35px;
  border-top: 3px solid rgba(112, 92, 1, 0.2);
  border-left: 3px solid rgba(112, 92, 1, 0.2);
  transition: all 0.5s ease 0s;
  z-index: 9994;
}

.portfolio .portfolio-wrap .portfolio-info::after {
  display: block;
  content: "";
  width: 48px;
  height: 48px;
  position: absolute;
  bottom: 35px;
  right: 35px;
  border-bottom: 3px solid rgba(112, 92, 1, 0.2);
  border-right: 3px solid rgba(112, 92, 1, 0.2);
  transition: all 0.5s ease 0s;
  z-index: 9994;
}

.portfolio .portfolio-wrap .portfolio-info h4 {
  font-size: 20px;
  color: #012970;
  font-weight: 700;
}

.portfolio .portfolio-wrap .portfolio-info p {
  color: #012970;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
}

.portfolio .portfolio-wrap .portfolio-links {
  text-align: center;
  z-index: 4;
}

.portfolio .portfolio-wrap .portfolio-links button {
  color: #fff;
  background: #c5964f;
  margin: 10px 2px;
  padding: 10px;
  width: 45px;
  height: 45px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  transition: 0.3s;
}

.portfolio .portfolio-wrap .portfolio-links a i {
  font-size: 24px;
  line-height: 0;
}

.portfolio .portfolio-wrap .portfolio-links a:hover {
  background: #c5964f;
}

.portfolio .portfolio-wrap:hover img {
  transform: scale(1.1);
}

.portfolio .portfolio-wrap:hover::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
}

.portfolio .portfolio-wrap:hover .portfolio-info {
  opacity: 1;
}

.portfolio .portfolio-wrap:hover .portfolio-info::before {
  top: 15px;
  left: 15px;
}

.portfolio .portfolio-wrap:hover .portfolio-info::after {
  bottom: 15px;
  right: 15px;
}

/*--------------------------------------------------------------
# Portfolio Details
--------------------------------------------------------------*/
.portfolio-details {
  padding-top: 40px;
}

.portfolio-details .portfolio-details-slider img {
  width: 100%;
}

.portfolio-details .portfolio-details-slider .swiper-pagination {
  margin-top: 20px;
  position: relative;
}

.portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 1;
  border: 1px solid #c5964f;
}

.portfolio-details .portfolio-details-slider .swiper-pagination .swiper-pagination-bullet-active {
  background-color: #c5964f;
}

.portfolio-details .portfolio-info {
  padding: 30px;
  box-shadow: 0px 0 30px rgba(112, 92, 1, 0.2);
}

.portfolio-details .portfolio-info h3 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.portfolio-details .portfolio-info ul {
  list-style: none;
  padding: 0;
  font-size: 15px;
}

.portfolio-details .portfolio-info ul li + li {
  margin-top: 10px;
}

.portfolio-details .portfolio-description {
  padding-top: 30px;
}

.portfolio-details .portfolio-description h2 {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
}

.portfolio-details .portfolio-description p {
  padding: 0;
}
.subtitle {
  text-align: center;
  display: block;
}
</style>
