<template>
    <div class="vue-tempalte">
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
        <form v-if="iframeLink === ''" v-on:submit.prevent @submit="book()">
            <h2>Book an Appointment</h2>

            <div class="form-group">
                <label>Select Session Type <span class="text-danger">*</span></label>
                <select v-model="sessionType" class="form-control">
                  <option value="S">One Session</option>
                  <option value="M">Four Sessions</option>
                </select>
            </div>
            <div v-if="sessionType === 'S'" class="form-group">
              <label>
                Select Session Date & Time <span class="text-danger">*</span>
              </label>
                <select v-model="singleSelectedDateIndex" @change="fillSingleAvailableTimes()"
                    class="form-control input-date" required>
                  <option value="null">--Select Date--</option>
                  <option v-for="(el, index) in singleAvailableDays" :key="index" :value="index"
                    :disabled="!el.isAvailable">
                    {{ el.formattedDate }}
                    <span v-if="!el.isAvailable"> <pre>&#9;&#9;</pre> • Not Available </span>
                  </option>
                </select>
                <select v-model="singleSelectedTime" class="form-control input-time" required>
                  <option value="null">--Select Time--</option>
                  <option v-for="(el, index) in singleAvailableTimes"
                    :key="index" :value="el.freeSlot"
                    :disabled="el.timeBlocked">
                    {{ el.freeSlot }} <span v-if="el.timeBlocked"> • Booked </span>
                  </option>
                </select>
            </div>
            <!-- for multiple sessions -->
            <div v-else>
              <div class="form-group">
                <label>
                  First Session Date & Time <span class="text-danger">*</span>
                </label>
                  <select v-model="firstSelectedDateIndex" @change="fillFirstAvailableTimes()"
                      class="form-control input-date" required>
                    <option value="null">--Select Date--</option>
                    <option v-for="(el, index) in firstAvailableDays" :key="index" :value="index"
                      :disabled="!el.isAvailable">
                      {{ el.formattedDate }}
                      <span v-if="!el.isAvailable"> <pre>&#9;&#9;</pre> • Not Available </span>
                    </option>
                  </select>
                  <select v-model="firstSelectedTime" class="form-control input-time"
                      @change="fillSecondDays()" required>
                    <option value="null">--Select Time--</option>
                    <option v-for="(el, index) in firstAvailableTimes"
                      :key="index" :value="el.freeSlot"
                      :disabled="el.timeBlocked">
                      {{ el.freeSlot }} <span v-if="el.timeBlocked"> • Booked </span>
                    </option>
                  </select>
              </div>

              <div class="form-group">
                <label>
                  Second Session Date & Time <span class="text-danger">*</span>
                </label>
                  <select v-model="secondSelectedDateIndex" @change="fillSecondAvailableTimes()"
                      class="form-control input-date" required>
                    <option value="null">--Select Date--</option>
                    <option v-for="(el, index) in secondAvailableDays" :key="index" :value="index"
                      :disabled="!el.isAvailable">
                      {{ el.formattedDate }}
                      <span v-if="!el.isAvailable"> <pre>&#9;&#9;</pre> • Not Available </span>
                    </option>
                  </select>
                  <select v-model="secondSelectedTime" class="form-control input-time"
                      @change="fillThirdDays()" required>
                    <option value="null">--Select Time--</option>
                    <option v-for="(el, index) in secondAvailableTimes"
                      :key="index" :value="el.freeSlot"
                      :disabled="el.timeBlocked">
                      {{ el.freeSlot }} <span v-if="el.timeBlocked"> • Booked </span>
                    </option>
                  </select>
              </div>

              <div class="form-group">
                <label>
                  Third Session Date & Time <span class="text-danger">*</span>
                </label>
                  <select v-model="thirdSelectedDateIndex" @change="fillThirdAvailableTimes()"
                      class="form-control input-date" required>
                    <option value="null">--Select Date--</option>
                    <option v-for="(el, index) in thirdAvailableDays" :key="index" :value="index"
                      :disabled="!el.isAvailable">
                      {{ el.formattedDate }}
                      <span v-if="!el.isAvailable"> <pre>&#9;&#9;</pre> • Not Available </span>
                    </option>
                  </select>
                  <select v-model="thirdSelectedTime" class="form-control input-time"
                      @change="fillFourthDays()" required>
                    <option value="null">--Select Time--</option>
                    <option v-for="(el, index) in thirdAvailableTimes"
                      :key="index" :value="el.freeSlot"
                      :disabled="el.timeBlocked">
                      {{ el.freeSlot }} <span v-if="el.timeBlocked"> • Booked </span>
                    </option>
                  </select>
              </div>

              <div class="form-group">
                <label>
                  Fourth Session Date & Time <span class="text-danger">*</span>
                </label>
                  <select v-model="fourthSelectedDateIndex" @change="fillFourthAvailableTimes()"
                      class="form-control input-date" required>
                    <option value="null">--Select Date--</option>
                    <option v-for="(el, index) in fourthAvailableDays" :key="index" :value="index"
                      :disabled="!el.isAvailable">
                      {{ el.formattedDate }}
                      <span v-if="!el.isAvailable"> <pre>&#9;&#9;</pre> • Not Available </span>
                    </option>
                  </select>
                  <select v-model="fourthSelectedTime" class="form-control input-time" required>
                    <option value="null">--Select Time--</option>
                    <option v-for="(el, index) in fourthAvailableTimes"
                      :key="index" :value="el.freeSlot"
                      :disabled="el.timeBlocked">
                      {{ el.freeSlot }} <span v-if="el.timeBlocked"> • Booked </span>
                    </option>
                  </select>
              </div>
            </div>
            <div class="form-group">
              <label for="comment">Comment:</label>
              <textarea v-model="comments" class="form-control" rows="5" id="comment"></textarea>
            </div>
            <select class="form-control" name="currency" id="currency"
              ref="currency" v-model="selectedCurrency" required>
              <option
                  v-for="(k, index) in currencyNames"
                  :key="index" :value="k" :disabled="k === '---MORE---'">
                {{ k }}
              </option>
            </select>
            <div v-if="sessionType === 'S'">
              <p>
                Total Price: {{ singleSessionPrice | currency(selectedCurrency) }}
              </p>
              <p>Book 4 sessions and save up to {{ savedAmount | currency(selectedCurrency) }}</p>
            </div>
            <div v-else>
              <p>Total Price: {{ multiSessionPrice | currency(selectedCurrency) }}</p>
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Enter coupon here..."
                  aria-label="Coupon" aria-describedby="basic-addon2"
                  v-model.trim="coupon.code"
                  @keypress.enter.prevent @keypress.enter="redeem();">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary"
                    @click="redeem();" type="button">
                    Redeem <span v-if="coupon.load" class="spinner-border"></span>
                  </button>
              </div>
              <div v-if="coupon.discount > 0" class="text-primary">
                Congratulations! You have exclusive discount of
                <strong v-if="!coupon.percent">
                  {{ coupon.discount * currencyRate | currency(selectedCurrency) }}
                </strong>
                <strong v-if="coupon.percent">
                  {{ coupon.discount | currency('%')}}
                </strong>
                <br>
                Total amount after discount is
                  <strong>{{ finalPrice | currency(selectedCurrency) }}</strong>
              </div>
            </div>
            <ul>
              <li v-for="(m, index) in errorMessages" :key="index"
                class="text-danger">{{ m }}
              </li>
            </ul>
            <button type="submit" class="btn btn-dark btn-lg btn-block">
              Book Now <span v-if="isLoading" class="spinner-border"></span>
            </button>
            <div class="gateway-logos">
              <img src="../assets/img/booking/mc_vrt_pos.svg"
                  alt="mastercard-logo" width="80">
              <img src="../assets/img/booking/MainVisaBlue.jpg"
                  alt="visa-logo" width="80">
            </div>
            <br>
            <!-- <iframe src="https://secure-egypt.paytabs.com/payment/page/3F12289C82E4157B7B65349D7ECBF07C5CE176142C111AB26B28E126"
              style="border:none;" title="Iframe Example" id="iframe"></iframe> -->
        </form>
        <iframe v-else :src="iframeLink" frameborder="0"></iframe>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';

