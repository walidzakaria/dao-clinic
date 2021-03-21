<template>
    <div class="vue-template">
      <div id="loader" v-if="load">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div id="overlay" v-if="load"></div>
      <h2>My Appointments</h2>
      <br>
      <p>
        We will send you the session link on time.
        Looking forward to seeing you!
        In case of inquiries, please <a href="/about/#contact">contact us</a>.
      </p>
      <div v-for="(a, index) in myAppointments" :key="index" class="media border p-3">
        <div class="mr-3 mt-3 bg-light display-5" style="width:60px;">
          {{ convertSequence(a.sequence) }}
        </div>
        <div class="media-body">
          <h4>{{ convertTitle(a.sequence) }}
            <small><i>{{ translateDate(a.date, a.time) }}</i></small>
          </h4>
          <p>{{ translateTime(a.date, a.time) }}</p>
        </div>
      </div>
    </div>
</template>

<script>
function addLeadingZero(inputNumber) {
  const result = inputNumber < 10 ? `0${inputNumber.toString()}` : inputNumber.toString();
  return result;
}

export default {
  data() {
    return {
      load: true,
      myAppointments: [],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch('res/retrieveMyBookings')
        .then((response) => {
          this.myAppointments = response.data;
          console.log(this.myAppointments);
          this.load = false;
        }).catch((error) => {
          console.log(error);
          this.myAppointments = [];
          this.load = false;
        });
    });
  },
  computed: {

  },
  methods: {
    wait(isWaiting) {
      this.load = isWaiting;
    },
    convertSequence(number) {
      let result = '1st';
      if (number === 2) {
        result = '2nd';
      } else if (number === 3) {
        result = '3rd';
      } else if (number === 4) {
        result = '4th';
      }
      return result;
    },
    convertTitle(number) {
      let result = 'First';
      if (number === 2) {
        result = 'Second';
      } else if (number === 3) {
        result = 'Third';
      } else if (number === 4) {
        result = 'Fourth';
      }
      return `${result} Session`;
    },
    translateDate(inputDate, inputTime) {
      const sessionDate = new Date(`${inputDate} ${inputTime}`);
      const nowDate = new Date();
      const past = sessionDate < nowDate ? 'Done' : 'Due';
      const result = `${past} in ${sessionDate.toLocaleString('default', { month: 'long' })} ${sessionDate.getDate()}, ${sessionDate.getFullYear()}`;
      return result;
    },
    translateTime(inputDate, inputTime) {
      const sessionDate = new Date(`${inputDate} ${inputTime}`);
      const nowDate = new Date();
      const past = sessionDate < nowDate ? 'was' : 'will be';
      let hours = sessionDate.getHours();
      const minutes = sessionDate.getMinutes();
      let midDay = 'AM';
      if (hours === 12) {
        midDay = 'PM';
      } else if (hours > 12) {
        hours -= 12;
        midDay = 'PM';
      }
      const result = `The session ${past} at ${addLeadingZero(hours)}:${addLeadingZero(minutes)} ${midDay}`;
      return result;
    },
  },
};
</script>

<style>
  form {
    max-width: 400px;
    margin: 10px auto;
    /* border: 2px solid grey; */
    padding: 12px 30px 5px 30px;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 23px -8px rgba(10,10,10,1);
    -moz-box-shadow: 0px 0px 23px -8px rgba(10,10,10,1);
    box-shadow: 0px 0px 23px -8px rgba(10,10,10,1);
  }

  label {
    text-align: left !important;
    width: 100%;
  }

  li {
    margin: 0 auto 0 0;
    text-align: left !important;
  }

  .spinner-border {
    height: 1.5rem;
    width: 1.5rem;
  }

  .display-5 {
    font-size: 2rem;
    line-height: 1;
    font-weight: 250;
    border-radius: 30%;
  }
</style>
