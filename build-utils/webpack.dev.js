const webpack = require('webpack')
const commonPaths = require('./webpack.common-paths')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

const hardDiskPlugin = new HtmlWebpackHarddiskPlugin({
  outputPath: commonPaths.outputPath
})

const config = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './shared/index.js',
    './shared/styles/index.scss'
  ],
  devtool: 'source-map',
  plugins: [
    hardDiskPlugin,
    new webpack.LoaderOptionsPlugin({ options: {} }),
    new webpack.ProgressPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: 'development'
}
module.exports = config
