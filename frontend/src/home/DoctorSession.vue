<template>
  <div class="container">
    <h1 class="heading">DAO Video Session</h1>
    <p class="note">
      Please click connect, to get connected to the doctor.
      Please make sure to give permission for your camera & microphone.
    </p>
    <div class="p2p-media">
      <div class="remote-stream">
        <video id="js-remote-stream"></video>
      </div>
      <div class="local-stream">
        <video id="js-local-stream"></video>
        <p>Client link:
          <router-link v-if="localId" :to="{ path: `/session/${this.localId}/` }"
            target="_blank">https://daoegypt/session/{{ localId }}/</router-link>
        </p>
        <!-- <input type="text" placeholder="Remote Peer ID" id="js-remote-id"> -->
        <!-- <button id="js-call-trigger">Call</button> -->
        <button @click="configureSession()" id="js-new-session">
          New Session <span v-if="isLoading" class="spinner-border"></span>
        </button>
        <button id="js-close-trigger">Close</button>
      </div>
    </div>
    <div>
      <router-link to="/media/pdf/Dao System  AM H_/cdNUnXKf89nnLwjk/dao system am h eng.pdf"
          target="_blank" class="files">
        DAO System AM H EN
      </router-link>
      <router-link to="/media/pdf/Dao System  AM H_/cdNUnXKf89nnLwjk/dao system am h ar .pdf"
          target="_blank" class="files">
        DAO System AM H AR
      </router-link>
      <router-link to="/media/pdf/Dao System 1 A1 H_/vvfMcHTqcGLzd9A6/syetm dao 1 a1 h eng.pdf"
          target="_blank" class="files">
        DAO System 1 A1 H EN
      </router-link>
      <router-link to="/media/pdf/Dao System 1 A1 H_/vvfMcHTqcGLzd9A6/system dao 1 a1 h Ar.pdf"
          target="_blank" class="files">
        DAO System 1 A1 H AR
      </router-link>
      <router-link to="/media/pdf/Dao System 1 A2 H_/HkYfd8vhK9gf3Upp/dao system 1 a2 h eng.pdf"
          target="_blank" class="files">
        DAO System 1 A2 H EN
      </router-link>
      <router-link to="/media/pdf/Dao System 1 A2 H_/HkYfd8vhK9gf3Upp/dao system 1 a2 H ar.pdf"
          target="_blank" class="files">
        DAO System 1 A2 H AR
      </router-link>
      <router-link
          to="/media/pdf/Dao System 11 B1 H/v4Na7eJWwznYk9cU/Dao 11 b1 H 4 days only  english .pdf"
          target="_blank" class="files">
        DAO System 11 B1 H EN
      </router-link>
      <router-link
          to="/media/pdf/Dao System 11 B1 H/v4Na7eJWwznYk9cU/Dao system 11 b1 H arabic .pdf"
          target="_blank" class="files">
        DAO System 11 B1 H AR
      </router-link>
      <router-link
          to="/media/pdf/Dao System 11 B2 H_/c39mkRvuPYD6vrz4/dao system 11 b2 eng.pdf"
          target="_blank" class="files">
        DAO System 11 B2 H EN
      </router-link>
      <router-link
          to="/media/pdf/Dao System 11 B2 H_/c39mkRvuPYD6vrz4/dao system 11 b2 ar.pdf"
          target="_blank" class="files">
        DAO System 11 B2 H AR
      </router-link>
      <router-link
          to="/media/pdf/Dao System 27_/rFuRBE9XenyhQ5ux/Dao system 27 H English.pdf"
          target="_blank" class="files">
        DAO System 27 EN
      </router-link>
      <router-link
          to="/media/pdf/Dao System 27_/rFuRBE9XenyhQ5ux/Dao system 27 H arabic.pdf"
          target="_blank" class="files">
        DAO System 27 AR
      </router-link>
      <router-link
          to="/media/pdf/Dao System 36_/79Rgpvm2zRHRdxDw/DAO system 36 H English.pdf"
          target="_blank" class="files">
        DAO System 36 EN
      </router-link>
      <router-link
          to="/media/pdf/Dao System 36_/79Rgpvm2zRHRdxDw/Doa system 36 H Arabic.pdf"
          target="_blank" class="files">
        DAO System 36 AR
      </router-link>
      <router-link
          to="/media/pdf/Dao System 64_/4LKHMbgNjh7pscjs/Doa system 64 H English.pdf"
          target="_blank" class="files">
        DAO System 64 EN
      </router-link>
      <router-link
          to="/media/pdf/Dao System 64_/4LKHMbgNjh7pscjs/Doa system 64 H Arabic.pdf"
          target="_blank" class="files">
        DAO System 64 AR
      </router-link>
      <router-link
          to="/media/pdf/Dao System X _/WeWC7Nj8Mj6Vd64P/dao system x 6 days .pdf"
          target="_blank" class="files">
        DAO System X EN
      </router-link>
      <router-link
          to="/media/pdf/Dao System X _/WeWC7Nj8Mj6Vd64P/system Dao X  (1).pdf"
          target="_blank" class="files">
        DAO System X AR
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VideoSession',
  data() {
    return {
      Peer: window.Peer,
      localId: null,
      isDoctor: false,
      isLoading: true,
    };
  },
  mounted() {
    const webRtcLinkFirst = document.createElement('script');
    webRtcLinkFirst.setAttribute('src', '//cdn.webrtc.ecl.ntt.com/skyway-latest.js');
    document.head.appendChild(webRtcLinkFirst);
    this.checkIsDoctor();
  },
  computed: {
    // currentSession() {
    //   const sessionId = this;
    //   return sessionId;
    // },
  },
  methods: {
    checkIsDoctor() {
      this.$store.dispatch('user/retrieveIsDoctor')
        .then((response) => {
          this.isDoctor = response.data.message;
          if (!this.isDoctor) {
            this.$router.push('/');
          } else {
            this.configureSession();
          }
        }).catch((error) => {
          console.log(error);
        });
    },
    newSession() {
      window.peer.once('open', (id) => {
        this.sessionId = id;
      });
    },
    async configureSession() {
      this.isLoading = true;
      const localVideo = document.getElementById('js-local-stream');
      const closeTrigger = document.getElementById('js-close-trigger');
      const remoteVideo = document.getElementById('js-remote-stream');
      const localStream = await navigator.mediaDevices
        .getUserMedia({
          audio: true,
          video: true,
        })
        .catch(console.error);

      // Render local stream
      localVideo.muted = true;
      localVideo.srcObject = localStream;
      localVideo.playsInline = true;
      await localVideo.play().catch(console.error);
      window.peer = new window.Peer({
        key: '3006e54d-f286-4e81-8c9d-f6bac3816192',
        debug: 3,
      });

      window.peer.once('open', (id) => {
        this.localId = id;
        this.isLoading = false;
      });

      // Register callee handler
      window.peer.on('call', (mediaConnection) => {
        mediaConnection.answer(localStream);

        mediaConnection.on('stream', async (stream) => {
          // Render remote stream for callee
          remoteVideo.srcObject = stream;
          remoteVideo.playsInline = true;
          await remoteVideo.play().catch(console.error);
        });

        mediaConnection.once('close', () => {
          remoteVideo.srcObject.getTracks().forEach((track) => track.stop());
          remoteVideo.srcObject = null;
        });

        closeTrigger.addEventListener('click', () => mediaConnection.close(true));
      });

      window.peer.on('error', console.error);
    },
  },
};
</script>

<style scoped>
  #js-remote-stream {
    width: 100%;
    border-radius: 10px;
    display: block;
  }

  #js-local-stream {
    max-width: 150px;
    border-radius: 3px;
  }

  .remote-stream {
    background-color: grey;
    border-radius: 10px;
    display: block;
    max-width: 460px;
  }

  .spinner-border {
    height: 1.5rem;
    width: 1.5rem;
  }

  .files {
    display: block;
  }
</style>
