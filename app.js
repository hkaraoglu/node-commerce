var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var routes = require('./routes.js');
var mongoUtil = require( './data/mongo' );

mongoUtil.connectToServer( function( err, client ) {
    if (err) console.log(err);

} );
var app = express();
var router = express.Router();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
var  languageTranslator = require('language-translator');
app.use(languageTranslator.init(
    {
        langs          : ["tr", "en"],
        defaultLang    : "en",
        cookieName     : "lang",
        equalizeKeys   : true,
        translate      : false
    }));



app.use('/', routes);


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

const port = 3008;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
