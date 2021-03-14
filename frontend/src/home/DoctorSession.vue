<template>
  <div class="container">
    <h1 class="heading">DAO Video Session</h1>
    <p class="note">
      Please send the link to the patient.
      Please make sure to give permission for your camera & microphone.
    </p>
    <div class="p2p-media">
      <button @click="showFullScreen()">F</button>
      <div id="video-frame" ref="videoFrame">
        <div class="local-stream">
        <video id="js-local-stream" controls autoPictureInPicture ref="jsLocalStream"></video>
      </div>
      <div class="remote-stream">
        <video id="js-remote-stream" poster="../assets/img/video/DAO-LOGO.webp"
            controls ref="jsRemoteStream"></video>
        </div>
        <div class="btn-bar">
          <button class="btn bg-success btn-dial">
            <img src="../assets/img/session/iconmonstr-phone-dial.svg" alt="dial">
          </button>

          <button id="js-close-trigger" ref="jsCloseTrigger" class="btn bg-danger btn-dial">
            <img src="../assets/img/session/iconmonstr-phone-hang.svg" alt="hang">
          </button>
        </div>
    </div>
    <!-- <input type="text" placeholder="Remote Peer ID" id="js-remote-id"> -->
    <!-- <button id="js-call-trigger">Call</button> -->
    <button @click="openPictureInPicture()">Picture on Picture</button>
    <button @click="openFullscreen()">Fullscreen</button>
    <button @click="configureSession()" id="js-new-session">
      New Session <span v-if="isLoading" class="spinner-border"></span>
    </button>
    <p>Client link:
      <router-link v-if="localId" :to="{ path: `/session/${this.localId}/` }"
          target="_blank">https://daoegypt.com/session/{{ localId }}/</router-link>
    </p>
      <button @click="startRecording()">Record</button>
      <button @click="stopRecording()">Stop</button>
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
      remoteStream: null,
      mediaRecorder: null,
      chunks: [],
      drag: {
        pos1: 0,
        pos2: 0,
        pos3: 0,
        pos4: 0,
      },
    };
  },
  mounted() {
    const webRtcLinkFirst = document.createElement('script');
    webRtcLinkFirst.setAttribute('src', '//cdn.webrtc.ecl.ntt.com/skyway-latest.js');
    document.head.appendChild(webRtcLinkFirst);
    this.checkIsDoctor();
  },
  computed: {
  },
  methods: {
    dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      this.drag.pos3 = e.clientX;
      this.drag.pos4 = e.clientY;
      console.log(this.drag);
    },
    startRecording() {
      if (!this.remoteStream) { return; }
      if (this.chunks === []) { return; }
      if (this.remoteStream.status === 'recording') { return; }
      this.mediaRecorder = new MediaRecorder(this.remoteStream);
      this.chunks = [];
      this.mediaRecorder.ondataavailable = (ev) => {
        this.chunks.push(ev.data);
      };
      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.chunks, { type: 'video/mp4;' });
        const videoUrl = window.URL.createObjectURL(blob);

        // Convert your blob into a Blob URL
        // (a special url that points to an object in the browser's memory)

        // Create a link element
        const link = document.createElement('a');

        // Set link's href to point to the Blob URL
        link.href = videoUrl;
        link.download = 'Session.mp4';
        console.log(link);
        // Append link to the body
        document.body.appendChild(link);

        // Dispatch click event on the link
        // This is necessary as link.click() does not work on the latest firefox
        link.dispatchEvent(
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window,
          }),
        );

        // Remove link from body
        document.body.removeChild(link);

        console.log(this.mediaRecorder.state);
        this.chunks = [];
      };
      this.mediaRecorder.start();
      console.log(this.mediaRecorder.state);
    },
    stopRecording() {
      if (!this.remoteStream) { return; }
      if (!this.remoteStream.status === 'recording') { return; }
      console.log('before stopping', this.remoteStream.status);
      this.mediaRecorder.stop();
    },
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
    showFullScreen() {
      const elem = this.$refs.videoFrame;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    },
    openFullscreen() {
      const elem = this.$refs.jsRemoteStream;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    },
    openPictureInPicture() {
      const localVideo = this.$refs.jsLocalStream;
      if (localVideo.requestPictureInPicture) {
        localVideo.requestPictureInPicture();
      } else if (localVideo.webkitRequestPictureInPicture) { /* Safari */
        localVideo.webkitRequestPictureInPicture();
      } else if (localVideo.msRrequestPictureInPicture) { /* IE11 */
        localVideo.msRequestPictureInPicture();
      }
    },
    newSession() {
      window.peer.once('open', (id) => {
        this.sessionId = id;
      });
    },
    async configureSession() {
      this.isLoading = true;
      const localVideo = this.$refs.jsLocalStream;
      const closeTrigger = this.$refs.jsCloseTrigger;
      const remoteVideo = this.$refs.jsRemoteStream;
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
          this.remoteStream = stream;
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
    max-height: 100vh;
  }
  audio::-webkit-media-controls-timeline,
  video::-webkit-media-controls-timeline {
      display: none;
  }

  #js-local-stream {
    max-width: 200px;
    border-radius: 5px;
    -o-transform : scaleX(-1);
    -moz-transform : scaleX(-1);
    -webkit-transform : scaleX(-1);
    -ms-transform: scaleX(-1);
    transform : scaleX(-1);
  }

  .spinner-border {
    height: 1.5rem;
    width: 1.5rem;
  }

  .files {
    display: block;
  }

  #video-frame {
    background-color: gray;
    min-height: 300px;
    width: 100%;
    position: relative;
  }

  .remote-stream {
    background-color: grey;
    border-radius: 10px;
    display: inline;
    width: 100%;
    height: 100%;
  }

  .local-stream {
    display: inline-flex;
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 30px;
    margin-right: 30px;
  }

  .btn-dial {
    border-radius: 50%;
    min-width: 65px;
    min-height: 65px;
    margin: 5px;
    display: inline;
  }

  .btn-dial img {
    height: 45px;
  }

  .btn-bar {
    display: ruby;
  }
</style>
