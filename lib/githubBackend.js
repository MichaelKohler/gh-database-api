'use strict';

const debug = require('debug')('gh-database-api:lib:githubBackend');
const Octokit = require('@octokit/rest');
const config = require('./config');

const octokit = new Octokit({
  auth: config.githubToken,
});

module.exports = {
  initFile,
  addEntry,
};

async function addEntry(entry) {
  debug('ADDING_GITHUB_DB_ENTRY');
  debug('TODO: Getting correct file content');

  debug('TODO: Adjusting new file content');

  debug('TODO: Uploading new file');

  return;
}

async function initFile() {
  debug('Checking if file already exists');

  let exists = true;
  if (exists) {
    debug('File already exists, all good!');
    return Promise.resolve();
  }

  debug(`${config.dbFile} does not exist yet, creating..`);

  debug('file created successfully!');
}