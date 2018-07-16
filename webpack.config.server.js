const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const commonPaths = require('./build-utils/webpack.common-paths')

module.exports = () => {
  console.log('ENVIRONMENT FOR SERVER CONFIG', process.env.ENV)

  return {
    mode: 'development',
    name: 'server',
    entry: './server',
    externals: [nodeExternals()],
    output: {
      path: commonPaths.outputPath,
      filename: 'server.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        }
      ]
    },
    target: 'node',
    plugins: [
      new webpack.IgnorePlugin(/\.(css|less|scss)$/),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ],
    resolve: {
      extensions: ['.js', '.json', '.jsx']
    }
  }
}
