// a59ac0f74da9403ea59b17dd76c4ee15
import axios from 'axios';
// import Cookies from 'js-cookie';

export default ({
  namespaced: true,
  state: {
    currency: null,
    availableDays: {
      Saturday: false,
      Sunday: false,
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      openTime: null,
      closeTime: null,
    },
    appointment: [],
  },
  mutations: {
    updateCurrency(state, newData) {
      state.currency = JSON.parse(newData.rates) || null;
    },
    updateAvailableDays(state, newAvailableDays) {
      state.availableDays.Saturday = newAvailableDays.saturday;
      state.availableDays.Sunday = newAvailableDays.sunday;
      state.availableDays.Monday = newAvailableDays.monday;
      state.availableDays.Tuesday = newAvailableDays.tuesday;
      state.availableDays.Wednesday = newAvailableDays.wednesday;
      state.availableDays.Thursday = newAvailableDays.thursday;
      state.availableDays.Friday = newAvailableDays.friday;
      state.availableDays.openTime = newAvailableDays.open_time;
      state.availableDays.closeTime = newAvailableDays.close_time;
    },
    updateAppointment(state, newAppointment, single) {
      if (single) {
        state.appointment = [newAppointment];
      } else {
        state.appointment.push(newAppointment);
      }
    },
  },
  actions: {
    getCurrency({ commit }) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: '/api/appointments/get_currency/',
        }).then((response) => {
          console.log(response);
          commit('updateCurrency', response.data);
          resolve(response);
        }).catch((error) => {
          console.log(error);
          reject(error);
        });
      });
    },
    getPrices() {
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: '/api/config/prices/',
        }).then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    getAvailableDays(context) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: '/api/config/available_days/',
        })
          .then((response) => {
            console.log('available days are', response.data);
            context.commit('updateAvailableDays', response.data);
            resolve(response);
          }).catch((error) => {
            reject(error);
          });
      });
    },
    getAvailableTimes(context, inputDate) {
      console.log('this input date:', inputDate);
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: `/api/appointments/busy_slots/${inputDate}/`,
        }).then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    postNewBooking(context, inputData) {
      console.log('this input data', inputData);
      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: '/api/appointments/create/',
          data: inputData,
        }).then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },
  },
  getters: {
  },
});
