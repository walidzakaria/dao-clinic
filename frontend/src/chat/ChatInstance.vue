 <template>
  <div>
  <div class="contact-profile">
      <p>{{ chatHeader }}</p>
    </div>
    <div class="messages" ref="chat-box">
      <ul id="message-container">
        <div v-for="(m, index) in chat" :key="index">
          <li v-if="m.is_client" class="sent">
            <div class="chat-logo">{{ clientLetter }}</div>
            <p class="message-text">{{ m.message }}</p>
          </li>
          <li v-else class="replies">
            <div class="chat-logo">ME</div>
            <p class="message-text">{{ m.message }}</p>
          </li>
        </div>
      </ul>
    </div>
    <div class="message-input">
      <div class="wrap">
        <input type="text" placeholder="Write your message..."
            v-model="userMessage"
            @keyup.enter="sendMessage()" @focus="markRead()"
            ref="chat-input"/>
        <button @click="sendMessage()" class="submit btn">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

function addLeadingZero(inputNumber) {
  const result = inputNumber < 10 ? `0${inputNumber.toString()}` : inputNumber.toString();
  return result;
}

export default {
  name: 'ChatInstance',
  props: ['room', 'userConnect', 'chatHeader'],
  data() {
    return {
      connection: null,
      chat: [],
      userMessage: null,
      username: '',
      userId: 0,
      clientId: this.$store.state.chat.clientId,
      unreadNo: 0,
    };
  },
  computed: {
    clientLetter() {
      return this.chatHeader[0];
    },
    lastSenctence() {
      return this.chat[this.chat.length - 1].message;
    },
  },
  created() {
    this.scrollChat();
  },
  async mounted(event) {
    this.$nextTick(() => {
      this.username = this.$store.state.user.userInfo.username;
      this.userId = this.$store.state.user.userInfo.id || 0;
      this.clientId = this.$store.state.chat.clientId;
      this.chat = [];
      this.connectChat(event);
      this.scrollChat();
    });
  },
  methods: {
    ...mapActions('chat', ['getCSConversation']),
    getWebsocketLink() {
      console.log(this.room);
      const wsScheme = window.location.protocol === 'https:' ? 'wss' : 'ws';
      let wsHost = window.location.host;
      if (wsHost === '127.0.0.1:8080' || wsHost === '127.0.0.1:8000') {
        wsHost = '127.0.0.1:8000';
      } else {
        wsHost += ':8001';
      }
      const wsLink = `${wsScheme}://${wsHost}/ws/chat/${this.room}/admin/${this.userConnect}/`;
      console.log(wsLink);
      return wsLink;
    },
    async connectChat() {
      this.unreadNo = 0;
      if (this.clientId === '0000') {
        await this.$store.dispatch('chat/getClientId').then(
          this.clientId = this.$store.state.chat.clientId,
          this.scrollChat(),
        );
      }
      console.log(this.chat.length);
      if (this.chat.length === 0) {
        await this.getCSConversation(this.room)
          .then((response) => {
            this.chat = response;
            console.log('current chat: ', this.chat);
            this.scrollChat();
          });
      }
      this.applyConnection();
    },
    markRead() {
      this.unreadNo = 0;
      const readMessage = {
        type: 'notification_read',
        message: 'notification_read',
        user: this.$store.state.user.userInfo.username,
        user_id: this.$store.state.user.userInfo.id,
        is_client: false,
      };
      try {
        this.connection.send(JSON.stringify(readMessage));
      } catch (err) {
        console.log(err);
      } finally {
        this.userMessage = null;
      }
    },
    sendMessage() {
      if (this.userMessage) {
        console.log(this.userMessage);
        const newMessage = {
          type: 'chat_message',
          message: this.userMessage,
          user: this.username,
          user_id: this.userId,
          is_client: false,
        };
        this.connection.send(JSON.stringify(newMessage));
        this.userMessage = null;
      }
    },
    async applyConnection() {
      if (!this.connection) {
        // this.getConversation(this.clientId);
        await this.getCSConversation(this.room)
          .then((response) => {
            this.chat = response;
            console.log('current chat: ', this.chat);
          });
        this.connection = new WebSocket(this.getWebsocketLink());
        this.connection.onclose = (e) => {
          setTimeout(() => {
            console.log('connecting...');
            this.connection.reconnet(e);
          }, 1000);
        };
        this.connection.onopen = (event) => {
          console.log(event);
        };
        this.connection.onmessage = (event) => {
          const data = JSON.parse(event.data);
          console.log('chat message data: ', data);
          const newMessage = {
            message: data.message,
            type: data.type,
            room: this.clientId,
            time: data.time,
            user: data.user,
            is_client: data.is_client,
            user_info: data.user_info,
          };
          if (newMessage.type !== 'notification_read') {
            console.log(newMessage.type);
            this.chat.push(newMessage);
            this.scrollChat();
          }
          if (newMessage.is_client && newMessage.type === 'chat_message') {
            this.unreadNo += 1;
          }
          this.scrollChat();
        };
      }
    },
    calcTime(chatTime) {
      const inputTime = new Date(chatTime);
      const currentTime = new Date();
      const timeDiff = Math.round((currentTime - inputTime) / 1000, 0);
      // console.log(inputTime);
      // console.log(timeDiff);
      let result = '';
      if (timeDiff < 30) {
        result = 'few sec.';
      } else if (timeDiff < 60) {
        result = `${timeDiff} sec`;
      } else if (timeDiff < 3600) {
        result = `${Math.floor(timeDiff / 60)} min`;
      } else if (timeDiff < 86400) {
        result = `${Math.floor(timeDiff / 60 / 60)} hrs`;
      } else {
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const timeDay = addLeadingZero(inputTime.getDate());
        const timeHour = addLeadingZero(inputTime.getHours());
        const timeMinute = addLeadingZero(inputTime.getMinutes());
        result = `${timeDay}${monthNames[inputTime.getMonth()]} ${timeHour}:${timeMinute}`;
      }
      return result;
    },
    scrollChat() {
      this.$nextTick(() => {
        const chatBox = this.$refs['chat-box'];
        if (chatBox) {
          chatBox.scroll(0, chatBox.scrollHeight);
        }
      });
    },
  },
  watch: {
    // open() {
    //   this.$nextTick(() => {
    //     this.scrollChat();
    //   });
    // },
    unreadNo() {
      this.$emit('unreadChanged', {
        room: this.room,
        unread: this.unreadNo,
      });
    },
    // lastSenctence() {
    //   this.$emit('sentenceChanged', {
    //     room: this.room,
    //     lastSentence: this.lastSenctence,
    //   });
    // },
  },
};
</script>

