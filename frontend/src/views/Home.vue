<template>
  <div class="home">
    <HomePage/>
    <h1>
      DAO Clinic
    </h1>
    <h3>Make the new you!</h3>
    <h2>
      Our Services
    </h2>
    <h3>Medical Care</h3>
    <h3>Diet Plans and Weight Loss</h3>
    <h3>DAO Academy</h3>
    <h3>Golden Transformers</h3>

  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from '@/home/HomePage.vue';

export default {
  name: 'Home',
  components: {
    HomePage,
  },
};
</script>
