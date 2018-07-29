generate: {
  minify: {
    collapseWhitespace: false
  }
}
{
  modules: [
    // Simple usage
    ['@nuxtjs/google-analytics', {
      id: 'UA-113895926-1'
    }]
  ]
}
module.exports = {
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ]
}
