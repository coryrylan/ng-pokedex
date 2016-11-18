module.exports = {
  navigateFallback: '/index.html',
  stripPrefix: 'dist',
  root: 'dist/',
  staticFileGlobs: [
    'dist/index.html',
    'dist/**.js',
    'dist/**.css',
    'dist/**.woff2',
    'dist/assets/images/pokemon.png'
  ]
  // runtimeCaching: [
  //   {
  //     urlPattern: /\/api\/pokemon\//,
  //     handler: 'networkFirst',
  //     options: {
  //       cache: {
  //         maxEntries: 10,
  //         name: 'api-cache'
  //       }
  //     }
  //   }
  // ]
};