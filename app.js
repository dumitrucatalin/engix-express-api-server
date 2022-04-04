var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const sequelize = require('./database/db.config');
const Associations = require('./database/associations')();    // load sequelize models associtations

const bodyParser = require('body-parser');
const helmet = require("helmet"); // secure your Express apps by setting various HTTP headers


const reservationsRouter = require('./routes/reservations');


var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(helmet());

app.use(logger('dev'));       // eable logging
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const cors = require('cors');
app.use(cors({ credentials: true, origin: 'http://localhost:4200' }));

app.use('/api/reservations', reservationsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});


sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    console.log('Sequelize inited');
  })
  .catch(err => {
    console.error(err);
  });


module.exports = app;
