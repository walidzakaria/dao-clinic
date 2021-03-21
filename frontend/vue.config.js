/* eslint-disable no-unused-vars */
const PrerenderSpaPlugin = require('prerender-spa-plugin');
const path = require('path');

module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== 'production') return;

    // eslint-disable-next-line consistent-return
    return {
      plugins: [
        new PrerenderSpaPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          ['/', '/about', '/doctors', '/services'],
          {
            postProcessHtml(context) {
              const titles = {
                '/': 'DAO World - Home',
                '/about': 'DAO World | About',
                '/booking': 'DAO World | Booking',
                '/doctors': 'DAO World | Doctors',
                '/services': 'DAO World | Services',
              };
              return context.html.replace(
                /<title>[^<]*<\/title>/i,
                `<title>${titles[context.route]}</title>`,
              );
            },
          },
        ),
      ],
    };
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000/',
        changeOrigin: true,
        pathRewrite: { '^api/': '' },
        // ws: false,
      },
    },
  },
  // outputDir must be added to Django's TEMPLATE_DIRS
  outputDir: './dist/',
  // assetsDir must match Django's STATIC_URL
  assetsDir: 'static',
};
