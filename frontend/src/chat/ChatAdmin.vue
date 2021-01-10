<template>
  <div>
    <h1>Chat Admin</h1>
    <button @click="getOnlineUsers()">Test</button>
    <div v-for="(i, index) of onlineUsers" :key="index">
      <ChatInstance :room="i" />
    </div>
  </div>
</template>

<script>
import ChatInstance from './ChatInstance.vue';

export default {
  name: 'ChatAdmin',
  data() {
    return {
      onlineUsers: [],
    };
  },
  mounted() {
    this.getOnlineUsers();
    setInterval(this.getOnlineUsers, 5000);
  },
  components: {
    ChatInstance,
  },
  methods: {
    getOnlineUsers() {
      console.log('refresh online users');
      this.$store.dispatch('chat/getOnlineUsers')
        .then((response) => {
          // console.log(response);
          Array.from(response).forEach((e) => {
            if (!this.onlineUsers.includes(e.room)) {
              this.onlineUsers.push(e.room);
            }
          });
          console.log('online users are ', this.onlineUsers);
        }).catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
