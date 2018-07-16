const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const config = {
  entry: [
    'babel-polyfill',
    './shared/index.js',
    './shared/styles/index.scss'
  ],
  devtool: 'source-map',
  plugins: [
    new UglifyJsWebpackPlugin({
      sourceMap: true
    }),
    new CompressionWebpackPlugin({
      assets: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  mode: 'production'
}

module.exports = config
