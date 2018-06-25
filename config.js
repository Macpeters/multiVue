generate: {
  minify: {
    collapseWhitespace: false
  }
}
module.exports = {
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ]
}
// {
//   modules: [
//     // Simple usage
//     ['@nuxtjs/google-analytics', {
//       id: 'ZxmnP8EXJRjiayUi1MzTxW0p9D'
//     }]
//   ]
// }
// {
//   modules: [
//     ['@nuxtjs/google-analytics']
//   ],
//     'google-analytics': {
//     id: 'ZxmnP8EXJRjiayUi1MzTxW0p9D'
//   }
// }