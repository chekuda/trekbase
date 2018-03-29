import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import staticRoutes from './routes'

const isDev = process.env.ENV !== 'prod'

const port = process.env.PORT || 3000

const server = express()

if (isDev) {
  require('./middleware/ExpressWebpack')(server)
}

// So we can parse JSON requests.
server.use(bodyParser.json())

// Encode the characters.
server.use(bodyParser.urlencoded({ extended: true }))

// Lets make our express server bit more secure!
server.use(morgan('dev'))

// Lets make our assets in dist static
server.use('/static/', express.static('dist'))

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
