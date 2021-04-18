
var createError = require('http-errors');
var express = require('express');
var cors = require('cors')
var path = require('path');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
// var ejs = require('ejs')
var fs = require('fs')
var favicon = require('serve-favicon')
var indexRouter = require('./routes/index');
// var device = require('express-device');
var useragent = require('express-useragent')
// const logger = require('./config/logger')

var app = express();

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cors())


// logger 
var  logSt = fs.createWriteStream(__dirname+'/inf.log',{flags: 'a'})
app.use(morgan('combined',{stream : logSt}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
// app.use(favicon(path.join(__dirname,'/public','favicon.ico')))
// app.use(device.capture())
app.use(useragent.express())
app.use('/', indexRouter);
app.use(favicon(__dirname+'/public/favicon.ico'))



// catch 404 and forward to error handler 
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; 

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

