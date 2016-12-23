var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send(' CHANGING NOW . From Docker. Adding Jenkins. Someword.')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

