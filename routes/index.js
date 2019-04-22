'use strict';

const debug = require('debug')('gh-database-api:routes');
const express = require('express');
const githubBackend = require('../lib/githubBackend');

const router = express.Router();

router.post('/create', async (req, res) => {
  debug('INCOMING_REQUEST_CREATE');
  githubBackend.addEntry();
  res.send(200);
});

module.exports = router;
