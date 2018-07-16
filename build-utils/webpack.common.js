import commonPaths from './webpack.common-paths'
import htmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const config = {
  output: {
    filename: 'bundle.js',
    path: commonPaths.outputPath,
    publicPath: '/static/'
  },
  module: {
    rules: [
      {
        test: /\.png/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 30000
            }
          }
        ]
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader'
          }
        ]
      }, {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'extracted-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'extracted-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader?sourceMap'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new htmlWebpackPlugin({
      template: `${commonPaths.srcPath}/index.handlebars`,
      filename: 'index.handlebars',
      alwaysWriteToDisk: true,
      inject: 'body'
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  }
}

module.exports = config
