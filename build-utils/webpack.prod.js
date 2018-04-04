const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const config = {
  entry: [
    'babel-polyfill',
    './shared/index.js'
  ],
  devtool: 'source-map', //webpack.js.org/configuration/devtool
  plugins: [
    new UglifyJsWebpackPlugin({
      sourceMap: true //dont strip the footer of the bundle
    }),
    new CompressionWebpackPlugin({
      assets:'[path].gz[query]',
      algorithm:'gzip',
      test: /\.(js|html|css)$/, //Regex to get all the files with that extension
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  mode: 'production'
}

module.exports = config