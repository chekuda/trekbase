const webpack = require('webpack')
const commonPaths = require('./webpack.common-paths')
const htmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//Common configuration
const config = {
  //output file
  output: {
    //Outpuf file name
    filename: 'bundle.js', //create new bundle everytime
    //Path where the output file will be saved
    path: commonPaths.outputPath,
    publicPath: '/static/' // Need this for express serving our assets.
  },
  module: {
    rules: [
      {
        test: /\.png/, //extension of files to be affected by this rule
        use: [
          {
            loader:'url-loader', //will conver any assets requested by js or css into B64 string and inject themn in the bundle
            options:{
              limit: 30000 //limit of the image
            }
          }
        ]
      },{
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
      },{
        //Add font-awesome files
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
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
    }),
     //This will serve all the assets inside public folder
    //into virtual assets folder within output /dist (dev environment)
    new CopyWebpackPlugin([
      { from: './public/', to:'assets' }
    ]),
    //Add bootstrap4
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
        'Tether': 'tether',
        'window.Tether': 'tether',
        // In case you imported plugins individually, you must also require them here:
        Util: "exports-loader?Util!bootstrap/js/dist/util",
        Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
      })
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx'] //Add this in order to dont indicate the extension when import it
  }
}

module.exports = config