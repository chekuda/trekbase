const commonPaths = require('./webpack.common-paths')

const config = {
  devtool: 'source-map', //webpack.js.org/configuration/devtool
  module:{
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          { loader:'css-loader', options: { parser: 'sugars' } },
          // 'postcss-loader'
        ]
      }
    ]
  }
}
module.exports  = config