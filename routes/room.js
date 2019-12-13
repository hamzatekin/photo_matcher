var express = require('express')
var router = express.Router()
var iom = require('../app').io

const log = (req, res, next) => {
  console.log('logging')
  iom.on('connection', function (socket) {
    console.log('user connected')
  })
  next()
}

router.get('/', log, function (req, res, next) {
  var bod1 = { info1: req.body }
  res.render('index', bod1)
})

module.exports = router
