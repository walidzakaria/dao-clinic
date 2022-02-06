<template>
  <div>
    <!-- ======= Team Section ======= -->
    <section id="blog">
      <div class="" data-aos="fade-up">
        <header class="section-header">
          <h1>DAO Blog</h1>
          Follow our DAO blogs to get to know new tips and hints that could transform your entire
          life.
        </header>
        <div class="row">
          <article
            v-for="(blog, index) in blogs.results"
            :key="index"
            class="col-12 col-md-6 mt-2 mb-4"
          >
            <router-link :to="blog.slug">
              <img
                class="header-image"
                :src="`http://127.0.0.1:8000${blog.wallpaper}`"
                width="536"
                height="181"
                :alt="blog.title"
                sizes="(min-width: 768px) 1280px, (min-width: 400px) 640px, 320px"
              />
            </router-link>

            <div class="d-flex align-items-center mb-2">
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

            <h2 class="h3 font-lato mb-2 mb-md-3">
              <router-link :to="blog.slug">
                {{ blog.title }}
              </router-link>
            </h2>
            <p></p>
            <p class="font-lato">{{ blog.main_paragraph }}</p>
            <p></p>
            <footer class="mt-4 d-flex align-items-center justify-content-between mr-1">
              <router-link class="btn btn-secondary-blue btn-sm" :to="blog.slug">
                Read this post
              </router-link>
            </footer>
          </article>
        </div>
      </div>
    </section>
    <nav aria-label="pagination-section" v-if="numOfPages > 1">
      <ul class="pagination pg-blue justify-content-center">
        <li class="page-item" :class="{ disabled: !blogs.previous }" @click="changePage(1)">
          <a class="page-link" href="#" tabindex="-1">Previous</a>
        </li>
        <li v-for="n in numOfPages" :key="n" class="page-item"
          :class="{ active: currentPage === n}"
          @click="changePage(n)">
          <a class="page-link" href="#">{{ n }} <span class="sr-only">(current)</span></a>
        </li>
        <li class="page-item" :class="{ disabled: !blogs.next }" @click="changePage(numOfPages)">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
    <!-- End Blog Section -->
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'DAO World',
      titleTemplate: '%s | Blogs',
    };
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  created() {
    this.$store.dispatch('blog/retrieveBlogs', 1);
  },
  computed: {
    blogs() {
      return this.$store.getters['blog/getBlogs'] || [];
    },
    numOfPages() {
      return this.blogs.count < 20 ? 1 : this.blogs.count / 20;
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
    changePage(pageNumber) {
      if (pageNumber === this.currentPage) { return; }
      this.$store.dispatch('blog/retrieveBlogs', pageNumber);
      this.currentPage = pageNumber;
      console.log(pageNumber);
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

.font-lato {
  font-family: 'Lato', sans-serif;
}

p {
  font-size: 1rem;
  line-height: 1.6;
}
.btn-secondary-blue {
  color: #4dbdeb;
  border-color: #4dbdeb;
  color: #4dbdeb;
}
.header-image {
  width: 100%;
  max-width: unset;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  object-position: center;
}
.blog-avatar {
  width: 50px;
  height: 50px;
  margin-top: -2rem;
  background-color: #4dbdeb;
  border-radius: 50%;
}

.metadata-layout {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
}

@media (min-width: 768px) {
  .blog-avatar {
    width: 80px;
    height: 80px;
    margin-top: -2.5rem;
  }

  .metadata-layout {
    flex-direction: column;
    justify-content: flex-end;
  }
}

@media (min-width: 576px) {
  .metadata-layout {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
