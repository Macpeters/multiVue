generate: {
  minify: {
    collapseWhitespace: false
  }
}
module.exports = {
  head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  modules: [
    // Simple usage
    ['@nuxtjs/google-analytics', {
      id: 'UA-113895926-1'
    }]
  ],
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ]
}
  
// module.exports = {
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