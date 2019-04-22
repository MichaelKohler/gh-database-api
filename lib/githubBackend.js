'use strict';

const debug = require('debug')('gh-database-api:lib:githubBackend');
const Octokit = require('@octokit/rest');
const config = require('./config');

const octokit = new Octokit({
  auth: config.githubToken,
});

module.exports = {
  addEntry,
};

async function addEntry(entry) {
  debug('ADDING_GITHUB_DB_ENTRY');
  debug('TODO: Getting correct file content');

  debug('TODO: Adjusting new file content');

  debug('TODO: Uploading new file');

  return;
}
