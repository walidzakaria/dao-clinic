import axios from 'axios';

export default {
  namespaced: true,
  state: {
    blogs: [],
    detailedBlog: null,
  },
  mutations: {
    updateBlogs(state, newBlogs) {
      state.blogs = newBlogs;
    },
    updateDetailedBlog(state, newBlog) {
      state.detailedBlog = newBlog;
    },
  },
  actions: {
    retrieveBlogs(context, pageNumber) {
      return new Promise((resolve, reject) => {
        axios({
          url: `http://127.0.0.1:8000/api/blog/blogs/?page=${pageNumber}`,
          method: 'get',
        }).then((response) => {
          context.commit('updateBlogs', response.data);
          console.log(response.data);
          resolve(response);
        }).catch((error) => {
          context.commit('updateBlogs', []);
          reject(error);
        });
      });
    },
    retrieveDetailedBlog(context, blogSlug) {
      return new Promise((resolve, reject) => {
        axios({
          url: `http://127.0.0.1:8000/api/blog/blog/${blogSlug}/`,
          method: 'get',
        }).then((response) => {
          context.commit('updateDetailedBlog', response.data);
          resolve(response);
        }).catch((error) => {
          context.commit('updateDetailedBlog', null);
          reject(error);
        });
      });
    },
  },
  getters: {
    getBlogs(state) {
      return state.blogs;
    },
    getDetailedBlog(state) {
      return state.detailedBlog;
    },
  },
};
