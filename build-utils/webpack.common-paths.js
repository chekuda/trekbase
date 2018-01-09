const path = require('path')

//This module will contain all the common paths for being used in the other configuration files
module.exports = {
  outputPath: path.resolve(__dirname, '../dist'),
  srcPath: path.resolve(__dirname, '../src'),
  publicPath: path.resolve(__dirname, '../public')
}