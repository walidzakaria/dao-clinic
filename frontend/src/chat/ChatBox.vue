<template>
  <div class="container">
    <div class="row chat-window col-xs-3 col-md-3" id="chat_window_1" style="margin-left:10px;">
        <div class="col-xs-12 col-md-12">
          <div class="panel panel-default">
                <div @click="toggleChat();" class="panel-heading top-bar">
                  <h5 class="">Leave a Message
                    <span v-if="!open" class="chat-logo-container">
                      <img id="chat-logo" src="../assets/chat-logo.png" alt="">
                    </span>
                    <span v-if="open" class="chat-logo-container">
                      <img id="chat-logo" src="../assets/chat-minimize.png" alt="">
                    </span>
                  </h5>
                </div>
                <!-- Toggleable -->
                <slot v-if="open">
                  <div id="dialog-container" class="panel-body msg_container_base">
                    <div v-for="(m, index) in chat" :key="index">
                      <div v-if="!m.user">
                        no user
                      </div>
                      <div v-if="m.user || 1==1">
                        yes user
                      </div>
                    </div>
                    <div class="row msg_container base_sent">
                        <div class="col-md-10 col-xs-10">
                            <div class="messages msg_sent">
                                <p>some messages here</p>
                                <time datetime="2009-11-13T20:00">Timothy • 51 min</time>
                            </div>
                        </div>
                        <div class="col-md-2 col-xs-2 avatar">
                            <img src="../assets/user-avatar.png" class=" img-responsive ">
                        </div>
                    </div>
                    <div class="row msg_container base_receive">
                        <div class="col-md-2 col-xs-2 avatar">
                            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive ">
                        </div>
                        <div class="col-md-10 col-xs-10">
                            <div class="messages msg_receive">
                                <p>that mongodb thing looks good, huh?
                                tiny master db, and huge document store</p>
                                <time datetime="2009-11-13T20:00">Timothy • 51 min</time>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel-footer">
                    <div class="input-group">
                        <input id="btn-input" type="text" v-model="userMessage"
                          @keyup.enter="sendMessage()"
                          class="form-control input-sm chat_input"
                        placeholder="Write your message here..." />
                        <span class="input-group-btn">
                        <button @click="sendMessage()"
                          class="btn btn-primary btn-sm" id="btn-chat">Send</button>
                        </span>
                    </div>
                </div>
                </slot>
          </div>
        </div>
    </div>

    <div class="btn-group dropup">
        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
            <span class="glyphicon glyphicon-cog"></span>
            <span class="sr-only">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu" role="menu">
            <li><a href="#" id="new_chat"><span
            class="glyphicon glyphicon-plus"></span> Novo</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-list"></span> Ver outras</a></li>
            <li><a href="#"><span class="glyphicon glyphicon-remove"></span> Fechar Tudo</a></li>
            <li class="divider"></li>
            <li><a href="#"><span class="glyphicon glyphicon-eye-close"></span> Invisivel</a></li>
        </ul>
        <div>fill tests {{ userId }}</div>
    </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import axios from 'axios';

export default {
  name: 'ChatBox',
  data() {
    return {
      open: false,
      connection: null,
      chat: [],
      userMessage: null,
      userId: 10,
    };
  },
  computed: {
    ...mapGetters(
      'chat', ['clientId', 'conversation'],
      'user', ['userInfo', 'userKey'],
    ),
  },
  async created() {
    this.getClientId();
  },
  async mounted() {
    console.log(this.cliendId);
    console.log(this.userId);
    console.log('mounted');
    this.getConversation(this.clientId);
    this.userId = this.$store.getters('user/userKey');
  },
  methods: {
    ...mapActions('chat', ['getClientId', 'getConversation']),
    getWebsocketLink() {
      return `ws://127.0.0.1:8000/ws/chat/${this.clientId}/`;
    },
    toggleChat() {
      this.open = !this.open;
      this.applyConnection();
      console.log(this.chat);
      this.chat = this.$store.getters['chat/conversation'];
      // window.scrollTo(0, document.body.scrollHeight);
    },
    sendMessage() {
      // console.log(this.connection);
      if (this.userMessage) {
        console.log(this.userMessage);
        this.connection.send(JSON.stringify({
          message: this.userMessage,
          username: 'walid',
        }));
        this.userMessage = null;
      }
      // this.$store.dispatch['chat/obtainUserId'];
      // console.log(this.$store.chat.userId);
    },
    applyConnection() {
      if (!this.connection) {
        this.getConversation(this.clientId);
        this.connection = new WebSocket(this.getWebsocketLink());
        this.connection.onopen = (event) => {
          console.log(event);
        };
        this.connection.onmessage = (event) => {
          console.log(event);
        };
      }
    },
  },
  // watch: {
  //   conversation() {
  //     this.chat = this.conversation;
  //   },
  // },
};
</script>

<style scoped>
body{
    height:400px;
    position: fixed;
    bottom: 0;
}
.col-md-2, .col-md-10{
    padding:0;
}
.panel{
    margin-bottom: 0px;
}
.chat-window{
    bottom:0;
    position:fixed;
    float:right;
    margin-left:10px;
}
.chat-window > div > .panel{
    border-radius: 5px 5px 0 0;
}
.icon_minim{
    padding:2px 10px;
}
.msg_container_base{
  background: #e5e5e5;
  margin: 0;
  padding: 0 10px 10px;
  max-height:300px;
  min-height: 300px;
  overflow-x:hidden;
}
.top-bar {
  background: #666;
  color: white;
  padding: 10px;
  position: relative;
  overflow: hidden;
}
.msg_receive{
    padding-left:0;
    margin-left:0;
}
.msg_sent{
    padding-bottom:20px !important;
    margin-right:0;
}
.messages {
  background: white;
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  max-width:100%;
}
.messages > p {
    font-size: 13px;
    margin: 0 0 0.2rem 0;
  }
.messages > time {
    font-size: 11px;
    color: #ccc;
}
.msg_container {
    padding: 10px;
    overflow: hidden;
    display: flex;
}
img {
    display: block;
    width: 100%;
}
.avatar {
    position: relative;
}
.base_receive > .avatar:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border: 5px solid #FFF;
    border-left-color: rgba(0, 0, 0, 0);
    border-bottom-color: rgba(0, 0, 0, 0);
}

.base_sent {
  justify-content: flex-end;
  align-items: flex-end;
}
.base_sent > .avatar:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;
    border: 5px solid white;
    border-right-color: transparent;
    border-top-color: transparent;
    box-shadow: 1px 1px 2px rgba(black, 0.2);
}

.msg_sent > time {
    float: right;
}

.msg_container_base::-webkit-scrollbar-track
{
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
}

.msg_container_base::-webkit-scrollbar
{
    width: 12px;
    background-color: #F5F5F5;
}

.msg_container_base::-webkit-scrollbar-thumb
{
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
}

.btn-group.dropup{
    position:fixed;
    left:0px;
    bottom:0;
}

#chat_window_1 {
  right: 10px;
  min-width: 315px;
  max-width: 350px;
  z-index: 999;
}

.panel-heading {
  border-radius: 10px 10px 0 0;
  cursor: pointer;
}

#chat-logo {
  width: 30px;
}

.chat-logo-container {
  float: right;
}

</style>
