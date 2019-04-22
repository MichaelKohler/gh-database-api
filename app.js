'use strict';

const express = require('express');

const index = require('./routes');

const app = express();

const ERROR_STATUS = 500;

app.use('/', index);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.status(err.status || ERROR_STATUS);
  res.json({ err });
});

module.exports = app;
