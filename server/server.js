import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import exphbs from 'express-handlebars'
import staticRoutes from './routes'
import path from 'path'

const isDev = process.env.ENV !== 'prod'

const port = process.env.PORT || 3000

const server = express()

// Only if we are in dev, require in a custom middleware to add in hot reloading.
if (isDev) {
  require('./middleware/ExpressWebpack').default(server)
}

const layoutsPath = path.join(__dirname, '../dist')

const handlebarsConfig = {
  defaultLayout: 'index',
  layoutsDir: layoutsPath
}

// Tell the server that we are using handlebars to parse templates.
server.engine('handlebars', exphbs(handlebarsConfig))

// So we can parse JSON requests.
server.use(bodyParser.json())

// Encode the characters.
server.use(bodyParser.urlencoded({ extended: true }))

// Set the view to the dist of our index html
server.set('views', layoutsPath)

// Set handle bars to be used in the view and engine
server.set('view engine', 'handlebars')

// Lets make our express server bit more secure!
server.use(morgan('dev'))

// Lets make our assets in dist static
server.use('/static/', express.static('dist'))
server.use('/public', express.static('public'))

// Serve our routes
server.use('/', staticRoutes)

// catch 404 and forward to error handler
server.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Handle internal errors which were missed.
server.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    message: err,
    error: isDev ? err : {}
  })
})

server.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
