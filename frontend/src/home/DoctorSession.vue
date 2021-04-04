<template>
  <div>
    <h1 class="heading">DAO Video Session</h1>
    <p class="note">
      Please send the link to the patient.
      Please make sure to give permission for your camera & microphone.
    </p>
    <div id="frame">
      <div class="remote-stream">
        <video id="js-remote-stream" controls ref="jsRemoteStream"></video>
      </div>
      <div class="local-stream">
        <video id="js-local-stream" autoPictureInPicture ref="jsLocalStream"></video>
      </div>
      <button class="btn bg-success btn-dial" @click="configureSession()" id="js-new-session">
        <img src="../assets/img/session/iconmonstr-phone-dial.svg" alt="dial">
        <span v-if="isLoading" class="spinner-border"></span>
      </button>
      <button id="js-close-trigger" ref="jsCloseTrigger" class="btn bg-danger btn-dial">
        <img src="../assets/img/session/iconmonstr-phone-hang.svg" alt="hang">
      </button>
      <button @click="startRecording()" class="btn bg-primary">
        <img src="../assets/img/session/iconmonstr-microphone-4.svg" alt="record">
      </button>
      <button @click="stopRecording()" class="btn bg-dark">
        <img id="logo-stop" src="../assets/img/session/iconmonstr-media-control-50.svg" alt="stop">
      </button>
      <br>
    </div>
      <!-- Prescriptions Tabs -->
      <div class="row feture-tabs">
        <div>Client's link: </div>
         <router-link v-if="localId" :to="{ path: `/session/${this.localId}/` }"
          target="_blank">https://daoegypt.com/session/{{ localId }}/</router-link>
        <br><br><br>
        <div class="col-lg-6 features">
          <h2>Prescriptions</h2>

          <!-- Tabs -->
          <ul class="nav nav-pills mb-3">
            <li>
              <button data-bs-toggle="pill"
                  @click="selectedPage = 1" class="btn" :class="{ 'clicked': selectedPage === 1}">
                English
              </button>
            </li>
            <li>
              <button data-bs-toggle="pill"
                  @click="selectedPage = 2" class="btn" :class="{ 'clicked': selectedPage === 2}">
                Arabic
              </button>
            </li>
            <li>
              <button data-bs-toggle="pill"
                  @click="selectedPage = 3" class="btn" :class="{ 'clicked': selectedPage === 3}">
                DAO Kids
              </button>
            </li>
            <li>
              <button data-bs-toggle="pill"
                  @click="selectedPage = 4" class="btn" :class="{ 'clicked': selectedPage === 4}">
                DAO Old
              </button>
            </li>
          </ul><!-- End Tabs -->

          <!-- Tab Content -->
          <div class="tab-content">
            <div class="tab-pane fade show" :class="{ 'active': selectedPage === 1 }" id="tab1">
              <router-link
                  to="/media/pdf/Dao System  AM H_/cdNUnXKf89nnLwjk/dao system am h eng.pdf"
                  target="_blank" class="files">
                DAO System AM H EN
              </router-link>
              <router-link
                  to="/media/pdf/Dao System 1 A1 H_/vvfMcHTqcGLzd9A6/syetm dao 1 a1 h eng.pdf"
                  target="_blank" class="files">
                DAO System 1 A1 H EN
              </router-link>
              <router-link
                  to="/media/pdf/Dao System 1 A2 H_/HkYfd8vhK9gf3Upp/dao system 1 a2 h eng.pdf"
                  target="_blank" class="files">
                DAO System 1 A2 H EN
              </router-link>
              <router-link
          to="/media/pdf/Dao System 11 B1 H/v4Na7eJWwznYk9cU/Dao 11 b1 H 4 days only  english .pdf"
                  target="_blank" class="files">
                DAO System 11 B1 H EN
              </router-link>
              <router-link
                  to="/media/pdf/Dao System 11 B2 H_/c39mkRvuPYD6vrz4/dao system 11 b2 eng.pdf"
                  target="_blank" class="files">
                DAO System 11 B2 H EN
              </router-link>
              <router-link
                  to="/media/pdf/Dao System 27_/rFuRBE9XenyhQ5ux/Dao system 27 H English.pdf"
                  target="_blank" class="files">
                DAO System 27 EN
              </router-link>
              <router-link
                  to="/media/pdf/Dao System 36_/79Rgpvm2zRHRdxDw/DAO system 36 H English.pdf"
                  target="_blank" class="files">
                DAO System 36 EN
              </router-link>
              <router-link
                  to="/media/pdf/Dao System 64_/4LKHMbgNjh7pscjs/Doa system 64 H English.pdf"
                  target="_blank" class="files">
                DAO System 64 EN
              </router-link>
              <router-link
                  to="/media/pdf/Dao System X _/WeWC7Nj8Mj6Vd64P/dao system x 6 days .pdf"
                  target="_blank" class="files">
                DAO System X EN
              </router-link>
            </div><!-- End Tab 1 Content -->
            <div class="tab-pane fade show" :class="{ 'active': selectedPage === 2 }" id="tab2">
              <router-link
                  to="/media/pdf/Dao System  AM H_/cdNUnXKf89nnLwjk/dao system am h ar .pdf"
                  target="_blank" class="files">
                DAO System AM H AR
              </router-link>
              <router-link
                  to="/media/pdf/Dao System 1 A1 H_/vvfMcHTqcGLzd9A6/system dao 1 a1 h Ar.pdf"
                  target="_blank" class="files">
                DAO System 1 A1 H AR
              </router-link>
              <router-link
                  to="/media/pdf/Dao System 1 A2 H_/HkYfd8vhK9gf3Upp/dao system 1 a2 H ar.pdf"
                  target="_blank" class="files">
                DAO System 1 A2 H AR
              </router-link>
              <router-link
                  to="/media/pdf/Dao System 11 B1 H/v4Na7eJWwznYk9cU/Dao system 11 b1 H arabic .pdf"
                  target="_blank" class="files">
                DAO System 11 B1 H AR
              </router-link>
              <router-link
                  to="/media/pdf/Dao System 11 B2 H_/c39mkRvuPYD6vrz4/dao system 11 b2 ar.pdf"
                  target="_blank" class="files">
                DAO System 11 B2 H AR
              </router-link>
              <router-link
                  to="/media/pdf/Dao System 27_/rFuRBE9XenyhQ5ux/Dao system 27 H arabic.pdf"
                  target="_blank" class="files">
                DAO System 27 AR
              </router-link>
              <router-link
                  to="/media/pdf/Dao System 36_/79Rgpvm2zRHRdxDw/Doa system 36 H Arabic.pdf"
                  target="_blank" class="files">
                DAO System 36 AR
              </router-link>
              <router-link
                  to="/media/pdf/Dao System 64_/4LKHMbgNjh7pscjs/Doa system 64 H Arabic.pdf"
                  target="_blank" class="files">
                DAO System 64 AR
              </router-link>
              <router-link
                  to="/media/pdf/Dao System X _/WeWC7Nj8Mj6Vd64P/system Dao X  (1).pdf"
                  target="_blank" class="files">
                DAO System X AR
              </router-link>
            </div><!-- End Tab 2 Content -->
            <div class="tab-pane fade show" :class="{ 'active': selectedPage === 3 }" id="tab3">
              <router-link
                  to="/media/pdf/Dao Kids/j6WeWNj8MC7Vd64P/dao kids 1.pdf"
                  target="_blank" class="files">
                DAO Kids 1
              </router-link>
              <router-link
                  to="/media/pdf/Dao Kids/K9gf3UppHkYfd8vh/dao kids 13.pdf"
                  target="_blank" class="files">
                DAO Kids 13
              </router-link>
              <router-link
                  to="/media/pdf/Dao Kids/nyE9XehQ5uxrFuRB/dao kids 25.pdf"
                  target="_blank" class="files">
                DAO Kids 25
              </router-link>
              <router-link
                  to="/media/pdf/Dao Kids/Pz4c3YD6vr9mkRvu/dao kids 37.pdf"
                  target="_blank" class="files">
                DAO Kids 37
              </router-link>
              <router-link
                  to="/media/pdf/Dao Kids/Yk9cUv4wNa7eJWzn/dao kids 49.pdf"
                  target="_blank" class="files">
                DAO Kids 49
              </router-link>
            </div><!-- End Tab 3 Content -->
            <div class="tab-pane fade show" :class="{ 'active': selectedPage === 4 }" id="tab4">
              <router-link
                  to="/media/pdf/Dao Old/wznYk9cUv4Na7eJW/DAO1.pdf"
                  target="_blank" class="files">
                DAO Old 1
              </router-link>
              <router-link
                  to="/media/pdf/Dao Old/C7Vd64j6WeWNj8MP/DAO3.pdf"
                  target="_blank" class="files">
                DAO Old 3
              </router-link>
              <router-link
                  to="/media/pdf/Dao Old/PYD6vrz4c39mkRvu/DAO11.pdf"
                  target="_blank" class="files">
                DAO Old 11
              </router-link>
              <router-link
                  to="/media/pdf/Dao Old/nyhQ5uxrFuRBE9Xe/DAO14.pdf"
                  target="_blank" class="files">
                DAO Old 14
              </router-link>
              <router-link
                  to="/media/pdf/Dao Old/Nj8Mj6WeWC7Vd64P/DAO27.pdf"
                  target="_blank" class="files">
                DAO Old 27
              </router-link>
              <router-link
                  to="/media/pdf/Dao Old/m279RgpvzDwRHRdx/DAO36.pdf"
                  target="_blank" class="files">
                DAO Old 36
              </router-link>
              <router-link
                  to="/media/pdf/Dao Old/js4LKbgNjh7pscHM/DAO42.pdf"
                  target="_blank" class="files">
                DAO Old 42
              </router-link>
              <router-link
                  to="/media/pdf/Dao Old/f89nnLwjkcdNUnXK/DAO55.pdf"
                  target="_blank" class="files">
                DAO Old 55
              </router-link>
              <router-link
                  to="/media/pdf/Dao Old/cGLzd9A6vvfMcHTq/DAO64.pdf"
                  target="_blank" class="files">
                DAO Old 64
              </router-link>
            </div><!-- End Tab 4 Content -->
          </div>
        </div>
    </div><!-- End Feature Tabs -->
  </div>
</template>

<script>

export default {
  name: 'VideoSession',
  data() {
    return {
      selectedPage: 1,
      Peer: window.Peer,
      localId: null,
      isDoctor: false,
      isLoading: true,
      remoteStream: null,
      mediaRecorder: null,
      chunks: [],
    };
  },
  mounted() {
    const webRtcLinkFirst = document.createElement('script');
    webRtcLinkFirst.setAttribute('src', '//cdn.webrtc.ecl.ntt.com/skyway-latest.js');
    document.head.appendChild(webRtcLinkFirst);
    this.checkIsDoctor();
  },
  methods: {
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
          video: { width: 1280, height: 720 },
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
#link {
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
