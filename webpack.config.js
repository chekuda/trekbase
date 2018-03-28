const commonConfig = require('./build-utils/webpack.common')
const webpackMerge = require('webpack-merge')


//All the configuration will be here can be object or function in order to pass the enviroment
module.exports = (env) => {
  console.log('ENVIRONMENT', process.env.ENV)

  //The env variable will determinate the config to use by the environment
  const envConfig = require(`./build-utils/webpack.${process.env.ENV}.js`)

  //merge all the configuration in one
  const mergedConfig = webpackMerge(commonConfig, envConfig)
  //console.log(mergedConfig)

  //This is were all the file to be introduce in the bundle file
  return mergedConfig
}