var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/signup');
var findRouter = require('./routes/signin');
var feedRouter = require('./routes/Feed');
var FeedsRouter = require('./routes/Feeds');
var LikeRouter = require('./routes/like');
var Comments = require("./routes/Comments")

var UploadImg = require('./routes/uploadImg');
var UpdateUser = require('./routes/updateUser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/find', findRouter);
app.use('/feed', feedRouter);
app.use('/feeds', FeedsRouter);
app.use('/like', LikeRouter);
app.use('/img', UploadImg);
app.use('/updateuser', UpdateUser);
app.use('/comments', Comments);

app.use(function (req, res, next) {
  next(createError(404));
});


// serve static assets if in production

if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static('build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'build','index.html'));
  })

}

app.use(function (err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
