<template>
  <div>
    <div class="footer">
      <div class="footer-column">
        <h5>Get Our Apps (very soon)</h5>
        <div class="badges">
          <a class="app-link" href="#">
            <img class="app-badge" src="../assets/img/android-badge.webp" alt="">
          </a>
          <a class="app-link" href="#">
            <img class="app-badge" src="../assets/img/ios-badge.webp" alt="">
          </a>
        </div>
      </div>
      <div class="footer-column">
        <h5>Follow Us</h5>
          <div class="social-container">
            <a href="https://www.facebook.com/DrAhmedOmar1" target="_blank">
            <img class="icon" src="../assets/img/iconmonstr-facebook-6.svg" alt="facebook">
            @DrAhmedOmar1
          </a>
          <a href="https://www.instagram.com/dao_slimmingcenter/" target="_blank">
            <img class="icon" src="../assets/img/iconmonstr-instagram-11.svg" alt="facebook">
            dao_slimmingcenter
          </a>
          <a href="https://www.youtube.com/channel/UCUejKcXgnPuorj3IIVfe4hQ" target="_blank">
            <img class="icon" src="../assets/img/iconmonstr-youtube-6.svg" alt="youtube">
            DAO Slimming Centers
          </a>
        </div>
      </div>
      <div class="footer-column">
        <h5>About Us</h5>
        <div class="about-us-container">
          <a href="/about">Know Our Crew</a>
          <a href="/services">Our Services</a>
        </div>
      </div>
      <div class="footer-column">
        <h5>Meet Us</h5>
        <table>
          <tbody>
            <tr>
              <td>
                <a href="https://goo.gl/maps/9zrf3vFoFHMtqNyQA" target="_blank">
                  <img src="../assets/img/iconmonstr-location-18.svg" alt="location">
                  Mohandseen: 49 Sudan st.
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://g.page/ZayedDowntown?share" target="_blank">
                  <img src="../assets/img/iconmonstr-location-18.svg" alt="location">
                  Sheikh Zayed: 208 2nd Floor Downtown Mall
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="white-gap">
      <p>
        &copy; DAOEgypt.com All Rights Reserved
      </p>
      <p>
        Developed with <span>❤</span> by <a href="mailto:walidpiano@yahoo.com">Walid Zakaria</a>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  components: {
  },
};
</script>

<style scoped>
  .footer {
    width: 100%;
    background-color: #4b4746;
    padding-top: 30px;
    padding-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
  }

  h5, p {
    color: whitesmoke;
  }

  h5 {
    margin-top: -16px;
    text-align: center;
  }

  .app-badge {
    width: 115px;
    margin: 5px;
  }

  .footer-column {
    padding-left: 20px;
    padding-right: 20px;
  }

  .footer-column:nth-child(1), .footer-column:nth-child(2), .footer-column:nth-child(3) {
    border-right: 1.4px solid whitesmoke;
  }

  .footer-column:nth-child(1) {
    width: 27%;
  }

  .footer-column:nth-child(2) {
    width: 20%;
  }

  .footer-column:nth-child(3) {
    width: 16%;
  }

  .footer-column:nth-child(4) {
    width: 31%;
  }

  .white-gap {
    height: 20px;
    text-align: center;
  }

  .white-gap a {
    margin-left: 1px;
    display: inline-block;
  }

  a {
    display: block;
    /* text-align: center; */
    color: whitesmoke;
  }

  a:hover {
    text-decoration: none;
    color: whitesmoke;
  }

  .app-link {
    display: inline;
  }

  .icon {
    width: 19px;
    border-radius: 3px;
  }

  .badges {
    text-align: center;
  }

  .white-gap p, .white-gap a {
    color: #272627;
    margin: 0 auto;
  }

  .white-gap span {
    color: red;
  }

  @media screen  and (max-width: 1065px) {
    .footer-column:nth-child(1) {
      width: 22%;
    }

    .footer-column:nth-child(2) {
      width: 23%;
    }

    .footer-column:nth-child(3) {
      width: 15%;
    }

    .footer-column:nth-child(4) {
      width: 36%;
    }
    .app-badge {
      margin: 1px;
    }
  }

  @media screen  and (max-width: 960px) {
    .footer-column {
      min-width: 90%;
      border-right: none !important;
      margin: 5px auto 15px auto;
      padding-left: 35px;
      padding-right: 35px;
    }

    a {
      display: inline-block;
      padding: 10px;
    }

    td a {
      padding-top: 0;
      padding-bottom: 0;
    }
    h5 {
      margin-top: 0;
    }
    .footer-column:nth-child(1) {
      order: 4;
    }

    .footer-column:nth-child(2) {
      order: 1;
      border-bottom: 1px solid whitesmoke;
    }

    .footer-column:nth-child(3) {
      order: 2;
      border-bottom: 1px solid whitesmoke;
    }

    .footer-column:nth-child(4) {
      order: 3;
      border-bottom: 1px solid whitesmoke;
    }

    .social-container, .about-us-container {
      margin: 0 auto;
      text-align: center;
    }
  }
</style>
