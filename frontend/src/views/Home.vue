<template>
  <div class="home">
    <HomePage/>
  </div>
</template>

<script>
// @ is an alias to /src
const HomePage = () => import('@/home/HomePage.vue');

export default {
  name: 'Home',
  components: {
    HomePage,
  },
};
</script>
