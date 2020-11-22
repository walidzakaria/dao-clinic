<template>
  <div class="home">
    <img id="staff-image" src="../assets/cropped-staff-1.jpeg" alt="staff image">
    <div class="slogan">
      <h1>We help people reach new era!</h1>
      <h4>Our team of specialists is ready to help you. Book an appointment now!</h4>
    </div>
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
  margin-top: -100px;
  padding: 5px 20px;
  background-color: #3635338c;
  z-index: 10;
  position: sticky;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
  border-radius: 10px;
  max-width: 650px;
}

#staff-image {
  width: 100%;
  position: relative;
}
</style>
