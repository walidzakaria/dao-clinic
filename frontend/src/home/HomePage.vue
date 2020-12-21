<template>
  <div class="home">
    <img id="staff-image"
      class="img-rounded img-responsive" src="../assets/main-image.png" alt="staff image">
    <div class="slogan">
      <h1 class="lead">DAO Slimming Centers</h1>
      <h2>Dr. Ahmed Omar</h2>
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
.lead {
  color: rgb(255, 210, 10);
  margin: 0 auto;
  text-align: center;
  font-size: 60px !important;
}

h2 {
  color: rgb(255, 210, 10);
  margin: 0 auto;
  text-align: center;
  font-size: 50px !important;
}

</style>
