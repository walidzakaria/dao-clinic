<template>
    <div class="vue-tempalte">
      <h2>My Account</h2>
      <div v-if="updated">
        <p>Your data was updated successfully!</p>
      </div>
        <form v-on:submit.prevent @submit="updateUser()">

            <div class="form-group">
                <label>Username <span class="text-danger">*</span></label>
                <input v-model.trim="newUser.username" type="text"
                  class="form-control form-control-lg" required autofocus/>
                <ul>
                  <li v-for="(m, index) in invalidEntry.username" :key="index"
                    class="text-danger">{{ m }}
                  </li>
                </ul>
            </div>

            <div class="form-group">
                <label>Email address <span class="text-danger">*</span></label>
                <input v-model.trim="newUser.email"
                  type="email" class="form-control form-control-lg" required/>
                <ul>
                  <li v-for="(m, index) in invalidEntry.email" :key="index"
                    class="text-danger">{{ m }}
                  </li>
                </ul>
            </div>

            <div class="form-group">
                <label>Phone Number <span class="text-danger">*</span></label>
                <input v-model.trim="newUser.phone" type="tel"
                  class="form-control form-control-lg" required/>
                <ul>
                  <li v-for="(m, index) in invalidEntry.phone" :key="index"
                    class="text-danger">{{ m }}
                  </li>
                </ul>
            </div>

            <div class="form-group">
                <label>First Name</label>
                <input v-model.trim="newUser.firstName"
                  type="text" class="form-control form-control-lg"/>
                <ul>
                  <li v-for="(m, index) in invalidEntry.firstName" :key="index"
                    class="text-danger">{{ m }}
                  </li>
                </ul>
            </div>

            <div class="form-group">
                <label>Last Name</label>
                <input v-model.trim="newUser.lastName" type="text"
                  class="form-control form-control-lg"/>
                <ul>
                  <li v-for="(m, index) in invalidEntry.lastName" :key="index"
                    class="text-danger">{{ m }}
                  </li>
                </ul>
            </div>

            <ul>
              <li v-for="(m, index) in invalidEntry.nonFieldErrors" :key="index"
                class="text-danger">{{ m }}
              </li>
            </ul>

            <button type="submit" class="btn btn-dark btn-lg btn-block">
              Update Account  <span v-if="isLoading" class="spinner-border"></span>
            </button>
        </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      isLoading: false,
      updated: false,
      newUser: {
        username: '',
        email: '',
        phone: '',
        firstName: '',
        lastName: '',
      },
      invalidEntry: {
        username: [],
        email: [],
        phone: [],
        firstName: [],
        lastName: [],
        nonFieldErrors: [],
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.newUser.username = this.$store.state.user.userInfo.username;
      this.newUser.firstName = this.$store.state.user.userInfo.firstName;
      this.newUser.lastName = this.$store.state.user.userInfo.lastName;
      this.newUser.email = this.$store.state.user.userInfo.email;
      this.newUser.phone = this.$store.state.user.userInfo.phone;
    });
  },
  computed: {
    ...mapGetters('user', ['isAuthenticated', 'userInfo', 'loginName']),
  },
  methods: {
    async updateUser() {
      if (this.isLoading) { return; }
      this.isLoading = true;
      const requestBody = {
        username: this.newUser.username,
        phone: this.newUser.phone,
        first_name: this.newUser.firstName,
        last_name: this.newUser.lastName,
        email: this.newUser.email,
      };
      await this.$store.dispatch('user/updateProfile', requestBody)
        .then((response) => {
          console.log(response);
          this.deactivate();
          this.updated = true;
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        }).catch((error) => {
          console.log(error);
          this.invalidEntry.username = error.username || [];
          this.invalidEntry.phone = error.phone || [];
          this.invalidEntry.firstName = error.firstName || [];
          this.invalidEntry.lastName = error.lastName || [];
          this.invalidEntry.email = error.email || [];
        });
      this.isLoading = false;
    },
    async deactivate() {
      await this.$store.dispatch('user/deactivate')
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
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
</style>
