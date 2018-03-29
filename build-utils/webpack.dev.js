const commonPaths = require('./webpack.common-paths')

const config = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './shared/index.js'
  ],
  devtool: 'source-map', //webpack.js.org/configuration/devtool
  module:{
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          { loader:'css-loader', options: { parser: 'sugars' } },
          'postcss-loader'
        ]
      }
    ]
  }
}
module.exports  = config