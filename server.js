var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dbHandler = require('./services/dbHandlerService');
const apiV1Router = require('./routes/v1/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1', apiV1Router);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// , t = new Twitter({
//   consumer_key: 'xreErlFjEkJMQDN4gGyP7Yg5s',
//   consumer_secret: '9lZ6CCxRGCQqImDNn174rPjjFCwZM9bY83c2kJdNfB3V4J2q4W',
//   token: 'xreErlFjEkJMQDN4gGyP7Yg5s',
//   token_secret: 'VOvivyOYyMyQV1kbVFmsH1111BsKhm5CAOJMIitq4SK9s'
// })
dbHandler.find();

module.exports = app;
