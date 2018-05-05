// build: {
//   rules: {
//     images: [
//       {
//         test: /\.(png|jpe?g|gif|svg)$/,
//         loader: 'url-loader',
//         exclude: /(assets\/svg)/,
//         query: {
//           limit: 1000, // 1KO
//           name: 'img/[name].[hash:7].[ext]',
//         },
//       },
//       {
//         test: /\.svg$/,
//         include: [
//           path.resolve(__dirname, 'assets/svg'),
//         ],
//         use: 'svg-sprite-loader',
//       }
//     ]
//   }
// }
generate: {
  minify: {
    collapseWhitespace: false
  }
}