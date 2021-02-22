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
  </div>
</template>

<script>
export default {
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

</style>