function addLeadingZero(inputNumber) {
  const result = inputNumber < 10 ? `0${inputNumber.toString()}` : inputNumber.toString();
  return result;
}

function DateForJson(inputDate) {
  const result = `${inputDate.getFullYear()}-${addLeadingZero(inputDate.getMonth() + 1)}-${addLeadingZero(inputDate.getDate())}`;
  return result;
}

function TimeForJson(inputTime) {
  const result = new Date();
  let hours = parseInt(inputTime.substr(0, 2), 0);
  const minutes = parseInt(inputTime.substr(3, 2), 0);
  if (inputTime.substr(6, 2) === 'PM' && hours !== 12) {
    hours += 12;
  }
  result.setHours(hours);
  result.setMinutes(minutes);
  result.setMilliseconds(0);
  return `${addLeadingZero(result.getHours())}:${addLeadingZero(result.getMinutes())}:00`;
}

export default {
  metaInfo() {
    return {
      title: 'DAO World',
      titleTemplate: '%s | Booking',
    };
  },
  data() {
    return {
      load: true,
      iframeLink: '',
      selectedCurrency: 'USD',
      currency: null,
      singlePrice: null,
      multiplePrice: null,
      isLoading: false,
      registered: false,
      sessionType: 'S',
      errorMessages: [],
      comments: '',
      availableWeekdays: null,
      busySlots: [null, null, null, null, null],

      singleAvailableDays: null,
      singleAvailableTimes: null,
      singleSelectedDateIndex: null,
      singleSelectedTime: null,

      firstAvailableDays: null,
      firstAvailableTimes: null,
      firstSelectedDateIndex: null,
      firstSelectedTime: null,

      secondAvailableDays: null,
      secondAvailableTimes: null,
      secondSelectedDateIndex: null,
      secondSelectedTime: null,

      thirdAvailableDays: null,
      thirdAvailableTimes: null,
      thirdSelectedDateIndex: null,
      thirdSelectedTime: null,

      fourthAvailableDays: null,
      fourthAvailableTimes: null,
      fourthSelectedDateIndex: null,
      fourthSelectedTime: null,
      coupon: {
        code: null,
        load: false,
        id: null,
        discount: 0,
        percent: null,
      },
    };
  },
  computed: {
    ...mapGetters('user', ['isAuthenticated', 'userInfo', 'loginName']),
    currencyNames() {
      const keys = this.currency ? Object.keys(this.currency) : null;
      if (keys) {
        let currencyIndex = keys.indexOf('EGP');
        keys.splice(currencyIndex, 1);
        currencyIndex = keys.indexOf('USD');
        keys.splice(currencyIndex, 1);
        currencyIndex = keys.indexOf('EUR');
        keys.splice(currencyIndex, 1);
        currencyIndex = keys.indexOf('SAR');
        keys.splice(currencyIndex, 1);
        currencyIndex = keys.indexOf('KWD');
        keys.splice(currencyIndex, 1);
        currencyIndex = keys.indexOf('AED');
        keys.splice(currencyIndex, 1);
        keys.sort();
        keys.unshift('---MORE---');
        keys.unshift('KWD');
        keys.unshift('AED');
        keys.unshift('SAR');
        keys.unshift('EUR');
        keys.unshift('EGP');
        keys.unshift('USD');
      }
      return keys;
    },
    currencyRate() {
      console.log(this.selectedCurrency);
      const rate = this.currency ? this.currency[this.selectedCurrency] : 1;
      return rate;
    },
    singleSessionPrice() {
      return this.currencyRate * this.singlePrice;
    },
    multiSessionPrice() {
      return this.currencyRate * this.multiPrice;
    },
    savedAmount() {
      return (this.singleSessionPrice * 4) - this.multiSessionPrice;
    },
    finalPrice() {
      const dueAmount = this.sessionType === 'S' ? this.singleSessionPrice : this.multiSessionPrice;
      console.log(dueAmount);
      let reduction;
      if (this.coupon.percent) {
        reduction = (this.coupon.discount / 100) * dueAmount;
      } else {
        reduction = this.coupon.discount * this.currencyRate;
      }
      return dueAmount - reduction;
    },
    singleSelectedDate() {
      const newDate = new Date();
      newDate.setDate(newDate.getDate() + this.singleSelectedDateIndex + 1);
      return newDate;
    },
    firstSelectedDate() {
      const newDate = new Date();
      newDate.setDate(newDate.getDate() + this.firstSelectedDateIndex + 1);
      return newDate;
    },
    secondSelectedDate() {
      const newDate = new Date(this.firstSelectedDate);
      newDate.setDate(newDate.getDate() + this.secondSelectedDateIndex + 1);
      return newDate;
    },
    thirdSelectedDate() {
      const newDate = new Date(this.secondSelectedDate);
      newDate.setDate(newDate.getDate() + this.thirdSelectedDateIndex + 1);
      return newDate;
    },
    fourthSelectedDate() {
      const newDate = new Date(this.thirdSelectedDate);
      newDate.setDate(newDate.getDate() + this.fourthSelectedDateIndex + 1);
      return newDate;
    },
  },
  created() {
  },
  async mounted() {
    await this.retrieveAvailableDays();
    await this.retrievePrices();
    this.load = false;
  },
  methods: {
    retrievePrices() {
      this.$store.dispatch('res/getPrices')
        .then((response) => {
          console.log('prices ', response);
          this.singlePrice = response.data.single_session_price;
          this.multiPrice = response.data.multi_session_price;
          this.retrieveCurrency();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    retrieveCurrency() {
      this.$store.dispatch('res/getCurrency')
        .then((response) => {
          if (response.data.rates) {
            this.currency = this.$store.state.res.currency;
            console.log('rates are:', this.currency);
          }
        }).catch((error) => {
          console.log(error);
        });
    },
    pay() {
      axios({
        method: 'post',
        url: 'https://secure-egypt.paytabs.com/payment/request',
        headers: {
          Authorization: 'SLJN9DH96L-JBBMZNJRK2-9MTBDLM6W6',
        },
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
    },
    async redeem() {
      if (!this.coupon.code) {
        return;
      }
      this.coupon.load = true;
      await this.$store.dispatch('res/retrieveCoupon', this.coupon.code)
        .then((response) => {
          console.log(response);
          this.coupon.id = response.data.id || null;
          this.coupon.discount = response.data.discount || 0;
          this.coupon.percent = response.data.percent || false;
          this.coupon.load = false;
        }).catch((error) => {
          console.log(error);
          this.coupon.code = null;
          this.coupon.id = null;
          this.coupon.discount = 0;
          this.coupon.load = false;
        });
    },
    async book() {
      if (!this.isAuthenticated) {
        const currentRequest = {
          sessionType: this.sessionType,
          singleSelectedDateIndex: this.singleSelectedDateIndex,
          singleSelectedTime: this.singleSelectedTime,
          firstSelectedDateIndex: this.firstSelectedDateIndex,
          firstSelectedTime: this.firstSelectedTime,
          secondSelectedDateIndex: this.secondSelectedDateIndex,
          secondSelectedTime: this.secondSelectedTime,
          thirdSelectedDateIndex: this.thirdSelectedDateIndex,
          thirdSelectedTime: this.thirdSelectedTime,
          fourthSelectedDateIndex: this.fourthSelectedDateIndex,
          fourthSelectedTime: this.fourthSelectedTime,
        };
        this.$store.commit('res/updatePendingBooking', currentRequest);
        this.$router.push('/login/');
        return;
      }
      this.errorMessages = [];
      if (this.sessionType === 'S') {
        if (this.singleSelectedDate === null || this.singleSelectedTime === null) {
          this.errorMessages.push('please select a valid date and time');
        }
      } else if (this.sessionType === 'M') {
        if (this.firstSelectedDate === null || this.firstSelectedTime === null) {
          this.errorMessages.push('please select a valid date and time');
        } else if (this.secondSelectedDate === null || this.secondSelectedTime === null) {
          this.errorMessages.push('please select a valid date and time');
        } else if (this.thirdSelectedDate === null || this.thirdSelectedTime === null) {
          this.errorMessages.push('please select a valid date and time');
        } else if (this.fourthSelectedDate === null || this.fourthSelectedTime === null) {
          this.errorMessages.push('please select a valid date and time');
        }
      }
      if (this.errorMessages.length > 0) { return; }
      let bookingRequest = null;
      if (this.sessionType === 'S') {
        const bookDate = DateForJson(this.singleSelectedDate);
        const bookTime = TimeForJson(this.singleSelectedTime);
        bookingRequest = [{
          type: this.sessionType,
          date: bookDate,
          time: bookTime,
          currency: this.selectedCurrency,
          comments: this.comments,
          coupon: this.coupon.id,
        }];
      } else {
        const bookDate = [];
        const bookTime = [];
        bookDate.push(DateForJson(this.firstSelectedDate));
        bookDate.push(DateForJson(this.secondSelectedDate));
        bookDate.push(DateForJson(this.thirdSelectedDate));
        bookDate.push(DateForJson(this.fourthSelectedDate));

        bookTime.push(TimeForJson(this.firstSelectedTime));
        bookTime.push(TimeForJson(this.secondSelectedTime));
        bookTime.push(TimeForJson(this.thirdSelectedTime));
        bookTime.push(TimeForJson(this.fourthSelectedTime));

        bookingRequest = [];
        for (let i = 0; i < 4; i += 1) {
          bookingRequest.push({
            type: this.sessionType,
            sequence: i + 1,
            date: bookDate[i],
            time: bookTime[i],
            currency: this.selectedCurrency,
            comments: this.comments,
            coupon: this.coupon.id,
          });
        }
      }
      console.log('booking request', bookingRequest);
      await this.$store.dispatch('res/postNewBooking', bookingRequest)
        .then((response) => {
          console.log(response);
          // this.$router.push('/my-schedule/');
          this.iframeLink = response.data.url;
        }).catch((error) => {
          console.log(error);
          this.errorMessages.push('Unable to book your appointment. Please try again!');
          this.singleSelectedDateIndex = 0;
        });
    },
    fillSecondDays() {
      this.secondAvailableDays = this.fillAvailableDays(this.firstSelectedDate);
      this.secondSelectedDateIndex = null;
      this.secondSelectedTime = null;
      this.thirdSelectedDateIndex = null;
      this.thirdSelectedTime = null;
      this.fourthSelectedDateIndex = null;
      this.fourthSelectedTime = null;
    },
    fillThirdDays() {
      this.thirdAvailableDays = this.fillAvailableDays(this.secondSelectedDate);
      this.thirdSelectedDateIndex = null;
      this.thirdSelectedTime = null;
      this.fourthSelectedDateIndex = null;
      this.fourthSelectedTime = null;
    },
    fillFourthDays() {
      this.fourthAvailableDays = this.fillAvailableDays(this.thirdSelectedDate);
      this.fourthSelectedDateIndex = null;
      this.fourthSelectedTime = null;
    },
    async retrieveAvailableDays() {
      await this.$store.dispatch('res/getAvailableDays')
        .then(() => {
          this.availableWeekdays = this.$store.state.res.availableDays;
          console.log('available days', this.singleAvailableDays);
          this.singleAvailableDays = this.fillAvailableDays(new Date());
          this.firstAvailableDays = this.fillAvailableDays(new Date());
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fillAvailableDays(startDate) {
      const result = [];
      for (let i = 1; i < 60; i += 1) {
        const iDate = new Date(startDate);
        iDate.setDate(iDate.getDate() + i);
        const weekDay = this.getWeekDay(iDate);
        const isAvailable = this.availableWeekdays[weekDay];
        result.push({
          date: iDate,
          weekDay,
          isAvailable,
          formattedDate: `${weekDay}, ${this.formatDate(iDate)}`,
        });
      }
      return result;
    },
    async fillSingleAvailableTimes() {
      if (this.singleSelectedDateIndex === null) {
        // this.bookTimes[sessionNumber] = null;
        this.busySlots[0] = null;
        return;
      }
      this.loadTimes = true;
      const inputDate = `${addLeadingZero(this.singleSelectedDate.getDate())}-${addLeadingZero((this.singleSelectedDate.getMonth()) + 1)}-${this.singleSelectedDate.getFullYear()}`;
      await this.$store.dispatch('res/getAvailableTimes', inputDate)
        .then((response) => {
          this.busySlots[0] = [];
          for (let i = 0; i < response.data.length; i += 1) {
            this.busySlots[0].push(response.data[i].time);
          }
        }).then(() => {
          this.calcFreeSlots(0);
        }).catch((error) => {
          console.log(error);
          this.singleAvailableTimes = [];
        });
    },
    async fillFirstAvailableTimes() {
      if (this.firstSelectedDateIndex === null) {
        this.busySlots[1] = null;
        return;
      }
      this.firstSelectedTime = null;
      this.secondSelectedDateIndex = null;
      this.secondSelectedTime = null;
      this.thirdSelectedDateIndex = null;
      this.thirdSelectedTime = null;
      this.fourthSelectedDateIndex = null;
      this.fourthSelectedTime = null;

      this.loadTimes = true;
      const inputDate = `${addLeadingZero(this.firstSelectedDate.getDate())}-${addLeadingZero((this.firstSelectedDate.getMonth()) + 1)}-${this.firstSelectedDate.getFullYear()}`;
      await this.$store.dispatch('res/getAvailableTimes', inputDate)
        .then((response) => {
          this.busySlots[1] = [];
          for (let i = 0; i < response.data.length; i += 1) {
            this.busySlots[1].push(response.data[i].time);
          }
        }).then(() => {
          this.calcFreeSlots(1);
        }).catch((error) => {
          console.log(error);
          this.firstAvailableTimes = [];
        });
    },
    async fillSecondAvailableTimes() {
      if (this.secondSelectedDateIndex === null) {
        this.busySlots[2] = null;
        return;
      }

      this.secondSelectedTime = null;
      this.thirdSelectedDateIndex = null;
      this.thirdSelectedTime = null;
      this.fourthSelectedDateIndex = null;
      this.fourthSelectedTime = null;

      this.loadTimes = true;
      const inputDate = `${addLeadingZero(this.secondSelectedDate.getDate())}-${addLeadingZero((this.secondSelectedDate.getMonth()) + 1)}-${this.secondSelectedDate.getFullYear()}`;
      await this.$store.dispatch('res/getAvailableTimes', inputDate)
        .then((response) => {
          this.busySlots[2] = [];
          for (let i = 0; i < response.data.length; i += 1) {
            this.busySlots[2].push(response.data[i].time);
          }
        }).then(() => {
          this.calcFreeSlots(2);
        }).catch((error) => {
          console.log(error);
          this.firstAvailableTimes = [];
        });
    },
    async fillThirdAvailableTimes() {
      if (this.thirdSelectedDateIndex === null) {
        this.busySlots[3] = null;
        return;
      }

      this.thirdSelectedTime = null;
      this.fourthSelectedDateIndex = null;
      this.fourthSelectedTime = null;

      this.loadTimes = true;
      const inputDate = `${addLeadingZero(this.thirdSelectedDate.getDate())}-${addLeadingZero((this.thirdSelectedDate.getMonth()) + 1)}-${this.thirdSelectedDate.getFullYear()}`;
      await this.$store.dispatch('res/getAvailableTimes', inputDate)
        .then((response) => {
          this.busySlots[3] = [];
          for (let i = 0; i < response.data.length; i += 1) {
            this.busySlots[3].push(response.data[i].time);
          }
        }).then(() => {
          this.calcFreeSlots(3);
        }).catch((error) => {
          console.log(error);
          this.firstAvailableTimes = [];
        });
    },
    async fillFourthAvailableTimes() {
      if (this.fourthSelectedDateIndex === null) {
        this.busySlots[4] = null;
        return;
      }

      this.fourthSelectedTime = null;

      this.loadTimes = true;
      const inputDate = `${addLeadingZero(this.fourthSelectedDate.getDate())}-${addLeadingZero((this.fourthSelectedDate.getMonth()) + 1)}-${this.fourthSelectedDate.getFullYear()}`;
      await this.$store.dispatch('res/getAvailableTimes', inputDate)
        .then((response) => {
          this.busySlots[4] = [];
          for (let i = 0; i < response.data.length; i += 1) {
            this.busySlots[4].push(response.data[i].time);
          }
        }).then(() => {
          this.calcFreeSlots(4);
        }).catch((error) => {
          console.log(error);
          this.firstAvailableTimes = [];
        });
    },
    calcFreeSlots(sessionNumber) {
      const result = [];
      const openTime = new Date();
      if (this.availableDays === null) { return; }
      console.log('check int: ', parseInt(this.availableWeekdays.openTime.substr(2, 2), 0));
      openTime.setHours(parseInt(this.availableWeekdays.openTime.substr(0, 2), 0));
      openTime.setMinutes(parseInt(this.availableWeekdays.openTime.substr(3, 2), 0));
      openTime.setSeconds(0);
      openTime.setMilliseconds(0);
      const closeTime = new Date();
      closeTime.setHours(parseInt(this.availableWeekdays.closeTime.substr(0, 2), 0));
      closeTime.setMinutes(parseInt(this.availableWeekdays.closeTime.substr(3, 2), 0));
      closeTime.setSeconds(0);
      closeTime.setMilliseconds(0);
      console.log('close', closeTime);
      for (let i = 0; openTime <= closeTime; i += 10) {
        const newTime = this.formatTime(openTime);
        const timeToCompare = `${addLeadingZero(openTime.getHours())}:${addLeadingZero(openTime.getMinutes())}:00`;
        const timeBlocked = this.busySlots[sessionNumber].includes(timeToCompare);
        console.log(newTime);
        result.push({
          freeSlot: newTime,
          timeBlocked,
        });
        openTime.setMinutes(openTime.getMinutes() + 10);
      }
      console.log(result, openTime, closeTime);
      if (sessionNumber === 0) {
        this.singleAvailableTimes = result;
      } else if (sessionNumber === 1) {
        this.firstAvailableTimes = result;
      } else if (sessionNumber === 2) {
        this.secondAvailableTimes = result;
      } else if (sessionNumber === 3) {
        this.thirdAvailableTimes = result;
      } else if (sessionNumber === 4) {
        this.fourthAvailableTimes = result;
      }
    },
    getWeekDay(inputDate) {
      const weekDay = new Array(7);
      weekDay[0] = 'Sunday';
      weekDay[1] = 'Monday';
      weekDay[2] = 'Tuesday';
      weekDay[3] = 'Wednesday';
      weekDay[4] = 'Thursday';
      weekDay[5] = 'Friday';
      weekDay[6] = 'Saturday';
      return weekDay[inputDate.getDay()];
    },
    formatDate(inputDate) {
      return `${addLeadingZero(inputDate.getDate())} ${inputDate.toLocaleString('default', { month: 'short' })}`;
    },
    formatTime(inputTime) {
      let result;
      if (inputTime.getHours() < 12) {
        result = `${addLeadingZero(inputTime.getHours())}:${addLeadingZero(inputTime.getMinutes())} AM`;
      } else if (inputTime.getHours() === 12) {
        result = `${addLeadingZero(inputTime.getHours())}:${addLeadingZero(inputTime.getMinutes())} PM`;
      } else {
        result = `${addLeadingZero(inputTime.getHours() - 12)}:${addLeadingZero(inputTime.getMinutes())} PM`;
      }
      return result;
    },
  },
};
</script>

<style scoped>
  form, iframe {
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

  .input-date {
    display: inline;
    width: 60%;
  }

  .input-time {
    display: inline;
    width: 40%;
  }
  label {
    display: block;
  }

  iframe {
    width: 100%;
    height: 500px;
    background-color: #f5f7f9;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

</style>
