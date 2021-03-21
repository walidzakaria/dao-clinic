<template>
  <div>
    <h1 class="heading">DAO Video Session</h1>
    <p class="note">
      Please click connect, to get connected to the doctor.
      Please make sure to give permission for your camera & microphone.
    </p>
    <div id="frame">
      <div class="remote-stream">
        <video id="js-remote-stream" controls ref="jsRemoteStream"></video>
      </div>
      <div class="local-stream">
        <video id="js-local-stream" autoPictureInPicture ref="jsLocalStream"></video>
      </div>
      <button class="btn bg-success btn-dial" id="js-call-trigger">
        <img src="../assets/img/session/iconmonstr-phone-dial.svg" alt="dial">
        <span v-if="isLoading" class="spinner-border"></span>
      </button>
      <button id="js-close-trigger" js-close-trigger class="btn bg-danger btn-dial">
        <img src="../assets/img/session/iconmonstr-phone-hang.svg" alt="hang">
      </button>
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
    };
  },
  props: {
    sessionId: { type: String },
  },
  mounted() {
    const webRtcLinkFirst = document.createElement('script');
    webRtcLinkFirst.setAttribute('src', '//cdn.webrtc.ecl.ntt.com/skyway-latest.js');
    document.head.appendChild(webRtcLinkFirst);
    this.configureSession();
    console.log('this session:', this.currentSession);
  },
  computed: {
    currentSession() {
      const { sessionId } = this;
      return sessionId;
    },
  },
  methods: {
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
    async configureSession() {
      const localVideo = document.getElementById('js-local-stream');
      // const localId = document.getElementById('js-local-id');
      const callTrigger = document.getElementById('js-call-trigger');
      const closeTrigger = document.getElementById('js-close-trigger');
      const remoteVideo = document.getElementById('js-remote-stream');
      // const remoteId = document.getElementById('js-remote-id');
      // const meta = document.getElementById('js-meta');
      // const sdkSrc = document.querySelector('script[src*=skyway]');
      // meta.innerText = `
      //     UA: ${navigator.userAgent}
      //     SDK: ${sdkSrc ? sdkSrc.src : 'unknown'}
      //   `.trim();
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

      // Register caller handler
      callTrigger.addEventListener('click', () => {
        // Note that you need to ensure the peer has connected to signaling server
        // before using methods of peer instance.
        if (!window.peer.open) {
          return;
        }

        const mediaConnection = window.peer.call(this.sessionId, localStream);

        mediaConnection.on('stream', async (stream) => {
          // Render remote stream for caller
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

      window.peer.once('open', (id) => {
        this.localId = id;
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
#frame {
  min-width: 360px;
  /* height: 82vh; */
  background: #E6EAEA;
  display: flex;
  flex-wrap: wrap;
}

@media screen and (max-width: 991px) and (min-width: 800px) {
  #frame {
    margin-left: -10%;
    margin-right: -10%;
  }
}
@media screen and (max-width: 800px) and (min-width: 576px) {
  #frame {
    margin-left: -5%;
    margin-right: -5%;
  }
}
@media screen and (max-width: 360px) {
  #frame {
    width: 100%;
    height: 100vh;
  }
}
.remote-stream, .local-stream {
  width: 50%;
}

video {
  width: 100%;
  border-radius: 5px;
  margin: 1px;
}
.remote-stream video {
  padding-right: 2px;
}
.local-stream video {
  padding-left: 2px;
}

@media screen and (max-width: 767px) {
  .local-stream, .remote-stream {
    width: 100%;
  }
}
.tab-pane a{
  display: block;
  color: #272627;
}
.clicked {
  background-color: #9a7339;
  color: whitesmoke !important;
}
button:focus {
  border-color: #9a7339;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(154, 115, 57, 0.5);
}
.features {
  width: 100%;
  min-width: 300px;
}
.spinner-border {
    height: 1.3rem;
    width: 1.3rem;
    margin-top: 0.7px;
    margin-bottom: -1.3px;
  }
#js-local-stream {
  -o-transform : scaleX(-1);
  -moz-transform : scaleX(-1);
  -webkit-transform : scaleX(-1);
  -ms-transform: scaleX(-1);
  transform : scaleX(-1);
}
audio::-webkit-media-controls-timeline,
video::-webkit-media-controls-timeline {
  display: none;
}
</style>
