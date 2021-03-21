<template>
  <div>
    <!-- ======= Team Section ======= -->
    <section id="team" class="team">

      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h1>Our Doctors</h1>
          <p class="subtitle">Our hard working team</p>
        </header>

        <div class="col-lg-3 col-md-6 d-flex align-items-stretch dr-ahmed"
              data-aos="fade-up" data-aos-delay="100">
            <div class="member">
              <div class="member-img">
                <img src="../assets/img/doctors/dr-ahmed.webp" class="img-fluid" alt="dr-ahmed">
              </div>
              <div class="member-info">
                <h4>Dr. Ahmed</h4>
                <span>Founder of DAO Slimming Centers</span>
              </div>
            </div>
          </div>
        <div class="row gy-4">

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-delay="200">
            <div class="member">
              <div class="member-img">
                <img src="../assets/img/doctors/dr-laila.webp" class="img-fluid" alt="dr-laila">
              </div>
              <div class="member-info">
                <h4>Dr. Laila</h4>
                <span>Head of DAO Online Department</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-delay="300">
            <div class="member">
              <div class="member-img">
                <img src="../assets/img/doctors/dr-noha.webp" class="img-fluid" alt="">
              </div>
              <div class="member-info">
                <h4>Dr. Noha</h4>
                <span>Head of DAO Haram Branch</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-delay="400">
            <div class="member">
              <div class="member-img">
                <img src="../assets/img/doctors/dr-aya.webp" class="img-fluid" alt="">
              </div>
              <div class="member-info">
                <h4>Dr. Aya</h4>
                <span>Head of DAO Kids Clinic</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up" data-aos-delay="400">
            <div class="member">
              <div class="member-img">
                <img src="../assets/img/doctors/dr-dalia.webp" class="img-fluid" alt="">
              </div>
              <div class="member-info">
                <h4>Dr. Dalia</h4>
                <span>DAO Localized & Sports Nutrition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End Team Section -->
  </div>
</template>

<script>

export default {
  metaInfo() {
    return {
      title: 'DAO World',
      titleTemplate: '%s | Our Doctors',
    };
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
  padding-bottom: 12px;
}

.team .member .member-img:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: url(../assets/img/doctors/team-shape.svg) no-repeat center bottom;
  background-size: contain;
  z-index: 1;
}

.team .member .member-info {
  padding: 10px 15px 20px 15px;
}

.team .member .member-info h4 {
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 20px;
  color: #9a7338;
}

.team .member .member-info span {
  display: block;
  font-size: 14px;
  font-weight: 400;
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
  box-shadow: 0px 0 30px rgba(155, 142, 27, 0.1);
}

.team .member:hover .social {
  right: 8px;
  opacity: 1;
}
.dr-ahmed {
  margin-left: auto;
  margin-right: auto;
}

.subtitle {
  text-align: center;
  display: block;
}
</style>
