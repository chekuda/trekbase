const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const config = {
  //Anding extra functionality by adding this source-map
  devtool: 'source-map', //webpack.js.org/configuration/devtool
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: [
              'css-loader',
              'postcss-loader'
            ],
            fallback: 'style-loader'
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('[name].css'), //Exrtact the css file with this name
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
    ]
}

module.exports = config