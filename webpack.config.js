const commonConfig = require('./build-utils/webpack.common')
const webpackMerge = require('webpack-merge')


//AddonsArr could be an string or array
const addons = (addonsArg) => {
  let addons = []
    .concat.apply([], [addonsArg])
    .filter(Boolean)                //remove any undefined value

  return addons.map(addonsName => require(`./build-utils/addons/webpack.${addonsName}.js`)) //require all the addonds
}

//All the configuration will be here can be object or function in order to pass the enviroment
module.exports = (env) => {
  console.log(env)

  //The env variable will determinate the config to use by the environment
  const envConfig = require(`./build-utils/webpack.${env.env}.js`)

  //merge all the configuration in one
  const mergedConfig = webpackMerge(commonConfig, envConfig, ...addons(env.addons))
  //console.log(mergedConfig)

  //This is were all the file to be introduce in the bundle file
  return mergedConfig
}