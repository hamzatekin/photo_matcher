var express = require('express')
var router = express.Router()

const log = (req, res, next) => {
  console.log('logging')
  next()
}

router.get('/', log, function (req, res, next) {
  var bod1 = { info1: req.body }

  res.render('index', bod1)
})

module.exports = router