<style scoped>

.wrap {
  min-width: 220px !important;
}

.contact-profile p {
  text-transform: capitalize;
}

#frame .content {
  float: right;
  width: calc(100% - 340px);
  height: 100%;
  overflow: hidden;
  position: relative;
  border: 1px solid #c4c0c0;
}
@media screen and (max-width: 991px) {
  #frame .content {
    width: 60%;
  }
}
@media screen and (max-width: 735px) {
  #frame .content {
    width: calc(100% - 58px);
    min-width: 300px !important;
    margin-left: 0;
    margin-right: 0;
  }
}
@media screen and (max-width: 680px) {
  #frame .content {
    width: calc(100% - 60px);
  }
}
#frame .content .contact-profile {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #c5964f;
  font-weight: bold;
  color: #272627;
  text-align: center;
}
#frame .content .contact-profile img {
  width: 40px;
  border-radius: 50%;
  float: left;
  margin: 9px 12px 0 9px;
}
#frame .content .contact-profile p {
  float: left;
  width: 100%;
  text-align: center;
}
#frame .content .contact-profile .social-media {
  float: right;
}
#frame .content .contact-profile .social-media i {
  margin-left: 14px;
  cursor: pointer;
}
#frame .content .contact-profile .social-media i:nth-last-child(1) {
  margin-right: 20px;
}
#frame .content .contact-profile .social-media i:hover {
  color: #7c766f;
}
#frame .content .messages {
  height: auto;
  min-height: calc(100% - 93px);
  max-height: calc(100% - 93px);
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  width: 100%;
}
@media screen and (max-width: 735px) {
  #frame .content .messages {
    max-height: calc(100% - 105px);
  }
}
#frame .content .messages::-webkit-scrollbar {
  width: 8px;
  background: transparent;
}
#frame .content .messages::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.3);
}
#frame .content .messages ul li {
  display: inline-block;
  clear: both;
  /* float: left; */
  margin: 15px 15px 5px 15px;
  width: calc(100% - 25px);
  font-size: 0.9em;
}
#frame .content .messages ul li:nth-last-child(1) {
  margin-bottom: 20px;
}
#frame .content .messages ul li.sent .chat-logo {
  margin: 6px 8px 0 0;
  background-color: #4b4746;
  height: 27px;
  width: 27px;
  color: #c5964f;
  font-weight: bolder;
  text-align: center;
  padding: 5px;
  border-radius: 50%;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode',
      'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      text-transform: uppercase;
}
#frame .content .messages ul li.sent .chat-logo {
  margin: 6px 8px 0 0;
  background-color: #4b4746;
}
#frame .content .messages ul li.sent p {
  background: #7c766f;
  color: #f5f5f5;
}
#frame .content .messages ul li.replies .chat-logo {
  float: right;
  margin: 6px 0 0 8px;
  color: #4b4746;
  height: 27px;
  width: 27px;
  background-color: #c5964f;
  font-weight: bolder;
  text-align: center;
  padding: 5px;
  border-radius: 50%;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode',
      'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
