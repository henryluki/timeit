var times = require('./times')

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/keep', function (req, res) {
    var time = req.query.time
    var key = req.query.key
    times.store(key, time)
    console.log(req.query)
    var result = times.average(key)
    console.log(result)
    res.send(result)
})

app.listen(3000, function () {
    console.log('Time it app listening on port 3000!')
})