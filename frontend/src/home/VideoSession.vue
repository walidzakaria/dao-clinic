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
          <!-- <input type="text" placeholder="Remote Peer ID" id="js-remote-id"> -->
          <button id="js-call-trigger">Call</button>
          <button id="js-close-trigger">Close</button>
        </div>
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
</style>
