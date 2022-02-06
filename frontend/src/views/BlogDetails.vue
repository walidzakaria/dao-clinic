<template>
  <div>
    <!-- ======= Blog Details Section ======= -->
    <section id="blog details">
      <div class="container mb-5" data-aos="fade-up" v-if="blog">
        <img
          class="header-image"
          :src="`http://127.0.0.1:8000${blog.wallpaper}`"
          srcset=""
          width="640"
          height="217"
          :alt="blog.title"
      sizes="(min-width: 2000px) 1920px, (min-width: 768px) 1280px, (min-width: 320px) 640px, 320px"
        />

        <div class="row">
          <article class="col-12 col-md-8 offset-md-2">
            <div class="d-flex align-items-center mr-md-2 mr-lg-0">
              <img
                :src="`http://127.0.0.1:8000${blog.user_image}`"
                :alt="blog.by"
                class="blog-avatar mx-3 mx-sm-4"
              />
              <div class="metadata-layout mr-1">
                <address class="mb-0">
                  By:
                  {{ blog.by }}
                </address>
                <time :datetime="blog.date">{{ convertDate(blog.date) }}</time>
              </div>
            </div>

            <h1 class="h2 mt-3 mt-md-4 mb-2">
              {{ blog.title }}
            </h1>
            <div class="body-block mt-5">
              <p>{{ blog.hook }}</p>
              <div v-if="blog.video_link"
                class="wistia_responsive_padding"
                style="padding:56.25% 0 28px 0;position:relative;"
              >
                <div
                  class="wistia_responsive_wrapper"
                  style="height:100%;left:0;position:absolute;top:0;width:100%;"
                >
                  <figure>
                    <div class="wistia_video_foam_dummy dummy"></div>
                    <iframe
                      :src="blog.video_link"
                      :title="blog.title"
                      allow="autoplay; fullscreen"
                      allowtransparency="true"
                      frameborder="0"
                      scrolling="no"
                      class="wistia_embed"
                      name="wistia_embed"
                      msallowfullscreen=""
                      width="617"
                      height="347"
                      style="width: 617px; height: 347px;"
                    ></iframe>
                  </figure>
                </div>
              </div>
              <div class="secions" v-for="(section, index) in blog.sections" :key="index">
                <div class="section-photo" v-if="section.photo">
                  <figure>
                <a
                  target="_blank"
                  :href="section.photo"
                  ><img
                    :src="`http://127.0.0.1:8000${section.photo}`"
                    :alt="section.alt || blog.title"
                    style="opacity: 1;"
                /></a>
              </figure>
                </div>
              <h2>{{ section.subtitle }}</h2>
              <p>{{ section.paragraph }}</p>
              </div>
            </div>
            <footer>
              <div class="small ">
                <div class="mt-5">
                  <p><strong>{{ blog.by }} — </strong></p>
                </div>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </section>
    <!-- End Blog Details Section -->
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'DAO World',
      titleTemplate: '%s | Blog',
    };
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch('blog/retrieveDetailedBlog', this.slug);
  },
  computed: {
    slug() {
      return this.$route.params.title;
    },
    blog() {
      return this.$store.getters['blog/getDetailedBlog'];
    },
  },
  methods: {
    convertDate(inputDate) {
      const options = {
        weekDay: 'long', year: 'numeric', month: 'long', day: 'numeric',
      };
      const today = new Date(inputDate);
      return today.toLocaleDateString('en-US', options);
    },
  },
};
</script>

<style>
/* .dummy {
  border: 0px;
  display: block;
  height: 0px;
  margin: 0px;
  padding: 0px;
  position: static;
  visibility: hidden;
  width: auto;
}

#background {
  padding: 0 !important;
} */
</style>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

.font-lato {
  font-family: 'Lato', sans-serif;
}

.h2, h2 {
  font-size: 1.7rem;
  font-weight: 500;
}

.body-block {
  line-height: 1.9;
  text-align: left;
}

.body-block p {
  margin-right: auto;
  margin-left: auto;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-size: 1.125rem;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
}

.header-image {
  width: 100%;
  max-width: unset;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  object-position: center;
  aspect-ratio: auto 640 / 217;
}

img, svg {
    vertical-align: middle;
}

.blog-avatar {
  width: 50px;
  height: 50px;
  margin-top: -2rem;
  background-color: #4dbdeb;
  border-radius: 50%;
}

.page-type-content.blog-entry .body-block img {
  display: block;
  margin: 2rem auto;
}

.blog-entry .body-block img {
  height: auto;
}

img {
  max-width: 100%;
}
.metadata-layout {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
}

figure {
  margin: 0 0 1rem;
  box-sizing: border-box;
}

@media (min-width: 960px) {
.metadata-layout {
    flex-direction: row;
    justify-content: space-between;
  }
}

@media (min-width: 768px) {
  .blog-avatar {
    width: 80px;
    height: 80px;
    margin-top: -2.5rem;
  }

  .h2, h2 {
    font-size: 2.25rem;
  }

  .blog-entry .metadata-layout {
    flex-direction: row;
    justify-content: space-between;
  }
  .metadata-layout {
    flex-direction: column;
    justify-content: flex-end;
  }
}

@media (min-width: 576px) {
  .mx-sm-4 {
    margin-right: 1.5rem!important;
    margin-left: 1.5rem!important;
  }

  .metadata-layout {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
