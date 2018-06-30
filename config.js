generate: {
  minify: {
    collapseWhitespace: false
  }
}
  
module.exports = {
  plugins: [
    '@nuxtjs/google-analytics', {
      id: 'UA-12301-2'
    }
  ]
//    { src: '~plugins/ga.js', ssr: false }

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