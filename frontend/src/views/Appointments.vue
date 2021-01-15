<template>
    <div class="vue-tempalte">
      <div v-if="registered">
        <h2>Your appointment was confirmed!</h2>
        <h3>Please check your email for confirmation.</h3>
        <p>Click <router-link to="/">here</router-link> to visit our home page.</p>
      </div>
        <form v-if="!registered" v-on:submit.prevent @submit="book()">
            <h2>Book an Appointment</h2>

            <div class="form-group">
                <label>Select Session Type <span class="text-danger">*</span></label>
                <select v-model="sessionType" class="form-control">
                  <option value="S">One Session</option>
                  <option value="M">Four Sessions</option>
                </select>
            </div>
            <!-- <div v-if="sessionType === 'S'">
              <BookDay :sessionNumber="0" @clicked="singleSelected" />
            </div>
            <div v-else>
              <BookDay @clicked="firstSelected" :sessionNumber="1" />
              <BookDay @clicked="secondSelected" :sessionNumber="2" />
              <BookDay @clicked="thirdSelected" :sessionNumber="3" />
              <BookDay @clicked="fourthSelected" :sessionNumber="4" />
            </div> -->
            <div class="form-group">
              <label for="comment">Comment:</label>
              <textarea v-model="comments" class="form-control" rows="5" id="comment"></textarea>
            </div>
            <ul>
              <li v-for="(m, index) in errorMessages" :key="index"
                class="text-danger">{{ m }}
              </li>
            </ul>
            <button type="submit" class="btn btn-dark btn-lg btn-block">
              Book  <span v-if="isLoading" class="spinner-border"></span>
            </button>

            <p class="forgot-password text-right">
                Already registered
                <router-link to="/login/" exact="">sign in?</router-link>
            </p>
        </form>

    </div>
</template>

<script>

// import BookDay from './BookingSelection.vue';

export default {
  data() {
    return {
      isLoading: false,
      registered: false,
      sessionType: 'S',
      singleStartDate: new Date(),
      firstStartDate: new Date(),
      secondStartDate: new Date(),
      thirdStartDate: new Date(),
      fourthStartDate: new Date(),
      singleSchedule: {},
      firstSchedule: [],
      secondSchedule: [],
      thirdSchedule: [],
      fourthSchedule: [],
      errorMessages: [],
      comments: '',
    };
  },
  components: {
    // BookDay,
  },
  computed: {
  },
  created() {
  },
  methods: {
    book() {
      this.errorMessages = [];
      if (this.sessionType === 'M') {
        if (!this.firstSchedule || !this.secondSchedule) {
          this.errorMessages.push('Please select a valid date and time');
        } else if (!this.thirdSchedule || !this.fourthSchedule) {
          this.errorMessages.push('Please select a valid date and time');
        }

        if (this.firstStartDate > this.secondStartDate) {
          this.errorMessages.push('The second entered date is invalid!');
        }
        if (this.secondStartDate > this.thirdStartDate) {
          this.errorMessages.push('The third entered date is invalid!');
        }
        if (this.thirdStartDate > this.fourthStartDate) {
          this.errorMessages.push('The fourth entered date is invalid!');
        }
      } else if (!this.singleSchedule) {
        this.errorMessages.push('Please select a valid date and time');
      }
      if (this.errorMessages.length > 0) { return; }
      if (this.sessionType === 'S') {
        const bodyRequest = {
          sequence: null,
          date: this.singleSchedule.date,
          time: this.singleSchedule.time,
          price: 1000,
          comments: this.comments,
        };
        this.$store.dispatch('res/postNewBooking', bodyRequest);
      }
    },
    singleSelected(event) {
      console.log('clicked', event);
      this.singleSchedule = event;
    },
    firstSelected(event) {
      console.log('clicked', event);
      this.firstSchedule = event;
    },
    secondSelected(event) {
      console.log('clicked', event);
      this.secondStartDate = event;
    },
    thirdSelected(event) {
      console.log('clicked', event);
      this.thirdSchedule = event;
    },
    fourthSelected(event) {
      console.log('clicked', event);
      this.fourthSchedule = event;
    },
  },
};

</script>

<style scoped>
  form {
    max-width: 500px;
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

  option {
    color: #007bff;
  }

  option:disabled {
    color: gray;
  }

  .spinner-border {
    height: 1.5rem;
    width: 1.5rem;
  }

</style>
