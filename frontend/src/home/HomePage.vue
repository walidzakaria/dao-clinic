<template>
  <div class="home">
    <img id="staff-image"
      class="img-rounded img-responsive" src="../assets/main-image.png" alt="staff image">
    <div class="slogan">
      <h1 id="slogan" class="lead">DAO Slimming Centers</h1>
      <h2 id="dr-ahmed">Dr. Ahmed Omar</h2>
    </div>
    <div>
      <h3>
        Book An Online Weight Loss Consultation with Dr. Ahmed Omar!
      </h3>
      <p>
        We are now able to deliver your weight loss programme to you remotely,
        from wherever you are!
      </p>
    </div>
    <div>
      <h3>Our Weight Loss Programmes Are Still Available</h3>
      <p>
        Joining a weight loss program with The DAO Egypt Clinic
        has never been more convenient with our remote appointment service.

        Remote consultations enable us to provide our services nationwide
        and offer a wider range of appointment times, 6 days a week!

        And the additional availability means you can get the help and support you need
        from our weight loss expert Dr. Ahmed Omar whether you are at work,
        at home or even on holiday.
      </p>
    </div>
    <Footer/>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  props: {
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

</style>
