<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      img-width="100%"
      img-height="300px"
      style="text-shadow: 1px 1px 2px #000;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="100%"
            height="350"
            src="../assets/main-image.webp"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="100%"
            height="350"
            src="../assets/dr-ahmed-omar.webp"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="100%"
            height="350"
            src="../assets/cropped-staff-1.webp"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
  img {
    height: calc(100vw / 3.8) !important;
  }
</style>
