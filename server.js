const express = require('express')

const server = express()

server.use(express.static(__dirname + '/dist'))

server.get('/', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html')
})

server.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})