#frame .content .messages ul li.replies p {
  background: #f5f5f5;
  float: right;
}
#frame .content .messages ul li img {
  width: 22px;
  border-radius: 50%;
  float: left;
}
#frame .content .messages ul li p {
  display: inline-block;
  padding: 10px 15px;
  border-radius: 20px;
  max-width: 205px;
  line-height: 130%;
}
@media screen and (min-width: 100px) {
  #frame .content .messages ul li p {
    max-width: 300px;
  }
}
#frame .content .message-input {
  position: absolute;
  bottom: 0;
  width: 109%;
  z-index: 99;
}
#frame .content .message-input .wrap {
  position: relative;
}
#frame .content .message-input .wrap input {
  float: left;
  border: none;
  width: calc(100% - 90px);
  padding: 11px 32px 10px 8px;
  color: #272627;
}
@media screen and (min-width: 1125px) {
  #frame .content .message-input .wrap input {
    width: calc(100% - 140px);
  }
}

#frame .content .message-input .wrap input:focus {
  outline: none;
}
#frame .content .message-input .wrap .attachment {
  position: absolute;
  right: 60px;
  z-index: 4;
  margin-top: 10px;
  font-size: 1.1em;
  color: #7c766f;
  opacity: .5;
  cursor: pointer;
}
@media screen and (max-width: 735px) {
  #frame .content .message-input .wrap .attachment {
    margin-top: 17px;
    right: 65px;
  }
}
#frame .content .message-input .wrap .attachment:hover {
  opacity: 1;
}
#frame .content .message-input .wrap button {
  float: right;
  border: none;
  width: 80px;
  padding: 10px 0;
  cursor: pointer;
  background: #272627;
  color: #f5f5f5;
  position: revert;
  margin-right: 10px;
}
@media screen and (min-width: 1125px) {
  #frame .content .message-input .wrap button {
    margin-right: 20px;
  }
}

#frame .content .message-input .wrap button:hover {
  background: #7c766f;
}
#frame .content .message-input .wrap button:focus {
  outline: none;
}

.sent .message-text {
  width: 100%;
  text-align: right;
}

.reply .message-text {
  width: 100%;
}

</style>
