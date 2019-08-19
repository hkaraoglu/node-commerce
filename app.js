const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const routes = require('./routes.js');
const mongoUtil = require( './data/mongo' );
const session = require('express-session')
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const config = require('./config');
const app = express();
const router = express.Router();

mongoUtil.connectToServer( function( err, client ) {
    if (err) console.log(err);

} );

mongoose.connect('mongodb://localhost:27017/local', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;

app.use(cookieParser());
app.use(session({
    secret: 'a3lllfmanfndf',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: db })
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const  languageTranslator = require('language-translator');
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

const port = process.env.PORT || 3008;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
