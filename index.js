'use strict';

const debug = require('debug')('gh-database-api:server');
const http = require('http');
const app = require('./app');
const githubBackend = require('./lib/github-backend');

const port = process.env.PORT || '4567';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, '0.0.0.0');

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  switch (error.code) {
  case 'EACCES':
    console.error(`${bind} requires elevated privileges`);
    throw new Error('EACCES');
  case 'EADDRINUSE':
    console.error(`${bind} is already in use`);
    throw new Error('EADDRINUSE');
  default:
    throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  debug(`Listening on ${bind}`);

  githubBackend.initFile()
    .catch((err) => {
      debug('FILE_EXISTANCE_CHECK_FAILED', err);
      throw new Error('FILE_EXISTANCE_CHECK_FAILED');
    });
}

server.on('error', onError);
server.on('listening', onListening);
