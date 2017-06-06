const swBuild = require('workbox-build');

swBuild.generateSW({
  navigateFallback: 'index.html',
  globDirectory: './dist',
  globPatterns: [
    'index.html',
    '**.js',
    '**.css',
    'assets/images/pokemon.png'
  ],
  swDest: 'dist/service-worker.js',
  // runtimeCaching: [
  //   {
  //     urlPattern: /\/api\/pokemon\//,
  //     handler: 'networkFirst',
  //     options: {
  //       cacheName: 'api-cache',
  //       cacheExpiration: {
  //         maxEntries: 10
  //       }
  //     }
  //   }
  // ]
}).then(() => console.log('Service Worker generated')).catch(err => console.error(err, 'Service Worker failed to generate'));
