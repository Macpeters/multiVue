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
// module.exports = {
//   head: {
//     script: [
//       { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
//     ],
//     link: [
//       { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
//     ]
//   },
//   modules: [
//     ['@nuxtjs/google-analytics', { id: 'UA-113895926-1' }]
//   ],
  // plugins: [
  //   { src: '~plugins/ga.js', ssr: false }
  // ]
}
