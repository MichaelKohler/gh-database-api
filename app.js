'use strict';

const express = require('express');

const index = require('./routes/index');

const app = express();

app.use('/', index);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.json({ err });
});

module.exports = app;
