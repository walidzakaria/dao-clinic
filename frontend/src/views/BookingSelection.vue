<template>
  <div>
    <div class="form-group">
      <label v-if="sessionNumber === 0">
        Select Session Date & Time <span class="text-danger">*</span>
      </label>
      <label v-else>
        Select Session ({{ sessionNumber }}) Date & Time <span class="text-danger">*</span>
      </label>
        <select v-model="selectedDate" class="form-control input-date" required>
          <option value="null">--Select Date--</option>
          <option v-for="(el, index) in bookDays" :key="index" :value="index"
            :disabled="!el.isAvailable">
            {{ el.formattedDate }}
            <span v-if="!el.isAvailable"> <pre>&#9;&#9;</pre> • Not Available </span>
          </option>
        </select>
        <select v-model="selectedTime" class="form-control input-time"
          @change="applyAppointment()" required>
          <option value="null">--Select Time--</option>
          <option v-for="(el, index) in availableTimes" :key="index" :value="el.freeSlot"
            :disabled="el.timeBlocked">
            {{ el.freeSlot }} <span v-if="el.timeBlocked"> • Booked </span>
          </option>
        </select>
    </div>

  </div>
</template>

<script>

function addLeadingZero(inputNumber) {
  const result = inputNumber < 10 ? `0${inputNumber.toString()}` : inputNumber.toString();
  return result;
}
export default {
  name: 'BookDay',
  props: ['sessionNumber'],
  data() {
    return {
      loadTimes: false,
      bookDays: [],
      bookTimes: [],
      busySlots: [],
      availableTimes: [],
      selectedDate: null,
      selectedTime: null,
    };
  },
  computed: {
    bookedDate() {
      const newDate = new Date();
      newDate.setDate(newDate.getDate() + this.selectedDate);
      return newDate;
    },
  },
  created() {
    this.retrieveAvailableDays();
  },
  methods: {
    applyAppointment() {
      console.log('changed time');
      const type = this.sessionNumber === 0 ? 'S' : 'M';
      const sequence = this.sessionNumber === 0 ? null : this.sessionNumber;
      const newAppointment = {
        type,
        sequence,
        date: this.bookedDate,
        time: this.selectedTime,
      };
      this.$store.commit('res/updateAppointment', newAppointment, true);
      this.$emit('clicked', this.bookedDate);
    },
    async retrieveAvailableDays() {
      await this.$store.dispatch('res/getAvailableDays')
        .then(() => {
          this.availableDays = this.$store.state.res.availableDays;
          this.fillAvailableDays();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fillAvailableDays() {
      for (let i = 0; i < 59; i += 1) {
        const iDate = new Date();
        iDate.setDate(iDate.getDate() + i);
        const weekDay = this.getWeekDay(iDate);
        const isAvailable = this.availableDays[weekDay];
        this.bookDays.push({
          date: iDate,
          weekDay,
          isAvailable,
          formattedDate: `${weekDay}, ${this.formatDate(iDate)}`,
        });
      }
      console.log(this.bookDays);
    },
    async fillAvailableTimes() {
      if (this.selectedDate === null) {
        this.bookTimes = [];
        this.busySlots = [];
        return;
      }
      this.loadTimes = true;
      const inputDate = `${addLeadingZero(this.bookedDate.getDate())}-${addLeadingZero((this.bookedDate.getMonth()) + 1)}-${this.bookedDate.getFullYear()}`;
      await this.$store.dispatch('res/getAvailableTimes', inputDate)
        .then((response) => {
          this.busySlots = [];
          for (let i = 0; i < response.data.length; i += 1) {
            this.busySlots.push(response.data[i].time);
          }
          console.log('busy slots are', this.busySlots);
        }).then(() => {
          console.log('busy slots before', this.busySlots);
          this.calcFreeSlots();
          console.log('busy slots after', this.busySlots);
        }).catch((error) => {
          console.log(error);
          this.availableTimes = [];
        });
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
    calcFreeSlots() {
      const result = [];
      const openTime = new Date();
      if (this.availableDays === null) { return; }
      console.log('check  int: ', parseInt(this.availableDays.openTime.substr(2, 2), 0));
      openTime.setHours(parseInt(this.availableDays.openTime.substr(0, 2), 0));
      openTime.setMinutes(parseInt(this.availableDays.openTime.substr(3, 2), 0));
      openTime.setSeconds(0);
      openTime.setMilliseconds(0);
      const closeTime = new Date();
      closeTime.setHours(parseInt(this.availableDays.closeTime.substr(0, 2), 0));
      closeTime.setMinutes(parseInt(this.availableDays.closeTime.substr(3, 2), 0));
      closeTime.setSeconds(0);
      closeTime.setMilliseconds(0);
      console.log('close', closeTime);
      for (let i = 0; openTime <= closeTime; i += 10) {
        const newTime = this.formatTime(openTime);
        const timeToCompare = `${addLeadingZero(openTime.getHours())}:${addLeadingZero(openTime.getMinutes())}:00`;
        const timeBlocked = this.busySlots.includes(timeToCompare);
        console.log(newTime);
        result.push({
          freeSlot: newTime,
          timeBlocked,
        });
        openTime.setMinutes(openTime.getMinutes() + 10);
      }
      console.log(result, openTime, closeTime);
      this.availableTimes = result;
    },
    formatDate(inputDate) {
      return `${addLeadingZero(inputDate.getDate())} ${inputDate.toLocaleString('default', { month: 'short' })}`;
    },
    formatTime(inputTime) {
      const result = inputTime.getHours() <= 12 ? `${addLeadingZero(inputTime.getHours())}:${addLeadingZero(inputTime.getMinutes())} AM` : `${addLeadingZero(inputTime.getHours() - 12)}:${addLeadingZero(inputTime.getMinutes())} PM`;
      return result;
    },
  },
  watch: {
    selectedDate() {
      this.$nextTick(() => {
        console.log(this.bookedDate);
        console.log(this.busySlots);
        this.fillAvailableTimes();
      });
    },
  },
};
</script>

<style scoped>

</style>
