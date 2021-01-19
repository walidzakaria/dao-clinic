<template>
  <div class="container">
    <h1 class="heading">P2P Media example</h1>
    <p class="note">
      Enter remote peer ID to call.
    </p>
    <div class="p2p-media">
        <div class="remote-stream">
          <video id="js-remote-stream"></video>
        </div>
        <div class="local-stream">
          <video id="js-local-stream"></video>
          <p>Your ID: <span id="js-local-id"></span></p>
          <input type="text" placeholder="Remote Peer ID" id="js-remote-id">
          <button id="js-call-trigger">Call</button>
          <button id="js-close-trigger">Close</button>
        </div>
      </div>
      <p class="meta" id="js-meta"></p>
      <div data-aos="fade-down-left">test animation</div>
  </div>
</template>

<script>

export default {
  name: 'VideoSession',
  data() {
    return {
      Peer: window.Peer,
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
  },
  computed: {
    currentSession() {
      const sessionId = this;
      return sessionId;
    },
  },
  methods: {
    async configureSession() {
      const localVideo = document.getElementById('js-local-stream');
      const localId = document.getElementById('js-local-id');
      const callTrigger = document.getElementById('js-call-trigger');
      const closeTrigger = document.getElementById('js-close-trigger');
      const remoteVideo = document.getElementById('js-remote-stream');
      const remoteId = document.getElementById('js-remote-id');
      const meta = document.getElementById('js-meta');
      const sdkSrc = document.querySelector('script[src*=skyway]');
      meta.innerText = `
          UA: ${navigator.userAgent}
          SDK: ${sdkSrc ? sdkSrc.src : 'unknown'}
        `.trim();
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

        const mediaConnection = window.peer.call(remoteId.value, localStream);

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
        localId.textContent = id;
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
