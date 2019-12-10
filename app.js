var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var usersRouter = require('./routes/users')
var roomRouter = require('./routes/room')

var app = express()
var server = require('http').createServer(app)
var io = require('socket.io')(server)

var indexRouter = require('./routes/index')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
/* io.on('connection', (socket) => {
  console.log('whatsupp!', socket.id)
}) */
app.get('/users', function (req, res, next) {
  res.render('room')
})
app.use('/room', roomRouter)
io.on('connection', (socket) => {
  console.log('whatsupp!', socket.id)
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = { app: app, server: server, io: io }
