import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../../../webpack.config'

export default (server) => {
  // Use this middleware to set up hot module reloading via webpack.
  const compiler = webpack(webpackConfig)

  server.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: webpackConfig.output.filename,
    noInfo: true,
    stats: {
      colors: true
    },
    historyApiFallback: true,
    publicPath: webpackConfig.output.publicPath
  }))

  server.use(webpackHotMiddleware(compiler, {
    log: console.log,
    heartbeat: 10 * 1000
  }))
}
