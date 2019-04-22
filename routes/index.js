'use strict';

const debug = require('debug')('gh-database-api:routes');
const express = require('express');
const githubBackend = require('../lib/github-backend');

const router = express.Router(); // eslint-disable-line new-cap

const SUCCESS_CODE = 200;

router.post('/create', async (req, res) => {
  debug('INCOMING_REQUEST_CREATE');
  githubBackend.addEntry();
  res.send(SUCCESS_CODE);
});

module.exports = router;
