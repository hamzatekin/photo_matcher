var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  /* io.on('connection', function (socket) {
     console.log('a user connected')
   }) */

  // res.io.emit('socketToMe', 'users')
  res.render('index', { title: 'Express' })
})

module.exports = router
